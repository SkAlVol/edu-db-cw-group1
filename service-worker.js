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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "651efb64301f3eed12fa9a083fac9a12"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.f2093034.css",
    "revision": "b2c1b09766d3ea0b71cfa8c3afdcb2e9"
  },
  {
    "url": "assets/img/Schema.46a9e59a.png",
    "revision": "46a9e59a13feed862bdcbb267932cecb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/User_created.8063be3a.png",
    "revision": "8063be3a8ae7d58b701f931c630087f5"
  },
  {
    "url": "assets/img/User_delete_SQL.ed2f3d1a.png",
    "revision": "ed2f3d1aae5beca5f4d5c15bc4659671"
  },
  {
    "url": "assets/img/User_delete.fe6d42a9.png",
    "revision": "fe6d42a98597257fb1deed08d82397da"
  },
  {
    "url": "assets/img/User_email.f33e3544.png",
    "revision": "f33e3544e3fa57c9ff6347bebaae9fd8"
  },
  {
    "url": "assets/img/User_id.08f116cd.png",
    "revision": "08f116cda5c0dd109c55cc66ffc69472"
  },
  {
    "url": "assets/img/User_nickname.a38f41cf.png",
    "revision": "a38f41cf38dff36f78a89ac3c05212c9"
  },
  {
    "url": "assets/img/User_not_found.d752049f.png",
    "revision": "d752049f25ff41bc1d13e9f43884215f"
  },
  {
    "url": "assets/img/User_update.c493afb2.png",
    "revision": "c493afb2cb4693eb183f503ba0b62c6e"
  },
  {
    "url": "assets/img/Users_SQL.0b553511.png",
    "revision": "0b553511cf8a2e6a594509e59d71b48d"
  },
  {
    "url": "assets/img/Users.4235022b.png",
    "revision": "4235022bbdc2844c3d5b251db6775c32"
  },
  {
    "url": "assets/img/Users1.98c829eb.png",
    "revision": "98c829eb94fa7b294c70185d7d179612"
  },
  {
    "url": "assets/js/10.969eb352.js",
    "revision": "b93f0ad6cc7fa061ebbfe4cbba60db62"
  },
  {
    "url": "assets/js/11.6ced2862.js",
    "revision": "064f68f244325adb765cacac4291feca"
  },
  {
    "url": "assets/js/12.a5329e46.js",
    "revision": "935f0c1dbb7f8da131ae30fd59bd262c"
  },
  {
    "url": "assets/js/13.6a101289.js",
    "revision": "add932e1bfad5e6ac65740770684c1a9"
  },
  {
    "url": "assets/js/14.3c9a1a20.js",
    "revision": "aafe6b3f342dce116fd6ca2853988bd1"
  },
  {
    "url": "assets/js/15.3f39b9ff.js",
    "revision": "31a8823df62970755bc9e13130efc49a"
  },
  {
    "url": "assets/js/16.3d9624ee.js",
    "revision": "08debb62fd91f0c6b740bd753dec2471"
  },
  {
    "url": "assets/js/17.2a24204e.js",
    "revision": "4119670e06c95ef768ffecad98592ba7"
  },
  {
    "url": "assets/js/18.ff2f1e37.js",
    "revision": "bb40adb68d4faf3babd1a1b5d0f252d1"
  },
  {
    "url": "assets/js/19.1638fca0.js",
    "revision": "cb8b153dfc8d0592ae816cadd6da80d6"
  },
  {
    "url": "assets/js/2.bfa2c82a.js",
    "revision": "9f5d81778f264235ef1ff99e0ed77e85"
  },
  {
    "url": "assets/js/20.15a7b89f.js",
    "revision": "9984799b079bf888a374c2ed7ac5a637"
  },
  {
    "url": "assets/js/21.301deff7.js",
    "revision": "b633224db63755960800196ddd219017"
  },
  {
    "url": "assets/js/22.ac2e01b8.js",
    "revision": "933b3ca045a9a00ada71e2d834f7cfba"
  },
  {
    "url": "assets/js/23.c2e053a0.js",
    "revision": "cf6ecfe6bee0ee12cd5fea475dd42cd2"
  },
  {
    "url": "assets/js/24.ccc20b03.js",
    "revision": "3e06b929205f4ef5a71268e2e389ec92"
  },
  {
    "url": "assets/js/26.2a58e3d0.js",
    "revision": "730466dab27a3b499e639af86a681853"
  },
  {
    "url": "assets/js/3.f481d40c.js",
    "revision": "9e169134db8b068c61cc64b1428a7940"
  },
  {
    "url": "assets/js/4.3d4ed436.js",
    "revision": "727944e61f1b7e7ac414327498c1be0c"
  },
  {
    "url": "assets/js/5.88dc06d3.js",
    "revision": "5946558363fb920222d6f3b0fa83d985"
  },
  {
    "url": "assets/js/6.80e32d60.js",
    "revision": "b92702f2d637ff84229b43384b8f7332"
  },
  {
    "url": "assets/js/7.45e89273.js",
    "revision": "551fa76df78ffe15a8e30aa95237f044"
  },
  {
    "url": "assets/js/8.3b31f7c3.js",
    "revision": "2d2f62a3531e0c4502d404d9577c62a9"
  },
  {
    "url": "assets/js/9.6eacf766.js",
    "revision": "4ded6a42f572773e8079384dcbba57db"
  },
  {
    "url": "assets/js/app.5983bab3.js",
    "revision": "d1142b7d6a5edfa5b2ea18b74b93554d"
  },
  {
    "url": "conclusion/index.html",
    "revision": "0f08763561f1ce366e5472a5a9c1888c"
  },
  {
    "url": "design/index.html",
    "revision": "cc231a3c07b405cd55506f38b9aa09eb"
  },
  {
    "url": "index.html",
    "revision": "57f75acffd89a9be0e578a6c2fb59cbf"
  },
  {
    "url": "intro/index.html",
    "revision": "0d67df262442cd33774bef101d8fa834"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "036ae505d8d188675b2416e87bb60e76"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "132661a58fa993b1178e268b7b0e47df"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "5c3fee00de62bde98c297dfefd7e8de4"
  },
  {
    "url": "software/index.html",
    "revision": "36daaf5d822beebb483576e9d462900c"
  },
  {
    "url": "test/index.html",
    "revision": "e4fbc0e804168ed0e48f274ad9a070ea"
  },
  {
    "url": "use cases/index.html",
    "revision": "5f3f2f2a75d19134774c611aa1bb49b4"
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
