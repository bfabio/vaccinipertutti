(this.webpackJsonpvaccinipertutti=this.webpackJsonpvaccinipertutti||[]).push([[0],{111:function(e,t,a){},113:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),r=a(11),o=a.n(r),c=a(79),s=a(13),l=a(14),u=a(80),d=a(174),j=(a(111),a(81)),b=a(7),m=a(58),h=a.n(m),f=a(155),O=a(158),p=a(179),g=a(185),x=a(182),v=a(162),w=a(177),D=a(183),z=a(169),k=a(170),C=a(171),_=a(172),y=a(173),S=a(163),I=a(164),T=a(165),A=a(166),E=a(167),q=a(168),F=a(152),N=a(176),P=a(153),M=a(154),R=a(178),B=a(180),L=a(75),Y=a(63);a(113);var U=function(){var e,t,a,r,o,c,s,u,d,m,U=Object(R.a)(L),V=U.format(",d"),Q=U.format(".1%"),G=Object(B.a)(Y),J=G.format("%A %e %B %Y"),W=G.format("%B %Y"),H=G.format("%Y-%m-%d"),K=Object(i.useState)({}),X=Object(b.a)(K,2),Z=X[0],$=X[1],ee=Object(i.useState)([]),te=Object(b.a)(ee,2),ae=te[0],ne=te[1],ie=Object(i.useState)({}),re=Object(b.a)(ie,2),oe=re[0],ce=re[1],se=Object(i.useState)(6e7),le=Object(b.a)(se,2),ue=le[0],de=le[1],je=Object(l.d)("populationFraction",Object(l.e)(l.a,.7)),be=Object(b.a)(je,2),me=be[0],he=be[1],fe=Object(i.useState)([]),Oe=Object(b.a)(fe,2),pe=Oe[0],ge=Oe[1],xe=Object(l.d)("area",Object(l.e)(l.c,"ITA")),ve=Object(b.a)(xe,2),we=ve[0],De=ve[1],ze=Object(i.useState)(new Date),ke=Object(b.a)(ze,2),Ce=ke[0],_e=ke[1],ye=Object(l.d)("lastDays",Object(l.e)(l.a,7)),Se=Object(b.a)(ye,2),Ie=Se[0],Te=Se[1],Ae=Object(i.useState)(new Date),Ee=Object(b.a)(Ae,2),qe=Ee[0],Fe=Ee[1],Ne=Object(l.d)("doses",Object(l.e)(l.a,2)),Pe=Object(b.a)(Ne,2),Me=Pe[0],Re=Pe[1],Be=Object(i.useState)(0),Le=Object(b.a)(Be,2),Ye=Le[0],Ue=Le[1],Ve=Object(i.useState)(0),Qe=Object(b.a)(Ve,2),Ge=Qe[0],Je=Qe[1],We=Object(i.useState)(0),He=Object(b.a)(We,2),Ke=He[0],Xe=He[1],Ze=Object(i.useState)(0),$e=Object(b.a)(Ze,2),et=$e[0],tt=$e[1],at=Object(i.useState)([]),nt=Object(b.a)(at,2),it=nt[0],rt=nt[1],ot=Object(i.useState)([]),ct=Object(b.a)(ot,2),st=ct[0],lt=ct[1],ut=Object(i.useState)(0),dt=Object(b.a)(ut,2),jt=dt[0],bt=dt[1],mt=Object(i.useState)(0),ht=Object(b.a)(mt,2),ft=ht[0],Ot=ht[1],pt=Object(l.d)("targetMonth",Object(l.e)(l.a,8)),gt=Object(b.a)(pt,2),xt=gt[0],vt=gt[1],wt=Object(l.d)("targetYear",Object(l.e)(l.a,(new Date).getFullYear())),Dt=Object(b.a)(wt,2),zt=Dt[0],kt=Dt[1],Ct=Object(i.useState)(new Date),_t=Object(b.a)(Ct,2),yt=_t[0],St=_t[1],It=Object(i.useState)(0),Tt=Object(b.a)(It,2),At=Tt[0],Et=Tt[1],qt=Object(i.useState)({}),Ft=Object(b.a)(qt,2),Nt=Ft[0],Pt=Ft[1],Mt=Object(i.useState)(0),Rt=Object(b.a)(Mt,2),Bt=Rt[0],Lt=Rt[1],Yt=Object(i.useState)(0),Ut=Object(b.a)(Yt,2),Vt=Ut[0],Qt=Ut[1],Gt=Object(i.useState)(0),Jt=Object(b.a)(Gt,2),Wt=Jt[0],Ht=Jt[1],Kt=Object(i.useState)(!1),Xt=Object(b.a)(Kt,2),Zt=Xt[0],$t=Xt[1],ea=Object(i.useState)(!1),ta=Object(b.a)(ea,2),aa=ta[0],na=ta[1];function ia(){na(!0)}function ra(){na(!1)}return Object(i.useEffect)((function(){Promise.all([window.fetch("../vaccinipertutti-data/last-update-dataset.json").then((function(e){return e.json()})).then((function(e){_e(new Date(e.ultimo_aggiornamento))})),window.fetch("../vaccinipertutti-data/popolazione_residente_2020.json").then((function(e){return e.json()})).then((function(e){return e.sort((function(e,t){return Object(F.a)(e.order,t.order)}))})).then((function(e){ge(e),ce(Object.fromEntries(Object(N.a)(e,(function(e){return e.area}))))})),window.fetch("../vaccinipertutti-data/campaign-milestones.json").then((function(e){return e.json()})).then((function(e){return e.sort((function(e,t){return Object(F.a)(e.startDate,t.startDate)}))})).then((function(e){return e.filter((function(e){return new Date(e.startDate)<new Date&&new Date(e.endDate)>new Date}))})).then((function(e){Pt(null===e||void 0===e?void 0:e[0])})),window.fetch("../vaccinipertutti-data/somministrazioni-vaccini-summary-latest.json").then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){return e.filter((function(e){return"ITA"!==e.area}))})).then((function(e){return e.sort((function(e,t){return Object(P.a)(e.data_somministrazione,t.data_somministrazione)}))})).then((function(e){$(Object(j.a)({ITA:Array.from(Object(N.a)(e,(function(e){return e.data_somministrazione})).values()).map((function(e){return e.reduce((function(e,t){var a,n;return{area:"ITA",nome_area:"Italia",data_somministrazione:t.data_somministrazione,totale:(null!==(a=e.totale)&&void 0!==a?a:0)+t.totale,seconda_dose:(null!==(n=e.seconda_dose)&&void 0!==n?n:0)+t.seconda_dose}}),{})}))},Object.fromEntries(Object(N.a)(e,(function(e){return e.area})))))}))]).then((function(){$t(!0)}))}),[]),Object(i.useEffect)((function(){var e=new Date,t=new Date(e.getFullYear(),e.getMonth()+1,0);new Date(zt,xt+1,0)>t?St(new Date(zt,xt+1,0)):(vt(yt.getMonth()),kt(yt.getFullYear()))}),[xt,zt]),Object(i.useEffect)((function(){ne(Z[we]||[])}),[Z,we]),Object(i.useEffect)((function(){oe[we]&&de(oe[we][0].totale)}),[oe,we]),Object(i.useEffect)((function(){rt(Object(N.b)(ae,(function(e){return Object(M.a)(e,(function(e){return e.totale}))}),(function(e){return H(new Date(e.data_somministrazione))}))),lt(Object(N.b)(ae,(function(e){return Object(M.a)(e,(function(e){return e.seconda_dose}))}),(function(e){return H(new Date(e.data_somministrazione))}))),Ue(Object(M.a)(ae,(function(e){return e.totale}))),Je(Object(M.a)(ae,(function(e){return e.seconda_dose})))}),[ae]),Object(i.useEffect)((function(){Et(Ke/(yt-new Date)*1e3*60*60*24)}),[yt,Ke]),Object(i.useEffect)((function(){bt(Object(M.a)(it.filter((function(e){return e[0]!==H(new Date)})).slice(0,Ie),(function(e){return e[1]}))/Ie)}),[it,Ie]),Object(i.useEffect)((function(){Ot(Object(M.a)(st.filter((function(e){return e[0]!==H(new Date)})).slice(0,Ie),(function(e){return e[1]}))/Ie)}),[st,Ie]),Object(i.useEffect)((function(){Xe(Me*ue*me-Ye)}),[Me,ue,me,Ye]),Object(i.useEffect)((function(){var e=Ke/jt,t=new Date;t.setDate(t.getDate()+Math.round(e)),tt(e),Fe(t)}),[Ke,jt]),Object(i.useEffect)((function(){Lt((new Date(Nt.endDate)-new Date)/864e5),Qt(Me*Nt.total-Ye)}),[Me,Nt,Ye]),Object(i.useEffect)((function(){Ht(Vt/Bt)}),[Vt,Bt]),console.log(Z),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f.a,{className:"container",maxWidth:"md",style:{opacity:+Zt},children:Object(n.jsxs)(O.a,{container:!0,direction:"column",justify:"center",spacing:2,children:[Object(n.jsxs)(O.a,{item:!0,className:"footerText",children:["Che cos'\xe8 questa pagina? ",Object(n.jsx)("a",{href:"#",onClick:ia,children:"Leggi qui!"})]}),Object(n.jsxs)(O.a,{item:!0,className:"supTitle",children:["Termine previsto della campagna vaccinale in ",Object(n.jsx)("em",{children:null===(e=oe[we])||void 0===e||null===(t=e[0])||void 0===t?void 0:t.nome})," contro Sars-CoV-2."]}),Object(n.jsx)(O.a,{item:!0,component:"h1",className:"mainTitle",children:J(qe)}),Object(n.jsxs)(O.a,{item:!0,className:"footerText",children:["Come abbiamo calcolato questa data? ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/blob/main/README.md#le-stime",target:"_blank",rel:"noreferrer",children:"Ecco tutte le info!"})]}),Object(n.jsxs)(O.a,{item:!0,className:"mainText",children:["In ",Object(n.jsx)(p.a,{value:pe.length?we:"",onChange:function(e){return De(e.target.value)},children:pe.map((function(e){return Object(n.jsx)(g.a,{value:e.area,children:e.nome},e.area)}))})," si \xe8 iniziato a somministrare il primo vaccino il ",Object(n.jsx)("em",{children:"27 dicembre 2020"}),". A ",Ce.getDate()===(new Date).getDate()?"oggi":"ieri",", ",Object(n.jsx)("em",{children:J(Ce).toLowerCase()}),", sono state somministrate ",Object(n.jsx)("em",{children:V(Ye)})," dosi, ma ne mancano ",Object(n.jsx)("em",{children:V(Ke)})," per vaccinare il ",Object(n.jsx)(x.a,{value:100*me,onChange:function(e){return he(+e.target.value/100)},inputProps:{type:"number",min:60,max:100,step:5},InputProps:{endAdornment:Object(n.jsx)(v.a,{position:"end",children:"%"})}})," della popolazione con ",Object(n.jsx)(x.a,{value:Me,onChange:function(e){return Re(+e.target.value)},inputProps:{type:"number",min:1,max:2,step:1}})," dosi a testa."]}),Object(n.jsxs)(O.a,{item:!0,className:"mainText",children:["Al ritmo di ",Object(n.jsx)("em",{children:V(jt)})," somministrazioni al giorno tenuto negli ultimi ",Object(n.jsx)(x.a,{value:Ie,onChange:function(e){return Te(+e.target.value)},inputProps:{type:"number",min:1,max:it.length,step:1}})," giorni, mancano ",Object(n.jsxs)("em",{children:[V(Math.floor(et/365))," anni, ",V(Math.floor(et%365/30))," mesi e ",V(Math.floor(et%12))," giorni"]})," prima di raggiungere l'obiettivo. Per farlo entro ",Object(n.jsx)(p.a,{value:xt,onChange:function(e){return vt(+e.target.value)},children:Y.months.map((function(e,t){return Object(n.jsx)(g.a,{value:t,children:e.toLocaleLowerCase()},t)}))})," ",Object(n.jsx)(x.a,{value:zt,onChange:function(e){return kt(+e.target.value)},inputProps:{type:"number",min:(new Date).getFullYear(),max:2030,step:1}})," bisognerebbe somministrare una media di ",Object(n.jsx)("em",{children:V(At)})," dosi al giorno."]}),Object(n.jsxs)(O.a,{item:!0,className:"mainText",children:["Attualmente le persone vaccinate con due dosi sono ",Object(n.jsx)("em",{children:V(Ge)})," (una media di ",Object(n.jsx)("em",{children:V(ft)})," al giorno), pari allo ",Object(n.jsx)("em",{children:Q(Ge/(me*ue))})," dell'obiettivo di copertura vaccinale della popolazione."]}),"ITA"===we?Wt<jt?Object(n.jsxs)(O.a,{item:!0,className:"mainText",children:["Il ritmo attuale \xe8 in linea con il prossimo obiettivo di vaccinare ",Object(n.jsx)("em",{children:V(Nt.total)})," persone (",null===(a=Nt.people)||void 0===a?void 0:a.map((function(e){return e.type})).join(", "),") entro ",Object(n.jsx)("em",{children:W(new Date(Nt.endDate))}),"."]}):Object(n.jsxs)(O.a,{item:!0,className:"mainText",children:["Il ritmo attuale dovrebbe aumentare del ",Object(n.jsx)("em",{children:Q((Wt-jt)/Wt)})," per raggiungere il prossimo obiettivo di vaccinare ",Object(n.jsx)("em",{children:V(Nt.total)})," persone (",null===(r=Nt.people)||void 0===r?void 0:r.map((function(e){return e.type})).join(", "),") entro ",Object(n.jsx)("em",{children:W(new Date(Nt.endDate))}),"."]}):null,Object(n.jsxs)(O.a,{item:!0,className:"footerText",children:["Un progetto a cura dell'",Object(n.jsx)("a",{href:"https://ondata.it",target:"_blank",rel:"noreferrer",children:"Associazione onData"}),"."]}),Object(n.jsxs)(O.a,{item:!0,className:"footerText",children:["Perch\xe9 l'abbiamo fatto? ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/blob/main/README.md#frequently-asked-question-faq",target:"_blank",rel:"noreferrer",children:"Scoprilo!"})]}),Object(n.jsxs)(O.a,{item:!0,className:"footerText",children:["E se ti piace, sottoscrivi la campagna ",Object(n.jsx)("a",{href:"https://datibenecomune.it/",target:"_blank",rel:"noreferrer",children:"#datiBeneComune"}),"!"]}),Object(n.jsx)(w.a,{className:"Flower lt"}),Object(n.jsx)(w.a,{className:"Flower lb"}),Object(n.jsx)(w.a,{className:"Cube rt icon",children:Object(n.jsxs)(O.a,{container:!0,justify:"center",alignContent:"center",direction:"column",children:[Object(n.jsx)(O.a,{item:!0,xs:!0,children:Object(n.jsx)(S.a,{color:"primary",onClick:ia})}),Object(n.jsx)(O.a,{item:!0,xs:!0,children:Object(n.jsx)("a",{title:"Condividi su Twitter",href:'https://twitter.com/share?text="'.concat(h.a.decode("Termine previsto della campagna vaccinale in ".concat(null===(o=oe[we])||void 0===o||null===(c=o[0])||void 0===c?void 0:c.nome," contro Sars-CoV-2: ").concat(J(qe))),'" via @ondatait&hashtags=datiBeneComune&url=').concat(encodeURIComponent(window.location.href)),target:"_blank",rel:"noreferrer",children:Object(n.jsx)(I.a,{color:"primary"})})}),Object(n.jsx)(O.a,{item:!0,xs:!0,children:Object(n.jsx)("a",{title:"Condividi su Facebook",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(window.location.href),"&hashtag=").concat(encodeURIComponent("#datiBeneComune")),target:"_blank",rel:"noreferrer",children:Object(n.jsx)(T.a,{color:"primary"})})}),Object(n.jsx)(O.a,{item:!0,xs:!0,children:Object(n.jsx)("a",{title:"Condividi su LinkedIn",href:"https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(window.location.href)),target:"_blank",rel:"noreferrer",children:Object(n.jsx)(A.a,{color:"primary"})})}),Object(n.jsx)(O.a,{item:!0,xs:!0,children:Object(n.jsx)("a",{title:"Condividi via e-mail",href:'mailto:?subject="'.concat(h.a.decode("#datiBeneComune - Termine previsto della campagna vaccinale in ".concat(null===(s=oe[we])||void 0===s||null===(u=s[0])||void 0===u?void 0:u.nome," contro Sars-CoV-2: ").concat(J(qe))),'" via onData - APS&body=').concat(h.a.decode("In ".concat(null===(d=oe[we])||void 0===d||null===(m=d[0])||void 0===m?void 0:m.nome," si \xe8 iniziato a somministrare il primo vaccino il 27 dicembre 2020")),"... Continua a leggere su ").concat(encodeURIComponent(window.location.href)),target:"_blank",rel:"noreferrer",children:Object(n.jsx)(E.a,{color:"primary"})})}),Object(n.jsx)(O.a,{item:!0,xs:!0,children:Object(n.jsx)("a",{title:"Permalink",href:window.location.href,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(q.a,{color:"primary"})})})]})}),Object(n.jsx)(w.a,{className:"Flower rb"})]})}),Object(n.jsxs)(D.a,{open:aa,onClose:ra,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(n.jsx)(z.a,{id:"alert-dialog-title",children:'"Vaccini per tutti" by onData'}),Object(n.jsxs)(k.a,{children:[Object(n.jsxs)(C.a,{children:['"Vaccini per tutti" \xe8 un\'',Object(n.jsx)("b",{children:"applicazione sperimentale non ufficiale"})," che permette di stimare i tempi di avanzamento della campagna di vaccinazione in Italia sulla base degli open data istituzionali del ",Object(n.jsx)("a",{href:"https://github.com/italia/covid19-opendata-vaccini/",target:"_blank",rel:"noreferrer",children:"Commissario straordinario per l'emergenza Covid-19 - Presidenza del Consiglio dei Ministri"}),", dell'",Object(n.jsx)("a",{href:"https://www.epicentro.iss.it/vaccini/covid-19-piano-vaccinazione",target:"_blank",rel:"noreferrer",children:"Istituto Superiore di Sanit\xe0"})," e di ",Object(n.jsx)("a",{href:"http://demo.istat.it/popres/index.php?anno=2020&lingua=ita",target:"_blank",rel:"noreferrer",children:"ISTAT"}),"."]}),Object(n.jsx)(C.a,{children:Object(n.jsx)("img",{width:"100%",src:"card.png"})}),Object(n.jsxs)(C.a,{children:["Come funziona? In base all'andamento della campagna di vaccinazione (quante somministrazioni effettuate in Italia nei giorni passati) stimiamo quanto tempo resta per raggiungere gli obiettivi di copertura vaccinale della popolazione generale e di quella dei soggetti ad alta priorit\xe0, cos\xec come definiti nel ",Object(n.jsx)("a",{href:"https://www.epicentro.iss.it/vaccini/covid-19-piano-vaccinazione",target:"_blank",rel:"noreferrer",children:"piano nazionale di vaccinazione"}),". Puoi modificare i parametri che influiscono sul calcolo, prova a interagire con i numeri su ",Object(n.jsx)("em",{className:"bg",children:"sfondo colorato"})," ed esplora tutti gli scenari possibili. Trovi ulteriori dettagli in ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/blob/main/README.md#le-stime",target:"_blank",rel:"noreferrer",children:"questa pagina"}),"."]}),Object(n.jsxs)(C.a,{children:["Per approfondire le motivazioni dietro lo sviluppo di questo lavoro, il significato e i limiti dei dati a disposizione, le modalit\xe0 di calcolo e l'affidabilit\xe0 delle stime presentate puoi leggere le nostre ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/blob/main/README.md#frequently-asked-question-faq",target:"_blank",rel:"noreferrer",children:"FAQ"})," (Frequently Asked Questions)."]}),Object(n.jsxs)(C.a,{children:["Se hai un dubbio o vuoi fare una segnalazione, puoi ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/issues",target:"_blank",rel:"noreferrer",children:"aprire una issue"}),"."]}),Object(n.jsxs)(C.a,{children:["Tutte le informazioni contenute in questa pagina sono da prendersi ",Object(n.jsx)("a",{href:"https://en.wikipedia.org/wiki/As_is",target:"_blank",rel:"noreferrer",children:"cos\xec come sono"}),", senza nessuna garanzia di correttezza o pretesa di affidabilit\xe0. I dati sottostanti sono aggiornati quotidianamente dalle fonti indicate e le stime cambiano quindi ogni giorno seguendo l'andamento della campagna vaccinale."]}),Object(n.jsxs)(C.a,{children:["L'applicazione \xe8 sviluppata e mantenuta da ",Object(n.jsx)("a",{href:"https://github.com/jenkin",target:"_blank",rel:"noreferrer",children:"jenkin"})," per ",Object(n.jsx)("a",{href:"https://ondata.it/",target:"_blank",rel:"noreferrer",children:"onData APS"}),", associazione di promozione sociale che promuove l'apertura dei dati pubblici per renderli accessibili a tutte e tutti."]}),Object(n.jsxs)(C.a,{children:["Il codice sorgente \xe8 open source e rilasciato sotto ",Object(n.jsx)("a",{href:"https://tldrlegal.com/license/mit-license",target:"_blank",rel:"noreferrer",children:"licenza MIT"})," su Github: ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti",target:"_blank",rel:"noreferrer",children:"ondata/vaccinipertutti"}),". Questa pagina \xe8 ospitata dal servizio ",Object(n.jsx)("a",{href:"https://pages.github.com/",target:"_blank",rel:"noreferrer",children:"Github Pages"})," e fa esclusivamente uso di cookie tecnici: non traccia n\xe9 profila in alcun modo gli utenti."]}),Object(n.jsxs)(C.a,{children:["Puoi sostenere l'attivit\xe0 di onData in molti modi, ",Object(n.jsx)("a",{href:"https://sostieni.ondata.it/",target:"_blank",rel:"noreferrer",children:"dai un'occhiata"}),"!"]})]}),Object(n.jsxs)(_.a,{justify:"flex-start",children:[Object(n.jsx)(y.a,{color:"primary",href:"https://datibenecomune.it/",target:"_blank",rel:"noreferrer",children:"Sottoscrivi la campagna #datiBeneComune"}),Object(n.jsx)(y.a,{onClick:ra,color:"secondary",variant:"contained",autoFocus:!0,children:"Ho capito, grazie!"})]})]})]})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,188)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),r(e),o(e)}))},Q=Object(u.a)({palette:{primary:{main:"rgba(0, 0, 0, 0.87)"},secondary:{main:"#e82f7d"}},typography:{fontFamily:['"Titillium Web"',"sans-serif"]},overrides:{MuiInput:{root:{padding:"0 .5em",backgroundColor:"#e82f7d",color:"white"}},MuiInputAdornment:{root:{"& > *":{color:"white !important",fontSize:"1.5rem"}}},MuiDialogActions:{root:{justifyContent:"flex-start","& > *:last-child":{marginLeft:"auto !important"}}}}});o.a.render(Object(n.jsx)(c.a,{children:Object(n.jsx)(l.b,{ReactRouterRoute:s.a,children:Object(n.jsx)(d.a,{theme:Q,children:Object(n.jsx)(U,{})})})}),document.getElementById("root")),V()}},[[119,1,2]]]);
//# sourceMappingURL=main.b128fc7b.chunk.js.map