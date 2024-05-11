import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/common/header/Header"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import Cinema from "./components/cinéma/Cinema"
import musique from "./components/cinéma/musique"
import Singlepages from './components/singlePages/Singlepages'
import Entrepreneuriat from './components/cinéma/Entrepreneuriat'
import Art from "./components/cinéma/Art"
import Focus from './components/cinéma/Focus'
import Rdv from './components/cinéma/Rdv'
import Replay from './components/cinéma/Replay'


function App ()  {
  return (
    <>
     <Router>
    <Header/>
      <Switch>
        <Route exact path='/' component={Homepages} />
        <Route exact path='/singlepage/:id' component={Singlepages} />
        <Route exact path='/cinéma' component={Cinema} />
        <Route exact path='/musique' component={musique} />
        <Route exact path='/Art' component={Art} />
        <Route exact path='/Focus' component={Focus} />
        <Route exact path='/Entrepreneuriat' component={Entrepreneuriat} />
        <Route exact path='/Rdv' component={Rdv} />
        <Route exact path='/Replay' component={Replay} />
      </Switch>
      <Footer/>
    </Router>
    
    </>
  )
}

export default App