import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: '北方人最爱这饼，比千层饼好做又好吃，2分钟学会，一辈子吃不腻',
  content: '<img alt="" src="//upload-images.jianshu.io/upload_images/4762891-8d9d12a8c7351197" /><p>北方人最爱这样的饼，比千层饼好做又好吃，柔软层次多，做法也特别简单，2分钟就能学会，一辈子都不会吃腻的。不发面的千层饼吃起来会比较腻，而今天这个千层饼，不仅不腻，而且越吃越香，因为发面之后的千层饼，涂抹了油酥，多余的油脂全被在煎的过程中，发起来的面吸收了，所以饼吃起来不仅不腻，反而越吃越香，尤其是搭配一碗温粥，一盘小青菜，最适合夏天吃了。</p>'
})

export default (state = defaultState, action) => {
  return state
}
