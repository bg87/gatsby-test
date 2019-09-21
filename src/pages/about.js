import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const AboutPage = () => {
	return (
		<Layout>
			<h1>Aboot me</h1>
			<Link to="/contact">Contact me</Link>
		</Layout>
	)
}

export default AboutPage