import React, { Component, Suspense } from "react";
import { Col, Container, Row } from "reactstrap";

// Importing Section
const Navbar = React.lazy(() => import("../../component/Navbar/NavBar"));

const Footer = React.lazy(() => import("../../component/Footer/Footer"));

class Layout5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Inicio" },
        // { id: 2, idnm: "about", navheading: "Sobre nosotros" },
        { id: 3, idnm: "services", navheading: "Compra" },
        // { id: 4, idnm: "features", navheading: "Features" },
        // { id: 5, idnm: "project", navheading: "Proyecto" },
        // { id: 6, idnm: "clients", navheading: "Clientes" },
        { id: 7, idnm: "contact", navheading: "Contacto" },
      ],
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky", imglight: false });
    } else {
      this.setState({ navClass: "", imglight: false });
    }
  };

  //set preloader div
  PreLoader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={this.PreLoader()}>
          {/* Importing Navbar */}
          <Navbar
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            imglight={this.state.imglight}
          />
          <section className="hero-5-bg position-relative bg-light" id="home">
            <Container>
              <Row className="align-items-center">
                <Col lg={12}>
                  <h1>Politica de privacidad</h1>
                  <br />
                  <h2>??Qui??nes somos?</h2>
                  <p>
                    PP Digital Consulting SA de CV, mejor conocido como Inmobio,
                    con domicilio en calle Puebla 407, colonia Roma Norte,
                    ciudad CDMX, municipio o delegaci??n Cuauht??moc, c.p. 06700,
                    en la entidad de CDMX, pa??s Mexico, y portal de internet
                    www.inmob.io, es el responsable del uso y protecci??n de sus
                    datos personales, y al respecto le informamos lo siguiente:
                  </p>
                  <br />
                  <h2>??Para qu?? fines utilizaremos sus datos personales?</h2>
                  <p>
                    De manera adicional, utilizaremos su informaci??n personal
                    para las siguientes finalidades secundarias que no son
                    necesarias para el servicio solicitado, pero que nos
                    permiten y facilitan brindarle una mejor atenci??n:
                    <br />??? Relaci??n e informaci??n comercial
                    <br />??? Mercadotecnia o publicitaria
                    <br />??? Prospecci??n comercial En caso de que no desee que
                    sus datos personales se utilicen para estos fines
                    secundarios, ind??quelo a continuaci??n: <br />
                    No consiento que mis datos personales se utilicen para los
                    siguientes fines:
                    <br />[ ] Relaci??n e informaci??n comercial <br />[ ]
                    Mercadotecnia o publicitaria <br />[ ] Prospecci??n comercial
                    <br />
                    La negativa para el uso de sus datos personales para estas
                    finalidades no podr?? ser un motivo para que le neguemos los
                    servicios y productos que solicita o contrata con nosotros.
                  </p>
                  <br />

                  <h2>
                    ??D??nde puedo consultar el aviso de privacidad integral?
                  </h2>
                  <p>
                    Para conocer mayor informaci??n sobre los t??rminos y
                    condiciones en que ser??n tratados sus datos personales, como
                    los terceros con quienes compartimos su informaci??n personal
                    y la forma en que podr?? ejercer sus derechos ARCO, puede
                    consultar el aviso de privacidad integral en: P??gina web
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </Suspense>
      </React.Fragment>
    );
  }
}
export default Layout5;
