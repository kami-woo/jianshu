import React, { Component } from 'react'
import { AuthorWrapper, AuthorHeader, Authorex, AuthorItem, AuthorMsg } from '../styled'
import { connect } from 'react-redux'

class author extends Component {
  render() {
    const { authorList } = this.props
    return (
      <AuthorWrapper>
        <AuthorHeader>
          推荐作者
          <Authorex onClick = { () => { this.handleToggle(this.icon) } }>
            <i className="iconfont spin" ref={ (icon) => { this.icon = icon } }>&#xe851;</i>
            <span>换一批</span>
          </Authorex>
        </AuthorHeader>
        {
          authorList.map((item) => {
            item = item.toJS()
            return (
              <AuthorItem key={ item.id }>
                <img className="author-img" alt="" src={ item.imgUrl } />
                <AuthorMsg>
                  <div className="author-name">{ item.name }</div>
                  <div className="author-intr">{ item.intr }</div>
                </AuthorMsg>
              </AuthorItem>
            )
          })
        }
      </AuthorWrapper>
    )
  }

  handleToggle(icon) {
    let deg = icon.style.transform
    deg = deg.replace(/\D/g, '')
    let degInt = 0
    if(deg) degInt = parseInt(deg, 10)
    icon.style.transform = 'rotate(' + ( degInt+360 ) + 'deg)'
  }
}

const mapStateToProps = (state) => ({
  authorList: state.getIn(['homeReducer', 'authorList'])
})

export default connect(mapStateToProps, null)(author)
