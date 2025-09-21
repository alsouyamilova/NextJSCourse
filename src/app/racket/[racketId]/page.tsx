import { FC } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { rackets } from "../../../../public/mock";

type Props = {
  params: Promise<{ racketId: string }>;
};

export const generateStaticParams = () => {
  return rackets.map((racket) => ({
    racketId: String(racket.id),
  }));
};

const RacketPage: FC<Props> = async ({ params }) => {
  const { racketId } = await params;
  const racket = rackets.find((racket) => String(racket.id) === racketId);

  console.log("Looking for racket with ID:", racketId);
  console.log("Found racket:", racket);

  if (!racket) {
    return (
      <div className="container py-5 text-center">
        <div>Ракетка не найдена</div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card h-100">
            <div
              className="text-center p-4"
              style={{
                height: "500px",
                backgroundColor: "#f8f9fa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={racket.imageUrl}
                alt={racket.name}
                className="img-fluid"
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-body p-4">
              <div className="mb-3">
                <span className="badge bg-primary fs-6 mb-2">
                  {racket.brand.name}
                </span>
                {racket.top10 && (
                  <span className="badge bg-warning ms-2 fs-6">Топ-10</span>
                )}
              </div>

              <h2 className="card-title h2 mb-3">{racket.name}</h2>

              <div className="mb-4">
                <h3 className="text-success mb-0">${racket.price}</h3>
                <small className="text-muted">Цена</small>
              </div>

              <div className="mb-4">
                <h5>Описание</h5>
                <p className="text-muted">{racket.description}</p>
              </div>

              <div className="mb-4">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <strong>Модель:</strong>
                      <br />
                      <span className="text-muted">{racket.model}</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <strong>Год выпуска:</strong>
                      <br />
                      <span className="text-muted">{racket.year}</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <strong>Тип:</strong>
                      <br />
                      <span className="text-muted">{racket.type}</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <strong>Бренд:</strong>
                      <br />
                      <span className="text-muted">{racket.brand.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RacketPage;
