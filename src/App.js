import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Home from "./components/Home";
import OverView from "./components/OverView";
import FAQs from "./components/FAQs";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SiteMap from "./components/siteMap/SiteMap";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
      {/* <button className="btn btn-success">this by bootstrap</button> */}
        <div className="header-container">
          <Header/>
          </div>
        <Switch>
          <Route exact path="/">
            <Home/>

          </Route>
          <Route path="/overview">
            <OverView/>
            
          </Route>
          <Route path="/contact">
            <h1>Contact us</h1>
          </Route>
          <Route path="/SiteMap">
            <SiteMap/>
          </Route>
          <Route path="/faqs">
            <FAQs/>
          </Route>
          <Route path="/PrivacyPolicy">
            <PrivacyPolicy />
          </Route>
          <Route path="/contact">
            <ContactUs/>
          </Route>

        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
