import React, { Component } from 'react';
import Header from '../parts/Header';
import landingPage from '../json/landingPage.json';
import Hero from '../parts/Hero';
import MostPicked from '../parts/MostPicked';
import Categories from '../parts/Categories';

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
        <Hero refMostpicked={this.refMostpicked} data={landingPage.hero}></Hero>
        <MostPicked refMostpicked={this.refMostpicked} data={landingPage.mostPicked}></MostPicked>
        <Categories data={landingPage.categories}></Categories>
      </>
    );
  }
}
