/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4786b591e42328cd1aa268a1f3441568"
  },
  {
    "url": "about/index.html",
    "revision": "dcd21411a20d41c6d213eb803f97a795"
  },
  {
    "url": "assets/css/0.styles.4e4c218c.css",
    "revision": "f8da9f165d223c10e83553ed70b2b503"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.8eef8638.svg",
    "revision": "8eef86381d36c7d02ce250e5243b0752"
  },
  {
    "url": "assets/js/1.830800a4.js",
    "revision": "c69634bf363bb4cb925ecd016558b78f"
  },
  {
    "url": "assets/js/10.a3c20d81.js",
    "revision": "1d868d608b56bb91f57df48efe1abd93"
  },
  {
    "url": "assets/js/11.e4eb59e5.js",
    "revision": "1d1de97eef22098dee8f71fc2a00f20c"
  },
  {
    "url": "assets/js/12.5f1530f1.js",
    "revision": "bbcf655aed6af1cfb8a6a2c7c2039a8c"
  },
  {
    "url": "assets/js/13.5c2a5268.js",
    "revision": "ae4a6653e8adfc011b8118bd45e9b2cb"
  },
  {
    "url": "assets/js/14.9d29a4e6.js",
    "revision": "1f4ee611844dfdb54c3d422afd6d259e"
  },
  {
    "url": "assets/js/15.4fedf380.js",
    "revision": "236ce64b9136c2d789c24101ee57383b"
  },
  {
    "url": "assets/js/16.054d5b6e.js",
    "revision": "55a05275af978a323aaa205fb052808d"
  },
  {
    "url": "assets/js/17.92a8211f.js",
    "revision": "3c787c66b5b35f6680c60fe5cacede3a"
  },
  {
    "url": "assets/js/18.bfb8bd40.js",
    "revision": "35037f9013ea07a425720e36ba8ed56a"
  },
  {
    "url": "assets/js/19.3fc751f8.js",
    "revision": "9155c760f71dd44d1af52afe07996205"
  },
  {
    "url": "assets/js/20.9ddacf2d.js",
    "revision": "f6f3f956f035d9b3384950237d56d2c8"
  },
  {
    "url": "assets/js/21.4fac324c.js",
    "revision": "e95cadb2e21c1491902b7803df55836d"
  },
  {
    "url": "assets/js/22.415fc3a3.js",
    "revision": "a9209af40ad466c82e91e335df72d1aa"
  },
  {
    "url": "assets/js/23.72d5471b.js",
    "revision": "bf87875b14246a6a968226842f0c0f77"
  },
  {
    "url": "assets/js/24.8b684666.js",
    "revision": "7f3586e24b1d5cbc5342f532c695a907"
  },
  {
    "url": "assets/js/25.27646579.js",
    "revision": "e25940662a300342583ec0556a493ff0"
  },
  {
    "url": "assets/js/26.6ad9c1a1.js",
    "revision": "f93bd3e17c7baac8cb0088c77744fc8e"
  },
  {
    "url": "assets/js/27.a4cb086c.js",
    "revision": "3e0d6d0aa6233d68495fb39b4bac06b6"
  },
  {
    "url": "assets/js/28.eda56b82.js",
    "revision": "1cd58dd746a3d5c330390b2992bd08d5"
  },
  {
    "url": "assets/js/29.74338953.js",
    "revision": "68ed24d3554de8ea28e34250f5738ae9"
  },
  {
    "url": "assets/js/3.f5b70ff6.js",
    "revision": "1c46957512fede88e957c4e5aec0f231"
  },
  {
    "url": "assets/js/30.47cdda3e.js",
    "revision": "e9bed133d993bd980b24946684fff50d"
  },
  {
    "url": "assets/js/31.d1eeb6e7.js",
    "revision": "ed3c933fa35d00829cbeaccef5868aa5"
  },
  {
    "url": "assets/js/32.9203d2c1.js",
    "revision": "84464beaa5feea055170f07fe9c97010"
  },
  {
    "url": "assets/js/33.8452ae2c.js",
    "revision": "bbf798c9dc39a7fa67617464e2a4ad60"
  },
  {
    "url": "assets/js/34.9359b7ac.js",
    "revision": "ab8a0f1d02c54fd8b2fbb4deaa42d2c0"
  },
  {
    "url": "assets/js/35.6535efa5.js",
    "revision": "ea6b18f3995b7e3956be75b59eed3dd0"
  },
  {
    "url": "assets/js/36.8dcdd6a7.js",
    "revision": "87652ea5405bfcdd3988bbe4b241e6cf"
  },
  {
    "url": "assets/js/37.f2ea1c92.js",
    "revision": "dce5a4268e6492f24e3435ed7cff39e3"
  },
  {
    "url": "assets/js/38.edb5aa4c.js",
    "revision": "ba0851f4a5d6398250d7623c9baa777e"
  },
  {
    "url": "assets/js/39.20309eaf.js",
    "revision": "5744dfa4b7d5b49fc3bfc22f9f51fe0f"
  },
  {
    "url": "assets/js/4.c83a1e50.js",
    "revision": "54b2839735924822780753d3df2a4c58"
  },
  {
    "url": "assets/js/40.44d2cf16.js",
    "revision": "e7250429621a4a242a7258b6ad059222"
  },
  {
    "url": "assets/js/41.aed4ce60.js",
    "revision": "324153453bf3bc522432931d4aff1f05"
  },
  {
    "url": "assets/js/42.3c1b0bb4.js",
    "revision": "674666465f47a3d3d63bca9dfafea3a6"
  },
  {
    "url": "assets/js/43.9bccd60d.js",
    "revision": "549c6a8570e9759506377df02bc76423"
  },
  {
    "url": "assets/js/44.5b27e083.js",
    "revision": "f4823ed60a78c8509b3c9a7890398aa2"
  },
  {
    "url": "assets/js/45.e832cfae.js",
    "revision": "46a8f797a779c0b3d4f739e2271d7ba5"
  },
  {
    "url": "assets/js/46.4729dd23.js",
    "revision": "5e6ce0db99bbe1ed074a9e65f59d0172"
  },
  {
    "url": "assets/js/47.4e4186ae.js",
    "revision": "a4b767edb9c27ea4dc83d93ba2fb4ec8"
  },
  {
    "url": "assets/js/48.c6c1ee97.js",
    "revision": "37f5825368c5b7b1c10ae132a8609bb7"
  },
  {
    "url": "assets/js/49.36dc44be.js",
    "revision": "3892aa0ed7aeb3a15fca60d2838b28f4"
  },
  {
    "url": "assets/js/5.3a24876a.js",
    "revision": "d54a784fb8cc0834568af618cfcf2981"
  },
  {
    "url": "assets/js/50.ed7aba18.js",
    "revision": "b07c119e0d8614e37083a72f44efcbfd"
  },
  {
    "url": "assets/js/51.8e3f4567.js",
    "revision": "59a3c999d28280c21bb4e88412990de2"
  },
  {
    "url": "assets/js/52.4017492f.js",
    "revision": "c2afab7221074fc957c84c4f4e520049"
  },
  {
    "url": "assets/js/53.ab9b4114.js",
    "revision": "6215451ec3045f0a29bd52136c09d38d"
  },
  {
    "url": "assets/js/54.e6383dcc.js",
    "revision": "401052e0671f5e7aff9c9dad3c78973e"
  },
  {
    "url": "assets/js/55.1fcc77bf.js",
    "revision": "d222ca8d020cb7b0d2405c056487c12d"
  },
  {
    "url": "assets/js/56.c12dacbd.js",
    "revision": "e38134c8c22ff86ba0aab913ef0f9758"
  },
  {
    "url": "assets/js/57.6eb63f8a.js",
    "revision": "205e662be3a4e24085c56a181e7c13d4"
  },
  {
    "url": "assets/js/58.0c7aed58.js",
    "revision": "58e4c024829e7efded910a0f07f0ffab"
  },
  {
    "url": "assets/js/59.1eb63e81.js",
    "revision": "5d365114c5a9f0650ce02e5433b2d7f0"
  },
  {
    "url": "assets/js/6.cdcffe84.js",
    "revision": "5cfd9a4662b7a15710012497b19b56e9"
  },
  {
    "url": "assets/js/60.af0d9938.js",
    "revision": "491cea9490fec2ae25d6c104f1468eb3"
  },
  {
    "url": "assets/js/61.1afc322d.js",
    "revision": "5e5514590e848d4d65c14c199bdb540f"
  },
  {
    "url": "assets/js/62.abd11cee.js",
    "revision": "6006816509efa27e78fda4af09f7825e"
  },
  {
    "url": "assets/js/63.1d59f8e3.js",
    "revision": "dbbd374c46a27fd3e040341268d250af"
  },
  {
    "url": "assets/js/64.bb3682ab.js",
    "revision": "9925226dea67d3c01336e7b9b25a4522"
  },
  {
    "url": "assets/js/65.d13c794c.js",
    "revision": "fb1969bbf8a1f7d7a414915bde6541aa"
  },
  {
    "url": "assets/js/66.1bb76ded.js",
    "revision": "d7f829387a0cca44348c5754673a4a27"
  },
  {
    "url": "assets/js/67.2036a628.js",
    "revision": "188e6ab80786e5197157f764afe9a12e"
  },
  {
    "url": "assets/js/68.c8aa82e7.js",
    "revision": "c9cc84a01f3bdf6829f9515cdc16ba1c"
  },
  {
    "url": "assets/js/69.9b2cb69f.js",
    "revision": "71a441f858cba60700f2602c1677f105"
  },
  {
    "url": "assets/js/7.eb82e852.js",
    "revision": "8dec2c5d387c8dc93b712f3cd6b32846"
  },
  {
    "url": "assets/js/70.f53a4340.js",
    "revision": "dea10711d682a36b46fdd92fe39982e8"
  },
  {
    "url": "assets/js/71.1d9be670.js",
    "revision": "695f25b7d60271349501c7ab532998ae"
  },
  {
    "url": "assets/js/72.92cef8fe.js",
    "revision": "d05ad123a34bbfd8a8cceaa2019903b8"
  },
  {
    "url": "assets/js/73.e6f497e1.js",
    "revision": "a27e806943d522f7b4de081fda1a3c04"
  },
  {
    "url": "assets/js/74.8c174741.js",
    "revision": "8a455df25ae86244474612c1f6afb242"
  },
  {
    "url": "assets/js/75.834f4257.js",
    "revision": "cfbb5abe4bcfad19dc69b9e4fb8ee8ec"
  },
  {
    "url": "assets/js/8.95840166.js",
    "revision": "5d7e83ba64934ca2b0df2fcf0da06ce3"
  },
  {
    "url": "assets/js/9.8e198e31.js",
    "revision": "ac87d76e4e5450d870f9355532f6e261"
  },
  {
    "url": "assets/js/app.0f650e8c.js",
    "revision": "866a257d8c5c112ad858a6ccee02ee92"
  },
  {
    "url": "categories/index.html",
    "revision": "4a50886cbeb5157d229ea69dfdaa6e1a"
  },
  {
    "url": "categories/代码片段/index.html",
    "revision": "1bf0d9d5cb6c3623fac387f6c39c6582"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "b6d2ae39783d96d9efa007227f7c205e"
  },
  {
    "url": "categories/技术笔记/page/2/index.html",
    "revision": "9a69cc94fba199613cf2ded1a6007719"
  },
  {
    "url": "categories/技术笔记/page/3/index.html",
    "revision": "e653392cc3d8dcbbb28ce590f3a3c34f"
  },
  {
    "url": "categories/技术笔记/page/4/index.html",
    "revision": "881dff234bda41e4946a41dba209a417"
  },
  {
    "url": "categories/技术笔记/page/5/index.html",
    "revision": "f044e80c3d6da4c30dcf809355b5e722"
  },
  {
    "url": "code-snippets/code-2021/difference-between-js-for-loop.html",
    "revision": "c1b0886f7f3d8c08d85af0cd8ab1dc8f"
  },
  {
    "url": "code-snippets/code-2021/flaskkua-yu-shi-li.html",
    "revision": "5d5939c767458689e83ef9e8e747dbde"
  },
  {
    "url": "code-snippets/code-2021/for-loops-array-reduce-and-method-chaining.html",
    "revision": "608938730eac640e113630b0a54a471e"
  },
  {
    "url": "code-snippets/code-2021/nodejsnei-zhi-http-server.html",
    "revision": "5586dbc3bb31111cb9895d25dc6063db"
  },
  {
    "url": "code-snippets/code-2021/server-sent-eventsshi-li-dai-ma.html",
    "revision": "f1784603c2ef2dce8bcc60b5c6d00a32"
  },
  {
    "url": "code-snippets/code-2021/vue3shi-yong-cdnfang-shi-yin-ru-shi-li.html",
    "revision": "fcafeec2a41745fc99eac875f07ff8dd"
  },
  {
    "url": "favicon.png",
    "revision": "e714c63381da7476b1e9f6d2b4af983b"
  },
  {
    "url": "head.png",
    "revision": "2428b913d36795f730906f908b824471"
  },
  {
    "url": "head1.jpg",
    "revision": "0506812efe3af43210e04e348f2ff874"
  },
  {
    "url": "index.html",
    "revision": "24920693af3b59efaecaf438b99d277c"
  },
  {
    "url": "logo.png",
    "revision": "dfb9cc785f85c37c4aca9566f6cda8c6"
  },
  {
    "url": "notes/css.html",
    "revision": "5b0b1cdcfcfbce6f0fee1a97a9baf61b"
  },
  {
    "url": "notes/css/cssji-chu.html",
    "revision": "d66d15c10bb210171c21f0cc696caf0a"
  },
  {
    "url": "notes/css/cssxuan-ze-qi.html",
    "revision": "42be6fcdf1ec49e911af87126b5c0b3a"
  },
  {
    "url": "notes/css/flexbu-ju.html",
    "revision": "e5884e6e1b1e83f8c1a65b6d2c115b20"
  },
  {
    "url": "notes/docker/docer-composeduo-rong-qi-xiang-mu.html",
    "revision": "d6f273376bdee05fef2d4ca53b5a31ae"
  },
  {
    "url": "notes/docker/dockerbian-xie-jing-xiang-bing-shang-chuan.html",
    "revision": "b6c05a1ef61c2b888043b70b55a6d9f0"
  },
  {
    "url": "notes/docker/dockerjian-dan-shi-yong.html",
    "revision": "7e3ae78e987a453b733624cab311aa94"
  },
  {
    "url": "notes/gitde-jian-dan-shi-yong.html",
    "revision": "1e2c9f962e3e76740b941f8be61a024e"
  },
  {
    "url": "notes/guide/guide-1.html",
    "revision": "722bc3f809a938893289e660cd3028a0"
  },
  {
    "url": "notes/guide/guide-2.html",
    "revision": "1418aeb11215ac8c058ce83ea4d62964"
  },
  {
    "url": "notes/guide/guide-3.html",
    "revision": "f26851cb14bda39519b884137555f98c"
  },
  {
    "url": "notes/guide/guide-4.html",
    "revision": "18f5340c86a6a014c25bcaacae7ed83b"
  },
  {
    "url": "notes/html/html5yu-yi-yuan-su.html",
    "revision": "30e357acad0fecbc67d7f5061d26530f"
  },
  {
    "url": "notes/html/htmlji-chu.html",
    "revision": "30e8c32bee8c7a65476418dd4cea9940"
  },
  {
    "url": "notes/index.html",
    "revision": "80b046df9d8cb6b736534b84f883952b"
  },
  {
    "url": "notes/typescript/typescript-webpackda-bao.html",
    "revision": "513d5840e9b0a9bf8fdc1a858d4d36f8"
  },
  {
    "url": "notes/typescript/typescriptbian-yi-xuan-xiang.html",
    "revision": "6f3eb710b90be41f0b865d267e2e4719"
  },
  {
    "url": "notes/typescript/typescriptji-chu.html",
    "revision": "2773f6893c74e98bfe53728fd197d176"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "568c27948f8dd96bb324f4f8e1a66140"
  },
  {
    "url": "tag/ci/cd/index.html",
    "revision": "9002e65ea43d76c5acaa19935d6d09c5"
  },
  {
    "url": "tag/css/index.html",
    "revision": "9dd28692c100e7fd2e8caff62050cb8d"
  },
  {
    "url": "tag/docker-compose/index.html",
    "revision": "5599c284ce1f7df183fca70b794a0d28"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "c4836273082c928da4305e233e658dca"
  },
  {
    "url": "tag/element/index.html",
    "revision": "2cd740dd92abed4d643c8f0d3e90f52b"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "99a6efc62995e0c3d56f2948fc8c20ff"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8ee6fc6651a8e2b4b858f5c12e1b65e3"
  },
  {
    "url": "tag/html/index.html",
    "revision": "39cfe40459f88833e5caef32d06d10d6"
  },
  {
    "url": "tag/http/index.html",
    "revision": "7f0cb0954c805a011c0822171bd5a841"
  },
  {
    "url": "tag/index.html",
    "revision": "1e5c73ba3956141826dff9b897a26f31"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "b42c16af4167ef42218675ec42ab1555"
  },
  {
    "url": "tag/node/index.html",
    "revision": "b0ba8619970aa63fa096b12c7e2a6c9f"
  },
  {
    "url": "tag/other/index.html",
    "revision": "5b49e2e3722091372ed9e6beb06e81b0"
  },
  {
    "url": "tag/python/index.html",
    "revision": "1372c2738d3289d366a4d33bd04bb2a9"
  },
  {
    "url": "tag/react/index.html",
    "revision": "1815f709b41c3a9a37db79aa955d9686"
  },
  {
    "url": "tag/redux/index.html",
    "revision": "803878521aa47955f432f9b2c60dfcba"
  },
  {
    "url": "tag/serverless/index.html",
    "revision": "49e933f49eaa3d6460de36dfa6841317"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "e718228a0406d8e6816a8cec98398ae1"
  },
  {
    "url": "tag/tailwind/index.html",
    "revision": "4afb323b7f20542c91bc666617e00cdc"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "1662542386202ce53448caae5abc8f92"
  },
  {
    "url": "tag/ui/index.html",
    "revision": "0f33f4849bc5b1c68f35206f205a2364"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "9f7390f7d317a6daaaf7fa4604f9fae0"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "55c58ae6bef7ca265df5e1eb0e86a7a8"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7781225d6b12dcaa83e3672a4fc099c4"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "bc21d30b8f567194e1ddff87e0d4f4ff"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "033ef0cef2a9fa44d0cac326f94165d1"
  },
  {
    "url": "tag/yuque/index.html",
    "revision": "64e50beff81c91a467f2cdf033f97674"
  },
  {
    "url": "timeline/index.html",
    "revision": "0f130bf4b2819910c5f96dab1dc2ac3b"
  },
  {
    "url": "views/yuque/cloudbase-frameworkchu-ci-shi-yong.html",
    "revision": "b5857b8ba6684b29704722f79dfe6513"
  },
  {
    "url": "views/yuque/commonjs-module-syntax.html",
    "revision": "319d81e89c25ff602731a9caa14ad41d"
  },
  {
    "url": "views/yuque/cypressjian-dan-shang-shou.html",
    "revision": "e50b0ecdeca9ba575d38e9739d3edccb"
  },
  {
    "url": "views/yuque/dao-chu-yu-que-wen-dang.html",
    "revision": "3de2e369c77aa4bb8a2d74e30f9d6d64"
  },
  {
    "url": "views/yuque/el-treexiu-gai-zi-jie-dian-wei-dan-xuan.html",
    "revision": "f1a3efb9946efd729e29ae349273cee1"
  },
  {
    "url": "views/yuque/el-uploadshang-chuan-can-shu-ji-jie-xi.html",
    "revision": "5c5f36c4bb4d57e8db78de204b2664af"
  },
  {
    "url": "views/yuque/fcc-xiang-ying-shi-webshe-ji.html",
    "revision": "64bd9c1bdf820c80e05e7669c19f4d76"
  },
  {
    "url": "views/yuque/graphqlxue-xi.html",
    "revision": "d1d08490b3dee274e6d00b3f328a6803"
  },
  {
    "url": "views/yuque/javascriptshi-jian-xun-huan.html",
    "revision": "559803f035e0b64b5a47129bcf969a0d"
  },
  {
    "url": "views/yuque/jian-dan-jing-tai-wen-jian-server.html",
    "revision": "6e2ffac323633dd9a0b418fe83446b40"
  },
  {
    "url": "views/yuque/jian-pan-shi-jian-xiang-jie.html",
    "revision": "bc93f18b6f8c92a9d4d2e40e09506a8f"
  },
  {
    "url": "views/yuque/jupyter-notebook.html",
    "revision": "6eabde1358e12a72ccb9ff0d1d51461a"
  },
  {
    "url": "views/yuque/maridban-zhuang-ji-yuan-cheng-lian-jie.html",
    "revision": "f8a150616e982ad66758d6806bbc6e8d"
  },
  {
    "url": "views/yuque/pandasdu-xie-csvji-zhui-jia.html",
    "revision": "6ed8d0ecb3940daf88d980e8af3d11ef"
  },
  {
    "url": "views/yuque/picgo-githubtu-chuang.html",
    "revision": "9309addfb0ba5563f4231eba2c01a0b7"
  },
  {
    "url": "views/yuque/promiseji-lu.html",
    "revision": "4620da71c6b792c98be4546b070532dd"
  },
  {
    "url": "views/yuque/python-bao-zhi-zuo-liu-cheng.html",
    "revision": "ca9cce73699d8173a30818584cd2e5e2"
  },
  {
    "url": "views/yuque/pythonjiang-wu-xian-fen-lei-jie-gou-shu-ju-zhuan-wei-json.html",
    "revision": "22e6de67782e5a483df886fc0693f26c"
  },
  {
    "url": "views/yuque/ru-he-chu-li-jsonwen-jian-jie-wei-de-dou-hao.html",
    "revision": "553af20c4e21b8e1facf1bb7f4c82924"
  },
  {
    "url": "views/yuque/ru-he-pi-liang-dao-ru-a-li-icon.html",
    "revision": "8f979b45457e281735ef9d3b85befe80"
  },
  {
    "url": "views/yuque/shi-yong-aria2pi-liang-xia-zai-shi-pin.html",
    "revision": "2c239c04d9a19c77d4dc9d8719867a86"
  },
  {
    "url": "views/yuque/shi-yong-marpzhi-zuo-ppt.html",
    "revision": "6d34d87524d7d6f8962c00513e6d3da0"
  },
  {
    "url": "views/yuque/slidev-shi-yong-ji-lu.html",
    "revision": "6c6c46acbeefa0a25f2ceb28f10a9e3f"
  },
  {
    "url": "views/yuque/ti-sheng-githubdai-ma-la-qu-su-du.html",
    "revision": "1fc9b732e6fcbee9e4f3924d8aa01f8a"
  },
  {
    "url": "views/yuque/vite2.1-react17-redux.html",
    "revision": "60d95056fdcaa7c43bbf13b2c17a8eb6"
  },
  {
    "url": "views/yuque/vscode-cha-jian.html",
    "revision": "51da88d2e330835ee0d69b7d7a8763cb"
  },
  {
    "url": "views/yuque/vscodekuai-jie-jian.html",
    "revision": "0969985f85f80d09babb7f469d3aabaf"
  },
  {
    "url": "views/yuque/vue2-pei-zhi-tailwind-css.html",
    "revision": "63941250b5c4fbcfa14b7d9ed7a80350"
  },
  {
    "url": "views/yuque/vuepressbo-ke-da-jian.html",
    "revision": "6019b5bc2daec33729897fd9526b2212"
  },
  {
    "url": "views/yuque/vuepressyu-que-yun-duan-xie-zuo-github-actionschi-xu-ji-cheng.html",
    "revision": "54adb7a0d969b4778521d2c5f7478e6e"
  },
  {
    "url": "views/yuque/vuezi-dong-jian-ce-shua-xin-index.html.html",
    "revision": "347a113adde960c5c56e8285f97b3775"
  },
  {
    "url": "views/yuque/wang-luo-apishou-cang.html",
    "revision": "af2e1a1d1de4e47f800e7f939f453ed0"
  },
  {
    "url": "views/yuque/win10chang-yong-ruan-jian-an-zhuang.html",
    "revision": "a2500d80cb8a3818c2b815b4f9bc059d"
  },
  {
    "url": "views/yuque/yamlwen-jian-ge-shi-ji-pythonjie-xi.html",
    "revision": "1457f113d4262ae499cee62e09e9e525"
  },
  {
    "url": "views/yuque/yapian-zhuang-ji-lu.html",
    "revision": "734ce7c09a0fe597bdcfcfe5cd471327"
  },
  {
    "url": "views/yuque/yu-que-tu-chuang-fang-dao-lian-lin-shi-jie-jue-ban-fa.html",
    "revision": "cfe7cc82ba05b7a46071dd955a58e873"
  },
  {
    "url": "views/yuque/yun-fu-wu-qi-sambashe-zhi.html",
    "revision": "ca0492b647ca8e0955fac05fd6191d1e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
