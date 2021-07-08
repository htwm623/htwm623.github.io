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
    "revision": "8d1733d3632c28bc0d5a0ff3a8101505"
  },
  {
    "url": "about/index.html",
    "revision": "43c59a1a7fb0c004248ea9934dfedab6"
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
    "url": "assets/js/12.0dcc2096.js",
    "revision": "7cace24d54a36f56a4e0e43b0f4882ea"
  },
  {
    "url": "assets/js/13.cb4b6cd9.js",
    "revision": "8621b827dc8fd0e621f99c1daa51ffb5"
  },
  {
    "url": "assets/js/14.5f0217ab.js",
    "revision": "696bb7940721a7619ed56d23483c7f3d"
  },
  {
    "url": "assets/js/15.95a8b41e.js",
    "revision": "c21d64c0e79bfa1853328afac0b87bc9"
  },
  {
    "url": "assets/js/16.3b2330a1.js",
    "revision": "6baead70d731f8e206a8583dcec74c80"
  },
  {
    "url": "assets/js/17.65672ed3.js",
    "revision": "5a20991122caf87c77c28c2058d3c17f"
  },
  {
    "url": "assets/js/18.ae43dae7.js",
    "revision": "2f990d1f78aa8ab9662e2176697429e9"
  },
  {
    "url": "assets/js/19.0d531e7f.js",
    "revision": "470595e20d924b15d44b0ba6575f54d5"
  },
  {
    "url": "assets/js/20.8dd6df44.js",
    "revision": "b4b8fa0179c5c9dc544f88611c7a516c"
  },
  {
    "url": "assets/js/21.70ef7fc8.js",
    "revision": "16d02f2eb8697837693ad3d2d1a23e16"
  },
  {
    "url": "assets/js/22.ef0a5fea.js",
    "revision": "7052758df19e042e238dc2e41a7eb387"
  },
  {
    "url": "assets/js/23.9cf1b246.js",
    "revision": "c600794866e3f25d60310359ea1d4f1d"
  },
  {
    "url": "assets/js/24.b4175f6c.js",
    "revision": "6b8c3ec059bbdbc917b3434e76c8e055"
  },
  {
    "url": "assets/js/25.43911144.js",
    "revision": "5d4b2b123662af730dcb75e67242e32f"
  },
  {
    "url": "assets/js/26.5c171cbe.js",
    "revision": "6ae120c4843f413109c36a70318d3d94"
  },
  {
    "url": "assets/js/27.d7e2d65f.js",
    "revision": "3d89098d7838ff6b8ae4747bca689479"
  },
  {
    "url": "assets/js/28.34f574bf.js",
    "revision": "6abf9885cbb4291ce6c18045095cb706"
  },
  {
    "url": "assets/js/29.9cee70e5.js",
    "revision": "30a4019a1d4574ba935d7e95e54cfc9f"
  },
  {
    "url": "assets/js/3.04d40daa.js",
    "revision": "cc24b176e5d3334e0586416f2e958ddb"
  },
  {
    "url": "assets/js/30.f9ea522d.js",
    "revision": "3d3aea25bd87eabf11d8a2b7b9cc8a06"
  },
  {
    "url": "assets/js/31.54301f34.js",
    "revision": "a38600955b92ebfc7bc1874b468c7f29"
  },
  {
    "url": "assets/js/32.a1f12df5.js",
    "revision": "76be9e3254848c3530d1e8b3cd1d413b"
  },
  {
    "url": "assets/js/33.474334c0.js",
    "revision": "ad22da1f540f0c0b8fc9064340dc5e2e"
  },
  {
    "url": "assets/js/34.9dd70c66.js",
    "revision": "5e747497dc73ad37f4448e813a2e5c1c"
  },
  {
    "url": "assets/js/35.be9e92a2.js",
    "revision": "eeb41965d3ef013187c156a92e22ed84"
  },
  {
    "url": "assets/js/36.0a4433b3.js",
    "revision": "a98e7fdcfb32c303e45164056d274b53"
  },
  {
    "url": "assets/js/37.7b001308.js",
    "revision": "3a6cbbff229086eab32dbbec19589fc2"
  },
  {
    "url": "assets/js/38.f8a5d356.js",
    "revision": "d57c2b793e1cc12c41e0641278b70ed1"
  },
  {
    "url": "assets/js/39.25ac5f77.js",
    "revision": "7bfec6f36762c25f84f18dfbda573215"
  },
  {
    "url": "assets/js/4.a0785061.js",
    "revision": "0eab73483e39b44a922d17b01f4ad9f9"
  },
  {
    "url": "assets/js/40.942217a0.js",
    "revision": "fef15404326c3036577ae5bca9bee32b"
  },
  {
    "url": "assets/js/41.3f753b89.js",
    "revision": "4f438a15287112bf0a5344d89cb21a43"
  },
  {
    "url": "assets/js/42.a96d9235.js",
    "revision": "9781474dc1818755dc38ed460c0a0ba0"
  },
  {
    "url": "assets/js/43.637dd0c2.js",
    "revision": "c7cada5d3dcc45c4c45e85d254503183"
  },
  {
    "url": "assets/js/44.ccc0a665.js",
    "revision": "363f96be8753417ba816cbd33ab7757d"
  },
  {
    "url": "assets/js/45.27be4d09.js",
    "revision": "34828ec83391c5f29648c45ad2f46095"
  },
  {
    "url": "assets/js/46.45bf178b.js",
    "revision": "269b5cbcfe1a5b1c07fd7138702e46cf"
  },
  {
    "url": "assets/js/47.16087439.js",
    "revision": "5341ca3d4ce55b5fcc628e366dc2353d"
  },
  {
    "url": "assets/js/48.f097850d.js",
    "revision": "9fc66c4ce68fd3ea93928fe5942bb76e"
  },
  {
    "url": "assets/js/49.d8287b48.js",
    "revision": "8e74711fbd7d17738da099739754e823"
  },
  {
    "url": "assets/js/5.0e1d9fee.js",
    "revision": "4169ab1ed1e59690e657a9d0fa86e633"
  },
  {
    "url": "assets/js/50.883402f4.js",
    "revision": "1c6c0f821dd6f5828b6d8d9fd48dc07e"
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
    "url": "assets/js/53.4be22dcf.js",
    "revision": "c9496a80125529f1d957e399faf64871"
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
    "url": "assets/js/app.056dae28.js",
    "revision": "733878febae6c5c913cddebea9fe2646"
  },
  {
    "url": "categories/index.html",
    "revision": "1ee31551bb479cfb3b684811e2fc5ccd"
  },
  {
    "url": "categories/代码片段/index.html",
    "revision": "74cb0e62e374712496695da08dbdf234"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "0eddbe628842d7e5adee7997028b45c1"
  },
  {
    "url": "categories/技术笔记/page/2/index.html",
    "revision": "11fa2e0b571d889657b242a5344b6fde"
  },
  {
    "url": "categories/技术笔记/page/3/index.html",
    "revision": "c30d4db07a05149c8a1e2c59043ad648"
  },
  {
    "url": "categories/技术笔记/page/4/index.html",
    "revision": "aef5f371ff32addd21fd9b378354cb34"
  },
  {
    "url": "categories/技术笔记/page/5/index.html",
    "revision": "71167beb3b58423fc5c90e3c6dfe12f3"
  },
  {
    "url": "code-snippets/code-2021/difference-between-js-for-loop.html",
    "revision": "8306e3576564289259ac4402ab2bb19a"
  },
  {
    "url": "code-snippets/code-2021/flaskkua-yu-shi-li.html",
    "revision": "1403f1ede95ec4d1326627d8644b121f"
  },
  {
    "url": "code-snippets/code-2021/for-loops-array-reduce-and-method-chaining.html",
    "revision": "3e6f752fca63cf5eaf35c5c76cf528b0"
  },
  {
    "url": "code-snippets/code-2021/nodejsnei-zhi-http-server.html",
    "revision": "15fd4f70cb90fb5c8e4cd89688d7e533"
  },
  {
    "url": "code-snippets/code-2021/server-sent-eventsshi-li-dai-ma.html",
    "revision": "0703880fb50e1ec1030c402eab686385"
  },
  {
    "url": "code-snippets/code-2021/vue3shi-yong-cdnfang-shi-yin-ru-shi-li.html",
    "revision": "013489ce17d2a58f4ba3b4c61b5c5cac"
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
    "revision": "1a86a574fca26ded863d3f24a2395248"
  },
  {
    "url": "logo.png",
    "revision": "dfb9cc785f85c37c4aca9566f6cda8c6"
  },
  {
    "url": "notes/css.html",
    "revision": "16f30a43ff26e271512db43f4f628325"
  },
  {
    "url": "notes/css/cssji-chu.html",
    "revision": "e5f627c136ccb9d6b1e4adc95eea4d4a"
  },
  {
    "url": "notes/css/cssxuan-ze-qi.html",
    "revision": "599da31c5caa6cf7435222317a432f11"
  },
  {
    "url": "notes/css/flexbu-ju.html",
    "revision": "92f1f71b2055767ba299497cefb1b58b"
  },
  {
    "url": "notes/docker/docer-composeduo-rong-qi-xiang-mu.html",
    "revision": "db0eda66f82e14424e1f58e01913cfc6"
  },
  {
    "url": "notes/docker/dockerbian-xie-jing-xiang-bing-shang-chuan.html",
    "revision": "b21b24a95e96a093885b5e421f6d408d"
  },
  {
    "url": "notes/docker/dockerjian-dan-shi-yong.html",
    "revision": "bdfab996d0fde2925f336897de136b86"
  },
  {
    "url": "notes/gitde-jian-dan-shi-yong.html",
    "revision": "8c14ab69fa1c849fc53210889a742c9c"
  },
  {
    "url": "notes/guide/guide-1.html",
    "revision": "99204ded31aa8f5beba83a7631ce964e"
  },
  {
    "url": "notes/guide/guide-2.html",
    "revision": "0c0acf66e4076d06ecbcf9560f7a2173"
  },
  {
    "url": "notes/guide/guide-3.html",
    "revision": "6e5031049bf9704a9108726d324f3ce9"
  },
  {
    "url": "notes/guide/guide-4.html",
    "revision": "222d48f3e73bdec22f00bc5784ff4bd9"
  },
  {
    "url": "notes/html/html5yu-yi-yuan-su.html",
    "revision": "b1c64ee48d34a93ea360c885b7da1248"
  },
  {
    "url": "notes/html/htmlji-chu.html",
    "revision": "733addfb4ce792ff99328b6617a3e669"
  },
  {
    "url": "notes/index.html",
    "revision": "faa175d7fb08d2d26bf2bb6469e03152"
  },
  {
    "url": "notes/typescript/typescript-webpackda-bao.html",
    "revision": "b71de79c33d8d95f9147746d692120cd"
  },
  {
    "url": "notes/typescript/typescriptbian-yi-xuan-xiang.html",
    "revision": "7f25102eed7337af2b241157a19f97dc"
  },
  {
    "url": "notes/typescript/typescriptji-chu.html",
    "revision": "799d1c2d4a859698cad5195a16b6806b"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "74518e86ff4b9debcac619f8a5c8d2f1"
  },
  {
    "url": "tag/ci/cd/index.html",
    "revision": "cb220a48c1295c55686ae601fb32e9aa"
  },
  {
    "url": "tag/css/index.html",
    "revision": "92d8937e474dfcc95359e98e63535823"
  },
  {
    "url": "tag/docker-compose/index.html",
    "revision": "538eac3011d3661ce43e1ce6073cc00e"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "5fe59dc8baac856c6d7f516984c00ec4"
  },
  {
    "url": "tag/element/index.html",
    "revision": "71d168310e77ee5ddacc28accad4975b"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "bcdfedb62b9768a77556fedeb5cc54f3"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2bf78f26bb2f61c0dcf247ff15a8b816"
  },
  {
    "url": "tag/html/index.html",
    "revision": "1bfd4d15bdc7177f45313e39836fd812"
  },
  {
    "url": "tag/http/index.html",
    "revision": "8a347174c1e444f4ea286213590b7886"
  },
  {
    "url": "tag/index.html",
    "revision": "5471fdcde21db8c58b540d117f528bfb"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "fc7fa9cb2993145a1ef704f7d12fdcdb"
  },
  {
    "url": "tag/node/index.html",
    "revision": "eb0681b38ad64c4755368e1b5eee6825"
  },
  {
    "url": "tag/other/index.html",
    "revision": "90f9afeb15be4fde360a35c7eb51e0df"
  },
  {
    "url": "tag/python/index.html",
    "revision": "14e62ff2ab49083a11230d4e56c0504d"
  },
  {
    "url": "tag/react/index.html",
    "revision": "6c323bafc50308c939b6ebe6222c0a60"
  },
  {
    "url": "tag/redux/index.html",
    "revision": "523ecd2c166cb24d977b92c8df934a84"
  },
  {
    "url": "tag/serverless/index.html",
    "revision": "57d4428c21de57ac4d276d498369391f"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "f00012ffefd0402915dc0265b841129e"
  },
  {
    "url": "tag/tailwind/index.html",
    "revision": "98a22f2f057bff7e7ac5f244d5f139f2"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "91e3dda1dab610fc0fd3ba43461f4d77"
  },
  {
    "url": "tag/ui/index.html",
    "revision": "e9ae0e0e25187ee796b47808b1d34d0e"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "bc3261711e8b5e4547fd97ba258e62a9"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "d752a283d4c8109e9dbe1a9a240d1f12"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "8249a386faf8dca8437302d75d35a43f"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "477c6c19bbc6b2b27578ccf1ef701188"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fe8929477184a87c37b5f6e16e0fef62"
  },
  {
    "url": "tag/yuque/index.html",
    "revision": "0256f5022e9e628b08c57c8e789201a4"
  },
  {
    "url": "timeline/index.html",
    "revision": "9ed1b9fbbdb6047a33cd7a907a6b6453"
  },
  {
    "url": "views/yuque/cloudbase-frameworkchu-ci-shi-yong.html",
    "revision": "03ddd8a99ff97b104454d54860d3a3d5"
  },
  {
    "url": "views/yuque/commonjs-module-syntax.html",
    "revision": "0ecb1162ff10fb4eda202c4b778dca27"
  },
  {
    "url": "views/yuque/cypressjian-dan-shang-shou.html",
    "revision": "79a52d458cf885571a74fd83df1d71b0"
  },
  {
    "url": "views/yuque/dao-chu-yu-que-wen-dang.html",
    "revision": "476193175f82a24cd123cce41993a009"
  },
  {
    "url": "views/yuque/el-treexiu-gai-zi-jie-dian-wei-dan-xuan.html",
    "revision": "d85be7c85dfac15b317ce2ca3b37208a"
  },
  {
    "url": "views/yuque/el-uploadshang-chuan-can-shu-ji-jie-xi.html",
    "revision": "c2e9c66291a6a062ea5c5d2d99c3966e"
  },
  {
    "url": "views/yuque/fcc-xiang-ying-shi-webshe-ji.html",
    "revision": "99aa41141c00c2961682e821dc352d49"
  },
  {
    "url": "views/yuque/graphqlxue-xi.html",
    "revision": "3d3036525374a796e52b65150d5dc049"
  },
  {
    "url": "views/yuque/javascriptshi-jian-xun-huan.html",
    "revision": "ee2739f6e247b85e192f9b747caa4a6b"
  },
  {
    "url": "views/yuque/jian-dan-jing-tai-wen-jian-server.html",
    "revision": "6807a1534c375074f91dc16a3a43b8d9"
  },
  {
    "url": "views/yuque/jian-pan-shi-jian-xiang-jie.html",
    "revision": "7f77ee9a22bd898a8f1b80de2b3b91fe"
  },
  {
    "url": "views/yuque/jupyter-notebook.html",
    "revision": "5b9245d499b9e0bb41d565f945d5c3a8"
  },
  {
    "url": "views/yuque/maridban-zhuang-ji-yuan-cheng-lian-jie.html",
    "revision": "97fd7fcd6e249aed0d2ec5776943e280"
  },
  {
    "url": "views/yuque/pandasdu-xie-csvji-zhui-jia.html",
    "revision": "5e6f6f2cf63164e1e23980f03f3d8ea2"
  },
  {
    "url": "views/yuque/picgo-githubtu-chuang.html",
    "revision": "ce2207736c3edc530cd3196f5e5d3714"
  },
  {
    "url": "views/yuque/promiseji-lu.html",
    "revision": "3063a0a7adc890c3d84ec11ad5eb1af2"
  },
  {
    "url": "views/yuque/python-bao-zhi-zuo-liu-cheng.html",
    "revision": "db207d6aaa64654403baf32f8327031d"
  },
  {
    "url": "views/yuque/pythonjiang-wu-xian-fen-lei-jie-gou-shu-ju-zhuan-wei-json.html",
    "revision": "881ce6de2d27fd5f822f0d8e092f7c65"
  },
  {
    "url": "views/yuque/ru-he-chu-li-jsonwen-jian-jie-wei-de-dou-hao.html",
    "revision": "0bcdb93218ba3d5860c691de199c2198"
  },
  {
    "url": "views/yuque/ru-he-pi-liang-dao-ru-a-li-icon.html",
    "revision": "8e851cb938e5c67c8933b711348fa821"
  },
  {
    "url": "views/yuque/shi-yong-aria2pi-liang-xia-zai-shi-pin.html",
    "revision": "6c2b41e1e3208e72523d09d49b27051d"
  },
  {
    "url": "views/yuque/shi-yong-marpzhi-zuo-ppt.html",
    "revision": "564e251ba193c12ff77941c874ce89e7"
  },
  {
    "url": "views/yuque/slidev-shi-yong-ji-lu.html",
    "revision": "5fa96966826fdccbcfc22d20601244e2"
  },
  {
    "url": "views/yuque/ti-sheng-githubdai-ma-la-qu-su-du.html",
    "revision": "412f88b02e8d3e38193ff14ac0f0c87a"
  },
  {
    "url": "views/yuque/vite2.1-react17-redux.html",
    "revision": "641c39885765a771f6107769be324250"
  },
  {
    "url": "views/yuque/vscode-cha-jian.html",
    "revision": "c087ecfed20cfe1cd5babf8996d8a90a"
  },
  {
    "url": "views/yuque/vscodekuai-jie-jian.html",
    "revision": "d0f7e5753d5a1012056f4c3c57015845"
  },
  {
    "url": "views/yuque/vue2-pei-zhi-tailwind-css.html",
    "revision": "86929ee628d6f36b5c6c33031f6afb5d"
  },
  {
    "url": "views/yuque/vuepressbo-ke-da-jian.html",
    "revision": "0aa77bd62562a8418cfb5e26f2312722"
  },
  {
    "url": "views/yuque/vuepressyu-que-yun-duan-xie-zuo-github-actionschi-xu-ji-cheng.html",
    "revision": "f1c1e9a985b84b7a5823ef7201bdc672"
  },
  {
    "url": "views/yuque/vuezi-dong-jian-ce-shua-xin-index.html.html",
    "revision": "0f65314d67f07929afce5f24a1c8ac86"
  },
  {
    "url": "views/yuque/wang-luo-apishou-cang.html",
    "revision": "88350258ab869c43fa4c7b28fdcbf749"
  },
  {
    "url": "views/yuque/win10chang-yong-ruan-jian-an-zhuang.html",
    "revision": "58adef026a36eff89bc1f106d864c600"
  },
  {
    "url": "views/yuque/yamlwen-jian-ge-shi-ji-pythonjie-xi.html",
    "revision": "6cdc203e2986f0dbe39b41b4d0699bc8"
  },
  {
    "url": "views/yuque/yapian-zhuang-ji-lu.html",
    "revision": "689681a98dce8e07ea9fdda14bbb9965"
  },
  {
    "url": "views/yuque/yu-que-tu-chuang-fang-dao-lian-lin-shi-jie-jue-ban-fa.html",
    "revision": "7c3455c7b9c41f8e83f699f39bbf0489"
  },
  {
    "url": "views/yuque/yun-fu-wu-qi-sambashe-zhi.html",
    "revision": "0cc5556f9ae2fde6f743eec488daad31"
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
