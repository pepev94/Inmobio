import React, { useState } from "react";
import { Col, Container, Input, Row } from "reactstrap";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
// Import Background Image
import hero5 from "../../assets/images/hero-5-img.png";
import sendToAirtable from "../../utils/airtable";

const Section = () => {
  const [email, setEmail] = useState("");

  const [open, setOpen] = useState(false);

  const submitForm = (data) => {
    sendToAirtable(data);
    setOpen(true);
  };

  return (
    <React.Fragment>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <MuiAlert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Información enviada con éxito
        </MuiAlert>
      </Snackbar>
      <section className="hero-5-bg position-relative bg-light" id="home">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="">
                <h1 className="hero-5-title line-height-1_4 mb-4">
                  El primer tiempo compartido que te da{" "}
                  <span className="text-primary">RENDIMIENTOS</span>
                </h1>
                <p className="text-muted mb-4 pb-3">
                  Con inmob.io empieza a recibir ingresos pasivos desde el
                  primer mes. Deja tu correo para unirte a la waiting list
                </p>
                <div className="Subcribe-form">
                  <div className="form-inline">
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      style={{ marginBottom: "10px", width: "100%" }}
                      className="form-control mr-md-3"
                      id="inputEmail2"
                      placeholder="Ingresa tu correo..."
                    />

                    <button
                      onClick={() =>
                        submitForm({
                          email,
                        })
                      }
                      style={{ width: "100%" }}
                      to="#"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Unirme a la waiting list
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <img src={hero5} alt="" className="hero-5-img" />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Section;
