import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';
import {
	HeaderWrapper,
	Logo,
	Button,
	Menu,
	MenuItem,
	Addition,
	SearchWrapper,
	Search
} from './style.js'

class header extends Component {

	constructor(props) {
		super(props)
		this.state = {
			focused: false
		}
		this.handleFocusSearch = this.handleFocusSearch.bind(this)
		this.handleBlurSearch = this.handleBlurSearch.bind(this)
	}

	render() {
		return (
			<HeaderWrapper>
				<Logo />
				<Menu>
					<MenuItem className="left home"> 首页 </MenuItem>
					<MenuItem className="left"> 下载APP </MenuItem>
					<MenuItem className="right"> 登录 </MenuItem>
					<MenuItem className="right">
						<i className="iconfont">&#xe636;</i>
					</MenuItem>
					<SearchWrapper>
						<CSSTransition
							in={ this.state.focused }
							timeout={ 400 }
							classNames="slide"
						>
							<Search 
								className={ this.state.focused ? 'focused' : '' } 
								onFocus={ this.handleFocusSearch }
								onBlur={ this.handleBlurSearch }
							/>
						</CSSTransition>
						<i className={ this.state.focused ? 'focused iconfont' : 'iconfont' }>&#xe7d4;</i>
					</SearchWrapper>
				</Menu>
				<Addition>
					<Button className="writting">
						<i className="iconfont">&#xe608;</i>
						写文章
					</Button>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}

	handleFocusSearch() {
		this.setState(() => ({
			focused: true
		}))
	}

	handleBlurSearch() {
		this.setState(() => ({
			focused: false
		}))
	}
}

export default header
