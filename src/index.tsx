/**
 * @description 主入口
 * @author minjie
 * @Date 2021-12-14 14:20
 * @LastEditTime 2021-12-23 10:56
 * @LastEditors minjie
 * @copyright Copyright © 2021 Shanghai Yejia Digital Technology Co., Ltd. All rights reserved.
 */
import React from 'react'
import ReactDom from 'react-dom'
import App from './router'
import './index.less'

ReactDom.render(<App/>, document.querySelector('#css-root'))
