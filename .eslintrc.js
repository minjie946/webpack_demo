module.exports = {
  "extends": [
    "standard"
  ],
  "parser": "@typescript-eslint/parser", // 解析器
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "globals": {
    "__static": true,
    "document": true,
    "navigator": true,
    "window": true,
    "node": true
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "plugins": [
    "@typescript-eslint/eslint-plugin",
    "typescript",
    "promise",
    "jsx-a11y",
    "react"
  ],
  "rules": {
    "arrow-parens": "off",
    "no-useless-return": "off",
    "generator-star-spacing": "off",
    "no-debugger": "off",
    "no-extra-semi": "error",
    "no-unreachable": "error",
    "no-dupe-class-members": "off",
    "no-useless-constructor": "off",
    "no-unused-vars": "off",
    "no-useless-escape": "off",
    "standard/array-bracket-even-spacing": "off",
    // "complexity": ["warn", 8],
    // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
    "eqeqeq": [ "error", "always", { "null": "ignore" }],
    // 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat
    "typescript/class-name-casing": "error",
    "no-use-before-define": "off",
  }
}