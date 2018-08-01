import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, LoginInput, LoginTitle } from './styled'
import { Input, Button } from 'antd'
import 'antd/dist/antd.css'
import { Link, Redirect } from 'react-router-dom'
import { actionCreators } from './store'

class login extends PureComponent {
  render() {
    const { handleLogin, loginState } = this.props
    return (
      <LoginWrapper>
        { loginState ? <Redirect to='/' /> : '' }
        <Link to="/">
          <img className="logo-img" src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="" />
        </Link>
        <LoginBox>
          <LoginTitle>登录</LoginTitle>
          <LoginInput>
            <Input
              ref={(input) => this.account = input }
              className="login-input"
              size="large"
              placeholder="手机号或邮箱"
            />
            <Input
              type="password"
              ref={(input) => this.password = input }
              className="login-input"
              size="large"
              placeholder="密码"
            />
          </LoginInput>
          <Button 
            className="login-btn"
            type="primary"
            onClick={ () => handleLogin(this.account, this.password) }
          >
            登录
          </Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  loginState: state.getIn(['loginReducer', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
  handleLogin(account, password) {
    dispatch(actionCreators.userLogin(account.input.value, password.input.value))
  }  
})

export default connect(mapStateToProps, mapDispatchToProps)(login)
