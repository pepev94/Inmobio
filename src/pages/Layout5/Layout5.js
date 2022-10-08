import React, { Component, Suspense } from "react";

// Importing Section
const Navbar = React.lazy(() => import("../../component/Navbar/NavBar"));

const Section = React.lazy(() => import("./Section"));
const Services = React.lazy(() => import("../../component/Services"));
const Contact = React.lazy(() => import("../../component/Contact"));
const Footer = React.lazy(() => import("../../component/Footer/Footer"));

class Layout5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Inicio" },
        // { id: 2, idnm: "about", navheading: "Sobre nosotros" },
        { id: 3, idnm: "services", navheading: "Inversión" },
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

          {/* Importing Section */}
          <Section />

          {/* Importing About */}
          {/* <About /> */}

           {/* Importing Service */}
           <Services />

          {/* Importing Feature */}
          {/* <Feature /> */}

          {/* Importing Project */}
          {/* <Project /> */}

          {/* Importing Client */}
          {/* <Clients /> */}

          {/* Importing Contact Us */}
          <Contact />

          {/* Importing Footer */}
          <Footer />
        </Suspense>
      </React.Fragment>
    );
  }
}
export default Layout5;
