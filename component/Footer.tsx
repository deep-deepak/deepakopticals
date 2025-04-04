// components/Footer.jsx
import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Facebook, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const iconStyle = {
        width: 18,
        height: 18,
        color: 'white'
    };

    const socialIconStyle = {
        backgroundColor: '#FF6C22',
        width: 36,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        color: 'white',
        transition: 'background-color 0.3s ease'
    };

    return (
        <footer className="bg-dark text-white py-5">
            <Container>
                {/* Logo and About Section */}
                <Row className="mb-5">
                    <Col lg={4} className="mb-4 mb-lg-0 text-center text-lg-start">
                        <Link href="/" className="d-inline-block mb-4">
                            <div style={{ position: 'relative', width: 160, height: 80 }}>
                                <Image
                                    src="/logo.png"
                                    alt="NAZAR"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                />
                            </div>
                        </Link>
                        <p className="text-white mb-4 text-white">
                            I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                        </p>
                        <p className="small text-white">Copyright © All Rights Reserved</p>
                    </Col>

                    {/* Social and Newsletter */}
                    <Col lg={8}>
                        <Row>
                            <Col md={6} className="mb-4">
                                <h5 className="fw-bold mb-4">Follow Us</h5>
                                <div className="d-flex gap-2">
                                    <a href="https://facebook.com" style={socialIconStyle} className="hover-effect">
                                        <Facebook style={iconStyle} />
                                    </a>
                                    <a href="https://twitter.com" style={socialIconStyle} className="hover-effect">
                                        <Twitter style={iconStyle} />
                                    </a>
                                    <a href="https://youtube.com" style={socialIconStyle} className="hover-effect">
                                        <Youtube style={iconStyle} />
                                    </a>
                                    <a href="https://linkedin.com" style={socialIconStyle} className="hover-effect">
                                        <Linkedin style={iconStyle} />
                                    </a>
                                    <a href="mailto:info@example.com" style={socialIconStyle} className="hover-effect">
                                        <Mail style={iconStyle} />
                                    </a>
                                </div>
                            </Col>
                            <Col md={6} className="mb-4">
                                <h5 className="fw-bold mb-4">Newsletter</h5>
                                <InputGroup>
                                    <Form.Control
                                        placeholder="Email"
                                        aria-label="Email for newsletter"
                                        className="bg-white text-dark"
                                    />
                                    <Button variant="primary" style={{ backgroundColor: '#FF6C22', borderColor: '#FF6C22' }}>
                                        <Mail size={16} />
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Row>

                        {/* Links Sections */}
                        <Row>
                            <Col md={4} className="mb-4 mb-md-0">
                                <h5 className="fw-bold mb-4">Product</h5>
                                <ul className="list-unstyled">
                                    {['Discount', 'New Arrival', 'Best Selling', 'Hot Deals'].map(item => (
                                        <li key={item} className="mb-2">
                                            <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-decoration-none text-white d-flex align-items-center">
                                                <span style={{ color: '#FF6C22', marginRight: 8 }}>✓</span>
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            <Col md={4} className="mb-4 mb-md-0">
                                <h5 className="fw-bold mb-4">Help Center</h5>
                                <ul className="list-unstyled">
                                    {['Returns', 'Shipping', 'Payments', 'Reset Password'].map(item => (
                                        <li key={item} className="mb-2">
                                            <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-decoration-none text-white d-flex align-items-center">
                                                <span style={{ color: '#FF6C22', marginRight: 8 }}>✓</span>
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            <Col md={4}>
                                <h5 className="fw-bold mb-4">Contact Us</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-3 d-flex align-items-center text-white">
                                        <Phone style={{ ...iconStyle, color: '#FF6C22', marginRight: 10 }} />
                                        +61 089 988 8722
                                    </li>
                                    <li className="mb-3 d-flex align-items-center text-white">
                                        <Mail style={{ ...iconStyle, color: '#FF6C22', marginRight: 10 }} />
                                        info@yourmail.com
                                    </li>
                                    <li className="mb-3 d-flex align-items-center text-white">
                                        <MapPin style={{ ...iconStyle, color: '#FF6C22', marginRight: 10 }} />
                                        890 Street Village, Atlanta, Italy
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            {/* Custom CSS */}
            <style jsx global>{`
        .hover-effect:hover {
          background-color: #e55a15 !important;
          transform: translateY(-3px);
          transition: all 0.3s ease;
        }
        footer a:hover {
          color: #FF6C22 !important;
          transition: color 0.3s ease;
        }
      `}</style>
        </footer>
    );
};

export default Footer;