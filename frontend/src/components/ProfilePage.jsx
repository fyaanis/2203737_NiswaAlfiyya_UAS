import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function ProfilePage() {
  return (
    <Container className="mt-5 text-center">
      <Row>
          <h2>My Profile</h2>
      </Row>
      <Row className="align-items-center justify-content-center">
          <img
            src="/profile.png"
            alt="Profile"
            className="img-fluid rounded-square mb-3"
            style={{ width: '500%', maxWidth: '500px', height: 'auto' }}
          />
          <p>
            <strong>Name:</strong> Niswa Alfiyya
          </p>
          <p>
            <strong>Student Number:</strong> 2203737
          </p>
          <p>
            <strong>Class:</strong> Computer Science Education - 22 A
          </p>
          <p>
            <strong>Description:</strong> I'm an undergraduate computer science education at the Indonesia University of Education.
            My goal is not just to gain knowledge but to share it, to ignite curiosity, and to mold the minds of future innovators.
            Becoming a lecturer is not merely a profession for me; it's a calling to contribute to the growth and development of the next generation.
          </p>
      </Row>
    </Container>
  );
}

export default ProfilePage;
