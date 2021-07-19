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
    "revision": "c6d3a5f9fcef08f189c85c961fbed6be"
  },
  {
    "url": "about/index.html",
    "revision": "5ccf5255b17dfc1d85b1b71d9878c6f4"
  },
  {
    "url": "assets/css/0.styles.2a29f9d2.css",
    "revision": "12bb515d97c84f5699183b602acecb32"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.602a9c34.js",
    "revision": "73ba79560faa1891865bccc9dac762b3"
  },
  {
    "url": "assets/js/10.5ddd3c85.js",
    "revision": "c3b75980f6a9a0fe180a5cea2105bba9"
  },
  {
    "url": "assets/js/11.2c724710.js",
    "revision": "c5cc7bddab034ab799710c100aa51f64"
  },
  {
    "url": "assets/js/12.e1dd7311.js",
    "revision": "0a16fcf09a6c5d77853ae9e007fb7d71"
  },
  {
    "url": "assets/js/13.e44518f0.js",
    "revision": "98e66c573b246af489c0bb24fbf71c6e"
  },
  {
    "url": "assets/js/14.9b71ee5d.js",
    "revision": "365ebc0d46812c738d1c54dd5635e3c9"
  },
  {
    "url": "assets/js/15.7548cdde.js",
    "revision": "70483bc5e67252927defabd508fc1412"
  },
  {
    "url": "assets/js/16.a497af8d.js",
    "revision": "39a733a866e8191d013ce4810bc28794"
  },
  {
    "url": "assets/js/17.0d3cb677.js",
    "revision": "46a6994c2b5992153c7dffcf14f9afab"
  },
  {
    "url": "assets/js/18.8eb939ea.js",
    "revision": "184667e64ab6e9205d2e58c41ccbae49"
  },
  {
    "url": "assets/js/19.eb499ab5.js",
    "revision": "b3d81b78cfbb4262c1d10fabe217ef10"
  },
  {
    "url": "assets/js/20.a7e06c17.js",
    "revision": "aa585f38d7d0b5c3b0935d3e4d78ace4"
  },
  {
    "url": "assets/js/21.9d1d09d3.js",
    "revision": "0ede1e6adbf0422be18df923cf0f6556"
  },
  {
    "url": "assets/js/22.456382d2.js",
    "revision": "0cf5e9cdd4a3c19cc4f2afbd79102ae5"
  },
  {
    "url": "assets/js/23.126e41a2.js",
    "revision": "1d5ac8c5f8fd3df7cc83dc7fc280a457"
  },
  {
    "url": "assets/js/24.fb79ae29.js",
    "revision": "9fdd51aa2f98c2f7cb4484da184ef6eb"
  },
  {
    "url": "assets/js/25.a56c8322.js",
    "revision": "162b679a353f069732740a533f209c54"
  },
  {
    "url": "assets/js/26.b931dedf.js",
    "revision": "71500be06875422b44af955fc3092e30"
  },
  {
    "url": "assets/js/27.b39c9518.js",
    "revision": "7fa55a80cdda9a4d486d335610c1d6fc"
  },
  {
    "url": "assets/js/28.fc624103.js",
    "revision": "e526f9ecc186e59c43aed0a5b4d03527"
  },
  {
    "url": "assets/js/29.e3252af8.js",
    "revision": "6ce494f37bbcc90f1f93e542abd31f4d"
  },
  {
    "url": "assets/js/3.fee390ef.js",
    "revision": "b5a75c96e0fad7f9898e10ae763721b6"
  },
  {
    "url": "assets/js/30.f6cbc2d3.js",
    "revision": "ce8ee9dcd020c0a2aeb3df8fdcee123d"
  },
  {
    "url": "assets/js/31.18783a6c.js",
    "revision": "4521a1137a78d4deca53c359de21f64d"
  },
  {
    "url": "assets/js/32.7f1f1318.js",
    "revision": "c35cb04ae93945343d56b3a0c1a9361b"
  },
  {
    "url": "assets/js/33.4489872b.js",
    "revision": "01f2c104b50a0b669a6f1191ffbcd69f"
  },
  {
    "url": "assets/js/34.dcbb6881.js",
    "revision": "0bbe30e044c0bba1bb491281258b2523"
  },
  {
    "url": "assets/js/35.5bbd01d4.js",
    "revision": "ecf8f999636ae5bb6365ce224dc12126"
  },
  {
    "url": "assets/js/36.7bd65a74.js",
    "revision": "71ded2735c19f4d693b6f1c70947c89a"
  },
  {
    "url": "assets/js/37.a0f6891d.js",
    "revision": "17aecac2c55fc935992fc188c3e51b39"
  },
  {
    "url": "assets/js/38.a8fd6bff.js",
    "revision": "31b9b129b83985d5c8a91fb9db04781b"
  },
  {
    "url": "assets/js/39.45cade77.js",
    "revision": "3f0937dd26a5d0a21c61746df8f00bca"
  },
  {
    "url": "assets/js/4.298e0eb4.js",
    "revision": "f337ca3008c7f230828623dbfbcdc813"
  },
  {
    "url": "assets/js/40.eca2d4ca.js",
    "revision": "580645b4bd0c46038fff2513386a8581"
  },
  {
    "url": "assets/js/41.c1acb4ac.js",
    "revision": "a00bd25d24d6807e020648e015b09313"
  },
  {
    "url": "assets/js/42.85a13f7b.js",
    "revision": "80e638823ca1c08aa3e47b95dd617b24"
  },
  {
    "url": "assets/js/43.9bbf2229.js",
    "revision": "92ee2e6ffc77ed755b1d9822b0b54cf7"
  },
  {
    "url": "assets/js/44.1e80179e.js",
    "revision": "3077f8b8e68765b4252b243e9c303019"
  },
  {
    "url": "assets/js/45.a7f5fff2.js",
    "revision": "b71484ed9c0c8ff74669daa883201c03"
  },
  {
    "url": "assets/js/46.0d3ff0b0.js",
    "revision": "97f3962b0c7d78a86a9092a6c152d882"
  },
  {
    "url": "assets/js/47.641935d1.js",
    "revision": "b93b838df08fb745f227d224ed142977"
  },
  {
    "url": "assets/js/48.0441c4f0.js",
    "revision": "2238502b256749a83bcfc4bdebf8c427"
  },
  {
    "url": "assets/js/49.4dd018eb.js",
    "revision": "88a8b26c9d6605839908e901c0c82a81"
  },
  {
    "url": "assets/js/5.12bcd2b3.js",
    "revision": "5a329391d493aab67a0f95984be4ff21"
  },
  {
    "url": "assets/js/50.e722def9.js",
    "revision": "61964e42ab291ed9ad141ff431b6ef71"
  },
  {
    "url": "assets/js/51.dbe63baf.js",
    "revision": "5b27d98a819afeef79215ffd8dbf475b"
  },
  {
    "url": "assets/js/52.168f5193.js",
    "revision": "a1768262c84752e4b7726deb8c90765c"
  },
  {
    "url": "assets/js/53.c3116d95.js",
    "revision": "50bf6136cead477cd0d34b353a58d2a8"
  },
  {
    "url": "assets/js/54.980dde44.js",
    "revision": "268de2927a7cdba868d3ea0824ef2001"
  },
  {
    "url": "assets/js/55.0145f927.js",
    "revision": "208aa4df3cb0029c9859756f28f3e582"
  },
  {
    "url": "assets/js/56.0f4e064b.js",
    "revision": "af3087f0a494669b8bc1f0f590ab6419"
  },
  {
    "url": "assets/js/57.d60546f4.js",
    "revision": "0588b7dc68ad7c8ad6240d380452e042"
  },
  {
    "url": "assets/js/58.85841c99.js",
    "revision": "c5b8a8043f6e43c800cdc317924a2117"
  },
  {
    "url": "assets/js/59.7d214abf.js",
    "revision": "d9051febebacff55cc3b0702236a0810"
  },
  {
    "url": "assets/js/6.e2b3eb74.js",
    "revision": "e271233564cadbf97bc4da79e1189fb9"
  },
  {
    "url": "assets/js/60.7c2584f8.js",
    "revision": "447858acc46de00d3a62778014852dc8"
  },
  {
    "url": "assets/js/61.1d6203d3.js",
    "revision": "e1278bf3439848568d415b5471ecb7df"
  },
  {
    "url": "assets/js/62.682784ad.js",
    "revision": "7bf3ef531fd4692eadb6ba0ca535264a"
  },
  {
    "url": "assets/js/63.c5232d51.js",
    "revision": "54ad06bb09aee087df57754095102fb0"
  },
  {
    "url": "assets/js/64.3efb503c.js",
    "revision": "fb86487a594dff188183312de05315de"
  },
  {
    "url": "assets/js/65.6456f91a.js",
    "revision": "032e96f1f27addc4447161a5b9119735"
  },
  {
    "url": "assets/js/66.54e59fa4.js",
    "revision": "872b1e861ec818db401ed448187591c1"
  },
  {
    "url": "assets/js/67.732537df.js",
    "revision": "28d0ec447292bc1d1c4e439decf4a8a6"
  },
  {
    "url": "assets/js/68.7945b1e6.js",
    "revision": "e3b3a804c35e662b87ed324471fd2431"
  },
  {
    "url": "assets/js/69.874f94d3.js",
    "revision": "96f6d52e010b4366646a6086a5aecb5d"
  },
  {
    "url": "assets/js/7.6dbe8e78.js",
    "revision": "03cdc34963c5a7062c152f32c951db45"
  },
  {
    "url": "assets/js/70.4b611588.js",
    "revision": "c0ea8eec4251e78f32bcd51da2704561"
  },
  {
    "url": "assets/js/71.2af6a9e7.js",
    "revision": "d84dfd07ce78fc3d38553ce46177c476"
  },
  {
    "url": "assets/js/72.3acf8f75.js",
    "revision": "f260e39d382fc7bdd7558ab3d15fac52"
  },
  {
    "url": "assets/js/73.92cb4339.js",
    "revision": "10ad87c59923db40cdb856a25d407eec"
  },
  {
    "url": "assets/js/74.18419266.js",
    "revision": "b9defe79d3b5f5e4961edad8916f695b"
  },
  {
    "url": "assets/js/75.69dec34a.js",
    "revision": "a973c3a83db09b5e01bac1492d1ee752"
  },
  {
    "url": "assets/js/76.58e2f409.js",
    "revision": "1bc73a833043edea26642c9353b4fb48"
  },
  {
    "url": "assets/js/77.6d361c3d.js",
    "revision": "7373d9fad2c6aee7031c5e3407bc4092"
  },
  {
    "url": "assets/js/8.cc8a5134.js",
    "revision": "e7c0157409ee76b08414a9a5c95e4bf6"
  },
  {
    "url": "assets/js/9.e0f24588.js",
    "revision": "f2975c8bc31f0e10277ec1b086306f49"
  },
  {
    "url": "assets/js/app.06501edb.js",
    "revision": "fb77f8545f73b37b64887d6bce2ad28c"
  },
  {
    "url": "categories/index.html",
    "revision": "0b1ef798e88849f17416b3447618f46c"
  },
  {
    "url": "categories/个人随笔/index.html",
    "revision": "eb5fbba25f2b5986fb0bb2f357841915"
  },
  {
    "url": "categories/代码片段/index.html",
    "revision": "88d0d5f5e755015585b0de97d6377d0c"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "09528a006426ab86a0166d9d3da3d26d"
  },
  {
    "url": "categories/技术笔记/page/2/index.html",
    "revision": "a461c4f836e91baa609c2dead4ea25f8"
  },
  {
    "url": "categories/技术笔记/page/3/index.html",
    "revision": "327ff7de26637f1dddbb19efdfef3946"
  },
  {
    "url": "categories/技术笔记/page/4/index.html",
    "revision": "d89bd79874d3240ff698eeb5d14b2eb8"
  },
  {
    "url": "categories/技术笔记/page/5/index.html",
    "revision": "61565a79812b14012026204f34b77aac"
  },
  {
    "url": "code-snippets/code-2021/difference-between-js-for-loop.html",
    "revision": "84d0fcad83c3df96649ee1f41bfd33f8"
  },
  {
    "url": "code-snippets/code-2021/flaskkua-yu-shi-li.html",
    "revision": "8d5987c85bacb67e4e4cb68db692945c"
  },
  {
    "url": "code-snippets/code-2021/for-loops-array-reduce-and-method-chaining.html",
    "revision": "aa58049ff3c389833f7a9cc58b7b4ea1"
  },
  {
    "url": "code-snippets/code-2021/nodejsnei-zhi-http-server.html",
    "revision": "9cd5b3fe4844894e96df1dbf5818b10f"
  },
  {
    "url": "code-snippets/code-2021/server-sent-eventsshi-li-dai-ma.html",
    "revision": "8204a7ce20d9d69ca68c1318b1748fc1"
  },
  {
    "url": "code-snippets/code-2021/vue3shi-yong-cdnfang-shi-yin-ru-shi-li.html",
    "revision": "89f9735c1a3972c34579f6ff60f9daad"
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
    "revision": "4a34846dcd5fa839bb78fadd272e2261"
  },
  {
    "url": "logo.png",
    "revision": "dfb9cc785f85c37c4aca9566f6cda8c6"
  },
  {
    "url": "notes/browser/hui-liu-he-chong-hui.html",
    "revision": "29f374f54a6dde2e33af119d258599e2"
  },
  {
    "url": "notes/css.html",
    "revision": "9dba8d689f20f680767f2fd733ff1c37"
  },
  {
    "url": "notes/css/cssji-chu.html",
    "revision": "1bba013c3d361188a565ec6f4d4673ff"
  },
  {
    "url": "notes/css/cssxuan-ze-qi.html",
    "revision": "8bbcb8efc5afb0d3dd6b783b45fc16f5"
  },
  {
    "url": "notes/css/flexbu-ju.html",
    "revision": "306e8bea914ead1b4f906a21667ba2e8"
  },
  {
    "url": "notes/docker/docer-composeduo-rong-qi-xiang-mu.html",
    "revision": "68ee902a4a70352c02f65d0ec376dfaf"
  },
  {
    "url": "notes/docker/dockerbian-xie-jing-xiang-bing-shang-chuan.html",
    "revision": "ceff95ecb5980a773c947f71ff65085e"
  },
  {
    "url": "notes/docker/dockerjian-dan-shi-yong.html",
    "revision": "4df74d2f39db2f9ac5d11ffb490aedd3"
  },
  {
    "url": "notes/gitde-jian-dan-shi-yong.html",
    "revision": "d5b79939c709efc2e612199191853b03"
  },
  {
    "url": "notes/guide/guide-1.html",
    "revision": "8149b217d660440489b409884291f2d4"
  },
  {
    "url": "notes/guide/guide-2.html",
    "revision": "976831dffc189f80545f5f03a48cd347"
  },
  {
    "url": "notes/guide/guide-3.html",
    "revision": "5bdc7c6a0695d3d9ab2846ef8bdf364a"
  },
  {
    "url": "notes/guide/guide-4.html",
    "revision": "b52f9bb94084493cde8a397d38754184"
  },
  {
    "url": "notes/html/html5yu-yi-yuan-su.html",
    "revision": "48cf7446dcae499a4319d5ee9e8b9783"
  },
  {
    "url": "notes/html/htmlji-chu.html",
    "revision": "44a571064fda6d1b30833fa201f9c510"
  },
  {
    "url": "notes/index.html",
    "revision": "60627cc75c535adaada8dd0419534a59"
  },
  {
    "url": "notes/typescript/typescript-webpackda-bao.html",
    "revision": "d5582abeb4279d648c488f52801d1cf6"
  },
  {
    "url": "notes/typescript/typescriptbian-yi-xuan-xiang.html",
    "revision": "11b4276687b274d40c75951cfd421db9"
  },
  {
    "url": "notes/typescript/typescriptji-chu.html",
    "revision": "4e92200a8223fb8e7511e98694183ecb"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "d088e20a01b8127f01d1c130afc0bc26"
  },
  {
    "url": "tag/ci/cd/index.html",
    "revision": "60c2728828f3883441d210b2655091df"
  },
  {
    "url": "tag/css/index.html",
    "revision": "5e36c8172671801aa39a5055de47dcf7"
  },
  {
    "url": "tag/docker-compose/index.html",
    "revision": "9dcdd2e335212d90865ac7a8e725da05"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "365cf09442a5b63c667878ad0852c259"
  },
  {
    "url": "tag/element/index.html",
    "revision": "d0a70709057d3420d08d174db0a44845"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "a8190a58fbb8c04a0bd56087c42e248a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d11cafc066c5f20b7832953c3eacc17b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "caacb20c0afcac365ff72cf3d978b19a"
  },
  {
    "url": "tag/http/index.html",
    "revision": "a29440fea8a6ba9b6580077dccddba4b"
  },
  {
    "url": "tag/index.html",
    "revision": "db80230d7225b2841f9271faeb24182d"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "e889a09de876b69374e5d4f1e73fc78c"
  },
  {
    "url": "tag/node/index.html",
    "revision": "163fa8aa437b97f5659239f8f33566a4"
  },
  {
    "url": "tag/other/index.html",
    "revision": "d0b053d9cab250d4ad74ac7190535868"
  },
  {
    "url": "tag/python/index.html",
    "revision": "25930ac57aa79460a315e24337880127"
  },
  {
    "url": "tag/serverless/index.html",
    "revision": "1a0039a454abd3fe7b1e4c11e57493a9"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "8d52c343430ef68a80e2e2714d15f99d"
  },
  {
    "url": "tag/tailwind/index.html",
    "revision": "313501f2f957fb6c5434647ba8a1bc00"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "4b2753b3fddf745d70902628c6ff51bc"
  },
  {
    "url": "tag/ui/index.html",
    "revision": "9f21b7ee064f0e4a3d91c97e0e328cc8"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "7d749a427644415e43ae02577df4ca74"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "764e9ac786e38cb85749a27b643e7f93"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "7e7105dafb8b99bb85e6958a5c579cfa"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d25172e8511e6d78536c73bf7c6cfb1e"
  },
  {
    "url": "tag/yuque/index.html",
    "revision": "e7440016931e4eaa91fbdfa1dc4a03f2"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "e6098c82dfa9d555dd02db35fc4d9c5a"
  },
  {
    "url": "timeline/index.html",
    "revision": "d54dd4cc8e8669d4392d0b7a4da8c353"
  },
  {
    "url": "views/article/ji-ti-chi-zhi-de-zhe-yi-zhou.html",
    "revision": "aca83c5edbb5bdf0238fa423230f5032"
  },
  {
    "url": "views/yuque/cloudbase-frameworkchu-ci-shi-yong.html",
    "revision": "a2560e05311bd30edc636e91e04c6b56"
  },
  {
    "url": "views/yuque/commonjs-module-syntax.html",
    "revision": "efc1fb3eb9bf83ad59b98e6076bb110b"
  },
  {
    "url": "views/yuque/cypressjian-dan-shang-shou.html",
    "revision": "1eb1500bef9c4e9a0c5ef388dccec0f8"
  },
  {
    "url": "views/yuque/dao-chu-yu-que-wen-dang.html",
    "revision": "c7697af5629fafb381586404fc3a27b2"
  },
  {
    "url": "views/yuque/el-treexiu-gai-zi-jie-dian-wei-dan-xuan.html",
    "revision": "9887b19ec63885116470ce2dbc836962"
  },
  {
    "url": "views/yuque/el-uploadshang-chuan-can-shu-ji-jie-xi.html",
    "revision": "233f5c1900e443c137199bd82aae5630"
  },
  {
    "url": "views/yuque/fcc-xiang-ying-shi-webshe-ji.html",
    "revision": "e1b801d62e6c27eef5642823619836a6"
  },
  {
    "url": "views/yuque/graphqlxue-xi.html",
    "revision": "4cd79d897e0dc2fc49b172862b28afec"
  },
  {
    "url": "views/yuque/http2.0.html",
    "revision": "a39bd4e474ba4a48d5797565ad47ea85"
  },
  {
    "url": "views/yuque/javascriptshi-jian-xun-huan.html",
    "revision": "e049abf46f39a125277ecc38f1264d32"
  },
  {
    "url": "views/yuque/jian-dan-jing-tai-wen-jian-server.html",
    "revision": "255bdc0384ac72c1a0e798b26e0be4d1"
  },
  {
    "url": "views/yuque/jian-pan-shi-jian-xiang-jie.html",
    "revision": "4a006f3cd4c04e9e7a892b359b5c751b"
  },
  {
    "url": "views/yuque/jupyter-notebook.html",
    "revision": "ba08a1975847f3983c0b33b818b65796"
  },
  {
    "url": "views/yuque/maridban-zhuang-ji-yuan-cheng-lian-jie.html",
    "revision": "56864ed2acb97c2d92cfec2ac873ed13"
  },
  {
    "url": "views/yuque/pandasdu-xie-csvji-zhui-jia.html",
    "revision": "b9516410c4a94e2f6ade183a23919826"
  },
  {
    "url": "views/yuque/picgo-githubtu-chuang.html",
    "revision": "6664550dca450b5e433b10dca9a7b728"
  },
  {
    "url": "views/yuque/promiseji-lu.html",
    "revision": "aae94abfa4107ed6df6962480e3e39d8"
  },
  {
    "url": "views/yuque/python-bao-zhi-zuo-liu-cheng.html",
    "revision": "278712b5cf2f7c26590be28f6da411ea"
  },
  {
    "url": "views/yuque/pythonjiang-wu-xian-fen-lei-jie-gou-shu-ju-zhuan-wei-json.html",
    "revision": "1d6946cd8719cdcd32aadd79004de5de"
  },
  {
    "url": "views/yuque/ru-he-chu-li-jsonwen-jian-jie-wei-de-dou-hao.html",
    "revision": "1197ed5b67b9948e5a52fe2f65da45c9"
  },
  {
    "url": "views/yuque/ru-he-pi-liang-dao-ru-a-li-icon.html",
    "revision": "4e454efb2674ab35ba3d3705b435c3ca"
  },
  {
    "url": "views/yuque/shi-yong-aria2pi-liang-xia-zai-shi-pin.html",
    "revision": "f64b9c5846fc7afa1e5d6830fda6ce92"
  },
  {
    "url": "views/yuque/shi-yong-marpzhi-zuo-ppt.html",
    "revision": "a93a647e1d1a8b0f1ff7f7a6e306007b"
  },
  {
    "url": "views/yuque/slidev-shi-yong-ji-lu.html",
    "revision": "915c97fd04afa9493992af4c5ea55e43"
  },
  {
    "url": "views/yuque/ti-sheng-githubdai-ma-la-qu-su-du.html",
    "revision": "e432e44194d14e2d6042ef60408a8336"
  },
  {
    "url": "views/yuque/vscode-cha-jian.html",
    "revision": "1c3bc5fea03ea1dd240a56878a631ccc"
  },
  {
    "url": "views/yuque/vscodekuai-jie-jian.html",
    "revision": "d8cb6917fedb7e9bf6010c6c422d2cfc"
  },
  {
    "url": "views/yuque/vue2-pei-zhi-tailwind-css.html",
    "revision": "7184e21f742d067eb40d07bac3b413c0"
  },
  {
    "url": "views/yuque/vuepressbo-ke-da-jian.html",
    "revision": "9afff23d1abc4c34ebde1f438d824173"
  },
  {
    "url": "views/yuque/vuepressyu-que-yun-duan-xie-zuo-github-actionschi-xu-ji-cheng.html",
    "revision": "ff78e050b74aa82266885ce08edb29ef"
  },
  {
    "url": "views/yuque/vuezi-dong-jian-ce-shua-xin-index.html.html",
    "revision": "a7d0e2d0a1f3cf768861b327fb6d8572"
  },
  {
    "url": "views/yuque/wang-luo-apishou-cang.html",
    "revision": "2eeb7690d21aaa39a19a2f51ae5543ee"
  },
  {
    "url": "views/yuque/win10chang-yong-ruan-jian-an-zhuang.html",
    "revision": "115fd4cd58a931888c5c517b99dd74e1"
  },
  {
    "url": "views/yuque/yamlwen-jian-ge-shi-ji-pythonjie-xi.html",
    "revision": "c3f9fff811cf8dbae34a49c5c0b890de"
  },
  {
    "url": "views/yuque/yapian-zhuang-ji-lu.html",
    "revision": "908d128ba060c9d02e93bd0da5a1348d"
  },
  {
    "url": "views/yuque/yu-que-tu-chuang-fang-dao-lian-lin-shi-jie-jue-ban-fa.html",
    "revision": "bac9bc227d98322c41da70fecc4e8c51"
  },
  {
    "url": "views/yuque/yun-fu-wu-qi-sambashe-zhi.html",
    "revision": "dc0bf0c33d164ef43fa1930bda0d99df"
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
