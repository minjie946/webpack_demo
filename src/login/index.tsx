/**
 * @description 描述
 * @author minjie
 * @Date 2021-12-16 15:46
 * @LastEditTime 2022-01-11 15:42
 * @LastEditors minjie
 * @copyright Copyright © 2021 Shanghai Yejia Digital Technology Co., Ltd. All rights reserved.
 */
import React from 'react'
import { Button } from 'antd'
import { useNavigate, NavigateFunction } from 'react-router-dom'

interface LoginProps {
}

export default (props: LoginProps) => {
  const navigate:NavigateFunction = useNavigate()
  return <div>
    <Button type='primary' onClick={() => navigate('home')}>登录4</Button>
  </div>
}
