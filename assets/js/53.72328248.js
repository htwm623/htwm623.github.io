(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{565:function(s,t,n){"use strict";n.r(t);var a=n(7),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[s._v("参考 "),n("a",{attrs:{href:"https://www.zhwei.cn/hexo-github-actions-yuque/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Hexo：语雀云端写作 Github Actions 持续集成"),n("OutboundLink")],1),s._v("\n本文只作为自己使用的记录， 原文内容更为详尽\n本文主要记录部署流程， vuepress 配置不详细列出")])]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://docs.github.com/en/actions/learn-github-actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github Actions"),n("OutboundLink")],1),s._v("是 Github 推出的一款持续集成工具,每月有免费时长")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://www.yuque.com/dashboard",target:"_blank",rel:"noopener noreferrer"}},[s._v("语雀"),n("OutboundLink")],1),s._v("** **支持 markdown 的在线文档知识库， 支持 webhook")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/x-cold/yuque-hexo",target:"_blank",rel:"noopener noreferrer"}},[s._v("yuque-hexo"),n("OutboundLink")],1),s._v(" 同步语雀知识库的云端工具")]),s._v(" "),n("li",[s._v("serverless faas 云函数，腾讯云和阿里云均有免费额度， 阿里云需要自备域名， 或者可以选择 netlify 或在 codesandbox 创建项目")])]),s._v(" "),n("h2",{attrs:{id:"配置-github-actions-脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-github-actions-脚本"}},[s._v("#")]),s._v(" 配置 Github Actions 脚本")]),s._v(" "),n("ol",[n("li",[s._v("在项目 github 仓库中， 进入 Actions， 选择自定义配置， 以下为配置文件(更多配置请阅读 Actions 的文档)")])]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is a basic workflow to help you get started with Actions")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CI\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Controls when the action will run.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# push 和外部触发")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("push"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" repository_dispatch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A workflow run is made up of one or more jobs that can run sequentially or in parallel")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# This workflow contains a single job called "build"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The type of runner that the job will run on")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Steps represent a sequence of tasks that will be executed as part of the job")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v2\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# from: https://github.com/actions/setup-node")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Setup Node.js 12.x\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/setup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node@master\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node-version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"12.x"')]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Runs a set of commands using the runners shell")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Run a multi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("line script\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          npm install yuque-hexo -g\n          npm install\n          npm run yuque\n          npm run build")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# from https://github.com/peaceiris/actions-gh-pages")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deploy\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" peaceiris/actions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("gh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages@v3\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此处 VUEPRESS_TOKEN为ssh私钥， 在 项目Setting Secrets中配置， 可自行取名")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("deploy_key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.VUEPRESS_TOKEN "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署gh-pages的用户及仓库名， 必须为公开库")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("external_repository")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" htwm623/htwm623.github.io\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("publish_branch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" master\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("publish_dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./dist\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("commit_message")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" github.event.head_commit.message "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br")])]),n("p",[s._v("可提交测试 Actions 是否通畅")]),s._v(" "),n("h2",{attrs:{id:"配置腾讯云函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置腾讯云函数"}},[s._v("#")]),s._v(" 配置腾讯云函数")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main_handler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    headers "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"User-Agent"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'curl/7.52.1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'application/json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Accept'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'application/vnd.github.everest-preview+json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Authorization'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'token YOUR_PERSONAL_TOKEN'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意小写token不要省略")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://api.github.com/repos/:owner/repo/dispatches")]),s._v("\n    r "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("post"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://api.github.com/repos/htwm623/htwm-vue-blog/dispatches"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" json"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"event_type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" headers"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status_code "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("204")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This\'s OK!"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status_code\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("测试触发函数, 如果 github actions 正常触发, 再设置云函数触发")]),s._v(" "),n("ul",[n("li",[s._v("触发方式：API 网关触发器")]),s._v(" "),n("li",[s._v("API 服务类型：新建 API 服务")]),s._v(" "),n("li",[s._v("API 服务：SCF_API_SERVICE")]),s._v(" "),n("li",[s._v("请求方法：ANY")]),s._v(" "),n("li",[s._v("发布环境：发布")]),s._v(" "),n("li",[s._v("鉴权方法：免鉴权")]),s._v(" "),n("li",[s._v("启动集成响应：未启用")])]),s._v(" "),n("p",[s._v("复制云函数访问链接, 在语雀知识库设置 -> 开发者 设置 web hook\n​")]),s._v(" "),n("h2",{attrs:{id:"附-github-actions-push-commit-示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#附-github-actions-push-commit-示例"}},[s._v("#")]),s._v(" 附: GitHub Actions push commit 示例")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is a basic workflow to help you get started with Actions")]),s._v("\n\nname: CI\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Controls when the action will run.")]),s._v("\non:\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Triggers the workflow on push or pull request events but only for the master branch")]),s._v("\n  repository_dispatch:\n    branches: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" master "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Allows you to run this workflow manually from the Actions tab")]),s._v("\n  workflow_dispatch:\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A workflow run is made up of one or more jobs that can run sequentially or in parallel")]),s._v("\njobs:\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# This workflow contains a single job called "build"')]),s._v("\n  build:\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The type of runner that the job will run on")]),s._v("\n    runs-on: ubuntu-latest\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Steps represent a sequence of tasks that will be executed as part of the job")]),s._v("\n    steps:\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it")]),s._v("\n      - uses: actions/checkout@v2\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Runs a single command using the runners shell")]),s._v("\n      - name: Setup Node.js "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(".x\n        uses: actions/setup-node@master\n        with:\n          node-version: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"14.x"')]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Runs a set of commands using the runners shell")]),s._v("\n      - name: Run a multi-line script\n        run: "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run yuque\n      - name: Deploy\n        run: "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.name github-actions\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.email github-actions@github.com\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+%Y-%m-%d %H:%M:%S"')]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commit at '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$time")]),s._v('"')]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br")])]),n("h2",{attrs:{id:"附-actions-中同时拉取多个仓库示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#附-actions-中同时拉取多个仓库示例"}},[s._v("#")]),s._v(" 附: Actions 中同时拉取多个仓库示例")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CI\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("repository_dispatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("workflow_dispatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A workflow run is made up of one or more jobs that can run sequentially or in parallel")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# This workflow contains a single job called "build"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The type of runner that the job will run on")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Steps represent a sequence of tasks that will be executed as part of the job")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v2\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" main\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Runs a single command using the runners shell")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Setup Node.js 14.x\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/setup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node@master\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node-version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"14.x"')]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Runs a set of commands using the runners shell")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Run a multi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("line script\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          pwd\n          cd main\n          npm i\n          npm run yuque\n          cd ..")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" checkout libary\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v2\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("repository")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" htwm623/yuque"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("notes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("library\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("token")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.YUQUE_NOTES_LIBARY_TOKEN "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yuque"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("notes\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Run a multi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("line script\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          rm -rf yuque-notes/yuque-interview\n          mkdir yuque-notes/yuque-interview\n          cp -rf main/yuque-interview/* yuque-notes/yuque-interview\n          cd yuque-notes")]),s._v("\n\n          git config user.name github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("actions\n          git config user.email github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('actions@github.com\n          git add .\n          time=$(date "+%Y'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("%m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("%d %H"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("%M"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v('%S")\n          git commit '),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('m "commit at $time"\n          git push\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);