import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoadMore } from '../styled'
import { actionCreators } from '../store'

class load extends Component {
  render() {
    const { getMoreArticle } = this.props
    return(
      <LoadMore onClick={ getMoreArticle }>加载更多</LoadMore>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    getMoreArticle() {
      dispatch(actionCreators.loadMore)
    }
  }
}

export default connect(null, mapDispatch)(load)
