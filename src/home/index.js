import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight } from './styled'
import { actionCreators } from './store'
import Recommend from './component/recommend'
import Article from './component/article'
import Popular from './component/popular'
import Author from './component/author'

class home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="banner" className="home-banner" src="//upload.jianshu.io/admin_banners/web_images/4360/e43e26feaaa603f1498b6ea48066d2d21e293237.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Recommend />
          <Article />
        </HomeLeft>
        <HomeRight>
          <Popular />
          <Author />
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getListInfo()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListInfo() {
      // console.log(actionCreators.getInfo)
      dispatch(actionCreators.getInfo)
    }
  }
}

export default connect(null, mapDispatchToProps)(home)
