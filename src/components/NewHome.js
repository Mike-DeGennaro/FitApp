import React from 'react';
import './newHome.css';
import ProductRow from './Products';
import Tracker from './Tracker';
import Calculator from './Calculator';
import { BrowserRouter as Router, Switch, Route, Link, HashRouter,
    NavLink, useLocation}
from "react-router-dom";
import Anim from './HomeAnim';
import { AnimatePresence, motion} from 'framer-motion';

const pageTransition ={
 in: {
     opacity:1,
     y:0,
 },
 out: {
     opacity:1,
     y: -100,
 }
}; 
const moreTrans = {
    duration:5
}





const home = () => (
    <motion.div initial='out'
    animate='in'
    exit='out'
    variants={pageTransition}
     id="slides">
    <nav>
      <i className="fa fa-chevron-circle-down" id="next"></i>
    </nav>
    <div className="slide slide0">
      <div  whileHover={{ rotate:360 }} id="title">
        <motion.h1 id='nan' whileHover={{ scale: 1.05, skew:1,
          }}>Mike's Fitness Tracker</motion.h1>
<Anim />

      </div>
    </div>
    </motion.div>
)

const second = () => (
    <motion.div  initial='out'
    animate='in'
    exit='out'
    variants={pageTransition}
     id="slides">
    <nav>
      <i className="fa fa-chevron-circle-down" id="next"></i>
    </nav>
    <div className="slide slide1">
    <ProductRow />
  </div>       
  </motion.div>  
)

const third = () => (
    <motion.div  initial='out'
    animate='in'
    exit='out'
    variants={pageTransition}
     id="slides">
    <nav>
      <i className="fa fa-chevron-circle-down" id="next"></i>
    </nav>
    <div className="slide slide2">
<Tracker />
        </div>     
  </motion.div>  
)

const fourth = () => (
    <motion.div  initial='out'
    animate='in'
    exit='out'
    variants={pageTransition}
     id="slides">
    <nav>
      <i className="fa fa-chevron-circle-down" id="next"></i>
    </nav>
    <div className="slide slide3">
<Calculator />
         </div>      
  </motion.div>  
)

const Main = () => (
    <div className='notSure'>
<Route exact path ='/' component={home}/>
<Route exact path ='/second' component={second}/>
<Route exact path ='/third' component={third}/>
<Route exact path ='/fourth' component={fourth}/>
    </div>
)

function Navigation () { 
    const location = useLocation();
    return(
    <nav id='route-nav'>
     <AnimatePresence exitBeforeEnter>
    <Switch location={location}>
    <NavLink id='route' to='/' activeClassName='active' exact={true}>Home</NavLink>
    </Switch>
    <NavLink id='route' to='/second' activeClassName='active' exact={true}>Lift Tracker</NavLink>
    <NavLink id='route' to='/third' activeClassName='active' exact={true}>Food Tracker</NavLink>
    <NavLink id='route' to='/fourth' activeClassName='active' exact={true}>Calorie Calculator</NavLink>
    </AnimatePresence>
    </nav>
)};

function App () {
 const location = useLocation();
    return(
    <div className = "wrapper">
      <Navigation />
      <Main />
    </div>
    )
    }

  export default App;