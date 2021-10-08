import React from "react";
import "../App.css";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  FormLabel,
  FormControl,
  Button,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarDropdown,
  NavDropdown
} from "react-bootstrap";
// import '@fortawesome/fontawesome-free';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BrowserRouter as Link
} from "react-router-dom";

import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faHeartbeat, faPhoneVolume, faRss } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const siteMap = {
    minHeight: "300px",
    color: "white",
    textAlign: "center",
    backgroundColor: "black",
  };
  const colorWhite = {
    color: "white",
  };
  const iso = {
      borderRight:"1px solid black",
      fontSize:'5px',
      padding:'1px 3px'
  }
  return (
    <React.Fragment>
      <div className="footer" style={{  }}>
        <Container fluid="lg">
          <Row
            className=" footer1 exand-sitemap d-flex justify-content-center align-items-center text-align-center  width-100 d-none"
            style={siteMap}
          >
            <div>
              <h5>Samplesitemap</h5>
              <h2> Actual design to be provided by SCAD</h2>
            </div>
          </Row>



          <Row className="footer2  ">
            <Col lg={6} md={6} sm={12} className="footer-subscrib py-2">
              <Form>
                <FormGroup className="d-md-flex d-block flex-sm-row align-items-center flex-nowrap">
                  <FormLabel size="sm" className="d-block py-2 ">
                    SCAD Newsletter
                  </FormLabel>
                  <FormControl
                    size="sm"
                    type="email"
                    placeholder="Your Email Address"
                    className="py-2"
                  />
                  <Button className="btn py-2" size="sm">
                    SUBSCRIBE
                  </Button>
                </FormGroup>
              </Form>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              className="footer-social-icon   d-sm-flex d-block flex-sm-row  flex-column justify-content-start align-items-center py-2"
            >
              <Button
                as="input"
                variant="dark"
                type="button"
                value="Stay Connected"
                className=" bg-dark py-2"
                size="sm"
              />
              <div className="d-flex flex-row flex-nowrap py-2 ">
                <a
                  href="https://www.facebook.com/adstatistics"
                  className="btn facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} styl={colorWhite} />
                </a>
                <a
                  href="http://twitter.com/adstatistics"
                  className="btn twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="http://www.linkedin.com/in/asdtatistics"
                  className="btn linkedin"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href="http://www.youtybe.com/user/asdtatistics"
                  className="btn youtube"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                  href="http://plus.google.com/101415886706208605001"
                  className="btn p-1 google"
                >
                  <FontAwesomeIcon icon={faGooglePlusG} />
                </a>
                <a href="RSS linked page" className="btn">
                  <FontAwesomeIcon icon={faRss} />
                </a>
              </div>
            </Col>
          </Row>


         
        </Container>
      </div>
      <div className="last-footer">
          <Container fluid="md">
     
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light">   
                <div className="d-flex flex-row justify-content-start flex-nowrap pt-2">
                  <Navbar.Brand style={{borderRight:"1px solid black", height:"100%"}} className="d-flex flex-column">
                      <span>iso</span>
                      <FontAwesomeIcon  icon={faHeartbeat} style={{fontSize:'30px',borderRight:"1px solid black"}}/>
                  </Navbar.Brand>
                  <div className="d-flex flex-column" >
                    <span style={iso}>iso </span>
                    <span style={iso}>9001</span>
                    <span style={iso}>daily</span>
                    <span style={iso}>SCAD</span>
                </div>
                <div className="d-flex flex-column" >
                    <span style={iso}>iso </span>
                    <span style={iso}>2000-1</span>
                    <span style={iso}>daily</span>
                    <span style={iso}>SCAD</span>
                </div>

                <div className="d-flex flex-column" >
                    <span style={iso}>iso </span>
                    <span style={iso}>19015</span>
                    <span style={iso}>daily</span>
                    <span style={iso}>SCAD</span>
                </div>
                </div>
                
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="pt-2" expand="md">
                      
                      <span className="mx-2 d-sm-inline d-none">Menu</span> 
                      <FontAwesomeIcon icon={faBars} className=""/>
                  </Navbar.Toggle>
                  <Navbar.Collapse id="responsive-navbar-nav ">
                    <Nav className="me-auto w-100 justify-content-cente flex-sm-row justify-content-sm-between ">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/SiteMap" >
                      Site Map
                    </Nav.Link>
                    <Nav.Link href="/faqs">
                      FAQs
                    </Nav.Link>
                    <Nav.Link href="/PrivacyPolicy">
                      Privacy Policy
                      </Nav.Link>
                    <Nav.Link href="/Vendors">Vendors</Nav.Link>
                    <Nav.Link href="/Tenders">Tenders</Nav.Link>
                    <Nav.Link href="/Contact">Contact </Nav.Link>
                    <Nav.Link href="/WebMail">Webmail</Nav.Link>

                    </Nav>
                  </Navbar.Collapse>
                  <div className="pt-2">
                      <span  style={{backgroundColor:"var(--RedScad", color:"white", borderRadius:'10px 15px',position:"relative"}}>
                          <span className="d-sm-inline d-none py-2 px-2">Call me</span>
                          <FontAwesomeIcon icon={faPhoneVolume} style={{position:"absolute", backgroundColor:'var(--RedScad' , color:'white',borderRadius:"50%", width:"30px", height:"30px", outline:"5px solid #cba135", top:'-5px' , left:'95%'}}/> 
                      </span>
                      <span className="ml-5" style={{marginLeft:"30px"}}> #9000 121</span>
                  </div>
                
              </Navbar>
       
          </Container>
      </div>
    </React.Fragment>
  );
}

export default Footer;
