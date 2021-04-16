(this["webpackJsonprif-id-manager"]=this["webpackJsonprif-id-manager"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),a=n(7),i=n.n(a),o=(n(13),n(3)),d=n(6);n(14);var h=function(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)([]),i=Object(d.a)(a,2),h=i[0],l=i[1],j=30===n?"Mainnet":"Testnet",b=function(e){return window.ethereum.request({method:"wallet_addEthereumChain",params:e}).then((function(){l([].concat(Object(o.a)(h),["Switched to ".concat(e[0].chainName," (").concat(parseInt(e[0].chainId),")")])),s(parseInt(e[0].chainId))})).catch((function(e){return l([].concat(Object(o.a)(h),["Error: ".concat(e.message)]))}))},u=function(e){return window.ethereum.request({method:"wallet_watchAsset",params:e}).then((function(){return l([].concat(Object(o.a)(h),["Success, Token added!"]))})).catch((function(e){return l([].concat(Object(o.a)(h),["Error: ".concat(e.message)]))}))};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:"Add Testnet and Mainnet RSK to Metamask."}),n&&Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:"Current Network"}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"ChainId"})," ",n]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Name"})," ",j]})]}),Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:"Step 2:"}),Object(c.jsx)("p",{children:"Click the buttons here to add the Mainnet or Testnet, or change to that network if you already have them configured!"}),Object(c.jsx)("button",{onClick:function(){return b([{chainId:"0x1e",chainName:"RSK Mainnet",nativeCurrency:{name:"RSK BTC",symbol:"RBTC",decimals:18},rpcUrls:["https://public-node.rsk.co"],blockExplorerUrls:["https://explorer.rsk.co"]}])},children:"Add RSK Mainnet"}),Object(c.jsx)("button",{onClick:function(){return b([{chainId:"0x1f",chainName:"RSK Testnet",nativeCurrency:{name:"Test RSK BTC",symbol:"tRBTC",decimals:18},rpcUrls:["https://public-node.testnet.rsk.co"],blockExplorerUrls:["https://explorer.testnet.rsk.co"]}])},children:"Add RSK Testnet"})]}),n&&Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:"Step 3:"}),Object(c.jsx)("p",{children:"Add the RIF token!"}),Object(c.jsxs)("p",{children:["Click below to add the ",Object(c.jsx)("strong",{children:j})," RIF token."]}),Object(c.jsx)("button",{onClick:30===n?function(){return u({type:"ERC20",options:{address:"0x2acc95758f8b5f583470ba265eb685a8f45fc9d5",symbol:"RIF",decimals:18,image:"https://s2.coinmarketcap.com/static/img/coins/64x64/3701.png"}})}:function(){return u({type:"ERC20",options:{address:"0x19f64674d8a5b4e652319f5e239efd3bc969a1fe",symbol:"tRIF",decimals:18,image:"https://s2.coinmarketcap.com/static/img/coins/64x64/3701.png"}})},children:"Add RIF Token"})]}),Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:"log"}),Object(c.jsx)("ul",{children:h.map((function(e,t){return Object(c.jsx)("li",{children:e},t)}))})]})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),l()}},[[15,1,2]]]);
//# sourceMappingURL=main.74b31e9b.chunk.js.map