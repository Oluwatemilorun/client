import React, { Component } from 'react'
import { NextPageContext } from 'next'
import Router from 'next/Router'

import { 
	Grid
} from '@material-ui/core'

export default class DefaultLayout extends Component {

	static getInitialProps = ({ res, err }) => {
		// On the server-side you can check authentication status directly
		// However in general you might want to call API Routes to fetch data
		// An example of directly checking authentication:
		if (typeof window === 'undefined') {
			const user = {}
			if (!user) {
				reswriteHead(302, {
					Location: '/api/login'
				})
				resend()
				return
			}
			return { user }
		}

		// To do fetches to API routes you can pass the cookie coming from the incoming request on to the fetch
		// so that a request to the API is done on behalf of the user
		// keep in mind that server-side fetches need a full URL, meaning that the full url has to be provided to the application

		// TODO: get user from cookie
		// const cookie = req && req.headers.cookie
		const user = null

		// A redirect is needed to authenticate to Auth0
		if (!user) {
			if (typeof window === 'undefined') {
				reswriteHead(302, {
					Location: '/api/login'
				})
				return resend()
			}

			window.location.href = '/'
		}

		return { user }
	}

	render() {
		return (
			<Grid>

			</Grid>	
		);
	}
}