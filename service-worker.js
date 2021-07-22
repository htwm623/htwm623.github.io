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
    "revision": "d7938ff662295bb42fae8c49c1220945"
  },
  {
    "url": "about/index.html",
    "revision": "0c99c136bc33f76720c18f06b44ddc67"
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
    "url": "assets/js/12.4fbe8aaf.js",
    "revision": "a2f68dc9ad5923d5d9fd081f385094f8"
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
    "url": "assets/js/77.5b8104c1.js",
    "revision": "12fa973fbced578d23773e1efc7a8a95"
  },
  {
    "url": "assets/js/78.62b53f44.js",
    "revision": "88fca264eb3d93f0ec6961e36db10a78"
  },
  {
    "url": "assets/js/8.cc8a5134.js",
    "revision": "e7c0157409ee76b08414a9a5c95e4bf6"
  },
  {
    "url": "assets/js/9.eb8de240.js",
    "revision": "316c393564ca6c0d8d6a3f016f412be4"
  },
  {
    "url": "assets/js/app.8bc0c865.js",
    "revision": "9add2651df30dd24b689361bf82162e4"
  },
  {
    "url": "categories/index.html",
    "revision": "369f36843ec414e12834f2cf29dec2e8"
  },
  {
    "url": "categories/个人随笔/index.html",
    "revision": "b42d17242b0a948d562daf82c6e3f294"
  },
  {
    "url": "categories/代码片段/index.html",
    "revision": "cf0b59f8339dcda6918f8674164953bb"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "09a0501c5f233b027636a6d6d83c9f16"
  },
  {
    "url": "categories/技术笔记/page/2/index.html",
    "revision": "fa38a646de3140c6ad87fafaa7a4144f"
  },
  {
    "url": "categories/技术笔记/page/3/index.html",
    "revision": "72ff8b91108da3e5dc7c91aa14fae96a"
  },
  {
    "url": "categories/技术笔记/page/4/index.html",
    "revision": "2fce59c305f965093db717e66287591a"
  },
  {
    "url": "categories/技术笔记/page/5/index.html",
    "revision": "a6eb51bf69110bec56eae89e64657d3b"
  },
  {
    "url": "categories/技术笔记/page/6/index.html",
    "revision": "9da3bada720ccc037b011eafc241cf21"
  },
  {
    "url": "code-snippets/code-2021/difference-between-js-for-loop.html",
    "revision": "84028adc4033475e0c6ff24c43241ea2"
  },
  {
    "url": "code-snippets/code-2021/flaskkua-yu-shi-li.html",
    "revision": "10ac6f587529e120fde381491da2dce1"
  },
  {
    "url": "code-snippets/code-2021/for-loops-array-reduce-and-method-chaining.html",
    "revision": "a64662f5d6da00b5bc9dd19a279f59b8"
  },
  {
    "url": "code-snippets/code-2021/nodejsnei-zhi-http-server.html",
    "revision": "6bec843c661f6af54b0a85b5876e883b"
  },
  {
    "url": "code-snippets/code-2021/server-sent-eventsshi-li-dai-ma.html",
    "revision": "9ea5ab6076640b335d3eddef726633ba"
  },
  {
    "url": "code-snippets/code-2021/vue3shi-yong-cdnfang-shi-yin-ru-shi-li.html",
    "revision": "d29b7f7f2a3a1c50758d906ef5a2de9b"
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
    "revision": "1eba80f714faa754cc3bafd06aafd8cb"
  },
  {
    "url": "logo.png",
    "revision": "dfb9cc785f85c37c4aca9566f6cda8c6"
  },
  {
    "url": "notes/browser/hui-liu-he-chong-hui.html",
    "revision": "8f3a23da455d13443206c1b8ea158afb"
  },
  {
    "url": "notes/css.html",
    "revision": "4b46c124283297ac53d03ab172527a48"
  },
  {
    "url": "notes/css/cssji-chu.html",
    "revision": "a2762cd942e69379a86b4a7137d7605b"
  },
  {
    "url": "notes/css/cssxuan-ze-qi.html",
    "revision": "0fa6a18434f1fcc79e400c7a29c5aa0c"
  },
  {
    "url": "notes/css/flexbu-ju.html",
    "revision": "7e1342ad271f74f6a311aace4d34667e"
  },
  {
    "url": "notes/docker/docer-composeduo-rong-qi-xiang-mu.html",
    "revision": "0b94d2b61702545b67b948b9808fcecd"
  },
  {
    "url": "notes/docker/dockerbian-xie-jing-xiang-bing-shang-chuan.html",
    "revision": "adf24d0f93a324f057630eb1528a8101"
  },
  {
    "url": "notes/docker/dockerjian-dan-shi-yong.html",
    "revision": "71477b9f8350845c6999467a857e3c9d"
  },
  {
    "url": "notes/gitde-jian-dan-shi-yong.html",
    "revision": "1db0cddc1aa1849c0d5e76b46d4d6b4e"
  },
  {
    "url": "notes/guide/guide-1.html",
    "revision": "87cd86ab06e5ecb92ba8403967d6ce9f"
  },
  {
    "url": "notes/guide/guide-2.html",
    "revision": "88eb35583f0c21eee14501af6f2b050a"
  },
  {
    "url": "notes/guide/guide-3.html",
    "revision": "264edc2c743363f14e8413f39dfb4141"
  },
  {
    "url": "notes/guide/guide-4.html",
    "revision": "e5a8e21df9918c065023a095a3a04620"
  },
  {
    "url": "notes/html/html5yu-yi-yuan-su.html",
    "revision": "b18506157a923e1178b6da8b200abd8c"
  },
  {
    "url": "notes/html/htmlji-chu.html",
    "revision": "5dd98d817cb0af301cb88d4209f2913d"
  },
  {
    "url": "notes/index.html",
    "revision": "36c8488ae93f10018686c944efb1709c"
  },
  {
    "url": "notes/typescript/typescript-webpackda-bao.html",
    "revision": "9c9dbab61d0faffd555cc644bf2b5ee7"
  },
  {
    "url": "notes/typescript/typescriptbian-yi-xuan-xiang.html",
    "revision": "0584042bd59c877da8137d7a2a623104"
  },
  {
    "url": "notes/typescript/typescriptji-chu.html",
    "revision": "1e08b85eeac5c5710081283c3f429040"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "c4fa801975f60e9bee5043ffa80c3edb"
  },
  {
    "url": "tag/ci/cd/index.html",
    "revision": "12997018f1c71195ec6e2e166f9c805d"
  },
  {
    "url": "tag/css/index.html",
    "revision": "6b10564319d69b9f101c5f0cd9e41fbd"
  },
  {
    "url": "tag/docker-compose/index.html",
    "revision": "9adbfd628c105a41b215be8d1eff2ba7"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "64f09cce5581590c52b478f1d27a72a6"
  },
  {
    "url": "tag/element/index.html",
    "revision": "9cb572817595f592488db1f4fb29d6bc"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "82e49827138d5c9e1c81b38125c3cef3"
  },
  {
    "url": "tag/git/index.html",
    "revision": "effe8b7f86a047131aff787e4bfe18d9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "f6dc72eff644bfd0f910c5767e1faf13"
  },
  {
    "url": "tag/http/index.html",
    "revision": "a3db010e71c87c1d6030d31c8cbb2349"
  },
  {
    "url": "tag/index.html",
    "revision": "5b86de3b1325da59f459c11a14317b77"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "b2a302f825a88601e80e17f1caf1abd1"
  },
  {
    "url": "tag/node/index.html",
    "revision": "660998690065d028a3ec389ff5bd1df8"
  },
  {
    "url": "tag/other/index.html",
    "revision": "c39f8b0a77620f911c3d0d41bfc3f79b"
  },
  {
    "url": "tag/python/index.html",
    "revision": "80a158aa80b46932078fc98b946cdb74"
  },
  {
    "url": "tag/serverless/index.html",
    "revision": "2bbfb993d20dfb192842cbe031cf073d"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "b2cd27b349cbcd6164d861f562c4b47b"
  },
  {
    "url": "tag/tailwind/index.html",
    "revision": "66205a26b85eff2303053224f239f2c2"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "4f025a95a7a7fa09e50096539c659a19"
  },
  {
    "url": "tag/ui/index.html",
    "revision": "3ef402307eaa9a0ee3fc2cb232a8598b"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "7ee2ca91ddd2c1748e2f9f5b5a556064"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4452a8be769d648b5557852ddc5a343a"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "d9406575937339c734f35fd3c49b62da"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "84a3fabffaabf37503662c1558c30d6c"
  },
  {
    "url": "tag/yuque/index.html",
    "revision": "b3600f8ec9d217758aca7fd3f406ea3f"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "09416beb7a30bcb4f55c5c3bfc2941c0"
  },
  {
    "url": "timeline/index.html",
    "revision": "31f5a804705d9e87ee33a9dedfcd5a86"
  },
  {
    "url": "views/article/ji-ti-chi-zhi-de-zhe-yi-zhou.html",
    "revision": "12f23e6dfcd250a94d64c8c88ebc6a03"
  },
  {
    "url": "views/yuque/cloudbase-frameworkchu-ci-shi-yong.html",
    "revision": "755249facdf9cb71247414d569cdb3c2"
  },
  {
    "url": "views/yuque/commonjs-module-syntax.html",
    "revision": "d40ab7cd10abde48e5b98871e1a5f636"
  },
  {
    "url": "views/yuque/cypressjian-dan-shang-shou.html",
    "revision": "0a7ab1dd99c26ed9a83b03c7eee13a27"
  },
  {
    "url": "views/yuque/dao-chu-yu-que-wen-dang.html",
    "revision": "d56979cd006afa9a14316a81ca689f84"
  },
  {
    "url": "views/yuque/el-treexiu-gai-zi-jie-dian-wei-dan-xuan.html",
    "revision": "3839182cef8615b2ce9df9fe8bd75e81"
  },
  {
    "url": "views/yuque/el-uploadshang-chuan-can-shu-ji-jie-xi.html",
    "revision": "7a1c5573d24b709189aeac17e71a3add"
  },
  {
    "url": "views/yuque/fcc-xiang-ying-shi-webshe-ji.html",
    "revision": "4a0dbd793bf91084a825ecef61d646bd"
  },
  {
    "url": "views/yuque/graphqlxue-xi.html",
    "revision": "61a9cb2596faae903e2789b29061e943"
  },
  {
    "url": "views/yuque/http2.0.html",
    "revision": "574720682e6ec28936095611b06d8370"
  },
  {
    "url": "views/yuque/javascriptshi-jian-xun-huan.html",
    "revision": "a50b33df13ad8bfbea46224d9af1ef9c"
  },
  {
    "url": "views/yuque/jian-dan-jing-tai-wen-jian-server.html",
    "revision": "5adf3496211d252e9d38f8c6438b8515"
  },
  {
    "url": "views/yuque/jian-pan-shi-jian-xiang-jie.html",
    "revision": "8d53d615f2c12e645a53c932db5bb31a"
  },
  {
    "url": "views/yuque/jupyter-notebook.html",
    "revision": "4594b0014f183c6e330ecfa2df5bf8cb"
  },
  {
    "url": "views/yuque/maridban-zhuang-ji-yuan-cheng-lian-jie.html",
    "revision": "0bb6d3b726b9f3364839190556024895"
  },
  {
    "url": "views/yuque/mian-shi-html.html",
    "revision": "ab4360734641cd9c337bef087c4b1a12"
  },
  {
    "url": "views/yuque/pandasdu-xie-csvji-zhui-jia.html",
    "revision": "41a4be3e6900284b7073c69b1d74e2df"
  },
  {
    "url": "views/yuque/picgo-githubtu-chuang.html",
    "revision": "0f172c70c248dc3152014620cba4f2b7"
  },
  {
    "url": "views/yuque/promiseji-lu.html",
    "revision": "bc45cc4fe5531bcf3de2b249af037af8"
  },
  {
    "url": "views/yuque/python-bao-zhi-zuo-liu-cheng.html",
    "revision": "58e5d1779be53c51f3d597acc796300c"
  },
  {
    "url": "views/yuque/pythonjiang-wu-xian-fen-lei-jie-gou-shu-ju-zhuan-wei-json.html",
    "revision": "2bf6b21fc146c19a37608222fce77736"
  },
  {
    "url": "views/yuque/ru-he-chu-li-jsonwen-jian-jie-wei-de-dou-hao.html",
    "revision": "041bd9c4007808387125dd332a73c0ba"
  },
  {
    "url": "views/yuque/ru-he-pi-liang-dao-ru-a-li-icon.html",
    "revision": "fe93ec1ac56d48ed9ddb814395620388"
  },
  {
    "url": "views/yuque/shi-yong-aria2pi-liang-xia-zai-shi-pin.html",
    "revision": "363554f7b472133d3e758c349206cf6e"
  },
  {
    "url": "views/yuque/shi-yong-marpzhi-zuo-ppt.html",
    "revision": "ffb99132b8a21943a22181b84c00ca1e"
  },
  {
    "url": "views/yuque/slidev-shi-yong-ji-lu.html",
    "revision": "72de6cfd1978a7707604193a8b33f087"
  },
  {
    "url": "views/yuque/ti-sheng-githubdai-ma-la-qu-su-du.html",
    "revision": "247858d422e5a5b9882d2eb07db06263"
  },
  {
    "url": "views/yuque/vscode-cha-jian.html",
    "revision": "7549219c7f18515344a757cd0bda3950"
  },
  {
    "url": "views/yuque/vscodekuai-jie-jian.html",
    "revision": "ad9cbd0ec563598ca7d3510b283e232a"
  },
  {
    "url": "views/yuque/vue2-pei-zhi-tailwind-css.html",
    "revision": "3fa89dac69ebd137579c65e058b9cab0"
  },
  {
    "url": "views/yuque/vuepressbo-ke-da-jian.html",
    "revision": "80142cd3315b853f2e893fedba39c420"
  },
  {
    "url": "views/yuque/vuepressyu-que-yun-duan-xie-zuo-github-actionschi-xu-ji-cheng.html",
    "revision": "35ba3d23ec04c6f8213ab06969e52f6b"
  },
  {
    "url": "views/yuque/vuezi-dong-jian-ce-shua-xin-index.html.html",
    "revision": "391f4e76d271919fd2500241999b66e7"
  },
  {
    "url": "views/yuque/wang-luo-apishou-cang.html",
    "revision": "b69d8b7ae7d1973c7304365fe33c46f6"
  },
  {
    "url": "views/yuque/win10chang-yong-ruan-jian-an-zhuang.html",
    "revision": "2d331853ba1a8360cdc31885830f30b1"
  },
  {
    "url": "views/yuque/yamlwen-jian-ge-shi-ji-pythonjie-xi.html",
    "revision": "8c1ef69f669edbd94b8c46e95a354d23"
  },
  {
    "url": "views/yuque/yapian-zhuang-ji-lu.html",
    "revision": "885086156825da749654ed75bb567f5f"
  },
  {
    "url": "views/yuque/yu-que-tu-chuang-fang-dao-lian-lin-shi-jie-jue-ban-fa.html",
    "revision": "35f365f8d4cf8cb6be24e93d6c4f8e62"
  },
  {
    "url": "views/yuque/yun-fu-wu-qi-sambashe-zhi.html",
    "revision": "d2df9e413c71de49d5bab6a305404cd0"
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
