"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9437],{6344:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var r=s(5893),t=s(1151);const c={title:"\u30b5\u30fc\u30d0\u30fc\u30ed\u30fc\u30eb\u306e\u7ba1\u7406"},l=void 0,d={id:"installation/server-roles",title:"\u30b5\u30fc\u30d0\u30fc\u30ed\u30fc\u30eb\u306e\u7ba1\u7406",description:"--cluster-init \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066 K3s \u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3059\u308b\u3068\u3001apiserver\u3001controller-manager\u3001scheduler\u3001\u304a\u3088\u3073 etcd \u3092\u542b\u3080\u3059\u3079\u3066\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\u7279\u5b9a\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u7121\u52b9\u306b\u3057\u3066\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u3068 etcd \u306e\u30ed\u30fc\u30eb\u3092\u5225\u3005\u306e\u30ce\u30fc\u30c9\u306b\u5206\u5272\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/installation/server-roles.md",sourceDirName:"installation",slug:"/installation/server-roles",permalink:"/ja/installation/server-roles",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/server-roles.md",tags:[],version:"current",lastUpdatedAt:1724781331e3,frontMatter:{title:"\u30b5\u30fc\u30d0\u30fc\u30ed\u30fc\u30eb\u306e\u7ba1\u7406"},sidebar:"mySidebar",previous:{title:"\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/ja/installation/airgap"},next:{title:"\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u7ba1\u7406",permalink:"/ja/installation/packaged-components"}},i={},o=[{value:"\u5c02\u7528\u306e <code>etcd</code> \u30ce\u30fc\u30c9",id:"\u5c02\u7528\u306e-etcd-\u30ce\u30fc\u30c9",level:2},{value:"\u5c02\u7528\u306e <code>control-plane</code> \u30ce\u30fc\u30c9",id:"\u5c02\u7528\u306e-control-plane-\u30ce\u30fc\u30c9",level:2},{value:"\u65e2\u5b58\u306e\u30b5\u30fc\u30d0\u30fc\u3078\u306e\u30ed\u30fc\u30eb\u306e\u8ffd\u52a0",id:"\u65e2\u5b58\u306e\u30b5\u30fc\u30d0\u30fc\u3078\u306e\u30ed\u30fc\u30eb\u306e\u8ffd\u52a0",level:2},{value:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u69cb\u6587",id:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u69cb\u6587",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"--cluster-init"})," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066 K3s \u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3059\u308b\u3068\u3001apiserver\u3001controller-manager\u3001scheduler\u3001\u304a\u3088\u3073 etcd \u3092\u542b\u3080\u3059\u3079\u3066\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\u7279\u5b9a\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u7121\u52b9\u306b\u3057\u3066\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u3068 etcd \u306e\u30ed\u30fc\u30eb\u3092\u5225\u3005\u306e\u30ce\u30fc\u30c9\u306b\u5206\u5272\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3001\u57cb\u3081\u8fbc\u307f etcd \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u306e\u307f\u95a2\u9023\u3057\u307e\u3059\u3002\u57cb\u3081\u8fbc\u307f etcd \u3092\u4f7f\u7528\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u3059\u3079\u3066\u306e\u30b5\u30fc\u30d0\u30fc\u306f\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u30ed\u30fc\u30eb\u3092\u6301\u3061\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u5c02\u7528\u306e-etcd-\u30ce\u30fc\u30c9",children:["\u5c02\u7528\u306e ",(0,r.jsx)(n.code,{children:"etcd"})," \u30ce\u30fc\u30c9"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"etcd"})," \u30ed\u30fc\u30eb\u306e\u307f\u3092\u6301\u3064\u30b5\u30fc\u30d0\u30fc\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u3059\u3079\u3066\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u7121\u52b9\u306b\u3057\u3066 K3s \u3092\u8d77\u52d5\u3057\u307e\u3059:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"curl -fL https://get.k3s.io | sh -s - server --cluster-init --disable-apiserver --disable-controller-manager --disable-scheduler\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u6700\u521d\u306e\u30ce\u30fc\u30c9\u306f etcd \u3092\u8d77\u52d5\u3057\u3001\u8ffd\u52a0\u306e ",(0,r.jsx)(n.code,{children:"etcd"})," \u304a\u3088\u3073/\u307e\u305f\u306f ",(0,r.jsx)(n.code,{children:"control-plane"})," \u30ce\u30fc\u30c9\u304c\u53c2\u52a0\u3059\u308b\u306e\u3092\u5f85\u3061\u307e\u3059\u3002\u30af\u30e9\u30b9\u30bf\u30fc\u306f\u3001",(0,r.jsx)(n.code,{children:"control-plane"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u6709\u52b9\u306a\u8ffd\u52a0\u306e\u30b5\u30fc\u30d0\u30fc\u304c\u53c2\u52a0\u3059\u308b\u307e\u3067\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u5c02\u7528\u306e-control-plane-\u30ce\u30fc\u30c9",children:["\u5c02\u7528\u306e ",(0,r.jsx)(n.code,{children:"control-plane"})," \u30ce\u30fc\u30c9"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u5c02\u7528\u306e ",(0,r.jsx)(n.code,{children:"control-plane"})," \u30ce\u30fc\u30c9\u306f\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u6700\u521d\u306e\u30b5\u30fc\u30d0\u30fc\u306b\u306f\u306a\u308c\u307e\u305b\u3093\u3002\u5c02\u7528\u306e ",(0,r.jsx)(n.code,{children:"control-plane"})," \u30ce\u30fc\u30c9\u304c\u53c2\u52a0\u3059\u308b\u524d\u306b\u3001",(0,r.jsx)(n.code,{children:"etcd"})," \u30ed\u30fc\u30eb\u3092\u6301\u3064\u65e2\u5b58\u306e\u30ce\u30fc\u30c9\u304c\u5fc5\u8981\u3067\u3059\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"control-plane"})," \u30ed\u30fc\u30eb\u306e\u307f\u3092\u6301\u3064\u30b5\u30fc\u30d0\u30fc\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001etcd \u3092\u7121\u52b9\u306b\u3057\u3066 k3s \u3092\u8d77\u52d5\u3057\u307e\u3059:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -fL https://get.k3s.io | sh -s - server --token <token> --disable-etcd --server https://<etcd-only-node>:6443 \n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5c02\u7528\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u3092\u4f5c\u6210\u3057\u305f\u5f8c\u3001\u9078\u629e\u3057\u305f\u30ed\u30fc\u30eb\u306f ",(0,r.jsx)(n.code,{children:"kubectl get node"})," \u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes\nNAME           STATUS   ROLES                       AGE     VERSION\nk3s-server-1   Ready    etcd                        5h39m   v1.20.4+k3s1\nk3s-server-2   Ready    control-plane,master        5h39m   v1.20.4+k3s1\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u65e2\u5b58\u306e\u30b5\u30fc\u30d0\u30fc\u3078\u306e\u30ed\u30fc\u30eb\u306e\u8ffd\u52a0",children:"\u65e2\u5b58\u306e\u30b5\u30fc\u30d0\u30fc\u3078\u306e\u30ed\u30fc\u30eb\u306e\u8ffd\u52a0"}),"\n",(0,r.jsxs)(n.p,{children:["\u30ed\u30fc\u30eb\u306f\u3001\u7121\u52b9\u5316\u30d5\u30e9\u30b0\u3092\u524a\u9664\u3057\u3066 K3s \u3092\u518d\u8d77\u52d5\u3059\u308b\u3053\u3068\u3067\u3001\u65e2\u5b58\u306e\u5c02\u7528\u30ce\u30fc\u30c9\u306b\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u5c02\u7528\u306e ",(0,r.jsx)(n.code,{children:"etcd"})," \u30ce\u30fc\u30c9\u306b ",(0,r.jsx)(n.code,{children:"control-plane"})," \u30ed\u30fc\u30eb\u3092\u8ffd\u52a0\u3057\u305f\u3044\u5834\u5408\u3001systemd \u30e6\u30cb\u30c3\u30c8\u307e\u305f\u306f\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u304b\u3089 ",(0,r.jsx)(n.code,{children:"--disable-apiserver --disable-controller-manager --disable-scheduler"})," \u30d5\u30e9\u30b0\u3092\u524a\u9664\u3057\u3001\u30b5\u30fc\u30d3\u30b9\u3092\u518d\u8d77\u52d5\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u69cb\u6587",children:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u69cb\u6587"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ed6\u306e\u3059\u3079\u3066\u306e CLI \u30d5\u30e9\u30b0\u3068\u540c\u69d8\u306b\u3001",(0,r.jsx)(n.a,{href:"/ja/installation/configuration#configuration-file",children:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"})," \u3092\u4f7f\u7528\u3057\u3066\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u7121\u52b9\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u5c02\u7528\u306e ",(0,r.jsx)(n.code,{children:"etcd"})," \u30ce\u30fc\u30c9\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u5024\u3092 ",(0,r.jsx)(n.code,{children:"/etc/rancher/k3s/config.yaml"})," \u306b\u914d\u7f6e\u3057\u307e\u3059:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"cluster-init: true\ndisable-apiserver: true\ndisable-controller-manager: true\ndisable-scheduler: true\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>l});var r=s(7294);const t={},c=r.createContext(t);function l(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);