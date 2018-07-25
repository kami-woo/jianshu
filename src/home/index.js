import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './styled'
import Recommend from './component/recommend'

class home extends Component {
	render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="banner" className="home-banner" src="//upload.jianshu.io/admin_banners/web_images/4360/e43e26feaaa603f1498b6ea48066d2d21e293237.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Recommend />
        </HomeLeft>
        <HomeRight>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default home
