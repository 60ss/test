function BalanceMainList(){var e;emptyItem=$("#empty").self,640<=$(win).width?emptyItem||(e=$("article",mainList).all).length&&e.length%2==1&&((emptyItem=doc.createElement("li")).setAttribute("id","empty"),emptyItem.innerHTML="<aside></aside>",mainList.appendChild(emptyItem)):emptyItem&&mainList.removeChild(emptyItem)}function CreateList(e,t,i,s,r,l){var a="คอร์ดเพลง "+t,n="";if("object"==typeof r){var o=[t];/\s*[\(|\?]/.test(t)&&(o.push(t.split(/\s*[\(|\?]/)[0]),/\s*\(/.test(t)&&o.push(t.match(/\((.*)\)/)[1]));for(var c=0;c<r.length;c++){var d=r[c];-1===ignoreLabels.indexOf(d)&&-1===o.indexOf(d)&&(n+='<a href="'+mechords+"/search/label/"+encodeURIComponent(d)+'" title="คอร์ดเพลง '+d+'">'+d+"</a>")}}else n+='<a href="'+i+'" title="คอร์ดเพลง '+r+'">'+r+"</a>";var v=l?"<footer><time>"+l+"</time></footer>":"",h=CanUseStorage()&&0!=e?'<button type="button"></button>':"",f="";return s.match(/vi\/(.*)\/(0|default|maxresdefault)/)&&(f='class="-ytimg"'),'<article class="post-'+e+'"><figure><a href="'+i+'" title="'+a+'"><img '+f+' src="'+(s=s.replace("/s72-c/","/s120/"))+'" alt="'+a+'" /></a></figure><header><a href="'+i+'" title="'+a+'"><h3>'+t+"</h3></a><span>"+n+"</span></header>"+v+h+"</article>"}function BrowserIs(e){var t=navigator.userAgent,i=-1!=(t.indexOf("Opera")||t.indexOf("OPR"))?"opera":-1!=t.indexOf("Chrome")?"chrome":-1!=t.indexOf("Safari")?"safari":-1!=t.indexOf("Firefox")?"firefox":-1!=t.indexOf("MSIE")||1==!!doc.documentMode?"ie":void 0;return i===e}function CanUseWebP(){var e=doc.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")}function CanUseSpeech(){return"SpeechRecognition"in window||"webkitSpeechRecognition"in window}function CanUseStorage(){var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}function AreYouReady(){return!!("querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach)}function Stope(e){(e=e||window.event).cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}function Shuffler(e){if(e&&1<e.length){for(var t=e.length-1;0<t;t--){var i=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[i],e[i]=s}return e}}function WriteScript(e){var t;scriptBox&&((t=document.createElement("script")).src=mechords+e,scriptBox.appendChild(t))}function ScrollbarWidth0(){return lightBox?lightBox.offsetWidth-lightBox.clientWidth+"px":0}function ScrollbarWidth(){var e=doc.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",body.appendChild(e);var t=doc.createElement("div");e.appendChild(t);var i=e.offsetWidth-t.offsetWidth;return e.parentNode.removeChild(e),i+"px"}function CopyToClipboard(e){var t;e&&extens&&((t=doc.createElement("textarea")).value=e,extens.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),extens.removeChild(t))}function M01(){var e=win.location.search;return/[\?\&]m=1/.test(e)}function LoadTime(){var e=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;e&&console.log("Page load time is "+e/1e3+" second")}var win=window,doc=document,html=doc.documentElement,body=doc.body||doc.querySelector("body");function $(e,t){var e=e,i=void 0!==win.pageYOffset,s="CSS1Compat"===(doc.compatMode||""),r={all:0,self:0,width:0,height:0,top:0,left:0,topScroll:0,bottomScroll:0,leftScroll:0,rightScroll:0};if(e.self==window)return{width:win.innerWidth||body.clientWidth,height:win.innerHeight||body.clientHeight,scrollTop:i?win.pageYOffset:s?body.scrollTop:0,scrollLeft:i?win.pageXOffset:s?body.scrollLeft:0};if(e==document)return{width:window.innerWidth||body.clientWidth||html.clientWidth,height:window.innerHeight||body.clientHeight||html.clientHeight};if("string"==typeof e){if((e=t?t.querySelectorAll(e):document.querySelectorAll(e)).length){var l=e[0].getBoundingClientRect();return{all:e,self:e[0],width:e[0].innerWidth||e[0].clientWidth,height:e[0].innerHeight||e[0].clientHeight,top:e[0].offsetTop,left:e[0].offsetLeft,topScroll:l.top,bottomScroll:l.bottom,leftScroll:l.left,rightScroll:l.right}}return r}if(e){l=e.getBoundingClientRect();return{all:0,self:e,width:e.innerWidth||e.clientWidth,height:e.innerHeight||e.clientHeight,top:e.offsetTop,left:e.offsetLeft,topScroll:l.top,bottomScroll:l.bottom,leftScroll:l.left,rightScroll:l.right}}return r}function ResetThePage(){header&&(header.classList.remove("-search"),header.classList.remove("_none"),header.removeAttribute("style")),lightBox&&(lightBox.classList.add("_none"),lightBox.innerHTML="",lightBox.removeAttribute("style")),search_txt&&(search_txt.value=""),search_cls&&search_cls.classList.add("_none"),shareBox&&shareBox.classList.add("_none"),body&&0==$("#chord-scroll").self&&body.classList.remove("_disable-scroll")}var mechords="https://www.mechords.com",pageURL=win.location.href,searchLabel=(searchLabel=pageURL.match(/search\/label\/(.*)/))?"-/"+searchLabel[1].split("?")[0]:"",searchQuery=pageURL.match(/[\?\&]q=(.*)/);searchQuery=!!(searchQuery=!!searchQuery&&searchQuery[1].split("&")[0])&&decodeURI(searchQuery);var ignoreLabels=["คอร์ดเพลง","recently","trending","สตริง","เพื่อชีวิต","ลูกกรุง","ลูกทุ่ง","ลูกทุ่งเพื่อชีวิต","หมอลำ","อีสาน","ใต้","คำเมือง","ลาว","สากล","เพลงคู่","Cover","คนโสด","เพลงจีบ","ชิลๆ","อินเลิฟ","อกหัก","เหงา","เศร้า","คิดถึง","ฤดูร้อน","ฤดูฝน","ฤดูหนาว","ปีใหม่","วันพ่อ","วันแม่","new","shorten-data","visiting-data","0.0","โควิด-19","เร็กเก้/สกา","อินดี้โฟล์ก","แร็พ"],XL=1035.98<$(doc).width,fullScreen=1279.98<$(doc).width&&719.98<$(doc).height,scriptBox=$(".script-box").self,header=$("#header").self,footer=$("#footer").self,brand=$("#header .brand").self,searchBox=$("#header .search-box").self,search_txt=$(".search-box>.-txt").self,search_cls=$(".search-box>.-clear").self,search_btn=$(".search-box>.-submit").self,search_mic=$(".search-box>.-speech").self,lightBox=$("#extensions .light-box").self,alertBox=$("#extensions .alert-box").self,extens=$("#extensions").self,mainList=$("#main-list").self,mostList=$("#most-list").self,mostList1=$("#most-list-1").self,mostList2=$("#most-list-2").self,similarList=$("#similar .post-list").self,emptyItem=$("#empty").self,postItem=$("#post-item").self,itemTitle=$("#post-item header h3").self,navigation=$("#navigation").self,bottomSpace=200,chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self,btnFav=$("#category .btn-fav").self,favRes=$("#extensions .favorite-res").self;function ChordTb(){chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self}var fixAutoHeightInterval,shareBox=$(".share-box").self,keySelector=$(".select.-key>select").self,defaultSelectIndex=0,btn_share=$(".btn.-share").self,btn_switch=$(".btn.-switch").self,btn_lightbox=$(".btn.-lightbox").self,btn_like=$(".btn.-like").self,chk_gc=$(".chk.-gc > input").self,chk_simplify=$(".chk.-simplify > input").self,chk_cr=$(".chk.-cr > input").self,accordion=$(".accordion").self,a_pr=$(".accordion>.-pr").self,a_ps=$(".accordion>.-ps").self,a_gc=$(".accordion>.-gc").self,a_cr=$(".accordion>.-cr").self,fixAutoHeightTime=0;function MainList(){if(mainList&&($(mainList).topScroll+$(win).scrollTop-$(win).height-$(win).scrollTop<=0&&0<$(".-lazy",mainList).all.length)){var e=$("article",mainList).all;if(e.length)for(var t=0;t<e.length;t++){var i=e[t],s=$("img",i).self;if($(i).topScroll+$(win).scrollTop-$(win).height-$(win).scrollTop<=0&&!s){var r=i.getAttribute("data-link"),l=i.getAttribute("data-title"),a=$("figure",i).self,n=a.getAttribute("data-img");if(r&&l&&n){var o="";n.match(/vi\/(.*)\/0|default|maxresdefault/)&&(o='class="-ytimg"'),n=n.replace("/s72-c/","/s120/"),a.innerHTML='<a href="'+r+'" title="คอร์ดเพลง '+l+'"><img '+o+' src="'+n+'" alt="หน้าปก เพลง '+l+'" /></a>',i.classList.remove("-lazy");var c=$("span>a",i).all;if(c.length){var d=[l];/\s*[\(|\?]/.test(l)&&(d.push(l.split(/\s*[\(|\?]/)[0]),/\s*\(/.test(l)&&d.push(l.match(/\((.*)\)/)[1]));for(var v=0;v<c.length;v++){var h=c[v],f=h.innerText;(-1<d.indexOf(f)||-1<ignoreLabels.indexOf(f))&&h.parentNode.removeChild(h)}}var m,g=$("time",i).self;g&&(m=g.innerHTML.replace(/\./g,"/"),g.innerHTML=m),Favorite(),MoreList()}}}}}function MoreList(){var e,t,i;BalanceMainList(),navigation&&!$(".-loadmore",navigation).self&&(e=$("article",mainList).all.length,t="/feeds/posts/default/"+searchLabel+"?alt=json-in-script&start-index="+(e=0===e?1:e+1)+"&max-results=1&callback=MoreBtn",i=doc.location.search,(i=!/updated-max=/.test(i))||(t="/feeds/posts/default/"+searchLabel+"?alt=json-in-script&start-index="+e+"&max-results=1&callback=NextBtn"),WriteScript(t)),fixAutoHeightInterval||(fixAutoHeightTime=0,fixAutoHeightInterval=setInterval(FixAutoHeight,300))}function NextBtn(e){var t;e.feed&&e.feed.entry||(t=$(".-next",navigation).self)&&navigation.removeChild(t),scriptBox.innerHTML=""}function MoreBtn(e){var t,i;e.feed&&e.feed.entry?$(".-loadmore",navigation).self||((t=doc.createElement("a")).classList.add("-loadmore"),t.setAttribute("title","โหลดคอร์ดเพลงเพิ่มเติม"),t.setAttribute("href","javascript:void(0);"),t.setAttribute("onclick","MoreReq(this)"),t.innerHTML='<svg><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg><span>แสดงเพิ่มเติม</span>',navigation.insertBefore(t,navigation.childNodes[0])):(i=$(".-next",navigation).self)&&navigation.removeChild(i),scriptBox.innerHTML=""}function MoreReq(){fixAutoHeightInterval=null,navigation.innerHTML="<a href='#' class='_loading'><svg><circle cx='17' cy='17' r='15'/></svg></a>";var e=$("article",mainList).all,t=e?e.length:1,i=20;WriteScript("/feeds/posts/default/"+searchLabel+"?alt=json-in-script&start-index="+(t=1<t?t+1:t)+"&max-results="+(i=emptyItem?i+1:i)+"&callback=MoreRes")}function MoreRes(e){if(e.feed&&e.feed.entry){var t=e.feed.entry;if(t.length){for(var i="",s=0;s<t.length;s++){var r=t[s],l=r.link;if(l.length)for(var a=0;a<l.length;a++)if("alternate"===l[a].rel){var n=r.id.$t.split(".post-")[1],o=r.title.$t,c=[o];/\s*[\(|\?]/.test(o)&&(c.push(o.split(/\s*\(/)[0]),c.push(o.match(/\((.*)\)/)[1]));var d,v,h=l[a].href,f=r.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/);f=f?f[1]:(d=r.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(v=(f=d[1]).match(/embed\/(.*)(\/\?)*/))?"https://i.ytimg.com/vi/"+v[1]+"/0.jpg":"";for(var m=r.category,g=[],p=0;p<m.length;p++)g.push(m[p].term);var u="",b=r.published.$t;b&&(b=b.split("T")[0].split("-"))[1]&&b[2]&&(u=b[2]+"/"+parseInt(b[1])+"/",u+=(parseInt(b[0])+543).toString().substr(2));var L=-1<g.indexOf("recently")?' class="recently"':-1<g.indexOf("trending")?' class="trending"':"";i+="<li"+L+">"+CreateList(n,o,h,f,g,u)+"</li>"}}setTimeout(function(){emptyItem&&mainList.removeChild(emptyItem),$("._loading",navigation).self&&navigation.removeChild($("._loading",navigation).self),mainList.innerHTML+=i,Favorite(),MoreList()},50)}}}function MostReq1(){if(mostList1&&($("#most-list-1").topScroll+$(win).scrollTop-$(win).height-$(win).scrollTop<=0&&0<$(".-lazy",mostList1).all.length)){var e=$("#most-list-1 article").all;if(e.length)for(var t=0;t<e.length;t++){var i,s=e[t];$("img",s).self||(i=s.className.match(/post\-(\d+)\s\-lazy/))&&WriteScript("/feeds/posts/default/?alt=json-in-script&max-results=1&q="+i[1]+"&callback=MostRes1")}}}!function(e){var t,i,s;e&&(!BrowserIs("ie")||(t=e.childNodes[0])&&(s="https://src.mechords.com/img/",(i=doc.createElement("div")).innerHTML='<div class="wrapper alert">คุณกำลังใช้เว็บบราวเซอร์ที่ล้าสมัย เพื่อการใช้งานเว็บไซต์อย่างเต็มประสิทธิภาพ ขอแนะนำให้ใช้หนึ่งในเบราว์เซอร์ฟรีที่ทันสมัยเหล่านี้แทนเถิด<br/><ul><li><a href="https://www.google.com/chrome/browser/desktop/" rel="nofollow" target="_blank"><img src="'+s+'chrome.png"/></a></li><li><a href="https://opera.com/" rel="nofollow" target="_blank"><img src="'+s+'opera.png"/></a></li><li><a href="https://www.microsoftedgeinsider.com/" rel="nofollow" target="_blank"><img src="'+s+'edge.png"/></a></li><li><a href="https://www.mozilla.com/firefox/" rel="nofollow" target="_blank"><img src="'+s+'firefox.png"/></a></li></ul></div><br/>',e.insertBefore(i,t)))}($("#billboard").self),function(r){var l,a,n,e;r&&((l=r.getAttribute("data-dropdown"))&&(a=doc.createElement("li"),(n=$(".btn-down",r).self)&&(n.classList.remove("_none"),n.addEventListener("click",function(e){e.preventDefault();var t=$(".-dropdown",r).self;if(!t){(t=doc.createElement("ul")).setAttribute("class"," -dropdown"),l=l.split("|");for(var i=0;i<l.length;i++){var s=l[i];t.innerHTML+='<li><a href="/search/label/'+encodeURIComponent(s)+'">'+s.replace(/อารมณ์|เพลง|เทศกาล/g,"")+"</a></li>"}a.innerHTML='<a class="_i" href="#" ><svg style="margin:4px auto;"><path d="M18 15l-6-6-6 6h12z"/></svg></a>',a.setAttribute("class","btn-up"),t.appendChild(a),r.appendChild(t)}this.classList.add("_none"),t.classList.remove("_none"),a&&a.addEventListener("click",function(e){e.preventDefault(),n.classList.remove("_none"),t.classList.add("_none")})}))),(e=$(".btn-fav a",r).self)&&e.addEventListener("click",function(e){e.preventDefault()}))}($("#category").self),function(){function i(){""!==search_txt.value&&("คอร์ดเพลงที่ถูกใจ"==search_txt.value?FavoriteRes:searchQuery?gcseReq:SearchReq)()}var s,e,t;AreYouReady()&&searchBox&&header&&search_txt&&search_cls&&search_btn&&search_mic&&extens&&(search_txt.addEventListener("focus",function(){header.classList.add("-search")}),search_txt.addEventListener("keyup",function(e){27==(e.which||e.keycode)&&ResetThePage(),""!==this.value?search_cls.classList.remove("_none"):ResetThePage()}),search_cls.addEventListener("click",function(){ResetThePage(),search_txt.focus()}),searchBox.addEventListener("click",function(e){Stope(e)}),searchBox.addEventListener("submit",function(e){e.preventDefault(),i()}),CanUseSpeech()&&(search_mic.classList.remove("_none"),(s=new webkitSpeechRecognition).continuous=!1,s.interimResults=!1,s.lang="th-TH",search_mic.addEventListener("click",function(){search_txt.value="",search_mic.classList.add("-active"),s.start(),s.onresult=function(e){var t=e.results[0][0].transcript;search_txt.value=t,s.stop(),i()},s.onspeechend=function(){s.stop(),search_mic.classList.remove("-active")},s.onerror=function(){s.stop(),search_mic.classList.remove("-active")}})),e=$("#header .rnd.-q").self,t=$("#header .rnd.-x").self,e&&t&&e.addEventListener("click",function(e){Stope(e),SearchReq("สุ่มคอร์ดเพลง")}))}();var most1IDs=[];function MostRes1(e){if(e.feed)if(e.feed.entry){var t=e.feed.entry;if(t.length)for(var i=0;i<t.length;i++){var s=t[i];if((S=$("#most-list-1 .post-"+(y=s.id.$t.split(".post-")[1])).self)&&-1==most1IDs.indexOf(y)){most1IDs.push(y);var r,l,a=S.getAttribute("data-link"),n=S.getAttribute("data-title"),o=$("figure",S).self,c=s.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/),d="";if(c?(l=(c=c[1]).match(/vi\/(.*)\/0|default|maxresdefault/))&&(d='class="-ytimg"'):c=!!(r=s.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(d='class="-ytimg"',!!(l=(c=r[1]).match(/embed\/(.*)(\/\?)*/))&&"https://i.ytimg.com/vi/"+l[1]+"/0.jpg"),a&&n&&o){S.removeAttribute("data-link"),S.removeAttribute("data-title"),c&&(c=c.replace("/s72-c/","/s120/"),o.innerHTML='<a href="'+a+'" title="คอร์ดเพลง '+n+'"><img '+d+' src="'+c+'" alt="หน้าปก เพลง '+n+'" /></a>'),S.classList.remove("-lazy");var v=[n];/\s*[\(|\?]/.test(n)&&(v.push(n.split(/\s*[\(|\?]/)[0]),v.push(n.match(/\((.*)\)/)[1]));var h=s.category,f="";if(h.length)for(var m=0;m<h.length;m++){var g=h[m].term;/recently|trending/.test(g)?S.parentNode.setAttribute("class",g):v.indexOf(g)<0&&ignoreLabels.indexOf(g)<0&&(f+="<a href='"+mechords+"/search/label/"+encodeURIComponent(g)+"' title='คอร์ดเพลง "+g+"'>"+g+"</a>")}var p=$(".-loading",S).self;p&&(p.classList.remove("-loading"),p.innerHTML=f);var u,b=s.published.$t,L=$("time",S).self;b&&!L&&(u=(b=b.split("T")[0].split("-"))[2]+"/"+parseInt(b[1])+"/",u+=(parseInt(b[0])+543).toString().substr(2),(L=doc.createElement("footer")).innerHTML="<time>"+u+"</time>",S.appendChild(L))}}}Favorite()}else{var x=e.feed.link;if(x.length)for(var y,S,m=0;m<x.length;m++){"self"===(a=x[m]).rel&&(y=a.href.split("&q="))&&(S=$(".post-"+y[1]).self)&&WriteScript("/feeds/posts/default/-/"+(n=S.getAttribute("data-title"))+"?alt=json-in-script&max-results=10&callback=MostRes1")}}scriptBox.innerHTML=""}function MostReq2(){if(mostList2&&($("#most-list-2").topScroll+$(win).scrollTop-$(win).height-$(win).scrollTop<=0&&0<$(".-lazy",mostList2).all.length)){var e=$("#most-list-2 article").all;if(e.length)for(var t=0;t<e.length;t++){var i,s=e[t];$("img",s).self||(i=s.className.match(/post\-(\d+)\s\-lazy/))&&WriteScript("/feeds/posts/default/?alt=json-in-script&max-results=1&q="+i[1]+"&callback=MostRes2")}}}var most2IDs=[];function MostRes2(e){if(e.feed)if(e.feed.entry){var t=e.feed.entry;if(t.length)for(var i=0;i<t.length;i++){var s=t[i];if((S=$("#most-list-2 .post-"+(y=s.id.$t.split(".post-")[1])).self)&&-1==most2IDs.indexOf(y)){most2IDs.push(y);var r,l,a=S.getAttribute("data-link"),n=S.getAttribute("data-title"),o=$("figure",S).self,c=s.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/),d="";if(c?(l=(c=c[1]).match(/vi\/(.*)\/0|default|maxresdefault/))&&(d='class="-ytimg"'):c=!!(r=s.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(d='class="-ytimg"',!!(l=(c=r[1]).match(/embed\/(.*)(\/\?)*/))&&"https://i.ytimg.com/vi/"+l[1]+"/0.jpg"),a&&n&&o){S.removeAttribute("data-link"),S.removeAttribute("data-title"),c&&(c=c.replace("/s72-c/","/s120/"),o.innerHTML='<a href="'+a+'" title="คอร์ดเพลง '+n+'"><img '+d+' src="'+c+'" alt="หน้าปก เพลง '+n+'" /></a>'),S.classList.remove("-lazy");var v=[n];/\s*[\(|\?]/.test(n)&&(v.push(n.split(/\s*[\(|\?]/)[0]),v.push(n.match(/\((.*)\)/)[1]));var h=s.category,f="";if(h.length)for(var m=0;m<h.length;m++){var g=h[m].term;/recently|trending/.test(g)?S.parentNode.setAttribute("class",g):v.indexOf(g)<0&&ignoreLabels.indexOf(g)<0&&(f+="<a href='"+mechords+"/search/label/"+encodeURIComponent(g)+"' title='คอร์ดเพลง "+g+"'>"+g+"</a>")}var p=$(".-loading",S).self;p&&(p.classList.remove("-loading"),p.innerHTML=f);var u,b=s.published.$t,L=$("time",S).self;b&&!L&&(u=(b=b.split("T")[0].split("-"))[2]+"/"+parseInt(b[1])+"/",u+=(parseInt(b[0])+543).toString().substr(2),(L=doc.createElement("footer")).innerHTML="<time>"+u+"</time>",S.appendChild(L))}}}Favorite()}else{var x=e.feed.link;if(x.length)for(var y,S,m=0;m<x.length;m++){"self"===(a=x[m]).rel&&(y=a.href.split("&q="))&&(S=$(".post-"+y[1]).self)&&WriteScript("/feeds/posts/default/-/"+(n=S.getAttribute("data-title"))+"?alt=json-in-script&max-results=10&callback=MostRes2")}}scriptBox.innerHTML=""}var postHolder='<div class="wrapper"><ul class="post-list -wide -placeholder"><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li></ul></div>',totalPost=1500;function TotalRes(e){e.feed&&e.feed.entry&&(totalPost=e.feed.openSearch$totalResults.$t)}WriteScript("/feeds/posts/default/-/คอร์ดเพลง?alt=json-in-script&callback=TotalRes&max-results=1");var rndList=!1,rnd_str="";function SearchReq(e){win.scrollTo(0,0),lightBox||((lightBox=doc.createElement("div")).classList.add("search-res"),extens.appendChild(lightBox)),lightBox.innerHTML=postHolder,lightBox.classList.remove("_none"),e?(rndList=!0,search_txt.value=e):(rndList=!1,e=search_txt.value),rnd_str=e,search_cls.classList.remove("_none");var t=1;"สุ่มคอร์ดเพลง"==e?(e="",t=Math.floor(Math.random()*(totalPost-150))+1):e="&q="+e,header.classList.add("-search"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth(),body.classList.add("_disable-scroll"),WriteScript("/feeds/posts/default/?alt=json-in-script&start-index="+t+"&max-results=150&callback=SearchRes"+e)}function SearchRes(e){var t=e.feed&&e.feed.entry;if(t){var i=e.feed.entry;if((i=rndList&&18<i.length?Shuffler(i):i).length){for(var s="",r=[],l=[],a=[],n="สุ่มคอร์ดเพลง"==rnd_str?18:17,o=i.length>n?n:i.length,c=0;c<o;c++){var d=i[c],v=d.link;if(v.length)for(var h=0;h<v.length;h++)if("alternate"===v[h].rel){var f=d.id.$t.split(".post-")[1],m=d.title.$t;if(-1==["shorten","visiting"].indexOf(m)){var g,p,u=v[h].href,b=d.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/);b=b?b[1]:(g=d.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(p=(b=g[1]).match(/embed\/(.*)(\/\?)*/))?"https://i.ytimg.com/vi/"+p[1]+"/0.jpg":"";for(var L=[],x=0;x<d.category.length;x++)L.push(d.category[x].term);var y="",S=d.published.$t;S&&(S=S.split("T")[0].split("-"))[1]&&S[2]&&(y=S[2]+"/"+parseInt(S[1])+"/",y+=(parseInt(S[0])+543).toString().substr(2));var w=-1<L.indexOf("recently")?' class="recently"':-1<L.indexOf("trending")?' class="trending"':"";rndList?s+="<li"+w+">"+CreateList(f,m,u,b,L,y)+"</li>":m===search_txt.value?r.push("<li"+w+">"+CreateList(f,m,u,b,L,y)+"</li>"):-1<m.indexOf(search_txt.value)?l.push("<li"+w+">"+CreateList(f,m,u,b,L,y)+"</li>"):a.push("<li"+w+">"+CreateList(f,m,u,b,L,y)+"</li>")}}}if(!rndList)for(var _=r.concat(l,a),T=18<_.length?18:_.length,k=0;k<T;k++)s+=_[k];var M="<li>"+CreateList(0,"ดูผลการค้นหาเพิ่มเติม..","/search?q="+search_txt.value,"https://src.mechords.com/img/G.jpg",search_txt.value)+"</li>";lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide">'+s+("สุ่มคอร์ดเพลง"==rnd_str?"":M)+"</ul></div>";var B=$(".post-list",lightBox).self;B&&(B.removeEventListener("click",Stope),B.addEventListener("click",Stope)),Favorite()}}setTimeout(function(){t||win.location.replace("/search?q="+search_txt.value)},3e3),scriptBox.innerHTML=""}var favStorage,oldFav=localStorage.getItem("favorites");if(oldFav&&(oldFav=JSON.parse(oldFav),Object.keys(oldFav).length)){var items=Object.keys(oldFav);if(items.length){for(var li="",i=0;i<items.length;i++){var id=items[i],data=oldFav[id],title=data[1],link=mechords+"/"+data[0]+".html";link=(link=data[0].match(/(\d{4}\/\d{2}\/[^.]*)/))?mechords+"/"+link[1]+".html":"";var img="https://i.ytimg.com/vi/"+data[3]+"/default.jpg",lbls=data[2];"object"==typeof lbls&&(lbls=lbls.join("|")),FavFind(id=id.substr(1))||FavSet("add",id,link,title,lbls,img)}localStorage.removeItem("favorites"),BtnFav(),Favorite()}}function BtnFav(){var e;CanUseStorage()&&btnFav&&(favStorage=localStorage.getItem("mechords_favorite"),(e=$("a",btnFav).self)&&(favStorage&&Object.keys(JSON.parse(favStorage)).length?e.classList.add("-active"):e.classList.remove("-active"),e.removeEventListener("click",FavoriteRes),e.addEventListener("click",FavoriteRes)))}function FavFind(e){return!!(favStorage=localStorage.getItem("mechords_favorite"))&&!!(favStorage=JSON.parse(favStorage))[e]}function FavListener(e){Stope(e=e||window.event);var t=e.target.parentNode,i=t.className.match(/post\-(\d+)/);if(i=!!i&&i[1]){if(FavFind(i))FavSet("del",i);else{var s=(s=$("header a",t).self)?s.getAttribute("href"):"",r=(r=$("h3",t).self)?r.innerHTML:"",l=(l=$("img",t).self)?l.getAttribute("src"):"",a=$("span a",t).all;if(a.length){for(var n=[],o=0;o<a.length;o++)n.push(a[o].innerHTML);n=n.join("|")}s&&r&&n&&l&&FavSet("add",i,s,r,n,l)}BtnFav()}}function Favorite(){if(CanUseStorage()){favStorage=localStorage.getItem("mechords_favorite");var e=$(".post-list button").all;if(e.length)for(var t=startFav=0;t<e.length;t++){var i=e[t];i.classList.remove("_none");var s=i.parentNode.className.match(/post\-(\d+)/);(s=s?s[1]:0)&&FavFind(s)&&i.classList.add("-active"),i.removeEventListener("click",FavListener),i.addEventListener("click",FavListener)}}}function FavSet(e,t,i,s,r,l){var a,n=$(".post-"+t).all;if(n.length)for(var o=0;o<n.length;o++){var c=$("button,.btn.-like",n[o]).all;if(c.length)for(var d=0;d<c.length;d++)"add"==e?c[d].classList.add("-active"):"del"==e&&c[d].classList.remove("-active")}favStorage=localStorage.getItem("mechords_favorite"),t&&(a=(a=JSON.parse(favStorage))||{},"add"==e?i&&s&&r&&l&&(a[t]=[i,s,r,l]):"del"==e&&delete a[t],localStorage.setItem("mechords_favorite",JSON.stringify(a)))}function FavoriteRes(e){if(Stope(e=e||window.event),t=localStorage.getItem("mechords_favorite"),win.scrollTo(0,0),t&&Object.keys(JSON.parse(t)).length){var t=JSON.parse(t),i=Object.keys(t);if(i.length){for(var s="",r=0;r<i.length;r++){var l=i[r],a=t[l];s+="<li>"+CreateList(l,a[1],a[0],a[3],a[2].split("|"))+"</li>"}body.classList.add("_disable-scroll"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth(),search_txt.value="คอร์ดเพลงที่ถูกใจ",search_cls.classList.remove("_none"),lightBox.classList.remove("_none"),lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide">'+s+"</ul></div>";var n=$(".post-list",lightBox).self;n&&(n.removeEventListener("click",Stope),n.addEventListener("click",Stope)),Favorite(),search_txt.focus()}}}function FavItem(e,t){if(e&&t){if(FavFind(e))FavSet("del",e),t.classList.remove("-active");else{var i=pageURL.split(/[\#\?\&]/)[0],s=$("h3",postItem).self.innerHTML,r=$(".item-tags a",postItem).all,l="";if(r.length)for(var a=0;a<r.length;a++)l+=(0!=a?"|":"")+r[a].innerText;var n=$("img",postItem).self,o=$(".vdo",postItem).self,c=$("iframe",o).self;FavSet("add",e,i,s,l,n=n?n.getAttribute("src"):c&&(n=!!(n=c.src.match(/embed\/(.*)/))&&n[1].split(/\?/)[0])?"https://i.ytimg.com/vi/"+n+"/default.jpg":""),t.classList.add("-active")}BtnFav()}}function ScrollPos(){var e,t,i,s;me_scroll=$(".me-scroll"),me_scroll.self&&(e=$("#body").left,t=$("#body").width+2*me_scroll.width,i=$("#body").width,s=$(win).height/2-me_scroll.height/2,me_scroll.self.style.top=s+"px",$(win).width>t+36?(me_scroll.self.style.right="",me_scroll.self.style.left=e+i+18+"px"):(me_scroll.self.style.left="",me_scroll.self.style.right=0))}BtnFav(),function(r){if(r){var e=r.querySelector("select"),l=r.querySelectorAll("ol>li"),t=doc.getElementById("strum");function a(e){t||((t=doc.createElement("audio")).type="audio/mpeg",t.id="strum",t.loop=!0,t.hidden=!0,extens.appendChild(t)),n(),e=e.replace("#","s"),t.src="https://src.mechords.com/audios/acoustic-guitar-tuning/"+e+".mp3",t.play()}e.onchange=function(){n();for(var e=(this.value||this.options[this.selectedIndex].value).split("|"),t=0;t<e.length;t++)l[t].innerHTML=e[t]};for(var i=0;i<l.length;i++)l[i].addEventListener("click",function(){var e=this.innerText;e?(a(e),this.classList.add("strumming")):n()});function n(){if(t&&(t.pause(),t.currentTime=0),l)for(var e=0;e<l.length;e++)l[e].classList.remove("strumming")}doc.addEventListener("keyup",function(e){var t,i,s;!r.querySelector(".strumming")||null!=(t={96:"stop",97:5,98:4,99:3,100:2,101:1,102:0}[e.which||e.keyCode])&&("stop"!=t&&(s=(i=l[t]).innerText)?(a(s),i.classList.add("strumming")):n())})}}($("#guitar-tuning").self);var btn_scroll=$(".me-scroll button").all;if(btn_scroll.length){for(var g_scroll=$(".me-scroll>._global").self,c_scholl=$(".me-scroll>._chord").self,i=0;i<btn_scroll.length;i++)btn_scroll[i].addEventListener("click",function(e){Stope(e);var t,i=this.value;"up"==i?SmoothScroll(0):"down"==i?(ChordTb(),chordTb?g_scroll&&c_scholl&&(g_scroll.classList.add("_none"),c_scholl.classList.remove("_none"),(t=$("button",c_scholl).self)&&(CloseTooltip(),ChordScrollStart(t.value),ActiveScrollBtn(t)),ScrollPos()):SmoothScroll($("body").height+bottomSpace-$(win).height)):"stop"==i?(g_scroll.classList.remove("_none"),c_scholl.classList.add("_none"),ChordScrollStop(),ScrollPos()):(ChordScrollStart(i),ActiveScrollBtn(this))});var svg_down='<svg><path d="M16.59,10.942L12,15.522l-4.59-4.58L6,12.353l6,6l6-6L16.59,10.942z" /><path d="M16.59,5.647L12,10.228l-4.59-4.58L6,7.058l6,6l6-6L16.59,5.647z" /></svg>';function ActiveScrollBtn(e){var t=$(".me-scroll>._chord>button").all;if(t.length)for(var i=0;i<t.length;i++){var s=t[i];s.classList.remove("-active"),-1==s.value.indexOf("stop")&&(s.innerHTML="")}e&&"stop"!=e.value&&(e.innerHTML=svg_down,e.classList.add("-active"))}function SmoothScroll(e){var s=window.pageYOffset,r=e-s,l=1e3,a=null;window.requestAnimationFrame(function e(t){a=a||t;var i=t-a;window.scrollTo(0,EaseInOutCubic(i,s,r,l));i<l&&window.requestAnimationFrame(e)})}function EaseInOutCubic(e,t,i,s){return(e/=s/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t}}function Alert(e){var t;alertBox&&e&&(t='<div class="-inner"><pre>'+e+'</pre><button type="button" onclick="Xlert(event);">OK</button></div>',alertBox.innerHTML=t,alertBox.classList.remove("_none"))}function Xlert(e){Stope(e),alertBox&&(alertBox.innerHTML="",alertBox.classList.add("_none"))}function FixAutoHeight(){var e=$('[style*="height: auto"]').all;if(e.length)for(var t=0;t<e.length;t++)e[t].style.height="",e[t].getAttribute("style").length||e[t].removeAttribute("style");20<=++fixAutoHeightTime&&fixAutoHeightInterval&&clearInterval(fixAutoHeightInterval)}var fbComment=!1;function FBPlugin(){var e;$("#fb-comments").self&&200<=$(win).scrollTop&&!fbComment&&((e=doc.createElement("script")).async=!0,e.defer=!0,e.src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v8.0&appId=1458156584324917&autoLogAppEvents=1",body.appendChild(e),fbComment=!0)}function FncBundle(){MainList(),BalanceMainList(),MostReq1(),MostReq2(),ScrollPos(),FBPlugin()}doc.addEventListener("click",function(){ResetThePage()}),doc.addEventListener("DOMContentLoaded",function(e){FncBundle()}),win.addEventListener("scroll",function(){FncBundle()}),win.addEventListener("resize",function(){FncBundle()}),window.onload=LoadTime;