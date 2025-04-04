import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Nav, Container, Form, FormControl, Button, Dropdown, InputGroup } from 'react-bootstrap';
import { ShoppingCart, Search, Menu, X, Phone, ChevronDown, PoundSterling } from 'lucide-react';
import BlinkingText from '@/common/BlinkingText';

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <header className="sticky-top">
            {/* Top bar with quote, logo and call options - White background */}
            <div className="bg-white py-3">
                <Container>
                    <div className="d-flex justify-content-between align-items-center">
                        {/* Price Quote Section - Hidden on mobile */}
                        <div className="d-none d-md-flex align-items-center">
                            <div className="rounded-circle bg-orange d-flex align-items-center justify-content-center me-3" style={{ width: '56px', height: '56px' }}>
                                <PoundSterling size={24} color="white" />
                            </div>
                            <div>
                                <h5 className="mb-0 fw-bold">WANT AN APPROXIMATE PRICE?</h5>
                                <p className="mb-0 text-secondary">GET A FREE QUOTE →</p>
                            </div>
                        </div>

                        {/* Logo - Center aligned on mobile */}
                        <div className="mx-auto mx-md-0" style={{ width: '160px', height: '100px', position: 'relative' }}>
                            <Image
                                src="/logo2.png"
                                alt="NAZAR"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>

                        {/* Call Us Section - Hidden on mobile */}
                        <div className="d-none d-md-flex align-items-center">
                            <div className="rounded-circle bg-orange d-flex align-items-center justify-content-center me-3" style={{ width: '56px', height: '56px' }}>
                                <Phone size={24} color="white" />
                            </div>
                            <div>
                                <h5 className="mb-0 fw-bold">CALL US NOW</h5>
                                <p className="mb-0 text-secondary">+44 7735599554</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Orange separator line */}
            <div className="bg-orange" style={{ height: '4px' }}></div>

            {/* Main Navigation - Black background */}
            <Navbar
                expand="lg"
                bg="black"
                variant="dark"
                expanded={expanded}
                onToggle={setExpanded}
                className="py-2 border-bottom border-secondary"
            >
                <Container className="position-relative">
                    {/* Empty div to maintain flex spacing */}
                    <div className="d-lg-none"></div>

                    <Navbar.Collapse id="navbar-nav">
                        {/* Navigation Links */}
                        <Nav className="mx-auto">
                            <Nav.Link href="/" className="text-orange fw-medium px-3">HOME</Nav.Link>

                            {/* Shop Dropdown */}
                            <Dropdown as={Nav.Item}>
                                <Dropdown.Toggle
                                    as={Nav.Link}
                                    className="d-flex align-items-center hover-orange fw-medium px-3"
                                >
                                    SHOP <ChevronDown size={16} className="ms-1" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="bg-dark">
                                    <Dropdown.Item href="/shop/men" className="text-light hover-bg-dark">Men's Collection</Dropdown.Item>
                                    <Dropdown.Item href="/shop/women" className="text-light hover-bg-dark">Women's Collection</Dropdown.Item>
                                    <Dropdown.Item href="/shop/accessories" className="text-light hover-bg-dark">Accessories</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Nav.Link href="/about" className="hover-orange fw-medium px-3">ABOUT</Nav.Link>
                            <Nav.Link href="/blog" className="hover-orange fw-medium px-3">BLOG</Nav.Link>
                            <Nav.Link href="/contact-us" className="hover-orange fw-medium px-3">CONTACT US</Nav.Link>
                        </Nav>

                        {/* Search and Cart */}
                        <div className="d-flex align-items-center mt-3 mt-lg-0">
                            {/* Search Form - Hidden on mobile, visible on md+ */}
                            <div className="d-none d-md-block me-2">
                                <InputGroup>
                                    <FormControl
                                        placeholder="Search products..."
                                        className="bg-dark border-secondary rounded-pill rounded-end-0 text-light"
                                    />
                                    <Button
                                        variant="outline-secondary"
                                        className="bg-dark border-secondary rounded-pill rounded-start-0 text-orange"
                                    >
                                        <Search size={16} />
                                    </Button>
                                </InputGroup>
                            </div>

                            {/* Cart */}
                            <div className="position-relative ms-2">
                                <Button
                                    variant="link"
                                    className="text-orange p-1 position-relative"
                                >
                                    <ShoppingCart size={20} />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-orange">
                                        0
                                    </span>
                                </Button>
                            </div>
                        </div>

                        {/* Search form for mobile only */}
                        <div className="d-md-none mt-3">
                            <InputGroup>
                                <FormControl
                                    placeholder="Search products..."
                                    className="bg-dark border-secondary rounded-pill rounded-end-0 text-light"
                                />
                                <Button
                                    variant="outline-secondary"
                                    className="bg-dark border-secondary rounded-pill rounded-start-0 text-orange"
                                >
                                    <Search size={16} />
                                </Button>
                            </InputGroup>
                        </div>
                    </Navbar.Collapse>

                    {/* Mobile Toggle Button - Positioned to the right */}
                    <Navbar.Toggle
                        aria-controls="navbar-nav"
                        className="border-0 p-1 position-absolute"
                        style={{ right: '15px', top: '15px' }}
                    >
                        {expanded ? (
                            <X size={24} style={{ color: '#FF6C22' }} />
                        ) : (
                            <Menu size={24} style={{ color: '#FF6C22' }} />
                        )}
                    </Navbar.Toggle>
                </Container>
            </Navbar>

            {/* Custom CSS */}
            <style jsx global>{`
                .text-orange {
                    color: #FF6C22 !important;
                }
                .bg-orange {
                    background-color: #FF6C22 !important;
                }
                .hover-orange:hover {
                    color: #FF6C22 !important;
                    transition: color 0.3s;
                }
                .hover-bg-dark:hover {
                    background-color: #212529 !important;
                    color: #FF6C22 !important;
                }
                .dropdown-toggle::after {
                    display: none;
                }
                .sticky-top {
                    position: sticky;
                    top: 0;
                    z-index: 1030;
                }
                
                @media (max-width: 767px) {
                    .container {
                        justify-content: center !important;
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;