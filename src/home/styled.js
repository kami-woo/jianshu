import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  overflow: hidden
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  width: 640px;

  .home-banner {
    display: block;
    margin-top: 90px;
    margin-left: 15px;
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  width: 240px;
  height: 300px;
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
  }
`
