import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { ArticleWrapper, ArticleItem } from '../styled'
import { Link } from 'react-router-dom'

class article extends PureComponent {
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
              <Link className="title" to={ "/detail/" + artItem.id }>{ artItem.title }</Link>
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
