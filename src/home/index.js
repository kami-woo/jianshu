import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './styled'
import { actionCreators } from './store'
import Recommend from './component/recommend'
import Article from './component/article'
import Popular from './component/popular'
import Author from './component/author'
import Load from './component/load'

class home extends PureComponent {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  render() {
    const { show } = this.props
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="banner" className="home-banner" src="//upload.jianshu.io/admin_banners/web_images/4360/e43e26feaaa603f1498b6ea48066d2d21e293237.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Recommend />
          <Article />
          <Load />
        </HomeLeft>
        <HomeRight>
          <Popular />
          <Author />
        </HomeRight>
        <BackTop className={ show ? "" : "hidden" } onClick={ this.handleScrollTop } >
          <i className="iconfont" >&#xe81b;</i>
        </BackTop>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getListInfo()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  handleScroll() {
    if(document.documentElement.scrollTop > 100) {
      this.props.scrollShow()
    } 
    else {
      this.props.scrollHidden()
    }
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.getIn(['homeReducer', 'show'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListInfo() {
      dispatch(actionCreators.getInfo)
    },

    scrollShow() {
      dispatch(actionCreators.showBackTop(true))
    },

    scrollHidden() {
      dispatch(actionCreators.showBackTop(false))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(home)
