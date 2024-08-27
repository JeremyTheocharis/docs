"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3123],{4280:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>t});var d=s(5893),i=s(1151);const c={title:"\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u7ba1\u7406"},l=void 0,r={id:"installation/packaged-components",title:"\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u7ba1\u7406",description:"\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306e\u81ea\u52d5\u30c7\u30d7\u30ed\u30a4 (AddOns)",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/installation/packaged-components.md",sourceDirName:"installation",slug:"/installation/packaged-components",permalink:"/ja/installation/packaged-components",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/packaged-components.md",tags:[],version:"current",lastUpdatedAt:1724781331e3,frontMatter:{title:"\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u7ba1\u7406"},sidebar:"mySidebar",previous:{title:"\u30b5\u30fc\u30d0\u30fc\u30ed\u30fc\u30eb\u306e\u7ba1\u7406",permalink:"/ja/installation/server-roles"},next:{title:"K3s\u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/ja/installation/uninstall"}},a={},t=[{value:"\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306e\u81ea\u52d5\u30c7\u30d7\u30ed\u30a4 (AddOns)",id:"\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306e\u81ea\u52d5\u30c7\u30d7\u30ed\u30a4-addons",level:2},{value:"\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",id:"\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",level:3},{value:"\u30e6\u30fc\u30b6\u30fcAddOns",id:"\u30e6\u30fc\u30b6\u30fcaddons",level:3},{value:"\u30d5\u30a1\u30a4\u30eb\u547d\u540d\u8981\u4ef6",id:"\u30d5\u30a1\u30a4\u30eb\u547d\u540d\u8981\u4ef6",level:4},{value:"\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306e\u7121\u52b9\u5316",id:"\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306e\u7121\u52b9\u5316",level:2},{value:"<code>--disable</code> \u30d5\u30e9\u30b0\u3092\u4f7f\u7528\u3059\u308b",id:"--disable-\u30d5\u30e9\u30b0\u3092\u4f7f\u7528\u3059\u308b",level:3},{value:".skip\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3059\u308b",id:"skip\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3059\u308b",level:3},{value:"Helm AddOns",id:"helm-addons",level:2}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306e\u81ea\u52d5\u30c7\u30d7\u30ed\u30a4-addons",children:"\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306e\u81ea\u52d5\u30c7\u30d7\u30ed\u30a4 (AddOns)"}),"\n",(0,d.jsxs)(n.p,{children:["\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u4e0a\u3067\u306f\u3001",(0,d.jsx)(n.code,{children:"/var/lib/rancher/k3s/server/manifests"})," \u306b\u3042\u308b\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u8d77\u52d5\u6642\u304a\u3088\u3073\u30c7\u30a3\u30b9\u30af\u4e0a\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u5909\u66f4\u3055\u308c\u305f\u3068\u304d\u306b\u3001",(0,d.jsx)(n.code,{children:"kubectl apply"})," \u306b\u4f3c\u305f\u65b9\u6cd5\u3067\u81ea\u52d5\u7684\u306bKubernetes\u306b\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u30d5\u30a1\u30a4\u30eb\u3092\u524a\u9664\u3057\u3066\u3082\u3001\u5bfe\u5fdc\u3059\u308b\u30ea\u30bd\u30fc\u30b9\u306f\u30af\u30e9\u30b9\u30bf\u30fc\u304b\u3089\u524a\u9664\u3055\u308c\u307e\u305b\u3093\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306f ",(0,d.jsx)(n.code,{children:"kube-system"})," \u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9\u306e ",(0,d.jsx)(n.code,{children:"AddOn"})," \u30ab\u30b9\u30bf\u30e0\u30ea\u30bd\u30fc\u30b9\u3068\u3057\u3066\u8ffd\u8de1\u3055\u308c\u307e\u3059\u3002\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u9069\u7528\u6642\u306b\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u3084\u8b66\u544a\u306f\u3001\u5bfe\u5fdc\u3059\u308b ",(0,d.jsx)(n.code,{children:"AddOn"})," \u306b\u5bfe\u3057\u3066 ",(0,d.jsx)(n.code,{children:"kubectl describe"})," \u3092\u4f7f\u7528\u3059\u308b\u304b\u3001",(0,d.jsx)(n.code,{children:"kubectl get event -n kube-system"})," \u3092\u4f7f\u7528\u3057\u3066\u305d\u306e\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9\u306e\u3059\u3079\u3066\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",children:"\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\n",(0,d.jsxs)(n.p,{children:["K3s\u306b\u306f\u3001",(0,d.jsx)(n.code,{children:"coredns"}),"\u3001",(0,d.jsx)(n.code,{children:"traefik"}),"\u3001",(0,d.jsx)(n.code,{children:"local-storage"}),"\u3001\u304a\u3088\u3073 ",(0,d.jsx)(n.code,{children:"metrics-server"})," \u306a\u3069\u3001\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u4ecb\u3057\u3066AddOns\u3068\u3057\u3066\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u308b\u591a\u6570\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u4ed8\u5c5e\u3057\u3066\u3044\u307e\u3059\u3002\u7d44\u307f\u8fbc\u307f\u306e ",(0,d.jsx)(n.code,{children:"servicelb"})," \u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u306b\u306f\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u6b74\u53f2\u7684\u306a\u7406\u7531\u304b\u3089 ",(0,d.jsx)(n.code,{children:"AddOn"})," \u3068\u3057\u3066\u7121\u52b9\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306fK3s\u306b\u3088\u3063\u3066\u7ba1\u7406\u3055\u308c\u3066\u304a\u308a\u3001\u5909\u66f4\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u306fK3s\u304c\u8d77\u52d5\u3059\u308b\u305f\u3073\u306b\u30c7\u30a3\u30b9\u30af\u306b\u518d\u66f8\u304d\u8fbc\u307f\u3055\u308c\u3001\u305d\u306e\u6574\u5408\u6027\u304c\u78ba\u4fdd\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u30e6\u30fc\u30b6\u30fcaddons",children:"\u30e6\u30fc\u30b6\u30fcAddOns"}),"\n",(0,d.jsxs)(n.p,{children:["\u8ffd\u52a0\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u914d\u7f6e\u3057\u3066 ",(0,d.jsx)(n.code,{children:"AddOn"})," \u3068\u3057\u3066\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u5404\u30d5\u30a1\u30a4\u30eb\u306b\u306f\u3001",(0,d.jsx)(n.code,{children:"---"})," YAML\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30bb\u30d1\u30ec\u30fc\u30bf\u30fc\u3067\u533a\u5207\u3089\u308c\u305f\u8907\u6570\u306eKubernetes\u30ea\u30bd\u30fc\u30b9\u3092\u542b\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u5185\u306e\u30ea\u30bd\u30fc\u30b9\u306e\u6574\u7406\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306f\u3001Kubernetes\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e",(0,d.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/",children:"\u30ea\u30bd\u30fc\u30b9\u7ba1\u7406"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u30d5\u30a1\u30a4\u30eb\u547d\u540d\u8981\u4ef6",children:"\u30d5\u30a1\u30a4\u30eb\u547d\u540d\u8981\u4ef6"}),"\n",(0,d.jsxs)(n.p,{children:["\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306e\u5404\u30d5\u30a1\u30a4\u30eb\u306e ",(0,d.jsx)(n.code,{children:"AddOn"})," \u540d\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u30d9\u30fc\u30b9\u540d\u304b\u3089\u6d3e\u751f\u3057\u307e\u3059\u3002\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\uff08\u307e\u305f\u306f\u30b5\u30d6\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\uff09\u306e\u3059\u3079\u3066\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u4e00\u610f\u306e\u540d\u524d\u3092\u6301\u3061\u3001Kubernetes\u306e",(0,d.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/",children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u547d\u540d\u5236\u9650"}),"\u306b\u5f93\u3046\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306eK3s\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u540d\u524d\u3068\u7af6\u5408\u3057\u306a\u3044\u3088\u3046\u306b\u3082\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u30d5\u30a1\u30a4\u30eb\u540d\u306b\u30a2\u30f3\u30c0\u30fc\u30b9\u30b3\u30a2\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u5831\u544a\u3055\u308c\u308b\u30a8\u30e9\u30fc\u306e\u4f8b\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\uff1a"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Failed to process config: failed to process /var/lib/rancher/k3s/server/manifests/example_manifest.yaml:    Addon.k3s.cattle.io \"example_manifest\" is invalid: metadata.name: Invalid value: \"example_manifest\":     a lowercase RFC 1123 subdomain must consist of lower case alphanumeric characters, '-' or '.', and must start and end with an alphanumeric character    (e.g. 'example.com', regex used for validation is '[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*')"})}),"\n"]}),"\n",(0,d.jsx)(n.admonition,{type:"danger",children:(0,d.jsx)(n.p,{children:"\u8907\u6570\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u304c\u3042\u308a\u3001\u8907\u6570\u306e\u30b5\u30fc\u30d0\u30fc\u306b\u8ffd\u52a0\u306eAddOn\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u3092\u914d\u7f6e\u3059\u308b\u5834\u5408\u3001\u30d5\u30a1\u30a4\u30eb\u304c\u3053\u308c\u3089\u306e\u30ce\u30fc\u30c9\u9593\u3067\u540c\u671f\u3055\u308c\u308b\u3053\u3068\u3092\u4fdd\u8a3c\u3059\u308b\u306e\u306f\u3042\u306a\u305f\u306e\u8cac\u4efb\u3067\u3059\u3002K3s\u306f\u30ce\u30fc\u30c9\u9593\u3067AddOn\u306e\u5185\u5bb9\u3092\u540c\u671f\u305b\u305a\u3001\u7570\u306a\u308b\u30b5\u30fc\u30d0\u30fc\u304c\u7af6\u5408\u3059\u308b\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u3088\u3046\u3068\u3057\u305f\u5834\u5408\u306e\u6b63\u3057\u3044\u52d5\u4f5c\u3092\u4fdd\u8a3c\u3067\u304d\u307e\u305b\u3093\u3002"})}),"\n",(0,d.jsx)(n.h2,{id:"\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306e\u7121\u52b9\u5316",children:"\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306e\u7121\u52b9\u5316"}),"\n",(0,d.jsx)(n.p,{children:"\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u7279\u5b9a\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u30c7\u30d7\u30ed\u30a4\u3092\u7121\u52b9\u306b\u3059\u308b\u65b9\u6cd5\u306f2\u3064\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,d.jsxs)(n.h3,{id:"--disable-\u30d5\u30e9\u30b0\u3092\u4f7f\u7528\u3059\u308b",children:[(0,d.jsx)(n.code,{children:"--disable"})," \u30d5\u30e9\u30b0\u3092\u4f7f\u7528\u3059\u308b"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4e0a\u8a18\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306eAddOns\u306b\u52a0\u3048\u3066\u3001",(0,d.jsx)(n.code,{children:"manifests"})," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u914d\u7f6e\u3055\u308c\u305f\u8ffd\u52a0\u306e\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306eAddOns\u306f\u3001",(0,d.jsx)(n.code,{children:"--disable"})," \u30d5\u30e9\u30b0\u3092\u4f7f\u7528\u3057\u3066\u7121\u52b9\u306b\u3067\u304d\u307e\u3059\u3002\u7121\u52b9\u306b\u3055\u308c\u305fAddOns\u306f\u30af\u30e9\u30b9\u30bf\u30fc\u304b\u3089\u7a4d\u6975\u7684\u306b\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3001\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u306f ",(0,d.jsx)(n.code,{children:"manifests"})," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u524a\u9664\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4f8b\u3048\u3070\u3001\u65b0\u3057\u3044\u30af\u30e9\u30b9\u30bf\u30fc\u306btraefik\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u304b\u3001\u65e2\u5b58\u306e\u30af\u30e9\u30b9\u30bf\u30fc\u304b\u3089\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u3092\u524a\u9664\u3059\u308b\u306b\u306f\u3001",(0,d.jsx)(n.code,{children:"--disable=traefik"})," \u3092\u4f7f\u7528\u3057\u3066K3s\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002\u8907\u6570\u306e\u9805\u76ee\u3092\u7121\u52b9\u306b\u3059\u308b\u306b\u306f\u3001\u540d\u524d\u3092\u30ab\u30f3\u30de\u3067\u533a\u5207\u308b\u304b\u3001\u30d5\u30e9\u30b0\u3092\u7e70\u308a\u8fd4\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"skip\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3059\u308b",children:".skip\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3059\u308b"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"/var/lib/rancher/k3s/server/manifests"})," \u914d\u4e0b\u306e\u4efb\u610f\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u5bfe\u3057\u3066\u3001\u5bfe\u5fdc\u3059\u308b\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u3092K3s\u304c\u7121\u8996\u3059\u308b\u3088\u3046\u306b\u3059\u308b ",(0,d.jsx)(n.code,{children:".skip"})," \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002",(0,d.jsx)(n.code,{children:".skip"})," \u30d5\u30a1\u30a4\u30eb\u306e\u5185\u5bb9\u306f\u95a2\u4fc2\u306a\u304f\u3001\u305d\u306e\u5b58\u5728\u306e\u307f\u304c\u30c1\u30a7\u30c3\u30af\u3055\u308c\u307e\u3059\u3002AddOn\u304c\u65e2\u306b\u4f5c\u6210\u3055\u308c\u305f\u5f8c\u306b ",(0,d.jsx)(n.code,{children:".skip"})," \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3066\u3082\u3001\u305d\u308c\u3092\u524a\u9664\u307e\u305f\u306f\u5909\u66f4\u3059\u308b\u3053\u3068\u306f\u306a\u304f\u3001\u30ea\u30bd\u30fc\u30b9\u3082\u5909\u66f4\u3055\u308c\u307e\u305b\u3093\u3002\u30d5\u30a1\u30a4\u30eb\u306f\u5b58\u5728\u3057\u306a\u3044\u3082\u306e\u3068\u3057\u3066\u6271\u308f\u308c\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4f8b\u3048\u3070\u3001K3s\u304c\u521d\u3081\u3066\u8d77\u52d5\u3059\u308b\u524d\u306b\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u7a7a\u306e ",(0,d.jsx)(n.code,{children:"traefik.yaml.skip"})," \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3068\u3001K3s\u306f ",(0,d.jsx)(n.code,{children:"traefik.yaml"})," \u306e\u30c7\u30d7\u30ed\u30a4\u3092\u30b9\u30ad\u30c3\u30d7\u3057\u307e\u3059\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ ls /var/lib/rancher/k3s/server/manifests\nccm.yaml      local-storage.yaml  rolebindings.yaml  traefik.yaml.skip\ncoredns.yaml  traefik.yaml\n\n$ kubectl get pods -A\nNAMESPACE     NAME                                     READY   STATUS    RESTARTS   AGE\nkube-system   local-path-provisioner-64ffb68fd-xx98j   1/1     Running   0          74s\nkube-system   metrics-server-5489f84d5d-7zwkt          1/1     Running   0          74s\nkube-system   coredns-85cb69466-vcq7j                  1/1     Running   0          74s\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"traefik.skip"})," \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u524d\u306bTraefik\u304c\u65e2\u306b\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u3066\u3044\u305f\u5834\u5408\u3001Traefik\u306f\u305d\u306e\u307e\u307e\u6b8b\u308a\u3001K3s\u304c\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3055\u308c\u305f\u3068\u304d\u306b\u5c06\u6765\u306e\u66f4\u65b0\u306b\u5f71\u97ff\u3092\u53d7\u3051\u307e\u305b\u3093\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"helm-addons",children:"Helm AddOns"}),"\n",(0,d.jsxs)(n.p,{children:["\u81ea\u52d5\u30c7\u30d7\u30ed\u30a4\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u3092\u4ecb\u3057\u3066Helm\u30c1\u30e3\u30fc\u30c8\u3092\u7ba1\u7406\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,d.jsx)(n.a,{href:"/ja/helm",children:"Helm"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>l});var d=s(7294);const i={},c=d.createContext(i);function l(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);