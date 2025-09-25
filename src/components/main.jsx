import React from 'react';
import { Element } from 'react-scroll';
import Hero from './hero';
import SecondComponent from './SecondComponent';
import GamePlay from './gamePlay';
import VrTeaser from './VrTeaser';

import Tokencenterpart from './tokencenterpart';
import Partner from './Partner';
import FuturePlanAI from './futurePlanAI';
import RoadMap from './roadMap';
import SuperNews from './superNews';
import PublishedBy from './publishedBy';
import Squad from './squad';
import FAQ from './FAQ';
import Brucesection from './Brucesection';
import Home from './home';
const Homepage = () => {
  return (
    <div>
      <Element name="hero"><Home /></Element>
      <Element name="second"><SecondComponent /></Element>
      <Element name="gameplay"><GamePlay /></Element>
      <Element name="vrteaser"><VrTeaser /></Element>
      <Element name="bruce"><Brucesection /></Element>
      <Element name="token"><Tokencenterpart /></Element>
      <Element name="partners"><Partner /></Element>
      <Element name="future-ai"><FuturePlanAI /></Element>
      <Element name="roadmap"><RoadMap /></Element>
      <Element name="news"><SuperNews /></Element>
      <Element name="published"><PublishedBy /></Element>
      <Element name="squad"><Squad /></Element>
      <Element name="faq"><FAQ /></Element>
    </div>
  )
}

export default Homepage
