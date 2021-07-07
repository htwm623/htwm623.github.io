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
    "revision": "fb368b8bec60e53dcc048600daa523c8"
  },
  {
    "url": "about/index.html",
    "revision": "e90b5488493f6caa8c50e336c19b1c36"
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
    "url": "assets/js/1.048ec1f3.js",
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
    "url": "assets/js/12.b0d3dc8d.js",
    "revision": "f86acece2e7e10012f22069f67ad15e6"
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
    "url": "assets/js/19.eb499ab5.js",
    "revision": "b3d81b78cfbb4262c1d10fabe217ef10"
  },
  {
    "url": "assets/js/20.8dd6df44.js",
    "revision": "b4b8fa0179c5c9dc544f88611c7a516c"
  },
  {
    "url": "assets/js/21.866c5afa.js",
    "revision": "6a332051cb4f7fcc613c55d95e1f962c"
  },
  {
    "url": "assets/js/22.ef0a5fea.js",
    "revision": "7052758df19e042e238dc2e41a7eb387"
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
    "url": "assets/js/26.149e467a.js",
    "revision": "12a6ed9d4dec34e7152a22c8849741c3"
  },
  {
    "url": "assets/js/27.1ba99235.js",
    "revision": "d5d8eb8e53b9cba3ea2450f5c36bb0e1"
  },
  {
    "url": "assets/js/28.21e5b868.js",
    "revision": "c0352f99de9ce88e4308369e25b0b376"
  },
  {
    "url": "assets/js/29.bb05b4a0.js",
    "revision": "b2a569072a5580fa97d29a062311adca"
  },
  {
    "url": "assets/js/3.d36a463a.js",
    "revision": "cc24b176e5d3334e0586416f2e958ddb"
  },
  {
    "url": "assets/js/30.9f85f07a.js",
    "revision": "846d209034c5c32f5725636c78e9cc4a"
  },
  {
    "url": "assets/js/31.4680ba0c.js",
    "revision": "ee0173543f5c9351477862ec29ed5a0b"
  },
  {
    "url": "assets/js/32.c0c40f04.js",
    "revision": "d3363260cd06c70aa23dc3a410f3041f"
  },
  {
    "url": "assets/js/33.6ca327fc.js",
    "revision": "bb719372c94bfd3eb42dbedd71afd5dc"
  },
  {
    "url": "assets/js/34.a6411faf.js",
    "revision": "fd28fc031d56237c7cd365f81a9351fd"
  },
  {
    "url": "assets/js/35.e42bd9ae.js",
    "revision": "b255ec98495780ea13f8cb02762031d1"
  },
  {
    "url": "assets/js/36.5696da88.js",
    "revision": "a2e216352f4d9976af3af706a4df36a0"
  },
  {
    "url": "assets/js/37.7811cbf5.js",
    "revision": "1ab1fa4658be49a49bcea6fdda5e0d7d"
  },
  {
    "url": "assets/js/38.8f29582e.js",
    "revision": "adca745ac38cec4a52da6eeea5e81426"
  },
  {
    "url": "assets/js/39.8877b375.js",
    "revision": "77f164a0820276cf45d7189c8b3fed02"
  },
  {
    "url": "assets/js/4.94324021.js",
    "revision": "0eab73483e39b44a922d17b01f4ad9f9"
  },
  {
    "url": "assets/js/40.207f9319.js",
    "revision": "233d639ab05e0f105abcfab0cfe52477"
  },
  {
    "url": "assets/js/41.8bc7a6cf.js",
    "revision": "f847d01e82be984937277e4f24cbf7aa"
  },
  {
    "url": "assets/js/42.431b463c.js",
    "revision": "59966b7b8714e1a40a012188724335a5"
  },
  {
    "url": "assets/js/43.64abdf36.js",
    "revision": "7934568879f6b9129aa0e291ed190f9c"
  },
  {
    "url": "assets/js/44.77183cff.js",
    "revision": "9ca470daa780e3ace0211baead0893ce"
  },
  {
    "url": "assets/js/45.8a864b4f.js",
    "revision": "7fe6a2aa5bd035a5be845cbca4c1beaf"
  },
  {
    "url": "assets/js/46.3c04f3c9.js",
    "revision": "03b69d73f4d4668b2c9355188b39ce71"
  },
  {
    "url": "assets/js/47.ada2ea2d.js",
    "revision": "a0e8bb377d26223ec602b3821ed6accb"
  },
  {
    "url": "assets/js/48.8de03c25.js",
    "revision": "9ef442c5e8f8d3c80e3d907d7426bfb1"
  },
  {
    "url": "assets/js/49.6c8b94ac.js",
    "revision": "db0387033a5d08a6e41f323179a0e867"
  },
  {
    "url": "assets/js/5.5c761fe4.js",
    "revision": "4169ab1ed1e59690e657a9d0fa86e633"
  },
  {
    "url": "assets/js/50.dd8be5ad.js",
    "revision": "3d38d2d17c6ff163cb7ec7257d488b77"
  },
  {
    "url": "assets/js/51.8a991c8d.js",
    "revision": "f3700bf47c2ec137f26a285586c300f6"
  },
  {
    "url": "assets/js/52.e61d92d1.js",
    "revision": "736acebcec46cb7589f675cbb805190e"
  },
  {
    "url": "assets/js/53.0b21cf9d.js",
    "revision": "ee5671e95627f6bdb179e6595a6b71ef"
  },
  {
    "url": "assets/js/54.66dc46f1.js",
    "revision": "750081d698811213e2d02974e150234a"
  },
  {
    "url": "assets/js/55.c4c5a6a0.js",
    "revision": "50e9014f7f110c770cbcc65823d833a7"
  },
  {
    "url": "assets/js/56.e789a81e.js",
    "revision": "a58494bd2c3a5ebd9ea87cd7477f9475"
  },
  {
    "url": "assets/js/57.68c751de.js",
    "revision": "a88bb86225497ecfa393ee98847da628"
  },
  {
    "url": "assets/js/58.2e194543.js",
    "revision": "f73b6191da9176177ceb804ee23e9d55"
  },
  {
    "url": "assets/js/59.cc115cf3.js",
    "revision": "d83b41345a37dd0f60cfa4ea258d6e7d"
  },
  {
    "url": "assets/js/6.90cb6178.js",
    "revision": "84ccfa96f93a438c2baf56ddd34d5455"
  },
  {
    "url": "assets/js/60.f4783344.js",
    "revision": "99740b8f11364ffd05309fc2aae1d70d"
  },
  {
    "url": "assets/js/61.5a467d89.js",
    "revision": "33de2a5b2c6b524a0a1db3218dab7018"
  },
  {
    "url": "assets/js/62.d72d0535.js",
    "revision": "2ef789eb67c8cd5c4e3439d75babdda4"
  },
  {
    "url": "assets/js/63.ddb7e335.js",
    "revision": "77d9c801c901d77dc3a3bdcd100379e7"
  },
  {
    "url": "assets/js/64.2f426f75.js",
    "revision": "3a87f2fada22b3a2565eed9e12e81e62"
  },
  {
    "url": "assets/js/65.6540aba8.js",
    "revision": "3c6bdd35281ee68b575d8ac0dfd05198"
  },
  {
    "url": "assets/js/66.b416ba7e.js",
    "revision": "7bfdf3dad7b46ad0d836262f82cc8426"
  },
  {
    "url": "assets/js/67.a5578201.js",
    "revision": "a847d39b4e395b9d608c2c87fe2121e2"
  },
  {
    "url": "assets/js/68.8e281aa1.js",
    "revision": "1dfa2ccc985ae3d6e156b8363771dceb"
  },
  {
    "url": "assets/js/69.fc50cf2d.js",
    "revision": "94e35dd34f9e0d788a73cb8d5b006e8b"
  },
  {
    "url": "assets/js/7.f73e3be0.js",
    "revision": "a59a52a45c209eaca23f9e6ca12ba963"
  },
  {
    "url": "assets/js/70.28e860b2.js",
    "revision": "d0cf039ecc5b930ee7a85cce5f54956c"
  },
  {
    "url": "assets/js/71.2c6d01c3.js",
    "revision": "64066c9a6f8295ace842ed847fa8c0ab"
  },
  {
    "url": "assets/js/72.eb6848e3.js",
    "revision": "bb8c4efe39345f539a2369cddb1d7ed8"
  },
  {
    "url": "assets/js/73.e93de3b7.js",
    "revision": "34851cea6ca21dc3067090cf99982978"
  },
  {
    "url": "assets/js/74.13ec7952.js",
    "revision": "fe5d6a491965fbc69c77614e6b0aed91"
  },
  {
    "url": "assets/js/8.73e5bda5.js",
    "revision": "269e3f8c260b454c87c715668de31f11"
  },
  {
    "url": "assets/js/9.e79d2d1a.js",
    "revision": "f5c11856859afd8e2614c945726c1309"
  },
  {
    "url": "assets/js/app.9284b804.js",
    "revision": "2edb53e97029e02fd30edc26a473eb08"
  },
  {
    "url": "categories/代码片段/index.html",
    "revision": "f60ec8edd0dbb748c33fd6b6762170fe"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "7a4311d6d8213fff385f63882426f2b8"
  },
  {
    "url": "categories/技术笔记/page/2/index.html",
    "revision": "ed8d110492aecb65a4eeb2844942d218"
  },
  {
    "url": "categories/技术笔记/page/3/index.html",
    "revision": "6ba11693e41761f12bd7e10a7992b868"
  },
  {
    "url": "categories/技术笔记/page/4/index.html",
    "revision": "b9143d49d3b2826776b4140508a15d65"
  },
  {
    "url": "categories/技术笔记/page/5/index.html",
    "revision": "396316f33558c5c5d420bb9036536b73"
  },
  {
    "url": "categories/index.html",
    "revision": "73f2eda2b08ba3fe7c35908130f5cb38"
  },
  {
    "url": "code-snippets/code-2021/difference-between-js-for-loop.html",
    "revision": "4744803ca8dac4028bf287189f49795b"
  },
  {
    "url": "code-snippets/code-2021/flaskkua-yu-shi-li.html",
    "revision": "9e406fdd43453015214b564fcde71725"
  },
  {
    "url": "code-snippets/code-2021/for-loops-array-reduce-and-method-chaining.html",
    "revision": "192702b200e367f4829925125a242dd2"
  },
  {
    "url": "code-snippets/code-2021/nodejsnei-zhi-http-server.html",
    "revision": "7de3106d5fa8e95b65d27085e981d7a3"
  },
  {
    "url": "code-snippets/code-2021/server-sent-eventsshi-li-dai-ma.html",
    "revision": "058780774aa017c5fe727022ce14d686"
  },
  {
    "url": "code-snippets/code-2021/vue3shi-yong-cdnfang-shi-yin-ru-shi-li.html",
    "revision": "a312509782612265ce9c09d887347d51"
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
    "revision": "fac010e9b30c523fa15ef800a9032829"
  },
  {
    "url": "logo.png",
    "revision": "dfb9cc785f85c37c4aca9566f6cda8c6"
  },
  {
    "url": "notes/css.html",
    "revision": "321b13cdc986f78b614d538b64fbfac1"
  },
  {
    "url": "notes/css/cssji-chu.html",
    "revision": "83dfff18431df25f2705afd25b482766"
  },
  {
    "url": "notes/css/cssxuan-ze-qi.html",
    "revision": "29dea26826a0027654f5c439e8ad6c9a"
  },
  {
    "url": "notes/css/flexbu-ju.html",
    "revision": "17c28e83e59fc9001004e88d14ab7854"
  },
  {
    "url": "notes/docker/docer-composeduo-rong-qi-xiang-mu.html",
    "revision": "3bdbbf215e23930d7192b8f1012f38c2"
  },
  {
    "url": "notes/docker/dockerbian-xie-jing-xiang-bing-shang-chuan.html",
    "revision": "c096f635668f0c438a747d9dc9e7ee08"
  },
  {
    "url": "notes/docker/dockerjian-dan-shi-yong.html",
    "revision": "4ea77fb215b71afd217423a1a38dae2b"
  },
  {
    "url": "notes/gitde-jian-dan-shi-yong.html",
    "revision": "c260f2524c359fc4287f842ef0b9bc5d"
  },
  {
    "url": "notes/guide/guide-1.html",
    "revision": "2b66f3437f1e8ffeab241b44f9419275"
  },
  {
    "url": "notes/guide/guide-2.html",
    "revision": "4a3218116c133931f5179759df1d50c3"
  },
  {
    "url": "notes/guide/guide-3.html",
    "revision": "f8cdd8301b6aa9c912f170c920e72978"
  },
  {
    "url": "notes/html/html5yu-yi-yuan-su.html",
    "revision": "8df9695963cfa7839be80e3a30a0d2f4"
  },
  {
    "url": "notes/html/htmlji-chu.html",
    "revision": "3dbc66029174ca19e037e885961b52ca"
  },
  {
    "url": "notes/index.html",
    "revision": "dfa6de00d78955ba1f5c94fff578f288"
  },
  {
    "url": "notes/typescript/typescript-webpackda-bao.html",
    "revision": "309b85a097647e1f52ff9e0fd6a9a235"
  },
  {
    "url": "notes/typescript/typescriptbian-yi-xuan-xiang.html",
    "revision": "3b9bfefd7964d5e78b2aaee2a3c6f926"
  },
  {
    "url": "notes/typescript/typescriptji-chu.html",
    "revision": "8a54048c38c01f90555035d006058f0b"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/api/index.html",
    "revision": "d9b022417283563b6de88185d70d38d2"
  },
  {
    "url": "tag/ci/cd/index.html",
    "revision": "7ae8e4df3ffd5a6da2ca1a5280cef561"
  },
  {
    "url": "tag/css/index.html",
    "revision": "a5e0d8b35fe1787f0e6969627eadcc4e"
  },
  {
    "url": "tag/docker-compose/index.html",
    "revision": "f4a2d0ec6ddca6c264c23b4a2deda5a2"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "1c4bf967c063d3dfd479ab1b94268f7e"
  },
  {
    "url": "tag/element/index.html",
    "revision": "d28c48d22ac4efd2195aa89f26f1d3eb"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "7431987638753172a5f803f1e79ea8f4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "613fe8e8a8b2c118239e0d66a2500062"
  },
  {
    "url": "tag/html/index.html",
    "revision": "60e47b8ba4b7118257a94aa76ae7e3a9"
  },
  {
    "url": "tag/http/index.html",
    "revision": "99eac5f87a66bcc0c46bfc6323283ad5"
  },
  {
    "url": "tag/index.html",
    "revision": "bcf6c52e12acd99c96bf32c189552a91"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "b7da69e44facf10e6e9695c58e1c52c4"
  },
  {
    "url": "tag/node/index.html",
    "revision": "da1b3dee9361352a026522613b0e1eb1"
  },
  {
    "url": "tag/other/index.html",
    "revision": "52a4e5496a0a1ec201c89d13dbf9caee"
  },
  {
    "url": "tag/python/index.html",
    "revision": "04d4fe22efffc9ff4bd80dd5e3f7244d"
  },
  {
    "url": "tag/react/index.html",
    "revision": "89e590f74a9af69416efcdd2cc7f9e06"
  },
  {
    "url": "tag/redux/index.html",
    "revision": "142deb15b41426f7702be049da03f0f9"
  },
  {
    "url": "tag/serverless/index.html",
    "revision": "1bf35e22d829be5fe59d130cab471ceb"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "63852b8af6cece0583e7c5cbaaf90198"
  },
  {
    "url": "tag/tailwind/index.html",
    "revision": "9b69fd1a546735d2f826e53ddc3751d6"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "b2b120d02c6cd308dd18d633de6081d9"
  },
  {
    "url": "tag/ui/index.html",
    "revision": "d28bf0f36d189d25197a9af73cc83a41"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "d57e7ed4daf4c8846b85c13ca7f9301c"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "5ac09f0dccee88de378e7bb8d66146ae"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f21b255ea70290baf45af5d1b4225582"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "60aeeb8daa3aa855590128ec0f637dfd"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "71adc26746cb3e51e55ea43f4a3a1840"
  },
  {
    "url": "tag/yuque/index.html",
    "revision": "e0db407f8cdf79bc6006080bdc896fd2"
  },
  {
    "url": "timeline/index.html",
    "revision": "40da892606548e76bbe74b11ee27a7d6"
  },
  {
    "url": "views/yuque/cloudbase-frameworkchu-ci-shi-yong.html",
    "revision": "77946700b837da1aea32e28b8f0d9b3b"
  },
  {
    "url": "views/yuque/commonjs-module-syntax.html",
    "revision": "d7741a9f091cfd0ce26ef2efa83a2ff0"
  },
  {
    "url": "views/yuque/cypressjian-dan-shang-shou.html",
    "revision": "c6a9e281c97ce8ec921a1a97ae9a4039"
  },
  {
    "url": "views/yuque/dao-chu-yu-que-wen-dang.html",
    "revision": "36291a34712baeebab7568c922f1b062"
  },
  {
    "url": "views/yuque/el-treexiu-gai-zi-jie-dian-wei-dan-xuan.html",
    "revision": "a59f43242f67184d129cb9809707fe03"
  },
  {
    "url": "views/yuque/el-uploadshang-chuan-can-shu-ji-jie-xi.html",
    "revision": "8545071d26b9e0867ee3b6aeba5a7e15"
  },
  {
    "url": "views/yuque/fcc-xiang-ying-shi-webshe-ji.html",
    "revision": "2c83ce752369260c0cf7d1d41dd129d1"
  },
  {
    "url": "views/yuque/graphqlxue-xi.html",
    "revision": "0888234430f4c91f5c677cb7ded4c5e9"
  },
  {
    "url": "views/yuque/javascriptshi-jian-xun-huan.html",
    "revision": "746e204e05e2352f569ece92b3acb5dc"
  },
  {
    "url": "views/yuque/jian-dan-jing-tai-wen-jian-server.html",
    "revision": "0b78becea75d97d271e0058639a12b24"
  },
  {
    "url": "views/yuque/jian-pan-shi-jian-xiang-jie.html",
    "revision": "7324058fc2811e414334930e32f8ba3f"
  },
  {
    "url": "views/yuque/jupyter-notebook.html",
    "revision": "4cfe57050346bac563ed66b63313e1e8"
  },
  {
    "url": "views/yuque/maridban-zhuang-ji-yuan-cheng-lian-jie.html",
    "revision": "04cfc72b1e4792fc56f20752f7975358"
  },
  {
    "url": "views/yuque/pandasdu-xie-csvji-zhui-jia.html",
    "revision": "e62ee4cb926532018feb94bfd3024045"
  },
  {
    "url": "views/yuque/picgo-githubtu-chuang.html",
    "revision": "c66c0447a5ddc34a8f1847361add8185"
  },
  {
    "url": "views/yuque/promiseji-lu.html",
    "revision": "df04a4bcdce5dbcfb35a261ec39a2634"
  },
  {
    "url": "views/yuque/python-bao-zhi-zuo-liu-cheng.html",
    "revision": "47a719cf386d14ae04dc7cf49f47d2a7"
  },
  {
    "url": "views/yuque/pythonjiang-wu-xian-fen-lei-jie-gou-shu-ju-zhuan-wei-json.html",
    "revision": "3f5f2217b038c58054bec6a59e772dac"
  },
  {
    "url": "views/yuque/ru-he-chu-li-jsonwen-jian-jie-wei-de-dou-hao.html",
    "revision": "c3ca7e2641e53ad5f359f59e2f307b5d"
  },
  {
    "url": "views/yuque/ru-he-pi-liang-dao-ru-a-li-icon.html",
    "revision": "eaa2ffe921a00096471a0b5af21eaf83"
  },
  {
    "url": "views/yuque/shi-yong-aria2pi-liang-xia-zai-shi-pin.html",
    "revision": "7e855daf3306f38af06f1301966f292d"
  },
  {
    "url": "views/yuque/shi-yong-marpzhi-zuo-ppt.html",
    "revision": "7b07379116508314be43e9fc4f826e0c"
  },
  {
    "url": "views/yuque/slidev-shi-yong-ji-lu.html",
    "revision": "0f9cebacb619ea178bfc33ca2a6f60ad"
  },
  {
    "url": "views/yuque/ti-sheng-githubdai-ma-la-qu-su-du.html",
    "revision": "d0068e4065408040c5f76c5ab11310f7"
  },
  {
    "url": "views/yuque/vite2.1-react17-redux.html",
    "revision": "5266c10d544b68e3caeed47f2d42b94f"
  },
  {
    "url": "views/yuque/vscode-cha-jian.html",
    "revision": "300e5abd6aa8bdce2a64be3ffa5ac188"
  },
  {
    "url": "views/yuque/vscodekuai-jie-jian.html",
    "revision": "aec8e3a349b618a59f98c7d3f248224f"
  },
  {
    "url": "views/yuque/vue2-pei-zhi-tailwind-css.html",
    "revision": "22f769975979e027e81d4cead7d9dabc"
  },
  {
    "url": "views/yuque/vuepressbo-ke-da-jian.html",
    "revision": "6c1fd2d58c05eed547e93dfa31f80173"
  },
  {
    "url": "views/yuque/vuepressyu-que-yun-duan-xie-zuo-github-actionschi-xu-ji-cheng.html",
    "revision": "d2da6e46c74e293b940c2a009e249be9"
  },
  {
    "url": "views/yuque/vuezi-dong-jian-ce-shua-xin-index.html.html",
    "revision": "02362201ee90c3ade02e0db946b550a1"
  },
  {
    "url": "views/yuque/wang-luo-apishou-cang.html",
    "revision": "c925232164093abc30e994c1219e85e1"
  },
  {
    "url": "views/yuque/win10chang-yong-ruan-jian-an-zhuang.html",
    "revision": "6a2d642fb3cab1dd090eee232ae68ffc"
  },
  {
    "url": "views/yuque/yamlwen-jian-ge-shi-ji-pythonjie-xi.html",
    "revision": "9a3c8f8d6963ef0bb077faab4edcdc60"
  },
  {
    "url": "views/yuque/yapian-zhuang-ji-lu.html",
    "revision": "2800e74f7e1d6fdc403f5657240e414a"
  },
  {
    "url": "views/yuque/yu-que-tu-chuang-fang-dao-lian-lin-shi-jie-jue-ban-fa.html",
    "revision": "07ae61cabfe541a6c3fd3adf61a39932"
  },
  {
    "url": "views/yuque/yun-fu-wu-qi-sambashe-zhi.html",
    "revision": "e1644de5d833e615377d3d10e4065f5f"
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
