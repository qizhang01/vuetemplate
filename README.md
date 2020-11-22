##尽量使用语义化标签，小图标尽量使用before以及after伪类

###脚手架要达到的需求
    webpack4的配置
    对静态资源（图片，模板等）的处理
    使项目支持eslint，prettier等工具
    后期将会根据需求的增加持续优化webpack配置，减小代码的体积以及引入oneOf机制以及happaypack和多线程打包机制
    支持不同的sass预处理器（less，sass等 （后期会持续完善全局css变量机制，简化css的书写)
    一套好用的样式方案
    使项目支持多个环境切换（开发，测试，生产等）
    使用规则来自动约束代码规范
    对于svg jpg png等图片格式的文件，大小小于1000kb的时候将自动生成base64格式，减少请求。除此之外，充分利用sprite图片精灵。
    优化开发体验
    一些优化项目性能的建议：
    1 发现debug的时候中间图片区域会变小，应该是样式calc(100vh - 194px)造成的。不知道需求是否就是这么定的
    2 渐变button框的实现机制不好，应该优化。
    3 发现各种字体的样式有微笑的差异，这也耗费了我不少时间。由于任务紧，时间不够，这块的css暂时有缺陷，有很大的优化空间。


##Git规则
用 husky + commitlint 来规范git提交。
husky会为git增加钩子，在commit时执行一系列操作，commitlint可以检查git message是否符合规则。
在 package.json 中增加配置如下：

"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
在根目录新建文件 .commitlintrc.js，根据具体情况配置


##eslint
首先安装依赖：(npm 或者 yarn)
    "eslint": "^6.8.0",
    "eslint-config-standard": "^14.1.1",
    "eslint-friendly-formatter": "4.0.1",
    "eslint-loader": "^3.0.3",
    "eslint-plugin-import": "2.20.1",
    "eslint-plugin-node": "11.0.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-standard": "4.0.1",
    "eslint-plugin-vue": "^6.2.2",
然后在根目录新建eslint配置文件.eslintrc.js。

检查或不检查某些特定的文件，可以在根目录新建.eslintignore，以下配置不检查src目录以外的js文件：

// webpack.config.base.js
module: {
    rules: [
        // 把这个配置放在所有loader之前
       {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      },
    ]
}


###prettier 自动格式化代码
提交代码时自动格式化代码，只处理当前提交的代码，通过prettier和lint-staged可以完成。

先安装工具：

prettier eslint-plugin-prettier eslint-config-prettier
lint-staged

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
修改package.json：

  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "src/**/*.{jsx,js,tsx,ts}": [
      "eslint --fix",
      "git add"
    ]
  }

##用editorconfig统一编辑器规范
有些编辑器能够根据配置提示会自动格式化代码，我们可以为各种编辑器提供一个统一的配置。

在根目录新建.editorconfig即可，注意不要与已有的lint规则冲突：

# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

## 引入单元测试 但是项目比较紧张，没有时间去写
    "jest": "^25.1.0",
    "jest-serializer-vue": "^2.0.2",

import { render } from '@testing-library/vue'
import IkeaFocusPoint from '@/components/focusPoint'

describe('focusPoint', () => {
  it('renders when passed', () => {
    const denominator = 4.5,  numerator = 5, totalNumber=220
    const { findByText } = render(IkeaFocusPoint, {
      propsData: { denominator,numerator,totalNumber }
    })
    findByText('4.5/5')
  })
})


##引入vuex全局管理store机制，并引入vuex module机制
import * as types from '@/store/mutationTypes.js';

export default {
    namespaced: true,
    state: {
        showPictureUrl: '../../static/img/1.jpg',
        ifShowRightText: true
    },
    getters: {
        getUserInfo: (state) => {
            const { showPictureUrl } = state;
            return showPictureUrl;
        },
    },
    actions: {
        changePictureUrl({ commit }, info) {
            commit(types.SET_SHOW_IMG, info);
        },
    },
    mutations: {
        [types.SET_SHOW_IMG](state, info) {
            if (info.origin) {
                state.showPictureUrl = info.origin;
            }
            state.ifShowRightText = info.position === 'left';
        },
    },
};

##关于路由
由于只有一个页面  所以暂时只配置了一个路由。


##优化 webpack 构建速度

以后会引入使用 DllPlugin和DllReferencePlugin，将静态库先提取出来，因为这些库不常变动，如果每次都 打包会浪费构建时间。

DllPlugin可以把我们需要打包的第三方库打包成一个 js 文件和一个 json 文件，这个 json 文件中会映射每个打包的模块地址和 id；
DllReferencePlugin 通过读取这个json文件来使用打包的这些模块。

##自动格式化代码命令

项目启动
 1 首先安装依赖(yarn 或者 npm i), 出于性能的考虑dependencies中只保留用到的库. devDependencies倒是无所谓，生产环境打包编译的
 时候不会编译进去

    "start": "npm run lint:fix && webpack-dev-server --progress --config build/webpack.config.dev.js",
    "prod": "webpack --config build/webpack.config.prod.js",
    "lint": "eslint --ext .js,.vue src",
    "lint:fix": "eslint --ext .js,.vue src --fix",
    "test:unit": "jest --config test/jest.config.js",
    "test": "npm run lint && npm run test:unit",
    "test:debug": "node --inspect node_modules/.bin/jest --runInBand --config test/jest.config.js"
##自动格式化代码命令 npm run lint:fix.


2 然后运行命令 npm start 或者 npm run start, 开始编译项目并看效果。