import React, { Component, Fragment } from 'react'
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'

class App extends Component {
	render() {
		return (
			<div>
				<Provider store = { store }>
					<BrowserRouter>
						<Fragment>
							<Header />
							<Route path="/" exact component={ Home } />
							<Route path="/detail/:id" exact component={ Detail } />
							<Route path="/login" exact component={ Login } />
						</Fragment>
					</BrowserRouter>
				</Provider>
			</div>
		)
	}
}

export default App
