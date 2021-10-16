import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "./helpComponents/Banner";
import NavbarHome from "./NavbarHome";
import LatestRelease from "./helpComponents/LatestRelease";

const latestReleases = [
  {
    date: "May-2014",
    header: "Consumer Price Index -Aprill 2014",
  },
  {
    date: "May-2014",
    header: "Consumer Price Index -Aprill 2014",
  },
  {
    date: "May-2014",
    header: "Consumer Price Index -Aprill 2014",
  },
];
class Home extends React.Component {
  constructor(props){
    super(props);
    this.widthLatestRelease = React.createRef();
    this.handle = () => {
      console.log(this.widthLatestRelease.current);
    }

  }
  // const widthLatestRelease = useRef(null);
  // function widthOverview (){
  //   let el = document.querySelector(".overview");
  //   console.log(el);
  // }
  render() {
    return (
      <div>
        <Banner />
        <NavbarHome />
        <Container>
          <button onClick={this.handle}>handle changes</button> 
          <Row>
            <Col md="8" xs="12">
              <div className="overview" >
                <h3 classNam="header-overview">
                  Abu Dhabi Statistacs OverView
                </h3>
                <p className="p-overview">
                  Statistics Center-Abu Dhabi Issuess more than 100 statistical
                  publication annually, each comprises a wide range of
                  statistical data of interst to a broud spectrum of data users
                  . SCAD's reaeses are presented in a simple manner. providing a
                  brief explanation of the statistical terms usec. making them
                  accessible and understandableto average data users. in
                  addition to ists annual publications . the Center issues a
                  wide varielty of other releser of various forms and contents
                  some are of ageneral nature like the statistical Year
                  Book.Statistics Center-Abu Dhabi Issuess more than 100
                  statistical publication annually, each comprises a wide range
                  of statistical data of interst to a broud spectrum of data
                  users . SCAD's reaeses are presented in a simple manner.
                  providing a brief explanation of the statistical terms usec.
                  making them accessible and understandableto average data
                  users. in addition to ists annual publications . the Center
                  issues a wide varielty of other releser of various forms and
                  contents some are of ageneral nature like the statistical Year
                  Book.Statistics Center-Abu Dhabi Issuess more than 100
                  statistical publication annually, each comprises a wide range
                  of statistical data of interst to a broud spectrum of data
                  users . SCAD's reaeses are presented in a simple manner.
                  providing a brief explanation of the statistical terms usec.
                  making them accessible and understandableto average data
                  users. in addition to ists annual publications . the Center
                  issues a wide varielty of other releser of various forms and
                  contents some are of ageneral nature like the statistical Year
                  Book.Statistics Center-Abu Dhabi Issuess more than 100
                  statistical publication annually, each comprises a wide range
                  of statistical data of interst to a broud spectrum of data
                  users . SCAD's reaeses are presented in a simple manner.
                  providing a brief explanation of the statistical terms usec.
                  making them accessible and understandableto average data
                  users. in addition to ists annual publications . the Center
                  issues a wide varielty of other releser of various forms and
                  contents some are of ageneral nature like the statistical Year
                  Book.
                </p>
              </div>
            </Col>
            <Col md="4" xs="12" className="mt-3 home-side-static">
              <div className="latest-releases " ref={this.widthLatestRelease}>
                <h4
                  className="p-2 pl-5 "
                  style={{ color: "white", backgroundColor: "var(--RedScad)" }}
                >
                  Latest Releases
                </h4>
                {latestReleases.map((el) => (
                  <LatestRelease latest={el} />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
