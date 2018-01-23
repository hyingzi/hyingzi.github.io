import React, { Component } from 'react'
import Head from 'next/head'
import site from '../site.config'
import Header from './header'
import Footer from './footer'

class Page extends Component {
  render () {
    const {props} = this
    return (
      <div className='app'>
        <Head>
          <meta charset='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <meta name='keywords' content='hyingzi xiaoaojiao' />
          <meta name='description' content='hello world' />
          <title>{props.title} - {site.sitename}</title>
          <link rel='stylesheet' href='/static/global.css' />
        </Head>
        <Header />
        <div className='global-content'>{props.children}</div>
        <Footer />
      </div>
    )
  }
}

export default Page
