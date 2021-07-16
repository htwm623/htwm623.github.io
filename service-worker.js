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
    "revision": "ce05f706e89ba4360297fb077c107d72"
  },
  {
    "url": "about/index.html",
    "revision": "23a1c6c8f41348e7c7f055b023c21076"
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
    "url": "assets/js/app.704cdd09.js",
    "revision": "9f2060e25378b6e1faa86f74807275ef"
  },
  {
    "url": "categories/index.html",
    "revision": "5331782e563b6827d302c5726872aa40"
  },
  {
    "url": "categories/代码片段/index.html",
    "revision": "a072281c846a39662b58caf5a2c41b0f"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "ffa37cf487c2fb989a2b0ac0d58e34af"
  },
  {
    "url": "categories/技术笔记/page/2/index.html",
    "revision": "b5bf8f808a48c710c5601693eb5a2e8d"
  },
  {
    "url": "categories/技术笔记/page/3/index.html",
    "revision": "29118cace147bc9dc1557aabae981467"
  },
  {
    "url": "categories/技术笔记/page/4/index.html",
    "revision": "907ec84cd88e7600bf8a1d538baea4b9"
  },
  {
    "url": "categories/技术笔记/page/5/index.html",
    "revision": "c886b4bb7dd1f14ca2048b1291cb8e21"
  },
  {
    "url": "code-snippets/code-2021/difference-between-js-for-loop.html",
    "revision": "b0e0931db5c3b9971e41f88bf0d27781"
  },
  {
    "url": "code-snippets/code-2021/flaskkua-yu-shi-li.html",
    "revision": "cab00a23ce8315804fe031db1c975037"
  },
  {
    "url": "code-snippets/code-2021/for-loops-array-reduce-and-method-chaining.html",
    "revision": "43e8c38fee4427b89a5db8eed83012a9"
  },
  {
    "url": "code-snippets/code-2021/nodejsnei-zhi-http-server.html",
    "revision": "7113f9ad200358539c9b65de93671dde"
  },
  {
    "url": "code-snippets/code-2021/server-sent-eventsshi-li-dai-ma.html",
    "revision": "331bcd133f496d82d11a5225b98794df"
  },
  {
    "url": "code-snippets/code-2021/vue3shi-yong-cdnfang-shi-yin-ru-shi-li.html",
    "revision": "dc932ebdbff9816a36daf241e69e6dc0"
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
    "revision": "ceafc99422a242659bf33446efd30799"
  },
  {
    "url": "logo.png",
    "revision": "dfb9cc785f85c37c4aca9566f6cda8c6"
  },
  {
    "url": "notes/browser/hui-liu-he-chong-hui.html",
    "revision": "9796e53daf934934bb392300f90899ab"
  },
  {
    "url": "notes/css.html",
    "revision": "5fc1a4bb585616dd248d76ffa3d45df5"
  },
  {
    "url": "notes/css/cssji-chu.html",
    "revision": "7855d57a1dc74b6414f3885b1480e2b7"
  },
  {
    "url": "notes/css/cssxuan-ze-qi.html",
    "revision": "76c8294d94975c2b6ce5b95ce6897b3f"
  },
  {
    "url": "notes/css/flexbu-ju.html",
    "revision": "ca530e581f4012adceefde2624fdf0fc"
  },
  {
    "url": "notes/docker/docer-composeduo-rong-qi-xiang-mu.html",
    "revision": "4e65dbd7b8eda22845b5e816a422a420"
  },
  {
    "url": "notes/docker/dockerbian-xie-jing-xiang-bing-shang-chuan.html",
    "revision": "065d95c659969f1c5e90728f2e085f91"
  },
  {
    "url": "notes/docker/dockerjian-dan-shi-yong.html",
    "revision": "2414a6509721c9ff8b39bb77576952ca"
  },
  {
    "url": "notes/gitde-jian-dan-shi-yong.html",
    "revision": "eb23f8ae6ca0fdc3b13afb7bd9eddf65"
  },
  {
    "url": "notes/guide/guide-1.html",
    "revision": "ee2f83d19f130bd8019ce16e7bcc4f6b"
  },
  {
    "url": "notes/guide/guide-2.html",
    "revision": "376aa1903f195bfbbddbc5c95133b3f1"
  },
  {
    "url": "notes/guide/guide-3.html",
    "revision": "fd5d1c900ea98408e1c237daa5ba38fd"
  },
  {
    "url": "notes/guide/guide-4.html",
    "revision": "ae7e17117786506093fa6b80fe49c311"
  },
  {
    "url": "notes/html/html5yu-yi-yuan-su.html",
    "revision": "5e3ba47ca0399c75a24681b47d2ae643"
  },
  {
    "url": "notes/html/htmlji-chu.html",
    "revision": "f091c628472588e9b3c9bc19b62f2274"
  },
  {
    "url": "notes/index.html",
    "revision": "06134324929c667af6024713a0feebdb"
  },
  {
    "url": "notes/typescript/typescript-webpackda-bao.html",
    "revision": "c3f2c09e6d3fe91222a4b22794769eeb"
  },
  {
    "url": "notes/typescript/typescriptbian-yi-xuan-xiang.html",
    "revision": "537ac998f26d1b1bdf4eca482950ecea"
  },
  {
    "url": "notes/typescript/typescriptji-chu.html",
    "revision": "3a2a30751a511eb4a89fe989f65ed15a"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "1dcfd49cb46ec6ee2939eb81a6b22ca6"
  },
  {
    "url": "tag/ci/cd/index.html",
    "revision": "477cab15c8cbd5d8054b8591861d8d16"
  },
  {
    "url": "tag/css/index.html",
    "revision": "f40c47204270b88376f1b048ac834d7f"
  },
  {
    "url": "tag/docker-compose/index.html",
    "revision": "cc4560012aeb8cc884fcd0aded2d7d4b"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "165ac489eda4f1baa8b172345ba2bc00"
  },
  {
    "url": "tag/element/index.html",
    "revision": "7f9131479d6d6b9e4e75f9a329b9bb0a"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "9b28a7c3713a65ef02ee1844867d5bc8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "bb9ac15032b3c993c3bd166ab8eaacc2"
  },
  {
    "url": "tag/html/index.html",
    "revision": "74269882a6f7105df675d3e05ce4e475"
  },
  {
    "url": "tag/http/index.html",
    "revision": "370388c6cd9565bbc6c3e3795ae8493b"
  },
  {
    "url": "tag/index.html",
    "revision": "c83673e74c8d42e75d634fef69801f22"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "95e824d0b6541a8a7fac21038642a0f4"
  },
  {
    "url": "tag/node/index.html",
    "revision": "10710646a84e00c1b94df1acc06d38d7"
  },
  {
    "url": "tag/other/index.html",
    "revision": "87bf55cba9d17e0e977cdf155feae1d6"
  },
  {
    "url": "tag/python/index.html",
    "revision": "a1c4f31d79f16546379f887ea47f1ee7"
  },
  {
    "url": "tag/serverless/index.html",
    "revision": "f34e134afba3aabe19060b51e075cfca"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "990d770b2fc00c405a985b42ad8e4938"
  },
  {
    "url": "tag/tailwind/index.html",
    "revision": "6ae7b8205d60b8c79abd0c5c9f1b1e3c"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "9d9d44e51ca9bb2deb50efe2476acd96"
  },
  {
    "url": "tag/ui/index.html",
    "revision": "bffe37a4622adf333bfc13bc528e7368"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "ee7dcf41a0a9e0d3bf3434e62918babd"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3b6f3d30ec7dd4eb9a524655548698c1"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "767cd9fa988da317a7dd004b81f0e4b0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b5277ab54e23d1505510ec2ba7b04755"
  },
  {
    "url": "tag/yuque/index.html",
    "revision": "3f10b4867272ef6c8d77d60267649926"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "1fd593eb84497ee8e086ac3cb30faf4a"
  },
  {
    "url": "timeline/index.html",
    "revision": "27c49db29ae1373d7972cf128d91257a"
  },
  {
    "url": "views/yuque/cloudbase-frameworkchu-ci-shi-yong.html",
    "revision": "a087e881642128ffb38d47f58def2234"
  },
  {
    "url": "views/yuque/commonjs-module-syntax.html",
    "revision": "e6daa7f837d2f414a48f01504892b9c8"
  },
  {
    "url": "views/yuque/cypressjian-dan-shang-shou.html",
    "revision": "437703b8c6d4c7fdd1f3f3020cbca241"
  },
  {
    "url": "views/yuque/dao-chu-yu-que-wen-dang.html",
    "revision": "36425747091c0779732c047728e441c9"
  },
  {
    "url": "views/yuque/el-treexiu-gai-zi-jie-dian-wei-dan-xuan.html",
    "revision": "bb07937b52378555df72e0d6f752e303"
  },
  {
    "url": "views/yuque/el-uploadshang-chuan-can-shu-ji-jie-xi.html",
    "revision": "9b816484cb23a471ca5f7cb402191016"
  },
  {
    "url": "views/yuque/fcc-xiang-ying-shi-webshe-ji.html",
    "revision": "42677e35509458069249451e909771bf"
  },
  {
    "url": "views/yuque/graphqlxue-xi.html",
    "revision": "b7cf266c86c95cb5d59f7aa80e418f86"
  },
  {
    "url": "views/yuque/javascriptshi-jian-xun-huan.html",
    "revision": "a1bbd4a0673f115910da53de7006e896"
  },
  {
    "url": "views/yuque/jian-dan-jing-tai-wen-jian-server.html",
    "revision": "622bf247f537dec313bc64541ca35c79"
  },
  {
    "url": "views/yuque/jian-pan-shi-jian-xiang-jie.html",
    "revision": "e51647b1373fc761bff54f419b51adf9"
  },
  {
    "url": "views/yuque/jupyter-notebook.html",
    "revision": "89ec3d7c4d3b815eb8ce4251e8f557a2"
  },
  {
    "url": "views/yuque/maridban-zhuang-ji-yuan-cheng-lian-jie.html",
    "revision": "c0d9b2c3952f099c364280356b692245"
  },
  {
    "url": "views/yuque/pandasdu-xie-csvji-zhui-jia.html",
    "revision": "e9d82296c92d852f4b8fedda538255ff"
  },
  {
    "url": "views/yuque/picgo-githubtu-chuang.html",
    "revision": "7d7684fea3ab84d579b3ea4b57265069"
  },
  {
    "url": "views/yuque/promiseji-lu.html",
    "revision": "1dcb858fbb34cd05bd4dbdadf836b922"
  },
  {
    "url": "views/yuque/python-bao-zhi-zuo-liu-cheng.html",
    "revision": "1ea7da36db1e5cb195d934e0743529ef"
  },
  {
    "url": "views/yuque/pythonjiang-wu-xian-fen-lei-jie-gou-shu-ju-zhuan-wei-json.html",
    "revision": "aca5feeda9330ae26ee189d681124554"
  },
  {
    "url": "views/yuque/ru-he-chu-li-jsonwen-jian-jie-wei-de-dou-hao.html",
    "revision": "c34906f26680268e189df992c9d8102e"
  },
  {
    "url": "views/yuque/ru-he-pi-liang-dao-ru-a-li-icon.html",
    "revision": "5a3041f2ffa1c6daa5cdba6054bb1c14"
  },
  {
    "url": "views/yuque/shi-yong-aria2pi-liang-xia-zai-shi-pin.html",
    "revision": "4a5539aad8c7cec2a3c507e4e67722fd"
  },
  {
    "url": "views/yuque/shi-yong-marpzhi-zuo-ppt.html",
    "revision": "02c5c2401e2c1da73847dcf7fadb8533"
  },
  {
    "url": "views/yuque/slidev-shi-yong-ji-lu.html",
    "revision": "b360c24cc4fa31fbad9e217798a6fe49"
  },
  {
    "url": "views/yuque/ti-sheng-githubdai-ma-la-qu-su-du.html",
    "revision": "bbfd43ef2a0c1b1ee85b88398b73c144"
  },
  {
    "url": "views/yuque/vscode-cha-jian.html",
    "revision": "27ddc17e9ca3e073d2b49dcc53418d87"
  },
  {
    "url": "views/yuque/vscodekuai-jie-jian.html",
    "revision": "c8f5b1ff876a15c5d1f8c4461ff4e83b"
  },
  {
    "url": "views/yuque/vue2-pei-zhi-tailwind-css.html",
    "revision": "b1f2d8fd80dda341914ff006dc1378fa"
  },
  {
    "url": "views/yuque/vuepressbo-ke-da-jian.html",
    "revision": "654f803a9c9236c08959f60c4f53153f"
  },
  {
    "url": "views/yuque/vuepressyu-que-yun-duan-xie-zuo-github-actionschi-xu-ji-cheng.html",
    "revision": "9de25aa6f9705def52408ce130d8ec9b"
  },
  {
    "url": "views/yuque/vuezi-dong-jian-ce-shua-xin-index.html.html",
    "revision": "2202439e3a5a5485a9a2186134ba1d45"
  },
  {
    "url": "views/yuque/wang-luo-apishou-cang.html",
    "revision": "81abf8919ae1563c1ba43b0590ffd555"
  },
  {
    "url": "views/yuque/win10chang-yong-ruan-jian-an-zhuang.html",
    "revision": "f1469de359d888e84f0872fbe0d4684e"
  },
  {
    "url": "views/yuque/yamlwen-jian-ge-shi-ji-pythonjie-xi.html",
    "revision": "ee322ac20213fe6985be56963a8098bc"
  },
  {
    "url": "views/yuque/yapian-zhuang-ji-lu.html",
    "revision": "04d04b25c9a07e574326b260afcd6111"
  },
  {
    "url": "views/yuque/yu-que-tu-chuang-fang-dao-lian-lin-shi-jie-jue-ban-fa.html",
    "revision": "d704a0827915fd1aaa327c36a9a4592b"
  },
  {
    "url": "views/yuque/yun-fu-wu-qi-sambashe-zhi.html",
    "revision": "c7811b33f258b2956b848ea3ae527c5b"
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
