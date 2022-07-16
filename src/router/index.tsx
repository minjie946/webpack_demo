/**
 * @description 路由
 * @author minjie
 * @Date 2021-12-14 16:30
 * @LastEditTime 2022-01-21 16:05
 * @LastEditors minjie
 * @copyright Copyright © 2021 Shanghai Yejia Digital Technology Co., Ltd. All rights reserved.
 */
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from '../login'
import Home from '../home'
import Page1 from '../main/page1'
import Page2 from '../main/page2'

export default () => {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>}>
        <Route path='page1' element={<Page1/>}/>
        <Route path='page2' element={<Page2/>}/>
      </Route>
    </Routes>
  </HashRouter>
}
