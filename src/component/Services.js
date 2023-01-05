import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

// Import Background Image

export default class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="services">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7}>
                <div className="text-center mb-5">
                  <h2 className="">Compra y relájate</h2>
                  <p className="text-muted">¿Cómo funciona?</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <div className="card service-box text-center p-4">
                  {/* <div className="service-icon-bg mx-auto avatar-xxl p-4" style={{ backgroundImage: `url(${Background})` }}>
                    <div className="service-box-icon justify-content-center">
                      <img src={Icon1} alt="" className="img-fluid d-block" />
                    </div>
                  </div> */}
                  <h4 className="service-title mt-4 mb-3 f-18">Sin enganche</h4>
                  <p className="service-subtitle mb-4 f-15">
                    Adquire una fracción de una propiedad sin la necesidad de
                    descapitalizarte
                  </p>
                  {/* <Link to="#" className="read-more">More<span className="right-icon ml-2">&#8594;</span></Link> */}
                </div>
              </Col>
              <Col lg={3}>
                <div className="card service-box text-center p-4">
                  {/* <div className="service-icon-bg mx-auto avatar-xxl p-4" style={{ backgroundImage: `url(${Background})` }}>
                    <div className="service-box-icon justify-content-center">
                      <img src={Icon2} alt="" className="img-fluid d-block" />
                    </div>
                  </div> */}
                  <h4 className="service-title mt-4 mb-3 f-18">
                    Rentas mensuales
                  </h4>
                  <p className="service-subtitle mb-4 f-15">
                    Recibe desde el primer mes las rentas correspondiente a tu
                    porcentaje de la propiedad
                  </p>
                  {/* <Link to="#" className="read-more">More<span className="right-icon ml-2">&#8594;</span></Link> */}
                </div>
              </Col>
              <Col lg={3}>
                <div className="card service-box text-center p-4">
                  {/* <div className="service-icon-bg mx-auto avatar-xxl p-4" style={{ backgroundImage: `url(${Background})` }}>
                    <div className="service-box-icon justify-content-center">
                      <img src={Icon3} alt="" className="img-fluid d-block" />
                    </div>
                  </div> */}
                  <h4 className="service-title mt-4 mb-3 f-18">
                    Tiempo compartido
                  </h4>
                  <p className="service-subtitle mb-4 f-15">
                    Disfruta anualmente días de estadía correspondientes a tu
                    porcentaje en tu departamento.
                  </p>
                  {/* <Link to="#" className="read-more">More<span className="right-icon ml-2">&#8594;</span></Link> */}
                </div>
              </Col>
              <Col lg={3}>
                <div className="card service-box text-center p-4">
                  {/* <div className="service-icon-bg mx-auto avatar-xxl p-4" style={{ backgroundImage: `url(${Background})` }}>
                    <div className="service-box-icon justify-content-center">
                      <img src={Icon3} alt="" className="img-fluid d-block" />
                    </div>
                  </div> */}
                  <h4 className="service-title mt-4 mb-3 f-18">
                    Plusvalía Anual
                  </h4>
                  <p className="service-subtitle mb-4 f-15">
                    Tu compra sube anualmente con la plusvalía
                  </p>
                  {/* <Link to="#" className="read-more">More<span className="right-icon ml-2">&#8594;</span></Link> */}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
