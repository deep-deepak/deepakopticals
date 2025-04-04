import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { ShoppingCart, Eye, Heart, Star } from 'lucide-react';

const ProductGrid = () => {
    const products = [
        {
            id: 1,
            name: 'CrystalView Sunglasses',
            price: 65.00,
            image: '/images/prod1.jpg',
            isNew: true,
            rating: 4.5,
        },
        {
            id: 2,
            name: 'UrbanSight Sunglasses',
            price: 55.00,
            image: '/images/prod2.jpg',
            isNew: false,
            rating: 4.2,
        },
        {
            id: 3,
            name: 'Turquoise Mirage Shades',
            price: 96.00,
            image: '/images/prod3.jpg',
            isNew: true,
            rating: 4.8,
        },
        {
            id: 4,
            name: 'Oceanic Red Pink Shades',
            price: 77.00,
            image: '/images/prod4.jpg',
            isNew: true,
            rating: 4.3,
        },
        {
            id: 5,
            name: 'Eclipse Yellow Lenses',
            price: 95.00,
            image: '/images/prod5.jpg',
            isNew: false,
            rating: 4.6,
        },
        {
            id: 6,
            name: 'Clarity Black Frames',
            price: 98.00,
            image: '/images/prod6.jpg',
            isNew: false,
            rating: 4.4,
        },
        {
            id: 7,
            name: 'Visionary Black Frames',
            price: 99.00,
            image: '/images/prod9.jpg',
            isNew: false,
            rating: 4.7,
        },
        {
            id: 8,
            name: 'Clear Vision Shades',
            price: 45.00,
            oldPrice: 75.00,
            image: '/images/prod8.jpg',
            isNew: false,
            isOnSale: true,
            rating: 4.1,
        },
    ];

    const primaryColor = '#ff6c22 !important';

    return (
        <Container className="py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <Badge
                        style={{ backgroundColor: primaryColor, color: 'white' }}
                        className="mb-2 py-2 px-3 rounded-pill fw-normal"
                    >
                        NEW ARRIVAL
                    </Badge>
                    <h2 className="fw-bold fs-1 mb-0">Latest Product</h2>
                </div>
                <Button
                    style={{ backgroundColor: primaryColor, borderColor: primaryColor }}
                    className="px-4 py-2"
                >
                    VIEW MORE
                </Button>
            </div>

            <Row>
                {products.map((product) => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card className="h-100 border-0 shadow-sm product-card">
                            <div className="position-relative overflow-hidden product-img-container">
                                <Card.Img variant="top" src={product.image} />
                                <div className="product-overlay d-flex justify-content-center align-items-center">
                                    <Button
                                        className="mx-1 rounded-circle p-2"
                                        style={{ backgroundColor: 'white', borderColor: '#eee' }}
                                    >
                                        <Eye size={18} color={primaryColor} />
                                    </Button>
                                    <Button
                                        className="mx-1 rounded-circle p-2"
                                        style={{ backgroundColor: 'white', borderColor: '#eee' }}
                                    >
                                        <Heart size={18} color={primaryColor} />
                                    </Button>
                                </div>
                                {product.isNew && (
                                    <Badge
                                        style={{ backgroundColor: primaryColor }}
                                        className="position-absolute top-0 start-0 m-2 py-2 px-3"
                                    >
                                        New
                                    </Badge>
                                )}
                                {product.isOnSale && (
                                    <Badge
                                        style={{ backgroundColor: '#28a745' }}
                                        className="position-absolute top-0 start-0 m-2 py-2 px-3"
                                    >
                                        Sale
                                    </Badge>
                                )}
                            </div>
                            <Card.Body className="pt-4">
                                <div className="d-flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            fill={i < Math.floor(product.rating) ? primaryColor : 'none'}
                                            color={primaryColor}
                                        />
                                    ))}
                                </div>
                                <Card.Title className="fw-bold mb-1">{product.name}</Card.Title>
                                <div className="d-flex align-items-center mb-3">
                                    {product.oldPrice && (
                                        <span className="text-decoration-line-through text-muted me-2">
                                            ${product.oldPrice.toFixed(2)}
                                        </span>
                                    )}
                                    <span className="fw-bold" style={{ color: primaryColor }}>
                                        ${product.price.toFixed(2)}
                                    </span>
                                </div>
                                <Button
                                    variant="dark"
                                    className="w-100 d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: primaryColor, borderColor: primaryColor }}
                                >
                                    <ShoppingCart size={18} className="me-2" />
                                    ADD TO CART
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <style jsx>{`
        .product-img-container {
          position: relative;
          overflow: hidden;
          height: 200px;
        }
        
        .product-img-container img {
          transition: transform 0.5s ease;
          height: 100%;
          object-fit: cover;
        }
        
        .product-card:hover .product-img-container img {
          transform: scale(1.05);
        }
        
        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.2);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .product-card:hover .product-overlay {
          opacity: 1;
        }
      `}</style>
        </Container>
    );
};

export default ProductGrid;