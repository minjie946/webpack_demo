/**
 * @description 配置文件-工具类
 * @author minjie
 * @Date 2021-11-02 15:38
 * @LastEditTime 2021-12-20 17:45
 * @LastEditors minjie
 * @copyright Copyright © 2021 Shanghai Yejia Digital Technology Co., Ltd. All rights reserved.
 */
import path from 'path'
import fs from 'fs'
// import chalk from 'chalk'
// import { say } from 'cfonts'

const appDirectory = fs.realpathSync(process.cwd())
/**
 * 读取文件的位置信息
 * @param {*} relativePath 文件相对于工作目录下的地址
 */
export const resolve = (relativePath:any) => path.resolve(appDirectory, relativePath)
export const join = (a:any, b:any) => path.join(appDirectory, a, b)
