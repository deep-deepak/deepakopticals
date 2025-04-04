import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Nav, Container, Form, FormControl, Button, Dropdown, InputGroup } from 'react-bootstrap';
import { ShoppingCart, Search, Menu, X, Phone, ChevronDown, PoundSterling, Heart, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    // Animation for navbar on scroll
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // Simulate cart update for demo purposes
    useEffect(() => {
        const timer = setTimeout(() => {
            setCartCount(2);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <header className={`sticky-top ${scrolled ? 'scrolled' : ''}`}>
            {/* Announcement Bar with animation */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 40, opacity: 1 }}
                className="bg-gradient-dark text-center py-2"
            >
                <Container>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-0 text-white fw-medium"
                    >
                        <span className="highlight-text">NEW COLLECTION</span> — Free shipping on all orders over £50
                    </motion.p>
                </Container>
            </motion.div>

            {/* Top bar with quote, logo and call options - White background */}
            <div className={`bg-white py-3 ${scrolled ? 'py-md-2' : 'py-md-3'}`}>
                <Container>
                    <div className="d-flex justify-content-between align-items-center">
                        {/* Price Quote Section - Hidden on mobile */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="d-none d-md-flex align-items-center"
                        >
                            <div className="icon-circle bg-gradient-orange d-flex align-items-center justify-content-center me-3">
                                <PoundSterling size={24} color="white" />
                            </div>
                            <div>
                                <h5 className="mb-0 fw-bold">WANT AN APPROXIMATE PRICE?</h5>
                                <p className="mb-0 text-secondary hover-link">GET A FREE QUOTE →</p>
                            </div>
                        </motion.div>

                        {/* Logo - Center aligned on mobile */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.2
                            }}
                            className="mx-auto mx-md-0"
                            style={{ width: '160px', height: '100px', position: 'relative' }}
                        >
                            <Image
                                src="/logo2.png"
                                alt="NAZAR"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                                className="logo-glow"
                            />
                        </motion.div>

                        {/* Call Us Section - Hidden on mobile */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="d-none d-md-flex align-items-center"
                        >
                            <div className="icon-circle bg-gradient-orange d-flex align-items-center justify-content-center me-3">
                                <Phone size={24} color="white" />
                            </div>
                            <div>
                                <h5 className="mb-0 fw-bold">CALL US NOW</h5>
                                <motion.p
                                    whileHover={{ scale: 1.05 }}
                                    className="mb-0 text-secondary hover-link"
                                >
                                    +44 7735599554
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </div>

            {/* Animated separator line */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: '4px' }}
                className="bg-gradient-orange"
            ></motion.div>

            {/* Main Navigation - Black background */}
            <Navbar
                expand="lg"
                variant="dark"
                expanded={expanded}
                onToggle={setExpanded}
                className={`py-2 border-bottom border-secondary nav-bg ${scrolled ? 'nav-scrolled' : ''}`}
            >
                <Container className="position-relative">
                    {/* Empty div to maintain flex spacing */}
                    <div className="d-lg-none"></div>

                    <Navbar.Collapse id="navbar-nav">
                        {/* Navigation Links */}
                        <Nav className="mx-auto">
                            <NavItem href="/" active text="HOME" />

                            {/* Shop Dropdown */}
                            <Dropdown as={Nav.Item}>
                                <Dropdown.Toggle
                                    as={Nav.Link}
                                    className="d-flex align-items-center nav-link-custom fw-medium px-3"
                                >
                                    SHOP <ChevronDown size={16} className="ms-1 nav-icon" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-custom">
                                    <motion.div
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ staggerChildren: 0.1 }}
                                    >
                                        <Dropdown.Item href="/shop/men" className="dropdown-item-custom">Men's Collection</Dropdown.Item>
                                        <Dropdown.Item href="/shop/women" className="dropdown-item-custom">Women's Collection</Dropdown.Item>
                                        <Dropdown.Item href="/shop/accessories" className="dropdown-item-custom">Accessories</Dropdown.Item>
                                    </motion.div>
                                </Dropdown.Menu>
                            </Dropdown>

                            <NavItem href="/about" text="ABOUT" active={undefined} />
                            <NavItem href="/blog" text="BLOG" active={undefined} />
                            <NavItem href="/contact-us" text="CONTACT US" active={undefined} />
                        </Nav>

                        {/* Search and Cart */}
                        <div className="d-flex align-items-center mt-3 mt-lg-0">
                            {/* Search Form - Hidden on mobile, visible on md+ */}
                            <motion.div
                                initial={{ opacity: 0, width: "80%" }}
                                animate={{ opacity: 1, width: "100%" }}
                                transition={{ delay: 0.8 }}
                                className="d-none d-md-block me-2"
                            >
                                <InputGroup>
                                    <FormControl
                                        placeholder="Search products..."
                                        className="search-input"
                                    />
                                    <Button
                                        variant="outline-secondary"
                                        className="search-button"
                                    >
                                        <Search size={16} />
                                    </Button>
                                </InputGroup>
                            </motion.div>

                            {/* Wishlist */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="position-relative ms-2 d-none d-md-block"
                            >
                                <Button
                                    variant="link"
                                    className="text-orange p-1 nav-icon-button"
                                >
                                    <Heart size={20} />
                                </Button>
                            </motion.div>

                            {/* Account */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="position-relative ms-2 d-none d-md-block"
                            >
                                <Button
                                    variant="link"
                                    className="text-orange p-1 nav-icon-button"
                                >
                                    <User size={20} />
                                </Button>
                            </motion.div>

                            {/* Cart */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="position-relative ms-2"
                            >
                                <Button
                                    variant="link"
                                    className="text-orange p-1 position-relative nav-icon-button"
                                >
                                    <ShoppingCart size={20} />
                                    <AnimatePresence>
                                        {cartCount > 0 && (
                                            <motion.span
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-pulse"
                                            >
                                                {cartCount}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Search form for mobile only */}
                        <div className="d-md-none mt-3">
                            <InputGroup>
                                <FormControl
                                    placeholder="Search products..."
                                    className="search-input"
                                />
                                <Button
                                    variant="outline-secondary"
                                    className="search-button"
                                >
                                    <Search size={16} />
                                </Button>
                            </InputGroup>
                        </div>
                    </Navbar.Collapse>

                    {/* Mobile Toggle Button - Positioned to the right */}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Navbar.Toggle
                            aria-controls="navbar-nav"
                            className="border-0 p-1 position-absolute hamburger-toggle"
                            style={{ right: '15px', top: '15px' }}
                        >
                            {expanded ? (
                                <X size={24} className="toggle-icon" />
                            ) : (
                                <Menu size={24} className="toggle-icon" />
                            )}
                        </Navbar.Toggle>
                    </motion.div>
                </Container>
            </Navbar>

            {/* Custom CSS */}
            <style jsx global>{`
                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(255, 108, 34, 0.7); }
                    70% { box-shadow: 0 0 0 10px rgba(255, 108, 34, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(255, 108, 34, 0); }
                }
                
                @keyframes shimmer {
                    0% { background-position: -100% 0; }
                    100% { background-position: 200% 0; }
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .text-orange {
                    color: #FF6C22 !important;
                }
                
                .bg-orange {
                    background-color: #FF6C22 !important;
                }
                
                .bg-gradient-orange {
                    background: linear-gradient(45deg, #FF6C22, #FF9A5A) !important;
                    box-shadow: 0 4px 12px rgba(255, 108, 34, 0.2);
                }
                
                .bg-gradient-dark {
                    background: linear-gradient(to right, #1a1a1a, #333333) !important;
                }
                
                .nav-bg {
                    background: linear-gradient(180deg, #000000, #1a1a1a) !important;
                    transition: all 0.3s ease;
                }
                
                .nav-scrolled {
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                    padding-top: 0.5rem !important;
                    padding-bottom: 0.5rem !important;
                }
                
                .scrolled .icon-circle {
                    transform: scale(0.9);
                    transition: transform 0.3s ease;
                }
                
                .highlight-text {
                    background: linear-gradient(120deg, #FF6C22, #FFC107);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-weight: bold;
                    padding: 0 5px;
                }
                
                .nav-link-custom {
                    position: relative;
                    color: white !important;
                    transition: color 0.3s ease;
                    overflow: hidden;
                }
                
                .nav-link-custom:hover {
                    color: #FF6C22 !important;
                }
                
                .nav-link-custom:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #FF6C22;
                    transform: scaleX(0);
                    transform-origin: right;
                    transition: transform 0.3s ease;
                }
                
                .nav-link-custom:hover:after {
                    transform: scaleX(1);
                    transform-origin: left;
                }
                
                .active-nav-link:after {
                    transform: scaleX(1);
                }
                
                .dropdown-menu-custom {
                    background: rgba(33, 37, 41, 0.95);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255, 108, 34, 0.2);
                    border-radius: 8px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                    padding: 0.5rem;
                    margin-top: 0.5rem;
                    animation: fadeIn 0.3s ease forwards;
                }
                
                .dropdown-item-custom {
                    color: white !important;
                    border-radius: 6px;
                    padding: 0.7rem 1.2rem;
                    transition: all 0.2s ease;
                }
                
                .dropdown-item-custom:hover {
                    background: rgba(255, 108, 34, 0.2) !important;
                    color: #FF6C22 !important;
                    transform: translateX(5px);
                }
                
                .search-input {
                    background: rgba(33, 37, 41, 0.8);
                    border: 1px solid rgba(255, 108, 34, 0.3);
                    border-right: none;
                    border-radius: 30px 0 0 30px;
                    color: white;
                    padding-left: 1rem;
                    transition: all 0.3s ease;
                }
                
                .search-input:focus {
                    background: rgba(33, 37, 41, 0.9);
                    border-color: #FF6C22;
                    box-shadow: 0 0 0 3px rgba(255, 108, 34, 0.25);
                }
                
                .search-button {
                    background: rgba(33, 37, 41, 0.8);
                    border: 1px solid rgba(255, 108, 34, 0.3);
                    border-left: none;
                    border-radius: 0 30px 30px 0;
                    color: #FF6C22;
                    transition: all 0.3s ease;
                }
                
                .search-button:hover {
                    background: rgba(255, 108, 34, 0.2);
                }
                
                .icon-circle {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                }
                
                .icon-circle:hover {
                    transform: scale(1.05);
                    box-shadow: 0 0 15px rgba(255, 108, 34, 0.5);
                }
                
                .nav-icon {
                    transition: transform 0.3s ease;
                }
                
                .nav-link-custom:hover .nav-icon {
                    transform: rotate(180deg);
                }
                
                .nav-icon-button {
                    background: transparent;
                    transition: all 0.3s ease;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .nav-icon-button:hover {
                    background: rgba(255, 108, 34, 0.1);
                    color: #FF6C22 !important;
                }
                
                .badge-pulse {
                    background: linear-gradient(45deg, #FF6C22, #FFC107);
                    color: white;
                    font-weight: bold;
                    animation: pulse 1.5s infinite;
                }
                
                .logo-glow {
                    filter: drop-shadow(0 0 5px rgba(255, 108, 34, 0.3));
                    transition: filter 0.3s ease;
                }
                
                .logo-glow:hover {
                    filter: drop-shadow(0 0 10px rgba(255, 108, 34, 0.5));
                }
                
                .hover-link {
                    position: relative;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                
                .hover-link:hover {
                    color: #FF6C22 !important;
                }
                
                .hamburger-toggle {
                    z-index: 1050;
                }
                
                .toggle-icon {
                    color: #FF6C22;
                    transition: all 0.3s ease;
                }
                
                .dropdown-toggle::after {
                    display: none;
                }
                
                .sticky-top {
                    position: sticky;
                    top: 0;
                    z-index: 1030;
                    transition: all 0.3s ease;
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

// Custom Nav Item Component with Hover Animation
const NavItem = ({ href, text, active }) => {
    return (
        <Nav.Item>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Nav.Link
                    href={href}
                    className={`nav-link-custom fw-medium px-3 ${active ? 'text-orange active-nav-link' : ''}`}
                >
                    {text}
                </Nav.Link>
            </motion.div>
        </Nav.Item>
    );
};

export default Header;