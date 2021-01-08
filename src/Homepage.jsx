import React from 'react'
const Homepage =()=>{
    return(
        <>
        <div className="container-fluid" >
            <div className="row">
               
                <div className="bghome">
                    <div className="homecontent">
                <div className="container-lg container-fluid-md">
                    <div className="row  ">
                        
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <div className="mainheading">
<h1>Best Car Repair</h1>
<h1>and Maintenance Services</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque non asperiores nesciunt.</p>
     <button className="btncontactus">Contact Us</button>                     
                          
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <div className="maindiscount">
                                <div className="dicountheading" >
                                <h1>Get <span>30%</span>Discount</h1>
                                </div>
                            <form className="discountform" action="/action_page.php">
    <div className="form-group">
      <label for="email">Name*</label>
      <input type="txt" className="form-control" id="email" placeholder=" " name="name"/>
    </div>
    <div className="row">
    <div className="col">
    <label for="tel">Phone*</label>
    </div>
    <div className="col">
    <label for="email">Repair*</label>
    </div>
  </div>
    <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder=" "/>
    </div>
    <div className="col">
    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected >Choose... </option> 
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
  <div classNameName="btncontainer">
    <button type="submit" className="btn btn-primary btndiscount">Get Discount</button>
    </div>
  </form>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
              


                </div>
            </div>
        </div>
        </>
    )

}
export default Homepage;