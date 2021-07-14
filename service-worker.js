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
    "revision": "3549d41a9b161512d553bbbd2b8ea751"
  },
  {
    "url": "about/index.html",
    "revision": "f68c0f666d249732d0b190a2851b8045"
  },
  {
    "url": "assets/css/0.styles.d002806c.css",
    "revision": "2d3fc2e2278ec4d08feb172778cdf7c6"
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
    "url": "assets/js/11.45ffa5c2.js",
    "revision": "a8c602c92e55459f068e8537e01b0627"
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
    "url": "assets/js/27.265f4ed3.js",
    "revision": "f4c20bd623653729fd7d8237ed380afa"
  },
  {
    "url": "assets/js/28.9e6f88d5.js",
    "revision": "5573bbc599bcedaf7beff7abdf2dfd46"
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
    "url": "assets/js/app.1b9b8e91.js",
    "revision": "a120133da9f087f6f4ef861daa4a9e32"
  },
  {
    "url": "categories/index.html",
    "revision": "7b3104d1de732f30fa820d8219a3a653"
  },
  {
    "url": "categories/代码片段/index.html",
    "revision": "beb458ec3502228b9927fff2e83d6774"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "2d21ab58aaa32d78687152528f4d0b4c"
  },
  {
    "url": "categories/技术笔记/page/2/index.html",
    "revision": "ca307ca49566f7b52008ce3ccf75cfca"
  },
  {
    "url": "categories/技术笔记/page/3/index.html",
    "revision": "9ed123e2d797d4ca2f4282074e2557eb"
  },
  {
    "url": "categories/技术笔记/page/4/index.html",
    "revision": "fa0a5d96f03ab2680911791e2a55d0ee"
  },
  {
    "url": "categories/技术笔记/page/5/index.html",
    "revision": "6a8acab8a49f0b175ef74d4576ebebb4"
  },
  {
    "url": "code-snippets/code-2021/difference-between-js-for-loop.html",
    "revision": "77491430dc390de5e28b8e13c0aa21de"
  },
  {
    "url": "code-snippets/code-2021/flaskkua-yu-shi-li.html",
    "revision": "ea1743ab3a8126717a3f2173db14dd78"
  },
  {
    "url": "code-snippets/code-2021/for-loops-array-reduce-and-method-chaining.html",
    "revision": "522a0e80bb3b195a6a14f0b20dbdc802"
  },
  {
    "url": "code-snippets/code-2021/nodejsnei-zhi-http-server.html",
    "revision": "cb0af60b383d33071bfc1a9aa31e754c"
  },
  {
    "url": "code-snippets/code-2021/server-sent-eventsshi-li-dai-ma.html",
    "revision": "1b3a901d627df2d66de76dc5157c1aae"
  },
  {
    "url": "code-snippets/code-2021/vue3shi-yong-cdnfang-shi-yin-ru-shi-li.html",
    "revision": "7d71db3733947581b2f80a6652f59618"
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
    "revision": "998db500874a41f8a2e88f7355e7a174"
  },
  {
    "url": "logo.png",
    "revision": "dfb9cc785f85c37c4aca9566f6cda8c6"
  },
  {
    "url": "notes/browser/hui-liu-he-chong-hui.html",
    "revision": "9ab38fd9a4a6294aa3acfade2647bfa9"
  },
  {
    "url": "notes/css.html",
    "revision": "a3a1e53bb05d22a6de46c80d4629307c"
  },
  {
    "url": "notes/css/cssji-chu.html",
    "revision": "375d7262f91649eade52c01b8d1aa377"
  },
  {
    "url": "notes/css/cssxuan-ze-qi.html",
    "revision": "d245e69aa5ffb5db75eb35b31285b4f3"
  },
  {
    "url": "notes/css/flexbu-ju.html",
    "revision": "4eb6a1287077decbeca390c5ddf75c7c"
  },
  {
    "url": "notes/docker/docer-composeduo-rong-qi-xiang-mu.html",
    "revision": "dc465819311031f490f9508b3645fac2"
  },
  {
    "url": "notes/docker/dockerbian-xie-jing-xiang-bing-shang-chuan.html",
    "revision": "e21cf353ec65932c6cf9f3f3b9d81ced"
  },
  {
    "url": "notes/docker/dockerjian-dan-shi-yong.html",
    "revision": "5d60e30bc8ce256939faafdfb2284c3a"
  },
  {
    "url": "notes/gitde-jian-dan-shi-yong.html",
    "revision": "20bdf8829369985b6a1efd9c9de547a2"
  },
  {
    "url": "notes/guide/guide-1.html",
    "revision": "28b5e4ef8f3a63251f2a84c6ff16517a"
  },
  {
    "url": "notes/guide/guide-2.html",
    "revision": "e6f62b60dbbd70cf198f7e247a71a3f6"
  },
  {
    "url": "notes/guide/guide-3.html",
    "revision": "ce3e2ecf8705425600116722a2f1d43b"
  },
  {
    "url": "notes/guide/guide-4.html",
    "revision": "2f9ae4ed4e6b30e798ced865cdc98756"
  },
  {
    "url": "notes/html/html5yu-yi-yuan-su.html",
    "revision": "1ca25e00de100ece895a9db2e1556ee6"
  },
  {
    "url": "notes/html/htmlji-chu.html",
    "revision": "ecf3064c1100cd243197fdab389d1461"
  },
  {
    "url": "notes/index.html",
    "revision": "bb9d9a9d2ce9a2b0b4fcfde7281bb6cd"
  },
  {
    "url": "notes/typescript/typescript-webpackda-bao.html",
    "revision": "b6d8067edd82a039f3ef2d9836d2263c"
  },
  {
    "url": "notes/typescript/typescriptbian-yi-xuan-xiang.html",
    "revision": "878ccf44abdd4f3248f697dcaa556e84"
  },
  {
    "url": "notes/typescript/typescriptji-chu.html",
    "revision": "72dfec3a116aef26be4d3f8831931d78"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "b91412a2dc4808c85b49951aad85e63f"
  },
  {
    "url": "tag/ci/cd/index.html",
    "revision": "6bfeaa9daaae765ed5581669ab87ff71"
  },
  {
    "url": "tag/css/index.html",
    "revision": "fd5a276b2dda219324dd699923e925f6"
  },
  {
    "url": "tag/docker-compose/index.html",
    "revision": "134fa8db4e11e11df8fefd3e4283fcfe"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "49397df166e126b7283c25c1cbe2f05e"
  },
  {
    "url": "tag/element/index.html",
    "revision": "923a29b8e60a571ded43f119a41e6bcf"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "b611517ab6c58bff9f964cd1137352b5"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d4909cb0d8e547bce063f93ad6dfeb8f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "380e28cb67f9a465089cb34112f404f5"
  },
  {
    "url": "tag/http/index.html",
    "revision": "295749a8ec257a6a03311b58facb63f9"
  },
  {
    "url": "tag/index.html",
    "revision": "66703fec263fb213b7bc9d10c3a72059"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "c4ec51028c617842a2c48036d664abf6"
  },
  {
    "url": "tag/node/index.html",
    "revision": "41d711c23dcaea1a4359245e2c6bcf0d"
  },
  {
    "url": "tag/other/index.html",
    "revision": "f75a0f5162ef3fdbaa1f5779eaf6abb0"
  },
  {
    "url": "tag/python/index.html",
    "revision": "d0ed53a89ec3819c2861e657bfffba62"
  },
  {
    "url": "tag/serverless/index.html",
    "revision": "6e3886279c9e96dd7c7ca869894077cf"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "29204f5a3c51e8d0a46a9971c5e66048"
  },
  {
    "url": "tag/tailwind/index.html",
    "revision": "e6e2fcb1a1452e81706c160fe0fb6758"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "01912734b984262982c2b2649a18e32a"
  },
  {
    "url": "tag/ui/index.html",
    "revision": "f0c0659dea4b3693fd2bf9524f85517c"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "e9dcbf4b13f5dca500c3e87b6b6bbc57"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1ffcbb51d3e8f8823a3625c28b6eaaa2"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "5787e631674b83c05f16f1e8df1704f0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e55ef5a6de50fcd7dc80494338836512"
  },
  {
    "url": "tag/yuque/index.html",
    "revision": "a894d6409b20ebfd679e06ecc50748e8"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "0e9f85f0f55f9e3e482bfad54f245c9a"
  },
  {
    "url": "timeline/index.html",
    "revision": "589e0e7fea74f5c485a3c9666dd52469"
  },
  {
    "url": "views/yuque/cloudbase-frameworkchu-ci-shi-yong.html",
    "revision": "3b33282d036a614b1b20b520d1b057c0"
  },
  {
    "url": "views/yuque/commonjs-module-syntax.html",
    "revision": "7c08b1b4d78e3c8242cc713e28fc79a0"
  },
  {
    "url": "views/yuque/cypressjian-dan-shang-shou.html",
    "revision": "9a2456b748d436817fe35c00cc351d02"
  },
  {
    "url": "views/yuque/dao-chu-yu-que-wen-dang.html",
    "revision": "c59f741e5c28f5fa207f68bbbc7ec58d"
  },
  {
    "url": "views/yuque/el-treexiu-gai-zi-jie-dian-wei-dan-xuan.html",
    "revision": "69e7ed5b27235fc0b09dee992201e6c2"
  },
  {
    "url": "views/yuque/el-uploadshang-chuan-can-shu-ji-jie-xi.html",
    "revision": "3af61b9e20d163c8e6b4e7ab083d8bec"
  },
  {
    "url": "views/yuque/fcc-xiang-ying-shi-webshe-ji.html",
    "revision": "47bb5a5f0e1cd6d6d39d9e0726e7e0c5"
  },
  {
    "url": "views/yuque/graphqlxue-xi.html",
    "revision": "1e96c558c5bcbbd741ed20320f2b2fda"
  },
  {
    "url": "views/yuque/javascriptshi-jian-xun-huan.html",
    "revision": "82991b402b731c34c89ffec5f8ecdce9"
  },
  {
    "url": "views/yuque/jian-dan-jing-tai-wen-jian-server.html",
    "revision": "28b45d7f458c5a6d9d31000309d8224f"
  },
  {
    "url": "views/yuque/jian-pan-shi-jian-xiang-jie.html",
    "revision": "7f27c88c52a39b403b0dfc7f05bf5e7e"
  },
  {
    "url": "views/yuque/jupyter-notebook.html",
    "revision": "ff1e5cb93ecabd2f7972d4f2ba0bfbe3"
  },
  {
    "url": "views/yuque/maridban-zhuang-ji-yuan-cheng-lian-jie.html",
    "revision": "dfc946e1e5ce8150887b65f4c8c4af0c"
  },
  {
    "url": "views/yuque/pandasdu-xie-csvji-zhui-jia.html",
    "revision": "406a397066a1a00a474078b26d227c42"
  },
  {
    "url": "views/yuque/picgo-githubtu-chuang.html",
    "revision": "edb582cb13f178e43b3334671633ab29"
  },
  {
    "url": "views/yuque/promiseji-lu.html",
    "revision": "f9e860fb44208d4406f2db1ebac1fc44"
  },
  {
    "url": "views/yuque/python-bao-zhi-zuo-liu-cheng.html",
    "revision": "3825297b180d050ae77807fcea9af61c"
  },
  {
    "url": "views/yuque/pythonjiang-wu-xian-fen-lei-jie-gou-shu-ju-zhuan-wei-json.html",
    "revision": "e0e26d26d59d629c49306c35670ef275"
  },
  {
    "url": "views/yuque/ru-he-chu-li-jsonwen-jian-jie-wei-de-dou-hao.html",
    "revision": "222a199ebf3e548432d08b5d6f37d9be"
  },
  {
    "url": "views/yuque/ru-he-pi-liang-dao-ru-a-li-icon.html",
    "revision": "7ff99fd41786a81415166a9db07b2d37"
  },
  {
    "url": "views/yuque/shi-yong-aria2pi-liang-xia-zai-shi-pin.html",
    "revision": "c51a184c384ab63c9d5ad17d83cd0d3c"
  },
  {
    "url": "views/yuque/shi-yong-marpzhi-zuo-ppt.html",
    "revision": "867073a60103e8f668605b5d45dc9ea0"
  },
  {
    "url": "views/yuque/slidev-shi-yong-ji-lu.html",
    "revision": "9d67264df6dba1bb7a47acbebc83a5b8"
  },
  {
    "url": "views/yuque/ti-sheng-githubdai-ma-la-qu-su-du.html",
    "revision": "376655624a28bd460088171e35f9d780"
  },
  {
    "url": "views/yuque/vscode-cha-jian.html",
    "revision": "b73e51e07e92395c6e364fe0f89b5975"
  },
  {
    "url": "views/yuque/vscodekuai-jie-jian.html",
    "revision": "b5ad4ba0bc2447ec45587df0646cb37a"
  },
  {
    "url": "views/yuque/vue2-pei-zhi-tailwind-css.html",
    "revision": "b5cfe8e8c7142bfd56524dfbe9cce492"
  },
  {
    "url": "views/yuque/vuepressbo-ke-da-jian.html",
    "revision": "4c8ba71bc3ee00b12d78d5513011ec60"
  },
  {
    "url": "views/yuque/vuepressyu-que-yun-duan-xie-zuo-github-actionschi-xu-ji-cheng.html",
    "revision": "20e4e4adfd7b3433a8f10b98873cb9a9"
  },
  {
    "url": "views/yuque/vuezi-dong-jian-ce-shua-xin-index.html.html",
    "revision": "137821a9f229294ebd140d1d79c7f174"
  },
  {
    "url": "views/yuque/wang-luo-apishou-cang.html",
    "revision": "1c6a1318155fc30818a655bc4923f924"
  },
  {
    "url": "views/yuque/win10chang-yong-ruan-jian-an-zhuang.html",
    "revision": "e7e42b62cd09ed63e5e25c0fee0728d8"
  },
  {
    "url": "views/yuque/yamlwen-jian-ge-shi-ji-pythonjie-xi.html",
    "revision": "e891e4944fd7f050f4f2ac146ea67d92"
  },
  {
    "url": "views/yuque/yapian-zhuang-ji-lu.html",
    "revision": "1a6c1cf2c254d3ad3820ced5c708a689"
  },
  {
    "url": "views/yuque/yu-que-tu-chuang-fang-dao-lian-lin-shi-jie-jue-ban-fa.html",
    "revision": "b33caae197711045622c833e2b389fc9"
  },
  {
    "url": "views/yuque/yun-fu-wu-qi-sambashe-zhi.html",
    "revision": "eefdb1f563c720cd7c9a21bb5be7bbc1"
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
