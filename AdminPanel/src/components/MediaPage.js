import React, { useState, useRef } from 'react';
import { Table, Button, Row, Col, Form, Modal } from 'react-bootstrap';

const MediaPage = () => {
  const [mediaFiles, setMediaFiles] = useState([
    { id: 1, name: 'banner.jpg', type: 'Image', uploadedBy: 'Admin', date: '2025-07-20' },
    { id: 2, name: 'promo_video.mp4', type: 'Video', uploadedBy: 'Editor', date: '2025-07-21' },
    { id: 3, name: 'infographic.png', type: 'Image', uploadedBy: 'Admin', date: '2025-07-22' },
  ]);

  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleView = (file) => {
    setSelectedFile(file);
    setShowViewModal(true);
  };

  const handleEdit = (file) => {
    setSelectedFile({ ...file });
    setShowEditModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this file?')) {
      setMediaFiles(mediaFiles.filter((file) => file.id !== id));
    }
  };

  const handleEditSave = () => {
    setMediaFiles((prev) =>
      prev.map((file) => (file.id === selectedFile.id ? selectedFile : file))
    );
    setShowEditModal(false);
  };

  // Upload handler
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const extension = file.name.split('.').pop().toLowerCase();
    let type = 'Other';
    if (['jpg', 'jpeg', 'png', 'gif', 'bmp'].includes(extension)) {
      type = 'Image';
    } else if (['mp4', 'mov', 'avi', 'wmv'].includes(extension)) {
      type = 'Video';
    }

    // Create new media object
    const newMedia = {
      id: mediaFiles.length ? Math.max(...mediaFiles.map(f => f.id)) + 1 : 1,
      name: file.name,
      type,
      uploadedBy: 'You', // Or dynamically set user
      date: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
    };

    setMediaFiles([...mediaFiles, newMedia]);

    // Reset file input so user can upload the same file again if needed
    event.target.value = '';
  };

  return (
    <div style={{ marginLeft: '220px', padding: '1rem' }}>
      <h2 className="mb-4">Media Management</h2>

      <Row className="mb-3">
        <Col>
          <p>
            Manage all uploaded media files including images, videos, and other assets. You can upload new media, delete unwanted files, or view file details here.
          </p>
        </Col>
        <Col className="text-end">
          <Button variant="primary" onClick={() => fileInputRef.current.click()}>
            Upload New Media
          </Button>
          <Form.Control
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileUpload}
            accept="image/*,video/*"
          />
        </Col>
      </Row>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>File Name</th>
            <th>Type</th>
            <th>Uploaded By</th>
            <th>Date Uploaded</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mediaFiles.map((file) => (
            <tr key={file.id}>
              <td>{file.id}</td>
              <td>{file.name}</td>
              <td>{file.type}</td>
              <td>{file.uploadedBy}</td>
              <td>{file.date}</td>
              <td>
                <Button size="sm" variant="info" className="me-2" onClick={() => handleView(file)}>
                  View
                </Button>
                <Button size="sm" variant="warning" className="me-2" onClick={() => handleEdit(file)}>
                  Edit
                </Button>
                <Button size="sm" variant="danger" onClick={() => handleDelete(file.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* View Modal */}
      <Modal show={showViewModal} onHide={() => setShowViewModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View Media</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedFile && (
            <>
              <p><strong>Name:</strong> {selectedFile.name}</p>
              <p><strong>Type:</strong> {selectedFile.type}</p>
              <p><strong>Uploaded By:</strong> {selectedFile.uploadedBy}</p>
              <p><strong>Date:</strong> {selectedFile.date}</p>
              {selectedFile.type === 'Image' && (
                <img
                  src={`https://via.placeholder.com/400x200?text=${selectedFile.name}`}
                  alt={selectedFile.name}
                  className="img-fluid"
                />
              )}
              {selectedFile.type === 'Video' && (
                <video controls className="w-100">
                  <source src="#" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </>
          )}
        </Modal.Body>
      </Modal>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Media</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedFile && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>File Name</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedFile.name}
                  onChange={(e) =>
                    setSelectedFile({ ...selectedFile, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Select
                  value={selectedFile.type}
                  onChange={(e) =>
                    setSelectedFile({ ...selectedFile, type: e.target.value })
                  }
                >
                  <option value="Image">Image</option>
                  <option value="Video">Video</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleEditSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MediaPage;
