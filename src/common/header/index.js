import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
	HeaderWrapper,
	Logo,
	Button,
	Menu,
	MenuItem,
	Addition,
	SearchWrapper,
	SearchHot,
	SearchHotTitle,
	SearchHotToggle,
	SearchHotItem,
	Search
} from './style.js'

const showSearchHot = (judge) => {
	if(judge) {
		return (
			<SearchHot>
				<SearchHotTitle>
					热门搜索
					<SearchHotToggle>换一批</SearchHotToggle>
				</SearchHotTitle>
				<ul>
					<SearchHotItem>区块链</SearchHotItem>
					<SearchHotItem>区块</SearchHotItem>
					<SearchHotItem>区块链</SearchHotItem>
					<SearchHotItem>区块</SearchHotItem>
					<SearchHotItem>区块</SearchHotItem>
					<SearchHotItem>区块</SearchHotItem>
					<SearchHotItem>区块链</SearchHotItem>
					<SearchHotItem>区块</SearchHotItem>
					<SearchHotItem>区块链</SearchHotItem>
					<SearchHotItem>区块</SearchHotItem>
					<SearchHotItem>区块</SearchHotItem>
					<SearchHotItem>区块</SearchHotItem>
				</ul>
			</SearchHot>
		)
	}
}

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
					{ showSearchHot(focused) }
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
	focused: state.getIn(['headerReducer', 'focused'])
})

const mapDispatchToProps = (dispatch) => {
	return {
		handleFocusSearch() {
			dispatch(actionCreators.searchFocus())
		},

		handleBlurSearch() {
			dispatch(actionCreators.searchBlur())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(header)
