import React, { Component } from 'react';
import Header from '../parts/Header';
import landingPage from '../json/landingPage.json';
import Hero from '../parts/Hero';
import MostPicked from '../parts/MostPicked';
import Categories from '../parts/Categories';
import Testimoni from '../parts/Testimoni';
import Footer from '../parts/Footer';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostpicked = React.createRef();
  }
  render() {
    console.log(this.props);
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostpicked={this.refMostpicked} data={landingPage.hero} />
        <MostPicked refMostpicked={this.refMostpicked} data={landingPage.mostPicked} />
        <Categories data={landingPage.categories} />
        <Testimoni data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
