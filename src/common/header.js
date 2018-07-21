import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { BEARCH_FOCUS, BEARCH_BLUR } from '../store/actionTypes'
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

const header = (props) => {
	const { focused, handleFocusSearch, handleBlurSearch } = props
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
						in={ focused }
						timeout={ 400 }
						classNames="slide"
					>
						<Search 
							className={ focused ? 'focused' : '' } 
							onFocus={ handleFocusSearch }
							onBlur={ handleBlurSearch }
						/>
					</CSSTransition>
					<i className={ focused ? 'focused iconfont' : 'iconfont' }>&#xe7d4;</i>
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

const mapStateToProps = (state) => ({
	focused: state.focused
})

const mapDispatchToProps = (dispatch) => {
	return {
		handleFocusSearch() {
			const action = {
				type: BEARCH_FOCUS
			}
			dispatch(action)
		},

		handleBlurSearch() {
			const action = {
				type: BEARCH_BLUR
			}
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(header)
