import { faAddressCard, faBlind, faCertificate, faChartLine, faGlobe, faLayerGroup, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav, Container,Navbar, NavDropdown } from 'react-bootstrap'
import "../css/Home.css"


function NavbarHome() {
    return (
        <div className="navbar-home">
           <Navbar expand="sm">
               <Container >
                <Nav activeKey="/" >
                    <Nav.Item  className="nav-home-item">
                        <Nav.Link href="/">
                            <div className="nav-home-icon"  style={{backgroundColor:"var(--AbouDhabiStatistics)"}} >
                                <FontAwesomeIcon icon={faChartLine}/>
                            </div>
                            <div className="nav-home-header"  style={{backgroundColor:"var(--AbouDhabiStatistics)"}}>
                                ABU DHABI STATISTICS
                            </div>
                        </Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        
                    </Nav.Item>
                    <Nav.Item className="nav-home-item">
                        <Nav.Link>
                            <div className="nav-home-icon"  style={{backgroundColor:"var(--Economy)"}}>
                                <FontAwesomeIcon icon={faCertificate}/>
                            </div>
                            <div className="nav-home-header"  style={{backgroundColor:"var(--Economy)"}}>
                                ECONOMY
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-home-item">
                        <Nav.Link>
                            <div className="nav-home-icon" style={{backgroundColor:"var(--Industy)"}}>
                                <FontAwesomeIcon icon={faGlobe}/>
                            </div>
                            <div className="nav-home-header" style={{backgroundColor:"var(--Industy)"}}>
                                INDUSTRY & BUSINESS
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-home-item" >
                        <Nav.Link>
                            <div className="nav-home-icon" style={{backgroundColor:"var(--Population)"}}>
                                <FontAwesomeIcon icon={faLayerGroup}/>
                            </div>
                            <div className="nav-home-header" style={{backgroundColor:"var(--Population)"}}>
                                POPULATION & DEMOGRAPHY
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-home-item">
                        <Nav.Link>
                            <div className="nav-home-icon" style={{backgroundColor:"var(--socialStatistics)"}}>
                                <FontAwesomeIcon icon={faAddressCard}/>
                            </div>
                            <div className="nav-home-header" style={{backgroundColor:"var(--socialStatistics)"}}>
                                SOCIAL STATISTICS
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-home-item">
                        <Nav.Link>
                            <div className="nav-home-icon" style={{backgroundColor:"var(--Labout)"}}>
                                <FontAwesomeIcon icon={faBlind}/>
                            </div>
                            <div className="nav-home-header" style={{backgroundColor:"var(--Labout)"}}>
                                LABOUR FORCE
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-home-item">
                        <Nav.Link>
                            <div className="nav-home-icon" style={{backgroundColor:"var(--Agriculture)"}}>
                                <FontAwesomeIcon icon={faLeaf}/>
                            </div>
                            <div className="nav-home-header" style={{backgroundColor:"var(--Agriculture)"}}>
                                AGRICULTURE & ENVIRONMENT
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
               </Container>
           </Navbar>
        </div>
    )
}

export default NavbarHome
