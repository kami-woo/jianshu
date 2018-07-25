import React, { Component, Fragment } from 'react'
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './home'

class App extends Component {
	render() {
		return (
			<div>
				<Provider store = { store }>
					<Fragment>
						<Header />
						<BrowserRouter>
							<Fragment>
								<Route path="/" exact component={ Home } />
							</Fragment>
						</BrowserRouter>
					</Fragment>
				</Provider>
			</div>
		)
	}
}

export default App
