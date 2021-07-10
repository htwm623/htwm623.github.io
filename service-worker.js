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
    "revision": "dfb745f3ad88f6426ddcf0077352da2b"
  },
  {
    "url": "about/index.html",
    "revision": "8df62f1fb1d014a566f95ee41a0e2804"
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
    "url": "assets/js/app.8ee3a5ca.js",
    "revision": "665dbea5a8d15c219c9a21a5dfc06a20"
  },
  {
    "url": "categories/index.html",
    "revision": "82d4f48c5edca8e4b94ee4c0f558e65a"
  },
  {
    "url": "categories/代码片段/index.html",
    "revision": "7df7e92848f3f735bc10cfd615d4e0dc"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "2162e11153e95ade6b22d3b9a84d4839"
  },
  {
    "url": "categories/技术笔记/page/2/index.html",
    "revision": "e7b9c4feb62759fc30a33c765a7220a4"
  },
  {
    "url": "categories/技术笔记/page/3/index.html",
    "revision": "6d2d1f8c7b061ee747284724e01925ff"
  },
  {
    "url": "categories/技术笔记/page/4/index.html",
    "revision": "0aa982a716a65539ba67cfd70d17f484"
  },
  {
    "url": "categories/技术笔记/page/5/index.html",
    "revision": "cd8f34d8f452950d3ab4f34b524c1c00"
  },
  {
    "url": "code-snippets/code-2021/difference-between-js-for-loop.html",
    "revision": "f31ba3d2cf9fd7202394c61e0b6de4c0"
  },
  {
    "url": "code-snippets/code-2021/flaskkua-yu-shi-li.html",
    "revision": "46d6e2b4e7c90078e0113587e5358605"
  },
  {
    "url": "code-snippets/code-2021/for-loops-array-reduce-and-method-chaining.html",
    "revision": "e79f4b0b5fc407abc6e236b5ad3741a0"
  },
  {
    "url": "code-snippets/code-2021/nodejsnei-zhi-http-server.html",
    "revision": "24069c5a981e574159dc4058d2b73df1"
  },
  {
    "url": "code-snippets/code-2021/server-sent-eventsshi-li-dai-ma.html",
    "revision": "8ab355142be13126c050f3a08481fd54"
  },
  {
    "url": "code-snippets/code-2021/vue3shi-yong-cdnfang-shi-yin-ru-shi-li.html",
    "revision": "c87dd5cc1d8949659457aefc0cca6ff7"
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
    "revision": "6c2a53a507f7a218b7df3903cddbca37"
  },
  {
    "url": "logo.png",
    "revision": "dfb9cc785f85c37c4aca9566f6cda8c6"
  },
  {
    "url": "notes/css.html",
    "revision": "0ce1dc467e1782fd445cca8137d0194f"
  },
  {
    "url": "notes/css/cssji-chu.html",
    "revision": "3672d50904c27acc5c2c941fe8d14e4b"
  },
  {
    "url": "notes/css/cssxuan-ze-qi.html",
    "revision": "5554e6d30550255cca745ff8a1f77364"
  },
  {
    "url": "notes/css/flexbu-ju.html",
    "revision": "556c3aa48a5b007e10931a85d52cba9e"
  },
  {
    "url": "notes/docker/docer-composeduo-rong-qi-xiang-mu.html",
    "revision": "d9ff0ecf1868f2f5add4499338e381bd"
  },
  {
    "url": "notes/docker/dockerbian-xie-jing-xiang-bing-shang-chuan.html",
    "revision": "15509a84460d38a58728fc5d731eca96"
  },
  {
    "url": "notes/docker/dockerjian-dan-shi-yong.html",
    "revision": "d9a3c1d6ba9284f379bf685bd40a6e0b"
  },
  {
    "url": "notes/gitde-jian-dan-shi-yong.html",
    "revision": "41cd17c2a7d688ce2efa0a60e815dcab"
  },
  {
    "url": "notes/guide/guide-1.html",
    "revision": "74c27f6d245822f7c00aac46e0858f28"
  },
  {
    "url": "notes/guide/guide-2.html",
    "revision": "c886aa0238d9ec18d1790db835ae8089"
  },
  {
    "url": "notes/guide/guide-3.html",
    "revision": "133c870002c726795fe9e3bf51dd2984"
  },
  {
    "url": "notes/guide/guide-4.html",
    "revision": "0e787f895cc10553bd4506d2ba4c6d1e"
  },
  {
    "url": "notes/html/html5yu-yi-yuan-su.html",
    "revision": "f111e9d9c2ae1ecae34200f2cde613f9"
  },
  {
    "url": "notes/html/htmlji-chu.html",
    "revision": "e9372804b2a4a2dfca7a0a26e9c62051"
  },
  {
    "url": "notes/index.html",
    "revision": "0609aef6f92adb4040819f526e639ce1"
  },
  {
    "url": "notes/typescript/typescript-webpackda-bao.html",
    "revision": "37d0d8f97d93440d8968faa097e11390"
  },
  {
    "url": "notes/typescript/typescriptbian-yi-xuan-xiang.html",
    "revision": "ed2fc1c09bb24da1de784b92368ccb40"
  },
  {
    "url": "notes/typescript/typescriptji-chu.html",
    "revision": "db9108dfb7f214747fca5e046fadc6a6"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "13dfc62c9cba6d13dbf7fad4e6745c94"
  },
  {
    "url": "tag/ci/cd/index.html",
    "revision": "947b85c6abc999a82af22bbd40d9a9bc"
  },
  {
    "url": "tag/css/index.html",
    "revision": "facbffeec9bc14f57e391171ef7608eb"
  },
  {
    "url": "tag/docker-compose/index.html",
    "revision": "bd562ad50cce383c1f4329fcda420e2d"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "99e5ff50d6f4b073ee3697733dfd4ff1"
  },
  {
    "url": "tag/element/index.html",
    "revision": "5eda5b8ebd2adc0fe2080d91d4aeccce"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "0ce09b5f07cb96308c11a9bc1d3d326a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "84b38d2ab657d3b083b747aacdbda566"
  },
  {
    "url": "tag/html/index.html",
    "revision": "66b5b18839e090f079058fbbbb23beaa"
  },
  {
    "url": "tag/http/index.html",
    "revision": "18dc182602f58e8e685881fbece0bcdb"
  },
  {
    "url": "tag/index.html",
    "revision": "1861bdb80c0e04de968bf92b099c3055"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "9999a53c746bf786f4bc5839dc7a3a99"
  },
  {
    "url": "tag/node/index.html",
    "revision": "f111e8dac06fb3be775517d360245b38"
  },
  {
    "url": "tag/other/index.html",
    "revision": "6fb8e2fc70e76698ece1f48ddc7b91a2"
  },
  {
    "url": "tag/python/index.html",
    "revision": "89338effd171a2f725f373e18dac6289"
  },
  {
    "url": "tag/react/index.html",
    "revision": "f2623265c3523624cfd3a2e924d5cf58"
  },
  {
    "url": "tag/redux/index.html",
    "revision": "4236039efd1aa8472695a800e20d4b69"
  },
  {
    "url": "tag/serverless/index.html",
    "revision": "8a7a3cfb0cb7142c5be93729981f7d0b"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "19959ac500ad3f46d964a3fad466820e"
  },
  {
    "url": "tag/tailwind/index.html",
    "revision": "928704029239cc49ffba71b2584083d8"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "fcd15ede5f0952d3c58984deef13ad57"
  },
  {
    "url": "tag/ui/index.html",
    "revision": "c7fb503f90347d2f3d6f577d621b9b99"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "468745d766fa657952c7db6fede39e82"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "4a56e8b56dd773000a2edc0cd6f43aa9"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c6f486ebe0b51b0559d0e0e024881346"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "9cbf2a9d647b0433f1dac148b98d6823"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "57c7e974723a0f965b7bd88a2b9a9d43"
  },
  {
    "url": "tag/yuque/index.html",
    "revision": "8da458acca1ad7c37b4b677090155171"
  },
  {
    "url": "timeline/index.html",
    "revision": "da23d583f60834e6cef1576600abd675"
  },
  {
    "url": "views/yuque/cloudbase-frameworkchu-ci-shi-yong.html",
    "revision": "fbb7156e2e8c7db7b21c09bd922589bd"
  },
  {
    "url": "views/yuque/commonjs-module-syntax.html",
    "revision": "d946697ad6e79c585238f9ef51082ae1"
  },
  {
    "url": "views/yuque/cypressjian-dan-shang-shou.html",
    "revision": "d45453d7420054d841717919ab2cf822"
  },
  {
    "url": "views/yuque/dao-chu-yu-que-wen-dang.html",
    "revision": "ede68c626bab488131c14e4cefaa3a43"
  },
  {
    "url": "views/yuque/el-treexiu-gai-zi-jie-dian-wei-dan-xuan.html",
    "revision": "2068cace6d2023b0b6c4ec7be9815f10"
  },
  {
    "url": "views/yuque/el-uploadshang-chuan-can-shu-ji-jie-xi.html",
    "revision": "baf397c86434c51db4190e19c0673dad"
  },
  {
    "url": "views/yuque/fcc-xiang-ying-shi-webshe-ji.html",
    "revision": "2ef62356006d1f939d15062033f3964f"
  },
  {
    "url": "views/yuque/graphqlxue-xi.html",
    "revision": "37e057b33f5d6c6b6cf6d03d3f944426"
  },
  {
    "url": "views/yuque/javascriptshi-jian-xun-huan.html",
    "revision": "039e958ca7762d3110980b8570f8c3c6"
  },
  {
    "url": "views/yuque/jian-dan-jing-tai-wen-jian-server.html",
    "revision": "efb7b9bc3a49cbeaf83f6be76454de67"
  },
  {
    "url": "views/yuque/jian-pan-shi-jian-xiang-jie.html",
    "revision": "b5a06a93b75d59910f3f330364e16d49"
  },
  {
    "url": "views/yuque/jupyter-notebook.html",
    "revision": "bb6a6417afd71c350037b2f4e9793009"
  },
  {
    "url": "views/yuque/maridban-zhuang-ji-yuan-cheng-lian-jie.html",
    "revision": "92506497140fb45872443f048c92d5a9"
  },
  {
    "url": "views/yuque/pandasdu-xie-csvji-zhui-jia.html",
    "revision": "b78e525b4d24b08c507ecfd6444dc008"
  },
  {
    "url": "views/yuque/picgo-githubtu-chuang.html",
    "revision": "53c875356eeb4d2eb54c7326df1dac3f"
  },
  {
    "url": "views/yuque/promiseji-lu.html",
    "revision": "95f918c91b3e5e7ae43afacf96948487"
  },
  {
    "url": "views/yuque/python-bao-zhi-zuo-liu-cheng.html",
    "revision": "4559db081ca62b8f3bb4c1a7dcfc877a"
  },
  {
    "url": "views/yuque/pythonjiang-wu-xian-fen-lei-jie-gou-shu-ju-zhuan-wei-json.html",
    "revision": "ed3a186c4ae0b39add28fc93c267488b"
  },
  {
    "url": "views/yuque/ru-he-chu-li-jsonwen-jian-jie-wei-de-dou-hao.html",
    "revision": "cfed902ec513cf0eda5b056201939826"
  },
  {
    "url": "views/yuque/ru-he-pi-liang-dao-ru-a-li-icon.html",
    "revision": "ef945a2d26d91ee017b9ec1d7b99c924"
  },
  {
    "url": "views/yuque/shi-yong-aria2pi-liang-xia-zai-shi-pin.html",
    "revision": "ae36ffcb865a90916cf73964a67a6932"
  },
  {
    "url": "views/yuque/shi-yong-marpzhi-zuo-ppt.html",
    "revision": "df04e67503abe3eb636c95f6a0518faf"
  },
  {
    "url": "views/yuque/slidev-shi-yong-ji-lu.html",
    "revision": "c8930c7014be62da7600347de8423e2a"
  },
  {
    "url": "views/yuque/ti-sheng-githubdai-ma-la-qu-su-du.html",
    "revision": "ad16b7d1c09208c8e9f499b6ff31efc9"
  },
  {
    "url": "views/yuque/vite2.1-react17-redux.html",
    "revision": "cdf905d87f9f0c16f16c724a33ea6652"
  },
  {
    "url": "views/yuque/vscode-cha-jian.html",
    "revision": "f960ae55c83e177c4e8dc78f1d0e1fcb"
  },
  {
    "url": "views/yuque/vscodekuai-jie-jian.html",
    "revision": "db66be8d2e13aad0f283a23ce772d677"
  },
  {
    "url": "views/yuque/vue2-pei-zhi-tailwind-css.html",
    "revision": "322843700acbcd7428b10b0c32f47b42"
  },
  {
    "url": "views/yuque/vuepressbo-ke-da-jian.html",
    "revision": "079ccbf1b2f00f79a90c2ed24cada0cf"
  },
  {
    "url": "views/yuque/vuepressyu-que-yun-duan-xie-zuo-github-actionschi-xu-ji-cheng.html",
    "revision": "3f30baabd4c36585637e04624a0264b7"
  },
  {
    "url": "views/yuque/vuezi-dong-jian-ce-shua-xin-index.html.html",
    "revision": "7bf6298615c89346c0d2be7b8146f4c8"
  },
  {
    "url": "views/yuque/wang-luo-apishou-cang.html",
    "revision": "7d6af21aa247cc942594d90ebe35ff23"
  },
  {
    "url": "views/yuque/win10chang-yong-ruan-jian-an-zhuang.html",
    "revision": "4edbd2ef8835a42820982b9752c31c1d"
  },
  {
    "url": "views/yuque/yamlwen-jian-ge-shi-ji-pythonjie-xi.html",
    "revision": "8a746e831c0ac0aaecb1566a964b14e9"
  },
  {
    "url": "views/yuque/yapian-zhuang-ji-lu.html",
    "revision": "059321b5070c50a569bb8f2b2be90725"
  },
  {
    "url": "views/yuque/yu-que-tu-chuang-fang-dao-lian-lin-shi-jie-jue-ban-fa.html",
    "revision": "7e8a0e5c930d53313da815257932c999"
  },
  {
    "url": "views/yuque/yun-fu-wu-qi-sambashe-zhi.html",
    "revision": "7e3f30ac2b1fcc312e7c19d4117420df"
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
