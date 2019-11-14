import React from 'react'
import App from 'next/app'

import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { Head } from '@/components'
import { Theme, getPageContext } from '@/lib'

export default class RealDripApp extends App {
	pageContext
	
	constructor(props) {
		super(props)

		this.pageContext = getPageContext()
	}

	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<React.Fragment>
				<Head title={'Welcome'}></Head>
				<ThemeProvider theme={Theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</React.Fragment>
		)
	}
}
