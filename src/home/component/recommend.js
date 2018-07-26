import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem } from '../styled'
import { connect } from 'react-redux'

class recommend extends Component {
  render() {
    const { imgList } = this.props
    return (
      <RecommendWrapper>
        { 
          imgList.map((imgItem) => {
            imgItem = imgItem.toJS()
            return (
              <RecommendItem key={imgItem.id}>
                <img alt="" className="re-img" src={ imgItem.imgUrl } />
                <span className="re-title" >{ imgItem.title }</span>
              </RecommendItem>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  imgList: state.getIn(["homeReducer", "imgList"])
})

export default connect(mapStateToProps, null)(recommend)
