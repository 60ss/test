function BalanceMainList(){var e;emptyItem=$("#empty").self,640<=$(win).width?emptyItem||(e=$("article",mainList).all).length&&e.length%2==1&&((emptyItem=doc.createElement("li")).setAttribute("id","empty"),emptyItem.innerHTML="<aside></aside>",mainList.appendChild(emptyItem)):emptyItem&&mainList.removeChild(emptyItem)}function CreateList(e,t,r,s,a,o){var l="คอร์ดเพลง "+t,i="";if("object"==typeof a){var n=[t];/\s*[\(|\?]/.test(t)&&(n.push(t.split(/\s*[\(|\?]/)[0]),/\s*\(/.test(t)&&n.push(t.match(/\((.*)\)/)[1]));for(var c=0;c<a.length;c++){var d=a[c];-1===ignoreLabels.indexOf(d)&&-1===n.indexOf(d)&&(i+='<a href="'+mechords+"/search/label/"+encodeURIComponent(d)+'" title="คอร์ดเพลง '+d+'">'+d+"</a>")}}else i+='<a href="'+r+'" title="คอร์ดเพลง '+a+'">'+a+"</a>";var h=o?"<footer><time>"+o+"</time></footer>":"",f=CanUseStorage()&&0!=e?'<button type="button"></button>':"",m="";return s.match(/vi\/(.*)\/(0|default|maxresdefault)/)&&(m='class="-ytimg"'),'<article class="post-'+e+'"><figure><a href="'+r+'" title="'+l+'"><img '+m+' src="'+(s=s.replace("/s72-c/","/s120/"))+'" alt="'+l+'" /></a></figure><header><a href="'+r+'" title="'+l+'"><h3>'+t+"</h3></a><span>"+i+"</span></header>"+h+f+"</article>"}function BrowserIs(e){var t=navigator.userAgent,r=-1!=(t.indexOf("Opera")||t.indexOf("OPR"))?"opera":-1!=t.indexOf("Chrome")?"chrome":-1!=t.indexOf("Safari")?"safari":-1!=t.indexOf("Firefox")?"firefox":-1!=t.indexOf("MSIE")||1==!!doc.documentMode?"ie":void 0;return r===e}function CanUseWebP(){var e=doc.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")}function CanUseSpeech(){return"SpeechRecognition"in window||"webkitSpeechRecognition"in window}function CanUseStorage(){var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}function AreYouReady(){return!!("querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach)}function Stope(e){(e=e||window.event).cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}function Shuffler(e){if(e&&1<e.length){for(var t=e.length-1;0<t;t--){var r=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[r],e[r]=s}return e}}function WriteScript(e){var t;scriptBox&&((t=document.createElement("script")).src=mechords+e,scriptBox.appendChild(t))}function ScrollbarWidth0(){return lightBox?lightBox.offsetWidth-lightBox.clientWidth+"px":0}function ScrollbarWidth(){var e=doc.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",body.appendChild(e);var t=doc.createElement("div");e.appendChild(t);var r=e.offsetWidth-t.offsetWidth;return e.parentNode.removeChild(e),r+"px"}function CopyToClipboard(e){var t;e&&extens&&((t=doc.createElement("textarea")).value=e,extens.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),extens.removeChild(t))}function M01(){var e=win.location.search;return/[\?\&]m=1/.test(e)}function LoadTime(){var e=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;e&&console.log("Page load time is "+e/1e3+" second")}var win=window,doc=document,html=doc.documentElement,body=doc.body||doc.querySelector("body");function $(e,t){var e=e,r=void 0!==win.pageYOffset,s="CSS1Compat"===(doc.compatMode||""),a={all:0,self:0,width:0,height:0,top:0,left:0,topScroll:0,bottomScroll:0,leftScroll:0,rightScroll:0};if(e.self==window)return{width:win.innerWidth||body.clientWidth,height:win.innerHeight||body.clientHeight,scrollTop:r?win.pageYOffset:s?body.scrollTop:0,scrollLeft:r?win.pageXOffset:s?body.scrollLeft:0};if(e==document)return{width:window.innerWidth||body.clientWidth||html.clientWidth,height:window.innerHeight||body.clientHeight||html.clientHeight};if("string"==typeof e){if((e=t?t.querySelectorAll(e):document.querySelectorAll(e)).length){var o=e[0].getBoundingClientRect();return{all:e,self:e[0],width:e[0].innerWidth||e[0].clientWidth,height:e[0].innerHeight||e[0].clientHeight,top:e[0].offsetTop,left:e[0].offsetLeft,topScroll:o.top,bottomScroll:o.bottom,leftScroll:o.left,rightScroll:o.right}}return a}if(e){o=e.getBoundingClientRect();return{all:0,self:e,width:e.innerWidth||e.clientWidth,height:e.innerHeight||e.clientHeight,top:e.offsetTop,left:e.offsetLeft,topScroll:o.top,bottomScroll:o.bottom,leftScroll:o.left,rightScroll:o.right}}return a}function ResetThePage(){header&&(header.classList.remove("-search"),header.classList.remove("_none"),header.removeAttribute("style")),lightBox&&(lightBox.classList.add("_none"),lightBox.innerHTML="",lightBox.removeAttribute("style")),search_txt&&(search_txt.value=""),search_cls&&search_cls.classList.add("_none"),shareBox&&shareBox.classList.add("_none"),body&&0==$("#chord-scroll").self&&body.classList.remove("_disable-scroll")}var mechords="https://www.mechords.com",pageURL=win.location.href,searchLabel=(searchLabel=pageURL.match(/search\/label\/(.*)/))?"-/"+searchLabel[1].split("?")[0]:"",searchQuery=pageURL.match(/[\?\&]q=(.*)/);searchQuery=!!(searchQuery=!!searchQuery&&searchQuery[1].split("&")[0])&&decodeURI(searchQuery);var ignoreLabels=["คอร์ดเพลง","recently","trending","สตริง","เพื่อชีวิต","ลูกกรุง","ลูกทุ่ง","ลูกทุ่งเพื่อชีวิต","หมอลำ","อีสาน","ใต้","คำเมือง","ลาว","สากล","เพลงคู่","Cover","คนโสด","เพลงจีบ","อารมณ์ชิลๆ","อารมณ์อินเลิฟ","อารมณ์อกหัก","อารมณ์เหงา","อารมณ์เศร้า","อารมณ์คิดถึง","เพลงปลุกใจ","ฤดูร้อน","ฤดูฝน","ฤดูหนาว","เทศกาลปีใหม่","วันพ่อ","วันแม่","new","shorten-data","visiting-data","0.0","โควิด-19","เร็กเก้/สกา","อินดี้โฟล์ก"],XL=1035.98<$(doc).width,fullScreen=1279.98<$(doc).width&&719.98<$(doc).height,scriptBox=$(".script-box").self,header=$("#header").self,footer=$("#footer").self,brand=$("#header .brand").self,searchBox=$("#header .search-box").self,search_txt=$(".search-box>.-txt").self,search_cls=$(".search-box>.-clear").self,search_btn=$(".search-box>.-submit").self,search_mic=$(".search-box>.-speech").self,lightBox=$("#extensions .light-box").self,alertBox=$("#extensions .alert-box").self,extens=$("#extensions").self,mainList=$("#main-list").self,mostList=$("#most-list").self,similarList=$("#similar .post-list").self,emptyItem=$("#empty").self,postItem=$("#post-item").self,itemTitle=$("#post-item header h3").self,navigation=$("#navigation").self,bottomSpace=200,chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self,btnFav=$("#category .btn-fav").self,favRes=$("#extensions .favorite-res").self;function ChordTb(){chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self}var fixAutoHeightInterval,shareBox=$(".share-box").self,keySelector=$(".select.-key>select").self,defaultSelectIndex=0,btn_share=$(".btn.-share").self,btn_switch=$(".btn.-switch").self,btn_lightbox=$(".btn.-lightbox").self,btn_like=$(".btn.-like").self,chk_gc=$(".chk.-gc > input").self,chk_simplify=$(".chk.-simplify > input").self,chk_cr=$(".chk.-cr > input").self,accordion=$(".accordion").self,a_pr=$(".accordion>.-pr").self,a_ps=$(".accordion>.-ps").self,a_gc=$(".accordion>.-gc").self,a_cr=$(".accordion>.-cr").self,fixAutoHeightTime=0;function MostReq(){if(mostList&&($("#most-list").topScroll+$(win).scrollTop-$(win).height-$(win).scrollTop<=0&&0<$(".-lazy",mostList).all.length)){var e=$("#most-list article").all;if(e.length)for(var t=0;t<e.length;t++){var r,s=e[t];$("img",s).self||(r=s.className.match(/post\-(\d+)\s\-lazy/))&&WriteScript("/feeds/posts/default/?alt=json-in-script&max-results=1&q="+r[1]+"&callback=MostRes")}}}!function(e){var t,r,s;e&&(!BrowserIs("ie")||(t=e.childNodes[0])&&(s="https://src.mechords.com/img/",(r=doc.createElement("div")).innerHTML='<div class="wrapper alert">คุณกำลังใช้เว็บบราวเซอร์ที่ล้าสมัย เพื่อการใช้งานเว็บไซต์อย่างเต็มประสิทธิภาพ ขอแนะนำให้ใช้หนึ่งในเบราว์เซอร์ฟรีที่ทันสมัยเหล่านี้แทนเถิด<br/><ul><li><a href="https://www.google.com/chrome/browser/desktop/" rel="nofollow" target="_blank"><img src="'+s+'chrome.png"/></a></li><li><a href="https://opera.com/" rel="nofollow" target="_blank"><img src="'+s+'opera.png"/></a></li><li><a href="https://www.microsoftedgeinsider.com/" rel="nofollow" target="_blank"><img src="'+s+'edge.png"/></a></li><li><a href="https://www.mozilla.com/firefox/" rel="nofollow" target="_blank"><img src="'+s+'firefox.png"/></a></li></ul></div><br/>',e.insertBefore(r,t)))}($("#billboard").self),function(a){var o,l,i,e;a&&((o=a.getAttribute("data-dropdown"))&&(l=doc.createElement("li"),(i=$(".btn-down",a).self)&&(i.classList.remove("_none"),i.addEventListener("click",function(e){e.preventDefault();var t=$(".-dropdown",a).self;if(!t){(t=doc.createElement("ul")).setAttribute("class"," -dropdown"),o=o.split("|");for(var r=0;r<o.length;r++){var s=o[r];t.innerHTML+='<li><a href="/search/label/'+encodeURIComponent(s)+'">'+s.replace(/อารมณ์|เพลง|เทศกาล/g,"")+"</a></li>"}l.innerHTML='<a class="_i" href="#" ><svg style="margin:4px auto;"><path d="M18 15l-6-6-6 6h12z"/></svg></a>',l.setAttribute("class","btn-up"),t.appendChild(l),a.appendChild(t)}this.classList.add("_none"),t.classList.remove("_none"),l&&l.addEventListener("click",function(e){e.preventDefault(),i.classList.remove("_none"),t.classList.add("_none")})}))),(e=$(".btn-fav a",a).self)&&e.addEventListener("click",function(e){e.preventDefault()}))}($("#category").self),function(){function r(){""!==search_txt.value&&("คอร์ดเพลงที่ถูกใจ"==search_txt.value?FavoriteRes:searchQuery?gcseReq:SearchReq)()}var s,e,t;AreYouReady()&&searchBox&&header&&search_txt&&search_cls&&search_btn&&search_mic&&extens&&(search_txt.addEventListener("focus",function(){header.classList.add("-search")}),search_txt.addEventListener("keyup",function(e){27==(e.which||e.keycode)&&ResetThePage(),""!==this.value?search_cls.classList.remove("_none"):ResetThePage()}),search_cls.addEventListener("click",function(){ResetThePage(),search_txt.focus()}),searchBox.addEventListener("click",function(e){Stope(e)}),searchBox.addEventListener("submit",function(e){e.preventDefault(),r()}),CanUseSpeech()&&(search_mic.classList.remove("_none"),(s=new webkitSpeechRecognition).continuous=!1,s.interimResults=!1,s.lang="th-TH",search_mic.addEventListener("click",function(){search_txt.value="",search_mic.classList.add("-active"),s.start(),s.onresult=function(e){var t=e.results[0][0].transcript;search_txt.value=t,s.stop(),r()},s.onspeechend=function(){s.stop(),search_mic.classList.remove("-active")},s.onerror=function(){s.stop(),search_mic.classList.remove("-active")}})),e=$("#header .rnd.-q").self,t=$("#header .rnd.-x").self,e&&t&&e.addEventListener("click",function(e){Stope(e),SearchReq("สุ่มคอร์ดเพลง")}))}();var mostIDs=[];function MostRes(e){if(e.feed)if(e.feed.entry){var t=e.feed.entry;if(t.length)for(var r=0;r<t.length;r++){var s=t[r];if((x=$("#most-list .post-"+(S=s.id.$t.split(".post-")[1])).self)&&-1==mostIDs.indexOf(S)){mostIDs.push(S);var a,o,l=x.getAttribute("data-link"),i=x.getAttribute("data-title"),n=$("figure",x).self,c=s.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/),d="";if(c?(o=(c=c[1]).match(/vi\/(.*)\/0|default|maxresdefault/))&&(d='class="-ytimg"'):c=!!(a=s.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(d='class="-ytimg"',!!(o=(c=a[1]).match(/embed\/(.*)(\/\?)*/))&&"https://i.ytimg.com/vi/"+o[1]+"/0.jpg"),l&&i&&n){x.removeAttribute("data-link"),x.removeAttribute("data-title"),c&&(c=c.replace("/s72-c/","/s120/"),n.innerHTML='<a href="'+l+'" title="คอร์ดเพลง '+i+'"><img '+d+' src="'+c+'" alt="หน้าปก เพลง '+i+'" /></a>'),x.classList.remove("-lazy");var h=[i];/\s*[\(|\?]/.test(i)&&(h.push(i.split(/\s*[\(|\?]/)[0]),h.push(i.match(/\((.*)\)/)[1]));var f=s.category,m="";if(f.length)for(var v=0;v<f.length;v++){var g=f[v].term;/recently|trending/.test(g)?x.parentNode.setAttribute("class",g):h.indexOf(g)<0&&ignoreLabels.indexOf(g)<0&&(m+="<a href='"+mechords+"/search/label/"+encodeURIComponent(g)+"' title='คอร์ดเพลง "+g+"'>"+g+"</a>")}var u=$(".-loading",x).self;u&&(u.classList.remove("-loading"),u.innerHTML=m);var p,b=s.published.$t,L=$("time",x).self;b&&!L&&(p=(b=b.split("T")[0].split("-"))[2]+"/"+parseInt(b[1])+"/",p+=(parseInt(b[0])+543).toString().substr(2),(L=doc.createElement("footer")).innerHTML="<time>"+p+"</time>",x.appendChild(L))}}}Favorite()}else{var y=e.feed.link;if(y.length)for(var S,x,v=0;v<y.length;v++){"self"===(l=y[v]).rel&&(S=l.href.split("&q="))&&(x=$(".post-"+S[1]).self)&&WriteScript("/feeds/posts/default/-/"+(i=x.getAttribute("data-title"))+"?alt=json-in-script&max-results=10&callback=MostRes")}}scriptBox.innerHTML=""}var mcse=!1;function gcseRen(){google.search.cse.element.render({div:"mcse-results",tag:"searchresults-only",gname:"mcse"}),mcse=google.search.cse.element.getElement("mcse"),gcseReq()}function gcseReq(){var e,t,r,s;(searchQuery=search_txt.value?search_txt.value:searchQuery)&&mcse&&(search_txt.value=searchQuery,(e=$("#header h1").self)&&(e.innerHTML="ค้นหาคอร์ดเพลง "+searchQuery),(t=$("#breadcrumbs strong").self)&&(t.innerHTML=searchQuery),(r=$("#main h2").self)&&(r.innerHTML=searchQuery),s={url:"/search.html?q="+searchQuery,title:"ค้นหาคอร์ดเพลง "+searchQuery+" # mechords"},doc.title=s.title,win.history.pushState(null,s.searchQuery,s.url),mcse.execute(searchQuery),search_cls.classList.remove("_none"),search_txt.focus())}window.__gcse={parsetags:"explicit",callback:function(){"complete"==doc.readyState?gcseRen():google.setOnLoadCallback(function(){gcseRen()},!0)}},function(){var e=doc.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cse.google.com/cse.js?cx=011758994913547751990:dzxc-nd0qoe";var t=$("script").self;t&&t.parentNode&&t.parentNode.insertBefore(e,t)}();var favStorage,oldFav=localStorage.getItem("favorites");if(oldFav&&(oldFav=JSON.parse(oldFav),Object.keys(oldFav).length)){var items=Object.keys(oldFav);if(items.length){for(var li="",i=0;i<items.length;i++){var id=items[i],data=oldFav[id],title=data[1],link=mechords+"/"+data[0]+".html";link=(link=data[0].match(/(\d{4}\/\d{2}\/[^.]*)/))?mechords+"/"+link[1]+".html":"";var img="https://i.ytimg.com/vi/"+data[3]+"/default.jpg",lbls=data[2];"object"==typeof lbls&&(lbls=lbls.join("|")),FavFind(id=id.substr(1))||FavSet("add",id,link,title,lbls,img)}localStorage.removeItem("favorites"),BtnFav(),Favorite()}}function BtnFav(){var e;CanUseStorage()&&(favStorage=localStorage.getItem("mechords_favorite"),(e=$("a",btnFav).self)&&(favStorage&&Object.keys(JSON.parse(favStorage)).length?e.classList.add("-active"):e.classList.remove("-active"),e.removeEventListener("click",FavoriteRes),e.addEventListener("click",FavoriteRes)))}function FavFind(e){return!!(favStorage=localStorage.getItem("mechords_favorite"))&&!!(favStorage=JSON.parse(favStorage))[e]}function FavListener(e){Stope(e=e||window.event);var t=e.target.parentNode,r=t.className.match(/post\-(\d+)/);if(r=!!r&&r[1]){if(FavFind(r))FavSet("del",r);else{var s=(s=$("header a",t).self)?s.getAttribute("href"):"",a=(a=$("h3",t).self)?a.innerHTML:"",o=(o=$("img",t).self)?o.getAttribute("src"):"",l=$("span a",t).all;if(l.length){for(var i=[],n=0;n<l.length;n++)i.push(l[n].innerHTML);i=i.join("|")}s&&a&&i&&o&&FavSet("add",r,s,a,i,o)}BtnFav()}}function Favorite(){if(CanUseStorage()){favStorage=localStorage.getItem("mechords_favorite");var e=$(".post-list button").all;if(e.length)for(var t=startFav=0;t<e.length;t++){var r=e[t];r.classList.remove("_none");var s=r.parentNode.className.match(/post\-(\d+)/);(s=s?s[1]:0)&&FavFind(s)&&r.classList.add("-active"),r.removeEventListener("click",FavListener),r.addEventListener("click",FavListener)}}}function FavSet(e,t,r,s,a,o){var l,i=$(".post-"+t).all;if(i.length)for(var n=0;n<i.length;n++){var c=$("button,.btn.-like",i[n]).all;if(c.length)for(var d=0;d<c.length;d++)"add"==e?c[d].classList.add("-active"):"del"==e&&c[d].classList.remove("-active")}favStorage=localStorage.getItem("mechords_favorite"),t&&(l=(l=JSON.parse(favStorage))||{},"add"==e?r&&s&&a&&o&&(l[t]=[r,s,a,o]):"del"==e&&delete l[t],localStorage.setItem("mechords_favorite",JSON.stringify(l)))}function FavoriteRes(e){if(Stope(e=e||window.event),t=localStorage.getItem("mechords_favorite"),win.scrollTo(0,0),t&&Object.keys(JSON.parse(t)).length){var t=JSON.parse(t),r=Object.keys(t);if(r.length){for(var s="",a=0;a<r.length;a++){var o=r[a],l=t[o];s+="<li>"+CreateList(o,l[1],l[0],l[3],l[2].split("|"))+"</li>"}body.classList.add("_disable-scroll"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth(),search_txt.value="คอร์ดเพลงที่ถูกใจ",search_cls.classList.remove("_none"),lightBox.classList.remove("_none"),lightBox.innerHTML='<div class="wrapper"><ul class="post-list -light">'+s+"</ul></div>";var i=$(".post-list",lightBox).self;i&&(i.removeEventListener("click",Stope),i.addEventListener("click",Stope)),Favorite(),search_txt.focus()}}}function FavItem(e,t){if(e&&t){if(FavFind(e))FavSet("del",e),t.classList.remove("-active");else{var r=pageURL.split(/[\#\?\&]/)[0],s=$("h3",postItem).self.innerHTML,a=$(".item-tags a",postItem).all,o="";if(a.length)for(var l=0;l<a.length;l++)o+=(0!=l?"|":"")+a[l].innerText;var i=$("img",postItem).self,n=$(".vdo",postItem).self,c=$("iframe",n).self;FavSet("add",e,r,s,o,i=i?i.getAttribute("src"):c&&(i=!!(i=c.src.match(/embed\/(.*)/))&&i[1].split(/\?/)[0])?"https://i.ytimg.com/vi/"+i+"/default.jpg":""),t.classList.add("-active")}BtnFav()}}function ScrollPos(){var e,t,r,s;me_scroll=$(".me-scroll"),me_scroll.self&&(e=$("#body").left,t=$("#body").width+2*me_scroll.width,r=$("#body").width,s=$(win).height/2-me_scroll.height/2,me_scroll.self.style.top=s+"px",$(win).width>t+36?(me_scroll.self.style.right="",me_scroll.self.style.left=e+r+18+"px"):(me_scroll.self.style.left="",me_scroll.self.style.right=0))}BtnFav(),function(a){if(a){var e=a.querySelector("select"),o=a.querySelectorAll("ol>li"),t=doc.getElementById("strum");function l(e){t||((t=doc.createElement("audio")).type="audio/mpeg",t.id="strum",t.loop=!0,t.hidden=!0,extens.appendChild(t)),i(),e=e.replace("#","s"),t.src="https://src.mechords.com/audios/acoustic-guitar-tuning/"+e+".mp3",t.play()}e.onchange=function(){i();for(var e=(this.value||this.options[this.selectedIndex].value).split("|"),t=0;t<e.length;t++)o[t].innerHTML=e[t]};for(var r=0;r<o.length;r++)o[r].addEventListener("click",function(){var e=this.innerText;e?(l(e),this.classList.add("strumming")):i()});function i(){if(t&&(t.pause(),t.currentTime=0),o)for(var e=0;e<o.length;e++)o[e].classList.remove("strumming")}doc.addEventListener("keyup",function(e){var t,r,s;!a.querySelector(".strumming")||null!=(t={96:"stop",97:5,98:4,99:3,100:2,101:1,102:0}[e.which||e.keyCode])&&("stop"!=t&&(s=(r=o[t]).innerText)?(l(s),r.classList.add("strumming")):i())})}}($("#guitar-tuning").self);var btn_scroll=$(".me-scroll button").all;if(btn_scroll.length){for(var g_scroll=$(".me-scroll>._global").self,c_scholl=$(".me-scroll>._chord").self,i=0;i<btn_scroll.length;i++)btn_scroll[i].addEventListener("click",function(e){Stope(e);var t,r=this.value;"up"==r?SmoothScroll(0):"down"==r?(ChordTb(),chordTb?g_scroll&&c_scholl&&(g_scroll.classList.add("_none"),c_scholl.classList.remove("_none"),(t=$("button",c_scholl).self)&&(CloseTooltip(),ChordScrollStart(t.value),ActiveScrollBtn(t)),ScrollPos()):SmoothScroll($("body").height+bottomSpace-$(win).height)):"stop"==r?(g_scroll.classList.remove("_none"),c_scholl.classList.add("_none"),ChordScrollStop(),ScrollPos()):(ChordScrollStart(r),ActiveScrollBtn(this))});var svg_down='<svg><path d="M16.59,10.942L12,15.522l-4.59-4.58L6,12.353l6,6l6-6L16.59,10.942z" /><path d="M16.59,5.647L12,10.228l-4.59-4.58L6,7.058l6,6l6-6L16.59,5.647z" /></svg>';function ActiveScrollBtn(e){var t=$(".me-scroll>._chord>button").all;if(t.length)for(var r=0;r<t.length;r++){var s=t[r];s.classList.remove("-active"),-1==s.value.indexOf("stop")&&(s.innerHTML="")}e&&"stop"!=e.value&&(e.innerHTML=svg_down,e.classList.add("-active"))}function SmoothScroll(e){var s=window.pageYOffset,a=e-s,o=1e3,l=null;window.requestAnimationFrame(function e(t){l=l||t;var r=t-l;window.scrollTo(0,EaseInOutCubic(r,s,a,o));r<o&&window.requestAnimationFrame(e)})}function EaseInOutCubic(e,t,r,s){return(e/=s/2)<1?r/2*e*e*e+t:r/2*((e-=2)*e*e+2)+t}}function Alert(e){var t;alertBox&&e&&(t='<div class="-inner"><pre>'+e+'</pre><button type="button" onclick="Xlert(event);">OK</button></div>',alertBox.innerHTML=t,alertBox.classList.remove("_none"))}function Xlert(e){Stope(e),alertBox&&(alertBox.innerHTML="",alertBox.classList.add("_none"))}function FncBundle(){MostReq(),ScrollPos()}doc.addEventListener("click",function(){ResetThePage()}),doc.addEventListener("DOMContentLoaded",function(e){FncBundle()}),win.addEventListener("scroll",function(){FncBundle()}),win.addEventListener("resize",function(){FncBundle()}),window.onload=LoadTime;