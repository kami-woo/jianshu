import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  overflow: hidden
  margin: 0 auto;
  padding-top: 90px;
`

export const HomeLeft = styled.div`
  width: 640px;
  float: left;

  .home-banner {
    display: block;
    margin-left: 15px;
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  width: 280px;
  height: 300px;
  float: right;
`

export const RecommendWrapper = styled.div`
  box-sizing: border-box;
  margin-top: 40px;
  margin-left: 15px;
`

export const RecommendItem = styled.div`
  display: inline-block;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  line-height: 32px;
  margin: 0 25px 18px 0;

  .re-img {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
  }

  .re-title {
    margin: 0 11px;
    font-size: 14px;
  }
`

export const ArticleWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  border-top: 1px solid #f0f0f0;
`

export const ArticleItem = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding: 25px 0 25px 15px;
  position: relative;

  .title {
    text-decoration:none;
    display: block;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    color: #333;
  }

  .art-img {
    position: absolute;
    right: 0;
    top: 30px;
    width: 125px;
    height: 100px;
  }

  .desc {
    display: block;
    color: #999;
    line-height: 24px;
    font-size: 13px;
    margin: 10px 150px 15px 0;
  }
`

export const PopularWrapper = styled.div`
  margin-top: -5px;
`

export const PopularItem = styled.a`
  display: block;
  margin-bottom: 4px;
  .pop-img {
    width: 280px;
    height: 50px;
  }
`

export const PopularTdc = styled.a.attrs({
  href: "https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click",
  target: "_blank"
})`
  display: flex;
  margin-top: 10px;
  padding: 10px 0 10px 20px;
  border: 1px solid #f0f0f0;
  text-decoration:none

  .Tdc-img {
    width: 60px;
    height: 60px;
  }

  .title {
    margin: 10px 0 10px 10px;
    font-size: 15px;
    color: #333;
  }

  .desc {
    font-size: 13px;
    color: #999;
    margin: 0 0 10px 10px;
  }
`

export const AuthorWrapper = styled.div`
  margin-top: 30px;
`

export const AuthorHeader = styled.div`
  display: block;
  cursor: pointer;
  font-size: 14px;
  color: #969696;
`

export const Authorex = styled.div`
  float: right;
  
  .spin {
    display: block;
    margin-top: 2px;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in-out;
    transform-origin: center center;
  }
`

export const AuthorItem = styled.div`
  margin-top: 20px;
  display: flex;

  .author-img {
    height: 48px;
    width: 48px;
    border-radius: 24px;
    margin-right: 10px;
  }
`

export const AuthorMsg = styled.div`
  .author-name {
    font-size: 14px;
    margin-top: 5px;
  }

  .author-intr {
    font-size: 12px;
    color: #969696;
    margin-top: 10px;
  }
`

export const LoadMore = styled.div`
  width: 30%;
  height: 40px;
  line-height: 40px;
  margin: 0 auto 20px auto;
  color: #fff;
  border-radius: 20px;
  background: #969696;
  text-align: center;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
  text-align: center;
  line-height: 50px;
  border: 1px solid #dcdcdc;

  &.hidden {
    display: none
  }

  .iconfont {
    font-size: 25px;
  }
`
