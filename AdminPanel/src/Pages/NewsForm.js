import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Update.css"; // glassy dark theme CSS

const NewsForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [publishedAt, setPublishedAt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/category")
      .then((res) => setCategoriesList(res.data))
      .catch((err) => console.error("Error fetching categories:", err));

    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setAuthor(storedUsername);
    }
  }, []);

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

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("content", content);
      formData.append("author", author);
      formData.append("category", category);
      tags.forEach((tag) => formData.append("tags", tag));
      if (publishedAt) formData.append("publishedAt", publishedAt);
      if (image) formData.append("image", image);

      const config = { headers: { "Content-Type": "multipart/form-data" } };

      const response = await axios.post(
        "http://localhost:8000/register-news",
        formData,
        config
      );

      if (response.status === 200 || response.status === 201) {
        alert("News submitted successfully!");
        resetForm();
        navigate("/newslist");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting news:", error);
      alert("Error: " + error.message);
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
    setTags([]);
    setPublishedAt("");
    setImage(null);
  };

  return (
    <div className="update-container">
      <div className="update-card">
        <h2 className="update-title">Add News</h2>
        <form onSubmit={handleSubmit} className="update-form">
          
          <div className="update-field">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter news title"
              value={title}
              required
              maxLength={200}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="update-field">
            <label>Slug</label>
            <input
              type="text"
              placeholder="Enter slug (unique)"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>

          <div className="update-field">
            <label>Content</label>
            <textarea
              rows="5"
              placeholder="Enter news content"
              value={content}
              required
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className="update-row">
            <div className="update-field">
              <label>Author</label>
              <input
                type="text"
                value={author}
                disabled
                onClick={() => {
                  const role = localStorage.getItem("role");
                  if (role === "editor") {
                    alert("You are an editor. Author name is auto-filled and cannot be changed.");
                  }
                }}
              />
            </div>

            <div className="update-field">
              <label>
                Category <span className="required">*</span>
              </label>
              <select
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

          <div className="update-field">
            <label>Tags (comma separated)</label>
            <input
              type="text"
              placeholder="e.g. politics,world,tech"
              value={tags.join(", ")}
              onChange={handleTagsChange}
            />
          </div>

          <div className="update-field">
            <label>Publish Date</label>
            <input
              type="date"
              value={publishedAt}
              onChange={(e) => setPublishedAt(e.target.value)}
            />
          </div>

          <div className="update-field">
            <label>Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <button type="submit" className="update-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit News"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsForm;
