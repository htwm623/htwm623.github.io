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
    "revision": "cd8540f82a01dfa9084097ccdf9391d7"
  },
  {
    "url": "about/index.html",
    "revision": "bc4cd58e30287b33bb2d5e1142b1744e"
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
    "url": "assets/js/26.2c6a074a.js",
    "revision": "28a1c148cc906e0e1f3dbd4c23a7aac5"
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
    "url": "assets/js/31.eb46bf5b.js",
    "revision": "a3beb3dd90f56b33d169ff6071c17ed4"
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
    "url": "assets/js/app.e1a2c9c6.js",
    "revision": "f17c165c7cdc3c75fa4e2d4ab32d14b5"
  },
  {
    "url": "categories/index.html",
    "revision": "0f5152d18402349595a33bbafeaa8790"
  },
  {
    "url": "categories/代码片段/index.html",
    "revision": "12862ca0e92beb45d9fd9744b1e3d99f"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "bee2f9a0e4cddec80facbadd418305ed"
  },
  {
    "url": "categories/技术笔记/page/2/index.html",
    "revision": "d1b2a3aa2d3762546fd8bc30a7db5d4d"
  },
  {
    "url": "categories/技术笔记/page/3/index.html",
    "revision": "fb627d3ee7b9d5c65a55d953d448f32a"
  },
  {
    "url": "categories/技术笔记/page/4/index.html",
    "revision": "b05f2966c60b51dc0d835b97386ee491"
  },
  {
    "url": "categories/技术笔记/page/5/index.html",
    "revision": "0c8ee1bb3d604e55c04bf4f25d01e092"
  },
  {
    "url": "code-snippets/code-2021/difference-between-js-for-loop.html",
    "revision": "0bbdd5b3e368d63f5d334b6ea655469c"
  },
  {
    "url": "code-snippets/code-2021/flaskkua-yu-shi-li.html",
    "revision": "96baed86ff2e3a1ebd1ca8f988242ab2"
  },
  {
    "url": "code-snippets/code-2021/for-loops-array-reduce-and-method-chaining.html",
    "revision": "4c6cf6b234a858d2a4445192b5b31d18"
  },
  {
    "url": "code-snippets/code-2021/nodejsnei-zhi-http-server.html",
    "revision": "a9793743f1548bc1283e3e3f44f72e73"
  },
  {
    "url": "code-snippets/code-2021/server-sent-eventsshi-li-dai-ma.html",
    "revision": "19ff4fbb8229a6485087245490a6d4cc"
  },
  {
    "url": "code-snippets/code-2021/vue3shi-yong-cdnfang-shi-yin-ru-shi-li.html",
    "revision": "2fd423b580504d852e672b2fa529b152"
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
    "revision": "0570ddfdc941debb8cf8bf7c7297191d"
  },
  {
    "url": "logo.png",
    "revision": "dfb9cc785f85c37c4aca9566f6cda8c6"
  },
  {
    "url": "notes/css.html",
    "revision": "9a014bb6abc2733b00e32fc8ba64a133"
  },
  {
    "url": "notes/css/cssji-chu.html",
    "revision": "c06f2e4ab13954f47932e6be0222b99a"
  },
  {
    "url": "notes/css/cssxuan-ze-qi.html",
    "revision": "fa582d15a6d4f4e2a3f2493864e94d86"
  },
  {
    "url": "notes/css/flexbu-ju.html",
    "revision": "800f078ebf12ece3888eac2800a46138"
  },
  {
    "url": "notes/docker/docer-composeduo-rong-qi-xiang-mu.html",
    "revision": "3c5ada5fd01c8f18cc9726455ae4d2d5"
  },
  {
    "url": "notes/docker/dockerbian-xie-jing-xiang-bing-shang-chuan.html",
    "revision": "1cabfeb616717dd8f5af0bef0edc8bd4"
  },
  {
    "url": "notes/docker/dockerjian-dan-shi-yong.html",
    "revision": "d30388ab67913ff2c341b72288202348"
  },
  {
    "url": "notes/gitde-jian-dan-shi-yong.html",
    "revision": "ec338b41989b4f6016bbd244b900a491"
  },
  {
    "url": "notes/guide/guide-1.html",
    "revision": "6b4a12705ef773a0e44c339e509455b1"
  },
  {
    "url": "notes/guide/guide-2.html",
    "revision": "51593e3b0d29f41edd863955053d999b"
  },
  {
    "url": "notes/guide/guide-3.html",
    "revision": "c2b7004f6b2bd1be45f96aabb50a149d"
  },
  {
    "url": "notes/guide/guide-4.html",
    "revision": "bef60e9f9f1638058e30e60a6be999c7"
  },
  {
    "url": "notes/html/html5yu-yi-yuan-su.html",
    "revision": "b27601ab5aa375f6f7b940782ab57b5e"
  },
  {
    "url": "notes/html/htmlji-chu.html",
    "revision": "cc0d7fc8f2d7b2a846479ee1e45cdab2"
  },
  {
    "url": "notes/index.html",
    "revision": "6d32d1da8be1b35d5b249691d9567074"
  },
  {
    "url": "notes/typescript/typescript-webpackda-bao.html",
    "revision": "a756f89c960bf5afc6d63dcb966d537e"
  },
  {
    "url": "notes/typescript/typescriptbian-yi-xuan-xiang.html",
    "revision": "ad457c9042009a063249e0e207e19d9d"
  },
  {
    "url": "notes/typescript/typescriptji-chu.html",
    "revision": "0441bac75cdc2e5d16f518ab00eda842"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "3dbee7cc2135aa0bcb01d9be2260067b"
  },
  {
    "url": "tag/ci/cd/index.html",
    "revision": "b22bb188a37dd0d2ec040671aa2f4c42"
  },
  {
    "url": "tag/css/index.html",
    "revision": "c0c4e70caa810dab0960d55d95525dd8"
  },
  {
    "url": "tag/docker-compose/index.html",
    "revision": "2e73fbfc71157b2ade4b162275653f50"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "13218d897f8638aca80d39231e9500ae"
  },
  {
    "url": "tag/element/index.html",
    "revision": "d8558bd4ed3238f299cd09b8c6df1046"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "96642f0f5a55b3567e17fcca7f85b338"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c0d7c4903f536f43ac1e139919e12c90"
  },
  {
    "url": "tag/html/index.html",
    "revision": "9469758cd6e89f4fff16cf51a31e5016"
  },
  {
    "url": "tag/http/index.html",
    "revision": "fcb52610d9aa8fb891b18c2dea42d75f"
  },
  {
    "url": "tag/index.html",
    "revision": "602e4f50123e1d2729c549bf8fd7e70c"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "da10f6f9e4c40ff727c81e4677057281"
  },
  {
    "url": "tag/node/index.html",
    "revision": "3a85de1df853f429c5857ca5d0159510"
  },
  {
    "url": "tag/other/index.html",
    "revision": "bf2114eb10591b19ef877e0af5efd1e0"
  },
  {
    "url": "tag/python/index.html",
    "revision": "0665e8e95dbd483710a577a94714407a"
  },
  {
    "url": "tag/react/index.html",
    "revision": "a74e23d888a694a949883b25c7c2e7ca"
  },
  {
    "url": "tag/redux/index.html",
    "revision": "e87d54adb0066902012f2f6d70101029"
  },
  {
    "url": "tag/serverless/index.html",
    "revision": "1baeefe360b56133d7929e7dadb8667f"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "54f71fd94eed5a62fd1d2caa59232d67"
  },
  {
    "url": "tag/tailwind/index.html",
    "revision": "7a2d3aef7c685ed5d7631fbfe0ebc85e"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "306044d2d97cb385ac8ae6a69f4f20fd"
  },
  {
    "url": "tag/ui/index.html",
    "revision": "4790a85ae99a2a1f6d1384e319c32101"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "bc027008173ccebc36ed4f41fe767f5b"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "041adce9c5610f9890376e57d5429595"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "73af01c62675b1dfb03f7b56b6f726d0"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "77e5a1038f1c8b9ed0583bca19e9fc2c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "348690838a850f563cbf157a09849a98"
  },
  {
    "url": "tag/yuque/index.html",
    "revision": "3d535e3d96f8f69b14cd70ba00156c94"
  },
  {
    "url": "timeline/index.html",
    "revision": "9bae8a49821294763829f8e3912e1e8c"
  },
  {
    "url": "views/yuque/cloudbase-frameworkchu-ci-shi-yong.html",
    "revision": "a0ae1b21c2fff4ce6c028d2f08a5cb83"
  },
  {
    "url": "views/yuque/commonjs-module-syntax.html",
    "revision": "d24e8372de1aa779f79485193ffa6670"
  },
  {
    "url": "views/yuque/cypressjian-dan-shang-shou.html",
    "revision": "576ba63eea5d2abd2d5722a5f11e1f39"
  },
  {
    "url": "views/yuque/dao-chu-yu-que-wen-dang.html",
    "revision": "73faaf77f880329eeb502cbbd4d87c9e"
  },
  {
    "url": "views/yuque/el-treexiu-gai-zi-jie-dian-wei-dan-xuan.html",
    "revision": "96cf233f79cca34ac12976f493c55da3"
  },
  {
    "url": "views/yuque/el-uploadshang-chuan-can-shu-ji-jie-xi.html",
    "revision": "88101ba384d8e1eecc6b14d7925a9061"
  },
  {
    "url": "views/yuque/fcc-xiang-ying-shi-webshe-ji.html",
    "revision": "3951eede72de4412355e530f74c79c88"
  },
  {
    "url": "views/yuque/graphqlxue-xi.html",
    "revision": "b54026317ba4e490dcb248e6b4236cff"
  },
  {
    "url": "views/yuque/javascriptshi-jian-xun-huan.html",
    "revision": "2433b58b64793d64d73b693fe2e24543"
  },
  {
    "url": "views/yuque/jian-dan-jing-tai-wen-jian-server.html",
    "revision": "69a2bee3bbcd1b123daa2e99fa84387c"
  },
  {
    "url": "views/yuque/jian-pan-shi-jian-xiang-jie.html",
    "revision": "3dc90c64fc0c236b73f566359da8ad93"
  },
  {
    "url": "views/yuque/jupyter-notebook.html",
    "revision": "221068cb3a19820df3963e6d205c9a6f"
  },
  {
    "url": "views/yuque/maridban-zhuang-ji-yuan-cheng-lian-jie.html",
    "revision": "028fee816248a415fced4059f5835ed7"
  },
  {
    "url": "views/yuque/pandasdu-xie-csvji-zhui-jia.html",
    "revision": "585e70dc55f451ae861bd209911e660a"
  },
  {
    "url": "views/yuque/picgo-githubtu-chuang.html",
    "revision": "d8213ba18ff1123a2aa5100972894b88"
  },
  {
    "url": "views/yuque/promiseji-lu.html",
    "revision": "a0fcfc9e6b53943e44dc72c0ee9cbe86"
  },
  {
    "url": "views/yuque/python-bao-zhi-zuo-liu-cheng.html",
    "revision": "f476810e77523d3ea2dc58036257b6ed"
  },
  {
    "url": "views/yuque/pythonjiang-wu-xian-fen-lei-jie-gou-shu-ju-zhuan-wei-json.html",
    "revision": "4a78b9853bffccf68c84fbae8d5d063e"
  },
  {
    "url": "views/yuque/ru-he-chu-li-jsonwen-jian-jie-wei-de-dou-hao.html",
    "revision": "793bc17f97759ba3733a35d4b52637ab"
  },
  {
    "url": "views/yuque/ru-he-pi-liang-dao-ru-a-li-icon.html",
    "revision": "0454af601b25bbec791029c3ad7d10da"
  },
  {
    "url": "views/yuque/shi-yong-aria2pi-liang-xia-zai-shi-pin.html",
    "revision": "f32693412caa00de1192d2f41e4c0235"
  },
  {
    "url": "views/yuque/shi-yong-marpzhi-zuo-ppt.html",
    "revision": "57055c2e040eabcf8cc0cd864549e748"
  },
  {
    "url": "views/yuque/slidev-shi-yong-ji-lu.html",
    "revision": "aa98d9977aaa2dd9a065f870846ccbf2"
  },
  {
    "url": "views/yuque/ti-sheng-githubdai-ma-la-qu-su-du.html",
    "revision": "0720bb197313df62d5eefb29a17757be"
  },
  {
    "url": "views/yuque/vite2.1-react17-redux.html",
    "revision": "445cec75871f2fd790642dd8b2cb3a9b"
  },
  {
    "url": "views/yuque/vscode-cha-jian.html",
    "revision": "d7d5446db6c42c30773f3b75275332e0"
  },
  {
    "url": "views/yuque/vscodekuai-jie-jian.html",
    "revision": "ea65322fcf0db28fa10cc17d14745dec"
  },
  {
    "url": "views/yuque/vue2-pei-zhi-tailwind-css.html",
    "revision": "9795529e0e632ad26852a17dd35985f5"
  },
  {
    "url": "views/yuque/vuepressbo-ke-da-jian.html",
    "revision": "8cd78ab8ce7973a388c65b00fc50da00"
  },
  {
    "url": "views/yuque/vuepressyu-que-yun-duan-xie-zuo-github-actionschi-xu-ji-cheng.html",
    "revision": "fafd763d3b9770dc2a64846384af2659"
  },
  {
    "url": "views/yuque/vuezi-dong-jian-ce-shua-xin-index.html.html",
    "revision": "b7383bd64ccdf813a712ca5fd4458af6"
  },
  {
    "url": "views/yuque/wang-luo-apishou-cang.html",
    "revision": "4e8159fd470cd3ce7e0139da6a94f403"
  },
  {
    "url": "views/yuque/win10chang-yong-ruan-jian-an-zhuang.html",
    "revision": "61be49be90336881a25b469228358899"
  },
  {
    "url": "views/yuque/yamlwen-jian-ge-shi-ji-pythonjie-xi.html",
    "revision": "a6d85f2abcd1a601194c555d7009f0ed"
  },
  {
    "url": "views/yuque/yapian-zhuang-ji-lu.html",
    "revision": "2081bce8a009883637e56fbe5aee45bf"
  },
  {
    "url": "views/yuque/yu-que-tu-chuang-fang-dao-lian-lin-shi-jie-jue-ban-fa.html",
    "revision": "ae62478acaaab026dc07ec6b42392b6a"
  },
  {
    "url": "views/yuque/yun-fu-wu-qi-sambashe-zhi.html",
    "revision": "e1b685c96ae9c3b8d382cd403b52bc2d"
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
