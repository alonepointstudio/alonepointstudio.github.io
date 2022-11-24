// Global Variables
let loader = document.querySelector(".loader");
let progressBar = document.querySelector(".loader .progress > .bar");

// Initalize Yandex Game SDK
// YaGames
//   .init()
//   .then(ysdk => {
//     console.log('Yandex SDK initialized');
//     window.ysdk = ysdk;
//   });

// Create Unity Instance
createUnityInstance(document.querySelector("#game-canvas"), {
  dataUrl: "Build/Kybiki.data",
  frameworkUrl: "Build/Kybiki.framework.js",
  codeUrl: "Build/Kybiki.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "Alone Point Studio",
  productName: "Kybiki",
  productVersion: "0.2.0",
  // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
  devicePixelRatio: 1,
}, (progress) => {
  progressBar.style.width = 100 * progress + "%";
}).then((unityInstance) => {
  loader.style.display = "none";
}).catch((message) => { });
