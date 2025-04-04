import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ShoppingCart, Star } from "lucide-react";
import PageHeading from "../../common/PageHeading";

// Import the common button component if you're using it
// import { ShopNowButton } from "./ShopNowButton";

export default function BestSellersSection() {
    // Product data
    const products = [
        {
            id: 1,
            name: "CrystalView Sunglasses",
            price: 65.00,
            image: "/images/crystal.jpg", // Replace with your actual image path
            rating: 4.8,
            reviewCount: 124,
        },
        {
            id: 2,
            name: "UrbanSight Sunglasses",
            price: 35.00,
            image: "/images/unban.jpg", // Replace with your actual image path
            rating: 4.5,
            reviewCount: 96,
            isPopular: true,
        },
        {
            id: 3,
            name: "Turquoise Mirage Shades",
            price: 96.00,
            image: "/images/turcky.jpg", // Replace with your actual image path
            rating: 4.9,
            reviewCount: 87,
        },
        {
            id: 4,
            name: "Oceanic Red Pink Shades",
            price: 77.00,
            image: "/images/ocean.jpg", // Replace with your actual image path
            rating: 4.7,
            reviewCount: 105,
            isNew: true,
        },
    ];

    return (
        <section className="py-5 bg-light">
            <Container>
                {/* Section Header */}
                <PageHeading title={"Product"} description={"best sellers"} />
                {/* Products Grid */}
                <Row className="g-4">
                    {products.map((product) => (
                        <Col key={product.id} xs={12} sm={6} lg={3}>
                            <Card className="product-card h-100 border-0 shadow-sm">
                                {/* Product Badge (if applicable) */}
                                {product.isPopular && (
                                    <div className="position-absolute" style={{ top: "10px", left: "10px", zIndex: 2 }}>
                                        <span className="badge" style={{ backgroundColor: "#FF6C22", padding: "5px 10px" }}>Popular</span>
                                    </div>
                                )}
                                {product.isNew && (
                                    <div className="position-absolute" style={{ top: "10px", left: "10px", zIndex: 2 }}>
                                        <span className="badge bg-success" style={{ padding: "5px 10px" }}>New</span>
                                    </div>
                                )}

                                {/* Product Image */}
                                <div className="product-img-wrapper position-relative overflow-hidden" style={{ height: "220px", backgroundColor: "#f8f9fa" }}>
                                    <Card.Img
                                        variant="top"
                                        src={product.image}
                                        alt={product.name}
                                        className="img-fluid product-img"
                                        style={{
                                            objectFit: "contain",
                                            height: "100%",
                                            width: "100%",
                                            transition: "transform 0.5s ease"
                                        }}
                                    />

                                    {/* Quick view overlay */}
                                    <div className="quick-view-overlay position-absolute d-flex justify-content-center align-items-center"
                                        style={{
                                            bottom: "-50px",
                                            left: 0,
                                            right: 0,
                                            height: "50px",
                                            backgroundColor: "rgba(255,108,34,0.9)",
                                            transition: "bottom 0.3s ease",
                                            cursor: "pointer"
                                        }}>
                                        <span className="text-white fw-semibold">Quick View</span>
                                    </div>
                                </div>

                                <Card.Body className="d-flex flex-column">
                                    {/* Product Rating */}
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="me-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={14}
                                                    color="#FF6C22"
                                                    fill={i < Math.floor(product.rating) ? "#FF6C22" : "none"}
                                                    style={{ marginRight: "2px" }}
                                                />
                                            ))}
                                        </div>
                                        <small className="text-muted">{`(${product.reviewCount})`}</small>
                                    </div>

                                    {/* Product Name */}
                                    <Card.Title className="mb-2">{product.name}</Card.Title>

                                    {/* Product Price */}
                                    <Card.Text className="fs-5 fw-bold text-dark mb-3">
                                        ${product.price.toFixed(2)}
                                    </Card.Text>

                                    {/* Add to Cart Button */}
                                    <Button
                                        variant="outline-dark"
                                        className="add-to-cart-btn mt-auto d-flex align-items-center justify-content-center gap-2"
                                        style={{
                                            borderRadius: "4px",
                                            transition: "all 0.3s ease",
                                            borderColor: "#dee2e6"
                                        }}
                                    >
                                        <ShoppingCart size={16} />
                                        <span>ADD TO CART</span>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* CSS for hover effects */}
            <style jsx>{`
        .product-card {
          transition: all 0.3s ease;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        
        .product-card:hover .product-img {
          transform: scale(1.05);
        }
        
        .product-card:hover .quick-view-overlay {
          bottom: 0;
        }
        
        .btn.add-to-cart-btn:hover {
          background-color: #FF6C22 !important;
          border-color: #FF6C22 !important;
          color: white !important;
        }
          button.add-to-cart-btn.mt-auto.d-flex.align-items-center.justify-content-center.gap-2.btn.btn-outline-dark:hover{
           background-color: #FF6C22 !important;
          border-color: #FF6C22 !important;
          color: white !important;
          }
      `}</style>
        </section>
    );
}