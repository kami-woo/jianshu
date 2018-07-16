import styled from 'styled-components'
import { logoUrl } from '../static/image'

export const HeaderWrapper = styled.div`
	height: 58px;
	min-width: 700px;
	border-bottom: 1px solid #e7e7e7;
	position: relative;
`

export const Logo = styled.a.attrs({ href: '/' })`
	width: 100px;
	height: 58px;
	display: block;
	float: left
	background: url(${ logoUrl });
	background-size: contain;
`

export const Menu = styled.div`
	height: 58px;
	width: 960px;
	margin: 0 auto;
	padding-right: 50px;
	box-sizing: border-box;
`

export const MenuItem = styled.a`
	font-size: 17px;
	line-height: 28px;

	&.left {
		float: left;
		padding: 15px;
	}

	&.right {
		float: right;
		padding: 15px;
		color: #969696;
	}

	&.home {
		color: #ea6f5a;
	}

	.iconfont {
		font-size: 20px;
	}
`

export const SearchWrapper = styled.div`
	height: 58px;
	float: left;
	position: relative;

	.iconfont {
		line-height: 30px;
		width: 30px;
		border-radius: 15px;
		position: absolute; 
		top: 14px;
		right: 34px;
		text-align: center;

		&.focused {
			background: #969696;
		}
	}
`

export const Search = styled.input.attrs({ placeholder: '搜索' })`
	height: 38px;
	width: 160px;
	padding: 0 20px;
	margin: 10px 30px;
	background: #eee;
	box-sizing: border-box;
	border-radius: 40px;
	outline: none;
	border: none;

	&::placeholder {
		color: #999;
	}

	&.focused {
		width: 220px;
	}

	&.slide-enter {
		width: 160px;
	}

	&.slide-enter-active {
		width: 220px;
		transition: width .3s ease-out .1s;
	}

	&.slide-exit {
		width: 220px;
	}

	&.slide-exit-active {
		width: 160px;
		transition: width .3s ease-out .1s;
	}
`

export const Addition = styled.div`
	height: 58px;
	position: absolute;
	top: 0;
	right: 0;
`

export const Button = styled.div`
	font-size: 14px;
	font-weight: 400;
	line-height: 24px;
	float: right;
	padding: 6px 22px;
	border-radius: 19px;
	border: 1px solid #ea6f5a;
	margin-top: 10px;
	margin-right: 15px;

	&.reg {
		color: #ea6f5a
		margin-left: 10px;
	}

	&.writting {
		color: #fff
		background: #ea6f5a
	}
`
