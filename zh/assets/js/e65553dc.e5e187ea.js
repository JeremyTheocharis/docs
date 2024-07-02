"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3642],{2763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=n(5893),r=n(1151);const i={title:"\u5907\u4efd\u548c\u6062\u590d"},c=void 0,d={id:"datastore/backup-restore",title:"\u5907\u4efd\u548c\u6062\u590d",description:"K3s \u7684\u5907\u4efd\u548c\u6062\u590d\u65b9\u5f0f\u53d6\u51b3\u4e8e\u4f60\u4f7f\u7528\u7684\u6570\u636e\u5b58\u50a8\u7c7b\u578b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/datastore/backup-restore.md",sourceDirName:"datastore",slug:"/datastore/backup-restore",permalink:"/zh/datastore/backup-restore",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/datastore/backup-restore.md",tags:[],version:"current",lastUpdatedAt:171994487e4,frontMatter:{title:"\u5907\u4efd\u548c\u6062\u590d"},sidebar:"mySidebar",previous:{title:"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8",permalink:"/zh/datastore/"},next:{title:"\u9ad8\u53ef\u7528\u5d4c\u5165\u5f0f etcd",permalink:"/zh/datastore/ha-embedded"}},o={},l=[{value:"\u4f7f\u7528 SQLite \u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",id:"\u4f7f\u7528-sqlite-\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",level:2},{value:"\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",id:"\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",level:2},{value:"\u4f7f\u7528\u5d4c\u5165\u5f0f etcd \u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",id:"\u4f7f\u7528\u5d4c\u5165\u5f0f-etcd-\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"K3s \u7684\u5907\u4efd\u548c\u6062\u590d\u65b9\u5f0f\u53d6\u51b3\u4e8e\u4f60\u4f7f\u7528\u7684\u6570\u636e\u5b58\u50a8\u7c7b\u578b\u3002"}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["\u9664\u4e86\u5907\u4efd\u6570\u636e\u5b58\u50a8\u672c\u8eab\uff0c\u4f60\u8fd8\u5fc5\u987b\u5907\u4efd\u4f4d\u4e8e ",(0,s.jsx)(t.code,{children:"/var/lib/rancher/k3s/server/token"})," \u7684 Server Token \u6587\u4ef6\u3002\n\u4f7f\u7528\u5907\u4efd\u8fdb\u884c\u6062\u590d\u65f6\uff0c\u4f60\u5fc5\u987b\u6062\u590d\u6b64\u6587\u4ef6\uff0c\u6216\u5c06\u5176\u503c\u4f20\u9012\u7ed9 ",(0,s.jsx)(t.code,{children:"--token"})," \u9009\u9879\u3002\n\u7531\u4e8e Token \u7528\u4e8e\u52a0\u5bc6\u6570\u636e\u5b58\u50a8\u5185\u7684\u51ed\u8bc1\u6570\u636e\uff0c\u56e0\u6b64\u5982\u679c\u8fd8\u539f\u65f6\u6ca1\u6709\u4f7f\u7528\u76f8\u540c\u7684 Token \u503c\uff0c\u5feb\u7167\u5c06\u65e0\u6cd5\u4f7f\u7528\u3002"]})}),"\n",(0,s.jsx)(t.h2,{id:"\u4f7f\u7528-sqlite-\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",children:"\u4f7f\u7528 SQLite \u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d"}),"\n",(0,s.jsx)(t.p,{children:"\u4f60\u4e0d\u9700\u8981\u4f7f\u7528\u7279\u6b8a\u547d\u4ee4\u5c31\u80fd\u5907\u4efd\u6216\u6062\u590d SQLite \u6570\u636e\u5b58\u50a8\u3002"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u8981\u5907\u4efd SQLite \u6570\u636e\u5b58\u50a8\uff0c\u8bf7\u590d\u5236 ",(0,s.jsx)(t.code,{children:"/var/lib/rancher/k3s/server/db/"}),"\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:["\u8981\u6062\u590d SQLite \u6570\u636e\u5b58\u50a8\uff0c\u8bf7\u6062\u590d ",(0,s.jsx)(t.code,{children:"/var/lib/rancher/k3s/server/db"})," \u7684\u5185\u5bb9\uff08\u4ee5\u53ca Token\uff0c\u5982\u4e0a\u6240\u8ff0\uff09\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",children:"\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d"}),"\n",(0,s.jsx)(t.p,{children:"\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\u65f6\uff0c\u5907\u4efd\u548c\u6062\u590d\u64cd\u4f5c\u5728 K3s \u5916\u9762\u5904\u7406\u3002\u6570\u636e\u5e93\u7ba1\u7406\u5458\u9700\u8981\u5bf9\u5916\u90e8\u6570\u636e\u5e93\u8fdb\u884c\u5907\u4efd\uff0c\u6216\u8005\u4f7f\u7528\u5feb\u7167\u6216\u8f6c\u50a8\u8fdb\u884c\u6062\u590d\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["\u6211\u4eec\u5efa\u8bae\u5c06\u6570\u636e\u5e93\u914d\u7f6e\u4e3a",(0,s.jsx)(t.strong,{children:"\u6267\u884c\u5b9a\u671f\u5feb\u7167"}),"\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u6709\u5173\u83b7\u53d6\u6570\u636e\u5e93\u5feb\u7167\u5e76\u4ece\u4e2d\u6062\u590d\u6570\u636e\u5e93\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5b98\u65b9\u6570\u636e\u5e93\u6587\u6863\uff1a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/replication-snapshot-method.html",children:"MySQL \u5b98\u65b9\u6587\u6863"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.postgresql.org/docs/8.3/backup-dump.html",children:"PostgreSQL \u5b98\u65b9\u6587\u6863"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://etcd.io/docs/latest/op-guide/recovery/",children:"etcd \u5b98\u65b9\u6587\u6863"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u4f7f\u7528\u5d4c\u5165\u5f0f-etcd-\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d",children:"\u4f7f\u7528\u5d4c\u5165\u5f0f etcd \u6570\u636e\u5b58\u50a8\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d"}),"\n",(0,s.jsxs)(t.p,{children:["\u6709\u5173\u5728\u5d4c\u5165\u5f0f etcd \u6570\u636e\u5b58\u50a8\u4e0a\u6267\u884c\u5907\u4efd\u548c\u6062\u590d\u64cd\u4f5c\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,s.jsxs)(t.a,{href:"/zh/cli/etcd-snapshot",children:[(0,s.jsx)(t.code,{children:"k3s etcd-snapshot"})," \u547d\u4ee4\u6587\u6863"]}),"\u3002"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>c});var s=n(7294);const r={},i=s.createContext(r);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);