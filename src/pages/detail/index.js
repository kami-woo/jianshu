import React, { Component } from 'react'
import { DetailWrapper, DetailTitle, DetailContent } from './styled'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'

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

  componentDidMount() {
    this.props.getData(this.props.match.params.id)
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detailReducer', 'title']),
    content: state.getIn(['detailReducer', 'content'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData(id) {
      dispatch(actionCreators.getDetailData(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(detail))
