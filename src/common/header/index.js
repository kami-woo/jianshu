import React, { Component } from 'react'
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

class header extends Component {
	render() {
		const { focused, list, handleFocusSearch, handleBlurSearch } = this.props
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
								onFocus={ () => { handleFocusSearch(list) } }
								onBlur={ handleBlurSearch }
							/>
						</CSSTransition>
						<i className={ focused ? 'focused iconfont zoom' : 'iconfont zoom' }>&#xe7d4;</i>
						{ this.showSearchHot() }
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

	showSearchHot () {
		const { focused, mouseIn, list, page, handleMouseEnter, handleMouseLeave, handleToggle } = this.props
		const pageList = [], jsList = list.toJS()
		for (let i = page*10; i < (page+1)*10 && i < list.size; i++) {
			pageList.push(jsList[i])
		}
		if(focused || mouseIn) {
			return (
				<SearchHot 
					onMouseEnter={ handleMouseEnter }
					onMouseLeave={ handleMouseLeave }
				>
					<SearchHotTitle>
						热门搜索
						<SearchHotToggle onClick={ () => { handleToggle(this.icon) } }>
							<i className="iconfont spin" ref={ (icon) => { this.icon = icon } }>&#xe851;</i>
							<span>换一批</span>
						</SearchHotToggle>
					</SearchHotTitle>
					<ul>
						{ this.showList(pageList) }
					</ul>
				</SearchHot>
			)
		}
		else return null
	}

	showList (list) {
		if(list.length === 0) return null
		else {
			return (
				list.map((value) => {
					return (
						<SearchHotItem key={ value }>{ value }</SearchHotItem>
					)
				})
			)
		}
	}
}

const mapStateToProps = (state) => ({
	focused: state.getIn(['headerReducer', 'focused']),
	list: state.getIn(['headerReducer', 'list']),
	mouseIn: state.getIn(['headerReducer', 'mouseIn']),
	page: state.getIn(['headerReducer', 'page']),
	totalPage: state.getIn(['headerReducer', 'totalPage'])
})

const mapDispatchToProps = (dispatch) => {
	return {
		handleFocusSearch(list) {
			(list.size === 0) && dispatch(actionCreators.getInfo())
			dispatch(actionCreators.searchFocus())
		},

		handleBlurSearch() {
			dispatch(actionCreators.searchBlur())
		},

		handleMouseEnter() {
			dispatch(actionCreators.searchMouseEnter())
		},

		handleMouseLeave() {
			dispatch(actionCreators.searchMouseLeave())
		},

		handleToggle(icon) {
			let deg = icon.style.transform
			deg = deg.replace(/\D/g, '')
			let degInt = 0
			if(deg) {
				degInt = parseInt(deg, 10)
			}
			icon.style.transform = 'rotate(' + ( degInt+360 ) + 'deg)'
			dispatch(actionCreators.searchToggle())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(header)
