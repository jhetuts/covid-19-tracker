import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'

export default class ContainerLayout extends Component {
  state = {
    loading: true,
    globalData: {}
  };

  componentDidMount(){
    axios.get('https://covid19.mathdro.id/api')
    .then(res => {
      if (res && res.status === 200) {
        this.getData(res.data);
      }
    });
  }


  getData = data => {
    this.setState({
      loading: false,
      globalData: data
    });

    console.log(this.state.globalData);
  }

  render() {
    let cards;
    return (
      <div className="container"> 
        <section className="section-grid-3">
          <h2>Confirmed</h2>
          <p>{ this.state.loading ? '...' : this.state.globalData.confirmed.value}</p>
        </section>
        <section className="section-grid-3">
          <h2>Recovered</h2>
          <p>{ this.state.loading ? '...' : this.state.globalData.recovered.value}</p>
        </section>
        <section className="section-grid-3">
          <h2>Deaths</h2>
          <p>{ this.state.loading ? '...' : this.state.globalData.deaths.value}</p>
        </section>
      </div>
    )
  }
}
