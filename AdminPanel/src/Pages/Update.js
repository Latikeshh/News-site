import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Update.css"; // Dark theme

const Update = () => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [publishedAt, setPublishedAt] = useState("");
  const [image, setImage] = useState(null);
  const [categoriesList, setCategoriesList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/category")
      .then((res) => setCategoriesList(res.data))
      .catch((err) => console.error("Error fetching categories:", err));

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/get/${_id}`);
      const userData = response.data.userData;

      setTitle(userData.title || "");
      setSlug(userData.slug || "");
      setContent(userData.content || "");
      setAuthor(userData.author || "");
      setCategory(userData.category || "");
      setTags(
        Array.isArray(userData.tags)
          ? userData.tags
          : userData.tags
          ? userData.tags.split(",")
          : []
      );
      setPublishedAt(
        userData.publishedAt ? userData.publishedAt.split("T")[0] : ""
      );
      setImage(userData.image || null);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleTagsChange = (e) => {
    const input = e.target.value;
    const tagsArray = input
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
    setTags(tagsArray);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("content", content);
    formData.append("author", author);
    formData.append("category", category);
    tags.forEach((tag) => formData.append("tags", tag));
    if (publishedAt) formData.append("publishedAt", publishedAt);
    if (image instanceof File) {
      formData.append("image", image);
    }

    try {
      const response = await axios.put(
        `http://localhost:8000/updatedata/${_id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert(response.data.message || "Data updated successfully");
      navigate("/dashboard");
    } catch (err) {
      console.error("Error updating:", err);
      alert("Failed to update data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container u-update">
      <div className="row vh-100 d-flex justify-content-center align-items-center">
        <div className="col-md-10 col-lg-8 col-12">
          <div className="card shadow border-0">
            <div className="card-body">
              <h2 className="fw-bold mb-4">Update News</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="Title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Title"
                    placeholder="Enter news title"
                    value={title}
                    required
                    maxLength={200}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="Slug" className="form-label">
                    Slug
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Slug"
                    placeholder="Enter slug (unique)"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="Content" className="form-label">
                    Content
                  </label>
                  <textarea
                    className="form-control"
                    id="Content"
                    rows="5"
                    placeholder="Enter news content"
                    value={content}
                    required
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="row">
                  <div className="col mb-3">
                    <label className="form-label">
                      Author
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Author"
                      placeholder="Author name"
                      value={author}
                      disabled
                      onClick={() => {
                        const role = localStorage.getItem("role");
                        if (role === "editor") {
                          alert(
                            "You are an editor. Author name is auto-filled and cannot be changed."
                          );
                        }
                      }}
                    />
                  </div>

                  <div className="col mb-3">
                    <label className="form-label">
                      Category <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
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

                <div className="mb-3">
                  <label htmlFor="Tags" className="form-label">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Tags"
                    placeholder="e.g. politics,world,tech"
                    value={tags.join(", ")}
                    onChange={handleTagsChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="PublishedAt" className="form-label">
                    Publish Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="PublishedAt"
                    value={publishedAt}
                    onChange={(e) => setPublishedAt(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="Image" className="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="Image"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  {image && typeof image === "string" && (
                    <div className="mt-2">
                      <img
                        src={`http://localhost:8000/${image}`}
                        alt="Preview"
                        width="120"
                        className="border rounded"
                      />
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update News"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
