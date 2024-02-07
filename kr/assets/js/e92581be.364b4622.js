"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[5470],{1623:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=s(5893),r=s(1151);const a={title:"Manual Upgrades",weight:10},i=void 0,l={id:"upgrades/manual",title:"Manual Upgrades",description:"You can upgrade K3s by using the installation script, or by manually installing the binary of the desired version.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/upgrades/manual.md",sourceDirName:"upgrades",slug:"/upgrades/manual",permalink:"/kr/upgrades/manual",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/manual.md",tags:[],version:"current",lastUpdatedAt:1707295954,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{title:"Manual Upgrades",weight:10},sidebar:"mySidebar",previous:{title:"Stopping K3s",permalink:"/kr/upgrades/killall"},next:{title:"Automated Upgrades",permalink:"/kr/upgrades/automated"}},o={},d=[{value:"Release Channels",id:"release-channels",level:3},{value:"Upgrade K3s Using the Installation Script",id:"upgrade-k3s-using-the-installation-script",level:3},{value:"Manually Upgrade K3s Using the Binary",id:"manually-upgrade-k3s-using-the-binary",level:3},{value:"Restarting K3s",id:"restarting-k3s",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"You can upgrade K3s by using the installation script, or by manually installing the binary of the desired version."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"When upgrading, upgrade server nodes first one at a time, then any agent nodes."})}),"\n",(0,t.jsx)(n.h3,{id:"release-channels",children:"Release Channels"}),"\n",(0,t.jsxs)(n.p,{children:["Upgrades performed via the installation script or using our ",(0,t.jsx)(n.a,{href:"/kr/upgrades/automated",children:"automated upgrades"})," feature can be tied to different release channels. The following channels are available:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Channel"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"stable"}),(0,t.jsx)(n.td,{children:"(Default) Stable is recommended for production environments. These releases have been through a period of community hardening."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"latest"}),(0,t.jsx)(n.td,{children:"Latest is recommended for trying out the latest features.  These releases have not yet been through a period of community hardening."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v1.26 (example)"}),(0,t.jsx)(n.td,{children:"There is a release channel tied to each Kubernetes minor version, including versions that are end-of-life. These channels will select the latest patch available, not necessarily a stable release."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["For an exhaustive and up-to-date list of channels, you can visit the ",(0,t.jsx)(n.a,{href:"https://update.k3s.io/v1-release/channels",children:"k3s channel service API"}),". For more technical details on how channels work, you see the ",(0,t.jsx)(n.a,{href:"https://github.com/rancher/channelserver",children:"channelserver project"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["When attempting to upgrade to a new version of K3s, the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/release/version-skew-policy/",children:"Kubernetes version skew policy"})," applies. Ensure that your plan does not skip intermediate minor versions when upgrading. The system-upgrade-controller itself will not protect against unsupported changes to the Kubernetes version."]})}),"\n",(0,t.jsx)(n.h3,{id:"upgrade-k3s-using-the-installation-script",children:"Upgrade K3s Using the Installation Script"}),"\n",(0,t.jsx)(n.p,{children:"To upgrade K3s from an older version you can re-run the installation script using the same flags, for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl -sfL https://get.k3s.io | sh -\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will upgrade to a newer version in the stable channel by default."}),"\n",(0,t.jsx)(n.p,{children:"If you want to upgrade to a newer version in a specific channel (such as latest) you can specify the channel:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=latest sh -\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you want to upgrade to a specific version you can run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=vX.Y.Z-rc1 sh -\n"})}),"\n",(0,t.jsx)(n.h3,{id:"manually-upgrade-k3s-using-the-binary",children:"Manually Upgrade K3s Using the Binary"}),"\n",(0,t.jsx)(n.p,{children:"Or to manually upgrade K3s:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Download the desired version of the K3s binary from ",(0,t.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/releases",children:"releases"})]}),"\n",(0,t.jsxs)(n.li,{children:["Copy the downloaded binary to ",(0,t.jsx)(n.code,{children:"/usr/local/bin/k3s"})," (or your desired location)"]}),"\n",(0,t.jsx)(n.li,{children:"Stop the old k3s binary"}),"\n",(0,t.jsx)(n.li,{children:"Launch the new k3s binary"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"restarting-k3s",children:"Restarting K3s"}),"\n",(0,t.jsx)(n.p,{children:"Restarting K3s is supported by the installation script for systemd and OpenRC."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"systemd"})}),"\n",(0,t.jsx)(n.p,{children:"To restart servers manually:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl restart k3s\n"})}),"\n",(0,t.jsx)(n.p,{children:"To restart agents manually:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl restart k3s-agent\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"OpenRC"})}),"\n",(0,t.jsx)(n.p,{children:"To restart servers manually:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo service k3s restart\n"})}),"\n",(0,t.jsx)(n.p,{children:"To restart agents manually:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo service k3s-agent restart\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var t=s(7294);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);