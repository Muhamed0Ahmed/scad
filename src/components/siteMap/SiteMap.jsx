import React from 'react'
import { Container,Image,Row , Col , Button } from 'react-bootstrap'
import siteMap from "../../images/sitemap.PNG"


const siteMapStyle = {
    backgroundColor:"#eaeaea"
}
const ButtonMainStyle = {
    backgroundColor:"#940d0df5",
    color:"white",
    padding:'10px',
    textDecoration:'none',
    width:'100%',
    fontSize:'18px'

    

}
const ButtondarkStyle= {
    backgroundColor:"#3f3e3e",
    // backgroundColor:"#940d0df5",
    color:"white",
    padding:'2px 10px',
    marginRight:"10px",
    fontSize:'14px',
}
function SiteMap() {
    return (
        <div >
            <Container style={siteMapStyle}>    
                <Image src={siteMap} alt="site map"  className="w-100"/>
                <div>
                    <Container fluid className="py-5">
                   <Row className=" my-3 ">
                       <Col  md="3"sm="4" className=" offeset-md-2 offset-sm-1" >
                            <Button  size="sm" className="w-100 h-100" style={ButtonMainStyle}>Contact Us</Button>{' '}
                       </Col>
                       
                   </Row>
                   <Row className=" my-3 ">
                       <Col  md="3"sm="4" className=" offeset-md-2 offset-sm-1" >
                            <Button  size="sm" className="w-100 h-100" style={ButtonMainStyle}>Interactive tools</Button>{' '}
                       </Col>
                       <Col sm="7" xs="12" className="">
                           <div className="d-flex felx-row mb-1">
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Mobile Apps</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Mindograpic</Button>
                           </div>
                           <div className="d-flex felx-row">
                                <Button variant="" style={ButtondarkStyle} size="sm" className=""> E-book</Button>

                           </div>
                       </Col>
                   </Row>

                   <Row className=" my-3 ">
                       <Col  md="3"sm="4" className=" offeset-md-2 offset-sm-1" >
                            <Button  size="sm" className="w-100 h-100" style={ButtonMainStyle}>Media</Button>{' '}
                       </Col>
                       <Col sm="7" className="">
                           <div className="d-flex felx-row mb-1">
                                
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Press Bookmarks</Button>
                           </div>
                           <div className="d-flex felx-row">
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">photo gallery</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">SCAD library</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Emails</Button>


                           </div>
                       </Col>
                   </Row>

                   <Row className=" my-3 ">
                       <Col  md="3"sm="4" className=" offeset-md-2 offset-sm-1" >
                            <Button  size="sm" className="w-100 h-100" style={ButtonMainStyle}>Sercices</Button>{' '}
                       </Col>
                       <Col sm="7" className="">
                           <div className="d-flex felx-row mb-1">
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">General services</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Data Request</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Trashig</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">subcribs</Button>


                           </div>
                           <div className="d-flex felx-row">
                                <Button variant="" style={ButtondarkStyle} size="sm" className=""> Government Services </Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Trashing</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">method Request</Button>


                           </div>
                       </Col>
                   </Row>

                   <Row className=" my-3 ">
                       <Col  md="3"sm="4" className=" offeset-md-2 offset-sm-1" >
                            <Button  size="sm" className="w-100 h-100" style={ButtonMainStyle}>Statistics</Button>{' '}
                       </Col>
                       <Col sm="7" className="">
                           <div className="d-flex felx-row mb-1">
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Economy</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Industry & Business</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Social statistics</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Agriculture & Environment</Button>

                           </div>
                           <div className="d-flex felx-row">
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Abu Dhabi Statistics</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Pupulation & Dimography</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Labour Force</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Key Indication</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Statistical Celender</Button>

                           </div>
                       </Col>
                   </Row>

                   <Row className=" my-3 ">
                       <Col  md="3"sm="4" className=" offeset-md-2 offset-sm-1" >
                            <Button  size="sm" className="w-100 h-100" style={ButtonMainStyle}>About Us</Button>{' '}
                       </Col>
                       <Col sm="7" className="">
                           <div className="d-flex felx-row mb-1">
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Overview</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">DG Message</Button>

                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Our strategy</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Cooperation Clever</Button>
                           </div>
                           <div className="d-flex felx-row">
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Methods and statisticsal standars</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Board Members</Button>
                                <Button variant="" style={ButtondarkStyle} size="sm" className="">Contact Director General</Button>

                           </div>
                       </Col>
                   </Row>
                   
                   </Container>
                </div>
            </Container>
        </div>
    )
}

export default SiteMap
