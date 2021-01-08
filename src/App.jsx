import React from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'
import Appointment from './Appointment'
import Contact from './Contact'
import { Switch , Route } from 'react-router-dom';

const App =()=>{
    return(
        <>
<Switch>
        <Route  exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/appointment" component={Appointment} />
        <Route exact path="/contact" component={Contact} />
   
        </Switch>
        </>
    )

}
export default App;