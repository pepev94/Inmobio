import React, { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
//import icon
import {
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
} from "reactstrap";
import sendToAirtable from "../utils/airtable";

// Import Background Image



const Contact = () => {

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const submitForm = (data) => {
    sendToAirtable(data);
    setOpen(true)

  };

  return (
    <React.Fragment>
     <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <MuiAlert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
          Información enviada con éxito
        </MuiAlert>
      </Snackbar>
      <section className="section" id="contact">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center mb-5">
                <h2 className="">Contáctanos</h2>
                <p className="text-muted">
                  Deja tus datos para que un asesor se comunique contigo
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            {/* <Col lg={6} md={10}>
                <div className="mb-5 mb-lg-0">
                  <div className="text-center">
                    <img src={ContactImg} alt="" className="img-fluid d-block w-75 mx-auto" />
                    <h4 className="mt-4">Are You Facing Any Problem..?</h4>
                    <p className="text-muted mb-4">It va esser tam simplic quam Occidental in fact it va esser Occidental angles quam un skeptic cambridge es.</p>
                    <Link to="#" className="btn btn-success"><FeatherIcon className="icon mr-2 icon-fill-white" icon="message-circle" /> Start Live Chat</Link>
                    <p className="mt-4">Or you can contact at</p>
                    <Row>
                      <Col md={6}>
                        <Link to="#">
                          <div className="badge f-14 bg-soft-dark text-muted"><span className="text-dark mr-1">Email:</span> Youremailid@gmail.com</div>
                        </Link>
                      </Col>
                      <Col md={6} className="mt-2 mt-sm-0">
                        <Link to="#">
                          <div className="badge f-14 bg-soft-dark text-muted"><span className="text-dark mr-1">Phone:</span> (001) 1234 567 890</div>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col> */}
            <Col lg={5} className="offset-lg-1">
              {/* <h4 className="line-height-1_4 mb-4">Contactanos</h4> */}
              <div className="custom-form mt-4 mt-lg-0">
                <div id="message"></div>
                <div name="contact-form" id="contact-form">
                  <Row>
                    <Col md={6}>
                      <FormGroup className="app-label">
                        <Label for="name" className="text-muted">
                          Nombre
                        </Label>
                        <Input
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Juan..."
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup className="app-label">
                        <Label for="lastname" className="text-muted">
                          Apellido
                        </Label>
                        <Input
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          name="lastname"
                          id="lastname"
                          type="text"
                          className="form-control"
                          placeholder="Pérez. . ."
                        />
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup className="app-label">
                        <Label for="email" className="text-muted">
                          Correo
                        </Label>
                        <Input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="juanperez@.ejemplo.com"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup className="app-label">
                        <Label for="email" className="text-muted">
                          Teléfono
                        </Label>
                        <Input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          name="phone"
                          id="text"
                          type="email"
                          className="form-control"
                          placeholder="5512345678"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup className="app-label">
                        <Label for="comments" className="text-muted">
                          Mensaje
                        </Label>
                        <Input
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          name="comments"
                          id="comments"
                          type="textarea"
                          rows="4"
                          className="form-control"
                          placeholder="Mensaje. . ."
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <Button
                        onClick={() =>
                          submitForm({
                            email,
                            name: firstName + " " + lastName,
                            phone,
                            message,
                          })
                        }
                        color="primary"
                        id="submit"
                        name="send"
                        className="btn btn-primary"
                      >
                        Mandar Mensaje
                      </Button>
                      <div id="simple-msg"></div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Contact;
