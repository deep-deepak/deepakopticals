import React, { useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ShoppingBag, Phone, Star, ChevronRight, Shield } from "lucide-react";

export default function HeroSection() {
    useEffect(() => {
        // Add parallax effect to background elements
        const handleMouseMove = (e) => {
            const parallaxElements = document.querySelectorAll('.parallax');
            parallaxElements.forEach(elem => {
                const speed = parseFloat(elem.getAttribute('data-speed'));
                const x = (window.innerWidth - e.pageX * speed) / 100;
                const y = (window.innerHeight - e.pageY * speed) / 100;
                elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="position-relative bg-black" style={{
            minHeight: "750px",
            overflow: "hidden",
            backgroundImage: "linear-gradient(45deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 100%)"
        }}>
            {/* Enhanced Background with Multiple Layers */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100 opacity-30"
                style={{
                    backgroundImage: "url('/images/bghead.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    mixBlendMode: "overlay"
                }}
            />

            {/* Abstract geometric shapes in background */}
            <div className="position-absolute top-0 start-0 w-100 h-100 opacity-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="smallGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#smallGrid)" />
                    <polygon points="0,0 500,300 0,600" fill="rgba(255,108,34,0.05)" className="parallax" data-speed="2" />
                    <circle cx="80%" cy="30%" r="100" fill="rgba(255,255,255,0.03)" className="parallax" data-speed="3" />
                    <circle cx="70%" cy="60%" r="200" fill="rgba(255,108,34,0.04)" className="parallax" data-speed="1" />
                </svg>
            </div>

            {/* Enhanced animated glow effects */}
            <div className="position-absolute parallax" data-speed="1.5" style={{
                top: "5%",
                right: "15%",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(255,108,34,0.3) 0%, rgba(255,108,34,0) 70%)",
                borderRadius: "50%",
                filter: "blur(60px)",
                animation: "pulse 8s ease-in-out infinite"
            }}></div>

            <div className="position-absolute parallax" data-speed="2.2" style={{
                bottom: "10%",
                left: "15%",
                width: "350px",
                height: "350px",
                background: "radial-gradient(circle, rgba(80,80,255,0.2) 0%, rgba(80,80,255,0) 70%)",
                borderRadius: "50%",
                filter: "blur(50px)",
                animation: "pulse 12s ease-in-out infinite reverse"
            }}></div>

            <Container fluid="lg" className="position-relative py-5" style={{ zIndex: 10 }}>
                <Row className="align-items-center min-vh-75">
                    {/* Left content - Enhanced */}
                    <Col lg={6} className="mb-5 mb-lg-0 ps-lg-5">
                        <div className="d-flex align-items-center mb-4">
                            <div className="bg-opacity-10 bg-light p-2 rounded-pill d-flex align-items-center">
                                <Star size={16} color="#FF6C22" fill="#FF6C22" />
                                <span className="ms-2 text-white fw-semibold small">#1 PREMIUM EYEWEAR</span>
                            </div>
                        </div>

                        <h1 className="display-2 fw-bold text-white mb-4 text-uppercase" style={{
                            letterSpacing: "1px",
                            lineHeight: "1.1"
                        }}>
                            Elevate Your <span className="text-gradient-animated">Vision</span><br />
                            <span className="position-relative" style={{
                                color: "#FF6C22",
                                textShadow: "0 0 15px rgba(255,108,34,0.5)"
                            }}>With Perfect Frames</span>
                        </h1>

                        <div className="d-flex align-items-baseline mb-4">
                            <p className="text-white me-2 fs-5 opacity-75">Premium quality starting at only</p>
                            <p className="display-4 fw-bold" style={{
                                color: "#FF6C22",
                                textShadow: "0 0 15px rgba(255,108,34,0.4)"
                            }}>$18</p>
                        </div>

                        <p className="text-light opacity-80 mb-4 lead fs-5 fw-light">
                            Discover designer frames that combine comfort, durability, and
                            style for every face shape and personality.
                        </p>

                        <div className="d-flex flex-wrap gap-3 mb-5">
                            <Button
                                className="d-flex align-items-center gap-2 fw-semibold px-4 py-3 rounded-pill btn-glow"
                                style={{
                                    backgroundColor: "#FF6C22",
                                    borderColor: "#FF6C22",
                                    boxShadow: "0 8px 20px rgba(255, 108, 34, 0.4)"
                                }}
                            >
                                <ShoppingBag size={18} />
                                SHOP COLLECTION
                            </Button>

                            <Button
                                variant="outline-light"
                                className="d-flex align-items-center gap-2 fw-semibold px-4 py-3 rounded-pill border-2 btn-hover-effect"
                            >
                                <Phone size={18} />
                                SPEAK TO EXPERT
                            </Button>
                        </div>

                        {/* Enhanced features section */}
                        <div className="d-flex flex-wrap mt-4 pt-2 gap-3">
                            <div className="feature-badge d-flex align-items-center me-4 mb-2">
                                <div className="rounded-circle bg-light p-1 d-flex align-items-center justify-content-center" style={{ width: "30px", height: "30px" }}>
                                    <ChevronRight size={16} color="#FF6C22" />
                                </div>
                                <span className="ms-2 text-white small">Free Express Shipping</span>
                            </div>
                            <div className="feature-badge d-flex align-items-center mb-2">
                                <div className="rounded-circle bg-light p-1 d-flex align-items-center justify-content-center" style={{ width: "30px", height: "30px" }}>
                                    <Shield size={16} color="#FF6C22" />
                                </div>
                                <span className="ms-2 text-white small">30-Day Money-Back Guarantee</span>
                            </div>
                        </div>
                    </Col>

                    {/* Right content - Enhanced glasses image with floating elements */}
                    <Col lg={6} className="position-relative">
                        <div className="position-relative" style={{
                            height: "650px",
                            zIndex: 5,
                            perspective: "1000px"
                        }}>
                            {/* Orbiting accent elements */}
                            <div className="accent-orbit">
                                <div className="accent-dot" style={{
                                    backgroundColor: "#FF6C22",
                                    animation: "orbit 15s linear infinite"
                                }}></div>
                                <div className="accent-dot" style={{
                                    backgroundColor: "#FFF",
                                    animation: "orbit 15s linear infinite reverse",
                                    animationDelay: "-7.5s"
                                }}></div>
                            </div>

                            {/* Enhanced glow backdrop */}
                            <div className="position-absolute" style={{
                                width: "600px",
                                height: "600px",
                                borderRadius: "50%",
                                background: "radial-gradient(circle at center, rgba(255,108,34,0.4) 0%, rgba(255,108,34,0.1) 40%, rgba(0,0,0,0) 70%)",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                filter: "blur(30px)",
                                animation: "pulse 10s ease-in-out infinite",
                                zIndex: -1
                            }}></div>

                            <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center">
                                {/* Small decorative elements */}
                                <div className="position-absolute parallax floating-shape" data-speed="3" style={{
                                    top: "15%", left: "10%",
                                    width: "80px", height: "80px",
                                    borderRadius: "50%",
                                    border: "2px solid rgba(255,108,34,0.3)",
                                    animation: "float 15s ease-in-out infinite"
                                }}></div>

                                <div className="position-absolute parallax floating-shape" data-speed="2" style={{
                                    bottom: "20%", right: "15%",
                                    width: "60px", height: "60px",
                                    background: "rgba(255,255,255,0.05)",
                                    animation: "float 12s ease-in-out infinite reverse"
                                }}></div>

                                {/* Main product image with enhanced effects */}
                                <Image
                                    src="/images/image820.png"
                                    alt="Designer Eyewear"
                                    width={600}
                                    height={420}
                                    className="product-image-enhanced parallax"
                                    data-speed="0.5"
                                    style={{
                                        objectFit: "contain",
                                        filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.6))",
                                        animation: "float-rotate 12s ease-in-out infinite",
                                        transform: "scale(1.5) rotateY(5deg)"
                                    }}
                                    priority
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Enhanced bottom accent with animated gradient */}
            <div className="position-absolute bottom-0 start-0 w-100" style={{
                height: "6px",
                background: "linear-gradient(90deg, rgba(255,108,34,0.3) 0%, rgba(255,108,34,1) 50%, rgba(255,108,34,0.3) 100%)",
                backgroundSize: "200% 100%",
                animation: "gradient-shift 8s ease infinite"
            }}></div>

            {/* Enhanced animations */}
            <style jsx global>{`
                @keyframes float {
                    0% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(5deg);
                    }
                    100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                }
                
                @keyframes float-rotate {
                    0% {
                        transform: scale(1.5) rotateY(5deg) translateY(0);
                    }
                    50% {
                        transform: scale(1.5) rotateY(-2deg) translateY(-15px);
                    }
                    100% {
                        transform: scale(1.5) rotateY(5deg) translateY(0);
                    }
                }
                
                @keyframes pulse {
                    0% {
                        opacity: 0.6;
                        transform: translate(-50%, -50%) scale(0.9);
                    }
                    50% {
                        opacity: 0.8;
                        transform: translate(-50%, -50%) scale(1.1);
                    }
                    100% {
                        opacity: 0.6;
                        transform: translate(-50%, -50%) scale(0.9);
                    }
                }
                
                @keyframes orbit {
                    0% {
                        transform: rotate(0deg) translateX(250px) rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg) translateX(250px) rotate(-360deg);
                    }
                }
                
                @keyframes gradient-shift {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
                
                .accent-orbit {
                    position: absolute;
                    width: 500px;
                    height: 500px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                    z-index: -1;
                }
                
                .accent-dot {
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    margin-top: -7.5px;
                    margin-left: -7.5px;
                    box-shadow: 0 0 15px rgba(255,255,255,0.5);
                }
                
                .floating-shape {
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                }
                
                .text-gradient-animated {
                    background: linear-gradient(-45deg, #FFFFFF, #FF6C22, #FFFFFF);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: gradient 6s ease infinite;
                }
                
                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
                
                .btn-glow {
                    transition: all 0.3s ease;
                    animation: subtle-glow 3s infinite alternate;
                }
                
                .btn-glow:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 15px 25px rgba(255,108,34,0.5) !important;
                }
                
                .btn-hover-effect:hover {
                    background-color: rgba(255,255,255,0.1);
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
                }
                
                @keyframes subtle-glow {
                    from {
                        box-shadow: 0 8px 20px rgba(255, 108, 34, 0.4);
                    }
                    to {
                        box-shadow: 0 8px 25px rgba(255, 108, 34, 0.6);
                    }
                }
                
                .feature-badge {
                    transition: all 0.3s ease;
                    padding: 5px 10px;
                    border-radius: 20px;
                    background-color: rgba(255,255,255,0.05);
                }
                
                .feature-badge:hover {
                    background-color: rgba(255,255,255,0.1);
                    transform: translateX(5px);
                }
                
                .product-image-enhanced {
                    transition: all 0.5s ease;
                }
                
                .product-image-enhanced:hover {
                    filter: drop-shadow(0 40px 50px rgba(0,0,0,0.7)) brightness(1.05) !important;
                }
            `}</style>
        </div>
    );
}