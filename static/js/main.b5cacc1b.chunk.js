(this.webpackJsonpvaccinipertutti=this.webpackJsonpvaccinipertutti||[]).push([[0],{111:function(e,t,a){},113:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),r=a(11),o=a.n(r),c=a(79),s=a(14),l=a(13),u=a(80),d=a(174),j=(a(111),a(81)),b=a(7),m=a(58),f=a.n(m),h=a(155),O=a(158),p=a(179),g=a(185),x=a(182),v=a(162),w=a(177),D=a(183),_=a(169),k=a(170),z=a(171),C=a(172),y=a(173),S=a(163),T=a(164),I=a(165),A=a(166),E=a(167),N=a(168),F=a(152),P=a(176),q=a(153),M=a(154),B=a(178),R=a(180),L=a(75),Y=a(63);a(113);var U=function(){var e,t,a,r,o,c,s,u,d,m,U,V,Q=Object(B.a)(L),G=Q.format(",d"),J=Q.format(".1%"),W=Object(R.a)(Y),H=W.format("%A %e %B %Y"),K=W.format("%B %Y"),X=W.format("%Y-%m-%d"),Z=Object(l.e)("embed",Object(l.f)(l.a,!1)),$=Object(b.a)(Z,2),ee=$[0],te=($[1],Object(i.useState)({})),ae=Object(b.a)(te,2),ne=ae[0],ie=ae[1],re=Object(i.useState)([]),oe=Object(b.a)(re,2),ce=oe[0],se=oe[1],le=Object(i.useState)({}),ue=Object(b.a)(le,2),de=ue[0],je=ue[1],be=Object(i.useState)(6e7),me=Object(b.a)(be,2),fe=me[0],he=me[1],Oe=Object(l.e)("populationFraction",Object(l.f)(l.b,.8)),pe=Object(b.a)(Oe,2),ge=pe[0],xe=pe[1],ve=Object(i.useState)([]),we=Object(b.a)(ve,2),De=we[0],_e=we[1],ke=Object(l.e)("area",Object(l.f)(l.d,"ITA")),ze=Object(b.a)(ke,2),Ce=ze[0],ye=ze[1],Se=Object(i.useState)(new Date),Te=Object(b.a)(Se,2),Ie=Te[0],Ae=Te[1],Ee=Object(l.e)("lastDays",Object(l.f)(l.b,7)),Ne=Object(b.a)(Ee,2),Fe=Ne[0],Pe=Ne[1],qe=Object(i.useState)(new Date),Me=Object(b.a)(qe,2),Be=Me[0],Re=Me[1],Le=Object(l.e)("doses",Object(l.f)(l.b,2)),Ye=Object(b.a)(Le,2),Ue=Ye[0],Ve=Ye[1],Qe=Object(i.useState)(0),Ge=Object(b.a)(Qe,2),Je=Ge[0],We=Ge[1],He=Object(i.useState)(0),Ke=Object(b.a)(He,2),Xe=Ke[0],Ze=Ke[1],$e=Object(i.useState)(0),et=Object(b.a)($e,2),tt=et[0],at=et[1],nt=Object(i.useState)(0),it=Object(b.a)(nt,2),rt=it[0],ot=it[1],ct=Object(i.useState)([]),st=Object(b.a)(ct,2),lt=st[0],ut=st[1],dt=Object(i.useState)([]),jt=Object(b.a)(dt,2),bt=jt[0],mt=jt[1],ft=Object(i.useState)(0),ht=Object(b.a)(ft,2),Ot=ht[0],pt=ht[1],gt=Object(i.useState)(0),xt=Object(b.a)(gt,2),vt=xt[0],wt=xt[1],Dt=Object(l.e)("targetMonth",Object(l.f)(l.b,8)),_t=Object(b.a)(Dt,2),kt=_t[0],zt=_t[1],Ct=Object(l.e)("targetYear",Object(l.f)(l.b,(new Date).getFullYear())),yt=Object(b.a)(Ct,2),St=yt[0],Tt=yt[1],It=Object(i.useState)(new Date),At=Object(b.a)(It,2),Et=At[0],Nt=At[1],Ft=Object(i.useState)(0),Pt=Object(b.a)(Ft,2),qt=Pt[0],Mt=Pt[1],Bt=Object(i.useState)({}),Rt=Object(b.a)(Bt,2),Lt=Rt[0],Yt=Rt[1],Ut=Object(i.useState)(0),Vt=Object(b.a)(Ut,2),Qt=Vt[0],Gt=Vt[1],Jt=Object(i.useState)(0),Wt=Object(b.a)(Jt,2),Ht=Wt[0],Kt=Wt[1],Xt=Object(i.useState)(0),Zt=Object(b.a)(Xt,2),$t=Zt[0],ea=Zt[1],ta=Object(i.useState)(!1),aa=Object(b.a)(ta,2),na=aa[0],ia=aa[1],ra=Object(i.useState)(!1),oa=Object(b.a)(ra,2),ca=oa[0],sa=oa[1];function la(){sa(!0)}function ua(){sa(!1)}var da=function(e,t,a,n){e(t>n?n:t<a?a:t)};return Object(i.useEffect)((function(){Promise.all([window.fetch("../vaccinipertutti-data/last-update-dataset.json").then((function(e){return e.json()})).then((function(e){Ae(new Date(e.ultimo_aggiornamento))})),window.fetch("../vaccinipertutti-data/popolazione_residente_2020.json").then((function(e){return e.json()})).then((function(e){return e.sort((function(e,t){return Object(F.a)(e.order,t.order)}))})).then((function(e){_e(e),je(Object.fromEntries(Object(P.a)(e,(function(e){return e.area}))))})),window.fetch("../vaccinipertutti-data/campaign-milestones.json").then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return!e.deprecated}))})).then((function(e){return e.sort((function(e,t){return Object(F.a)(e.startDate,t.startDate)}))})).then((function(e){return e.filter((function(e){return new Date(e.startDate)<new Date&&new Date(e.endDate)>new Date}))})).then((function(e){Yt(null===e||void 0===e?void 0:e[0])})),window.fetch("../vaccinipertutti-data/somministrazioni-vaccini-summary-latest.json").then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){return e.filter((function(e){return"ITA"!==e.area}))})).then((function(e){return e.sort((function(e,t){return Object(q.a)(e.data_somministrazione,t.data_somministrazione)}))})).then((function(e){ie(Object(j.a)({ITA:Array.from(Object(P.a)(e,(function(e){return e.data_somministrazione})).values()).map((function(e){return e.reduce((function(e,t){var a,n;return{area:"ITA",nome_area:"Italia",data_somministrazione:t.data_somministrazione,totale:(null!==(a=e.totale)&&void 0!==a?a:0)+t.totale,seconda_dose:(null!==(n=e.seconda_dose)&&void 0!==n?n:0)+t.seconda_dose}}),{})}))},Object.fromEntries(Object(P.a)(e,(function(e){return e.area})))))}))]).then((function(){ia(!0)}))}),[]),Object(i.useEffect)((function(){var e=new Date,t=new Date(e.getFullYear(),e.getMonth()+1,0);new Date(St,kt+1,0)>t?Nt(new Date(St,kt+1,0)):(zt(Et.getMonth()),Tt(Et.getFullYear()))}),[kt,St]),Object(i.useEffect)((function(){se(ne[Ce]||[])}),[ne,Ce]),Object(i.useEffect)((function(){de[Ce]&&he(de[Ce][0].totale)}),[de,Ce]),Object(i.useEffect)((function(){ut(Object(P.b)(ce,(function(e){return Object(M.a)(e,(function(e){return e.totale}))}),(function(e){return X(new Date(e.data_somministrazione))}))),mt(Object(P.b)(ce,(function(e){return Object(M.a)(e,(function(e){return e.seconda_dose}))}),(function(e){return X(new Date(e.data_somministrazione))}))),We(Object(M.a)(ce,(function(e){return e.totale}))),Ze(Object(M.a)(ce,(function(e){return e.seconda_dose})))}),[ce]),Object(i.useEffect)((function(){Mt(tt/(Et-new Date)*1e3*60*60*24)}),[Et,tt]),Object(i.useEffect)((function(){pt(Object(M.a)(lt.filter((function(e){return e[0]!==X(new Date)})).slice(0,Fe),(function(e){return e[1]}))/Fe)}),[lt,Fe]),Object(i.useEffect)((function(){wt(Object(M.a)(bt.filter((function(e){return e[0]!==X(new Date)})).slice(0,Fe),(function(e){return e[1]}))/Fe)}),[bt,Fe]),Object(i.useEffect)((function(){at(Ue*fe*ge-Je)}),[Ue,fe,ge,Je]),Object(i.useEffect)((function(){var e=tt/Ot,t=new Date;t.setDate(t.getDate()+Math.round(e)),ot(e),Re(t)}),[tt,Ot]),Object(i.useEffect)((function(){Gt((new Date(Lt.endDate)-new Date)/864e5),Kt(Ue*Lt.total-Je)}),[Ue,Lt,Je]),Object(i.useEffect)((function(){ea(Ht/Qt)}),[Ht,Qt]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h.a,{className:"container ".concat(ee?"slim":"boxed"),maxWidth:"md",style:{opacity:+na},children:Object(n.jsxs)(O.a,{container:!0,direction:"column",justify:"center",spacing:2,children:[Object(n.jsxs)(O.a,{item:!0,className:"footerText",children:[Object(n.jsx)("a",{href:"https://ondata.it",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"ondata.png",className:"logo small"})}),Object(n.jsx)("a",{href:"http://www.datibenecomune.it",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"datibenecomune.png",className:"logo small"})})]}),Object(n.jsxs)(O.a,{item:!0,className:"footerText",children:["Che cos'\xe8 questa pagina? ",Object(n.jsx)("a",{href:"#",onClick:la,children:"Leggi qui!"})]}),Object(n.jsxs)(O.a,{item:!0,className:"supTitle",children:["Termine previsto della campagna vaccinale in ",Object(n.jsx)("em",{children:null===(e=de[Ce])||void 0===e||null===(t=e[0])||void 0===t?void 0:t.nome})," contro Sars-CoV-2."]}),Object(n.jsx)(O.a,{item:!0,component:"h1",className:"mainTitle",children:H(Be)}),Object(n.jsxs)(O.a,{item:!0,className:"footerText",children:["Come abbiamo calcolato questa data? ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/blob/main/README.md#le-stime",target:"_blank",rel:"noreferrer",children:"Ecco tutte le info!"})]}),Object(n.jsxs)(O.a,{item:!0,className:"mainText",children:["In ",Object(n.jsx)(p.a,{value:De.length?Ce:"",onChange:function(e){return ye(e.target.value)},children:De.map((function(e){return Object(n.jsx)(g.a,{value:e.area,children:e.nome},e.area)}))})," si \xe8 iniziato a somministrare il primo vaccino il ",Object(n.jsx)("em",{children:"27 dicembre 2020"}),". A ",Ie.getDate()===(new Date).getDate()?"oggi":"ieri",", ",Object(n.jsx)("em",{children:H(Ie).toLowerCase()}),", sono state somministrate ",Object(n.jsx)("em",{children:G(Je)})," dosi, ma ne mancano ",Object(n.jsx)("em",{children:G(tt)})," per vaccinare il ",Object(n.jsx)(x.a,{value:100*ge,onChange:function(e){return xe(+e.target.value/100)},onBlur:function(e){return da(xe,+e.target.value/100,.6,1)},inputProps:{type:"number",min:60,max:100,step:5},InputProps:{endAdornment:Object(n.jsx)(v.a,{position:"end",children:"%"})}})," della popolazione con ",Object(n.jsx)(x.a,{value:Ue,onChange:function(e){return Ve(+e.target.value)},onBlur:function(e){return da(Ve,+e.target.value,1,2)},inputProps:{type:"number",min:1,max:2,step:1}})," dosi a testa."]}),Object(n.jsxs)(O.a,{item:!0,className:"mainText",children:["Al ritmo di ",Object(n.jsx)("em",{children:G(Ot)})," somministrazioni al giorno tenuto negli ultimi ",Object(n.jsx)(x.a,{value:Fe,onChange:function(e){return Pe(+e.target.value)},onBlur:function(e){return da(Pe,+e.target.value,1,lt.length)},inputProps:{type:"number",min:1,max:lt.length,step:1}})," giorni, mancano ",Object(n.jsxs)("em",{children:[G(Math.floor(rt/365))," anni, ",G(Math.floor(rt%365/30))," mesi e ",G(Math.floor(rt%12))," giorni"]})," prima di raggiungere l'obiettivo. Per farlo entro ",Object(n.jsx)(p.a,{value:kt,onChange:function(e){return zt(+e.target.value)},children:Y.months.map((function(e,t){return Object(n.jsx)(g.a,{value:t,children:e.toLocaleLowerCase()},t)}))})," ",Object(n.jsx)(x.a,{value:St,onChange:function(e){return Tt(+e.target.value)},onBlur:function(e){return da(Tt,+e.target.value,(new Date).getFullYear(),2030)},inputProps:{type:"number",min:(new Date).getFullYear(),max:2030,step:1}})," bisognerebbe somministrare una media di ",Object(n.jsx)("em",{children:G(qt)})," dosi al giorno."]}),Object(n.jsxs)(O.a,{item:!0,className:"mainText",children:["Attualmente le persone vaccinate con due dosi sono ",Object(n.jsx)("em",{children:G(Xe)})," (una media di ",Object(n.jsx)("em",{children:G(vt)})," al giorno), pari al ",Object(n.jsx)("em",{children:J(Xe/(ge*fe))})," dell'obiettivo di copertura vaccinale della popolazione."]}),"ITA"===Ce?$t<Ot?Object(n.jsxs)(O.a,{item:!0,className:"mainText",children:["Il ritmo attuale \xe8 in linea con il prossimo obiettivo di vaccinare ",Object(n.jsx)("em",{children:G(Lt.total)})," persone (",null===(a=Lt.people)||void 0===a?void 0:a.map((function(e){return e.type})).join(", "),") entro ",Object(n.jsx)("em",{children:K(new Date(Lt.endDate))}),"."]}):Object(n.jsxs)(O.a,{item:!0,className:"mainText",children:["Il ritmo attuale dovrebbe aumentare del ",Object(n.jsx)("em",{children:J(($t-Ot)/$t)})," per raggiungere il prossimo obiettivo di vaccinare ",Object(n.jsx)("em",{children:G(Lt.total)})," persone (",null===(r=Lt.people)||void 0===r?void 0:r.map((function(e){return e.type})).join(", "),") entro ",Object(n.jsx)("em",{children:K(new Date(Lt.endDate))})," (fonte: ",Object(n.jsx)("a",{href:null===Lt||void 0===Lt||null===(o=Lt.source)||void 0===o?void 0:o.url,target:"_blank",rel:"noreferrer",children:null===Lt||void 0===Lt||null===(c=Lt.source)||void 0===c?void 0:c.name}),")."]}):null,Object(n.jsx)(O.a,{item:!0,className:"footerText",children:Object(n.jsx)("img",{src:"syringe.png",className:"syringe large"})}),Object(n.jsxs)(O.a,{item:!0,className:"footerText",children:["Un progetto a cura dell'",Object(n.jsx)("a",{href:"https://ondata.it",target:"_blank",rel:"noreferrer",children:"Associazione onData"}),"."]}),Object(n.jsxs)(O.a,{item:!0,className:"footerText",children:["Perch\xe9 l'abbiamo fatto? ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/blob/main/README.md#frequently-asked-question-faq",target:"_blank",rel:"noreferrer",children:"Scoprilo!"})]}),Object(n.jsxs)(O.a,{item:!0,className:"footerText",children:["E se ti piace, sottoscrivi la campagna ",Object(n.jsx)("a",{href:"https://datibenecomune.it/",target:"_blank",rel:"noreferrer",children:"#datiBeneComune"}),"!"]}),ee||Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w.a,{className:"Flower lt"}),Object(n.jsx)(w.a,{className:"Flower lb"}),Object(n.jsx)(w.a,{className:"Cube rt icon",children:Object(n.jsxs)(O.a,{container:!0,justify:"center",alignContent:"center",direction:"column",children:[Object(n.jsx)(O.a,{item:!0,xs:!0,children:Object(n.jsx)(S.a,{color:"primary",onClick:la})}),Object(n.jsx)(O.a,{item:!0,xs:!0,children:Object(n.jsx)("a",{title:"Condividi su Twitter",href:'https://twitter.com/share?text="'.concat(f.a.decode("Termine previsto della campagna vaccinale in ".concat(null===(s=de[Ce])||void 0===s||null===(u=s[0])||void 0===u?void 0:u.nome," contro Sars-CoV-2: ").concat(H(Be))),'" via @ondatait&hashtags=datiBeneComune&url=').concat(encodeURIComponent(window.location.href)),target:"_blank",rel:"noreferrer",children:Object(n.jsx)(T.a,{color:"primary"})})}),Object(n.jsx)(O.a,{item:!0,xs:!0,children:Object(n.jsx)("a",{title:"Condividi su Facebook",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(window.location.href),"&hashtag=").concat(encodeURIComponent("#datiBeneComune")),target:"_blank",rel:"noreferrer",children:Object(n.jsx)(I.a,{color:"primary"})})}),Object(n.jsx)(O.a,{item:!0,xs:!0,children:Object(n.jsx)("a",{title:"Condividi su LinkedIn",href:"https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(window.location.href)),target:"_blank",rel:"noreferrer",children:Object(n.jsx)(A.a,{color:"primary"})})}),Object(n.jsx)(O.a,{item:!0,xs:!0,children:Object(n.jsx)("a",{title:"Condividi via e-mail",href:'mailto:?subject="'.concat(f.a.decode("#datiBeneComune - Termine previsto della campagna vaccinale in ".concat(null===(d=de[Ce])||void 0===d||null===(m=d[0])||void 0===m?void 0:m.nome," contro Sars-CoV-2: ").concat(H(Be))),'" via onData - APS&body=').concat(f.a.decode("In ".concat(null===(U=de[Ce])||void 0===U||null===(V=U[0])||void 0===V?void 0:V.nome," si \xe8 iniziato a somministrare il primo vaccino il 27 dicembre 2020")),"... Continua a leggere su ").concat(encodeURIComponent(window.location.href)),target:"_blank",rel:"noreferrer",children:Object(n.jsx)(E.a,{color:"primary"})})}),Object(n.jsx)(O.a,{item:!0,xs:!0,children:Object(n.jsx)("a",{title:"Permalink",href:window.location.href,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(N.a,{color:"primary"})})})]})}),Object(n.jsx)(w.a,{className:"Flower rb"})]})]})}),Object(n.jsxs)(D.a,{open:ca,onClose:ua,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(n.jsx)(_.a,{id:"alert-dialog-title",children:'"Vaccini per tutti" by onData'}),Object(n.jsxs)(k.a,{children:[Object(n.jsxs)(z.a,{children:['"Vaccini per tutti" \xe8 un\'',Object(n.jsx)("b",{children:"applicazione sperimentale non ufficiale"})," che permette di stimare i tempi di avanzamento della campagna di vaccinazione in Italia sulla base degli open data istituzionali del ",Object(n.jsx)("a",{href:"https://github.com/italia/covid19-opendata-vaccini/",target:"_blank",rel:"noreferrer",children:"Commissario straordinario per l'emergenza Covid-19 - Presidenza del Consiglio dei Ministri"}),", dell'",Object(n.jsx)("a",{href:"https://www.epicentro.iss.it/vaccini/covid-19-piano-vaccinazione",target:"_blank",rel:"noreferrer",children:"Istituto Superiore di Sanit\xe0"})," e di ",Object(n.jsx)("a",{href:"http://demo.istat.it/popres/index.php?anno=2020&lingua=ita",target:"_blank",rel:"noreferrer",children:"ISTAT"}),"."]}),Object(n.jsx)(z.a,{children:Object(n.jsx)("img",{width:"100%",src:"card.png"})}),Object(n.jsxs)(z.a,{children:["Come funziona? In base all'andamento della campagna di vaccinazione (quante somministrazioni effettuate in Italia nei giorni passati) stimiamo quanto tempo resta per raggiungere gli obiettivi di copertura vaccinale della popolazione generale e di quella dei soggetti ad alta priorit\xe0, cos\xec come definiti nel ",Object(n.jsx)("a",{href:"https://www.epicentro.iss.it/vaccini/covid-19-piano-vaccinazione",target:"_blank",rel:"noreferrer",children:"primo"})," e ",Object(n.jsx)("a",{href:"https://www.governo.it/sites/governo.it/files/210313_Piano_Vaccinale_marzo_2021.pdf",target:"_blank",rel:"noreferrer",children:"secondo"})," piano nazionale di vaccinazione. Puoi modificare i parametri che influiscono sul calcolo, prova a interagire con i numeri su ",Object(n.jsx)("em",{className:"bg",children:"sfondo colorato"})," ed esplora tutti gli scenari possibili. Trovi ulteriori dettagli in ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/blob/main/README.md#le-stime",target:"_blank",rel:"noreferrer",children:"questa pagina"}),"."]}),Object(n.jsxs)(z.a,{children:["Per approfondire le motivazioni dietro lo sviluppo di questo lavoro, il significato e i limiti dei dati a disposizione, le modalit\xe0 di calcolo e l'affidabilit\xe0 delle stime presentate puoi leggere le nostre ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/blob/main/README.md#frequently-asked-question-faq",target:"_blank",rel:"noreferrer",children:"FAQ"})," (Frequently Asked Questions)."]}),Object(n.jsxs)(z.a,{children:["Se hai un dubbio o vuoi fare una segnalazione, puoi ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/issues",target:"_blank",rel:"noreferrer",children:"aprire una issue"}),"."]}),Object(n.jsxs)(z.a,{children:["Tutte le informazioni contenute in questa pagina sono da prendersi ",Object(n.jsx)("a",{href:"https://en.wikipedia.org/wiki/As_is",target:"_blank",rel:"noreferrer",children:"cos\xec come sono"}),", senza nessuna garanzia di correttezza o pretesa di affidabilit\xe0. I dati sottostanti sono aggiornati quotidianamente dalle fonti indicate e le stime cambiano quindi ogni giorno seguendo l'andamento della campagna vaccinale."]}),Object(n.jsxs)(z.a,{children:["L'applicazione \xe8 sviluppata e mantenuta da ",Object(n.jsx)("a",{href:"https://github.com/jenkin",target:"_blank",rel:"noreferrer",children:"jenkin"})," per ",Object(n.jsx)("a",{href:"https://ondata.it/",target:"_blank",rel:"noreferrer",children:"onData APS"}),", associazione di promozione sociale che promuove l'apertura dei dati pubblici per renderli accessibili a tutte e tutti."]}),Object(n.jsxs)(z.a,{children:["Il codice sorgente \xe8 open source e rilasciato sotto ",Object(n.jsx)("a",{href:"https://tldrlegal.com/license/mit-license",target:"_blank",rel:"noreferrer",children:"licenza MIT"})," su Github: ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti",target:"_blank",rel:"noreferrer",children:"ondata/vaccinipertutti"}),". Questa pagina \xe8 ospitata dal servizio ",Object(n.jsx)("a",{href:"https://pages.github.com/",target:"_blank",rel:"noreferrer",children:"Github Pages"})," e fa esclusivamente uso di cookie tecnici: non traccia n\xe9 profila in alcun modo gli utenti."]}),Object(n.jsxs)(z.a,{children:["Puoi sostenere l'attivit\xe0 di onData in molti modi, ",Object(n.jsx)("a",{href:"https://sostieni.ondata.it/",target:"_blank",rel:"noreferrer",children:"dai un'occhiata"}),"!"]})]}),Object(n.jsxs)(C.a,{justify:"flex-start",children:[Object(n.jsx)(y.a,{color:"primary",href:"https://datibenecomune.it/",target:"_blank",rel:"noreferrer",children:"Sottoscrivi la campagna #datiBeneComune"}),Object(n.jsx)(y.a,{onClick:ua,color:"secondary",variant:"contained",autoFocus:!0,children:"Ho capito, grazie!"})]})]})]})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,188)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),r(e),o(e)}))},Q=Object(u.a)({palette:{primary:{main:"rgba(0, 0, 0, 0.87)"},secondary:{main:"#e82f7d"}},typography:{fontFamily:['"Titillium Web"',"sans-serif"]},overrides:{MuiInput:{root:{padding:"0 .5em",backgroundColor:"#e82f7d",color:"white"}},MuiInputAdornment:{root:{"& > *":{color:"white !important",fontSize:"1.5rem"}}},MuiDialogActions:{root:{justifyContent:"flex-start","& > *:last-child":{marginLeft:"auto !important"}}}}});o.a.render(Object(n.jsx)(c.a,{children:Object(n.jsx)(l.c,{ReactRouterRoute:s.a,children:Object(n.jsx)(d.a,{theme:Q,children:Object(n.jsx)(U,{})})})}),document.getElementById("root")),V()}},[[119,1,2]]]);
//# sourceMappingURL=main.b5cacc1b.chunk.js.map