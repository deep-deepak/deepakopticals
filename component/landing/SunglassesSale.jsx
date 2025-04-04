import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Clock, ShoppingBag, Star } from 'lucide-react';

const SunglassesSale = () => {
    const primaryColor = "#FF6C22";

    const saleItems = [
        {
            id: 1,
            name: "Clear Vision Shades",
            originalPrice: 75.00,
            salePrice: 45.00,
            image: "/images/clear.jpg",
            rating: 4.8,
        },
        {
            id: 2,
            name: "SleekSight Sunglasses",
            originalPrice: 55.00,
            salePrice: 42.00,
            image: "/images/slick.jpg",
            rating: 4.6,
        },
        {
            id: 3,
            name: "Visionary Black Specs",
            originalPrice: 44.00,
            salePrice: 28.00,
            image: "/images/vision.jpg",
            rating: 4.7,
        }
    ];

    return (
        <div className="sale-section py-5" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/images/store.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <Container className="py-4">
                <div className="text-center mb-4">
                    <h6 className="text-white mb-2" style={{ letterSpacing: "2px" }}>DAILY DEALS</h6>
                    <h2 className="text-white display-4 fw-bold mb-5">Sale Of The Day</h2>
                </div>

                <Row className="justify-content-center">
                    {saleItems.map(item => (
                        <Col key={item.id} md={4} className="mb-4">
                            <Card className="h-100 border-0 shadow" style={{ overflow: "hidden" }}>
                                <div className="p-3 bg-white">
                                    <Card.Img variant="top" src={item.image} className="img-fluid" style={{ height: "400px" }} />
                                </div>
                                <Card.Body className="bg-white">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <Card.Title className="fw-bold mb-0">{item.name}</Card.Title>
                                        <div className="d-flex align-items-center">
                                            <Star size={16} fill={primaryColor} color={primaryColor} />
                                            <span className="ms-1 small">{item.rating}</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="text-decoration-line-through text-muted me-2">${item.originalPrice.toFixed(2)}</span>
                                        <span className="fw-bold" style={{ color: primaryColor }}>${item.salePrice.toFixed(2)}</span>
                                    </div>
                                </Card.Body>
                                <div className="card-footer border-0 d-flex justify-content-between align-items-center"
                                    style={{ backgroundColor: primaryColor, color: "white" }}>
                                    <div className="d-flex align-items-center">
                                        <Clock size={18} color="white" />
                                        <span className="ms-2 fw-bold">LIMITED TIME</span>
                                    </div>
                                    <div className="fw-bold">13H : 23M : 07S</div>
                                </div>
                                <div className="position-absolute top-0 end-0 m-3">
                                    <button className="btn rounded-circle" style={{ backgroundColor: primaryColor, width: "40px", height: "40px" }}>
                                        <ShoppingBag size={18} color="white" />
                                    </button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-5">
                    <button className="btn btn-lg px-4 py-2"
                        style={{
                            backgroundColor: primaryColor,
                            color: "white",
                            borderRadius: "30px"
                        }}>
                        VIEW ALL PRODUCTS
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default SunglassesSale;