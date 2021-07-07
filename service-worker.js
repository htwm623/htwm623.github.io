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
    "revision": "b7f93f00fb9ca74d6377c4d1e914d875"
  },
  {
    "url": "about/index.html",
    "revision": "0c080eb0bdef1c9b7a02e61c3f1a2d22"
  },
  {
    "url": "assets/css/0.styles.45b46f79.css",
    "revision": "f1f480eb9f3bf76d2d8a6a9b7008041c"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.d3c39313.js",
    "revision": "d1873909b0069bc7973e55884b1de74d"
  },
  {
    "url": "assets/js/10.ceca4255.js",
    "revision": "0c5a310ca270b9c711d0b2b112fbc9d3"
  },
  {
    "url": "assets/js/11.9337a25d.js",
    "revision": "9794df3f028a8aea60d232e85f8ca85f"
  },
  {
    "url": "assets/js/12.b0d3dc8d.js",
    "revision": "f86acece2e7e10012f22069f67ad15e6"
  },
  {
    "url": "assets/js/13.cb4b6cd9.js",
    "revision": "8621b827dc8fd0e621f99c1daa51ffb5"
  },
  {
    "url": "assets/js/14.f1071cce.js",
    "revision": "fb9b43bbf3181b33bbb6067bb67e975c"
  },
  {
    "url": "assets/js/15.082a7213.js",
    "revision": "c20ebe76826785c32840549be0bade91"
  },
  {
    "url": "assets/js/16.bc9981a3.js",
    "revision": "006293d8b1cb1fb22af44e5b6b5692f1"
  },
  {
    "url": "assets/js/17.35af678c.js",
    "revision": "4a2a1a76ccfa18a82cc420d999e2b9b0"
  },
  {
    "url": "assets/js/18.97d643da.js",
    "revision": "948aab1e7d89025e3bdc70dde7ba2520"
  },
  {
    "url": "assets/js/19.2d8657f0.js",
    "revision": "35acff1436ccb1e9275911c9ce735370"
  },
  {
    "url": "assets/js/20.55857709.js",
    "revision": "e114a00c91d8ae3277acbeaa951bca92"
  },
  {
    "url": "assets/js/21.c7a65bbc.js",
    "revision": "fbf724b178f163ac5b667876d87f87ba"
  },
  {
    "url": "assets/js/22.cf104e8f.js",
    "revision": "7da6bea43130eed24d52562034f387e1"
  },
  {
    "url": "assets/js/23.81f922e6.js",
    "revision": "6286430526221712efc0cd1ad1771333"
  },
  {
    "url": "assets/js/24.5eedb8f9.js",
    "revision": "918ae693d377e0deea359644c9e597dd"
  },
  {
    "url": "assets/js/25.0ebaf49f.js",
    "revision": "7b20ff94716b72bfeb3d72b9ad1f54c1"
  },
  {
    "url": "assets/js/26.3c81cadd.js",
    "revision": "1e07807df8542edbb03739d86d9ce526"
  },
  {
    "url": "assets/js/27.8571a22a.js",
    "revision": "8e9ff7580240c22c438e74a35244f16a"
  },
  {
    "url": "assets/js/28.34f574bf.js",
    "revision": "6abf9885cbb4291ce6c18045095cb706"
  },
  {
    "url": "assets/js/29.f2090a79.js",
    "revision": "68928df4623eea575fafca3490dbf29f"
  },
  {
    "url": "assets/js/3.04d40daa.js",
    "revision": "cc24b176e5d3334e0586416f2e958ddb"
  },
  {
    "url": "assets/js/30.6f67da11.js",
    "revision": "9fa6502f8d29580877815f1164329ec7"
  },
  {
    "url": "assets/js/31.86f4990b.js",
    "revision": "7c3d69466326c083176c049b9b90abfa"
  },
  {
    "url": "assets/js/32.891dae13.js",
    "revision": "00f35a9aaf8292fe393e9b21ef99f1c7"
  },
  {
    "url": "assets/js/33.85833842.js",
    "revision": "d2aa01c69bc7f2c47509a93c64f4b49c"
  },
  {
    "url": "assets/js/34.99031831.js",
    "revision": "f77c92ff074368cb64ddd2f2ad74e532"
  },
  {
    "url": "assets/js/35.e42bd9ae.js",
    "revision": "b255ec98495780ea13f8cb02762031d1"
  },
  {
    "url": "assets/js/36.5696da88.js",
    "revision": "a2e216352f4d9976af3af706a4df36a0"
  },
  {
    "url": "assets/js/37.abe17144.js",
    "revision": "502c8b78def7f975a5c664c48774099b"
  },
  {
    "url": "assets/js/38.8f29582e.js",
    "revision": "adca745ac38cec4a52da6eeea5e81426"
  },
  {
    "url": "assets/js/39.8877b375.js",
    "revision": "77f164a0820276cf45d7189c8b3fed02"
  },
  {
    "url": "assets/js/4.a0785061.js",
    "revision": "0eab73483e39b44a922d17b01f4ad9f9"
  },
  {
    "url": "assets/js/40.207f9319.js",
    "revision": "233d639ab05e0f105abcfab0cfe52477"
  },
  {
    "url": "assets/js/41.8bc7a6cf.js",
    "revision": "f847d01e82be984937277e4f24cbf7aa"
  },
  {
    "url": "assets/js/42.431b463c.js",
    "revision": "59966b7b8714e1a40a012188724335a5"
  },
  {
    "url": "assets/js/43.64abdf36.js",
    "revision": "7934568879f6b9129aa0e291ed190f9c"
  },
  {
    "url": "assets/js/44.77183cff.js",
    "revision": "9ca470daa780e3ace0211baead0893ce"
  },
  {
    "url": "assets/js/45.8a864b4f.js",
    "revision": "7fe6a2aa5bd035a5be845cbca4c1beaf"
  },
  {
    "url": "assets/js/46.3c04f3c9.js",
    "revision": "03b69d73f4d4668b2c9355188b39ce71"
  },
  {
    "url": "assets/js/47.ada2ea2d.js",
    "revision": "a0e8bb377d26223ec602b3821ed6accb"
  },
  {
    "url": "assets/js/48.8de03c25.js",
    "revision": "9ef442c5e8f8d3c80e3d907d7426bfb1"
  },
  {
    "url": "assets/js/49.6c8b94ac.js",
    "revision": "db0387033a5d08a6e41f323179a0e867"
  },
  {
    "url": "assets/js/5.0e1d9fee.js",
    "revision": "4169ab1ed1e59690e657a9d0fa86e633"
  },
  {
    "url": "assets/js/50.dd8be5ad.js",
    "revision": "3d38d2d17c6ff163cb7ec7257d488b77"
  },
  {
    "url": "assets/js/51.8a991c8d.js",
    "revision": "f3700bf47c2ec137f26a285586c300f6"
  },
  {
    "url": "assets/js/52.e61d92d1.js",
    "revision": "736acebcec46cb7589f675cbb805190e"
  },
  {
    "url": "assets/js/53.c8531077.js",
    "revision": "8ebb24beb4977b92618d051f0af5b1cf"
  },
  {
    "url": "assets/js/54.66dc46f1.js",
    "revision": "750081d698811213e2d02974e150234a"
  },
  {
    "url": "assets/js/55.c4c5a6a0.js",
    "revision": "50e9014f7f110c770cbcc65823d833a7"
  },
  {
    "url": "assets/js/56.e789a81e.js",
    "revision": "a58494bd2c3a5ebd9ea87cd7477f9475"
  },
  {
    "url": "assets/js/57.68c751de.js",
    "revision": "a88bb86225497ecfa393ee98847da628"
  },
  {
    "url": "assets/js/58.2e194543.js",
    "revision": "f73b6191da9176177ceb804ee23e9d55"
  },
  {
    "url": "assets/js/59.44877bc6.js",
    "revision": "574652b71d173864e14329e83aea14f4"
  },
  {
    "url": "assets/js/6.90cb6178.js",
    "revision": "84ccfa96f93a438c2baf56ddd34d5455"
  },
  {
    "url": "assets/js/60.7913c6ed.js",
    "revision": "2b755e173d27f2242e119d537e175499"
  },
  {
    "url": "assets/js/61.5a467d89.js",
    "revision": "33de2a5b2c6b524a0a1db3218dab7018"
  },
  {
    "url": "assets/js/62.d72d0535.js",
    "revision": "2ef789eb67c8cd5c4e3439d75babdda4"
  },
  {
    "url": "assets/js/63.ddb7e335.js",
    "revision": "77d9c801c901d77dc3a3bdcd100379e7"
  },
  {
    "url": "assets/js/64.2f426f75.js",
    "revision": "3a87f2fada22b3a2565eed9e12e81e62"
  },
  {
    "url": "assets/js/65.6540aba8.js",
    "revision": "3c6bdd35281ee68b575d8ac0dfd05198"
  },
  {
    "url": "assets/js/66.b416ba7e.js",
    "revision": "7bfdf3dad7b46ad0d836262f82cc8426"
  },
  {
    "url": "assets/js/67.a5578201.js",
    "revision": "a847d39b4e395b9d608c2c87fe2121e2"
  },
  {
    "url": "assets/js/68.8e281aa1.js",
    "revision": "1dfa2ccc985ae3d6e156b8363771dceb"
  },
  {
    "url": "assets/js/69.fc50cf2d.js",
    "revision": "94e35dd34f9e0d788a73cb8d5b006e8b"
  },
  {
    "url": "assets/js/7.f73e3be0.js",
    "revision": "a59a52a45c209eaca23f9e6ca12ba963"
  },
  {
    "url": "assets/js/70.ab2aae10.js",
    "revision": "0f500592771da9d1d650c76a041b9677"
  },
  {
    "url": "assets/js/71.35d1e974.js",
    "revision": "e0af7cd8c810cf5f777f7639b3eeac82"
  },
  {
    "url": "assets/js/72.eb6848e3.js",
    "revision": "bb8c4efe39345f539a2369cddb1d7ed8"
  },
  {
    "url": "assets/js/73.e93de3b7.js",
    "revision": "34851cea6ca21dc3067090cf99982978"
  },
  {
    "url": "assets/js/74.13ec7952.js",
    "revision": "fe5d6a491965fbc69c77614e6b0aed91"
  },
  {
    "url": "assets/js/8.73e5bda5.js",
    "revision": "269e3f8c260b454c87c715668de31f11"
  },
  {
    "url": "assets/js/9.e79d2d1a.js",
    "revision": "f5c11856859afd8e2614c945726c1309"
  },
  {
    "url": "assets/js/app.f078ab35.js",
    "revision": "e885ee0a11337be84c9ee1c218a87d7c"
  },
  {
    "url": "categories/index.html",
    "revision": "047f9de4e8b917f89bd387deaaa5a435"
  },
  {
    "url": "categories/代码片段/index.html",
    "revision": "a1202d7eddef865ad14bd50f1f988aea"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "ce423e9e6cf7b7a080334c7463afc08b"
  },
  {
    "url": "categories/技术笔记/page/2/index.html",
    "revision": "8d2541dde81da5b00272ead8bddad48f"
  },
  {
    "url": "categories/技术笔记/page/3/index.html",
    "revision": "c000467b2a804e2bc3955cd0c99e9eb0"
  },
  {
    "url": "categories/技术笔记/page/4/index.html",
    "revision": "97e42d2fe66f7bf4b307ea4fc03d7aa4"
  },
  {
    "url": "categories/技术笔记/page/5/index.html",
    "revision": "5fec15758391bf5d2a6fdad1071cf6fa"
  },
  {
    "url": "code-snippets/code-2021/difference-between-js-for-loop.html",
    "revision": "60bccba46c1857575d6c5c3a05b6ca93"
  },
  {
    "url": "code-snippets/code-2021/flaskkua-yu-shi-li.html",
    "revision": "cc414c7723bff617ee73b321b9fa9226"
  },
  {
    "url": "code-snippets/code-2021/for-loops-array-reduce-and-method-chaining.html",
    "revision": "bad7f34725dad781dd815e7c46fbee60"
  },
  {
    "url": "code-snippets/code-2021/nodejsnei-zhi-http-server.html",
    "revision": "b790d1e05c57276fc21fc8b6a7ff911f"
  },
  {
    "url": "code-snippets/code-2021/server-sent-eventsshi-li-dai-ma.html",
    "revision": "cc3395f3fdff7b659d42a1b557a158cf"
  },
  {
    "url": "code-snippets/code-2021/vue3shi-yong-cdnfang-shi-yin-ru-shi-li.html",
    "revision": "84f5ad9c37da9434da9889428e086103"
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
    "revision": "332f990f57de310b6bc4f992793e7cf8"
  },
  {
    "url": "logo.png",
    "revision": "dfb9cc785f85c37c4aca9566f6cda8c6"
  },
  {
    "url": "notes/css.html",
    "revision": "a96ce8347744208a96066df22f7679f6"
  },
  {
    "url": "notes/css/cssji-chu.html",
    "revision": "0f3ce059bac6afa91d2de88cf58d6af7"
  },
  {
    "url": "notes/css/cssxuan-ze-qi.html",
    "revision": "da81cf6ab9c1eebdbea53740d28b064e"
  },
  {
    "url": "notes/css/flexbu-ju.html",
    "revision": "19c91cab13e9d93f539800f8afe55598"
  },
  {
    "url": "notes/docker/docer-composeduo-rong-qi-xiang-mu.html",
    "revision": "f9189352e037b0484360a100b965e1cf"
  },
  {
    "url": "notes/docker/dockerbian-xie-jing-xiang-bing-shang-chuan.html",
    "revision": "16ecf5a502f9d66ce12ce4f255ca737f"
  },
  {
    "url": "notes/docker/dockerjian-dan-shi-yong.html",
    "revision": "6150c2044f7a8351393003e4af7cae39"
  },
  {
    "url": "notes/gitde-jian-dan-shi-yong.html",
    "revision": "aca2a5f28c5e0ab7dd852ccabc55794e"
  },
  {
    "url": "notes/guide/guide-1.html",
    "revision": "cd19ab7a282c471931cc4d185e08ef04"
  },
  {
    "url": "notes/guide/guide-2.html",
    "revision": "43c2ce4d8b8919031f0065ee6e86d5a2"
  },
  {
    "url": "notes/guide/guide-3.html",
    "revision": "4628b11b9f81292daafd21119cc57512"
  },
  {
    "url": "notes/html/html5yu-yi-yuan-su.html",
    "revision": "9bb5c6605a0d7074d08b5718b95a780d"
  },
  {
    "url": "notes/html/htmlji-chu.html",
    "revision": "a55e419948dab7096f79e763a3e6c355"
  },
  {
    "url": "notes/index.html",
    "revision": "3969621434e282ec587cbca72e423cef"
  },
  {
    "url": "notes/typescript/typescript-webpackda-bao.html",
    "revision": "da68f489c5c4dfddcc05525dce4f4abf"
  },
  {
    "url": "notes/typescript/typescriptbian-yi-xuan-xiang.html",
    "revision": "6c53bd6449ce72a2580909b2459afe23"
  },
  {
    "url": "notes/typescript/typescriptji-chu.html",
    "revision": "5c545d554bb08d86dc06a956ebaa7808"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "b2e7ae3bb18cea98c1c2807e5f62104a"
  },
  {
    "url": "tag/ci/cd/index.html",
    "revision": "eb6a4ba5934a727a49ad16bcd4c7d021"
  },
  {
    "url": "tag/css/index.html",
    "revision": "ba4acd496832c11c56c3da85355cddc8"
  },
  {
    "url": "tag/docker-compose/index.html",
    "revision": "0f0fa5f5767f829fccd7273f9b9752f7"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "0beaf613d71eab141bf8dd90b1a05996"
  },
  {
    "url": "tag/element/index.html",
    "revision": "f09cdfaacf5e9876b2da74f1269d5e3c"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "9f8c1e4fe9094becac844c3f5eb6d800"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a409b17e9454b219859ae71699baf0c5"
  },
  {
    "url": "tag/html/index.html",
    "revision": "914b53c4da1ab99d14b7182add75ce16"
  },
  {
    "url": "tag/http/index.html",
    "revision": "cd3a1535842c1c99bf975c3599e5651a"
  },
  {
    "url": "tag/index.html",
    "revision": "08774591a0e0464e15b9d25c6b23fbc2"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "d3df56ac512b4065664351dd8eedfe92"
  },
  {
    "url": "tag/node/index.html",
    "revision": "02ab3c808508c54e7acaca9aacbbdc52"
  },
  {
    "url": "tag/other/index.html",
    "revision": "6c9fc8ab10e88d2a4c6c20696ce7c0fd"
  },
  {
    "url": "tag/python/index.html",
    "revision": "49678538255bc7547a11a7d28d7be1ff"
  },
  {
    "url": "tag/react/index.html",
    "revision": "745340453e89786cb111e0b99cc1f218"
  },
  {
    "url": "tag/redux/index.html",
    "revision": "5cbeb84a3001be6f162847f6212f82ce"
  },
  {
    "url": "tag/serverless/index.html",
    "revision": "23f2c8e71b7c4ba595824dcdf2a8d5f0"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "d4b618f14a31f08dc9d53a9cc577a2b2"
  },
  {
    "url": "tag/tailwind/index.html",
    "revision": "32977d269d44b2982f90728a59e3f3bf"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "560edf6a07b3d61f6f7126b657496b2d"
  },
  {
    "url": "tag/ui/index.html",
    "revision": "7acff4e3e5ece4255c7e08d3e211abf2"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "fa19a98270c6daf879b97ce872c8af38"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "25fea569aafcef716895a459aa42dd85"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "9b8fd05cb204070c01cc8f2c5e976d01"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "c00fc6d44e0d8e98bfd4973276e7528a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "923650973b064c2651634fe163ad0ae1"
  },
  {
    "url": "tag/yuque/index.html",
    "revision": "a27a7a8f0f33b5ae2ecf36091516e6e5"
  },
  {
    "url": "timeline/index.html",
    "revision": "b56bd0ad98ece002c96d8112468bc84c"
  },
  {
    "url": "views/yuque/cloudbase-frameworkchu-ci-shi-yong.html",
    "revision": "1b0d8442a78683f70d2cc45c394227ad"
  },
  {
    "url": "views/yuque/commonjs-module-syntax.html",
    "revision": "1086653167da56c99e62bae2f3339801"
  },
  {
    "url": "views/yuque/cypressjian-dan-shang-shou.html",
    "revision": "f240f792c58326a328e5769ab9be2693"
  },
  {
    "url": "views/yuque/dao-chu-yu-que-wen-dang.html",
    "revision": "c94a42501225e6c8e78798593b7277cc"
  },
  {
    "url": "views/yuque/el-treexiu-gai-zi-jie-dian-wei-dan-xuan.html",
    "revision": "947706b98986d5c29a6171f34716b8c4"
  },
  {
    "url": "views/yuque/el-uploadshang-chuan-can-shu-ji-jie-xi.html",
    "revision": "71ba13c648f9acf0e8692652a2b74198"
  },
  {
    "url": "views/yuque/fcc-xiang-ying-shi-webshe-ji.html",
    "revision": "e210da3bd2e967fc46e7a33de8d39cc4"
  },
  {
    "url": "views/yuque/graphqlxue-xi.html",
    "revision": "f51d5c89b69a90e102436170575793c4"
  },
  {
    "url": "views/yuque/javascriptshi-jian-xun-huan.html",
    "revision": "75b14d071470ec260f25637fc5ae110f"
  },
  {
    "url": "views/yuque/jian-dan-jing-tai-wen-jian-server.html",
    "revision": "0783ec2254621bd6394babbb516ab580"
  },
  {
    "url": "views/yuque/jian-pan-shi-jian-xiang-jie.html",
    "revision": "b4a6c55145d89851464542bbca230e48"
  },
  {
    "url": "views/yuque/jupyter-notebook.html",
    "revision": "1c57e94326763808d64c75ad065cfcff"
  },
  {
    "url": "views/yuque/maridban-zhuang-ji-yuan-cheng-lian-jie.html",
    "revision": "21ae9d171320c598bb83f84795aa1695"
  },
  {
    "url": "views/yuque/pandasdu-xie-csvji-zhui-jia.html",
    "revision": "a20039ac0d70cb4832c79fc87f651b02"
  },
  {
    "url": "views/yuque/picgo-githubtu-chuang.html",
    "revision": "ae45932add15f694877572b0c33fa569"
  },
  {
    "url": "views/yuque/promiseji-lu.html",
    "revision": "07a13b7823f76e4ce6650ead181c9367"
  },
  {
    "url": "views/yuque/python-bao-zhi-zuo-liu-cheng.html",
    "revision": "6dfdea28f1ab0aeee0a8724f3957e16e"
  },
  {
    "url": "views/yuque/pythonjiang-wu-xian-fen-lei-jie-gou-shu-ju-zhuan-wei-json.html",
    "revision": "8f8364de00ea7dd9ce5b96974f0cfdf5"
  },
  {
    "url": "views/yuque/ru-he-chu-li-jsonwen-jian-jie-wei-de-dou-hao.html",
    "revision": "789fa7c2de552ca8cdf7a67110b77067"
  },
  {
    "url": "views/yuque/ru-he-pi-liang-dao-ru-a-li-icon.html",
    "revision": "a184f90140d2c810b54deb5ea3a0a8c3"
  },
  {
    "url": "views/yuque/shi-yong-aria2pi-liang-xia-zai-shi-pin.html",
    "revision": "6b6e2d939bd00fd4cdb716e6c73409b4"
  },
  {
    "url": "views/yuque/shi-yong-marpzhi-zuo-ppt.html",
    "revision": "db6128b82bc4a028552504f2cc2c26a2"
  },
  {
    "url": "views/yuque/slidev-shi-yong-ji-lu.html",
    "revision": "360e288c4be15b4a070b9363a4ff021e"
  },
  {
    "url": "views/yuque/ti-sheng-githubdai-ma-la-qu-su-du.html",
    "revision": "e77aff44727444f29cdeba613350bcb5"
  },
  {
    "url": "views/yuque/vite2.1-react17-redux.html",
    "revision": "9d2ce1b5663611fe79fdf7ff15463aac"
  },
  {
    "url": "views/yuque/vscode-cha-jian.html",
    "revision": "5fdba0af4d62dd208644b69bb8ee96a4"
  },
  {
    "url": "views/yuque/vscodekuai-jie-jian.html",
    "revision": "ee58259e893b28ae7add0f6e591a645b"
  },
  {
    "url": "views/yuque/vue2-pei-zhi-tailwind-css.html",
    "revision": "250ccc3c2a382daa4352f78fb8d584eb"
  },
  {
    "url": "views/yuque/vuepressbo-ke-da-jian.html",
    "revision": "93e1f9bd7dd8a4101f46eb10172046b2"
  },
  {
    "url": "views/yuque/vuepressyu-que-yun-duan-xie-zuo-github-actionschi-xu-ji-cheng.html",
    "revision": "15c7ab238bf26841964cb3f96681e41e"
  },
  {
    "url": "views/yuque/vuezi-dong-jian-ce-shua-xin-index.html.html",
    "revision": "3f6c9510fca513656b96251103da3cbc"
  },
  {
    "url": "views/yuque/wang-luo-apishou-cang.html",
    "revision": "baf33c4424345693419a97474a0b3f5d"
  },
  {
    "url": "views/yuque/win10chang-yong-ruan-jian-an-zhuang.html",
    "revision": "1789b173dc71a1bf2e9575d80e9d1071"
  },
  {
    "url": "views/yuque/yamlwen-jian-ge-shi-ji-pythonjie-xi.html",
    "revision": "c7f2ada06728c4b4ab03a831bf82b0e6"
  },
  {
    "url": "views/yuque/yapian-zhuang-ji-lu.html",
    "revision": "1d7d68b532273fd3831ef881a02d4f91"
  },
  {
    "url": "views/yuque/yu-que-tu-chuang-fang-dao-lian-lin-shi-jie-jue-ban-fa.html",
    "revision": "3adeb6e5eced0e9ee060f930df11415c"
  },
  {
    "url": "views/yuque/yun-fu-wu-qi-sambashe-zhi.html",
    "revision": "4d6347331e8628cead720edfcfb20765"
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
