import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 750px;
  background: #f1f1f1;
  z-index: 3;

  .logo-img {
    margin-top: 60px;
    margin-left: 50px;
    width: 100px;
  }
`

export const LoginBox = styled.div`
  width: 400px;
  padding: 30px;
  margin: 60px auto 0;
  background: white;

  .login-btn {
    display: block;
    margin: 30px auto 0;
  }
`

export const LoginTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #ea6f5a;
`

export const LoginInput = styled.div`
  width: 300px;
  margin: 0 auto;

  .login-input {
    background-color: hsla(0,0%,71%,.1);
  }
`
