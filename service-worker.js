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
    "revision": "070256643eb7fdaa132a30e89bc06a94"
  },
  {
    "url": "about/index.html",
    "revision": "009802462fdbbc511be33b07cf491c8f"
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
    "url": "assets/js/12.f19d2a24.js",
    "revision": "c455876ca42e4f0bf97d5d4da6c767e9"
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
    "url": "assets/js/39.48cec204.js",
    "revision": "af9ba7ae65aa38bd04cb33f8727cf291"
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
    "url": "assets/js/42.ffbd0b23.js",
    "revision": "ad1308b6afa3f282a796d33a9d5b6167"
  },
  {
    "url": "assets/js/43.1819c6aa.js",
    "revision": "4fb5f000840cdd714e9d94e94d02c28c"
  },
  {
    "url": "assets/js/44.e74c5ae1.js",
    "revision": "0f5d88f802e40669a537b9fb69ed751f"
  },
  {
    "url": "assets/js/45.035430ba.js",
    "revision": "06d9150bc313063d2df126981bd7fdfc"
  },
  {
    "url": "assets/js/46.13525cc6.js",
    "revision": "6be24e0371b6cd3ac7e1ef25a7755961"
  },
  {
    "url": "assets/js/47.df9b4f9e.js",
    "revision": "50633c8a62daa674c2c1722d47581dc5"
  },
  {
    "url": "assets/js/48.4f93d712.js",
    "revision": "4aa622bd7ffd4db3985d1a879230e0b5"
  },
  {
    "url": "assets/js/49.9132ba9d.js",
    "revision": "9c316e945a4b00ab16c548b11e4cad76"
  },
  {
    "url": "assets/js/5.12bcd2b3.js",
    "revision": "5a329391d493aab67a0f95984be4ff21"
  },
  {
    "url": "assets/js/50.c382c737.js",
    "revision": "9017c58d358c572b21d85be87f800e09"
  },
  {
    "url": "assets/js/51.3ed6e8be.js",
    "revision": "26e5806ef83ca4bb424b397c6e8ccb2b"
  },
  {
    "url": "assets/js/52.2e9286cb.js",
    "revision": "dd2902bd13d647b6e45dfd1aa46c522d"
  },
  {
    "url": "assets/js/53.f68bc92d.js",
    "revision": "9800daad53f3f0f13fede2ebff382d09"
  },
  {
    "url": "assets/js/54.3f68834e.js",
    "revision": "de90a94511b5c944b0471803e79e8f69"
  },
  {
    "url": "assets/js/55.7b0c8a17.js",
    "revision": "8656def082e4822c76ee6c789075f0c8"
  },
  {
    "url": "assets/js/56.c80a964a.js",
    "revision": "2fb3010f1bcf813c49816292bb8b74d1"
  },
  {
    "url": "assets/js/57.f70954bd.js",
    "revision": "d8cbed8c35862af47ff0dc298e447df5"
  },
  {
    "url": "assets/js/58.06d993c0.js",
    "revision": "0b9bb0d96c79a6a7836fe6c25580dc33"
  },
  {
    "url": "assets/js/59.a66fc274.js",
    "revision": "6122735e1ad848f1d121ff62ff74a608"
  },
  {
    "url": "assets/js/6.e2b3eb74.js",
    "revision": "e271233564cadbf97bc4da79e1189fb9"
  },
  {
    "url": "assets/js/60.7fdeac84.js",
    "revision": "9b4b7c3da9239fe59efac5cd0ef2c6d6"
  },
  {
    "url": "assets/js/61.2adc1db7.js",
    "revision": "68dfc0be6303a1acfee2f3a5628338c7"
  },
  {
    "url": "assets/js/62.2193e8d3.js",
    "revision": "7708deb0cf6451a6f88c00c3a76bd49d"
  },
  {
    "url": "assets/js/63.68c5d165.js",
    "revision": "38aab39f3135a0baadd16f2bb31bdd01"
  },
  {
    "url": "assets/js/64.a2d4a281.js",
    "revision": "965d8683188039b34bf15dd4baa8cd78"
  },
  {
    "url": "assets/js/65.02170e12.js",
    "revision": "403a9c3d006431d73d1b5d622712b423"
  },
  {
    "url": "assets/js/66.6f9c034b.js",
    "revision": "c08263eab449eec0679bd3721d1e64e5"
  },
  {
    "url": "assets/js/67.6096c46c.js",
    "revision": "e0d9b327cf3ebc7f70d1ae443961d74b"
  },
  {
    "url": "assets/js/68.7c46fb19.js",
    "revision": "1ab35ee0d2ce26add7b7032332cd39bf"
  },
  {
    "url": "assets/js/69.438a808a.js",
    "revision": "ed10ce54922027b93110030f79474b94"
  },
  {
    "url": "assets/js/7.6dbe8e78.js",
    "revision": "03cdc34963c5a7062c152f32c951db45"
  },
  {
    "url": "assets/js/70.9a9a634f.js",
    "revision": "b5c45c6d9c8db785d02bca16e6e363c2"
  },
  {
    "url": "assets/js/71.b93355e6.js",
    "revision": "856caa3e035e9ecb28e2b29c08363b5d"
  },
  {
    "url": "assets/js/72.58dc9f69.js",
    "revision": "400cde6718336b146040c4506dd8223d"
  },
  {
    "url": "assets/js/73.62db0b95.js",
    "revision": "e35a70bbb0e42e9c3bd4f199dbb530d3"
  },
  {
    "url": "assets/js/74.43b91294.js",
    "revision": "2c83b14575ab505520126c7896cce2b5"
  },
  {
    "url": "assets/js/75.fa56ba59.js",
    "revision": "a74c313348129a154af46133953da424"
  },
  {
    "url": "assets/js/76.5094bd19.js",
    "revision": "4999e47811208144968be2da2e947c69"
  },
  {
    "url": "assets/js/8.cc8a5134.js",
    "revision": "e7c0157409ee76b08414a9a5c95e4bf6"
  },
  {
    "url": "assets/js/9.e0c1b72e.js",
    "revision": "dda24c13aa2bb871db72b7785d5677dd"
  },
  {
    "url": "assets/js/app.6f896eea.js",
    "revision": "ead4c9859543b2b7f7c7a6cc1dd6b9a4"
  },
  {
    "url": "categories/index.html",
    "revision": "dfd5ab9b59fd56cd1cd23d490b1599fc"
  },
  {
    "url": "categories/个人随笔/index.html",
    "revision": "9ded90069accab4846b5497e332b7b80"
  },
  {
    "url": "categories/代码片段/index.html",
    "revision": "7d7968928aafaf7bc99f0a3c2ec5bb05"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "74ec40ad3455dd1ae2a668dfb1be7a9c"
  },
  {
    "url": "categories/技术笔记/page/2/index.html",
    "revision": "4a07807969682edfa6c60b97835485a6"
  },
  {
    "url": "categories/技术笔记/page/3/index.html",
    "revision": "406a997ec20d32978520eda12f209727"
  },
  {
    "url": "categories/技术笔记/page/4/index.html",
    "revision": "bb0d97e49d04aeb41dd16b8faacfeffa"
  },
  {
    "url": "categories/技术笔记/page/5/index.html",
    "revision": "89a1266def337360c0218bca277be62e"
  },
  {
    "url": "code-snippets/code-2021/difference-between-js-for-loop.html",
    "revision": "b2b5ef682795d4b2115c2b79457f8414"
  },
  {
    "url": "code-snippets/code-2021/flaskkua-yu-shi-li.html",
    "revision": "6a5ed4ab66679b672b98ef8a782732d6"
  },
  {
    "url": "code-snippets/code-2021/for-loops-array-reduce-and-method-chaining.html",
    "revision": "62a587622db2fe133637c9c4984675fe"
  },
  {
    "url": "code-snippets/code-2021/nodejsnei-zhi-http-server.html",
    "revision": "0dda01b2422940e3ed7aa42f4dfcdfb5"
  },
  {
    "url": "code-snippets/code-2021/server-sent-eventsshi-li-dai-ma.html",
    "revision": "d5eda3bdc0fc4c854ae014fe4b5ca07e"
  },
  {
    "url": "code-snippets/code-2021/vue3shi-yong-cdnfang-shi-yin-ru-shi-li.html",
    "revision": "aa32cf7bcc78db1a7f841cfcce4a930e"
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
    "revision": "231cee648c85696f13988ca0950ac873"
  },
  {
    "url": "logo.png",
    "revision": "dfb9cc785f85c37c4aca9566f6cda8c6"
  },
  {
    "url": "notes/browser/hui-liu-he-chong-hui.html",
    "revision": "837f7636d42260a2d4a641ffbb870011"
  },
  {
    "url": "notes/css.html",
    "revision": "04467c441c301e4a524f3efa2da9e6ce"
  },
  {
    "url": "notes/css/cssji-chu.html",
    "revision": "ba844a75eeee693a1eb2f63af243f2ce"
  },
  {
    "url": "notes/css/cssxuan-ze-qi.html",
    "revision": "8bfa2a44f2e23ef75989710d5fa8a505"
  },
  {
    "url": "notes/css/flexbu-ju.html",
    "revision": "01520efd44154d332a3129c895a6e8ef"
  },
  {
    "url": "notes/docker/docer-composeduo-rong-qi-xiang-mu.html",
    "revision": "b86c17f360e5995597606f6971e72eb1"
  },
  {
    "url": "notes/docker/dockerbian-xie-jing-xiang-bing-shang-chuan.html",
    "revision": "23eeee71cd2ab60082b93cd52330ceeb"
  },
  {
    "url": "notes/docker/dockerjian-dan-shi-yong.html",
    "revision": "151060daeb106c944888587afcb5305c"
  },
  {
    "url": "notes/gitde-jian-dan-shi-yong.html",
    "revision": "aca5defeb674f6f73134cbd8aeff4063"
  },
  {
    "url": "notes/guide/guide-1.html",
    "revision": "b2317c84c460034e390eaa9eda3be170"
  },
  {
    "url": "notes/guide/guide-2.html",
    "revision": "3d90a2387b4e2f0f744f6294bdbf92bd"
  },
  {
    "url": "notes/guide/guide-3.html",
    "revision": "b624828d3a875bb40e39e400447d445d"
  },
  {
    "url": "notes/guide/guide-4.html",
    "revision": "afc0abcd5d6914a9f6d25866412ea8af"
  },
  {
    "url": "notes/html/html5yu-yi-yuan-su.html",
    "revision": "e6a5922edfd4024d9dc043ef980e2323"
  },
  {
    "url": "notes/html/htmlji-chu.html",
    "revision": "f34df8e558db7edf71dc3d659b25563a"
  },
  {
    "url": "notes/index.html",
    "revision": "ae5507d6ac40955d25282488f7457dcf"
  },
  {
    "url": "notes/typescript/typescript-webpackda-bao.html",
    "revision": "53471add4e16992b0a0b5935e18300b1"
  },
  {
    "url": "notes/typescript/typescriptbian-yi-xuan-xiang.html",
    "revision": "7bdd971a868f1a7c6c856e24748066a7"
  },
  {
    "url": "notes/typescript/typescriptji-chu.html",
    "revision": "613e3acaf2baf11e4ab4b966efda71bb"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "fa6c68ca5c60b00106d3f1aa24059f25"
  },
  {
    "url": "tag/ci/cd/index.html",
    "revision": "cdc29acfd3644f36716f7d68704a3991"
  },
  {
    "url": "tag/css/index.html",
    "revision": "a926a4b2a1ca26220c574523c04fb1bd"
  },
  {
    "url": "tag/docker-compose/index.html",
    "revision": "520bd23f363ae324aa1da66dc41e3980"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "95e97a5690a7dec9eff67d591272d9bd"
  },
  {
    "url": "tag/element/index.html",
    "revision": "0887a1d5854aef5c73bd5931e6e68e9a"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "b362941b54a4799b95965ad5636abd7e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c49f5c451f2a466fbdfea7a6216cc1e3"
  },
  {
    "url": "tag/html/index.html",
    "revision": "314852e43fa7db388c97797b1bc4df25"
  },
  {
    "url": "tag/http/index.html",
    "revision": "ec841d8403df4fb4a3c53b7a1671ad46"
  },
  {
    "url": "tag/index.html",
    "revision": "132f32d192a07150ee2ad3002a4a8f65"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "ee89c2d577c69215ec2e0399994d24d1"
  },
  {
    "url": "tag/node/index.html",
    "revision": "0401136d0b1f0e7d89841f296c11ea61"
  },
  {
    "url": "tag/other/index.html",
    "revision": "fa99818ca8abefaefabd1fb0f6b1d35a"
  },
  {
    "url": "tag/python/index.html",
    "revision": "d766c257d5f62af4f9abc58f8f5faeeb"
  },
  {
    "url": "tag/serverless/index.html",
    "revision": "ca647f0a108cda5066eb2b854041501d"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "d87c8c8767f26e65ac5e3d7ecbc508ef"
  },
  {
    "url": "tag/tailwind/index.html",
    "revision": "49f6e79538599cd1311a7aa95f446bea"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "20208318a6da27fb43ffb45b2f283cf2"
  },
  {
    "url": "tag/ui/index.html",
    "revision": "fc95cc726c0e5e3fd46a7a9d57d103a2"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "7ca4f58728886d7be233e5ae2b2938fc"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "cac5741fa330ee7bbbc81c5f52c628b0"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "804d4c12c0aa263e8d0b70390460a6bb"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "19df3590cb98317a7f15c1fcd5ed3b9e"
  },
  {
    "url": "tag/yuque/index.html",
    "revision": "fc7b6b0f24b3c453ad4f0837281efd46"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "7210b40696d01ffb838eedbcf9f8cbd9"
  },
  {
    "url": "timeline/index.html",
    "revision": "055e9e66ecef51db0e6ed412f3185227"
  },
  {
    "url": "views/article/ji-ti-chi-zhi-de-zhe-yi-zhou.html",
    "revision": "3f9a35694990fd1716275a04657359fa"
  },
  {
    "url": "views/yuque/cloudbase-frameworkchu-ci-shi-yong.html",
    "revision": "b65ea2654e63d3366bbe69098b360624"
  },
  {
    "url": "views/yuque/commonjs-module-syntax.html",
    "revision": "4ed7852f7fd6e9686bf2235b85843079"
  },
  {
    "url": "views/yuque/cypressjian-dan-shang-shou.html",
    "revision": "874e148456e6c0bc8f41c5d3be1665ff"
  },
  {
    "url": "views/yuque/dao-chu-yu-que-wen-dang.html",
    "revision": "9affa42121a05ba8d28d419df27818a3"
  },
  {
    "url": "views/yuque/el-treexiu-gai-zi-jie-dian-wei-dan-xuan.html",
    "revision": "176e6d0c3f1bab47df50de0ff4e049ec"
  },
  {
    "url": "views/yuque/el-uploadshang-chuan-can-shu-ji-jie-xi.html",
    "revision": "dc3eff5622eea69c0d193ab1f6cd422d"
  },
  {
    "url": "views/yuque/fcc-xiang-ying-shi-webshe-ji.html",
    "revision": "53cc6b7aa9b64bbeeca2209a88168083"
  },
  {
    "url": "views/yuque/graphqlxue-xi.html",
    "revision": "1dd8bcf6914604b4c4b98d091d4a51b6"
  },
  {
    "url": "views/yuque/javascriptshi-jian-xun-huan.html",
    "revision": "2a807403b4541596b21f6111833b0bdc"
  },
  {
    "url": "views/yuque/jian-dan-jing-tai-wen-jian-server.html",
    "revision": "38cdc04bd4155a5e7703ceb88563bc54"
  },
  {
    "url": "views/yuque/jian-pan-shi-jian-xiang-jie.html",
    "revision": "df181222cc0531adfe4e005e86417771"
  },
  {
    "url": "views/yuque/jupyter-notebook.html",
    "revision": "359e62c3a79bc2d6005da76a2b1ff5e1"
  },
  {
    "url": "views/yuque/maridban-zhuang-ji-yuan-cheng-lian-jie.html",
    "revision": "b5a08a2a190b22207177927a67c8a242"
  },
  {
    "url": "views/yuque/pandasdu-xie-csvji-zhui-jia.html",
    "revision": "b3de93b2736e319fd2fa7797cd860ecd"
  },
  {
    "url": "views/yuque/picgo-githubtu-chuang.html",
    "revision": "a3431c31eebb014ee922ea1444022e2e"
  },
  {
    "url": "views/yuque/promiseji-lu.html",
    "revision": "96a40201e8a90ea38d3278c8b6346f78"
  },
  {
    "url": "views/yuque/python-bao-zhi-zuo-liu-cheng.html",
    "revision": "a9e7d157fd5f9333768b7e3ee455c411"
  },
  {
    "url": "views/yuque/pythonjiang-wu-xian-fen-lei-jie-gou-shu-ju-zhuan-wei-json.html",
    "revision": "4ce022e9ef95666bdac677862ffc2a52"
  },
  {
    "url": "views/yuque/ru-he-chu-li-jsonwen-jian-jie-wei-de-dou-hao.html",
    "revision": "f6d9ed5440f922f8fe5c930170fb44e6"
  },
  {
    "url": "views/yuque/ru-he-pi-liang-dao-ru-a-li-icon.html",
    "revision": "da1f21ad15705ec2258b2e7cedd06e46"
  },
  {
    "url": "views/yuque/shi-yong-aria2pi-liang-xia-zai-shi-pin.html",
    "revision": "f86a4007b0b7de1df7cb8b179c660dea"
  },
  {
    "url": "views/yuque/shi-yong-marpzhi-zuo-ppt.html",
    "revision": "0a66d0f112a1d026202de8cbbfe9aaab"
  },
  {
    "url": "views/yuque/slidev-shi-yong-ji-lu.html",
    "revision": "08d0e80834b47a852f7e0df5d6b435bd"
  },
  {
    "url": "views/yuque/ti-sheng-githubdai-ma-la-qu-su-du.html",
    "revision": "716825c6afe77451f831b2b093b6ccfa"
  },
  {
    "url": "views/yuque/vscode-cha-jian.html",
    "revision": "5ecc2a26cec3bc502a1711a5794eba54"
  },
  {
    "url": "views/yuque/vscodekuai-jie-jian.html",
    "revision": "3ec3243ff3cffb9467049db1c774421a"
  },
  {
    "url": "views/yuque/vue2-pei-zhi-tailwind-css.html",
    "revision": "bde452dff08d1ace7cf17e9ed18a083f"
  },
  {
    "url": "views/yuque/vuepressbo-ke-da-jian.html",
    "revision": "e8f046d2f557421cbc35c5415a075e41"
  },
  {
    "url": "views/yuque/vuepressyu-que-yun-duan-xie-zuo-github-actionschi-xu-ji-cheng.html",
    "revision": "9411a3df49c19d42f424132e1e800b63"
  },
  {
    "url": "views/yuque/vuezi-dong-jian-ce-shua-xin-index.html.html",
    "revision": "ff1e1be47127c14d8ab68d37d16b79b9"
  },
  {
    "url": "views/yuque/wang-luo-apishou-cang.html",
    "revision": "f177541da92660dccd2364db91c1a83c"
  },
  {
    "url": "views/yuque/win10chang-yong-ruan-jian-an-zhuang.html",
    "revision": "965606cf6bca9fd6ecb2b60b331523c2"
  },
  {
    "url": "views/yuque/yamlwen-jian-ge-shi-ji-pythonjie-xi.html",
    "revision": "3d70b404222f9aa325f3ca0250e1ce3a"
  },
  {
    "url": "views/yuque/yapian-zhuang-ji-lu.html",
    "revision": "b639417fecf3556064e46e5ddea3b911"
  },
  {
    "url": "views/yuque/yu-que-tu-chuang-fang-dao-lian-lin-shi-jie-jue-ban-fa.html",
    "revision": "58b9e23f3c0ecb5ae6f0ea7b0227ab79"
  },
  {
    "url": "views/yuque/yun-fu-wu-qi-sambashe-zhi.html",
    "revision": "1f22589cb736cf051f8a64a9664287ae"
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
