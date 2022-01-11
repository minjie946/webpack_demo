/**
 * @description 主页
 * @author minjie
 * @Date 2021-12-14 14:15
 * @LastEditTime 2021-12-20 13:38
 * @LastEditors minjie
 * @copyright Copyright © 2021 Shanghai Yejia Digital Technology Co., Ltd. All rights reserved.
 */
import React from 'react'
import { Layout } from 'antd'
import { Outlet, Link } from 'react-router-dom'

const { Header, Sider, Content, Footer } = Layout

interface HomeProps {
}

export default (props:any) => {
  return <Layout style={{ height: '100%' }}>
    <Header>顶部的</Header>
    <Layout>
      <Sider>
        侧边
        <Link to='page1'>page1</Link>
        <Link to='page2'>page2</Link>
      </Sider>
      <Content>
        <Outlet/>
      </Content>
    </Layout>
  </Layout>
}
