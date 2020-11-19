module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  'rules': {
    'indent': ['error', 4],
    'vue/script-indent': ['error', 4, { 'baseIndent': 1 }],
    //分号
    'semi': 'off',
    'spaced-comment': 'off',
    'eqeqeq': 1,
    'no-useless-escape': 'off',
    'brace-style': 0,//大括号风格
    'curly': 'off', //[2, "all"],//必须使用 if(){} 中的{}
    'space-before-function-paren': ['off', 'always'],//函数定义时括号前面要不要有空格
    'no-new': 'off',
    'comma-dangle': 'off',//对象字面量项尾不能有逗号
    'no-return-assign': 'warn',//return 语句中不能有赋值表达式
    'eol-last': 0,
    'no-multiple-empty-lines': 0,
    'quotes': 'off',
    'comma-spacing': 'off',
    'handle-callback-err': 0,
    'padded-blocks': 0,
    'no-duplicate-imports': 0,
    'operator-linebreak': 0,
    'no-undef': 2,
    'no-var': 1, //是否可使用var
    'no-extend-native': 0,
    'no-sequences': 0,

    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': 2,
    'no-eval': 0,
    'standard/no-callback-literal': 1,
  },
  'overrides': [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off'
      }
    }
  ]
}
