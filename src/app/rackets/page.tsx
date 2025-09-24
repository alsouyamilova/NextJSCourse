"use client";
import { FC, useState } from "react";
import { Container, Row, Col, Card, Form, Badge } from "react-bootstrap";
import { rackets } from "../../../public/mock";
import RacketCard from "./racketCard";
import styles from "./page.module.css";

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
          <Card>
            <Card.Header>
              <h5>Фильтры</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Бренд</Form.Label>
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
          <div className={styles.flexlabel}>
            <h1>Теннисные ракетки</h1>
            <Badge bg="info">Найдено: {filteredRackets.length} ракеток</Badge>
          </div>

          {filteredRackets.length === 0 ? null : (
            <Row>
              {filteredRackets.map((racket) => (
                <Col key={racket.id} lg={4} md={6} className="mb-4">
                  <RacketCard key={racket.id} racket={racket} />
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
