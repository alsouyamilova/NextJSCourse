"use client";
import { FC, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Badge,
  Alert,
  Image,
} from "react-bootstrap";
import { rackets } from "../../../public/mock";

const Page: FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>("all");

  // Получаем уникальные бренды
  const brands = Array.from(
    new Set(rackets.map((racket) => racket.brand.name))
  );

  // Фильтруем ракетки по выбранному бренду
  const filteredRackets =
    selectedBrand === "all"
      ? rackets
      : rackets.filter((racket) => racket.brand.name === selectedBrand);

  return (
    <Container fluid className="py-4">
      <Row>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">Фильтры</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Бренд</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Все бренды"
                    name="brand"
                    value="all"
                    checked={selectedBrand === "all"}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="mb-2"
                  />
                  {brands.map((brand) => (
                    <Form.Check
                      key={brand}
                      type="radio"
                      label={brand}
                      name="brand"
                      value={brand}
                      checked={selectedBrand === brand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="mb-2"
                    />
                  ))}
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={9}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="mb-0">Теннисные ракетки</h1>
            <Badge bg="info" className="fs-6">
              Найдено: {filteredRackets.length} ракеток
            </Badge>
          </div>

          {filteredRackets.length === 0 ? null : (
            <Row>
              {filteredRackets.map((racket) => (
                <Col key={racket.id} lg={4} md={6} className="mb-4">
                  <Card className="h-100 shadow-sm">
                    <div
                      className="text-center p-3"
                      style={{ height: "200px", backgroundColor: "#f8f9fa" }}
                    >
                      <Image
                        src={racket.imageUrl}
                        alt={racket.name}
                        className="img-fluid"
                        style={{
                          height: "100%",
                          objectFit: "contain",
                          maxWidth: "100%",
                        }}
                      />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="h6 mb-2">{racket.name}</Card.Title>
                      <Badge bg="primary" className="mb-2 w-fit-content">
                        {racket.brand.name}
                      </Badge>
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <span className="h5 text-success mb-0">
                          ${racket.price}
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default Page;
