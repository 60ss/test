function DeepLinkAndroid(){if("undefined"!=typeof Android){var e="file:///android_asset/index.html#home",t=e,i=html.dataset.page;if(/label\:/.test(i))var s=i.split(":")[1],t="file:///android_asset/page.html#"+(s=/recently|trending/.test(s)?""+s:"label-"+s)+"&back=home";else if(/search\:/.test(i)){t="file:///android_asset/index.html#search-"+i.split(":")[1]}else if("item"==i){var r=$("h2",postItem).self.innerText;t="file:///android_asset/item.html?q=title:{"+encodeURIComponent(r)+"}";for(var a=$(".item-tags>a",postItem).all,n=0;n<a.length;n++)t+="+label:{"+encodeURIComponent(a[n].innerText)+"}",console.log(a[n].innerText);t+="&back=home"}else t="index"==i&&e;t&&Android.LoadUrl(t)}}function BalanceMainList(){var e;emptyItem=$("#empty").self,640<=$(win).width?emptyItem||(e=$("article",mainList).all).length&&e.length%2==1&&((emptyItem=doc.createElement("li")).setAttribute("id","empty"),emptyItem.innerHTML="<aside></aside>",mainList.appendChild(emptyItem)):emptyItem&&mainList.removeChild(emptyItem)}function CreateList(e,t,i,s,r,a){var n=$("#item").self?"h4":"h3",l="คอร์ดเพลง "+t;i=i.replace(/http(s)*\:\/\/www\.mechords\.com/,"");var o="";if("object"==typeof r){var c=[t];/\s*[\(|\?]/.test(t)&&(c.push(t.split(/\s*[\(|\?]/)[0]),/\s*\(/.test(t)&&c.push(t.match(/\((.*)\)/)[1]));for(var d=0;d<r.length;d++){var f=r[d];-1===ignoreLabels.indexOf(f)&&-1===c.indexOf(f)&&(o+='<a href="/search/label/'+encodeURIComponent(f)+'">'+f+"</a>")}}else o+='<a href="'+i+'">'+r+"</a>";var h=a?'<span class="time">'+a+"</span>":"",v=CanUseStorage()&&0!=e?'<button class="btn-like"></button>':"",m="";return s.match(/vi(\_webp)*\/(.*)\/(0|default|maxresdefault)/)&&(m='class="-ytimg"'),'<article class="post-'+e+'"><a class="thumbnail" href="'+i+'"><img '+m+' src="'+(s=s.replace("/s72-c/","/s120/"))+'" alt="'+l+'" /></a><div class="details"><a class="title" href="'+i+'"><'+n+">"+t+"</"+n+'></a><div class="lbls">'+o+"</div></div>"+h+v+"</article>"}function BrowserIs(e){var t=navigator.userAgent,i=-1!=(t.indexOf("Opera")||t.indexOf("OPR"))?"opera":-1!=t.indexOf("Chrome")?"chrome":-1!=t.indexOf("Safari")?"safari":-1!=t.indexOf("Firefox")?"firefox":-1!=t.indexOf("MSIE")||1==!!doc.documentMode?"ie":void 0;return i===e}function CanUseWebP(){var e=doc.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")}function CanUseSpeech(){return"SpeechRecognition"in window||"webkitSpeechRecognition"in window}function CanUseStorage(){var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}function AreYouReady(){return!!("querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach)}function Stope(e){(e=e||window.event).cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}function Shuffler(e){if(e&&1<e.length){for(var t=e.length-1;0<t;t--){var i=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[i],e[i]=s}return e}}function WriteScript(e){var t;scriptBox&&((t=document.createElement("script")).src=mechords+e,BrowserIs("ie")?document.body.appendChild(t):scriptBox.appendChild(t))}function ScrollbarWidth(){var e=doc.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",body.appendChild(e);var t=doc.createElement("div");e.appendChild(t);var i=e.offsetWidth-t.offsetWidth;return e.parentNode.removeChild(e),i+"px"}function CopyToClipboard(e){var t;e&&extens&&((t=doc.createElement("textarea")).value=e,extens.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),extens.removeChild(t))}function M01(){var e=win.location.search;return/[\?\&]m=1/.test(e)}function LoadTime(){var e=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;e&&console.log("ระยะเวลาในการโหลดหน้าเว็บ "+e/1e3+" วินาที")}function ResetQ(){win.scrollTo(0,0),qNotFound=!1,iQ=0,qIDs=[],qListA=[],qListB=[],qListC=[],lightBox||(lightBox=doc.createElement("div"),extens.appendChild(lightBox)),lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide -placeholder">'+ListHolder(18)+"</ul><div>",lightBox.classList.remove("_none")}function ListHolder(e){var t="";for(i=0;i<e;i++)t+=liHolder;return t}function insertAfter(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function Wasteful(){var e=$(".wasteful").all;if(e.length)for(var t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t])}function ShortenLinkIn(){var e=$("a").all;if(e.length)for(var t=0;t<e.length;t++){var i=e[t].getAttribute("href");i&&e[t].setAttribute("href",i.replace(/http(s)*\:\/\/www\.mechords\.com/,""))}}var win=window,doc=document,html=doc.documentElement,body=doc.body||doc.querySelector("body");function $(e,t){var e=e,i=void 0!==win.pageYOffset,s="CSS1Compat"===(doc.compatMode||""),r={all:0,self:0,width:0,height:0,top:0,left:0,topScroll:0,bottomScroll:0,leftScroll:0,rightScroll:0};if(e.self==window)return{width:win.innerWidth||body.clientWidth,height:win.innerHeight||body.clientHeight,scrollTop:i?win.pageYOffset:s?body.scrollTop:0,scrollLeft:i?win.pageXOffset:s?body.scrollLeft:0};if(e==document)return{width:window.innerWidth||body.clientWidth||html.clientWidth,height:window.innerHeight||body.clientHeight||html.clientHeight};if("string"==typeof e){if((e=t?t.querySelectorAll(e):document.querySelectorAll(e)).length){var a=e[0].getBoundingClientRect();return{all:e,self:e[0],width:e[0].innerWidth||e[0].clientWidth,height:e[0].innerHeight||e[0].clientHeight,top:e[0].offsetTop,left:e[0].offsetLeft,topScroll:a.top,bottomScroll:a.bottom,leftScroll:a.left,rightScroll:a.right}}return r}if(e){a=e.getBoundingClientRect();return{all:0,self:e,width:e.innerWidth||e.clientWidth,height:e.innerHeight||e.clientHeight,top:e.offsetTop,left:e.offsetLeft,topScroll:a.top,bottomScroll:a.bottom,leftScroll:a.left,rightScroll:a.right}}return r}function ResetThePage(){header&&(header.classList.remove("-search"),header.classList.remove("_none"),header.removeAttribute("style")),lightBox&&(lightBox.classList.add("_none"),lightBox.innerHTML="",lightBox.removeAttribute("style")),search_txt&&(search_txt.value=""),search_cls&&search_cls.classList.add("_none"),shareBox&&shareBox.classList.add("_none"),body&&0==$("#chord-scroll").self&&body.classList.remove("_disable-scroll")}var mechords="https://www.mechords.com",pageURL=win.location.href,searchLabel=(searchLabel=pageURL.match(/search\/label\/(.*)/))?"-/"+searchLabel[1].split("?")[0]:"",searchQuery=pageURL.match(/[\?\&]q=(.*)/);searchQuery=!!(searchQuery=!!searchQuery&&searchQuery[1].split("&")[0])&&decodeURI(searchQuery);var ignoreLabels=["คอร์ดเพลง","recently","trending","สตริง","เพื่อชีวิต","ลูกกรุง","ลูกทุ่ง","ลูกทุ่งเพื่อชีวิต","หมอลำ","อีสาน","ใต้","คำเมือง","ลาว","สากล","เพลงคู่","Cover","คนโสด","เพลงจีบ","ชิลๆ","อินเลิฟ","อกหัก","เหงา","เศร้า","คิดถึง","ฤดูร้อน","ฤดูฝน","ฤดูหนาว","ปีใหม่","วันพ่อ","วันแม่","new","shorten-data","visiting-data","0.0","โควิด-19","เร็กเก้/สกา","อินดี้โฟล์ก","แร็พ","ปลดแอก"],XL=1035.98<$(doc).width,fullScreen=1279.98<$(doc).width&&719.98<$(doc).height,scriptBox=$(".script-box").self,header=$("#header").self,footer=$("#footer").self,theTitle=$("#header h1").self,brand=$("#header .brand").self,searchBox=$("#header .search-box").self,search_txt=$(".search-box>.-txt").self,search_cls=$(".search-box>.-clear").self,search_btn=$(".search-box>.-submit").self,search_mic=$(".search-box>.-speech").self,lightBox=$("#extensions .light-box").self,alertBox=$("#extensions .alert-box").self,extens=$("#extensions").self,mainList=$("#main-list").self,mostList=$("#most-list").self,mostList1=$("#most-list-1").self,mostList2=$("#most-list-2").self,similarList=$("#similar .post-list").self,emptyItem=$("#empty").self,postItem=$("#post-item").self,itemTitle=$("#post-item header h2").self,navigation=$("#navigation").self,bottomSpace=200,chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self,btnFav=$("#category .btn-fav").self,favRes=$("#extensions .favorite-res").self;function ChordTb(){chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self}var fixAutoHeightInterval,shareBox=$(".share-box").self,keySelector=$(".select.-key>select").self,defaultSelectIndex=0,btn_share=$(".btn.-share").self,btn_switch=$(".btn.-switch").self,btn_lightbox=$(".btn.-lightbox").self,btn_like=$(".btn.-like").self,chk_gc=$(".chk.-gc > input").self,chk_simplify=$(".chk.-simplify > input").self,chk_cr=$(".chk.-cr > input").self,frm_l=$(".chk.-l > input").self,frm_m=$(".chk.-m > input").self,frm_r=$(".chk.-r > input").self,frm_e=$(".chk.-e > input").self,accordion=$(".accordion").self,a_pr=$(".accordion>.-pr").self,a_ps=$(".accordion>.-ps").self,a_gc=$(".accordion>.-gc").self,a_cr=$(".accordion>.-cr").self,fixAutoHeightTime=0,liHolder="<li><div><div></div><div><div></div><div></div></div></div></li>",iQ=0,qByTitle=!1,qNotFound=!1,qListA=[],qListB=[],qListC=[],qIDs=[],iO="IntersectionObserver"in window;function MoreList(){var e,t,i;BalanceMainList(),navigation&&!$(".-loadmore",navigation).self&&(e=$("article",mainList).all.length,t="/feeds/posts/default/"+searchLabel+"?alt=json-in-script&start-index="+(e=0===e?1:e+1)+"&max-results=1&callback=MoreBtn",i=doc.location.search,(i=!/updated-max=/.test(i))||(t="/feeds/posts/default/"+searchLabel+"?alt=json-in-script&start-index="+e+"&max-results=1&callback=NextBtn"),WriteScript(t)),fixAutoHeightInterval||(fixAutoHeightTime=0,fixAutoHeightInterval=setInterval(FixAutoHeight,300))}function NextBtn(e){var t;e.feed&&e.feed.entry||(t=$(".-next",navigation).self)&&navigation.removeChild(t),scriptBox.innerHTML=""}function MoreBtn(e){var t,i;e.feed&&e.feed.entry?$(".-loadmore",navigation).self||((t=doc.createElement("a")).classList.add("-loadmore"),t.setAttribute("title","โหลดคอร์ดเพลงเพิ่มเติม"),t.setAttribute("href","javascript:void(0);"),t.setAttribute("onclick","MoreReq(this)"),t.innerHTML='<svg><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg><span>แสดงเพิ่มเติม</span>',navigation.insertBefore(t,navigation.childNodes[0])):(i=$(".-next",navigation).self)&&navigation.removeChild(i),scriptBox.innerHTML=""}function MoreReq(){fixAutoHeightInterval=null,navigation.innerHTML="<a href='#' class='_loading'><svg><circle cx='17' cy='17' r='15'/></svg></a>";var e=$("article",mainList).all,t=e?e.length:1,i=20;WriteScript("/feeds/posts/default/"+searchLabel+"?alt=json-in-script&start-index="+(t=1<t?t+1:t)+"&max-results="+(i=emptyItem?i+1:i)+"&callback=MoreRes")}function MoreRes(e){if(e.feed&&e.feed.entry){var t=e.feed.entry;if(t.length){for(var i="",s=0;s<t.length;s++){var r=t[s],a=r.link;if(a.length)for(var n=0;n<a.length;n++)if("alternate"===a[n].rel){var l,o,c=r.id.$t.split(".post-")[1],d=r.title.$t,f=a[n].href,h=r.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/);h=h?h[1]:(l=r.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(o=(h=l[1]).match(/embed\/(.*)(\/\?)*/))?"https://i.ytimg.com/vi/"+o[1]+"/0.jpg":"";for(var v=r.category,m=[],g=0;g<v.length;g++)m.push(v[g].term);var p="",u=r.published.$t;u&&(u=u.split("T")[0].split("-"))[1]&&u[2]&&(p=u[2]+"/"+parseInt(u[1])+"/",p+=(parseInt(u[0])+543).toString().substr(2));var b="";-1<m.indexOf("ปลดแอก")?b=' class="liberty"':-1<m.indexOf("recently")?b=' class="recently"':-1<m.indexOf("trending")&&(b=' class="trending"'),i+="<li"+b+">"+CreateList(c,d,f,h,m,p)+"</li>"}}setTimeout(function(){emptyItem&&mainList.removeChild(emptyItem),$("._loading",navigation).self&&navigation.removeChild($("._loading",navigation).self),mainList.innerHTML+=i,Favorite(),MoreList()},50)}}}!function(e){var t,i,s;e&&(!BrowserIs("ie")||(t=e.childNodes[0])&&(s="https://src.mechords.com/img/",(i=doc.createElement("div")).innerHTML='<div class="wrapper alert">คุณกำลังใช้เว็บบราวเซอร์ที่ล้าสมัย เพื่อการใช้งานเว็บไซต์อย่างเต็มประสิทธิภาพ ขอแนะนำให้ใช้หนึ่งในเบราว์เซอร์ฟรีที่ทันสมัยเหล่านี้แทนเถิด<br/><ul><li><a href="https://www.google.com/chrome/browser/desktop/" rel="nofollow" target="_blank"><img src="'+s+'chrome.png"/></a></li><li><a href="https://opera.com/" rel="nofollow" target="_blank"><img src="'+s+'opera.png"/></a></li><li><a href="https://www.microsoftedgeinsider.com/" rel="nofollow" target="_blank"><img src="'+s+'edge.png"/></a></li><li><a href="https://www.mozilla.com/firefox/" rel="nofollow" target="_blank"><img src="'+s+'firefox.png"/></a></li></ul></div><br/>',e.insertBefore(i,t)))}($("#billboard").self),function(r){var a,n,l,e;r&&((a=r.getAttribute("data-dropdown"))&&(n=doc.createElement("li"),(l=$(".btn-down",r).self)&&(l.classList.remove("_none"),l.addEventListener("click",function(e){e.preventDefault();var t=$(".-dropdown",r).self;if(!t){(t=doc.createElement("ul")).setAttribute("class"," -dropdown"),a=a.split("|");for(var i=0;i<a.length;i++){var s=a[i];t.innerHTML+='<li><a href="/search/label/'+encodeURIComponent(s)+'">'+s.replace(/อารมณ์|เพลง|เทศกาล/g,"")+"</a></li>"}n.innerHTML='<a class="_i" href="#" ><svg style="margin:4px auto;"><path d="M18 15l-6-6-6 6h12z"/></svg></a>',n.setAttribute("class","btn-up"),t.appendChild(n),r.appendChild(t)}this.classList.add("_none"),t.classList.remove("_none"),n&&n.addEventListener("click",function(e){e.preventDefault(),l.classList.remove("_none"),t.classList.add("_none")})}))),(e=$(".btn-fav a",r).self)&&e.addEventListener("click",function(e){e.preventDefault()}))}($("#category").self),function(){function i(){""!==search_txt.value&&("คอร์ดเพลงที่ถูกใจ"==search_txt.value?FavoriteRes():searchQuery?gcseReq():(ResetQ(),SearchReq(search_txt.value)))}var s,e,t;AreYouReady()&&searchBox&&header&&search_txt&&search_cls&&search_btn&&search_mic&&extens&&(search_txt.addEventListener("focus",function(){header.classList.add("-search")}),search_txt.addEventListener("keyup",function(e){27==(e.which||e.keycode)&&ResetThePage(),""!==this.value?search_cls.classList.remove("_none"):ResetThePage()}),search_cls.addEventListener("click",function(){ResetThePage(),search_txt.focus()}),searchBox.addEventListener("click",function(e){Stope(e)}),searchBox.addEventListener("submit",function(e){e.preventDefault(),i()}),CanUseSpeech()&&(search_mic.classList.remove("_none"),(s=new webkitSpeechRecognition).continuous=!1,s.interimResults=!1,s.lang="th-TH",search_mic.addEventListener("click",function(){search_txt.value="",search_mic.classList.add("-active"),s.start(),s.onresult=function(e){var t=e.results[0][0].transcript;search_txt.value=t,s.stop(),i()},s.onspeechend=function(){s.stop(),search_mic.classList.remove("-active")},s.onerror=function(){s.stop(),search_mic.classList.remove("-active")}})),e=$("#header .rnd.-q").self,t=$("#header .rnd.-x").self,e&&t&&e.addEventListener("click",function(e){Stope(e),ResetQ(),SearchReq("สุ่มคอร์ดเพลง")}))}(),function(e){function i(e){$("img",e).self;var t,i,s,r=$(".thumbnail",e).self,a=$(".title",e).self,n=a.getAttribute("href"),l=a.innerText,o=r.getAttribute("data-img");n&&l&&o&&(r.removeAttribute("data-img"),t="",o.match(/vi\/(.*)\/0|default|maxresdefault/)&&(t='class="-ytimg"'),o=o.replace("/s72-c/","/s120/"),r.innerHTML="<img "+t+' src="'+o+'" alt="คอร์ดเพลง '+l+'"/>',(i=$(".time",e).self)&&(s=i.innerHTML.replace(/\./g,"/"),i.innerHTML=s),Favorite(),MoreList())}if(iO)for(var t=new IntersectionObserver(function(e,t){e.forEach(function(e){e.isIntersecting&&(i(e.target),t.unobserve(e.target))})},{rootMargin:"-68px 0px"}),s=0;s<e.length;s++)t.observe(e[s]);else for(s=0;s<e.length;s++){i(e[s])}}($("article",mainList).all),function(e){function i(e){var t=$("article",e).all;if(t.length)for(var i=0;i<t.length;i++){var s,r=t[i];$("img",r).self||(s=r.className.match(/post\-(\d+)\s\-lazy/))&&WriteScript("/feeds/posts/default/?alt=json-in-script&max-results=1&q="+s[1]+"&callback=MostRes1")}}iO?new IntersectionObserver(function(e,t){(e=e[0]).isIntersecting&&(i(e.target),t.unobserve(e.target))},{rootMargin:"-68px 0px"}).observe(e):i(e)}($("#most-list-1").self),function(e){function i(e){var t=$("article",e).all;if(t.length)for(var i=0;i<t.length;i++){var s,r=t[i];$("img",r).self||(s=r.className.match(/post\-(\d+)\s\-lazy/))&&WriteScript("/feeds/posts/default/?alt=json-in-script&max-results=1&q="+s[1]+"&callback=MostRes2")}}iO?new IntersectionObserver(function(e,t){(e=e[0]).isIntersecting&&(i(e.target),t.unobserve(e.target))},{rootMargin:"-68px 0px"}).observe(e):i(e)}($("#most-list-2").self);var most1IDs=[];function MostRes1(e){if(e.feed)if(e.feed.entry){var t=e.feed.entry;if(t.length)for(var i=0;i<t.length;i++){var s=t[i];if((S=$("#most-list-1 .post-"+(_=s.id.$t.split(".post-")[1])).self)&&-1==most1IDs.indexOf(_)){most1IDs.push(_);var r,a,n=$(".thumbnail",S).self,l=$(".title",S).self,o=l.getAttribute("href"),c=l.innerText,d=(n.getAttribute("data-img"),s.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/)),f="";if(d?(a=(d=d[1]).match(/vi\/(.*)\/0|default|maxresdefault/))&&(f='class="-ytimg"'):d=!!(r=s.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(f='class="-ytimg"',!!(a=(d=r[1]).match(/embed\/(.*)(\/\?)*/))&&"https://i.ytimg.com/vi/"+a[1]+"/default.jpg"),o&&c&&n){d&&(d=d.replace("0.jpg","default.jpg").replace("/s72-c/","/s120/"),n.innerHTML="<img "+f+' src="'+d+'" alt="คอร์ดเพลง '+c+'" />'),S.classList.remove("-lazy");var h=[c];/\s*[\(|\?]/.test(c)&&(h.push(c.split(/\s*[\(|\?]/)[0]),h.push(c.match(/\((.*)\)/)[1]));var v=s.category,m="";if(v.length)for(var g=0;g<v.length;g++){var p=v[g].term;/recently|trending/.test(p)?S.parentNode.setAttribute("class",p):h.indexOf(p)<0&&ignoreLabels.indexOf(p)<0&&(m+="<a href='/search/label/"+encodeURIComponent(p)+"'>"+p+"</a>")}var u=$(".lbls",S).self;u&&(u.classList.remove("-loading"),u.innerHTML=m);var b,L=s.published.$t,x=$("time",S).self;L&&!x&&(b=(L=L.split("T")[0].split("-"))[2]+"/"+parseInt(L[1])+"/",b+=(parseInt(L[0])+543).toString().substr(2),(x=doc.createElement("span")).classList.add("time"),x.innerHTML=b,S.appendChild(x))}}}Favorite()}else{var y=e.feed.link;if(y.length)for(var _,S,g=0;g<y.length;g++){"self"===(o=y[g]).rel&&(_=o.href.split("&q="))&&(S=$(".post-"+_[1]).self)&&WriteScript("/feeds/posts/default/-/"+(c=$(".title",S).self.innerText)+"?alt=json-in-script&max-results=10&callback=MostRes1")}}scriptBox.innerHTML=""}var most2IDs=[];function MostRes2(e){if(e.feed)if(e.feed.entry){var t=e.feed.entry;if(t.length)for(var i=0;i<t.length;i++){var s=t[i];if((S=$("#most-list-2 .post-"+(_=s.id.$t.split(".post-")[1])).self)&&-1==most2IDs.indexOf(_)){most2IDs.push(_);var r,a,n=$(".thumbnail",S).self,l=$(".title",S).self,o=l.getAttribute("href"),c=l.innerText,d=(n.getAttribute("data-img"),s.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/)),f="";if(d?(a=(d=d[1]).match(/vi\/(.*)\/0|default|maxresdefault/))&&(f='class="-ytimg"'):d=!!(r=s.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(f='class="-ytimg"',!!(a=(d=r[1]).match(/embed\/(.*)(\/\?)*/))&&"https://i.ytimg.com/vi/"+a[1]+"/default.jpg"),o&&c&&n){d&&(d=d.replace("0.jpg","default.jpg").replace("/s72-c/","/s120/"),n.innerHTML="<img "+f+' src="'+d+'" alt="คอร์ดเพลง '+c+'" />'),S.classList.remove("-lazy");var h=[c];/\s*[\(|\?]/.test(c)&&(h.push(c.split(/\s*[\(|\?]/)[0]),h.push(c.match(/\((.*)\)/)[1]));var v=s.category,m="";if(v.length)for(var g=0;g<v.length;g++){var p=v[g].term;/recently|trending/.test(p)?S.parentNode.setAttribute("class",p):h.indexOf(p)<0&&ignoreLabels.indexOf(p)<0&&(m+="<a href='/search/label/"+encodeURIComponent(p)+"'>"+p+"</a>")}var u=$(".lbls",S).self;u&&(u.classList.remove("-loading"),u.innerHTML=m);var b,L=s.published.$t,x=$("time",S).self;L&&!x&&(b=(L=L.split("T")[0].split("-"))[2]+"/"+parseInt(L[1])+"/",b+=(parseInt(L[0])+543).toString().substr(2),(x=doc.createElement("span")).classList.add("time"),x.innerHTML=b,S.appendChild(x))}}}Favorite()}else{var y=e.feed.link;if(y.length)for(var _,S,g=0;g<y.length;g++){"self"===(o=y[g]).rel&&(_=o.href.split("&q="))&&(S=$(".post-"+_[1]).self)&&WriteScript("/feeds/posts/default/-/"+(c=$(".title",S).self.innerText)+"?alt=json-in-script&max-results=10&callback=MostRes2")}}scriptBox.innerHTML=""}var totalPost=1500;function TotalRes(e){e.feed&&e.feed.entry&&(totalPost=e.feed.openSearch$totalResults.$t)}WriteScript("/feeds/posts/default/-/คอร์ดเพลง?alt=json-in-script&callback=TotalRes&max-results=1");var rndList=!1,q_string="";function SearchReq(e){var t=1;"สุ่มคอร์ดเพลง"==e?(q_string=e,e="",t=Math.floor(Math.random()*(totalPost-150))+1):-1<e.indexOf("rnd:")?(e=e.split("rnd:")[1],e="&q="+(q_string=e),rndList=!0):-1<e.indexOf("default:")?(e=e.split("default:")[1],e="&q="+(q_string=e),qNotFound=!(rndList=!1)):(e="&q=title%3A"+(q_string=e),rndList=!1),search_txt.value=q_string,search_cls.classList.remove("_none"),header.classList.add("-search"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth(),body.classList.add("_disable-scroll"),WriteScript("/feeds/posts/default/?alt=json-in-script&start-index="+t+"&max-results=150&callback=SearchRes"+e)}function SearchRes(e){var t;if(e.feed&&e.feed.entry){var i=e.feed.entry;if((i=rndList&&18<i.length?Shuffler(i):i).length){for(var s="สุ่มคอร์ดเพลง"==q_string?18:17,r=i.length>s-iQ?s-iQ:i.length,a=[],n=0;n<r;n++){var l=i[n],o=l.link;if(o.length)for(var c=0;c<o.length;c++)if("alternate"===o[c].rel){var d=l.id.$t.split(".post-")[1];if(-1==qIDs.indexOf(d)){qIDs.push(d);var f=l.title.$t;if(-1==["shorten","visiting"].indexOf(f)){var h,v,m=o[c].href,g=l.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/);g=g?g[1]:(h=l.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(v=(g=h[1]).match(/embed\/(.*)(\/\?)*/))?"https://i.ytimg.com/vi/"+v[1]+"/default.jpg":"";for(var p=[],u=0;u<l.category.length;u++)p.push(l.category[u].term);var b="",L=l.published.$t;L&&(L=L.split("T")[0].split("-"))[1]&&L[2]&&(b=L[2]+"/"+parseInt(L[1])+"/",b+=(parseInt(L[0])+543).toString().substr(2));var x=!1;-1<p.indexOf("ปลดแอก")?x="liberty":-1<p.indexOf("recently")?x="recently":-1<p.indexOf("trending")&&(x="trending"),rndList?a.push([x,CreateList(d,f,m,g,p,b)]):f===search_txt.value?qListA.push([x,CreateList(d,f,m,g,p,b)]):-1<f.indexOf(search_txt.value)?qListB.push([x,CreateList(d,f,m,g,p,b)]):qListC.push([x,CreateList(d,f,m,g,p,b)])}}}}r<s&&!qNotFound?SearchReq("default:"+q_string):rndList||(a=qListA.concat(qListB,qListC));var y=$(".post-list",lightBox).self;if(y&&a.length){for(var _=$("li",y).all,S=a.length>s?s:a.length,u=0;u<S;u++){var w=a[u][0],T=a[u][1];if(_[u]&&(_[u].innerHTML=T,w&&_[u].classList.add(w),u==S-1)){_[S]&&a.length>s-1&&(_[S].innerHTML=CreateList(0,"ดูผลการค้นหาเพิ่มเติม..","/search?q="+search_txt.value,"https://src.mechords.com/img/G.jpg",search_txt.value));for(var I=$("li>div",y).all,k=0;k<I.length;k++)y.removeChild(I[k].parentNode)}}y.removeEventListener("click",Stope),y.addEventListener("click",Stope)}Favorite()}}else{qNotFound?(Alert("ว้า.. ยังไม่มีคอร์ดเพลงนี้เลย<br/>แต่ยังสามารถแนะนำเพลงผ่านทาง<br/> <a href='https://www.facebook.com/mechords' target='_blank'>เฟซบุ๊คแฟนเพจ</a> ได้อยู่นะจ๊ะ"),t=setInterval(function(){-1<alertBox.className.indexOf("_none")&&(clearInterval(t),ResetThePage(),search_txt.focus())},500)):SearchReq("default:"+q_string)}scriptBox.innerHTML=""}function SearchReqRnd(e){ResetQ(),SearchReq("rnd:"+e)}var favStorage,oldFav=localStorage.getItem("favorites");if(oldFav&&(oldFav=JSON.parse(oldFav),Object.keys(oldFav).length)){var items=Object.keys(oldFav);if(items.length){for(var li="",i=0;i<items.length;i++){var id=items[i],data=oldFav[id],title=data[1],link=mechords+"/"+data[0]+".html";link=(link=data[0].match(/(\d{4}\/\d{2}\/[^.]*)/))?mechords+"/"+link[1]+".html":"";var img="https://i.ytimg.com/vi/"+data[3]+"/default.jpg",lbls=data[2];"object"==typeof lbls&&(lbls=lbls.join("|")),FavFind(id=id.substr(1))||FavSet("add",id,link,title,lbls,img)}localStorage.removeItem("favorites"),BtnFav(),Favorite()}}function BtnFav(){var e;CanUseStorage()&&btnFav&&(favStorage=localStorage.getItem("mechords_favorite"),(e=$("a",btnFav).self)&&(favStorage&&Object.keys(JSON.parse(favStorage)).length?e.classList.add("-active"):e.classList.remove("-active"),e.removeEventListener("click",FavoriteRes),e.addEventListener("click",FavoriteRes)))}function FavFind(e){return!!(favStorage=localStorage.getItem("mechords_favorite"))&&!!(favStorage=JSON.parse(favStorage))[e]}function FavListener(e){Stope(e=e||window.event);var t=e.target.parentNode,i=t.className.match(/post\-(\d+)/);if(i=!!i&&i[1]){if(FavFind(i))FavSet("del",i);else{var s=$(".thumbnail",t).self,r=$(".title",t).self,a=r.getAttribute("href"),n=r.innerText,l=(l=$("img",s).self).getAttribute("src"),o=$(".lbls a",t).all;if(o.length){for(var c=[],d=0;d<o.length;d++)c.push(o[d].innerHTML);c=c.join("|")}a&&n&&c&&l&&FavSet("add",i,a,n,c,l)}BtnFav()}}function Favorite(){if(CanUseStorage()){favStorage=localStorage.getItem("mechords_favorite");var e=$(".post-list .btn-like").all;if(e.length)for(var t=startFav=0;t<e.length;t++){var i=e[t];i.classList.remove("_none");var s=i.parentNode.className.match(/post\-(\d+)/);(s=s?s[1]:0)&&FavFind(s)&&i.classList.add("-active"),i.removeEventListener("click",FavListener),i.addEventListener("click",FavListener)}}}function FavSet(e,t,i,s,r,a){var n,l=$(".post-"+t).all;if(l.length)for(var o=0;o<l.length;o++){var c=$(".btn-like,.btn.-like",l[o]).all;if(c.length)for(var d=0;d<c.length;d++)"add"==e?c[d].classList.add("-active"):"del"==e&&c[d].classList.remove("-active")}favStorage=localStorage.getItem("mechords_favorite"),t&&(n=(n=JSON.parse(favStorage))||{},"add"==e?i&&s&&r&&a&&(n[t]=[i,s,r,a]):"del"==e&&delete n[t],localStorage.setItem("mechords_favorite",JSON.stringify(n)))}function FavoriteRes(e){if((e=e||window.event).preventDefault(),Stope(e),t=localStorage.getItem("mechords_favorite"),win.scrollTo(0,0),t&&Object.keys(JSON.parse(t)).length){var t=JSON.parse(t),i=Object.keys(t);if(i.length){for(var s="",r=0;r<i.length;r++){var a=i[r],n=t[a];s+="<li>"+CreateList(a,n[1],n[0],n[3],n[2].split("|"))+"</li>"}body.classList.add("_disable-scroll"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth(),search_txt.value="คอร์ดเพลงที่ถูกใจ",search_cls.classList.remove("_none"),lightBox.classList.remove("_none"),lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide">'+s+"</ul></div>";var l=$(".post-list",lightBox).self;l&&(l.removeEventListener("click",Stope),l.addEventListener("click",Stope)),Favorite(),search_txt.focus()}}}function FavItem(e,t){if(e&&t){if(FavFind(e))FavSet("del",e),t.classList.remove("-active");else{var i=pageURL.split(/[\#\?\&]/)[0],s=$("h2",postItem).self.innerHTML,r=$(".item-tags a",postItem).all,a="";if(r.length)for(var n=0;n<r.length;n++)a+=(0!=n?"|":"")+r[n].innerText;var l=$("img",postItem).self,o=$(".vdo",postItem).self,c=$("iframe",o).self;FavSet("add",e,i,s,a,l=l?l.getAttribute("src"):c&&(l=!!(l=c.src.match(/embed\/(.*)/))&&l[1].split(/\?/)[0])?"https://i.ytimg.com/vi/"+l+"/default.jpg":""),t.classList.add("-active")}BtnFav()}}function ScrollPos(){var e,t,i,s;me_scroll=$(".me-scroll"),me_scroll.self&&(e=$("#body").left,t=$("#body").width+2*me_scroll.width,i=$("#body").width,s=$(win).height/2-me_scroll.height/2,me_scroll.self.style.top=s+"px",$(win).width>t+36?(me_scroll.self.style.right="",me_scroll.self.style.left=e+i+18+"px"):(me_scroll.self.style.left="",me_scroll.self.style.right=0))}BtnFav(),function(r){if(r){var e=r.querySelector("select"),a=r.querySelectorAll("ol>li"),t=doc.getElementById("strum");function n(e){t||((t=doc.createElement("audio")).type="audio/mpeg",t.id="strum",t.loop=!0,t.hidden=!0,extens.appendChild(t)),l(),e=e.replace("#","s"),t.src="https://src.mechords.com/audios/acoustic-guitar-tuning/"+e+".mp3",t.play()}e.onchange=function(){l();for(var e=(this.value||this.options[this.selectedIndex].value).split("|"),t=0;t<e.length;t++)a[t].innerHTML=e[t]};for(var i=0;i<a.length;i++)a[i].addEventListener("click",function(){var e=this.innerText;e?(n(e),this.classList.add("strumming")):l()});function l(){if(t&&(t.pause(),t.currentTime=0),a)for(var e=0;e<a.length;e++)a[e].classList.remove("strumming")}doc.addEventListener("keyup",function(e){var t,i,s;!r.querySelector(".strumming")||null!=(t={96:"stop",97:5,98:4,99:3,100:2,101:1,102:0}[e.which||e.keyCode])&&("stop"!=t&&(s=(i=a[t]).innerText)?(n(s),i.classList.add("strumming")):l())})}}($("#guitar-tuning").self);var btn_scroll=$(".me-scroll button").all;if(btn_scroll.length){for(var g_scroll=$(".me-scroll>._global").self,c_scholl=$(".me-scroll>._chord").self,i=0;i<btn_scroll.length;i++)btn_scroll[i].addEventListener("click",function(e){Stope(e);var t,i=this.value;"up"==i?SmoothScroll(0):"down"==i?(ChordTb(),chordTb?g_scroll&&c_scholl&&(g_scroll.classList.add("_none"),c_scholl.classList.remove("_none"),(t=$("button",c_scholl).self)&&(CloseTooltip(),ChordScrollStart(t.value),ActiveScrollBtn(t)),ScrollPos()):SmoothScroll($("body").height+bottomSpace-$(win).height)):"stop"==i?(g_scroll.classList.remove("_none"),c_scholl.classList.add("_none"),ChordScrollStop(),ScrollPos()):(ChordScrollStart(i),ActiveScrollBtn(this))});var svg_down='<svg><path d="M16.59,10.942L12,15.522l-4.59-4.58L6,12.353l6,6l6-6L16.59,10.942z" /><path d="M16.59,5.647L12,10.228l-4.59-4.58L6,7.058l6,6l6-6L16.59,5.647z" /></svg>';function ActiveScrollBtn(e){var t=$(".me-scroll>._chord>button").all;if(t.length)for(var i=0;i<t.length;i++){var s=t[i];s.classList.remove("-active"),-1==s.value.indexOf("stop")&&(s.innerHTML="")}e&&"stop"!=e.value&&(e.innerHTML=svg_down,e.classList.add("-active"))}function SmoothScroll(e){var s=window.pageYOffset,r=e-s,a=1e3,n=null;window.requestAnimationFrame(function e(t){n=n||t;var i=t-n;window.scrollTo(0,EaseInOutCubic(i,s,r,a));i<a&&window.requestAnimationFrame(e)})}function EaseInOutCubic(e,t,i,s){return(e/=s/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t}}function Alert(e){var t;alertBox&&e&&(t='<div class="-inner"><pre>'+e+'</pre><button type="button" onclick="Xlert(event);">OK</button></div>',alertBox.innerHTML=t,alertBox.classList.remove("_none"))}function Xlert(e){Stope(e),alertBox&&(alertBox.innerHTML="",alertBox.classList.add("_none"))}function FixAutoHeight(){var e=$('[style*="height: auto"]').all;if(e.length)for(var t=0;t<e.length;t++)e[t].style.height="",e[t].getAttribute("style").length||e[t].removeAttribute("style");20<=++fixAutoHeightTime&&fixAutoHeightInterval&&clearInterval(fixAutoHeightInterval)}var fbComment=!1;function FBPlugin(){var e;$("#fb-comments").self&&!fbComment&&(fbComment=!0,(e=doc.createElement("script")).async=!0,e.defer=!0,e.src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v8.0&appId=1458156584324917&autoLogAppEvents=1",body.appendChild(e))}function FncBundle(){Wasteful(),BalanceMainList(),ScrollPos(),FBPlugin()}doc.addEventListener("click",function(){ResetThePage()}),doc.addEventListener("DOMContentLoaded",function(e){DeepLinkAndroid(),FncBundle()}),win.addEventListener("scroll",function(){FncBundle()}),win.addEventListener("resize",function(){FncBundle()}),window.onload=LoadTime;