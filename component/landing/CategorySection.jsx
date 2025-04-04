import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function CategorySection() {
    // Category data
    const categories = [
        {
            id: 1,
            title: "Glasses For Fashion",
            subtitle: "FASHION",
            image: "/images/fashion.jpg", // Replace with your actual image path
            alt: "Man wearing stylish glasses",
        },
        {
            id: 2,
            title: "Protective Glasses",
            subtitle: "PROTECT",
            image: "/images/protect.jpg", // Replace with your actual image path
            alt: "Premium protective glasses",
        },
        {
            id: 3,
            title: "Reading Glasses",
            subtitle: "READING",
            image: "/images/reading.jpg", // Replace with your actual image path
            alt: "Person holding reading glasses",
        },
    ];

    return (
        <section className="py-5">
            <Container fluid className="px-0">
                <Row className="g-0">
                    {categories.map((category) => (
                        <Col key={category.id} md={4} className="position-relative">
                            {/* Overlay div for gradient */}
                            <div
                                className="position-absolute top-0 start-0 w-100 h-100"
                                style={{
                                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)",
                                    zIndex: 1,
                                }}
                            />

                            {/* Image background */}
                            <div
                                className="category-card position-relative overflow-hidden"
                                style={{ height: "400px" }}
                            >
                                <div
                                    className="w-100 h-100"
                                    style={{
                                        backgroundImage: `url(${category.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        transition: "all 0.5s ease",
                                    }}
                                />

                                {/* Content overlay - absolutely positioned */}
                                <div
                                    className="position-absolute d-flex flex-column justify-content-between p-4"
                                    style={{
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        zIndex: 2,
                                    }}
                                >
                                    <div>
                                        <span
                                            className="d-inline-block mb-2 text-white fw-semibold"
                                            style={{ fontSize: "0.9rem", letterSpacing: "1px" }}
                                        >
                                            {category.subtitle}
                                        </span>
                                        <h2 className="text-white fw-bold mb-0" style={{ fontSize: "2.2rem" }}>
                                            {category.title}
                                        </h2>
                                    </div>

                                    <Button
                                        className="align-self-start fw-bold text-uppercase"
                                        style={{
                                            backgroundColor: "#FF6C22",
                                            borderColor: "#FF6C22",
                                            padding: "0.6rem 1.5rem",
                                            fontSize: "0.85rem",
                                            letterSpacing: "0.5px",
                                            transition: "all 0.3s ease",
                                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.backgroundColor = "#e05a14";
                                            e.currentTarget.style.borderColor = "#e05a14";
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                            e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.backgroundColor = "#FF6C22";
                                            e.currentTarget.style.borderColor = "#FF6C22";
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                                        }}
                                    >
                                        Shop Now
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* CSS for hover effects */}
            <style jsx>{`
        .category-card:hover div[style] {
          transform: scale(1.05);
        }
      `}</style>
        </section>
    );
}