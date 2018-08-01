import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { PopularWrapper, PopularItem, PopularTdc } from '../styled'

class popular extends PureComponent {
  render() {
    const { popList } = this.props
    return (
      <PopularWrapper>
      {
        popList.map((popItem) => {
          popItem = popItem.toJS()
          return (
            <PopularItem key={ popItem.id }>
              <img className="pop-img" alt="" src={ popItem.imgUrl } />
            </PopularItem>
          )
        })
      }
        <PopularTdc>
          <img className="Tdc-img" alt="" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
          <div className="content" >
            <p className="title" >下载简书手机APP</p>
            <p className="desc" >随时随地发现和创作内容</p>
          </div>
        </PopularTdc>
      </PopularWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  popList: state.getIn(["homeReducer", "popList"])
})

export default connect(mapStateToProps, null)(popular)
