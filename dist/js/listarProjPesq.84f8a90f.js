(function(t){function a(a){for(var r,i,o=a[0],n=a[1],c=a[2],u=0,v=[];u<o.length;u++)i=o[u],l[i]&&v.push(l[i][0]),l[i]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);d&&d(a);while(v.length)v.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],r=!0,o=1;o<e.length;o++){var n=e[o];0!==l[n]&&(r=!1)}r&&(s.splice(a--,1),t=i(i.s=e[0]))}return t}var r={},l={listarProjPesq:0},s=[];function i(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=n;s.push([15,"chunk-vendors"]),e()})({15:function(t,a,e){t.exports=e("ff8a")},d178:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-toolbar",{staticClass:"light-blue darken-3",attrs:{app:"",dark:"","clipped-left":"",dense:"",fixed:""}},[e("v-toolbar-title",{staticClass:"headline"},[e("v-icon",{attrs:{large:""}},[t._v("business")]),e("span",[t._v(" SisPlagea")]),e("span",{staticClass:"font-weight-light text-uppercase"},[t._v(" - Sistema de Planejamento e Gestão de Atividades")])],1),e("v-spacer"),t.estaLogado?e("v-btn",{attrs:{flat:"",href:"/mensagens.html"}},[e("span",{staticClass:"mr-2"},[t._v("Mensagens")]),e("v-icon",[t._v("email")])],1):t._e(),t.estaLogado?e("v-btn",{attrs:{flat:""},on:{click:t.logout}},[e("span",{staticClass:"mr-2"},[t._v("Sair")]),e("v-icon",[t._v("input")])],1):e("v-btn",{attrs:{flat:"",href:"/login.html"}},[e("span",{staticClass:"mr-2"},[t._v("Login")]),e("v-icon",[t._v("account_circle")])],1)],1)},l=[],s=e("bc3a"),i=e.n(s),o={headers:{"access-token":localStorage.getItem("data['at']"),client:localStorage.getItem("data['c']"),"content-type":localStorage.getItem("data['ct']"),uid:localStorage.getItem("data['uid']")}},n={name:"Navbar",props:{estaLogado:Boolean},methods:{logout:function(){i()({method:"delete",url:"https://sisplagea-api.herokuapp.com/api/v1/auth/sign_out",headers:o.headers}).then(function(t){200==t.status&&(localStorage.removeItem("data['at']"),localStorage.removeItem("data['c']"),localStorage.removeItem("data['ct']"),localStorage.removeItem("data['rt']"),localStorage.removeItem("data['uid']"),window.location.href="/index.html")}).catch(function(){})}}},c=n,d=e("2877"),u=e("6544"),v=e.n(u),p=e("8336"),f=e("132d"),m=e("9910"),h=e("71d9"),g=e("2a7f"),_=Object(d["a"])(c,r,l,!1,null,null,null);a["a"]=_.exports;v()(_,{VBtn:p["a"],VIcon:f["a"],VSpacer:m["a"],VToolbar:h["a"],VToolbarTitle:g["a"]})},fb62:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-navigation-drawer",{staticClass:"grey darken-4",attrs:{width:"250",dark:"","mobile-break-point":"700",clipped:"",fixed:"",app:""}},[e("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[e("v-list",[e("v-list-tile",{attrs:{avatar:""}},[e("v-list-tile-avatar",{attrs:{color:"white"}},[e("v-img",{attrs:{contain:"",src:t.photo_url}})],1),e("v-list-tile-content",[e("v-list-tile-title",{staticClass:"title"},[t._v(t._s(t.informacoes.name))])],1)],1)],1)],1),e("v-list",{attrs:{"two-line":""}},[e("v-divider"),t._l(t.opcoes,function(a,r){return e("v-list-tile",{key:r,staticClass:"v-list-item",attrs:{href:a.para}},[e("v-list-tile-action",[e("v-icon",[t._v(t._s(a.icone))])],1),e("v-list-tile-title",{domProps:{textContent:t._s(a.titulo)}})],1)}),e("v-list-group",{attrs:{"sub-group":"","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-tile",[e("v-list-tile-title",[t._v("Cadastrar")])],1)]},proxy:!0}])},t._l(t.cadastros,function(a,r){return e("v-list-tile",{key:r,staticClass:"v-list-item",attrs:{href:a.para}},[e("v-list-tile-title",{domProps:{textContent:t._s(a.titulo)}}),e("v-list-tile-action",[e("v-icon",[t._v(t._s(a.icone))])],1)],1)}),1),e("v-list-group",{attrs:{"sub-group":"","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-tile",[e("v-list-tile-title",[t._v("Listar/Editar")])],1)]},proxy:!0}])},t._l(t.listas,function(a,r){return e("v-list-tile",{key:r,staticClass:"v-list-item",attrs:{href:a.para}},[e("v-list-tile-title",{domProps:{textContent:t._s(a.titulo)}}),e("v-list-tile-action",[e("v-icon",[t._v(t._s(a.icone))])],1)],1)}),1)],2)],1)},l=[],s=e("bc3a"),i=e.n(s),o={data:function(){return{informacoes:"",photo_url:"",url_base:"https://sisplagea-api.herokuapp.com/",opcoes:[{titulo:"Home",icone:"home",para:"/home.html"},{titulo:"Adicionar Aluno",icone:"person_add",para:"/adicionarAluno.html"},{titulo:"Buscar atividades",icone:"search",para:"/buscarAtividades.html"},{titulo:"Editar Info Pessoais",icone:"settings",para:"/infoPessoais.html"}],cadastros:[{titulo:"Publicação",icone:"import_contacts",para:"/cadastrarPublicacao.html"},{titulo:"Grupo pesq.",icone:"group_add",para:"/cadastrarGrupoPesq.html"},{titulo:"Projeto pesq.",icone:"attachment",para:"/cadastrarProjPesq.html"},{titulo:"Disciplina",icone:"border_color",para:"/cadastrarDisciplina.html"}],listas:[{titulo:"Alunos",icone:"supervisor_account",para:"/listarAlunos.html"},{titulo:"Publicação",icone:"import_contacts",para:"/listarPublicacoes.html"},{titulo:"Grupo pesq.",icone:"group_add",para:"/listarGruposPesq.html"},{titulo:"Projeto pesq.",icone:"attachment",para:"/listarProjPesq.html"},{titulo:"Disciplina",icone:"border_color",para:"/listarDisciplinas.html"}]}},mounted:function(){var t=this;i()({method:"get",url:"https://sisplagea-api.herokuapp.com/api/v1/users/info.json"}).then(function(a){t.informacoes=a.data,t.photo_url=t.url_base+t.informacoes.photo.url}).catch(function(){alert("erro")})}},n=o,c=e("2877"),d=e("6544"),u=e.n(d),v=e("ce7e"),p=e("132d"),f=e("adda"),m=e("8860"),h=e("56b0"),g=e("ba95"),_=e("40fe"),b=e("c954"),x=e("5d23"),y=e("f774"),k=e("71d9"),j=Object(c["a"])(n,r,l,!1,null,null,null);a["a"]=j.exports;u()(j,{VDivider:v["a"],VIcon:p["a"],VImg:f["a"],VList:m["a"],VListGroup:h["a"],VListTile:g["a"],VListTileAction:_["a"],VListTileAvatar:b["a"],VListTileContent:x["a"],VListTileTitle:x["b"],VNavigationDrawer:y["a"],VToolbar:k["a"]})},fd2d:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-footer",{attrs:{dark:"",inset:"",absolute:"",dense:"",app:"",height:"auto"}},[e("v-card",{staticClass:"flex light-blue darken-3 white--text text-xs-center",attrs:{flat:"",tile:""}},[e("v-card-text",{staticClass:"white--text pt-3"},[t._v("\n            Trabalho de Programação Web.\n        ")]),e("v-divider"),e("v-card-text",{staticClass:"white--text"},[t._v("©2019 — "),e("strong",[t._v("Fábrica de Bugs")])])],1)],1)},l=[],s=e("2877"),i=e("6544"),o=e.n(i),n=e("b0af"),c=e("99d9"),d=e("ce7e"),u=e("553a"),v={},p=Object(s["a"])(v,r,l,!1,null,null,null);a["a"]=p.exports;o()(p,{VCard:n["a"],VCardText:c["b"],VDivider:d["a"],VFooter:u["a"]})},ff8a:function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),l=e("ce5b"),s=e.n(l),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("Menu"),e("Navbar",{attrs:{estaLogado:""}}),e("v-content",[e("ModuloListarProjPesq")],1),e("Footer")],1)},o=[],n=e("d178"),c=e("fd2d"),d=e("fb62"),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{"justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm10:"",md8:"",lg6:""}},[e("h1",[t._v("Projetos cadastrados")]),e("v-divider"),e("v-container",{attrs:{fluid:"","grid-list-md":""}},[e("v-data-iterator",{attrs:{items:t.projetos,"rows-per-page-items":t.rowsPerPageItems,pagination:t.pagination,"content-tag":"v-layout",column:""},on:{"update:pagination":function(a){t.pagination=a}},scopedSlots:t._u([{key:"item",fn:function(a){return[e("v-layout",{attrs:{row:"","justify-center":""}},[e("v-flex",[e("v-card",[e("v-list",{attrs:{"three-line":""}},[e("v-list-tile",[e("v-list-tile-content",[e("v-list-tile-title",[e("h3",[t._v("Nome: "+t._s(a.item.name))])]),e("v-list-tile-title",[e("strong",[t._v("Descrição:")]),t._v(" "+t._s(a.item.abstract))])],1),e("v-list-content",[e("v-list-tile-action",{staticClass:"align-end"},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var l=r.on;return[e("v-btn",t._g({attrs:{flat:""},on:{click:function(e){t.dialog=!0,t.buscarProjeto(a.item.id),t.listarParticipantes(a.item.id)}}},l),[e("v-icon",{attrs:{color:"green lighten-1"}},[t._v("info")]),t._v("Info Projeto")],1)]}}],null,!0)},[e("span",[t._v("Exibir/Editar Informações sobre o projeto")])])],1)],1)],1)],1)],1)],1)],1),e("v-dialog",{attrs:{persistent:"","max-width":"680px"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Projeto: "+t._s(t.name)+" ")])]),e("v-card-text",[e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Nome",value:t.name,disabled:""}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Descrição",value:t.abstract,disabled:""}})],1),0==t.dialog5?e("v-flex",{attrs:{xs6:""}},[e("v-combobox",{attrs:{items:t.participantes,"item-text":"name","item-value":"id",label:"Alunos vinculados ao projeto",hint:"Selecione e clique em Desvincular, caso queira desvincular um aluno."},model:{value:t.select,callback:function(a){t.select=a},expression:"select"}})],1):t._e(),void 0!=t.select.id&&0==t.dialog5?e("v-flex",{attrs:{xs6:""}},[e("v-btn",{attrs:{color:"info",outline:"",flat:""},on:{click:t.desvincularAluno}},[t._v("Desvincular")]),e("v-btn",{attrs:{outline:"",flat:""},on:{click:function(a){t.dialog3=!0,t.dialog=!1}}},[t._v("Abrir Espaço")])],1):t._e(),e("v-spacer"),e("v-flex",{attrs:{xs12:""}},[e("v-btn",{attrs:{outline:"",flat:""},on:{click:function(a){t.dialog=!1,t.dialog2=!0}}},[t._v("Editar Projeto")]),e("v-btn",{attrs:{color:"error",outline:"",flat:""},on:{click:t.deletarProjeto}},[t._v("Deletar Projeto")]),e("v-btn",{attrs:{color:"info",outline:"",flat:""},on:{click:function(a){t.select="",t.dialog5=!0}}},[t._v("Vincular")])],1),e("v-flex",{attrs:{xs12:""}},[e("v-alert",{attrs:{value:t.alerta,type:"success",transition:"scale-transition",dismissible:""},on:{click:function(a){t.alerta=!1}}},[t._v(t._s(t.alerta_msg)+".")]),e("v-alert",{attrs:{value:t.erro,type:"error",transition:"scale-transition",dismissible:""},on:{click:function(a){t.erro=!1}}},[t._v(t._s(t.erro_msg))])],1),1==t.dialog5?e("div",{staticClass:"flex xs12"},[e("v-card",[e("v-card-text",[e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs10:""}},[e("v-combobox",{attrs:{items:t.alunos,"item-text":"name","item-value":"id",label:"Vincular aluno ao projeto"},model:{value:t.select,callback:function(a){t.select=a},expression:"select"}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs3:""}},[e("v-text-field",{attrs:{label:"Ano de início"},model:{value:t.select.start_year,callback:function(a){t.$set(t.select,"start_year",a)},expression:"select.start_year"}})],1),e("v-flex",{attrs:{xs3:""}},[e("v-text-field",{attrs:{label:"Ano de fim"},model:{value:t.select.end_year,callback:function(a){t.$set(t.select,"end_year",a)},expression:"select.end_year"}})],1)],1)],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{outline:"",flat:""},on:{click:function(e){t.dialog5=!1,t.dialog=!0,t.select="",t.listarParticipantes(a.item.id)}}},[t._v("Cancelar")]),e("v-btn",{attrs:{color:"info",outline:"",flat:""},on:{click:t.vincularAluno}},[t._v("Vincular")])],1)],1)],1):t._e()],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{outline:"",flat:""},on:{click:function(a){t.dialog=!1,t.select=""}}},[t._v("Cancelar")]),e("v-btn",{attrs:{color:"info",outline:"",flat:""},on:{click:function(a){t.dialog=!1}}},[t._v("Salvar")])],1)],1)],1),e("v-dialog",{attrs:{persistent:"","max-width":"680px"},model:{value:t.dialog2,callback:function(a){t.dialog2=a},expression:"dialog2"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Projeto: "+t._s(t.name)+" ")])]),e("v-card-text",[e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Nome",value:t.name,disabled:""}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Descrição",value:t.abstract,disabled:""}})],1),e("v-spacer"),e("v-flex",{attrs:{xs12:""}},[e("v-subheader",[t._v("Área para editar projeto")])],1),e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Nome"},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Descrição"},model:{value:t.abstract,callback:function(a){t.abstract=a},expression:"abstract"}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-alert",{attrs:{value:t.alerta,type:"success",transition:"scale-transition",dismissible:""},on:{click:function(a){t.alerta=!1}}},[t._v(t._s(t.alerta_msg)+".")]),e("v-alert",{attrs:{value:t.erro,type:"error",transition:"scale-transition",dismissible:""},on:{click:function(a){t.erro=!1}}},[t._v(t._s(t.erro_msg))])],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{outline:"",flat:""},on:{click:function(a){t.dialog2=!1,t.dialog=!0,t.select=""}}},[t._v("Cancelar")]),e("v-btn",{attrs:{color:"info",outline:"",flat:""},on:{click:function(e){return t.atualizarProjeto(a.item)}}},[t._v("Salvar")])],1)],1)],1),e("v-dialog",{attrs:{persistent:"","max-width":"680px"},model:{value:t.dialog3,callback:function(a){t.dialog3=a},expression:"dialog3"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Espaço do aluno vinculado")])]),e("v-card-text",[e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Nome",value:t.select.name,disabled:""}})],1),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs3:""}},[e("v-text-field",{attrs:{label:"Ano de início",value:t.select.start_year,disabled:""}})],1),e("v-flex",{attrs:{xs3:""}},[e("v-text-field",{attrs:{label:"Ano de fim",value:t.select.end_year,disabled:""}})],1),e("v-flex",{attrs:{xs3:""}},[null!=t.select.file_url?e("v-btn",{attrs:{icon:"",flat:"",href:t.url_base+t.select.file_url,target:"_blank"}},[e("v-icon",[t._v(" picture_as_pdf")])],1):t._e()],1),e("v-flex",{attrs:{xs12:""}},[e("v-btn",{attrs:{outline:"",flat:""},on:{click:function(a){t.dialog3=!1,t.dialog4=!0}}},[t._v("Editar aluno vinculado")])],1)],1),e("v-spacer")],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{outline:"",flat:""},on:{click:function(a){t.dialog3=!1,t.dialog=!0,t.select=""}}},[t._v("Cancelar")]),e("v-btn",{attrs:{color:"info",outline:"",flat:""},on:{click:function(e){t.atualizarProjeto(a.item),t.dialog2=!1,t.dialog=!1}}},[t._v("Salvar")])],1)],1)],1),e("v-dialog",{attrs:{persistent:"","max-width":"680px"},model:{value:t.dialog4,callback:function(a){t.dialog4=a},expression:"dialog4"}},[e("v-card",[e("v-card-text",[e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Nome",value:t.select.name,disabled:""}})],1),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs3:""}},[e("v-text-field",{attrs:{label:"Ano de início",value:t.select.start_year,disabled:""}})],1),e("v-flex",{attrs:{xs3:""}},[e("v-text-field",{attrs:{label:"Ano de fim",value:t.select.end_year,disabled:""}})],1),e("v-flex",{attrs:{xs3:""}},[null!=t.select.file_url?e("v-btn",{attrs:{icon:"",flat:"",href:t.url_base+t.select.file_url,target:"_blank"}},[e("v-icon",[t._v(" picture_as_pdf")])],1):t._e()],1)],1),e("v-spacer"),e("v-flex",{attrs:{xs12:""}},[e("v-subheader",[t._v("Área para editar informações do aluno vinculado")])],1),e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Nome",value:t.select.name,disabled:""}})],1),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs3:""}},[e("v-text-field",{attrs:{label:"Ano de início"},model:{value:t.select.start_year,callback:function(a){t.$set(t.select,"start_year",a)},expression:"select.start_year"}})],1),e("v-flex",{attrs:{xs3:""}},[e("v-text-field",{attrs:{label:"Ano de fim"},model:{value:t.select.end_year,callback:function(a){t.$set(t.select,"end_year",a)},expression:"select.end_year"}})],1)],1),e("v-flex",{attrs:{xs12:""}},[e("v-subheader",[t._v("Adicionar ou atualizar documento")]),e("input",{ref:"file",staticClass:"mt-4",attrs:{type:"file",id:"file",required:""},on:{change:t.onFileChange}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-alert",{attrs:{value:t.erro,type:"error",transition:"scale-transition",dismissible:""},on:{click:function(a){t.erro=!1}}},[t._v(t._s(t.erro_msg))]),e("v-alert",{attrs:{value:t.alerta,type:"success",transition:"scale-transition",dismissible:""},on:{click:function(a){t.alerta=!1}}},[t._v(t._s(t.alerta_msg)+".")])],1),e("v-spacer")],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{outline:"",flat:""},on:{click:function(a){t.dialog4=!1,t.dialog3=!0}}},[t._v("Cancelar")]),e("v-btn",{attrs:{color:"info",outline:"",flat:"",loading:t.loading},on:{click:function(e){return t.atualizarAlunoVinculado(a.item.id)}}},[t._v("Salvar")])],1)],1)],1)]}}])})],1)],1)],1)],1)},v=[],p=(e("7f7f"),e("c5f6"),e("bc3a")),f=e.n(p),m={headers:{"access-token":localStorage.getItem("data['at']"),client:localStorage.getItem("data['c']"),"content-type":localStorage.getItem("data['ct']"),uid:localStorage.getItem("data['uid']")}},h={headers:{"access-token":localStorage.getItem("data['at']"),client:localStorage.getItem("data['c']"),"content-type":"multipart/form-data",uid:localStorage.getItem("data['uid']")}},g={data:function(){return{alerta:!1,alerta_msg:"",erro:!1,erro_msg:"",file:null,dialog:!1,dialog2:!1,dialog3:!1,dialog4:!1,dialog5:!1,loading:!1,url_base:"https://sisplagea-api.herokuapp.com",rowsPerPageItems:[4,8,12],pagination:{rowsPerPage:4,sortBy:"name"},projetos:[{id:"",name:"",abstract:""}],select:"",alunos:[{id:"",name:""}],participantes:[{id:"",student_id:"",name:"",start_year:"",end_year:"",file_url:null}]}},props:{id:Number,name:String,abstract:String},methods:{atualizarProjeto:function(){var t=this;f()({method:"put",url:"https://sisplagea-api.herokuapp.com/api/v1/projects/"+this.id+".json",headers:m.headers,data:{name:this.name,abstract:this.abstract}}).then(function(){t.alerta_msg="Informações de projeto atualizadas com sucesso.",t.alerta=!t.alerta,setTimeout(t.setAlertaFalse,3e3)}).catch(function(a){t.erro_msg=a,t.erro=!0,setTimeout(t.setErroFalse,5e3)})},buscarProjeto:function(t){var a=this;f()({method:"get",url:"https://sisplagea-api.herokuapp.com/api/v1/projects/"+t+".json",headers:m.headers}).then(function(t){a.id=t.data.id,a.name=t.data.name,a.abstract=t.data.abstract}).catch(function(t){a.erro_msg=t,a.erro=!0,setTimeout(a.setErroFalse,5e3)})},deletarProjeto:function(){var t=this;f()({method:"delete",url:"https://sisplagea-api.herokuapp.com/api/v1/projects/"+this.id+".json",headers:m.headers}).then(function(){document.location.reload()}).catch(function(a){t.erro_msg=a,t.erro=!0,setTimeout(t.setErrorFalse,5e3)})},vincularAluno:function(){var t=this;f()({method:"post",url:"https://sisplagea-api.herokuapp.com/api/v1/projects/".concat(this.id,"/link_participant"),headers:m.headers,data:{student_id:this.select.id,start_year:this.select.start_year,end_year:this.select.end_year}}).then(function(){t.alerta_msg="Aluno vinculado com sucesso.",t.alerta=!t.alerta,setTimeout(t.setAlertaFalse,3e3),t.participantes.push(t.select),t.select.start_year="",t.select.end_year=""}).catch(function(a){t.erro_msg=a,t.erro=!0,setTimeout(t.setErroFalse,5e3)})},desvincularAluno:function(){var t=this;f()({method:"delete",url:"https://sisplagea-api.herokuapp.com/api/v1/projects/".concat(this.id,"/unlink_participant/").concat(this.select.id),headers:m.headers}).then(function(){t.select="",t.alerta_msg="Aluno desvinculado com sucesso.",t.alerta=!t.alerta,setTimeout(t.setAlertaFalse,3e3),t.listarParticipantes(t.id)}).catch(function(a){t.erro_msg=a,t.erro=!0,setTimeout(t.setErroFalse,5e3)})},listarParticipantes:function(t){var a=this;f()({method:"get",url:"https://sisplagea-api.herokuapp.com/api/v1/projects/".concat(t,"/participants.json"),headers:h.headers}).then(function(t){a.participantes=t.data.participants})},atualizarAlunoVinculado:function(t){var a=this;this.loading=!0;var e=new FormData;e.append("start_year",this.select.start_year),e.append("end_year",this.select.end_year),e.append("file_to_upload",this.file),f()({method:"put",url:"https://sisplagea-api.herokuapp.com/api/v1/projects/".concat(t,"/update_participant/").concat(this.select.id,".json"),headers:h.headers,data:e}).then(function(){a.loading=!1,a.alerta_msg="Informações de aluno vinculado atualizadas com sucesso.",a.alerta=!a.alerta,setTimeout(a.setAlertaFalse,3e3),a.select.file_url=a.file}).catch(function(t){a.loading=!1,a.erro_msg=t,a.erro=!0,setTimeout(a.setErroFalse,5e3)})},onFileChange:function(t){var a=t.target.files;a.length>=1?this.file=a[0]:this.file=null},setErroFalse:function(){this.erro=!1},setAlertaFalse:function(){this.alerta=!1}},mounted:function(){var t=this;f()({method:"get",url:"https://sisplagea-api.herokuapp.com/api/v1/projects.json",headers:m.headers}).then(function(a){t.projetos=a.data.projects}).catch(function(){alert("erro")}),f()({method:"get",url:"https://sisplagea-api.herokuapp.com/api/v1/students.json",headers:m.headers}).then(function(a){t.alunos=a.data.students}).catch(function(){alert("erro")})}},_=g,b=e("2877"),x=e("6544"),y=e.n(x),k=e("0798"),j=e("8336"),P=e("b0af"),V=e("99d9"),w=e("12b2"),C=e("2b5d"),S=e("a523"),A=e("c377"),T=e("169a"),I=e("ce7e"),F=e("0e8f"),L=e("132d"),E=e("a722"),D=e("8860"),q=e("ba95"),O=e("40fe"),N=e("5d23"),$=e("9910"),M=e("e0c7"),z=e("2677"),B=e("3a2f"),G=Object(b["a"])(_,u,v,!1,null,null,null),J=G.exports;y()(G,{VAlert:k["a"],VBtn:j["a"],VCard:P["a"],VCardActions:V["a"],VCardText:V["b"],VCardTitle:w["a"],VCombobox:C["a"],VContainer:S["a"],VDataIterator:A["a"],VDialog:T["a"],VDivider:I["a"],VFlex:F["a"],VIcon:L["a"],VLayout:E["a"],VList:D["a"],VListTile:q["a"],VListTileAction:O["a"],VListTileContent:N["a"],VListTileTitle:N["b"],VSpacer:$["a"],VSubheader:M["a"],VTextField:z["a"],VTooltip:B["a"]});var H={headers:{"access-token":localStorage.getItem("data['at']"),client:localStorage.getItem("data['c']"),"content-type":localStorage.getItem("data['ct']"),uid:localStorage.getItem("data['uid']")}};null==H.headers.client&&(window.location.href="/login.html");var W={name:"app",components:{Navbar:n["a"],Footer:c["a"],Menu:d["a"],ModuloListarProjPesq:J}},K=W,Q=e("7496"),R=e("549c"),U=Object(b["a"])(K,i,o,!1,null,null,null),X=U.exports;y()(U,{VApp:Q["a"],VContent:R["a"]});e("bf40");r["default"].config.productionTip=!1,r["default"].use(s.a),new r["default"]({render:function(t){return t(X)}}).$mount("#app")}});
//# sourceMappingURL=listarProjPesq.84f8a90f.js.map