import React, { Component } from 'react'

export default class Error extends Component {
	static getInitialProps = ({ res, err }) => {
		const statusCode = res ? res.statusCode : err ? err.statusCode : 404
		return { statusCode }
	}

	render() {
		return (
			<p>
				{
					this.props.statusCode
						? `An error ${this.props.statusCode} occurred on server`
						: 'An error occurred on client'
				}
			</p>
		)
	}

}