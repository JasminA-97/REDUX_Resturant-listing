import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
     <footer className="footer bg-dark text-white mt-5">
      <Container>
        <Row className="py-4">
          <Col md="3">
            <h5 style={{color:'orange'}}>Restaurant Listing</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/contact" className="text-white">Contact Us</a></li>
            </ul>
          </Col>
          <Col md="3">
            <h5  style={{color:'orange'}}>Services</h5>
            <ul className="list-unstyled">
              <li><a href="/restaurants" className="text-white">Find Restaurants</a></li>
              <li><a href="/reviews" className="text-white">Read Reviews</a></li>
              <li><a href="/signup" className="text-white">Sign Up</a></li>
            </ul>
          </Col>
          <Col md="3">
            <h5 style={{color:'orange'}}>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="/privacy" className="text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-white">Terms of Service</a></li>
            </ul>
          </Col>
          <Col md="3">
            <h5  style={{color:'orange'}}>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com" className="text-white">Facebook</a></li>
              <li><a href="https://www.twitter.com" className="text-white">Twitter</a></li>
              <li><a href="https://www.instagram.com" className="text-white">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p>&copy; {new Date().getFullYear()} Restaurant Listing. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  )
}

export default Footer