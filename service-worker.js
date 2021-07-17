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
    "revision": "d64ca4341911fc03a125d7c224fad4dd"
  },
  {
    "url": "about/index.html",
    "revision": "c6d065699383a4927009724a20c8d5de"
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
    "url": "assets/js/app.aaf9cc2f.js",
    "revision": "856a5c5090e27786416bc6edbd983225"
  },
  {
    "url": "categories/index.html",
    "revision": "2949e32de2b50630687fbcde8d94c2b4"
  },
  {
    "url": "categories/代码片段/index.html",
    "revision": "b13f7ac198174867e01c08b7826763bc"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "662d4d32baba1d11f3a0b5324c4daa27"
  },
  {
    "url": "categories/技术笔记/page/2/index.html",
    "revision": "38b98d0cf46d0f8007d3af758f2fed1c"
  },
  {
    "url": "categories/技术笔记/page/3/index.html",
    "revision": "65604bf7749335b1287db31f7785624a"
  },
  {
    "url": "categories/技术笔记/page/4/index.html",
    "revision": "e3e2ae05d4b4050a1a1c490653b2a9e4"
  },
  {
    "url": "categories/技术笔记/page/5/index.html",
    "revision": "11ef03b89598f4c20d2fd8f08e41c53a"
  },
  {
    "url": "code-snippets/code-2021/difference-between-js-for-loop.html",
    "revision": "091b12c5bde7a6889d60e8eb6ecbca32"
  },
  {
    "url": "code-snippets/code-2021/flaskkua-yu-shi-li.html",
    "revision": "b55578d824c7761465c3cc7525ca2737"
  },
  {
    "url": "code-snippets/code-2021/for-loops-array-reduce-and-method-chaining.html",
    "revision": "b6ddbcc2978c2e68416be565942a9744"
  },
  {
    "url": "code-snippets/code-2021/nodejsnei-zhi-http-server.html",
    "revision": "bb3f9ef370cbd2d614791b64dd2b1283"
  },
  {
    "url": "code-snippets/code-2021/server-sent-eventsshi-li-dai-ma.html",
    "revision": "eb9127ab71c63830dab43a308bc1d726"
  },
  {
    "url": "code-snippets/code-2021/vue3shi-yong-cdnfang-shi-yin-ru-shi-li.html",
    "revision": "a0bf5998a619743df9f48a1b43bd22c6"
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
    "revision": "741aa64b3d0394b54c553bb8f347a5cf"
  },
  {
    "url": "logo.png",
    "revision": "dfb9cc785f85c37c4aca9566f6cda8c6"
  },
  {
    "url": "notes/browser/hui-liu-he-chong-hui.html",
    "revision": "11856ba920ae91f20d8fa8a4a6634886"
  },
  {
    "url": "notes/css.html",
    "revision": "16dec350e4db4489d3d45dfb77f0ad95"
  },
  {
    "url": "notes/css/cssji-chu.html",
    "revision": "8802806e51952f2ab9ff0613a3e002bf"
  },
  {
    "url": "notes/css/cssxuan-ze-qi.html",
    "revision": "7cfffad7fc739c29063984642fe0a39c"
  },
  {
    "url": "notes/css/flexbu-ju.html",
    "revision": "ab7f09b189ff22f13de2c48a7c449036"
  },
  {
    "url": "notes/docker/docer-composeduo-rong-qi-xiang-mu.html",
    "revision": "c0b3bb71f58659ba33ece56313d1361e"
  },
  {
    "url": "notes/docker/dockerbian-xie-jing-xiang-bing-shang-chuan.html",
    "revision": "fab3d680fdaf22edec429d3d49f9d260"
  },
  {
    "url": "notes/docker/dockerjian-dan-shi-yong.html",
    "revision": "d95c01f2c17068a65b353d9ae9edae01"
  },
  {
    "url": "notes/gitde-jian-dan-shi-yong.html",
    "revision": "8f2d8d331e93cc11ba2b4b3187ce251a"
  },
  {
    "url": "notes/guide/guide-1.html",
    "revision": "094bd4ef2414ea6916aa987e6f2402b3"
  },
  {
    "url": "notes/guide/guide-2.html",
    "revision": "f8a1501c933a80dbfb7f6b9514c12eea"
  },
  {
    "url": "notes/guide/guide-3.html",
    "revision": "3e29066e0755a0132d695bcdb1200f2c"
  },
  {
    "url": "notes/guide/guide-4.html",
    "revision": "a013c2a77fc25365f1becabdf7cba060"
  },
  {
    "url": "notes/html/html5yu-yi-yuan-su.html",
    "revision": "28f5ff12506f62169a765dc2fadb5501"
  },
  {
    "url": "notes/html/htmlji-chu.html",
    "revision": "72c38065fd951502b2c7cc2359717898"
  },
  {
    "url": "notes/index.html",
    "revision": "977e77561c8db16e3ad7113b4a56576e"
  },
  {
    "url": "notes/typescript/typescript-webpackda-bao.html",
    "revision": "ba44a39f12502c1bf500c043bdf37fa7"
  },
  {
    "url": "notes/typescript/typescriptbian-yi-xuan-xiang.html",
    "revision": "ed391d37524b00ee14961c644ccb194f"
  },
  {
    "url": "notes/typescript/typescriptji-chu.html",
    "revision": "09bb078b465b3ffc9130782bb3b0f505"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "95c84c4f32d7ce3cfa0a9592a3049556"
  },
  {
    "url": "tag/ci/cd/index.html",
    "revision": "230ff06da3044f5471205e2918b40266"
  },
  {
    "url": "tag/css/index.html",
    "revision": "0463a16383c64ea01bb9009fb0cbf19f"
  },
  {
    "url": "tag/docker-compose/index.html",
    "revision": "24ead16501714702848d05ad5cef463c"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "224d5bc45e8f4084888893d509180221"
  },
  {
    "url": "tag/element/index.html",
    "revision": "dc12b39f3dfbc09da69bb3a481690ef1"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "d367eba085e8d32f8c6ba966f126ea85"
  },
  {
    "url": "tag/git/index.html",
    "revision": "480bbd6fb090ae8f84f7bd1e47326c0b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "1a84025821713439bb6b8e75b263a5e6"
  },
  {
    "url": "tag/http/index.html",
    "revision": "8a1865b094a7c68509dd0154b4d137f9"
  },
  {
    "url": "tag/index.html",
    "revision": "dc5dad38f8fed094d6cf0a888ca22705"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "f88263aab2d9331693f38a75fa111e3f"
  },
  {
    "url": "tag/node/index.html",
    "revision": "5bfde902ea490e0c4e873a786e79a807"
  },
  {
    "url": "tag/other/index.html",
    "revision": "3b03bd1063104ddd802f72eed49cedd5"
  },
  {
    "url": "tag/python/index.html",
    "revision": "7b0477a04aa9343b54839ad41a3b0637"
  },
  {
    "url": "tag/serverless/index.html",
    "revision": "40e6daf16ba2ce67fe680d57414534ef"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "1823fb9b1a2a4e6ad80540de29faad09"
  },
  {
    "url": "tag/tailwind/index.html",
    "revision": "cd570b707eed535445730422ea39c4dd"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "4ab99cf5b930fb80afbf4ac2f8a4df35"
  },
  {
    "url": "tag/ui/index.html",
    "revision": "f88b5bb8c8f5e20103fbe488fc397f75"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "d2b6bbd656417664570299f64fa324b7"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7f1b672a6e91e5296d35f81ca012c101"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "3d3c97284f455bbc5c0ec13827e22317"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "9d3631b596f799c02d58e84a43fee304"
  },
  {
    "url": "tag/yuque/index.html",
    "revision": "a192d4cd99bf1c7b5da245060cad0fc2"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "c88a5dd998097aeb9d8355da626e4380"
  },
  {
    "url": "timeline/index.html",
    "revision": "0e3d0009372b3dd2e77e8e94d74f45b6"
  },
  {
    "url": "views/yuque/cloudbase-frameworkchu-ci-shi-yong.html",
    "revision": "4d049fb3466602b909af59774211c6b9"
  },
  {
    "url": "views/yuque/commonjs-module-syntax.html",
    "revision": "ad388f471c8fce94ac0589e50b555dc8"
  },
  {
    "url": "views/yuque/cypressjian-dan-shang-shou.html",
    "revision": "e7315dcc899823845c1061eee59ed1a6"
  },
  {
    "url": "views/yuque/dao-chu-yu-que-wen-dang.html",
    "revision": "32f18004dfdbb8873e3baa301c8a23b7"
  },
  {
    "url": "views/yuque/el-treexiu-gai-zi-jie-dian-wei-dan-xuan.html",
    "revision": "7bc6e5b0172ec8551523e50646c36ff4"
  },
  {
    "url": "views/yuque/el-uploadshang-chuan-can-shu-ji-jie-xi.html",
    "revision": "65f8375de845d16ec759f0ca60feceee"
  },
  {
    "url": "views/yuque/fcc-xiang-ying-shi-webshe-ji.html",
    "revision": "8767e1dbb05bbf0bf621e08242acff80"
  },
  {
    "url": "views/yuque/graphqlxue-xi.html",
    "revision": "ad2645bfb4c31c366d23ee6fa7d3e2aa"
  },
  {
    "url": "views/yuque/javascriptshi-jian-xun-huan.html",
    "revision": "ef473fc490638ce967916e6c71f93cd0"
  },
  {
    "url": "views/yuque/jian-dan-jing-tai-wen-jian-server.html",
    "revision": "e22a3e9f9138bcd384be264e87b6deec"
  },
  {
    "url": "views/yuque/jian-pan-shi-jian-xiang-jie.html",
    "revision": "d38c431810f33c4edffb4f3f6f11d4f6"
  },
  {
    "url": "views/yuque/jupyter-notebook.html",
    "revision": "10cc31b14a15d6e6eb9e0fb94de717f1"
  },
  {
    "url": "views/yuque/maridban-zhuang-ji-yuan-cheng-lian-jie.html",
    "revision": "b754b04f2bfd01ad58b35a6cb8e7156e"
  },
  {
    "url": "views/yuque/pandasdu-xie-csvji-zhui-jia.html",
    "revision": "3fac0334fccbb4f543039b898634f7f3"
  },
  {
    "url": "views/yuque/picgo-githubtu-chuang.html",
    "revision": "82ea990b55edfb43b10b36053d0c113c"
  },
  {
    "url": "views/yuque/promiseji-lu.html",
    "revision": "7819c953a5ac9684f22c9d2c61703bd1"
  },
  {
    "url": "views/yuque/python-bao-zhi-zuo-liu-cheng.html",
    "revision": "90d825f3fbaaad41bc933e94ce615342"
  },
  {
    "url": "views/yuque/pythonjiang-wu-xian-fen-lei-jie-gou-shu-ju-zhuan-wei-json.html",
    "revision": "f3aaaa004c9072ffbbb6acb0e54d2ccf"
  },
  {
    "url": "views/yuque/ru-he-chu-li-jsonwen-jian-jie-wei-de-dou-hao.html",
    "revision": "ab6d1c09222fa0b439de78c513381b06"
  },
  {
    "url": "views/yuque/ru-he-pi-liang-dao-ru-a-li-icon.html",
    "revision": "3623181476f31b7ef2ac2db26ec945b0"
  },
  {
    "url": "views/yuque/shi-yong-aria2pi-liang-xia-zai-shi-pin.html",
    "revision": "e804f9e756c19e67c5bdfccd5287fd09"
  },
  {
    "url": "views/yuque/shi-yong-marpzhi-zuo-ppt.html",
    "revision": "6ab2ee379adad98feb2c5d2eaabb4cfd"
  },
  {
    "url": "views/yuque/slidev-shi-yong-ji-lu.html",
    "revision": "4334d3f1f754bbb37350b01aea17af53"
  },
  {
    "url": "views/yuque/ti-sheng-githubdai-ma-la-qu-su-du.html",
    "revision": "d9272e07fda7102c3733ad2bc0df74b5"
  },
  {
    "url": "views/yuque/vscode-cha-jian.html",
    "revision": "2d31530ad2d95eaefdb4343f320681eb"
  },
  {
    "url": "views/yuque/vscodekuai-jie-jian.html",
    "revision": "1fb8c56de3443147831df89e91143072"
  },
  {
    "url": "views/yuque/vue2-pei-zhi-tailwind-css.html",
    "revision": "d1f52ce2785ab308579346d20fa14c0f"
  },
  {
    "url": "views/yuque/vuepressbo-ke-da-jian.html",
    "revision": "3e9fc3b438f0f98da5eaffa04fc88b31"
  },
  {
    "url": "views/yuque/vuepressyu-que-yun-duan-xie-zuo-github-actionschi-xu-ji-cheng.html",
    "revision": "5694986b47585a774f0c723c81a9f834"
  },
  {
    "url": "views/yuque/vuezi-dong-jian-ce-shua-xin-index.html.html",
    "revision": "b5ab6fd080a3fdd8bdb2c3f2191b98cd"
  },
  {
    "url": "views/yuque/wang-luo-apishou-cang.html",
    "revision": "e80ffad630d432b7fc6efad5735fe785"
  },
  {
    "url": "views/yuque/win10chang-yong-ruan-jian-an-zhuang.html",
    "revision": "f4d5edfedca8fc5fae31e193cdf80ea5"
  },
  {
    "url": "views/yuque/yamlwen-jian-ge-shi-ji-pythonjie-xi.html",
    "revision": "b85dd7a077108b9966f8565c39d6a848"
  },
  {
    "url": "views/yuque/yapian-zhuang-ji-lu.html",
    "revision": "c2b649cb6f9898844ae96a16e5cea764"
  },
  {
    "url": "views/yuque/yu-que-tu-chuang-fang-dao-lian-lin-shi-jie-jue-ban-fa.html",
    "revision": "d9d5024dd56c0bc2e5645f3615d8a9fa"
  },
  {
    "url": "views/yuque/yun-fu-wu-qi-sambashe-zhi.html",
    "revision": "dbb52f5a0c17168efcb47b1f95683d16"
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
