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
  }],

  artList: [{
    id: 1,
    imgUrl: "//upload-images.jianshu.io/upload_images/12079726-3ad55d777dfdb136.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    title: "你越喜爱，我越可爱",
    desc: "单纯的交友贴！99年，马上变成大二的学姐，目前在山西，喜欢文字/拍照/唱歌ヾ(´∀｀。ヾ)最喜欢的还是唱歌啦"
  }, {
    id: 2,
    imgUrl: "//upload-images.jianshu.io/upload_images/9824247-ea505ceee4324375.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    title: "从SpringBoot到SpringMVC",
    desc: "用久了SpringBoot，深受其约定大于配置的便利性 “毒害” 之后，我想回归到SpringMVC时代，看看SpringMVC开"
  }],

  popList: [{
    id: 1,
    imgUrl: "//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
  }, {
    id: 2,
    imgUrl: "//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
  }, {
    id: 3,
    imgUrl: "//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
  }, {
    id: 4,
    imgUrl: "//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
  }, {
    id: 5,
    imgUrl: "//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
  }],
  
  authorList: [{
    id: 1,
    name: "徐林Grace",
    imgUrl: "//upload.jianshu.io/users/upload_avatars/5545154/1a3d5ed6-9ad1-44b3-9457-3e6a29dd1b71.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
    intr: "写了433.9k字 · 4.1k喜欢"
  }, {
    id: 2,
    name: "徐林Grace",
    imgUrl: "//upload.jianshu.io/users/upload_avatars/5545154/1a3d5ed6-9ad1-44b3-9457-3e6a29dd1b71.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
    intr: "写了433.9k字 · 4.1k喜欢"
  }, {
    id: 3,
    name: "徐林Grace",
    imgUrl: "//upload.jianshu.io/users/upload_avatars/5545154/1a3d5ed6-9ad1-44b3-9457-3e6a29dd1b71.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
    intr: "写了433.9k字 · 4.1k喜欢"
  }, {
    id: 4,
    name: "徐林Grace",
    imgUrl: "//upload.jianshu.io/users/upload_avatars/5545154/1a3d5ed6-9ad1-44b3-9457-3e6a29dd1b71.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
    intr: "写了433.9k字 · 4.1k喜欢"
  }]
})

export default (prevState = defaultState, action) => {
  return prevState
}
