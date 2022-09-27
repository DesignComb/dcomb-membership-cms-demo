(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{632:function(j,e,t){"use strict";t.r(e);var n={name:"homeDoughnutChart",extends:t(634).a,props:{dataset:null,option:null,labels:null},mounted:function(){this.renderChart({labels:this.dataset.label||["First","Second","Third","fourth","fifth"],datasets:[{label:this.dataset.label||"My Data",data:this.dataset.data||[5,50,80,15,6],backgroundColor:this.dataset.backgroundColor||["#163859","#2768BF","#0385B6","#49ACD5","#CEDEE5"],borderWidth:0}]},{cutoutPercentage:75,responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{ticks:{display:!1,beginAtZero:!0},gridLines:{display:!1}}],yAxes:[{ticks:{display:!1,beginAtZero:!0},gridLines:{display:!1}}]},elements:{point:{radius:1}}})}},r=t(26),component=Object(r.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},635:function(j,e,t){var map={"./af":497,"./af.js":497,"./ar":498,"./ar-dz":499,"./ar-dz.js":499,"./ar-kw":500,"./ar-kw.js":500,"./ar-ly":501,"./ar-ly.js":501,"./ar-ma":502,"./ar-ma.js":502,"./ar-sa":503,"./ar-sa.js":503,"./ar-tn":504,"./ar-tn.js":504,"./ar.js":498,"./az":505,"./az.js":505,"./be":506,"./be.js":506,"./bg":507,"./bg.js":507,"./bm":508,"./bm.js":508,"./bn":509,"./bn-bd":510,"./bn-bd.js":510,"./bn.js":509,"./bo":511,"./bo.js":511,"./br":512,"./br.js":512,"./bs":513,"./bs.js":513,"./ca":514,"./ca.js":514,"./cs":515,"./cs.js":515,"./cv":516,"./cv.js":516,"./cy":517,"./cy.js":517,"./da":518,"./da.js":518,"./de":519,"./de-at":520,"./de-at.js":520,"./de-ch":521,"./de-ch.js":521,"./de.js":519,"./dv":522,"./dv.js":522,"./el":523,"./el.js":523,"./en-au":524,"./en-au.js":524,"./en-ca":525,"./en-ca.js":525,"./en-gb":526,"./en-gb.js":526,"./en-ie":527,"./en-ie.js":527,"./en-il":528,"./en-il.js":528,"./en-in":529,"./en-in.js":529,"./en-nz":530,"./en-nz.js":530,"./en-sg":531,"./en-sg.js":531,"./eo":532,"./eo.js":532,"./es":533,"./es-do":534,"./es-do.js":534,"./es-mx":535,"./es-mx.js":535,"./es-us":536,"./es-us.js":536,"./es.js":533,"./et":537,"./et.js":537,"./eu":538,"./eu.js":538,"./fa":539,"./fa.js":539,"./fi":540,"./fi.js":540,"./fil":541,"./fil.js":541,"./fo":542,"./fo.js":542,"./fr":543,"./fr-ca":544,"./fr-ca.js":544,"./fr-ch":545,"./fr-ch.js":545,"./fr.js":543,"./fy":546,"./fy.js":546,"./ga":547,"./ga.js":547,"./gd":548,"./gd.js":548,"./gl":549,"./gl.js":549,"./gom-deva":550,"./gom-deva.js":550,"./gom-latn":551,"./gom-latn.js":551,"./gu":552,"./gu.js":552,"./he":553,"./he.js":553,"./hi":554,"./hi.js":554,"./hr":555,"./hr.js":555,"./hu":556,"./hu.js":556,"./hy-am":557,"./hy-am.js":557,"./id":558,"./id.js":558,"./is":559,"./is.js":559,"./it":560,"./it-ch":561,"./it-ch.js":561,"./it.js":560,"./ja":562,"./ja.js":562,"./jv":563,"./jv.js":563,"./ka":564,"./ka.js":564,"./kk":565,"./kk.js":565,"./km":566,"./km.js":566,"./kn":567,"./kn.js":567,"./ko":568,"./ko.js":568,"./ku":569,"./ku.js":569,"./ky":570,"./ky.js":570,"./lb":571,"./lb.js":571,"./lo":572,"./lo.js":572,"./lt":573,"./lt.js":573,"./lv":574,"./lv.js":574,"./me":575,"./me.js":575,"./mi":576,"./mi.js":576,"./mk":577,"./mk.js":577,"./ml":578,"./ml.js":578,"./mn":579,"./mn.js":579,"./mr":580,"./mr.js":580,"./ms":581,"./ms-my":582,"./ms-my.js":582,"./ms.js":581,"./mt":583,"./mt.js":583,"./my":584,"./my.js":584,"./nb":585,"./nb.js":585,"./ne":586,"./ne.js":586,"./nl":587,"./nl-be":588,"./nl-be.js":588,"./nl.js":587,"./nn":589,"./nn.js":589,"./oc-lnc":590,"./oc-lnc.js":590,"./pa-in":591,"./pa-in.js":591,"./pl":592,"./pl.js":592,"./pt":593,"./pt-br":594,"./pt-br.js":594,"./pt.js":593,"./ro":595,"./ro.js":595,"./ru":596,"./ru.js":596,"./sd":597,"./sd.js":597,"./se":598,"./se.js":598,"./si":599,"./si.js":599,"./sk":600,"./sk.js":600,"./sl":601,"./sl.js":601,"./sq":602,"./sq.js":602,"./sr":603,"./sr-cyrl":604,"./sr-cyrl.js":604,"./sr.js":603,"./ss":605,"./ss.js":605,"./sv":606,"./sv.js":606,"./sw":607,"./sw.js":607,"./ta":608,"./ta.js":608,"./te":609,"./te.js":609,"./tet":610,"./tet.js":610,"./tg":611,"./tg.js":611,"./th":612,"./th.js":612,"./tk":613,"./tk.js":613,"./tl-ph":614,"./tl-ph.js":614,"./tlh":615,"./tlh.js":615,"./tr":616,"./tr.js":616,"./tzl":617,"./tzl.js":617,"./tzm":618,"./tzm-latn":619,"./tzm-latn.js":619,"./tzm.js":618,"./ug-cn":620,"./ug-cn.js":620,"./uk":621,"./uk.js":621,"./ur":622,"./ur.js":622,"./uz":623,"./uz-latn":624,"./uz-latn.js":624,"./uz.js":623,"./vi":625,"./vi.js":625,"./x-pseudo":626,"./x-pseudo.js":626,"./yo":627,"./yo.js":627,"./zh-cn":628,"./zh-cn.js":628,"./zh-hk":629,"./zh-hk.js":629,"./zh-mo":630,"./zh-mo.js":630,"./zh-tw":631,"./zh-tw.js":631};function n(j){var e=r(j);return t(e)}function r(j){if(!t.o(map,j)){var e=new Error("Cannot find module '"+j+"'");throw e.code="MODULE_NOT_FOUND",e}return map[j]}n.keys=function(){return Object.keys(map)},n.resolve=r,j.exports=n,n.id=635}}]);