import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddNews.css"; // your external CSS

const AddNews = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [publishedAt, setPublishedAt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/category")
      .then((res) => setCategoriesList(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      if (slug) formData.append("slug", slug);
      formData.append("content", content);
      if (author) formData.append("author", author);
      if (category) formData.append("category", category);

      if (tags.trim()) {
        tags.split(",").map((tag) => formData.append("tags", tag.trim()));
      }

      if (publishedAt) formData.append("publishedAt", publishedAt);
      if (image) formData.append("image", image);

      const config = { headers: { "Content-Type": "multipart/form-data" } };

      const response = await axios.post(
        "http://localhost:8000/addnews",
        formData,
        config
      );

      if (response.status === 200 || response.status === 201) {
        alert("News added successfully!");
        resetForm();
        navigate("/news-list");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error while submitting the form:", error);
      alert("Error " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setSlug("");
    setContent("");
    setAuthor("");
    setCategory("");
    setTags("");
    setPublishedAt("");
    setImage(null);
  };

  return (
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-md-10 col-lg-8 col-12">
          <div className="card shadow border-0">
            <div className="card-body">
              <h2 className="fw-bold mb-2 text-uppercase">Add News</h2>
              <p className="mb-4">Fill in the news details below:</p>

              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label">
                      Title <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter title"
                      value={title}
                      required
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Slug (optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter slug"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Content <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Enter content"
                    value={content}
                    required
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label">Author</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter author name"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Category <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required >
                      <option value="">Select category</option>
                      {categoriesList.length > 0 ? (
                        categoriesList.map((cat) => (
                          <option key={cat._id} value={cat.name}>
                            {cat.name}
                          </option>
                        ))
                      ) : (
                        <option disabled>Loading categories...</option>
                      )}
                    </select>
                  </div>

                </div>

                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label">Tags (comma separated)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. politics, sports, entertainment"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Published At</label>
                    <input
                      type="date"
                      className="form-control"
                      value={publishedAt}
                      onChange={(e) => setPublishedAt(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Image <span className="text-danger">*</span>
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                  />
                </div>

                <div className="d-grid mt-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNews;
