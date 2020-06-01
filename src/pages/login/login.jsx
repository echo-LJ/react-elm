import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './login.scss'
// import API from '../../api/api'



class Login extends Component {
  static propTypes = {
    // 设置属性类型且为必须传递的值
    userInfo: PropTypes.object.isRequired,
    saveUserInfo: PropTypes.func.isRequired,
  }
  state = {
    mobileCode: '',
    userAccount: '',
    password: '',
    codeNumber: '',
    captchaCodeImg: '',
    showPwd: true,
    loginWay: false
  }
  handleInput = (type, event) => {
    let value = event.target.value
    let newState = {}
    newState[type] = value
    switch (type){
    }
    this.setState(newState)
  }

}