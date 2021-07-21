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
    "revision": "801fa3a618d43190938178ad5caa3fc8"
  },
  {
    "url": "about/index.html",
    "revision": "3c3f1b4b3caf09e45ee4c3f07b3a2144"
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
    "url": "assets/js/app.f70ef69c.js",
    "revision": "65a74b1e3836669436d51fe2a34f448f"
  },
  {
    "url": "categories/index.html",
    "revision": "cc39d3871210426dc03e327c575fa004"
  },
  {
    "url": "categories/个人随笔/index.html",
    "revision": "5d52bbd780462de8d38efa32abb07c7c"
  },
  {
    "url": "categories/代码片段/index.html",
    "revision": "f5fd99b8322f0415bfc090743a07cef5"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "c10268c7482e026ca600f51567d5ad97"
  },
  {
    "url": "categories/技术笔记/page/2/index.html",
    "revision": "4407bd7c371c50a9f8a62698b6098eba"
  },
  {
    "url": "categories/技术笔记/page/3/index.html",
    "revision": "bc2758e9e8060e361991795004b2c311"
  },
  {
    "url": "categories/技术笔记/page/4/index.html",
    "revision": "2363a3c34f15f0960c2c6739e786cc1b"
  },
  {
    "url": "categories/技术笔记/page/5/index.html",
    "revision": "5517037c7ecf1a014c083d0d82015c37"
  },
  {
    "url": "code-snippets/code-2021/difference-between-js-for-loop.html",
    "revision": "b20406f2b047c27783c65fbdec437511"
  },
  {
    "url": "code-snippets/code-2021/flaskkua-yu-shi-li.html",
    "revision": "09023c41b78302e43db45932c0c383bd"
  },
  {
    "url": "code-snippets/code-2021/for-loops-array-reduce-and-method-chaining.html",
    "revision": "aa44c37f45b368ca93cb6f7ddc1d30bc"
  },
  {
    "url": "code-snippets/code-2021/nodejsnei-zhi-http-server.html",
    "revision": "392338ac4dcf2beed058221ff1235591"
  },
  {
    "url": "code-snippets/code-2021/server-sent-eventsshi-li-dai-ma.html",
    "revision": "3f688ae8ddf3fb7a0e1f4bacc75e7b41"
  },
  {
    "url": "code-snippets/code-2021/vue3shi-yong-cdnfang-shi-yin-ru-shi-li.html",
    "revision": "b14c6777ab633d3c40c10d7ccf2248cd"
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
    "revision": "cd962843b88feb95cbee056c95267f6f"
  },
  {
    "url": "logo.png",
    "revision": "dfb9cc785f85c37c4aca9566f6cda8c6"
  },
  {
    "url": "notes/browser/hui-liu-he-chong-hui.html",
    "revision": "2e7c17add2566b981e15f3054fc61198"
  },
  {
    "url": "notes/css.html",
    "revision": "06c0234e4980d7d0558a963489b64f72"
  },
  {
    "url": "notes/css/cssji-chu.html",
    "revision": "78b0d49d1d10c9867d77882dbac226ab"
  },
  {
    "url": "notes/css/cssxuan-ze-qi.html",
    "revision": "43f7d425406190b7d87c20491a2cf1cc"
  },
  {
    "url": "notes/css/flexbu-ju.html",
    "revision": "75b0c3a0a044fac5c94b12c928d3be03"
  },
  {
    "url": "notes/docker/docer-composeduo-rong-qi-xiang-mu.html",
    "revision": "31309eee95f5f53d9f357770278bd556"
  },
  {
    "url": "notes/docker/dockerbian-xie-jing-xiang-bing-shang-chuan.html",
    "revision": "a48310f7d7ac72254f653dcd6d8ebd47"
  },
  {
    "url": "notes/docker/dockerjian-dan-shi-yong.html",
    "revision": "17a9fce65e5cc8dcd35b575d6fd9f05f"
  },
  {
    "url": "notes/gitde-jian-dan-shi-yong.html",
    "revision": "6e7c2d0a409ee83a70b80f483274492c"
  },
  {
    "url": "notes/guide/guide-1.html",
    "revision": "9ab353e0b9cc4931bd7a3159bb5e7660"
  },
  {
    "url": "notes/guide/guide-2.html",
    "revision": "41038b22080f797c18780e7e9ef43fb9"
  },
  {
    "url": "notes/guide/guide-3.html",
    "revision": "137819e3ab68867f44b873c39cd35008"
  },
  {
    "url": "notes/guide/guide-4.html",
    "revision": "985a82b501b65f22e68ad68cbf949d43"
  },
  {
    "url": "notes/html/html5yu-yi-yuan-su.html",
    "revision": "745385d931543bc8105070dfd3044098"
  },
  {
    "url": "notes/html/htmlji-chu.html",
    "revision": "18a4ea9ebe1b8345d6314f74e8c6f364"
  },
  {
    "url": "notes/index.html",
    "revision": "b3d9b675e8ce94b9741f0ed468e3381d"
  },
  {
    "url": "notes/typescript/typescript-webpackda-bao.html",
    "revision": "d77c15838f03d731fadbe6219fec0cf8"
  },
  {
    "url": "notes/typescript/typescriptbian-yi-xuan-xiang.html",
    "revision": "fee55af487a3dcdaeb0ce1fc48337f86"
  },
  {
    "url": "notes/typescript/typescriptji-chu.html",
    "revision": "f89f2210c0fd0be21fe4d9da370cdb1b"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "2d2a874c6afd0a385b4d5d4c48a58c69"
  },
  {
    "url": "tag/ci/cd/index.html",
    "revision": "78a670608d125785ea45a8028efc6466"
  },
  {
    "url": "tag/css/index.html",
    "revision": "b84ad7e3f7e90675b96bee9c34828234"
  },
  {
    "url": "tag/docker-compose/index.html",
    "revision": "91b7f5c23219f276f7e975b184c94a02"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "e7fa91b73478ee69f5b30282fd6924d2"
  },
  {
    "url": "tag/element/index.html",
    "revision": "05f3a12275b1c844537eab4b852a6eb6"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "a585a39d462f2d0bcff8cdcee401b492"
  },
  {
    "url": "tag/git/index.html",
    "revision": "933c3ea1df187296b150a9225ec553bf"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b0d8fa907241183ff124de2d332e1ddf"
  },
  {
    "url": "tag/http/index.html",
    "revision": "05beebfb301f83d300f8960e4e866742"
  },
  {
    "url": "tag/index.html",
    "revision": "620bbb3ed767455cf1c6ab07e19d6992"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "6ce55f5bb7c44e945f312e7233d3425c"
  },
  {
    "url": "tag/node/index.html",
    "revision": "0812130b2f874bc9bd34ea434a6574b5"
  },
  {
    "url": "tag/other/index.html",
    "revision": "a2b1b41fea47a745e72d471b12d67af9"
  },
  {
    "url": "tag/python/index.html",
    "revision": "e31e125d4b67c232260b41f9146c5f15"
  },
  {
    "url": "tag/serverless/index.html",
    "revision": "6b6de420f8c6737c2053b8ba2c4910b2"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "5177678e3be66247f71100b5ea60993f"
  },
  {
    "url": "tag/tailwind/index.html",
    "revision": "a1c60ae5a8e026f97c52951c5bd2f81f"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "005bddfdfd71af549381d0574be4db26"
  },
  {
    "url": "tag/ui/index.html",
    "revision": "378acbc0ddfd29a70dcfd89cf5e94571"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "0bd238bec952aab52ad78b0f587bb274"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1435a9c25995c82a719bc5c8f936d9a9"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "c9668d717ca6ec8470812a59375e83bb"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "51ec06c0725ea7ce0dccc853ae4da35e"
  },
  {
    "url": "tag/yuque/index.html",
    "revision": "22bebc471256500fb977670446a8677a"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "5a68dc417d8ebedf9a3bba69348a6545"
  },
  {
    "url": "timeline/index.html",
    "revision": "312753b221a9d65072e0c6b5fb3a3eca"
  },
  {
    "url": "views/article/ji-ti-chi-zhi-de-zhe-yi-zhou.html",
    "revision": "fed7dd1cfabcda96798758cd44db9a16"
  },
  {
    "url": "views/yuque/cloudbase-frameworkchu-ci-shi-yong.html",
    "revision": "88c8b4c898111918cce6157cce3fd812"
  },
  {
    "url": "views/yuque/commonjs-module-syntax.html",
    "revision": "7198066e2be5cdd059f7e9c58fca63c7"
  },
  {
    "url": "views/yuque/cypressjian-dan-shang-shou.html",
    "revision": "f620476e4ca01afb442364031204de19"
  },
  {
    "url": "views/yuque/dao-chu-yu-que-wen-dang.html",
    "revision": "cf36811f4bb13fa4df2818d221a19335"
  },
  {
    "url": "views/yuque/el-treexiu-gai-zi-jie-dian-wei-dan-xuan.html",
    "revision": "f3de14a7dcadf9eda7fa384430203c33"
  },
  {
    "url": "views/yuque/el-uploadshang-chuan-can-shu-ji-jie-xi.html",
    "revision": "36963fccf630a15a2b368b195db8413d"
  },
  {
    "url": "views/yuque/fcc-xiang-ying-shi-webshe-ji.html",
    "revision": "23d46c69961db852ec5174bde40c2208"
  },
  {
    "url": "views/yuque/graphqlxue-xi.html",
    "revision": "2e9db3026d3dcd32fbced09b0612cb3f"
  },
  {
    "url": "views/yuque/http2.0.html",
    "revision": "b70acffca6229fb11d7ee611c562bcc8"
  },
  {
    "url": "views/yuque/javascriptshi-jian-xun-huan.html",
    "revision": "0aa9d4ff720a733ca6aded3e59aa1125"
  },
  {
    "url": "views/yuque/jian-dan-jing-tai-wen-jian-server.html",
    "revision": "d36a90f67b9b80002f24f4c6f55f5a95"
  },
  {
    "url": "views/yuque/jian-pan-shi-jian-xiang-jie.html",
    "revision": "93e0cb2a31075a1c4b90d32fe59cb34d"
  },
  {
    "url": "views/yuque/jupyter-notebook.html",
    "revision": "365daa2cbe18cc48daf0491fde714b99"
  },
  {
    "url": "views/yuque/maridban-zhuang-ji-yuan-cheng-lian-jie.html",
    "revision": "eb921dbee26f618f5b47199b2a08c830"
  },
  {
    "url": "views/yuque/pandasdu-xie-csvji-zhui-jia.html",
    "revision": "92c1d57fa74f1c4a9c509021944c16a7"
  },
  {
    "url": "views/yuque/picgo-githubtu-chuang.html",
    "revision": "880f1dca6d66397da9ce813945ba0b83"
  },
  {
    "url": "views/yuque/promiseji-lu.html",
    "revision": "f0ed69941cd6bf8ab85e4bd61fb8e3b1"
  },
  {
    "url": "views/yuque/python-bao-zhi-zuo-liu-cheng.html",
    "revision": "629ed8f8a5449669676d0fcacc073dbf"
  },
  {
    "url": "views/yuque/pythonjiang-wu-xian-fen-lei-jie-gou-shu-ju-zhuan-wei-json.html",
    "revision": "2291a620be1aa1da53c5b9e70e02a341"
  },
  {
    "url": "views/yuque/ru-he-chu-li-jsonwen-jian-jie-wei-de-dou-hao.html",
    "revision": "f773a56744cbcbefa63992d8a341ef74"
  },
  {
    "url": "views/yuque/ru-he-pi-liang-dao-ru-a-li-icon.html",
    "revision": "35e0888903f07504d4383c34e070fab2"
  },
  {
    "url": "views/yuque/shi-yong-aria2pi-liang-xia-zai-shi-pin.html",
    "revision": "16a00d2ead429dc19305d1f0e2872053"
  },
  {
    "url": "views/yuque/shi-yong-marpzhi-zuo-ppt.html",
    "revision": "d5428b54b763cf288edbdd1897b24c67"
  },
  {
    "url": "views/yuque/slidev-shi-yong-ji-lu.html",
    "revision": "2e4b1e8cb18dda9fa7a32df530f0392c"
  },
  {
    "url": "views/yuque/ti-sheng-githubdai-ma-la-qu-su-du.html",
    "revision": "cb4232bd95655b1ed6479677476bcb69"
  },
  {
    "url": "views/yuque/vscode-cha-jian.html",
    "revision": "1fc79ec51560cd69e9f640fe60f6a477"
  },
  {
    "url": "views/yuque/vscodekuai-jie-jian.html",
    "revision": "e2345c447ca92f7eddad87f0c93914bb"
  },
  {
    "url": "views/yuque/vue2-pei-zhi-tailwind-css.html",
    "revision": "a9132b5a693fee5b8d6f1a3b0caccd19"
  },
  {
    "url": "views/yuque/vuepressbo-ke-da-jian.html",
    "revision": "7d8d647d4448a8072f3a11a56d87c3fb"
  },
  {
    "url": "views/yuque/vuepressyu-que-yun-duan-xie-zuo-github-actionschi-xu-ji-cheng.html",
    "revision": "4884e2f3bb392f2d95cd5b0b357443d9"
  },
  {
    "url": "views/yuque/vuezi-dong-jian-ce-shua-xin-index.html.html",
    "revision": "a1915216c959cf4490b4902fa47e26ae"
  },
  {
    "url": "views/yuque/wang-luo-apishou-cang.html",
    "revision": "aa00148310ac68ad7d40971ab845e163"
  },
  {
    "url": "views/yuque/win10chang-yong-ruan-jian-an-zhuang.html",
    "revision": "25f2728ec5c31ac6a37561d7ce56e866"
  },
  {
    "url": "views/yuque/yamlwen-jian-ge-shi-ji-pythonjie-xi.html",
    "revision": "7ffb0ced4fec67f286c03e922133b8d3"
  },
  {
    "url": "views/yuque/yapian-zhuang-ji-lu.html",
    "revision": "174351041c4b08c22b693bc8dcb57b2f"
  },
  {
    "url": "views/yuque/yu-que-tu-chuang-fang-dao-lian-lin-shi-jie-jue-ban-fa.html",
    "revision": "23d4a64af87509a8fd238d086cdcf2a8"
  },
  {
    "url": "views/yuque/yun-fu-wu-qi-sambashe-zhi.html",
    "revision": "a71bfad39f983f4dd9a57f054d933ec3"
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
