import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function PageHeading({ title, description }) {
    return (
        <Row className="mb-4">
            <Col>
                <div className="d-flex flex-column align-items-start mb-4">
                    <span className="text-uppercase fw-semibold" style={{ color: "#FF6C22", letterSpacing: "1px", fontSize: "0.9rem" }}>
                        {title}
                    </span>
                    <h2 className="display-5 fw-bold text-dark mb-0 text-capitalize">{description}</h2>
                    <div className="mt-2" style={{ width: "60px", height: "3px", backgroundColor: "#FF6C22" }}></div>
                </div>
            </Col>
        </Row>

    )
}
