import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import imgloc from '../src/img/location-2.png'
import imgweb from '../src/img/map.png'
import {FaFacebookF,FaTwitter,FaPinterestP,FaGooglePlusG,FaYoutubeSquare} from 'react-icons/fa';
import imglogo from '../src/img/logo.png'

const Topnav =()=>{
    return(
        <>
    <div className="container-fluid" >
<div className="row border-bottom ">
    <div className="col-lg-3 col-md-4  offset-lg-1  center_align " >
       <p> <img src={imgloc} alt="" />3015 Grand Ave, Grove,Merrick Way   </p> 
    </div>
    <div className="col-lg-3 col-md-4   center_align " >
    
       <p   > <img src={imgweb} alt="" />   www.advanceauto.com   </p> 
      
    </div>
    <div className="col-lg-5 col-md-4 soical_icons" >

<div className="border-left border-right p-1 icon_sty" >
<FaFacebookF/>
</div>
<div className="border-left border-right p-1 icon_sty" >
<FaTwitter/>
</div>
<div className="border-left border-right p-1 icon_sty" >
<FaPinterestP/>
</div>
<div className="border-left border-right p-1 icon_sty" >
<FaGooglePlusG/>
</div>
<div className="border-left border-right p-1 icon_sty" >
<FaYoutubeSquare/>
</div>



    </div>



</div>

    </div>
    <div className="container-fluid" >
        <div className="row topnavbgclr" >

        <div className="topnavlogo m-auto" >


<img src={imglogo} alt=""/>

</div>
        </div>

    </div>
    
        </>
    )

} 
export default Topnav;