import { fromJS } from 'immutable'

const defaultState = fromJS({
  imgList: [{
      alt: "1",
      imgUrl: "//upload.jianshu.io/collections/images/75/22.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
      title: "历史"
    }, {
      alt: "2",
      imgUrl: "//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
      title: "手绘"
    }]
})

export default (prevState = defaultState, action) => {
  return prevState
}
