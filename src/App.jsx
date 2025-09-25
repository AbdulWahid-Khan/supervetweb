import { useState } from 'react'
import { Element } from 'react-scroll';
import './App.css'

import Hero from './components/hero'
import SecondComponent from './components/SecondComponent'
import StoryCardBottom from './components/storyCardBottom'
import GamePlay from './components/gamePlay'
import GamePlaySmartCard from './components/gamePlaySmartCard'
import VrTeaser from './components/VrTeaser'
import Drbrucetopred from './components/Drbrucetopred'
import DrBruceendpart from './components/DrBruceendpart'
import Brucesection from './components/Brucesection'
import DrBruceMain from './components/DrBruceMain'
import Tokencenterpart from './components/tokencenterpart'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Partner from './components/Partner'
import FuturePlanAI from './components/futurePlanAI'
import RoadMap from './components/roadMap'
import SuperNews from './components/superNews'
import PublishedBy from './components/publishedBy'
import Squad from './components/squad'
import FAQ from './components/FAQ'
import Mainlandingpage from "./components/Homelandingpage"
import Navbar from './components/navbar'
import Home from './components/home'
import Bruce from './components/Bruce'
import Homepage from './components/main'



function App() {
 return (
    <>
{/* <Home/>

<SecondComponent/>
<GamePlay/>
<VrTeaser/>
<Brucesection/>
<Tokencenterpart/>
<Partner /> 
<FuturePlanAI/>
 <RoadMap />
  <SuperNews />
 <PublishedBy/>
 <Squad />
  <FAQ /> */}
 


{/* <Navbar /> */}
{/* <DrBruceMain/> */}
 {/* <Route path="/drbruce" element={<DrBruceMain />} /> */}


    <Router>
    <Routes>
        <Route path="/" element={<Homepage />} />
       
    </Routes>
   </Router> 

    </>
  );
}


export default App;