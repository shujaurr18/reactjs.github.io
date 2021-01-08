import React, {Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';

class Navbar extends Component{
  constructor(){
    super();
    this.state={
      show:false
    }
  }
render(){
  return(
        <>

<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <NavLink className="nav-link arr1" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link arr2" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link arr3" to="/services">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link arr4" to="/appointment">Appointment</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link arr5" to="/contact">Contact</NavLink>
      </li>
     
      
      
    </ul>
    
  </div>
  <form className="form-inline my-2 my-lg-0">
    <a onClick={()=>{this.setState({show:!this.state.show})}}   to='' ><i   className="fa fa-fw fa-search"></i> </a>
    {
      this.state.show ?
      <input  id="search-form" className="form-control mr-sm-2 searcharea " type="search" placeholder="Search" aria-label="Search"/>
      :null
    }
          </form>
</nav>

   
   
        
        </>
    )
  }
}
export default Navbar;