import React, { Component } from 'react'
import _Head from 'next/head'

export class Head extends Component {
	render() {
		return (
			<_Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,shrink-to-fit=no" />
				<meta name="theme-color" content="#13D596" />
				<meta name="msapplication-navbutton-color" content="#13D596" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#13D596" />
				<meta name="msapplication-TileColor" content="#13D596" />
				<meta property="og:title" content="Real Drip" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Real Drip" />
				<title>{this.props.title} | Real Drip</title>
				{/* <link rel="manifest" href="../manifest.json" /> */}
			</_Head>
		)
	}
}
