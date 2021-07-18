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
    "revision": "34b7d63a25dbfaf93e780f7ebc7ad59a"
  },
  {
    "url": "about/index.html",
    "revision": "a6be605b53fb8425823df4a555daec60"
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
    "url": "assets/js/11.e3c990f6.js",
    "revision": "9794df3f028a8aea60d232e85f8ca85f"
  },
  {
    "url": "assets/js/12.0dcc2096.js",
    "revision": "7cace24d54a36f56a4e0e43b0f4882ea"
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
    "url": "assets/js/20.487bac66.js",
    "revision": "e3711048b8db7fdc3f72686329948400"
  },
  {
    "url": "assets/js/21.446e941a.js",
    "revision": "7495cc3e088d42d258c878d559ca0927"
  },
  {
    "url": "assets/js/22.7228cb93.js",
    "revision": "850a39bae68a84449f89a2de229dacf0"
  },
  {
    "url": "assets/js/23.ff32dc63.js",
    "revision": "6fa00971d5a40278011621afb6c40df0"
  },
  {
    "url": "assets/js/24.96435ffb.js",
    "revision": "761e610593b536724c357bc31f806cfc"
  },
  {
    "url": "assets/js/25.904bee3e.js",
    "revision": "cefc6dde5e1b56d43fe3a546ec39d204"
  },
  {
    "url": "assets/js/26.d521ffa6.js",
    "revision": "f73f1c68c199035f7e13479c997b33a8"
  },
  {
    "url": "assets/js/27.252e66b1.js",
    "revision": "eac785d762355547a7955872e4243cda"
  },
  {
    "url": "assets/js/28.592cd63b.js",
    "revision": "98f3a261b80c9c361b6f71fca6b7179e"
  },
  {
    "url": "assets/js/29.4b95d576.js",
    "revision": "bce7f291bceb5615372e06ba790037ad"
  },
  {
    "url": "assets/js/3.04d40daa.js",
    "revision": "cc24b176e5d3334e0586416f2e958ddb"
  },
  {
    "url": "assets/js/30.417b33f1.js",
    "revision": "a9561b3cf1189b0ebc6364c5754eb414"
  },
  {
    "url": "assets/js/31.796fe8fe.js",
    "revision": "e7f19f5055865147df3cdc4608e6ac28"
  },
  {
    "url": "assets/js/32.0566d630.js",
    "revision": "140d4199d65c558f15878f3586a519e5"
  },
  {
    "url": "assets/js/33.a2819762.js",
    "revision": "08d306a6ba4aa97f8479c29bf3226308"
  },
  {
    "url": "assets/js/34.56d06059.js",
    "revision": "1702603aeea1dc8afc1a8b37aa3125b3"
  },
  {
    "url": "assets/js/35.1ffa7202.js",
    "revision": "fa99500d7b302bbdd06f89267e69278f"
  },
  {
    "url": "assets/js/36.2320d77b.js",
    "revision": "331f7bb5a0a7b8c2856ecb8b4e0fee89"
  },
  {
    "url": "assets/js/37.ec8d829b.js",
    "revision": "95b3018a63f1b37491e8e5f2daa5942d"
  },
  {
    "url": "assets/js/38.8f7a3a90.js",
    "revision": "db1fc38d8803958f7bffd1e042853d92"
  },
  {
    "url": "assets/js/39.977b6514.js",
    "revision": "962b98436ca4bca4d555159b85108271"
  },
  {
    "url": "assets/js/4.a0785061.js",
    "revision": "0eab73483e39b44a922d17b01f4ad9f9"
  },
  {
    "url": "assets/js/40.22cb93f5.js",
    "revision": "dc6ddd17b7ed98004f4efb55ce36c544"
  },
  {
    "url": "assets/js/41.52e008c2.js",
    "revision": "00a60724374f69a17473ba20286e9a84"
  },
  {
    "url": "assets/js/42.270bf08d.js",
    "revision": "0bda8dbb45c67d574fa18c027ef308d8"
  },
  {
    "url": "assets/js/43.4728bf4b.js",
    "revision": "188e06fbb40214065319fe27924c4962"
  },
  {
    "url": "assets/js/44.d4b5504b.js",
    "revision": "b6ddbb4ad9de8b7111991012bc6dea40"
  },
  {
    "url": "assets/js/45.60ed534e.js",
    "revision": "03148a7d844d7165b89752188ee67226"
  },
  {
    "url": "assets/js/46.59f2b5ea.js",
    "revision": "3f7ea6bad87b863c74ddd32e5164f55e"
  },
  {
    "url": "assets/js/47.fb621f01.js",
    "revision": "19ef14127428008cb3df43b2fee565e0"
  },
  {
    "url": "assets/js/48.754d6564.js",
    "revision": "69ceb9928af76c5106b09c5058259110"
  },
  {
    "url": "assets/js/49.3fffaf8d.js",
    "revision": "066440a4c37f075e5a343280ef057973"
  },
  {
    "url": "assets/js/5.0e1d9fee.js",
    "revision": "4169ab1ed1e59690e657a9d0fa86e633"
  },
  {
    "url": "assets/js/50.a308769a.js",
    "revision": "4df22e2d6abe6d9c718b9fcfa5092e9c"
  },
  {
    "url": "assets/js/51.8ce7b0c9.js",
    "revision": "512e0947b11bc351aa1ed70c7f311123"
  },
  {
    "url": "assets/js/52.7584a2c0.js",
    "revision": "9da20650a92bc4d45df2057ab2f6bccd"
  },
  {
    "url": "assets/js/53.72328248.js",
    "revision": "6ee50684618253212f5ee01fc90b513e"
  },
  {
    "url": "assets/js/54.d5b9a144.js",
    "revision": "2004dac717fbb3f76761299ad2769218"
  },
  {
    "url": "assets/js/55.7d4b855c.js",
    "revision": "26b6314554eadbfab0aa38dfc3207a7f"
  },
  {
    "url": "assets/js/56.9fad9321.js",
    "revision": "7832bb4e4acf772f239c8a9da4be02f1"
  },
  {
    "url": "assets/js/57.8d578336.js",
    "revision": "da7f91eee2d93c33e98c4d3769bb98c5"
  },
  {
    "url": "assets/js/58.747dfd6c.js",
    "revision": "dc3c39e5d307f39fe47bd513c4679aef"
  },
  {
    "url": "assets/js/59.23d4475b.js",
    "revision": "8e74f8622da19ef489dff03b7415a231"
  },
  {
    "url": "assets/js/6.90cb6178.js",
    "revision": "84ccfa96f93a438c2baf56ddd34d5455"
  },
  {
    "url": "assets/js/60.ee51e313.js",
    "revision": "f7923941b74ae53031eb7b2f739a5959"
  },
  {
    "url": "assets/js/61.645ee1a3.js",
    "revision": "876a7f01dd39cc57bf6c89e3202a5db2"
  },
  {
    "url": "assets/js/62.e0809919.js",
    "revision": "42ae3117dfaef3849482425c72d00bdf"
  },
  {
    "url": "assets/js/63.0895ad9a.js",
    "revision": "6ce4d1ae1da9549ad2837304f14a6ec6"
  },
  {
    "url": "assets/js/64.ed54f73b.js",
    "revision": "582d45f2575a4c5eb142285305f139ac"
  },
  {
    "url": "assets/js/65.fceb19b0.js",
    "revision": "deda0c1b9bf00a767645f24bb3caf183"
  },
  {
    "url": "assets/js/66.c842e969.js",
    "revision": "6ea191b38943096a2618ed2fcb5f61e5"
  },
  {
    "url": "assets/js/67.b75a7d3f.js",
    "revision": "41acb36e15f4a775d4ad40258f1bdf04"
  },
  {
    "url": "assets/js/68.7432edde.js",
    "revision": "5c9ce58d6df7ee24f7e21ffdaca8caff"
  },
  {
    "url": "assets/js/69.1ef1bfd7.js",
    "revision": "a8984f36563489db7dce8bf433d259ae"
  },
  {
    "url": "assets/js/7.f73e3be0.js",
    "revision": "a59a52a45c209eaca23f9e6ca12ba963"
  },
  {
    "url": "assets/js/70.a005a30f.js",
    "revision": "c347766d5b4cb04a0eb4230eab60274c"
  },
  {
    "url": "assets/js/71.a9e2c15c.js",
    "revision": "ef06f6993c4e734dd3b5b5eb577f325f"
  },
  {
    "url": "assets/js/72.dc5b07c7.js",
    "revision": "a465e97cb0bbfafb96fb9ab8f33f18a6"
  },
  {
    "url": "assets/js/73.5007d3eb.js",
    "revision": "2b6506a1a6a58b0573daa49b2c0988fb"
  },
  {
    "url": "assets/js/74.7dcd6ce8.js",
    "revision": "8c6347f5c95435caabd247930420aed7"
  },
  {
    "url": "assets/js/75.fd6f211d.js",
    "revision": "12f07cd34de292041a29f84e1ce037e9"
  },
  {
    "url": "assets/js/8.73e5bda5.js",
    "revision": "269e3f8c260b454c87c715668de31f11"
  },
  {
    "url": "assets/js/9.0cf1bfbd.js",
    "revision": "2c58e6e5d83937ec65d3355a4f9c20a1"
  },
  {
    "url": "assets/js/app.56ace832.js",
    "revision": "ae2f84b35cc4e7f9a17fe67a31e6966d"
  },
  {
    "url": "categories/index.html",
    "revision": "4ac676ce86c813f82cf16cc74e57e989"
  },
  {
    "url": "categories/代码片段/index.html",
    "revision": "00e6d5a8f709ebf5162aef9f825b3ca3"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "633035a0ad8588c945819078b2958fe5"
  },
  {
    "url": "categories/技术笔记/page/2/index.html",
    "revision": "99fa3c19ad36b90b5a0423f9f3a69a4b"
  },
  {
    "url": "categories/技术笔记/page/3/index.html",
    "revision": "5090ffa38701455d4c9af548f3503f9e"
  },
  {
    "url": "categories/技术笔记/page/4/index.html",
    "revision": "eafa6c2ba6b6f2cc28df476c79abc048"
  },
  {
    "url": "categories/技术笔记/page/5/index.html",
    "revision": "a2969b17ab564cef9d5fc654442ef8d4"
  },
  {
    "url": "code-snippets/code-2021/difference-between-js-for-loop.html",
    "revision": "f6a81f0b8a7d17833204f32c3b94701a"
  },
  {
    "url": "code-snippets/code-2021/flaskkua-yu-shi-li.html",
    "revision": "789241ebc0c2f83ec37efddaec3403f1"
  },
  {
    "url": "code-snippets/code-2021/for-loops-array-reduce-and-method-chaining.html",
    "revision": "afe3b780dcf845553d68debe6637ce1d"
  },
  {
    "url": "code-snippets/code-2021/nodejsnei-zhi-http-server.html",
    "revision": "780cc161c93192c1fbbcb123173303f3"
  },
  {
    "url": "code-snippets/code-2021/server-sent-eventsshi-li-dai-ma.html",
    "revision": "8b873c0ce1af5aad49ad7c6ab9da7485"
  },
  {
    "url": "code-snippets/code-2021/vue3shi-yong-cdnfang-shi-yin-ru-shi-li.html",
    "revision": "799e69d27347fa76b6ecc746a1bfc96f"
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
    "revision": "77fed82951ba02572de54f5d4903cf99"
  },
  {
    "url": "logo.png",
    "revision": "dfb9cc785f85c37c4aca9566f6cda8c6"
  },
  {
    "url": "notes/browser/hui-liu-he-chong-hui.html",
    "revision": "e1ab6caf53ae6aa2685e637ac686a9c7"
  },
  {
    "url": "notes/css.html",
    "revision": "6b9cd4c1db74d67899473615e3279d47"
  },
  {
    "url": "notes/css/cssji-chu.html",
    "revision": "3a7af109bfb1b191863a5a25ffd99591"
  },
  {
    "url": "notes/css/cssxuan-ze-qi.html",
    "revision": "0def783ac24cd3e6dde55a7d377954d6"
  },
  {
    "url": "notes/css/flexbu-ju.html",
    "revision": "2ee509e0b3c09ea0536af170daabca63"
  },
  {
    "url": "notes/docker/docer-composeduo-rong-qi-xiang-mu.html",
    "revision": "15ebf130e02f5b4c65b53f4557b1f0dd"
  },
  {
    "url": "notes/docker/dockerbian-xie-jing-xiang-bing-shang-chuan.html",
    "revision": "d8923d94eb1eb87a95b03c52bb8dab74"
  },
  {
    "url": "notes/docker/dockerjian-dan-shi-yong.html",
    "revision": "46a9ca73a175b2b7a6e614de9bc3baea"
  },
  {
    "url": "notes/gitde-jian-dan-shi-yong.html",
    "revision": "63413b92184e6e0bb7eb906d7207ecae"
  },
  {
    "url": "notes/guide/guide-1.html",
    "revision": "96881906718fbff12567fb2d0651e99f"
  },
  {
    "url": "notes/guide/guide-2.html",
    "revision": "07174921641ecc87043f9cccaa370b55"
  },
  {
    "url": "notes/guide/guide-3.html",
    "revision": "af72dd5fd12a516cdff86ffe7c4574ec"
  },
  {
    "url": "notes/guide/guide-4.html",
    "revision": "404e85a2d4d9c93da7459f7f2a37768f"
  },
  {
    "url": "notes/html/html5yu-yi-yuan-su.html",
    "revision": "905079a46d1c943e49dff2b06bf14741"
  },
  {
    "url": "notes/html/htmlji-chu.html",
    "revision": "dbc70d478fb99a5e15b38874c10a7899"
  },
  {
    "url": "notes/index.html",
    "revision": "ea03677d38f6d47e8feecf09746775eb"
  },
  {
    "url": "notes/typescript/typescript-webpackda-bao.html",
    "revision": "d7296e11807bdb1a45e1cabfb726d627"
  },
  {
    "url": "notes/typescript/typescriptbian-yi-xuan-xiang.html",
    "revision": "dfbcd02792f99e5f85213b0723b00ad2"
  },
  {
    "url": "notes/typescript/typescriptji-chu.html",
    "revision": "8dc3da5ed753bb451c216cc97ff2fd03"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "5955afcc65ec444e4157703daa0a4d97"
  },
  {
    "url": "tag/ci/cd/index.html",
    "revision": "388f271bb6eea2d8b01be8293160c2a3"
  },
  {
    "url": "tag/css/index.html",
    "revision": "d3339232d770745a4858ff4ac4795ccb"
  },
  {
    "url": "tag/docker-compose/index.html",
    "revision": "c24527de50e297be806b8c4689f58a4a"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "8003711ae4ff575fadcafc60059f3efd"
  },
  {
    "url": "tag/element/index.html",
    "revision": "efb1e0a27e7868cd72cee4d66b8c71dc"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "7857e196883d406f55b8b4b8be037e0c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "be32b24cc4c6688f5e994f5ee4648f38"
  },
  {
    "url": "tag/html/index.html",
    "revision": "8268d746d8b3f934d842db902a4ea973"
  },
  {
    "url": "tag/http/index.html",
    "revision": "0d53f06b67e9c4f31a3dbc9781b4ee35"
  },
  {
    "url": "tag/index.html",
    "revision": "a2f5b47665d1a4467852bf4fb2b04ee0"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "547e51af9904ab914b689a4024eb92e4"
  },
  {
    "url": "tag/node/index.html",
    "revision": "f8b0db65d5e86054e4694e34274fe489"
  },
  {
    "url": "tag/other/index.html",
    "revision": "f3073531d30dbe6db77129e11231c7cb"
  },
  {
    "url": "tag/python/index.html",
    "revision": "db2eb4142ad2c2532d40f4fdb9d37b5c"
  },
  {
    "url": "tag/serverless/index.html",
    "revision": "4cb33a02f5d2524d5f144e9c48e5ea2e"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "67e177322ea5dae36aa43696756ef9be"
  },
  {
    "url": "tag/tailwind/index.html",
    "revision": "b09e90d12d4f27d4f9b52a12aca61fa0"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "f8f589f4516bd1fd8ae908ac5b5af7f7"
  },
  {
    "url": "tag/ui/index.html",
    "revision": "0b82ea77a840ad1e8a8f0d403bbe17fa"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "cca8e16180e70318ab3affb037ebceb1"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2e515c0ed0b33119e37b89b7688224e5"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "676191057b73cebe7e9d1d9714d5cb80"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "090b6d7f3ff667b65d0aee7e28d0bf73"
  },
  {
    "url": "tag/yuque/index.html",
    "revision": "b36e60d2b7f616bf8d1458b339c8e6e1"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "4aaa7030890a0165f44624593009cfc2"
  },
  {
    "url": "timeline/index.html",
    "revision": "58ab05dfc85c4357e0576256218f8e4e"
  },
  {
    "url": "views/yuque/cloudbase-frameworkchu-ci-shi-yong.html",
    "revision": "ec555f8555387a37276bdd1aee99af4f"
  },
  {
    "url": "views/yuque/commonjs-module-syntax.html",
    "revision": "502907d3978535b8144704ed55c7bb13"
  },
  {
    "url": "views/yuque/cypressjian-dan-shang-shou.html",
    "revision": "7fff9af5e1646cd013083a23e9df2193"
  },
  {
    "url": "views/yuque/dao-chu-yu-que-wen-dang.html",
    "revision": "303a22e5b4c1ba5eac8a56cd82e4d6ec"
  },
  {
    "url": "views/yuque/el-treexiu-gai-zi-jie-dian-wei-dan-xuan.html",
    "revision": "779fdd0a111da7427b3c075be88c0f75"
  },
  {
    "url": "views/yuque/el-uploadshang-chuan-can-shu-ji-jie-xi.html",
    "revision": "e397a272b039a55f9771c6f549853e4a"
  },
  {
    "url": "views/yuque/fcc-xiang-ying-shi-webshe-ji.html",
    "revision": "b475d2f3eb34b0912360a0a0f0ec4801"
  },
  {
    "url": "views/yuque/graphqlxue-xi.html",
    "revision": "eeb5df97f0dabf8ad043a7af89adc460"
  },
  {
    "url": "views/yuque/javascriptshi-jian-xun-huan.html",
    "revision": "18ece72905a317fbd6c390afcc77a054"
  },
  {
    "url": "views/yuque/jian-dan-jing-tai-wen-jian-server.html",
    "revision": "6f086c14e1888105186ec852eab06fe1"
  },
  {
    "url": "views/yuque/jian-pan-shi-jian-xiang-jie.html",
    "revision": "82bb0ae4c2f5808e2d1438ccefef042d"
  },
  {
    "url": "views/yuque/jupyter-notebook.html",
    "revision": "ed9c9194e4019dece6f88e40e9330377"
  },
  {
    "url": "views/yuque/maridban-zhuang-ji-yuan-cheng-lian-jie.html",
    "revision": "098e3780a7626c25ba8a759e935d15df"
  },
  {
    "url": "views/yuque/pandasdu-xie-csvji-zhui-jia.html",
    "revision": "8d4560bc236eee526e9fd1b52fd550f5"
  },
  {
    "url": "views/yuque/picgo-githubtu-chuang.html",
    "revision": "75abdf5a5d83d8f4d23bb2aceef3dc04"
  },
  {
    "url": "views/yuque/promiseji-lu.html",
    "revision": "9a1a9fe6b01ca26df9a7eb2c40cbc0b1"
  },
  {
    "url": "views/yuque/python-bao-zhi-zuo-liu-cheng.html",
    "revision": "f028d6f94737de1b433619a33ac58927"
  },
  {
    "url": "views/yuque/pythonjiang-wu-xian-fen-lei-jie-gou-shu-ju-zhuan-wei-json.html",
    "revision": "9fc80edeb8b91b729d23ebff298ae22d"
  },
  {
    "url": "views/yuque/ru-he-chu-li-jsonwen-jian-jie-wei-de-dou-hao.html",
    "revision": "775c856b1df9fc091069e6d0b6251815"
  },
  {
    "url": "views/yuque/ru-he-pi-liang-dao-ru-a-li-icon.html",
    "revision": "46827a82901d4bfed58800a08e0a663f"
  },
  {
    "url": "views/yuque/shi-yong-aria2pi-liang-xia-zai-shi-pin.html",
    "revision": "286da0f8d2e0c855b8a7a8b7dfe7b30d"
  },
  {
    "url": "views/yuque/shi-yong-marpzhi-zuo-ppt.html",
    "revision": "df6ab36209fbbe9da9ba0d57791b6657"
  },
  {
    "url": "views/yuque/slidev-shi-yong-ji-lu.html",
    "revision": "d0029c0963907d30295eadcf6f410e24"
  },
  {
    "url": "views/yuque/ti-sheng-githubdai-ma-la-qu-su-du.html",
    "revision": "548ff5a10332a80d3c8c9a6a214f5b23"
  },
  {
    "url": "views/yuque/vscode-cha-jian.html",
    "revision": "de56e479cdd5acffb8714b730e9d6dda"
  },
  {
    "url": "views/yuque/vscodekuai-jie-jian.html",
    "revision": "508e8384bea2cba07c2f74f94870da31"
  },
  {
    "url": "views/yuque/vue2-pei-zhi-tailwind-css.html",
    "revision": "e189ad35e1398db9d752364d68468db1"
  },
  {
    "url": "views/yuque/vuepressbo-ke-da-jian.html",
    "revision": "602ecbed590ab6fbdf438fe18f010f9e"
  },
  {
    "url": "views/yuque/vuepressyu-que-yun-duan-xie-zuo-github-actionschi-xu-ji-cheng.html",
    "revision": "a8d86c6553ac2161ce88f4b3b355e805"
  },
  {
    "url": "views/yuque/vuezi-dong-jian-ce-shua-xin-index.html.html",
    "revision": "00181b932a3669a83de4387aac621e89"
  },
  {
    "url": "views/yuque/wang-luo-apishou-cang.html",
    "revision": "f1118a9779fdc7297987d28fe7201941"
  },
  {
    "url": "views/yuque/win10chang-yong-ruan-jian-an-zhuang.html",
    "revision": "19a470fb9f6bf3cfd46aba40eb709cc3"
  },
  {
    "url": "views/yuque/yamlwen-jian-ge-shi-ji-pythonjie-xi.html",
    "revision": "fb637e7f6b6041e167de31c95ac0a442"
  },
  {
    "url": "views/yuque/yapian-zhuang-ji-lu.html",
    "revision": "41331b5b0a106dfab26ffc0b193859fc"
  },
  {
    "url": "views/yuque/yu-que-tu-chuang-fang-dao-lian-lin-shi-jie-jue-ban-fa.html",
    "revision": "5093e65de3e9cebbc242cdbcd3e008ec"
  },
  {
    "url": "views/yuque/yun-fu-wu-qi-sambashe-zhi.html",
    "revision": "ff7c161aeacba631275aa59f1330bd48"
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
