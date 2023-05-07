import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default class Layout extends Component {
  render() {
    return (
      <>
      <Header/>
      <main>{this.props.children}</main>
      <Footer/>
      </>
    )
  }
}
