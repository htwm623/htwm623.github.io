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
    "revision": "857d3c4b5baed55b97ee44805c08eb4d"
  },
  {
    "url": "about/index.html",
    "revision": "d9314b8f461e158efa722444a99fec17"
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
    "url": "assets/js/12.e5e61449.js",
    "revision": "cc16f9c19ebbbaa744543f2204a29d79"
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
    "url": "assets/js/27.c58c172d.js",
    "revision": "8e9a5343444a3f3682c72d7600cd677a"
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
    "url": "assets/js/39.527e2bf9.js",
    "revision": "f06d6f36ecf17f5993dffc2d2b709dc2"
  },
  {
    "url": "assets/js/4.298e0eb4.js",
    "revision": "f337ca3008c7f230828623dbfbcdc813"
  },
  {
    "url": "assets/js/40.bfc00f5c.js",
    "revision": "d45c3121cf1a8a5f7c8f6a3433874d61"
  },
  {
    "url": "assets/js/41.d7146f5d.js",
    "revision": "b3c9337910c8192da5c09e65b4975579"
  },
  {
    "url": "assets/js/42.2e6d8933.js",
    "revision": "eda203715d675f7846c3fbad9954b68e"
  },
  {
    "url": "assets/js/43.58e94af7.js",
    "revision": "567bc89e325a9d94359cfeafe7952559"
  },
  {
    "url": "assets/js/44.a0a3a820.js",
    "revision": "66d3a8e81b8ac5e4d556fa93fdba8a8e"
  },
  {
    "url": "assets/js/45.f8ad1acd.js",
    "revision": "6e07062c2fd63ab6c34074cd00dfe47a"
  },
  {
    "url": "assets/js/46.06658ce8.js",
    "revision": "0ad6f10044ee1a9b090767b6e88879fa"
  },
  {
    "url": "assets/js/47.74d7201f.js",
    "revision": "1a02eaeb546a91bbacb00962bf66d63c"
  },
  {
    "url": "assets/js/48.ddb57ecc.js",
    "revision": "ea3e210b2329e5d165ed44120eb595d7"
  },
  {
    "url": "assets/js/49.df6cedaf.js",
    "revision": "ce988171c529a6a111903e85c5b68db0"
  },
  {
    "url": "assets/js/5.12bcd2b3.js",
    "revision": "5a329391d493aab67a0f95984be4ff21"
  },
  {
    "url": "assets/js/50.89437d66.js",
    "revision": "90e8eb77a39debc9e21d4ea3bb200423"
  },
  {
    "url": "assets/js/51.23c68cb9.js",
    "revision": "1aeacd25718c5383dd100f061c92dfcd"
  },
  {
    "url": "assets/js/52.e5a3b32b.js",
    "revision": "12f53377041589afdba3b17234a804e1"
  },
  {
    "url": "assets/js/53.f98fab33.js",
    "revision": "f57eb05f3c0ad6bebe49d217af04c0b2"
  },
  {
    "url": "assets/js/54.594ce783.js",
    "revision": "ed0cfd6454b08dcf385ccf4d7705de99"
  },
  {
    "url": "assets/js/55.09f1daee.js",
    "revision": "7afaac948db7623fcb327ae935becc1d"
  },
  {
    "url": "assets/js/56.ca03b595.js",
    "revision": "02f3189dd730b5a405a35356a9476b86"
  },
  {
    "url": "assets/js/57.b8ccdcd7.js",
    "revision": "03005b0052487615c0d05dd1348bbcf2"
  },
  {
    "url": "assets/js/58.42cbcfd4.js",
    "revision": "460866af09f45fa37e9214e2b717b2ce"
  },
  {
    "url": "assets/js/59.e0c690bf.js",
    "revision": "389192b04b1069020183346e5f45259a"
  },
  {
    "url": "assets/js/6.e2b3eb74.js",
    "revision": "e271233564cadbf97bc4da79e1189fb9"
  },
  {
    "url": "assets/js/60.ef30518f.js",
    "revision": "5ef74cfc4a92344deda90073d26b849a"
  },
  {
    "url": "assets/js/61.6d35e807.js",
    "revision": "fc0b996f7b7e17497aeb50d79a1a54b1"
  },
  {
    "url": "assets/js/62.d47dff29.js",
    "revision": "2f928d6cef297b2e72122f35c0cf9a28"
  },
  {
    "url": "assets/js/63.e583def1.js",
    "revision": "d287022b3be13444037904dcfad1ffb3"
  },
  {
    "url": "assets/js/64.c9dafab4.js",
    "revision": "f9f05177c6715aed834a59dbf413a03d"
  },
  {
    "url": "assets/js/65.e5f8e7fd.js",
    "revision": "89c2319206e83b57dd4be15f7bd70085"
  },
  {
    "url": "assets/js/66.eeb0ba2b.js",
    "revision": "dd7470d8d5e2912b8967fac07f938179"
  },
  {
    "url": "assets/js/67.7407eef4.js",
    "revision": "42aef48c674e01ce1fd99678835707b8"
  },
  {
    "url": "assets/js/68.0fe8c7e8.js",
    "revision": "ada3ddea6fe4155e71cda46e9f7e2532"
  },
  {
    "url": "assets/js/69.ffc6d7f8.js",
    "revision": "9175e07f90afd9272dc1ee0a9ce703fb"
  },
  {
    "url": "assets/js/7.6dbe8e78.js",
    "revision": "03cdc34963c5a7062c152f32c951db45"
  },
  {
    "url": "assets/js/70.384e4b82.js",
    "revision": "bf56ddea1f1253902798ea26a43d12c2"
  },
  {
    "url": "assets/js/71.cac48817.js",
    "revision": "59ef2394b584302f143cbad126b263a1"
  },
  {
    "url": "assets/js/72.5e81ff21.js",
    "revision": "2440cddbc5814c9fd64d7c82425121f5"
  },
  {
    "url": "assets/js/73.d89c8c14.js",
    "revision": "7c6b6f72d3ca65c0f29c3e96f206a6b9"
  },
  {
    "url": "assets/js/74.5362eb52.js",
    "revision": "5abf47645d069d9a7ef3312086aea84b"
  },
  {
    "url": "assets/js/75.aa4351fb.js",
    "revision": "355f6982462661eec06877b7b7d9a976"
  },
  {
    "url": "assets/js/8.cc8a5134.js",
    "revision": "e7c0157409ee76b08414a9a5c95e4bf6"
  },
  {
    "url": "assets/js/9.21eec2e2.js",
    "revision": "be2e3b2d3fa222868af529aac991e08e"
  },
  {
    "url": "assets/js/app.b95e05b2.js",
    "revision": "36853a86f457076ef12c72ddd76345ce"
  },
  {
    "url": "categories/index.html",
    "revision": "ce1c833853cfca7ff7047e9f5e01f47f"
  },
  {
    "url": "categories/代码片段/index.html",
    "revision": "5c670eec47178d1bae6ce306893e86db"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "5e19a74942eb054a1dd8f4c8ad44ae3e"
  },
  {
    "url": "categories/技术笔记/page/2/index.html",
    "revision": "697da50815d1956310cdd52d6eca7427"
  },
  {
    "url": "categories/技术笔记/page/3/index.html",
    "revision": "94b46eeb12f77b015014cfbeb1afeb27"
  },
  {
    "url": "categories/技术笔记/page/4/index.html",
    "revision": "f64db5a9f00952ba85c2ab69da39d1ff"
  },
  {
    "url": "categories/技术笔记/page/5/index.html",
    "revision": "b5d41ad1829ce9c7156737fd98462c7a"
  },
  {
    "url": "code-snippets/code-2021/difference-between-js-for-loop.html",
    "revision": "917a12199b451dced8f07a47538c5a5f"
  },
  {
    "url": "code-snippets/code-2021/flaskkua-yu-shi-li.html",
    "revision": "a7163378759c0494a4e70389366cb312"
  },
  {
    "url": "code-snippets/code-2021/for-loops-array-reduce-and-method-chaining.html",
    "revision": "0e108c75ad72f110502dd40d114f1dc3"
  },
  {
    "url": "code-snippets/code-2021/nodejsnei-zhi-http-server.html",
    "revision": "48019bbb5453f23bcbdc82e711ce1e82"
  },
  {
    "url": "code-snippets/code-2021/server-sent-eventsshi-li-dai-ma.html",
    "revision": "261ef9b983d71958bc3bb4d98b4ca537"
  },
  {
    "url": "code-snippets/code-2021/vue3shi-yong-cdnfang-shi-yin-ru-shi-li.html",
    "revision": "7b16c33793ef12156d6ae1965b9aaf13"
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
    "revision": "183c6a0e41cc9e3590b22239a2ceae50"
  },
  {
    "url": "logo.png",
    "revision": "dfb9cc785f85c37c4aca9566f6cda8c6"
  },
  {
    "url": "notes/browser/hui-liu-he-chong-hui.html",
    "revision": "dfed32040a1f6d90bca83c412ba8b71e"
  },
  {
    "url": "notes/css.html",
    "revision": "6525dafaf8936fb47b3137a0969ac443"
  },
  {
    "url": "notes/css/cssji-chu.html",
    "revision": "589c6feb65a14b6fa22de27838c22195"
  },
  {
    "url": "notes/css/cssxuan-ze-qi.html",
    "revision": "66303b9f610bfc230dca66b443941770"
  },
  {
    "url": "notes/css/flexbu-ju.html",
    "revision": "9ee5aed58c2164934646491e02c49721"
  },
  {
    "url": "notes/docker/docer-composeduo-rong-qi-xiang-mu.html",
    "revision": "6120d033a83ab65a3b713ae3d9a479e9"
  },
  {
    "url": "notes/docker/dockerbian-xie-jing-xiang-bing-shang-chuan.html",
    "revision": "45f7461dbb666b53343f0049da5619d9"
  },
  {
    "url": "notes/docker/dockerjian-dan-shi-yong.html",
    "revision": "5a406acc917faf203cc64f1ca964eadb"
  },
  {
    "url": "notes/gitde-jian-dan-shi-yong.html",
    "revision": "2b4046a3f93e87fb3f31b1e3a4f0dc85"
  },
  {
    "url": "notes/guide/guide-1.html",
    "revision": "8a21948758fec73b4b09e215091ca22f"
  },
  {
    "url": "notes/guide/guide-2.html",
    "revision": "b9fb6e94cf9f00d1fe9093a0de36a998"
  },
  {
    "url": "notes/guide/guide-3.html",
    "revision": "2fda4dd2318a4749d3faf8c71fd1ec88"
  },
  {
    "url": "notes/guide/guide-4.html",
    "revision": "d242149c661e7fabc5925f1c0e341501"
  },
  {
    "url": "notes/html/html5yu-yi-yuan-su.html",
    "revision": "50b5be8dd3a967801cb86fab501d8017"
  },
  {
    "url": "notes/html/htmlji-chu.html",
    "revision": "5e7d7310d149c5b05a44bd3b7bbbddd8"
  },
  {
    "url": "notes/index.html",
    "revision": "3290eb499ffa57b01b19d5bae870595f"
  },
  {
    "url": "notes/typescript/typescript-webpackda-bao.html",
    "revision": "6bd41c6bd9b490c6d24797529a26e37f"
  },
  {
    "url": "notes/typescript/typescriptbian-yi-xuan-xiang.html",
    "revision": "0166b0bfe029edf3609ab591c6802ee7"
  },
  {
    "url": "notes/typescript/typescriptji-chu.html",
    "revision": "eb36d25d4afa10efad12a5700dc05716"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "3ae190486602f90dbba73da23b63513a"
  },
  {
    "url": "tag/ci/cd/index.html",
    "revision": "d8dfc07c3dc11f670947fce60d8e9483"
  },
  {
    "url": "tag/css/index.html",
    "revision": "bbcf639dcbb0f5f881fd2e57353ac67d"
  },
  {
    "url": "tag/docker-compose/index.html",
    "revision": "6e75f6e7d0f663adacd9fcfd8a806872"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "672171f04f0bbdf556ddc3bd2d41bb03"
  },
  {
    "url": "tag/element/index.html",
    "revision": "30d692b56b0f42e0f67cb2ece1a46893"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "c4936193e3e246ca707e2938896b7eb7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b90e42b2ae8c60db9b69eaabc36ad8df"
  },
  {
    "url": "tag/html/index.html",
    "revision": "83a5e4785618227de48600f352bcba9b"
  },
  {
    "url": "tag/http/index.html",
    "revision": "f0b25ad8b0d30a3ec1ea824a79d0e18d"
  },
  {
    "url": "tag/index.html",
    "revision": "b8157d4a158133410ba4b25c05ca1e66"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "39f0507a5c5ff23ef974793fb3c47c82"
  },
  {
    "url": "tag/node/index.html",
    "revision": "47525ec057169369099161a69931b777"
  },
  {
    "url": "tag/other/index.html",
    "revision": "c1a948b4c392ebfcfcb3890a35661e71"
  },
  {
    "url": "tag/python/index.html",
    "revision": "3e8bc0f1ffce9a5cdc6cd702f2fbd805"
  },
  {
    "url": "tag/serverless/index.html",
    "revision": "e0c036cb89b2ea9be65e18aec8115f9d"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "4ad94c9121ca324808090dd53a0b52fb"
  },
  {
    "url": "tag/tailwind/index.html",
    "revision": "8b6a64c006f5790fe2d18ae271de2c85"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "61d11168f5950597695084ebeb2163d5"
  },
  {
    "url": "tag/ui/index.html",
    "revision": "5e41ce341c07f1cf6951b682a14fd250"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "a0ff2ea22e18dc1754ffbe309a8f3c5a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e797dfd7bb9bfe8e62dbb7300d893c2d"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "e4855d2f77f8f7e5ee5b3e8f8f8d36f7"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "78046c2bedd23bf3c799e0b33d34dcf1"
  },
  {
    "url": "tag/yuque/index.html",
    "revision": "be9aae8d6823768c3f1769fc0606b9ff"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "ad10c394bcf71d163b75fe4591b75df4"
  },
  {
    "url": "timeline/index.html",
    "revision": "8af84693d8864412805094ef1430d5c8"
  },
  {
    "url": "views/yuque/cloudbase-frameworkchu-ci-shi-yong.html",
    "revision": "89a28eb69a8836f5b8f7730f7df33c1a"
  },
  {
    "url": "views/yuque/commonjs-module-syntax.html",
    "revision": "0473ba3d6275ef8a0f8111b8becc3639"
  },
  {
    "url": "views/yuque/cypressjian-dan-shang-shou.html",
    "revision": "0c7ffe77878c8de60bce7baabc5f6dda"
  },
  {
    "url": "views/yuque/dao-chu-yu-que-wen-dang.html",
    "revision": "6925d970819750f6d7f7f76958551147"
  },
  {
    "url": "views/yuque/el-treexiu-gai-zi-jie-dian-wei-dan-xuan.html",
    "revision": "17a578ad2bf28f30da81efdf4c0c07a2"
  },
  {
    "url": "views/yuque/el-uploadshang-chuan-can-shu-ji-jie-xi.html",
    "revision": "ade65b2b7b0b692ec759d0f19e739287"
  },
  {
    "url": "views/yuque/fcc-xiang-ying-shi-webshe-ji.html",
    "revision": "b6c787429a610046441d67b4b3a2b48c"
  },
  {
    "url": "views/yuque/graphqlxue-xi.html",
    "revision": "1595603394b4c4ff502d3186e2dbbad8"
  },
  {
    "url": "views/yuque/javascriptshi-jian-xun-huan.html",
    "revision": "1f4ce5170fd0cda8db3515dbd9da5be3"
  },
  {
    "url": "views/yuque/jian-dan-jing-tai-wen-jian-server.html",
    "revision": "17e8483f0f51198c42b2cd9cbb14b45b"
  },
  {
    "url": "views/yuque/jian-pan-shi-jian-xiang-jie.html",
    "revision": "722f2eb57c49b4643050aac3a9fe4128"
  },
  {
    "url": "views/yuque/jupyter-notebook.html",
    "revision": "c163af9d2bd29d34df9acb2004cbe72b"
  },
  {
    "url": "views/yuque/maridban-zhuang-ji-yuan-cheng-lian-jie.html",
    "revision": "1caa65e4f8ef418670496d4a6f6c185d"
  },
  {
    "url": "views/yuque/pandasdu-xie-csvji-zhui-jia.html",
    "revision": "0272441c5eec4ed031833ab341fec7b0"
  },
  {
    "url": "views/yuque/picgo-githubtu-chuang.html",
    "revision": "d1fc0bf2e01cc42fb304d57c1a847ed3"
  },
  {
    "url": "views/yuque/promiseji-lu.html",
    "revision": "fd1f73107757c452f41322c65c4ad6d0"
  },
  {
    "url": "views/yuque/python-bao-zhi-zuo-liu-cheng.html",
    "revision": "a2b2b4d9e7862c41549dd21b8f454266"
  },
  {
    "url": "views/yuque/pythonjiang-wu-xian-fen-lei-jie-gou-shu-ju-zhuan-wei-json.html",
    "revision": "acb2abd261be752bf12bf18b3e284e3f"
  },
  {
    "url": "views/yuque/ru-he-chu-li-jsonwen-jian-jie-wei-de-dou-hao.html",
    "revision": "7e0b68536280cedc8eebb9ec8fe0fdad"
  },
  {
    "url": "views/yuque/ru-he-pi-liang-dao-ru-a-li-icon.html",
    "revision": "36e0583fcc9576b7d6b6b267108f056b"
  },
  {
    "url": "views/yuque/shi-yong-aria2pi-liang-xia-zai-shi-pin.html",
    "revision": "2deb1332875dd0fb8ac1f87d5289f6a6"
  },
  {
    "url": "views/yuque/shi-yong-marpzhi-zuo-ppt.html",
    "revision": "a0e3ee1571ec955287ccf411aa0df9d5"
  },
  {
    "url": "views/yuque/slidev-shi-yong-ji-lu.html",
    "revision": "ce0931c846a2350e22b9f1692d39347f"
  },
  {
    "url": "views/yuque/ti-sheng-githubdai-ma-la-qu-su-du.html",
    "revision": "a87e73c417fb327ec599e29c0b9162ce"
  },
  {
    "url": "views/yuque/vscode-cha-jian.html",
    "revision": "01c2a0d23aff1d94f35b52e6aedc3949"
  },
  {
    "url": "views/yuque/vscodekuai-jie-jian.html",
    "revision": "c7e1842dbb169c43fc2fa3426921cf32"
  },
  {
    "url": "views/yuque/vue2-pei-zhi-tailwind-css.html",
    "revision": "99d4fd3499089d8d5f7f9930a3d10cd3"
  },
  {
    "url": "views/yuque/vuepressbo-ke-da-jian.html",
    "revision": "8e4ce84b3bbad1fec342b8ad9c9d5011"
  },
  {
    "url": "views/yuque/vuepressyu-que-yun-duan-xie-zuo-github-actionschi-xu-ji-cheng.html",
    "revision": "3b19522760c8b7b702f0a719ef552cb4"
  },
  {
    "url": "views/yuque/vuezi-dong-jian-ce-shua-xin-index.html.html",
    "revision": "40537bea8398c0dd928de2c6e2b52d40"
  },
  {
    "url": "views/yuque/wang-luo-apishou-cang.html",
    "revision": "a3a513965c53e15f01b7de8b1d446979"
  },
  {
    "url": "views/yuque/win10chang-yong-ruan-jian-an-zhuang.html",
    "revision": "0fa511234829288c1928b54bb2e3a5bd"
  },
  {
    "url": "views/yuque/yamlwen-jian-ge-shi-ji-pythonjie-xi.html",
    "revision": "203d769b7a1a847ebbe4fd324648c081"
  },
  {
    "url": "views/yuque/yapian-zhuang-ji-lu.html",
    "revision": "77b0200fc8df56794f9a06dc5937f5ea"
  },
  {
    "url": "views/yuque/yu-que-tu-chuang-fang-dao-lian-lin-shi-jie-jue-ban-fa.html",
    "revision": "86fe6c0a5f84deb5a5faeb5988ac9858"
  },
  {
    "url": "views/yuque/yun-fu-wu-qi-sambashe-zhi.html",
    "revision": "79601a7413dd71083cf4d196b757f919"
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
