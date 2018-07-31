import React, { Component } from 'react'
import { DetailWrapper, DetailTitle, DetailContent } from './styled'
import { connect } from 'react-redux'

class detail extends Component {
  render() {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <DetailTitle>
          { title }
        </DetailTitle>
        <DetailContent dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detailReducer', 'title']),
    content: state.getIn(['detailReducer', 'content'])
  }
}

export default connect(mapStateToProps, null)(detail)
