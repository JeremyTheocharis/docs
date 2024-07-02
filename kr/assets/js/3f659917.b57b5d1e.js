"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[6278],{3595:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=s(5893),t=s(1151);const i={title:"\uc5c5\uadf8\ub808\uc774\ub4dc"},a=void 0,l={id:"upgrades/upgrades",title:"\uc5c5\uadf8\ub808\uc774\ub4dc",description:"K3s \ud074\ub7ec\uc2a4\ud130 \uc5c5\uadf8\ub808\uc774\ub4dc\ud558\uae30",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/upgrades/upgrades.md",sourceDirName:"upgrades",slug:"/upgrades/",permalink:"/kr/upgrades/",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/upgrades.md",tags:[],version:"current",lastUpdatedAt:171994487e4,frontMatter:{title:"\uc5c5\uadf8\ub808\uc774\ub4dc"},sidebar:"mySidebar",previous:{title:"Cluster Load Balancer",permalink:"/kr/datastore/cluster-loadbalancer"},next:{title:"Stopping K3s",permalink:"/kr/upgrades/killall"}},c={},d=[{value:"K3s \ud074\ub7ec\uc2a4\ud130 \uc5c5\uadf8\ub808\uc774\ub4dc\ud558\uae30",id:"k3s-\ud074\ub7ec\uc2a4\ud130-\uc5c5\uadf8\ub808\uc774\ub4dc\ud558\uae30",level:3},{value:"\ubc84\uc804\ubcc4 \uc8fc\uc758\uc0ac\ud56d",id:"\ubc84\uc804\ubcc4-\uc8fc\uc758\uc0ac\ud56d",level:3}];function o(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"k3s-\ud074\ub7ec\uc2a4\ud130-\uc5c5\uadf8\ub808\uc774\ub4dc\ud558\uae30",children:"K3s \ud074\ub7ec\uc2a4\ud130 \uc5c5\uadf8\ub808\uc774\ub4dc\ud558\uae30"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/kr/upgrades/manual",children:"\uc218\ub3d9 \uc5c5\uadf8\ub808\uc774\ub4dc"}),"\uc5d0\uc11c\ub294 \ud074\ub7ec\uc2a4\ud130\ub97c \uc218\ub3d9\uc73c\ub85c \uc5c5\uadf8\ub808\uc774\ub4dc\ud558\ub294 \uba87 \uac00\uc9c0 \uae30\uc220\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. \ub610\ud55c ",(0,n.jsx)(r.a,{href:"https://www.terraform.io/",children:"Terraform"}),"\uacfc \uac19\uc740 \ud0c0\uc0ac \ucf54\ub4dc\ud615 \uc778\ud504\ub77c \ub3c4\uad6c(Infrastructure-as-Code)\ub97c \ud1b5\ud55c \uc5c5\uadf8\ub808\uc774\ub4dc\uc758 \uae30\ucd08\ub85c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/kr/upgrades/automated",children:"\uc790\ub3d9 \uc5c5\uadf8\ub808\uc774\ub4dc"}),"\ub294 Rancher\uc758 ",(0,n.jsx)(r.a,{href:"https://github.com/rancher/system-upgrade-controller",children:"\uc2dc\uc2a4\ud15c-\uc5c5\uadf8\ub808\uc774\ub4dc-\ucee8\ud2b8\ub864\ub7ec(system-upgrade-controller)"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub124\uc774\ud2f0\ube0c \uc790\ub3d9 \uc5c5\uadf8\ub808\uc774\ub4dc\ub97c \uc218\ud589\ud558\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(r.h3,{id:"\ubc84\uc804\ubcc4-\uc8fc\uc758\uc0ac\ud56d",children:"\ubc84\uc804\ubcc4 \uc8fc\uc758\uc0ac\ud56d"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Traefik:"})," Traefik\uc774 \ube44\ud65c\uc131\ud654\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0, K3s \ubc84\uc804 1.20 \uc774\ud558\uc5d0\uc11c\ub294 Traefik v1\uc774 \uc124\uce58\ub418\uace0, K3s \ubc84\uc804 1.21 \uc774\uc0c1\uc5d0\uc11c\ub294 v1\uc774 \uc5c6\ub294 \uacbd\uc6b0 Traefik v2\uac00 \uc124\uce58\ub429\ub2c8\ub2e4. \uad6c\ud615 Traefik v1\uc5d0\uc11c Traefik v2\ub85c \uc5c5\uadf8\ub808\uc774\ub4dc\ud558\ub824\uba74 ",(0,n.jsx)(r.a,{href:"https://doc.traefik.io/traefik/migration/v1-to-v2/",children:"Traefik \ubb38\uc11c"}),"\ub97c \ucc38\uc870\ud558\uc2dc\uace0 ",(0,n.jsx)(r.a,{href:"https://github.com/traefik/traefik-migration-tool",children:"\ub9c8\uc774\uadf8\ub808\uc774\uc158 \ub3c4\uad6c"}),"\ub97c \uc0ac\uc6a9\ud558\uc138\uc694."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"K3s \ubd80\ud2b8\uc2a4\ud2b8\ub7a9 \ub370\uc774\ud130:"})," \uc678\ubd80 SQL \ub370\uc774\ud130\uc2a4\ud1a0\uc5b4\uac00 \uc788\ub294 HA \uad6c\uc131\uc5d0\uc11c K3s\ub97c \uc0ac\uc6a9 \uc911\uc774\uace0 \uc11c\ubc84(\ucee8\ud2b8\ub864 \ud50c\ub808\uc778) \ub178\ub4dc\uac00 ",(0,n.jsx)(r.code,{children:"--token"})," CLI \ud50c\ub798\uadf8\ub85c \uc2dc\uc791\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0, \ud1a0\ud070\uc744 \uc9c0\uc815\ud558\uc9c0 \uc54a\uace0\ub294 \ub354 \uc774\uc0c1 \ud074\ub7ec\uc2a4\ud130\uc5d0 K3s \uc11c\ubc84\ub97c \ucd94\uac00\ud560 \uc218 \uc5c6\uac8c \ub429\ub2c8\ub2e4. \ubc31\uc5c5\uc5d0\uc11c \ubcf5\uc6d0\ud560 \ub54c \ud544\uc694\ud558\ubbc0\ub85c \uc774 \ud1a0\ud070\uc758 \uc0ac\ubcf8\uc744 \ubcf4\uad00\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\uc804\uc5d0\ub294 K3s\uc5d0\uc11c \uc678\ubd80 SQL \ub370\uc774\ud130\uc2a4\ud1a0\uc5b4\ub97c \uc0ac\uc6a9\ud560 \ub54c \ud1a0\ud070\uc744 \uc0ac\uc6a9\ud558\ub3c4\ub85d \uac15\uc81c\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\uc601\ud5a5\uc744 \ubc1b\ub294 \ubc84\uc804\uc740 <= v1.19.12+k3s1, v1.20.8+k3s1, v1.21.2+k3s1; \uc774\uba70, \ud328\uce58\ub41c \ubc84\uc804\uc740 v1.19.13+k3s1, v1.20.9+k3s1, v1.21.3+k3s1 \uc785\ub2c8\ub2e4."}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\ub2e4\uc74c\uacfc \uac19\uc774 \ud074\ub7ec\uc2a4\ud130\uc5d0 \uc774\ubbf8 \uac00\uc785\ub41c \uc11c\ubc84\uc5d0\uc11c \ud1a0\ud070 \uac12\uc744 \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"cat /var/lib/rancher/k3s/server/token\n"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"\uc2e4\ud5d8\uc6a9 Dqlite:"})," \uc2e4\ud5d8\uc6a9 \ub0b4\uc7a5 Dqlite \ub370\uc774\ud130 \uc800\uc7a5\uc18c\ub294 K3s v1.19.1\uc5d0\uc11c \ub354 \uc774\uc0c1 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc2e4\ud5d8\uc6a9 Dqlite\uc5d0\uc11c \uc2e4\ud5d8\uc6a9 \ub0b4\uc7a5 etcd \uc5c5\uadf8\ub808\uc774\ub4dc\ub294 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294\ub2e4\ub294 \uc810\uc5d0 \uc720\uc758\ud558\uc138\uc694. \uc5c5\uadf8\ub808\uc774\ub4dc\ub97c \uc2dc\ub3c4\ud558\uba74 \uc131\uacf5\ud558\uc9c0 \ubabb\ud558\uace0 \ub370\uc774\ud130\uac00 \uc190\uc2e4\ub429\ub2c8\ub2e4."]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>l,a:()=>a});var n=s(7294);const t={},i=n.createContext(t);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);