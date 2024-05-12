'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1b724856a0c5bcd12161bdb7fecfde03",
".git/config": "37e7866b7e66f43c1272172e10858d3b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "466e1277e5c5330548b03be92f755748",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e6503b3af749a0be828c290235313c09",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "25b78292efc8ba71e95ba4a11562b0e7",
".git/logs/refs/heads/main": "d9cacfb9f6703248728c91586435ef82",
".git/logs/refs/remotes/origin/main": "d6c91819dcb24eb41b2e92e21cefd668",
".git/objects/02/dc20911127c0c80adfc88bd64f8c4ba2517858": "c669c17e28a4fa1c57e464b9ea554d3f",
".git/objects/03/a666c35f3fe467158cd8feb7629f566e693fa3": "0257bf240192dc38af2960a67c8a7143",
".git/objects/06/aa73b03eba9c1d6935fd174adfdc0c0ff87cd7": "b4ee9465149d730183046a7af10c2890",
".git/objects/07/fc44911b465f6f0fa8c3e835f6eebd718fcc7c": "80483e8d4b5fb19ed0ab7ddf2aab10f1",
".git/objects/08/076c3385e1cc6d554e885dd2488ea6e2f9b28d": "4c41ce381140f9fb2742856bb52fb430",
".git/objects/0a/5d1d0fd3319430429edc66fdb485632ad3b962": "e1f8f10efb214fb1a9dfb4da39249011",
".git/objects/0a/904e047b8376b8d7c067da11b6933fc5a84201": "00778df3a5860935a5ce57219199ed98",
".git/objects/0c/a0cfb09d015958fac5df3e3d65eb3cd3db184d": "b97ab5838a029173e6805e47678fa65a",
".git/objects/0e/8631962faac2116c16e98f8a32184ed6dfe4f4": "cb692d5ee38f1eb1c371ae0d5caa8c04",
".git/objects/0e/e58c7216871bd14200ae482a3b4bb45a291e14": "0a3d147ac5f877d3305db85654106e1e",
".git/objects/0f/4420e6391927342c6d6c65e7181a38d13e4b8b": "cbe09e90210aa9c36781783e9e7b664b",
".git/objects/11/45e45172a314b1b901968787f6c16e809ab9b1": "e54f51f344b75493ce79308e682d46f7",
".git/objects/11/6c04b766126360413e527ac8553da9654d1169": "ed00c8c387f3792f070f7068aeac15b5",
".git/objects/12/3cc0b1019d070e05e9612b14f2581bb8d6a774": "31046425c9f2fa2fee6a598938fbec89",
".git/objects/16/0a3a180336cf6608df97ebe0fdb4b0aac9306f": "aaeb10ff58cc49e2e7d5e58bacc61a34",
".git/objects/17/46b94c59d5cca5c1bc4ea6a4116f2d36f3b522": "ae6e2811919c241a30300f5366ae551e",
".git/objects/1a/08d3df5f8ac5e9739a77148147476c9e71e27e": "6e6b3c00d2d3062f4604b678f8fd55e9",
".git/objects/1c/ca1f2064fcd6e4f7cb6275b6a05a9e6565fee8": "6a9e44ad7586c791b2b4a02e5984307c",
".git/objects/1d/f8a88b6612425b1acd64866a4bb495883fa1e9": "46784da16bd06255eb5add4a0cc8c1a9",
".git/objects/1f/068fde2e418484aaaa1ce98c702a70cc30619e": "c354a9c5fc50c6f1c69e8dc1cce6a267",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/fe71b4c7f3922accafae9e56e613d8f6057cc9": "b6e22aee0500cf1ea817fe069da26d60",
".git/objects/23/2e8608d836d6295f91b31da473294aff3e7aa3": "38c4bff7ab4f0d8c7425edf1a3e051b0",
".git/objects/27/0bfa977964725f03fb572c74d05716fe2b55ea": "2490b0c3e2cba67b7b989cc1a709bf3b",
".git/objects/28/c1162c00c98f343c2eda572a90733871b2f21e": "059f2f44ad488bfe8f089c28cb0780ef",
".git/objects/2e/6b3a4edbbe5aed4572245c22dcb690cefd2ae6": "9af4e6f7b3e7bab6959a087263b9e611",
".git/objects/2e/91798f84db6ac216498775dc2287ff8c65f5eb": "8457188cccd009de17e5f4bc16d2477c",
".git/objects/2e/d7f0e227e172bbf2661023826b459277ba89e7": "ccc723acbda3728a98f88c53a38de293",
".git/objects/2f/194a2276f50ed2e0c2a48ecfa4d9beb7999c32": "c36554c38517699f165f69e12a6b1481",
".git/objects/2f/f81d3350a5fd293de5eb789e0406ecca301898": "e31ded17a2bc21e1ba8048d0e57fb944",
".git/objects/30/1ef348f8172b3e199e79fba0f2457155f9c6ef": "cabb90f804163b7e7036e40c3a7606df",
".git/objects/33/499b1a0066c2480d1ae7a784bc453520fbbae3": "21eba0e1c8b573e12701cb1ed635139a",
".git/objects/35/fc2b814f49afc422e9ec327c94103f9a41f168": "5f22941c85b44e1be1177e9094c3f0e0",
".git/objects/36/2414230f27ccb62c0343ea572ffcb91382ca51": "6523c4ade196d28648179ecb21dbd82d",
".git/objects/39/e699c17410db702d339ffc58f4e5881091c692": "8a28624de0cedd3995b4847746c3a318",
".git/objects/3f/63b596d66d7680e80c77ec34f1de62dc848d2a": "6f0a4f9d986cbf1de938224e1b5a38b5",
".git/objects/3f/6e112dad0cd6a3673f0efd376386bc95c38981": "34112565073b6617ef8751dc704c8697",
".git/objects/40/8be542df638387820995a6ed8d0d7673453381": "a97e7c927284de919d66440e21c33536",
".git/objects/42/43097aec948bae651cc80ac07c61171425672f": "833098ef60558682f2bda305924d6156",
".git/objects/44/197f8442888761861c14da461177016e32629a": "1c8b430e7f75114fde0107b95cedde60",
".git/objects/48/7994a78fa1b59edcfa2b67afde14ad22ab9639": "0217fddb6854ce5ca998b38e498a44e0",
".git/objects/49/35d5d053864e3cdf4eafef90b6028be060d669": "dee8b99d39a3634ea7884dc2030ba282",
".git/objects/49/814fba990b881251d30be8e5fd704b8604ba8a": "d0c5f4c75e3c2585508401fd830ed435",
".git/objects/49/97f6a94f9d643fa7955a0e09f0a8280258191b": "5b7b06418d03c8c3d0602e4fd3c55c2a",
".git/objects/4c/db08cb73af20549444f2e7c796eecd37161741": "94d523b81efa7f2b8be07b07d4d32ed5",
".git/objects/4e/017c236dddfb2086e82dff83bbc62a16d60aae": "3ccd274d5b7e7c0054b284e0dd58e9e4",
".git/objects/4e/86d69cabefc2602145f701cfd69fac769c2ac7": "fca86f42744839b01e0b130c208f2b53",
".git/objects/4f/7682da53a04f4f1330e824d1b5113a0f9d43eb": "c53cec8d89c7b3e8c07462b187eb1eaa",
".git/objects/50/72394c3b0d7f511bb751b950a4829859acd34a": "c77a00546dac7daa0ef6c214c3ed3875",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/cf2058d4b3b6b2992a0305c936e439025845ac": "a06a44dc608db9f5dea7e25bb75f31fa",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/57/4bdef2ab575dead88fbfed9619e25928e676a9": "34502fb2f0a041fbaf35a514eb52a6fb",
".git/objects/58/1b8535a0ae7d227beda140ce523adf6f1a7ae0": "73552f936d529f310d5f50ba2df25abb",
".git/objects/59/b3a9268b69662fc3593ab79fdae7e079f3e3af": "74c4e3beb6e65bbb4964b7005636593b",
".git/objects/5b/448e4fe3d479c5f737e9681b1929c22c055141": "0acad885dc31d51590d7a66bfec097fd",
".git/objects/5b/c8f4fb293abb2edbb357a61bcb4ab1115decd8": "b5d40bafc6599cef15f777009738372a",
".git/objects/5c/0c94113911eea511ad2a26f861faa50d025e26": "0dc095ea0116d83d9a3feeed37d7f4b1",
".git/objects/5d/5ae4c2e4b61d69e32a23f717e4beccaca867e3": "5e5aabffc3933dace15c6e9c33e1bb42",
".git/objects/5e/4f35c6811b3008a9c30626e0513f24d0bb981a": "facee72aafa754293fd3d3abba024ef8",
".git/objects/63/194bcbf6eb641323e75981d709032952e13d44": "8e82fb86d3f66c85cedc966724c0f2d6",
".git/objects/63/975fe2a05b130600e67ce4167212c131a9f5ad": "5fad2552e7699b2b9960956c852441d8",
".git/objects/66/42c859771a370f7154285722ba3262ca15196a": "9673eb6563f05e6d2134d04dc3694377",
".git/objects/68/914fd73f69e70ece4045bd1ebb461a9c7b1190": "86c0164efa41c0d06e721201d339f140",
".git/objects/68/a2544f47ffd544acea4fb98ef49f3d6acb9f77": "353b6e528bb4aa50c106834d541aaab5",
".git/objects/6a/512c608c28c8e030200e06b5a6891a2b426df6": "91384e52fde4be471e038f10cf95e820",
".git/objects/6c/0e82799a11ab2e67fd18ec05cc6af3e6a90886": "59038b62514731dc8d8926c2a5389352",
".git/objects/6c/61a2b44f84371f83d76d2fb9a59c79d5ff2855": "5fe147d395e9dc3bdb6600b3c756a201",
".git/objects/73/260ea04e0a45c62358b82abc5405954182f00e": "7d318c34c37cd8bb8e9779810aeb02a8",
".git/objects/78/631430bdc7cb813ff4c464c81ee2166725832c": "dfce64260c2fefd2d1e55595a6ab9268",
".git/objects/7b/683daae8db19f2d8611495647a1c58d9ba98d5": "4967cfaf396c872dc30827ab7a6fbf0b",
".git/objects/7d/5f6eb4b1d7d805d09e056011adec8b0b78e5e7": "a370405056e92f1e1597ce7cea4ed1c7",
".git/objects/7f/5b0d8bc1caf26a2f02feab2f9523963d63b9f7": "c4d91763940550b7e667d0b7e47c978c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/09e4b01ec73a38ba000d5066cff5c9fff7d9bc": "a99bd52cf58d11d5087cec346b1f5a06",
".git/objects/87/634eee2b4609ea4e7b5d4c922462abe1d12055": "f75937f402da2858f7cb180c15f9e7b3",
".git/objects/88/5422ed28b56d66dc60967fb74e2a0e8b60f87c": "4c982b758564fc91001c8f11fe3bef16",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/d26df014175d8821bdf78c2ad8e3dff4eb6fde": "49a346cbf01466222544d825b6116edf",
".git/objects/89/58314ee4215035783b43963942eae005be6f6d": "85e0d6431f1a988ea9382068a5579a48",
".git/objects/8a/797ab1290337abd0b195adecbbfbd9f5bee61d": "c28d144784f27c405a86f7cd22780ba3",
".git/objects/8b/8545123f31ada26f3c081cdbee2ed120d7ac30": "d00496bd79d28fcbb2bc0d811fd1e0a6",
".git/objects/8d/dc02b4a41362bdd9a9bce310b2d81bebbdf2c5": "53c0ec25ffc09cfc0d67c23a4ad5dc69",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/92/89d14af79ad0b0923565a2dc0e5d34ef37d3ce": "162c25c5256d1d4056a3dc8937f6dbfa",
".git/objects/93/a0631f9947920ec5fe473d7ac18e710c1edb0b": "3e9ebdc9ca6f9264f8abdcb27c22a9b1",
".git/objects/93/a3d0dc534f429196193b3a349a4d0cbcb6b65e": "0b6c6966a4c92f9898579695883f85a5",
".git/objects/94/9eacdac01c786cd6d8d67e10f1e7d0a6d64204": "fd5d4d68a05627913eee591e2c7dd173",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/35107fd701e6b19108813ec53353421651e988": "aa3944247e8c3c91af7d75942112997e",
".git/objects/97/a3ac1e01ef11bcedfdabc45f947119c124617e": "fbd38c7d756f792f0ee649d573ed845b",
".git/objects/9a/6c658653334259d3e2ba45288fbe4b086966fe": "3cfa9920736d82dab2dba71b3d034439",
".git/objects/9a/8ad2d3270d176d3aefd6fe495130193fb70cf8": "43c513467c666d0a2f5c66e58e9c2ce3",
".git/objects/9b/c210892329c7f8c4307f9773215f4e9fb6ea7f": "2e546b5dce85aac212e940033cd0e82d",
".git/objects/9d/30daa9c7e9b74255157565bdfc85e581801aef": "8f9b2adf6bffdb94683a0b7d9bbb82e4",
".git/objects/9d/516d74911cadc1f6fc78d311334a20689f5a65": "881b2f70e284c176bfd9fe30ed5b81a3",
".git/objects/9e/8d648f93b9340e099fae3adba41d5a4b4f10cf": "b2b090fdadfa330d3cbd28b18ca15bb2",
".git/objects/a3/eba6fa5e19f54fc6556f2dd8dd867da0a33679": "da1eb7419dc7b2899c6c5670ec537da5",
".git/objects/a4/fd1c59d0b3f60892ee2e6a86c71bc0bf16c203": "aa96283b4f3aa0f3d41c16a4005b0dcf",
".git/objects/a6/0f860cb92c996d1e9dce980fa18b8786ac1b8f": "3f8c3109e5c298b22422865c1eda4a07",
".git/objects/a9/1246f9c657cae78c65cd6224177c2cc52c5abc": "a5f043e9eff557e8ad5b5dfe4664acfd",
".git/objects/ad/409dbac0761a3e42292eb71ce7514acddb5681": "2c8d337a6ed5858594f4247bae648077",
".git/objects/ae/29d2c48c4c93b28ba4a7a0cc85abbdeecb7065": "3180e303d069578df3131dd1765ec511",
".git/objects/b1/22d2ad7ac3a50722a364866c76438025187cd6": "a827335a05c4b6d348b31bc8d1e662ec",
".git/objects/b2/b72644b50e853cd19207421b983a428a749f44": "41a1f8961e9b228c39e85d4632bccc86",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/4de6cb62701d0e6e2a8c13d7bcd8255b2c3a42": "2d924637e1916ba6f1ed5201c96d7817",
".git/objects/b5/c10b757024013f3bd01bd121fe22d9a49cdfb1": "ce4ba45d773101e393aa44195c302977",
".git/objects/b6/ccd64cc146238267f2dcb3001507b745c61c3b": "fd8786ecb5d8d6e4e2352777b5e6953c",
".git/objects/b8/67e80a75a613fe2641dabf4870fb032a5e8632": "c5405013b168ee70fed55e251e596561",
".git/objects/b9/b12ae76d47801b7fbc9804cee65824df5617b8": "7c13170f89d73cd4d9b3134f6615da92",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/6b3709a7c5bf4bcaac2b88ff4ec0697f0e08d4": "cd1b2557d62af0d4f6fcb6710fd37400",
".git/objects/be/51bb8a974804fedd2473cae470caf35c792f8e": "f97839cec8953af581633086354d369a",
".git/objects/c0/4c7b269be8f31ca36f373aea158da65a64ab16": "1d78eca05cc0927cef1eac265bfe3811",
".git/objects/c1/f4fa719f29ad586d6b5c6ee4787a3fe721bda1": "981a419dec1d54f239c2af10ce76788a",
".git/objects/c3/ce11a77665176e96f0f10f4d0940208f694979": "1fe6dd7bcdb43fa1c3f2b6b4d82cf295",
".git/objects/c8/fe88ccd088fe9ca8bc6aa5e89e7ba7d3a1750f": "e54bc406801156bbe932dbc77a0c2942",
".git/objects/c9/5fea3162d22e7cd48326fb24558cdec202ea15": "ebf0896c204665890e3358d3c80148c8",
".git/objects/cb/97589f94cec7003d661ed55aaada1b88ecccba": "7f3b308df299008001ee3b22f1875808",
".git/objects/cb/f29f2737a5d2b2ef8bd89adc5eec76e34bc0e4": "cd034cb1b69ad8d735266e09642d052e",
".git/objects/cd/c7235478d24429f9193642229f8bc35ae4e145": "dd2f00a9bc2b1cc5769218a572820fbc",
".git/objects/cf/9d55faeeddefbe0a9a0ed2ddc06faa17eac7b8": "ee1851380825e98b35d8e6090a4e863a",
".git/objects/d1/5c5490cf6f2442b9f75313801ccb44325f2768": "135ea1ada59d34091594786e638641d2",
".git/objects/d2/b8b956b2aa3d8ead402b2416e49de09c39c9a4": "d8274e202372497ba06c6e1e33820acf",
".git/objects/d3/a18ffd31521432f98aa496ad6a6ea3040bce72": "5765efb5caf8fc72b6f9c7a4698a2a2b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/b94b9b034d9d02810391e143fda0b4c7dbeb34": "a7775e1f11d2bcae3a0eaabab26c612b",
".git/objects/d8/4c1a307fa3ef6c2549d087826772ab5b255326": "d5a2bd1dbb516479713a7365bac797ad",
".git/objects/d9/5d4199856a61771d3971b73a19d0116e9b3f3f": "08605a82c1d99cdc8ffe7ea2e5cbd9a3",
".git/objects/d9/f322eaa4aaabe8ef0198493720f95421e62b8b": "e3f6c2ef587513cb6912b6004e21bd63",
".git/objects/da/5bd9b4aac2f8b3bf6845168b0d7bccf1a27161": "ff5c8c0b57304105e478bb0465900fd8",
".git/objects/de/195fd68d31a377cf4e6546bbdae454ff754a73": "2ae36cb734d95e4d322f18714634d55e",
".git/objects/e0/af51bc376b85f85ee05f2105d3b9f2ecbee9d0": "8632f06c5c0b5850587a67ed4cd0d403",
".git/objects/e4/2ceca0634cb8c9582e33b73ff7412470f0f2d9": "8aee06baf0441652e71dfcefcf39d521",
".git/objects/e7/34aca4d5f2fc7aca32ecd3eda51a053af6d464": "4477c8b3fdb294fb2614f5c42f0ae49f",
".git/objects/eb/87c6709eb792e08db512fb4a3678478873f5fb": "1f9c94e359b9f194f282cb398b9aac48",
".git/objects/ec/d8e393503531be292070b8109c2ab892f5bfb1": "cf81efbb8dedb5111e350bea7df859b7",
".git/objects/ed/b7d6c3e1a9bc7c1873156dcbc2be6d3bf77d53": "af5b514907e5575598428a8babdc09c6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/56fe3981b404c91df4b0749bdd8a6dfae21c36": "8d71dc2673ea5cabbde1ae2ae011fef2",
".git/objects/fc/28ab69ac685e9d0b811a808ee2509c3b908e69": "17f994b38dc85a769976f2a2e4b849f1",
".git/objects/ff/ca77c297a4e9e13ff5fbd666f896ed23ac5f20": "1fd1cad7046133bd3300290ddddf07f5",
".git/ORIG_HEAD": "da998a931452847fac9e57aa384f78c0",
".git/refs/heads/main": "da998a931452847fac9e57aa384f78c0",
".git/refs/remotes/origin/main": "da998a931452847fac9e57aa384f78c0",
"assets/AssetManifest.bin": "027dc1c1fe0da4aa0d57adebba6a4101",
"assets/AssetManifest.bin.json": "0d8ad6732be2e1a67455c1d3ef803a46",
"assets/AssetManifest.json": "c7a050d9b0a16d814587bb3835b58c76",
"assets/assets/files/thengyuanyuan_cv.pdf": "f63fd80b94240459eb69f6747b742082",
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
"assets/fonts/MaterialIcons-Regular.otf": "7c958afa0d75e050c9463bba8a4aa8e5",
"assets/NOTICES": "83f4cc8a5508efd361825249fd9b1920",
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
"flutter_bootstrap.js": "45b35aabe1991193263fb1c6d8ac4538",
"icons/Icon-192.png": "6aadc93ba1baf62d9e4f44890142f7ce",
"icons/Icon-512.png": "69eaa7ccf971f260031110dee6d911e7",
"icons/Icon-maskable-192.png": "6aadc93ba1baf62d9e4f44890142f7ce",
"icons/Icon-maskable-512.png": "69eaa7ccf971f260031110dee6d911e7",
"index.html": "0370de11e928177ca2ccc0c68b9f6d67",
"/": "0370de11e928177ca2ccc0c68b9f6d67",
"main.dart.js": "14d7240333e7789c2db86648fbc65ef5",
"manifest.json": "5f56109c5826ecdf99668db61750238d",
"README.md": "883748a2664654bbe8cbd32119a30f6b",
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
