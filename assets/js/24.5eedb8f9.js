(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{536:function(s,a,e){"use strict";e.r(a);var t=e(7),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("ul",[e("li",[s._v("练习网站 "),e("a",{attrs:{href:"https://labs.play-with-docker.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("play with docker"),e("OutboundLink")],1),s._v("， 使用 dockerid 登录此网站可以获取练习机器， 单次时长 4 小时，可重复申请")])]),s._v(" "),e("h2",{attrs:{id:"使用步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用步骤"}},[s._v("#")]),s._v(" 使用步骤")]),s._v(" "),e("p",[s._v("以 nginx 示例方式演示")]),s._v(" "),e("ol",[e("li",[s._v("安装 参考 "),e("a",{attrs:{href:"https://yeasy.gitbook.io/docker_practice/install/ubuntu",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker 安装"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("拉取 nginx 镜像")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker pull nginx "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实际等于 docker pull nginx:latest")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("查看已经下载的镜像")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker images\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("通过 run 指令运行")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令行运行")]),s._v("\ndocker run nginx\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后台加端口映射")]),s._v("\ndocker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 nginx\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 目录绑定")]),s._v("\ndocker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9001")]),s._v(":80 -v /home/htwm623/web/docker-test:/usr/share/nginx/html nginx\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者 注意--mount 之后三个参数type,source,target逗号之后不要加空格")]),s._v("\ndocker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9002")]),s._v(":80 --mount "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bind,source"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/htwm623/web/docker-test,target"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/share/nginx/html nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li",[s._v("通过 ps 指令查看正在运行的容器")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"6"}},[e("li",[s._v("进入容器内部修改容器及 exit 指令退出")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入容器内部")]),s._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 容器id "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出容器内部")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ol",{attrs:{start:"7"}},[e("li",[s._v("强制删除创建的容器")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f 容器id\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"8"}},[e("li",[s._v("使用 commit 指令提交镜像")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker commit 容器id 镜像命名")]),s._v("\ndocker commit "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("92")]),s._v(" m1\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存的镜像可以重新运行")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ol",{attrs:{start:"9"}},[e("li",[s._v("dockerfile 使用")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 创建dockerfile 内部语法省略")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" Dockerfile\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 通过dockerfile构建镜像")]),s._v("\ndocker build -t m2 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此处点为当前目录下Dockerfile m2为镜像名称")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行")]),s._v("\ndocker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(":80 m2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("ol",{attrs:{start:"10"}},[e("li",[s._v("将镜像导出和导入")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 镜像导出")]),s._v("\ndocker save m2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".tar "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# m2为镜像名称")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 镜像导入")]),s._v("\ndocker load "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".tar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("记录于 2021 年 4 月 22 日")]),s._v(" "),e("h2",{attrs:{id:"如何在-dockerfile-中更换-pip-源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何在-dockerfile-中更换-pip-源"}},[s._v("#")]),s._v(" 如何在 Dockerfile 中更换 pip 源")]),s._v(" "),e("ul",[e("li",[s._v("在 Dockerfile 中添加如下代码")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("RUN pip "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -U pip\nRUN pip config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" global.index-url http://mirrors.aliyun.com/pypi/simple\nRUN pip config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" install.trusted-host mirrors.aliyun.com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("学习视频来源 "),e("a",{attrs:{href:"https://www.bilibili.com/video/BV1R4411F7t9",target:"_blank",rel:"noopener noreferrer"}},[s._v("10 分钟，快速学会 docker"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);