import React, { Component } from 'react'
import Head from 'next/head'
import site from '../site.config'

export default class extends Component {
  render () {
    return (
      <div className='xiaoaojiao'>
        <Head>
          <meta charset='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <meta name='keywords' content='hyingzi xiaoaojiao' />
          <meta name='description' content='hello world' />
          <title>{site.sitename}</title>
          <link rel='stylesheet' href='/static/index.css' />
        </Head>
        <div className='xiaoaojiao-footer'>
          <div className='xiaoaojiao-footer-content'>
            <p>© 2018 xiao.aojiao</p>
          </div>
        </div>
      </div>

    )
  }
}
