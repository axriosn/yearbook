import{_ as e}from"./index.b8ee07d8.js";import{d as n,j as c,o as i,c as a,a as s,m as t}from"./vendor.6c768f08.js";const u=n({name:"PersonInfoCard",setup(){return{}}}),p={class:"card"},f=s("div",{class:"card-image"},[s("figure",{class:"image is-4by3"},[s("img",{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"image of name"})])],-1),$={class:"card-content"},v={class:"media"},b=s("div",{class:"media-left"},null,-1),g={class:"media-content"},w=s("p",{class:"title is-4"},"First last name",-1),q=s("p",{class:"subtitle is-6"},"email@uncg.edu",-1),x={href:"https://twitter.com/their-twitter"},C={class:"icon"},j={href:"https://instagram.com/their-ig"},A={class:"icon"},B=s("div",{class:"content"}," a short description/bio of First last name ",-1);function k(r,_,d,l,m,h){const o=c("font-awesome-icon");return i(),a("div",p,[f,s("div",$,[s("div",v,[b,s("div",g,[w,q,s("a",x,[s("span",C,[t(o,{icon:["fab","twitter"]})])]),s("a",j,[s("span",A,[t(o,{icon:["fab","instagram"]})])])])]),B])])}var F=e(u,[["render",k]]);const I=n({name:"About",components:{PersonInfoCard:F}}),N={class:"container"},P=s("section",{class:"section"},[s("h1",{class:"title"},"Who we are"),s("h2",{class:"subtitle"}," A description of who we are ")],-1),V=s("br",null,null,-1),y={class:"columns is-multiline"},E={class:"column is-one-quarter"},U={class:"column is-one-quarter"},W={class:"column is-one-quarter"},z={class:"column is-one-quarter"},D={class:"column is-one-quarter"},G={class:"column is-one-quarter"};function H(r,_,d,l,m,h){const o=c("person-info-card");return i(),a("div",N,[P,V,s("div",y,[s("div",E,[t(o)]),s("div",U,[t(o)]),s("div",W,[t(o)]),s("div",z,[t(o)]),s("div",D,[t(o)]),s("div",G,[t(o)])])])}var L=e(I,[["render",H]]);export{L as default};