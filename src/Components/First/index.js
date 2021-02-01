import Header from "../Header/index";
import Home from "../../Pages/Home/index";
import Exhibition from "../../Pages/Exhibition/index";
import Technology from "../../Pages/Technology/index";
import About from "../../Pages/About/index";
import Customer from "../../Pages/Customer/index";
import Contact from "../../Pages/Contact/index";
import Footer from "../Footer/index";



function First() {
    return (
      <div>
        
        <Header/>
        <Home />
        
        <Exhibition />
  
        <Technology />        
  
        <About />
  
        <Customer/>
        
        <Contact />
        <Footer/>
  
      </div>
    );
  }
  
  export default First;