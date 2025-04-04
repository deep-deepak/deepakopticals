import React from "react";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ShoppingBag, Phone, Star, ChevronRight } from "lucide-react";

export default function HeroSection() {
    return (
        <div className="position-relative bg-black" style={{
            minHeight: "650px",
            overflow: "hidden",
            backgroundImage: "linear-gradient(45deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)"
        }}>
            {/* Diagonal Pattern Background */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100 opacity-20"
                style={{
                    backgroundImage: "url('/images/bghead.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    mixBlendMode: "overlay"
                }}
            />

            {/* Animated glow effects */}
            <div className="position-absolute" style={{
                top: "10%",
                right: "15%",
                width: "300px",
                height: "300px",
                background: "radial-gradient(circle, rgba(255,108,34,0.2) 0%, rgba(255,108,34,0) 70%)",
                borderRadius: "50%",
                filter: "blur(40px)",
                animation: "float 8s ease-in-out infinite"
            }}></div>

            <Container fluid="lg" className="position-relative py-5" style={{ zIndex: 10 }}>
                <Row className="align-items-center min-vh-75">
                    {/* Left content */}
                    <Col lg={6} className="mb-5 mb-lg-0 ps-lg-5">
                        <div className="d-flex align-items-center mb-4">
                            <div className="bg-opacity-10 bg-light p-1 rounded">
                                <Star size={16} color="#FF6C22" fill="#FF6C22" />
                            </div>
                            <span className="ms-2 text-white fw-semibold small">#1 PREMIUM EYEWEAR COLLECTION</span>
                        </div>

                        <h1 className="display-3 fw-bold text-white mb-4 text-uppercase" style={{ letterSpacing: "1px" }}>
                            Elevate Your Style<br />
                            <span className="position-relative" style={{
                                color: "#FF6C22",
                                textShadow: "0 0 10px rgba(255,108,34,0.3)"
                            }}>With Perfect Frames</span>
                        </h1>

                        <div className="d-flex align-items-baseline mb-4">
                            <p className="text-white me-2 fs-5">Starting at only</p>
                            <p className="display-5 fw-bold" style={{
                                color: "#FF6C22",
                                textShadow: "0 0 10px rgba(255,108,34,0.3)"
                            }}>$18</p>
                        </div>

                        <p className="text-light opacity-80 mb-4 lead fs-5 fw-light">
                            Discover designer frames that combine comfort, durability, and
                            style for every face shape and personality.
                        </p>

                        <div className="d-flex flex-wrap gap-3 mb-5">
                            <Button
                                className="d-flex align-items-center gap-2 fw-semibold px-4 py-3 rounded-pill"
                                style={{
                                    backgroundColor: "#FF6C22",
                                    borderColor: "#FF6C22",
                                    boxShadow: "0 8px 15px rgba(255, 108, 34, 0.3)"
                                }}
                            >
                                <ShoppingBag size={18} />
                                SHOP COLLECTION
                            </Button>

                            <Button
                                variant="outline-light"
                                className="d-flex align-items-center gap-2 fw-semibold px-4 py-3 rounded-pill border-2"
                            >
                                <Phone size={18} />
                                SPEAK TO EXPERT
                            </Button>
                        </div>

                        <div className="d-flex flex-wrap mt-4 pt-2">
                            <div className="d-flex align-items-center me-4 mb-2">
                                <div className="rounded-circle bg-light p-1 d-flex align-items-center justify-content-center" style={{ width: "24px", height: "24px" }}>
                                    <ChevronRight size={16} color="#FF6C22" />
                                </div>
                                <span className="ms-2 text-white small">Free Shipping</span>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="rounded-circle bg-light p-1 d-flex align-items-center justify-content-center" style={{ width: "24px", height: "24px" }}>
                                    <ChevronRight size={16} color="#FF6C22" />
                                </div>
                                <span className="ms-2 text-white small">Money-Back Guarantee</span>
                            </div>
                        </div>
                    </Col>

                    {/* Right content - Glasses image - UPDATED WITH LARGER SIZE */}
                    <Col lg={6} className="position-relative">
                        <div className="position-relative" style={{
                            height: "600px", // Increased height from 500px to 600px
                            zIndex: 5,
                            transform: "translateY(-10px)" // Adjusted vertical position
                        }}>
                            <div className="position-absolute" style={{
                                width: "550px", // Increased glow effect from 450px to 550px
                                height: "550px", // Increased glow effect from 450px to 550px
                                borderRadius: "50%",
                                background: "radial-gradient(circle at center, rgba(255,108,34,0.3) 0%, rgba(255,108,34,0.1) 40%, rgba(0,0,0,0) 70%)",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                filter: "blur(20px)",
                                zIndex: -1
                            }}></div>

                            <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center">
                                <Image
                                    src="/images/image820.png"
                                    alt="Designer Eyewear"
                                    width={650} // Increased from 500 to 650
                                    height={400} // Increased from 300 to 400
                                    style={{
                                        objectFit: "contain",
                                        filter: "drop-shadow(0 30px 30px rgba(0,0,0,0.5))",
                                        animation: "float 6s ease-in-out infinite",
                                        transform: "scale(1.4)" // Increased scale from 1.2 to 1.4
                                    }}
                                    priority
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Bottom accent line with gradient */}
            <div className="position-absolute bottom-0 start-0 w-100" style={{
                height: "5px",
                background: "linear-gradient(90deg, rgba(255,108,34,0.3) 0%, rgba(255,108,34,1) 50%, rgba(255,108,34,0.3) 100%)"
            }}></div>

            {/* Add floating animation */}
            <style jsx global>{`
                @keyframes float {
                    0% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-15px) rotate(2deg);
                    }
                    100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                }
                .rounded-pill {
                    transition: all 0.3s ease;
                }
                .rounded-pill:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
                }
            `}</style>
        </div>
    );
}