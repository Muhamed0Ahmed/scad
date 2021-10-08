import React from 'react'
import {Navbar, Container, Nav, Form ,Button,Image, Col, Row, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom"
import "../css/header.css";
import Logo from "../images/logo.PNG"
// import "../css/header.css"

function Header() {
    const navHeader = [{
            title:'Home',
            type :"link",
            link:''
        },{
            title:"About Us",
            type:'dropdown',
            menu:[["overview","Overview"],[ "board",'Board Members'], ["message","D G Message"],["conenttDirector", "Content Director General"], ["organiziation","Organization Chart"],['strategy', "Our Stategy"],["cooperation","Cooperation Charter"]]
        }
        ,{
            title:"Surveys",
            type:'dropdown',
            menu:[["current","Current"],['future','Future']]
        },{
            title:"Statistics",
            type:'dropdown',
            menu:[['statistics',"Abu Dhabi Statistics"],['economy', "Economy"], ['',"Industry and Bussiness"],["", "Population And Demography"],['', "Social"],["", "Labor Force"],["", "Agriculture and environment"] ]
        },{
            title:"Interactive Tools",
            type:'dropdown',
            menu:[["","Mobile Apps"],['','Ebooks'],["","Data Visualization"],["","Info Graphics"]]
        },{
            title:"Methodology",
            type:'dropdown',
            menu:[["","Method and Statistical Standards"],["","Data Quailty"],["","Manuals and Classifications"]]
        },{
            title:"Services",
            type:'dropdown',
            menu:[["","General"],["","Government"]]
        },{
            title:"Media",
            type:'dropdown',
            menu:[["","Press Releases"],["","Gallery"]]
        },{
            title:'Contact Us',
            type:"link",
            link:'contact'
        }

    ]
    const HeaderNav = navHeader.map((item) => {
        if (item.type == "link"){
            return (
            <Nav.Item>
                <Nav.Link><Link to={"/"+ item.link}>{item.title}</Link></Nav.Link>
            </Nav.Item>
         );
        } else{
            return(
                <NavDropdown title={item.title} id="nav-dropdown">
                    {item.menu.map((link)=> {
                        return(
                        <NavDropdown.Item eventKey="1">
                            <Link to = {"/" + link[0]} >{link[1]}</Link>
                        </NavDropdown.Item>
                        );
                    
                    })}

                </NavDropdown>
            );
        }
    })
    return (
        <React.Fragment className="header-container">
            <Navbar expand="sm" className="header">
                <Container fluid className=" ">
                    <Row className="w-100">
                    <Col lg='3' md='1' sm="" className=" d-none d-md-flex mt-3 ">
                        <div className="changeLang d-flex  align-items-start">
                            <span className="  d-lg-inline d-md-none d-sm-none ">Change Your Language</span>
                            <Button size="sm" className="btn bg-home d-md-inline d-sm-none mx-1" onClick=''>English</Button>
                        </div>
                    </Col>
                    <Col lg="6" md="8" sm="12" className="">
                        <Form className=" d-md-flex d-sm-block ">
                        
                        <Form.Control size="sm"  type="search" placeholder="search" id="search-inp" className=" d-md-inline d-block mt-3"/>
                        <div className="d-flex mt-3">
                        <Form.Select size="sm" aria-label="Default select example" >

                            
                            <option value="1">SCAD Website search</option>
                            <option value="2">International Statistical Search</option>
                            
                        </Form.Select>
                        <Button size="sm" className="bg-home ">Search</Button>
                       
                        </div>
                        
                    </Form>
                    </Col>
                    <Col  lg={{span:2, offset:1}} md="3" sm="12"  className="mt-3">
                        <div className="logo-navbar d-flex  justify-content-md-end justify-content-between w-100 align-items-start ">
                        <Button size="sm" className="bg-home d-md-none d-sm-flex">English</Button>
                        <Image src={Logo} alt="logo"/>
                    </div>
                    </Col>
                   </Row> 

                </Container>

            </Navbar>
            <Navbar  expand="md" className="header-nav-list">
                <Container fluid="md" className="justify-content-end" >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav fill variant="tabs" className='w-100'>
                        {/* <Nav.Item>
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        </Nav.Item>

                        <NavDropdown title="About Us" id="nav-dropdown">
                            <NavDropdown.Item eventKey="1">
                                <Link to="/">Overview</Link>
                            </NavDropdown.Item>

                        </NavDropdown> */}
                        {HeaderNav}

                        
                    </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            
        </React.Fragment>
    )
}


export default Header;