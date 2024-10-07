var $gXNCa$express = require("express");
var $gXNCa$path = require("path");
var $gXNCa$http = require("http");
var $gXNCa$cookieparser = require("cookie-parser");
var $gXNCa$socketio = require("socket.io");


      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequirebb78"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequirebb78"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("cEozm", function(module, exports) {
var $935c476563a3c2eb$var$__dirname = "src/routes";

const $935c476563a3c2eb$var$router = $gXNCa$express.Router();

const $935c476563a3c2eb$var$views = $gXNCa$path.join($935c476563a3c2eb$var$__dirname, "/../views");

var $89AiA = parcelRequire("89AiA");
$935c476563a3c2eb$var$router.get("/", $89AiA, (req, res)=>{
    res.sendFile($935c476563a3c2eb$var$views + "/index.html");
});
$935c476563a3c2eb$var$router.get("/register", (req, res)=>{
    res.sendFile($935c476563a3c2eb$var$views + "/register.html");
});
module.exports = $935c476563a3c2eb$var$router;

});
parcelRegister("89AiA", function(module, exports) {
module.exports = (req, res, next)=>{
    if (req.cookies.username) next();
    else res.redirect("/register");
};

});


var $4fa36e821943b400$var$__dirname = "src";


var $4fa36e821943b400$require$createServer = $gXNCa$http.createServer;
var $6615b39d0d6c57f6$exports = {};

$6615b39d0d6c57f6$exports = (httpServer)=>{
    const { Server: Server } = $gXNCa$socketio;
    const io = new Server(httpServer);
    io.on("connection", (socket)=>{
        const cookie = socket.handshake.headers.cookie;
        const user = cookie.split("=").pop();
        socket.on("message", (message)=>{
            io.emit("message", {
                user: user,
                message: message
            });
        });
    });
};




const $4fa36e821943b400$var$app = $gXNCa$express();
const $4fa36e821943b400$var$httpServer = $4fa36e821943b400$require$createServer($4fa36e821943b400$var$app);
// Settings
$4fa36e821943b400$var$app.set("port", 3000);
$4fa36e821943b400$var$app.set("views", $gXNCa$path.join($4fa36e821943b400$var$__dirname, "views"));
$4fa36e821943b400$var$app.use($gXNCa$cookieparser());

// Routes
$4fa36e821943b400$var$app.use((parcelRequire("cEozm")));
// Public
$4fa36e821943b400$var$app.use($gXNCa$express.static($gXNCa$path.join($4fa36e821943b400$var$__dirname, "public")));
// Levanto el servidor
$4fa36e821943b400$var$httpServer.listen($4fa36e821943b400$var$app.get("port"), ()=>{
    console.log("El servidor est\xe1 corriendo en el puerto ", $4fa36e821943b400$var$app.get("port"));
});
// Llamo al servidor de Socket.io
$6615b39d0d6c57f6$exports($4fa36e821943b400$var$httpServer);


//# sourceMappingURL=index.js.map
