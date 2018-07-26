import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ArticleWrapper, ArticleItem } from '../styled'

class article extends Component {
  render() {
    const { artList } = this.props
    return (
      <ArticleWrapper>
      {
        artList.map((artItem) => {
          artItem = artItem.toJS()
          return (
            <ArticleItem key={ artItem.id }>
              <img className="art-img" alt="" src={ artItem.imgUrl } />
              <a className="title">{ artItem.title }</a>
              <span className="desc">{ artItem.desc }</span>
            </ArticleItem>
          )
        })
      }
      </ArticleWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  artList: state.getIn(["homeReducer", "artList"])
})

export default connect(mapStateToProps, null)(article)
