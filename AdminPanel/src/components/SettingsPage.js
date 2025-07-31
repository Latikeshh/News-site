import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

const SettingsPage = () => {
  const [siteTitle, setSiteTitle] = useState('News Admin Panel');
  const [theme, setTheme] = useState('light');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const handleSave = () => {
    alert('Settings saved successfully!');
    // You could send these settings to an API here
  };

  const renderTooltip = (text) => (
    <Tooltip>{text}</Tooltip>
    
  );

  return (
    <div style={{ marginLeft: '220px', padding: '1rem' }}>
      <h2 className="mb-4">System Settings</h2>
      <p>Manage your global configurations, appearance preferences, and admin controls.</p>

      <Card className="p-4 shadow-sm">
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="siteTitle">
                <Form.Label>
                  Website Title
                  <OverlayTrigger placement="right" overlay={renderTooltip("Displayed in the top navbar and tab title.")}>
                    <span className="ms-2 text-info" style={{ cursor: 'pointer' }}></span>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control
                  type="text"
                  value={siteTitle}
                  onChange={(e) => setSiteTitle(e.target.value)}
                  placeholder="Enter your website name"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="themeSelect">
                <Form.Label>
                  Theme
                  <OverlayTrigger placement="right" overlay={renderTooltip("Choose light or dark mode for UI.")}>
                    <span className="ms-2 text-info" style={{ cursor: 'pointer' }}></span>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="itemsPerPage">
                <Form.Label>
                  Items per Page
                  <OverlayTrigger placement="right" overlay={renderTooltip("Set how many records to show per page in tables.")}>
                    <span className="ms-2 text-info" style={{ cursor: 'pointer' }}></span>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control
                  type="number"
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  min="5"
                  max="100"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="maintenanceMode">
                <Form.Label>
                  Maintenance Mode
                  <OverlayTrigger placement="right" overlay={renderTooltip("Toggle to disable public access temporarily.")}>
                    <span className="ms-2 text-info" style={{ cursor: 'pointer' }}></span>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Check
                  type="switch"
                  label={maintenanceMode ? "Enabled" : "Disabled"}
                  checked={maintenanceMode}
                  onChange={() => setMaintenanceMode(!maintenanceMode)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="emailToggle" className="mb-4">
            <Form.Check
              type="switch"
              label="Enable Email Notifications"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSave}>
            Save Settings
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default SettingsPage;