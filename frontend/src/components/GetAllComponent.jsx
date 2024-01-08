import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Table, Button, Container, Row, Col, Modal, Card } from 'react-bootstrap';
import InventoryService from '../services/InventoryService';

const customTableClass = "custom-table";

function GetAllComponent() {
  const [originalInventoryItems, setOriginalInventoryItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [inventoryItems, setInventoryItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [searchError, setSearchError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchInventoryItems();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setInventoryItems(originalInventoryItems);
      setSearchError(null);
    } else {
      searchInventoryByName();
    }
  }, [searchTerm, originalInventoryItems]);

  const fetchInventoryItems = async () => {
    try {
      const response = await InventoryService.getItem();
      setOriginalInventoryItems(response.data);
      setInventoryItems(response.data);
    } catch (error) {
      console.error('Error fetching inventory items:', error);
    }
  };

  const searchInventoryByName = async () => {
    try {
      const encodedSearchTerm = encodeURIComponent(searchTerm);
      const response = await InventoryService.searchItemByName(encodedSearchTerm);
      const searchData = response.data;
  
      if (searchData && searchData.length > 0) {
        setInventoryItems(searchData);
        setSearchError(null);
      } else {
        setInventoryItems([]);
        setSearchError('No items found.');
      }
    } catch (error) {
      console.error('Error searching inventory items:', error);
      setSearchError('Error searching items. Please try again.');
    }
  };

  const handleView = (itemId) => {
    console.log('Viewing item with ID:', itemId);
    navigate(`/view-inventory/${itemId}`);
  };

  const handleUpdate = (itemId) => {
    console.log('Updating item with ID:', itemId);
    navigate(`/update-item/${itemId}`);
  };

  const handleDeleteConfirmation = (itemId) => {
    setDeleteItemId(itemId);
    setShowConfirmModal(true);
  };

  const handleDelete = async () => {
    try {
      await InventoryService.deleteItem(deleteItemId);

      setInventoryItems((prevItems) =>
        prevItems.filter((item) => item.id !== deleteItemId)
      );

      setDeleteItemId(null);
      setShowConfirmModal(false);
      setShowModal(true);
      console.log(`Delete item with ID: ${deleteItemId}`);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false);
    setDeleteItemId(null);
  };

  return (
    <Container className="vh-100 d-flex flex-column mb-5">
      <Row className="justify-content-between align-items-center mb-5 mt-5">
        <Col>
          <h2>WELCOME</h2>
        </Col>
        <Col xs="auto">
          <div className="d-flex">
            <input
              style={{ backgroundColor: '#F8FAE5', borderColor: '#F8FAE5', color: '#F8FAE5' }}
              type="text"
              placeholder="Search by Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              variant="primary"
              className="ms-2"
              onClick={() => {
                setSearchTerm('');
                fetchInventoryItems();
              }}
              style={{ backgroundColor: '#820300', borderColor: '#820300', color: '#F8FAE5' }}
            >
              Reset Search
            </Button>
          </div>
        </Col>
        <Col xs="auto">
          <Link to="/create-inventory">
            <Button variant="success" style={{ backgroundColor: '#43766C', borderColor: '#43766C', color: '#F8FAE5' }}>Create Item</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <p>This is an inventory site of woodcraft haven, a woodworking shop that sells everything you can imagine made by wood.</p>
      </Row>
      <Card>
        <Card.Body style={{ backgroundColor: '#284640'}}>
          {searchError && <p className="text-danger">{searchError}</p>}
          {Array.isArray(inventoryItems) && inventoryItems.length > 0 ? (
            <Table bordered striped responsive="md" className={`${customTableClass} table-hover`}>
              <thead className="table-primary">
                <tr>
                  <th>Nama Barang</th>
                  <th>Jumlah</th>
                  <th>Harga Satuan</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventoryItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.nama_barang}</td>
                    <td>{item.jumlah}</td>
                    <td>{item.harga_satuan}</td>
                    <td className="d-flex justify-content-center">
                      <Button className="me-2" style={{ backgroundColor: '#43766C', borderColor: '#43766C', color: '#F8FAE5' }} onClick={() => handleView(item.id)}>
                        View
                      </Button>
                      <Button className="me-2" style={{ backgroundColor: '#43766C', borderColor: '#43766C', color: '#F8FAE5' }} onClick={() => handleUpdate(item.id)}>
                        Edit
                      </Button>
                      <Button style={{ backgroundColor: '#820300', borderColor: '#820300', color: '#F8FAE5' }} onClick={() => handleDeleteConfirmation(item.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No items available.</p>
          )}
        </Card.Body>
      </Card>
      <Modal show={showConfirmModal} onHide={handleCloseConfirmModal} centered>
        <Modal.Header closeButton style={{ backgroundColor: '#43766C', color: '#F8FAE5' }}>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#F8FAE5', color: '#76453B' }}>
          Are you sure you want to delete this item?
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#F8FAE5', color: '#76453B' }}>
          <Button style={{ backgroundColor: '#43766C', borderColor: '#43766C', color: '#F8FAE5' }} onClick={handleCloseConfirmModal}>
            Cancel
          </Button>
          <Button style={{ backgroundColor: '#820300', borderColor: '#820300', color: '#F8FAE5' }} onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton style={{ backgroundColor: '#43766C', color: '#F8FAE5' }}>
          <Modal.Title>Item Deleted</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#F8FAE5', color: '#76453B' }}>
          Item has been successfully deleted.
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#F8FAE5', color: '#76453B' }}>
          <Button style={{ backgroundColor: '#820300', borderColor: '#820300', color: '#F8FAE5' }} onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
}

export default GetAllComponent;
