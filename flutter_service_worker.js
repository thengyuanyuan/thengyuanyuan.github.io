'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b84d2d2473e654fc12dbb9d75d295d03",
"assets/AssetManifest.bin.json": "c3a51898b3c5132bef7b032121d7d50a",
"assets/AssetManifest.json": "a9eab33ada36ffbf2053fa89750d7640",
"assets/assets/files/thengyuanyuan_cv_20240511.pdf": "961859ae09b2a6e3f1d8dd460871d079",
"assets/assets/files/thengyuanyuan_librarymanagementsystem_report.pdf": "8fc36d081c20d582c207ed5f023cfdb1",
"assets/assets/files/thengyuanyuan_libraryseatreservation_report.pdf": "6d6345bc306a9ce5975870462d48cbcc",
"assets/assets/files/thengyuanyuan_mycovid_report.pdf": "525671b3dd43aa0f52ef9fe4515d7e50",
"assets/assets/images/profile.jpg": "abdea5fccbf9ea5fe65d655ff4f43a60",
"assets/assets/images/projects/calculator.png": "69ce22ef9ffd306dda0339542295005f",
"assets/assets/images/projects/employee_payroll.png": "7d6db89c8c4b0d01302ad48a6b112f2a",
"assets/assets/images/projects/employee_payroll2.png": "1b18b3faec261c8a4d106adfa1ac85b0",
"assets/assets/images/projects/flappybird_gameover.png": "77e13e1068fbd012eb5aefbddf4ac90c",
"assets/assets/images/projects/flappybird_gameover2.png": "86070bf47e7906e15b0862fc5b6e5d0d",
"assets/assets/images/projects/flappybird_play.png": "4027b6d5527f307fa5cd167676432982",
"assets/assets/images/projects/flappybird_welcome.png": "42b3342f4bfc41420923c16a29d7947c",
"assets/assets/images/projects/fyp_automatedemail.png": "588b8fa29885f51b9ed3302701c5e8ca",
"assets/assets/images/projects/fyp_changepassword.png": "47e27bed688b2f630af7a14606319964",
"assets/assets/images/projects/fyp_checkout.png": "4137b3c90a940321a155db8ca03d373d",
"assets/assets/images/projects/fyp_editprofile.png": "bfbb6b537066fba3995ce0b68c2445a5",
"assets/assets/images/projects/fyp_editschool.png": "0e905230d0d5471b83378bb89ef9f59f",
"assets/assets/images/projects/fyp_emailsent.png": "ce77c74b45247d028bcc9672e4e483d7",
"assets/assets/images/projects/fyp_filterproducts.png": "41709e768b84ad0f4ffb86d10848e625",
"assets/assets/images/projects/fyp_forgotpassword.png": "b1785cdcc3e5d97f187077cd0a134e1b",
"assets/assets/images/projects/fyp_login.png": "d9f9c80e6653636a6ac01ecc26ba36fc",
"assets/assets/images/projects/fyp_logout.png": "7bc323e5bc79bbf49e7bde88b6c13038",
"assets/assets/images/projects/fyp_makepayment.png": "dfce9b05a9e0d3c449bdc754116b01b7",
"assets/assets/images/projects/fyp_passwordpolicy.png": "e2efae874b564518e529b89b9687fe41",
"assets/assets/images/projects/fyp_productdetails.png": "2e39fc8d7bf7fe412fb1b1ec7c21e8a9",
"assets/assets/images/projects/fyp_profilescreen.png": "5933a0a1d1b8d0dc59578982253ff0d6",
"assets/assets/images/projects/fyp_resetpassword.png": "1cfaaf44cd8fb710fa3b85d3531c0aeb",
"assets/assets/images/projects/fyp_searchproducts.png": "76de391b3a7a29bbbf0033fa54dc3981",
"assets/assets/images/projects/fyp_success.png": "3f09df4ff03374ae8c50b021d2154418",
"assets/assets/images/projects/librarycpp_bookingdetails.png": "896fc157df15274e26963d16910e4463",
"assets/assets/images/projects/librarycpp_bookseatprocess.png": "3c2a9fab2f812a0c8c213c47c932ab12",
"assets/assets/images/projects/librarycpp_chooseseat.png": "f36fd4c17a6980be52a7c8ae0feabcab",
"assets/assets/images/projects/librarycpp_confirmpersonalinformation.png": "be443b4e02c4f10614cb822d3b1fc6e0",
"assets/assets/images/projects/librarycpp_paymentprocess.png": "2c6c2bf7a267e04af311dc182522856c",
"assets/assets/images/projects/librarycpp_personalinformation.png": "339a27e2255b74d124b1291c3087391c",
"assets/assets/images/projects/librarycpp_receipt.png": "66dc59cb8c61acb679b2135239db8503",
"assets/assets/images/projects/librarycpp_welcomescreen.png": "2b68d9d25e0cf20070fac439c474dc09",
"assets/assets/images/projects/libraryweb_addbook.png": "09219b32449c6b08d84b02cfab8a0e26",
"assets/assets/images/projects/libraryweb_addlibrarian.png": "3069046bd2e8ae430628456c862f46a5",
"assets/assets/images/projects/libraryweb_bookdetails.png": "6bedc1387f5768cf0a598e4f1389d49e",
"assets/assets/images/projects/libraryweb_booklist.png": "acb8a61b7a365517b2840691c28c8879",
"assets/assets/images/projects/libraryweb_changepassword.png": "6bcb55947cbec4ff7c131551bc30e1bb",
"assets/assets/images/projects/libraryweb_issuerecords.png": "4edb177ac08fbf4430897951cac04e07",
"assets/assets/images/projects/libraryweb_libarianlist.png": "cfc488a0e8979e6a31db875d4cdd7a80",
"assets/assets/images/projects/libraryweb_librarianlogin.png": "cb78f2cbefca0be50cf7092ce0d944a8",
"assets/assets/images/projects/libraryweb_logout.png": "2524808f4ced54041bd8a50b667db2ec",
"assets/assets/images/projects/libraryweb_memberdetails.png": "ad24a8876f9a68ab3ef9fdb8678b4840",
"assets/assets/images/projects/libraryweb_memberhome.png": "8127d868ed535369139488a2504f08de",
"assets/assets/images/projects/libraryweb_memberlist.png": "4c3af0a660227fcf0b556f9fb0924196",
"assets/assets/images/projects/libraryweb_memberlogin.png": "6cd66c4dd9d88e9291b06216ab679c02",
"assets/assets/images/projects/libraryweb_memberprofile.png": "75b59f481d49bc976b574e659d891024",
"assets/assets/images/projects/libraryweb_membersignup.png": "06934135dcdce79afb44cd0cc16717ba",
"assets/assets/images/projects/libraryweb_recorddetails.png": "22b91ace474b8579d80a990675352d25",
"assets/assets/images/projects/libraryweb_signupsuccess.png": "73ad3fb812042fa118c37e2d5919a610",
"assets/assets/images/projects/mycovid_addrecord.png": "585361e5777f244f77e09cc958f36866",
"assets/assets/images/projects/mycovid_adminlogin.png": "e1b734fa47549a8917284e64bb30871c",
"assets/assets/images/projects/mycovid_dataupdated.png": "83a621ac77c733ddb0cb2e541b1ce813",
"assets/assets/images/projects/mycovid_home.png": "7f39f5d5bb75d989f055a4c8eb1f0b07",
"assets/assets/images/projects/mycovid_new.png": "85ae04b1f550ee86462e8d26012c9aaa",
"assets/assets/images/projects/todo_addnewtask.png": "cb6fc61b1c5a89710abab1aeab299640",
"assets/assets/images/projects/todo_deletetask.png": "bfba75f05279f410039eda6919ca9c12",
"assets/assets/images/projects/todo_home.png": "962a241c8252e655983428b412ecb31e",
"assets/assets/images/projects/xylophone_home.png": "12b0c9eb5297334b819c39de084ee19e",
"assets/FontManifest.json": "0fb466e0fcff39387f97f6c7bc233945",
"assets/fonts/MaterialIcons-Regular.otf": "7568c9f795d8ae6aff7823f23e3d752a",
"assets/NOTICES": "6f70f08d0ebfbcbe1edb47fa74464952",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_devicon/fonts/FlutterDEVICON.ttf": "20e50df99a2adaab0678501ffb5c81cd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "2d62f4f47caef67697a64d0fc1cf24b2",
"canvaskit/canvaskit.wasm": "823666cbd1b646ab8ab1201e17cf1369",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "a57ae2b1fe72ed7e55adf471aa00a123",
"canvaskit/chromium/canvaskit.wasm": "d5631d7cad4d894141203e5c6474a318",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "2c6d3c59f3235b58cb927f07257ea1b8",
"canvaskit/skwasm.wasm": "4e805176cbcd680925d79a162d4885ed",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "d4e3540c5772849f1be80612044094c4",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "4e946b713071e9b7b2bc1ffc18cd1d0d",
"icons/Icon-192.png": "6aadc93ba1baf62d9e4f44890142f7ce",
"icons/Icon-512.png": "69eaa7ccf971f260031110dee6d911e7",
"icons/Icon-maskable-192.png": "6aadc93ba1baf62d9e4f44890142f7ce",
"icons/Icon-maskable-512.png": "69eaa7ccf971f260031110dee6d911e7",
"index.html": "9b1558454053177da33a57ddeed194cf",
"/": "9b1558454053177da33a57ddeed194cf",
"main.dart.js": "cf0c0f6834333b90424b809d044167f4",
"manifest.json": "5f56109c5826ecdf99668db61750238d",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
