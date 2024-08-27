"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[6043],{8215:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var i=s(5893),r=s(1151);const l={title:"\u57fa\u672c\u7684\u306a\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30aa\u30d7\u30b7\u30e7\u30f3"},c=void 0,d={id:"networking/basic-network-options",title:"\u57fa\u672c\u7684\u306a\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30aa\u30d7\u30b7\u30e7\u30f3",description:"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001Flannel\u306e\u8a2d\u5b9a\u3084\u7f6e\u304d\u63db\u3048\u3001IPv6\u3084\u30c7\u30e5\u30a2\u30eb\u30b9\u30bf\u30c3\u30af\u306e\u8a2d\u5b9a\u3092\u542b\u3080K3s\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u8a2d\u5b9a\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/networking/basic-network-options.md",sourceDirName:"networking",slug:"/networking/basic-network-options",permalink:"/ja/networking/basic-network-options",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/networking/basic-network-options.md",tags:[],version:"current",lastUpdatedAt:1724781331e3,frontMatter:{title:"\u57fa\u672c\u7684\u306a\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30aa\u30d7\u30b7\u30e7\u30f3"},sidebar:"mySidebar",previous:{title:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30ad\u30f3\u30b0",permalink:"/ja/networking/"},next:{title:"\u5206\u6563\u578b\u30cf\u30a4\u30d6\u30ea\u30c3\u30c9\u307e\u305f\u306f\u30de\u30eb\u30c1\u30af\u30e9\u30a6\u30c9\u30af\u30e9\u30b9\u30bf\u30fc",permalink:"/ja/networking/distributed-multicloud"}},t={},a=[{value:"Flannel\u30aa\u30d7\u30b7\u30e7\u30f3",id:"flannel\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"<code>wireguard</code>\u307e\u305f\u306f<code>ipsec</code>\u304b\u3089<code>wireguard-native</code>\u3078\u306e\u79fb\u884c",id:"wireguard\u307e\u305f\u306fipsec\u304b\u3089wireguard-native\u3078\u306e\u79fb\u884c",level:3},{value:"\u30ab\u30b9\u30bf\u30e0CNI",id:"\u30ab\u30b9\u30bf\u30e0cni",level:2},{value:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u306eEgress Selector\u8a2d\u5b9a",id:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u306eegress-selector\u8a2d\u5b9a",level:2},{value:"\u30c7\u30e5\u30a2\u30eb\u30b9\u30bf\u30c3\u30af\uff08IPv4 + IPv6\uff09\u30cd\u30c3\u30c8\u30ef\u30fc\u30ad\u30f3\u30b0",id:"\u30c7\u30e5\u30a2\u30eb\u30b9\u30bf\u30c3\u30afipv4--ipv6\u30cd\u30c3\u30c8\u30ef\u30fc\u30ad\u30f3\u30b0",level:2},{value:"\u30b7\u30f3\u30b0\u30eb\u30b9\u30bf\u30c3\u30afIPv6\u30cd\u30c3\u30c8\u30ef\u30fc\u30ad\u30f3\u30b0",id:"\u30b7\u30f3\u30b0\u30eb\u30b9\u30bf\u30c3\u30afipv6\u30cd\u30c3\u30c8\u30ef\u30fc\u30ad\u30f3\u30b0",level:2},{value:"\u30db\u30b9\u30c8\u540d\u306e\u306a\u3044\u30ce\u30fc\u30c9",id:"\u30db\u30b9\u30c8\u540d\u306e\u306a\u3044\u30ce\u30fc\u30c9",level:2}];function o(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{TabItem:s,Tabs:l}=n;return s||x("TabItem",!0),l||x("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001Flannel\u306e\u8a2d\u5b9a\u3084\u7f6e\u304d\u63db\u3048\u3001IPv6\u3084\u30c7\u30e5\u30a2\u30eb\u30b9\u30bf\u30c3\u30af\u306e\u8a2d\u5b9a\u3092\u542b\u3080K3s\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u8a2d\u5b9a\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"flannel\u30aa\u30d7\u30b7\u30e7\u30f3",children:"Flannel\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/flannel-io/flannel/blob/master/README.md",children:"Flannel"}),"\u306f\u3001Kubernetes\u30b3\u30f3\u30c6\u30ca\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\uff08CNI\uff09\u3092\u5b9f\u88c5\u3059\u308b\u30ec\u30a4\u30e4\u30fc3\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30d5\u30a1\u30d6\u30ea\u30c3\u30af\u306e\u8efd\u91cf\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3067\u3059\u3002\u4e00\u822c\u7684\u306bCNI\u30d7\u30e9\u30b0\u30a4\u30f3\u3068\u547c\u3070\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Flannel\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u3067\u306e\u307f\u8a2d\u5b9a\u3067\u304d\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u5185\u306e\u3059\u3079\u3066\u306e\u30b5\u30fc\u30d0\u30fc\u3067\u540c\u4e00\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["Flannel\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306f",(0,i.jsx)(n.code,{children:"vxlan"}),"\u3067\u3059\u3002\u6697\u53f7\u5316\u3092\u6709\u52b9\u306b\u3059\u308b\u306b\u306f\u3001",(0,i.jsx)(n.code,{children:"wireguard-native"}),"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6700\u8fd1\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306eUbuntu\u3092\u4f7f\u7528\u3057\u3066\u3044\u308bRaspberry Pi\u3067",(0,i.jsx)(n.code,{children:"vxlan"}),"\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001",(0,i.jsx)(n.a,{href:"/ja/installation/requirements?os=pi#operating-systems",children:"\u8ffd\u52a0\u306e\u6e96\u5099"}),"\u304c\u5fc5\u8981\u3067\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["Flannel\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3068\u3057\u3066",(0,i.jsx)(n.code,{children:"wireguard-native"}),"\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u4e00\u90e8\u306eLinux\u30c7\u30a3\u30b9\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u8ffd\u52a0\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u5fc5\u8981\u306b\u306a\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f",(0,i.jsx)(n.a,{href:"https://www.wireguard.com/install/",children:"WireGuard\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30ac\u30a4\u30c9"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002WireGuard\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u624b\u9806\u306b\u5f93\u3046\u3053\u3068\u3067\u3001\u9069\u5207\u306a\u30ab\u30fc\u30cd\u30eb\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002WireGuard Flannel\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u524d\u306b\u3001\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9\uff08\u30b5\u30fc\u30d0\u30fc\u3068\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\uff09\u3067WireGuard\u30ab\u30fc\u30cd\u30eb\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u5229\u7528\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"CLI\u30d5\u30e9\u30b0\u3068\u5024"}),(0,i.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--flannel-ipv6-masq"})}),(0,i.jsxs)(n.td,{children:["IPv6\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u306b\u30de\u30b9\u30ab\u30ec\u30fc\u30c9\u30eb\u30fc\u30eb\u3092\u9069\u7528\u3057\u307e\u3059\uff08IPv4\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\uff09\u3002\u30c7\u30e5\u30a2\u30eb\u30b9\u30bf\u30c3\u30af\u307e\u305f\u306fIPv6\u306e\u307f\u306e\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u306e\u307f\u9069\u7528\u3055\u308c\u307e\u3059\u3002",(0,i.jsx)(n.code,{children:"none"}),"\u4ee5\u5916\u306eFlannel\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3068\u4e92\u63db\u6027\u304c\u3042\u308a\u307e\u3059\u3002"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--flannel-external-ip"})}),(0,i.jsx)(n.td,{children:"Flannel\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u306e\u5b9b\u5148\u3068\u3057\u3066\u5185\u90e8IP\u3067\u306f\u306a\u304f\u30ce\u30fc\u30c9\u306e\u5916\u90e8IP\u30a2\u30c9\u30ec\u30b9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u30ce\u30fc\u30c9\u3067--node-external-ip\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u306e\u307f\u9069\u7528\u3055\u308c\u307e\u3059\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--flannel-backend=vxlan"})}),(0,i.jsx)(n.td,{children:"\u30d1\u30b1\u30c3\u30c8\u3092\u30ab\u30d7\u30bb\u30eb\u5316\u3059\u308b\u305f\u3081\u306bVXLAN\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002Raspberry Pi\u3067\u306f\u8ffd\u52a0\u306e\u30ab\u30fc\u30cd\u30eb\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u5fc5\u8981\u306b\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--flannel-backend=host-gw"})}),(0,i.jsx)(n.td,{children:"\u30ce\u30fc\u30c9IP\u3092\u4ecb\u3057\u3066\u30dd\u30c3\u30c9\u30b5\u30d6\u30cd\u30c3\u30c8\u3078\u306eIP\u30eb\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u30af\u30e9\u30b9\u30bf\u30fc\u5185\u306e\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9\u9593\u3067\u76f4\u63a5\u30ec\u30a4\u30e4\u30fc2\u63a5\u7d9a\u304c\u5fc5\u8981\u3067\u3059\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--flannel-backend=wireguard-native"})}),(0,i.jsx)(n.td,{children:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u30ab\u30d7\u30bb\u30eb\u5316\u304a\u3088\u3073\u6697\u53f7\u5316\u3059\u308b\u305f\u3081\u306bWireGuard\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u8ffd\u52a0\u306e\u30ab\u30fc\u30cd\u30eb\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u5fc5\u8981\u306b\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--flannel-backend=ipsec"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"swanctl"}),"\u30d0\u30a4\u30ca\u30ea\u3092\u4ecb\u3057\u3066strongSwan IPSec\u3092\u4f7f\u7528\u3057\u3066\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u6697\u53f7\u5316\u3057\u307e\u3059\u3002\uff08\u975e\u63a8\u5968; v1.27.0\u3067\u524a\u9664\u4e88\u5b9a\uff09"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--flannel-backend=none"})}),(0,i.jsx)(n.td,{children:"Flannel\u3092\u5b8c\u5168\u306b\u7121\u52b9\u306b\u3057\u307e\u3059\u3002"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{title:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b2\u30fc\u30c8",type:"info",children:(0,i.jsxs)(n.p,{children:["K3s\u306f2022-12\u30ea\u30ea\u30fc\u30b9\uff08v1.26.0+k3s1\u3001v1.25.5+k3s1\u3001v1.24.9+k3s1\u3001v1.23.15+k3s1\uff09\u4ee5\u964d\u3001strongSwan\u306e",(0,i.jsx)(n.code,{children:"swanctl"}),"\u304a\u3088\u3073",(0,i.jsx)(n.code,{children:"charon"}),"\u30d0\u30a4\u30ca\u30ea\u3092\u542b\u307e\u306a\u304f\u306a\u308a\u307e\u3057\u305f\u3002\u3053\u308c\u3089\u306e\u30ea\u30ea\u30fc\u30b9\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u307e\u305f\u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u524d\u306b\u3001\u30ce\u30fc\u30c9\u306b\u6b63\u3057\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,i.jsx)(n.code,{children:"ipsec"}),"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u7279\u306b\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059\u3002"]})}),"\n",(0,i.jsxs)(n.h3,{id:"wireguard\u307e\u305f\u306fipsec\u304b\u3089wireguard-native\u3078\u306e\u79fb\u884c",children:[(0,i.jsx)(n.code,{children:"wireguard"}),"\u307e\u305f\u306f",(0,i.jsx)(n.code,{children:"ipsec"}),"\u304b\u3089",(0,i.jsx)(n.code,{children:"wireguard-native"}),"\u3078\u306e\u79fb\u884c"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5f93\u6765\u306e",(0,i.jsx)(n.code,{children:"wireguard"}),"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306f\u30db\u30b9\u30c8\u306b",(0,i.jsx)(n.code,{children:"wg"}),"\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5fc5\u8981\u3067\u3059\u3002\u3053\u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306fK3s v1.26\u4ee5\u964d\u3067\u306f\u5229\u7528\u3067\u304d\u305a\u3001\u30ab\u30fc\u30cd\u30eb\u3068\u76f4\u63a5\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3059\u308b",(0,i.jsx)(n.code,{children:"wireguard-native"}),"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5f93\u6765\u306e",(0,i.jsx)(n.code,{children:"ipsec"}),"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306f\u30db\u30b9\u30c8\u306b",(0,i.jsx)(n.code,{children:"swanctl"}),"\u304a\u3088\u3073",(0,i.jsx)(n.code,{children:"charon"}),"\u30d0\u30a4\u30ca\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5fc5\u8981\u3067\u3059\u3002\u3053\u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306fK3s v1.27\u4ee5\u964d\u3067\u306f\u5229\u7528\u3067\u304d\u305a\u3001",(0,i.jsx)(n.code,{children:"wireguard-native"}),"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u30e6\u30fc\u30b6\u30fc\u306f\u3067\u304d\u308b\u3060\u3051\u65e9\u304f\u65b0\u3057\u3044\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306b\u79fb\u884c\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u79fb\u884c\u306b\u306f\u3001\u30ce\u30fc\u30c9\u304c\u65b0\u3057\u3044\u8a2d\u5b9a\u3067\u8d77\u52d5\u3059\u308b\u9593\u306e\u77ed\u671f\u9593\u306e\u30c0\u30a6\u30f3\u30bf\u30a4\u30e0\u304c\u5fc5\u8981\u3067\u3059\u3002\u4ee5\u4e0b\u306e2\u3064\u306e\u30b9\u30c6\u30c3\u30d7\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u3059\u3079\u3066\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u3067K3s\u8a2d\u5b9a\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001",(0,i.jsx)(n.code,{children:"/etc/rancher/k3s/config.yaml"}),"\u306b",(0,i.jsx)(n.code,{children:"flannel-backend: wireguard-native"}),"\u3092\u542b\u3081\u3001",(0,i.jsx)(n.code,{children:"flannel-backend: wireguard"}),"\u307e\u305f\u306f",(0,i.jsx)(n.code,{children:"flannel-backend: ipsec"}),"\u3092\u7f6e\u304d\u63db\u3048\u307e\u3059\u3002systemd\u30e6\u30cb\u30c3\u30c8\u3067CLI\u30d5\u30e9\u30b0\u3092\u4f7f\u7528\u3057\u3066K3s\u3092\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u540c\u7b49\u306e\u30d5\u30e9\u30b0\u3092\u5909\u66f4\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u59cb\u3081\u3066\u3001\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9\u3092\u518d\u8d77\u52d5\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30ab\u30b9\u30bf\u30e0cni",children:"\u30ab\u30b9\u30bf\u30e0CNI"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--flannel-backend=none"}),"\u3067K3s\u3092\u8d77\u52d5\u3057\u3001\u4efb\u610f\u306eCNI\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002\u307b\u3068\u3093\u3069\u306eCNI\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u306f\u72ec\u81ea\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30dd\u30ea\u30b7\u30fc\u30a8\u30f3\u30b8\u30f3\u304c\u4ed8\u5c5e\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u7af6\u5408\u3092\u907f\u3051\u308b\u305f\u3081\u306b",(0,i.jsx)(n.code,{children:"--disable-network-policy"}),"\u3082\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u8003\u616e\u3059\u3079\u304d\u91cd\u8981\u306a\u60c5\u5831\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\uff1a"]}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsxs)(s,{value:"Canal",default:!0,children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://docs.tigera.io/calico/latest/getting-started/kubernetes/flannel/install-for-flannel#installing-calico-for-policy-and-flannel-aka-canal-for-networking",children:"Canal Docs"}),"\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u8a2a\u554f\u3057\u3001Canal\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u624b\u9806\u306b\u5f93\u3044\u307e\u3059\u3002Canal YAML\u3092\u4fee\u6b63\u3057\u3066\u3001",(0,i.jsx)(n.code,{children:"container_settings"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u3067IP\u8ee2\u9001\u304c\u8a31\u53ef\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\uff1a"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'"container_settings": {\n  "allow_ip_forwarding": true\n}\n'})}),(0,i.jsx)(n.p,{children:"Canal YAML\u3092\u9069\u7528\u3057\u307e\u3059\u3002"}),(0,i.jsx)(n.p,{children:"\u30db\u30b9\u30c8\u3067\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u8a2d\u5b9a\u304c\u9069\u7528\u3055\u308c\u305f\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\uff1a"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat /etc/cni/net.d/10-canal.conflist\n"})}),(0,i.jsx)(n.p,{children:"IP\u8ee2\u9001\u304ctrue\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"})]}),(0,i.jsxs)(s,{value:"Calico",default:!0,children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://docs.tigera.io/calico/latest/reference/configure-cni-plugins",children:"Calico CNI\u30d7\u30e9\u30b0\u30a4\u30f3\u30ac\u30a4\u30c9"}),"\u306b\u5f93\u3044\u307e\u3059\u3002Calico YAML\u3092\u4fee\u6b63\u3057\u3066\u3001",(0,i.jsx)(n.code,{children:"container_settings"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u3067IP\u8ee2\u9001\u304c\u8a31\u53ef\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\uff1a"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'"container_settings": {\n  "allow_ip_forwarding": true\n}\n'})}),(0,i.jsx)(n.p,{children:"Calico YAML\u3092\u9069\u7528\u3057\u307e\u3059\u3002"}),(0,i.jsx)(n.p,{children:"\u30db\u30b9\u30c8\u3067\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u8a2d\u5b9a\u304c\u9069\u7528\u3055\u308c\u305f\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\uff1a"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat /etc/cni/net.d/10-calico.conflist\n"})}),(0,i.jsx)(n.p,{children:"IP\u8ee2\u9001\u304ctrue\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"})]}),(0,i.jsxs)(s,{value:"Cilium",default:!0,children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"k3s-killall.sh"}),"\u307e\u305f\u306f",(0,i.jsx)(n.code,{children:"k3s-uninstall.sh"}),"\u3092\u5b9f\u884c\u3059\u308b\u524d\u306b\u3001",(0,i.jsx)(n.code,{children:"cilium_host"}),"\u3001",(0,i.jsx)(n.code,{children:"cilium_net"}),"\u3001\u304a\u3088\u3073",(0,i.jsx)(n.code,{children:"cilium_vxlan"}),"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u624b\u52d5\u3067\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3092\u884c\u308f\u306a\u3044\u3068\u3001K3s\u304c\u505c\u6b62\u3057\u305f\u3068\u304d\u306b\u30db\u30b9\u30c8\u3078\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u63a5\u7d9a\u304c\u5931\u308f\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ip link delete cilium_host\nip link delete cilium_net\nip link delete cilium_vxlan\n"})}),(0,i.jsx)(n.p,{children:"\u3055\u3089\u306b\u3001cilium\u306eiptables\u30eb\u30fc\u30eb\u3092\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"iptables-save | grep -iv cilium | iptables-restore\nip6tables-save | grep -iv cilium | ip6tables-restore\n"})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u306eegress-selector\u8a2d\u5b9a",children:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u306eEgress Selector\u8a2d\u5b9a"}),"\n",(0,i.jsxs)(n.p,{children:["K3s\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u30fc\u306f\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\uff08apiserver\uff09\u3068\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\uff08kubelet\u304a\u3088\u3073containerd\uff09\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u9593\u306e\u53cc\u65b9\u5411\u901a\u4fe1\u3092\u30ab\u30d7\u30bb\u30eb\u5316\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u30ce\u30fc\u30c9\u9593\u306eWebSocket\u30c8\u30f3\u30cd\u30eb\u3092\u7dad\u6301\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304ckubelet\u304a\u3088\u3073\u30b3\u30f3\u30c6\u30ca\u30e9\u30f3\u30bf\u30a4\u30e0\u306e\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u30dd\u30fc\u30c8\u3092\u5916\u90e8\u63a5\u7d9a\u306b\u516c\u958b\u305b\u305a\u306b\u52d5\u4f5c\u3067\u304d\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304c\u7121\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u3067\u3082\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u304c\u30af\u30e9\u30b9\u30bf\u30fc\u30b5\u30fc\u30d3\u30b9\u306b\u63a5\u7d9a\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u306e\u6a5f\u80fd\u306f\u3001\u4ed6\u306eKubernetes\u30c7\u30a3\u30b9\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u3067\u4e00\u822c\u7684\u306b\u4f7f\u7528\u3055\u308c\u308b",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/extend-kubernetes/setup-konnectivity/",children:"Konnectivity"}),"\u30b5\u30fc\u30d3\u30b9\u3068\u540c\u7b49\u3067\u3042\u308a\u3001apiserver\u306eEgress Selector\u8a2d\u5b9a\u3092\u4ecb\u3057\u3066\u7ba1\u7406\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u30e2\u30fc\u30c9\u306f",(0,i.jsx)(n.code,{children:"agent"}),"\u3067\u3059\u3002",(0,i.jsx)(n.a,{href:"/ja/advanced#running-agentless-servers-experimental",children:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ec\u30b9\u30b5\u30fc\u30d0\u30fc"}),"\u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u3001",(0,i.jsx)(n.code,{children:"pod"}),"\u307e\u305f\u306f",(0,i.jsx)(n.code,{children:"cluster"}),"\u30e2\u30fc\u30c9\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001flannel\u304a\u3088\u3073kube-proxy\u304c\u306a\u3044\u5834\u5408\u3067\u3082apiserver\u304c\u30af\u30e9\u30b9\u30bf\u30fc\u30b5\u30fc\u30d3\u30b9\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["Egress Selector\u30e2\u30fc\u30c9\u306f\u3001",(0,i.jsx)(n.code,{children:"--egress-selector-mode"}),"\u30d5\u30e9\u30b0\u3092\u4ecb\u3057\u3066\u30b5\u30fc\u30d0\u30fc\u3067\u8a2d\u5b9a\u3067\u304d\u3001\u6b21\u306e4\u3064\u306e\u30e2\u30fc\u30c9\u3092\u63d0\u4f9b\u3057\u307e\u3059\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"disabled"}),": apiserver\u306fkubelet\u3084\u30af\u30e9\u30b9\u30bf\u30fc\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3068\u901a\u4fe1\u3059\u308b\u305f\u3081\u306b\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30c8\u30f3\u30cd\u30eb\u3092\u4f7f\u7528\u3057\u307e\u305b\u3093\u3002\u3053\u306e\u30e2\u30fc\u30c9\u3067\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u304ckubelet\u3001CNI\u3001\u304a\u3088\u3073kube-proxy\u3092\u5b9f\u884c\u3057\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306b\u76f4\u63a5\u63a5\u7d9a\u3067\u304d\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u3001apiserver\u306f\u30b5\u30fc\u30d3\u30b9\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u305a\u3001",(0,i.jsx)(n.code,{children:"kubectl exec"}),"\u304a\u3088\u3073",(0,i.jsx)(n.code,{children:"kubectl logs"}),"\u3092\u5b9f\u884c\u3067\u304d\u307e\u305b\u3093\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"agent"}),"\uff08\u30c7\u30d5\u30a9\u30eb\u30c8\uff09: apiserver\u306fkubelet\u3068\u901a\u4fe1\u3059\u308b\u305f\u3081\u306b\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30c8\u30f3\u30cd\u30eb\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u3053\u306e\u30e2\u30fc\u30c9\u3067\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u3082kubelet\u3001CNI\u3001\u304a\u3088\u3073kube-proxy\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u3001apiserver\u306f\u30b5\u30fc\u30d3\u30b9\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u305b\u3093\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pod"}),": apiserver\u306fkubelet\u304a\u3088\u3073\u30b5\u30fc\u30d3\u30b9\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3068\u901a\u4fe1\u3059\u308b\u305f\u3081\u306b\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30c8\u30f3\u30cd\u30eb\u3092\u4f7f\u7528\u3057\u3001\u30ce\u30fc\u30c9\u304a\u3088\u3073\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u76e3\u8996\u3057\u3066\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u63a5\u7d9a\u3092\u6b63\u3057\u3044\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3057\u307e\u3059\u3002",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"\u6ce8\u610f"}),": \u3053\u306e\u30e2\u30fc\u30c9\u306f\u3001\u72ec\u81ea\u306eIPAM\u3092\u4f7f\u7528\u3057\u3001\u30ce\u30fc\u30c9\u306ePodCIDR\u5272\u308a\u5f53\u3066\u3092\u5c0a\u91cd\u3057\u306a\u3044CNI\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u306f\u6a5f\u80fd\u3057\u307e\u305b\u3093\u3002\u3053\u308c\u3089\u306eCNI\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001",(0,i.jsx)(n.code,{children:"cluster"}),"\u307e\u305f\u306f",(0,i.jsx)(n.code,{children:"agent"}),"\u30e2\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cluster"}),": apiserver\u306fkubelet\u304a\u3088\u3073\u30b5\u30fc\u30d3\u30b9\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3068\u901a\u4fe1\u3059\u308b\u305f\u3081\u306b\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30c8\u30f3\u30cd\u30eb\u3092\u4f7f\u7528\u3057\u3001\u30dd\u30c3\u30c9\u304a\u3088\u3073\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u76e3\u8996\u3057\u3066\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u63a5\u7d9a\u3092\u6b63\u3057\u3044\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3057\u307e\u3059\u3002\u3053\u306e\u30e2\u30fc\u30c9\u306f\u3001\u7570\u306a\u308b\u30af\u30e9\u30b9\u30bf\u30fc\u69cb\u6210\u9593\u3067\u306e\u79fb\u690d\u6027\u304c\u6700\u3082\u9ad8\u3044\u3067\u3059\u304c\u3001\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u304c\u5897\u52a0\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30c7\u30e5\u30a2\u30eb\u30b9\u30bf\u30c3\u30afipv4--ipv6\u30cd\u30c3\u30c8\u30ef\u30fc\u30ad\u30f3\u30b0",children:"\u30c7\u30e5\u30a2\u30eb\u30b9\u30bf\u30c3\u30af\uff08IPv4 + IPv6\uff09\u30cd\u30c3\u30c8\u30ef\u30fc\u30ad\u30f3\u30b0"}),"\n",(0,i.jsx)(n.admonition,{title:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b2\u30fc\u30c8",type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.21.0%2Bk3s1",children:"v1.21.0+k3s1"}),"\u304b\u3089\u5b9f\u9a13\u7684\u30b5\u30dd\u30fc\u30c8\u304c\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.23.7%2Bk3s1",children:"v1.23.7+k3s1"}),"\u304b\u3089\u5b89\u5b9a\u3057\u305f\u30b5\u30dd\u30fc\u30c8\u304c\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"]})}),"\n",(0,i.jsxs)(n.admonition,{title:"\u65e2\u77e5\u306e\u554f\u984c",type:"warning",children:[(0,i.jsxs)(n.p,{children:["1.27\u4ee5\u524d\u3067\u306f\u3001Kubernetes\u306e",(0,i.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/issues/111695",children:"Issue #111695"}),"\u306b\u3088\u308a\u3001\u30c7\u30e5\u30a2\u30eb\u30b9\u30bf\u30c3\u30af\u74b0\u5883\u3067\u30af\u30e9\u30b9\u30bf\u30fc\u901a\u4fe1\u306b\u30d7\u30e9\u30a4\u30de\u30ea\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u4f7f\u7528\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3001Kubelet\u304c\u30ce\u30fc\u30c9\u306eIPv6\u30a2\u30c9\u30ec\u30b9\u3092\u7121\u8996\u3057\u307e\u3059\u3002\u3053\u306e\u30d0\u30b0\u3092\u56de\u907f\u3059\u308b\u306b\u306f\u30011.27\u4ee5\u964d\u3092\u4f7f\u7528\u3059\u308b\u304b\u3001\u6b21\u306e\u30d5\u30e9\u30b0\u3092K3s\u30b5\u30fc\u30d0\u30fc\u304a\u3088\u3073\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u4e21\u65b9\u306b\u8ffd\u52a0\u3057\u307e\u3059\uff1a"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'--kubelet-arg="node-ip=0.0.0.0" # IPv4\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u512a\u5148\u3059\u308b\u5834\u5408\n#\u307e\u305f\u306f\n--kubelet-arg="node-ip=::" # IPv6\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u512a\u5148\u3059\u308b\u5834\u5408\n'})})]}),"\n",(0,i.jsx)(n.p,{children:"\u30c7\u30e5\u30a2\u30eb\u30b9\u30bf\u30c3\u30af\u30cd\u30c3\u30c8\u30ef\u30fc\u30ad\u30f3\u30b0\u306f\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u304c\u6700\u521d\u306b\u4f5c\u6210\u3055\u308c\u308b\u3068\u304d\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002IPv4\u306e\u307f\u3067\u958b\u59cb\u3055\u308c\u305f\u65e2\u5b58\u306e\u30af\u30e9\u30b9\u30bf\u30fc\u3067\u306f\u6709\u52b9\u306b\u3067\u304d\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["K3s\u3067\u30c7\u30e5\u30a2\u30eb\u30b9\u30bf\u30c3\u30af\u3092\u6709\u52b9\u306b\u3059\u308b\u306b\u306f\u3001\u3059\u3079\u3066\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u3067\u6709\u52b9\u306a\u30c7\u30e5\u30a2\u30eb\u30b9\u30bf\u30c3\u30af",(0,i.jsx)(n.code,{children:"cluster-cidr"}),"\u304a\u3088\u3073",(0,i.jsx)(n.code,{children:"service-cidr"}),"\u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u4ee5\u4e0b\u306f\u6709\u52b9\u306a\u8a2d\u5b9a\u306e\u4f8b\u3067\u3059\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"--cluster-cidr=10.42.0.0/16,2001:cafe:42::/56 --service-cidr=10.43.0.0/16,2001:cafe:43::/112\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6709\u52b9\u306a",(0,i.jsx)(n.code,{children:"cluster-cidr"}),"\u304a\u3088\u3073",(0,i.jsx)(n.code,{children:"service-cidr"}),"\u5024\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u304c\u3001\u4e0a\u8a18\u306e\u30de\u30b9\u30af\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002",(0,i.jsx)(n.code,{children:"cluster-cidr"}),"\u30de\u30b9\u30af\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306f\u3001\u8a08\u753b\u3055\u308c\u305f\u30ce\u30fc\u30c9\u3054\u3068\u306e\u30dd\u30c3\u30c9\u6570\u304a\u3088\u3073\u7dcf\u30ce\u30fc\u30c9\u6570\u306b\u5408\u308f\u305b\u3066",(0,i.jsx)(n.code,{children:"node-cidr-mask-size-ipv4"}),"\u304a\u3088\u3073",(0,i.jsx)(n.code,{children:"node-cidr-mask-size-ipv6"}),"\u5024\u3082\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u6700\u5927\u306e",(0,i.jsx)(n.code,{children:"service-cidr"}),"\u30de\u30b9\u30af\u306fIPv4\u306e\u5834\u5408\u306f/12\u3001IPv6\u306e\u5834\u5408\u306f/112\u3067\u3059\u3002\u30d1\u30d6\u30ea\u30c3\u30af\u30af\u30e9\u30a6\u30c9\u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u5834\u5408\u306f\u3001IPv6\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u8a31\u53ef\u3059\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u30ab\u30b9\u30bf\u30e0CNI\u30d7\u30e9\u30b0\u30a4\u30f3\u3001\u3064\u307e\u308aFlannel\u4ee5\u5916\u306eCNI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u8ffd\u52a0\u306e\u8a2d\u5b9a\u304c\u5fc5\u8981\u306b\u306a\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30c7\u30e5\u30a2\u30eb\u30b9\u30bf\u30c3\u30af\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30dd\u30ea\u30b7\u30fc\u304c\u6709\u52b9\u306b\u3067\u304d\u308b\u304b\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsx)(n.admonition,{title:"\u65e2\u77e5\u306e\u554f\u984c",type:"warning",children:(0,i.jsx)(n.p,{children:"\u30af\u30e9\u30b9\u30bfCIDR\u304a\u3088\u3073\u30b5\u30fc\u30d3\u30b9CIDR\u3092IPv6\u3092\u4e3b\u8981\u30d5\u30a1\u30df\u30ea\u30fc\u3068\u3057\u3066\u5b9a\u7fa9\u3059\u308b\u5834\u5408\u3001\u3059\u3079\u3066\u306e\u30af\u30e9\u30b9\u30bf\u30e1\u30f3\u30d0\u30fc\u306e\u30ce\u30fc\u30c9IP\u3092\u660e\u793a\u7684\u306b\u8a2d\u5b9a\u3057\u3001\u30ce\u30fc\u30c9\u306e\u5e0c\u671b\u3059\u308bIPv6\u30a2\u30c9\u30ec\u30b9\u3092\u6700\u521d\u306e\u30a2\u30c9\u30ec\u30b9\u3068\u3057\u3066\u914d\u7f6e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001kubelet\u306f\u5e38\u306bIPv4\u3092\u4e3b\u8981\u30a2\u30c9\u30ec\u30b9\u30d5\u30a1\u30df\u30ea\u30fc\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002"})}),"\n",(0,i.jsx)(n.h2,{id:"\u30b7\u30f3\u30b0\u30eb\u30b9\u30bf\u30c3\u30afipv6\u30cd\u30c3\u30c8\u30ef\u30fc\u30ad\u30f3\u30b0",children:"\u30b7\u30f3\u30b0\u30eb\u30b9\u30bf\u30c3\u30afIPv6\u30cd\u30c3\u30c8\u30ef\u30fc\u30ad\u30f3\u30b0"}),"\n",(0,i.jsx)(n.admonition,{title:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b2\u30fc\u30c8",type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.22.9%2Bk3s1",children:"v1.22.9+k3s1"}),"\u304b\u3089\u5229\u7528\u53ef\u80fd"]})}),"\n",(0,i.jsx)(n.admonition,{title:"\u65e2\u77e5\u306e\u554f\u984c",type:"warning",children:(0,i.jsxs)(n.p,{children:["IPv6\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u30eb\u30fc\u30c8\u304c\u30eb\u30fc\u30bf\u30fc\u5e83\u544a\uff08RA\uff09\u306b\u3088\u3063\u3066\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001sysctl ",(0,i.jsx)(n.code,{children:"net.ipv6.conf.all.accept_ra=2"}),"\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u3046\u3057\u306a\u3044\u3068\u3001\u30ce\u30fc\u30c9\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u30eb\u30fc\u30c8\u304c\u671f\u9650\u5207\u308c\u306b\u306a\u308b\u3068\u30c9\u30ed\u30c3\u30d7\u3057\u307e\u3059\u3002RA\u3092\u53d7\u3051\u5165\u308c\u308b\u3053\u3068\u306f\u3001",(0,i.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/issues/91507",children:"\u4e2d\u9593\u8005\u653b\u6483"}),"\u306e\u30ea\u30b9\u30af\u3092\u9ad8\u3081\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,i.jsxs)(n.p,{children:["\u30b7\u30f3\u30b0\u30eb\u30b9\u30bf\u30c3\u30afIPv6\u30af\u30e9\u30b9\u30bf\uff08IPv4\u3092\u542b\u307e\u306a\u3044\u30af\u30e9\u30b9\u30bf\uff09\u306f\u3001",(0,i.jsx)(n.code,{children:"--cluster-cidr"}),"\u304a\u3088\u3073",(0,i.jsx)(n.code,{children:"--service-cidr"}),"\u30d5\u30e9\u30b0\u3092\u4f7f\u7528\u3057\u3066K3s\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u4ee5\u4e0b\u306f\u6709\u52b9\u306a\u8a2d\u5b9a\u306e\u4f8b\u3067\u3059\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--cluster-cidr=2001:cafe:42::/56 --service-cidr=2001:cafe:43::/112\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u30db\u30b9\u30c8\u540d\u306e\u306a\u3044\u30ce\u30fc\u30c9",children:"\u30db\u30b9\u30c8\u540d\u306e\u306a\u3044\u30ce\u30fc\u30c9"}),"\n",(0,i.jsxs)(n.p,{children:["Linode\u306a\u3069\u306e\u4e00\u90e8\u306e\u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306f\u3001\u30db\u30b9\u30c8\u540d\u3068\u3057\u3066\u300clocalhost\u300d\u3092\u6301\u3064\u30de\u30b7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u3001\u4ed6\u306e\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3067\u306f\u30db\u30b9\u30c8\u540d\u304c\u307e\u3063\u305f\u304f\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30c9\u30e1\u30a4\u30f3\u540d\u89e3\u6c7a\u306b\u554f\u984c\u304c\u751f\u3058\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306b\u3001K3s\u3092",(0,i.jsx)(n.code,{children:"--node-name"}),"\u30d5\u30e9\u30b0\u307e\u305f\u306f",(0,i.jsx)(n.code,{children:"K3S_NODE_NAME"}),"\u74b0\u5883\u5909\u6570\u3092\u4f7f\u7528\u3057\u3066\u5b9f\u884c\u3057\u3001\u30ce\u30fc\u30c9\u540d\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>c});var i=s(7294);const r={},l=i.createContext(r);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);