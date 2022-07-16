/**
 * @description 全局定义
 * @author minjie
 * @Date 2021-11-02 14:24
 * @LastEditTime 2022-05-12 14:51
 * @LastEditors minjie
 * @copyright Copyright © 2021 Shanghai Yejia Digital Technology Co., Ltd. All rights reserved.
 */
declare module '*.less' {
  const content: any
  export = content
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.pdf'

declare module '*.svg' {
  const content: any
  export default content
}

declare module 'process' {
  global {
    namespace NodeJS {
      export interface ProcessEnv {
        tag: 'des' | 'dev' | 'tes' | 'pre' | 'pro'
        version: string
      }
    }
  }
}
