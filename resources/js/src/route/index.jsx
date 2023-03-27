import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../utils/auth'

const storeLastUrl = () => {
	const currentUrl = window.location.pathname
	localStorage.currentUrlsession = JSON.stringify({
		lastUrl: currentUrl 
	})
}
const PrivateRoute = ({
	redirectPath = '/sign_in',
	children
}) => {
	storeLastUrl()
	var url = null
	if (isAuthenticated()) {
		url = children
	} else {
		url = <Navigate to={redirectPath} replace />
	}
	return url;
}

const PublicRoute = ({
	children
}) => {
	storeLastUrl()
	return children;
}
export { PrivateRoute, PublicRoute }