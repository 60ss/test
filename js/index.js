function BalanceMainList(){var e;emptyItem=$("#empty").self,640<=$(win).width?emptyItem||(e=$("article",mainList).all).length&&e.length%2==1&&((emptyItem=doc.createElement("li")).setAttribute("id","empty"),emptyItem.innerHTML="<aside></aside>",mainList.appendChild(emptyItem)):emptyItem&&mainList.removeChild(emptyItem)}function CreateList(e,t,i,r,l,a){var s="คอร์ดเพลง "+t,n="";if("object"==typeof l){var o=[t];/\s*[\(|\?]/.test(t)&&(o.push(t.split(/\s*[\(|\?]/)[0]),/\s*\(/.test(t)&&o.push(t.match(/\((.*)\)/)[1]));for(var c=0;c<l.length;c++){var d=l[c];-1===ignoreLabels.indexOf(d)&&-1===o.indexOf(d)&&(n+='<a href="'+mechords+"/search/label/"+encodeURIComponent(d)+'" title="คอร์ดเพลง '+d+'">'+d+"</a>")}}else n+='<a href="'+i+'" title="คอร์ดเพลง '+l+'">'+l+"</a>";var v=a?"<footer><time>"+a+"</time></footer>":"",h=CanUseStorage()&&0!=e?'<button type="button"></button>':"",f="";return r.match(/vi\/(.*)\/(0|default|maxresdefault)/)&&(f='class="-ytimg"'),'<article class="post-'+e+'"><figure><a href="'+i+'" title="'+s+'"><img '+f+' src="'+(r=r.replace("/s72-c/","/s120/"))+'" alt="'+s+'" /></a></figure><header><a href="'+i+'" title="'+s+'"><h3>'+t+"</h3></a><span>"+n+"</span></header>"+v+h+"</article>"}function BrowserIs(e){var t=navigator.userAgent,i=-1!=(t.indexOf("Opera")||t.indexOf("OPR"))?"opera":-1!=t.indexOf("Chrome")?"chrome":-1!=t.indexOf("Safari")?"safari":-1!=t.indexOf("Firefox")?"firefox":-1!=t.indexOf("MSIE")||1==!!doc.documentMode?"ie":void 0;return i===e}function CanUseWebP(){var e=doc.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")}function CanUseSpeech(){return"SpeechRecognition"in window||"webkitSpeechRecognition"in window}function CanUseStorage(){var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}function AreYouReady(){return!!("querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach)}function Stope(e){(e=e||window.event).cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}function Shuffler(e){if(e&&1<e.length){for(var t=e.length-1;0<t;t--){var i=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[i],e[i]=r}return e}}function WriteScript(e){var t;scriptBox&&((t=document.createElement("script")).src=mechords+e,scriptBox.appendChild(t))}function ScrollbarWidth(){var e=doc.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",body.appendChild(e);var t=doc.createElement("div");e.appendChild(t);var i=e.offsetWidth-t.offsetWidth;return e.parentNode.removeChild(e),i+"px"}function CopyToClipboard(e){var t;e&&extens&&((t=doc.createElement("textarea")).value=e,extens.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),extens.removeChild(t))}function M01(){var e=win.location.search;return/[\?\&]m=1/.test(e)}function LoadTime(){var e=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;e&&console.log("ระยะเวลาในการโหลดหน้าเว็บ "+e/1e3+" วินาที")}function ResetQ(){win.scrollTo(0,0),qNotFound=!1,iQ=0,qIDs=[],qListA=[],qListB=[],qListC=[],lightBox||(lightBox=doc.createElement("div"),extens.appendChild(lightBox)),lightBox.innerHTML=postHolder,lightBox.classList.remove("_none")}var win=window,doc=document,html=doc.documentElement,body=doc.body||doc.querySelector("body");function $(e,t){var e=e,i=void 0!==win.pageYOffset,r="CSS1Compat"===(doc.compatMode||""),l={all:0,self:0,width:0,height:0,top:0,left:0,topScroll:0,bottomScroll:0,leftScroll:0,rightScroll:0};if(e.self==window)return{width:win.innerWidth||body.clientWidth,height:win.innerHeight||body.clientHeight,scrollTop:i?win.pageYOffset:r?body.scrollTop:0,scrollLeft:i?win.pageXOffset:r?body.scrollLeft:0};if(e==document)return{width:window.innerWidth||body.clientWidth||html.clientWidth,height:window.innerHeight||body.clientHeight||html.clientHeight};if("string"==typeof e){if((e=t?t.querySelectorAll(e):document.querySelectorAll(e)).length){var a=e[0].getBoundingClientRect();return{all:e,self:e[0],width:e[0].innerWidth||e[0].clientWidth,height:e[0].innerHeight||e[0].clientHeight,top:e[0].offsetTop,left:e[0].offsetLeft,topScroll:a.top,bottomScroll:a.bottom,leftScroll:a.left,rightScroll:a.right}}return l}if(e){a=e.getBoundingClientRect();return{all:0,self:e,width:e.innerWidth||e.clientWidth,height:e.innerHeight||e.clientHeight,top:e.offsetTop,left:e.offsetLeft,topScroll:a.top,bottomScroll:a.bottom,leftScroll:a.left,rightScroll:a.right}}return l}function ResetThePage(){header&&(header.classList.remove("-search"),header.classList.remove("_none"),header.removeAttribute("style")),lightBox&&(lightBox.classList.add("_none"),lightBox.innerHTML="",lightBox.removeAttribute("style")),search_txt&&(search_txt.value=""),search_cls&&search_cls.classList.add("_none"),shareBox&&shareBox.classList.add("_none"),body&&0==$("#chord-scroll").self&&body.classList.remove("_disable-scroll")}var mechords="https://www.mechords.com",pageURL=win.location.href,searchLabel=(searchLabel=pageURL.match(/search\/label\/(.*)/))?"-/"+searchLabel[1].split("?")[0]:"",searchQuery=pageURL.match(/[\?\&]q=(.*)/);searchQuery=!!(searchQuery=!!searchQuery&&searchQuery[1].split("&")[0])&&decodeURI(searchQuery);var ignoreLabels=["คอร์ดเพลง","recently","trending","สตริง","เพื่อชีวิต","ลูกกรุง","ลูกทุ่ง","ลูกทุ่งเพื่อชีวิต","หมอลำ","อีสาน","ใต้","คำเมือง","ลาว","สากล","เพลงคู่","Cover","คนโสด","เพลงจีบ","ชิลๆ","อินเลิฟ","อกหัก","เหงา","เศร้า","คิดถึง","ฤดูร้อน","ฤดูฝน","ฤดูหนาว","ปีใหม่","วันพ่อ","วันแม่","new","shorten-data","visiting-data","0.0","โควิด-19","เร็กเก้/สกา","อินดี้โฟล์ก","แร็พ"],XL=1035.98<$(doc).width,fullScreen=1279.98<$(doc).width&&719.98<$(doc).height,scriptBox=$(".script-box").self,header=$("#header").self,footer=$("#footer").self,theTitle=$("#header h1").self,brand=$("#header .brand").self,searchBox=$("#header .search-box").self,search_txt=$(".search-box>.-txt").self,search_cls=$(".search-box>.-clear").self,search_btn=$(".search-box>.-submit").self,search_mic=$(".search-box>.-speech").self,lightBox=$("#extensions .light-box").self,alertBox=$("#extensions .alert-box").self,extens=$("#extensions").self,mainList=$("#main-list").self,mostList=$("#most-list").self,mostList1=$("#most-list-1").self,mostList2=$("#most-list-2").self,similarList=$("#similar .post-list").self,emptyItem=$("#empty").self,postItem=$("#post-item").self,itemTitle=$("#post-item header h3").self,navigation=$("#navigation").self,bottomSpace=200,chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self,btnFav=$("#category .btn-fav").self,favRes=$("#extensions .favorite-res").self;function ChordTb(){chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self}var fixAutoHeightInterval,shareBox=$(".share-box").self,keySelector=$(".select.-key>select").self,defaultSelectIndex=0,btn_share=$(".btn.-share").self,btn_switch=$(".btn.-switch").self,btn_lightbox=$(".btn.-lightbox").self,btn_like=$(".btn.-like").self,chk_gc=$(".chk.-gc > input").self,chk_simplify=$(".chk.-simplify > input").self,chk_cr=$(".chk.-cr > input").self,accordion=$(".accordion").self,a_pr=$(".accordion>.-pr").self,a_ps=$(".accordion>.-ps").self,a_gc=$(".accordion>.-gc").self,a_cr=$(".accordion>.-cr").self,fixAutoHeightTime=0,postHolder='<div class="wrapper"><ul class="post-list -wide -placeholder"><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li><li><div><div></div><div><div></div><div></div></div></div></li></ul></div>',iQ=0,qByTitle=!1,qNotFound=!1,qListA=[],qListB=[],qListC=[],qIDs=[];!function(e){var t,i,r;e&&(!BrowserIs("ie")||(t=e.childNodes[0])&&(r="https://src.mechords.com/img/",(i=doc.createElement("div")).innerHTML='<div class="wrapper alert">คุณกำลังใช้เว็บบราวเซอร์ที่ล้าสมัย เพื่อการใช้งานเว็บไซต์อย่างเต็มประสิทธิภาพ ขอแนะนำให้ใช้หนึ่งในเบราว์เซอร์ฟรีที่ทันสมัยเหล่านี้แทนเถิด<br/><ul><li><a href="https://www.google.com/chrome/browser/desktop/" rel="nofollow" target="_blank"><img src="'+r+'chrome.png"/></a></li><li><a href="https://opera.com/" rel="nofollow" target="_blank"><img src="'+r+'opera.png"/></a></li><li><a href="https://www.microsoftedgeinsider.com/" rel="nofollow" target="_blank"><img src="'+r+'edge.png"/></a></li><li><a href="https://www.mozilla.com/firefox/" rel="nofollow" target="_blank"><img src="'+r+'firefox.png"/></a></li></ul></div><br/>',e.insertBefore(i,t)))}($("#billboard").self),function(l){var a,s,n,e;l&&((a=l.getAttribute("data-dropdown"))&&(s=doc.createElement("li"),(n=$(".btn-down",l).self)&&(n.classList.remove("_none"),n.addEventListener("click",function(e){e.preventDefault();var t=$(".-dropdown",l).self;if(!t){(t=doc.createElement("ul")).setAttribute("class"," -dropdown"),a=a.split("|");for(var i=0;i<a.length;i++){var r=a[i];t.innerHTML+='<li><a href="/search/label/'+encodeURIComponent(r)+'">'+r.replace(/อารมณ์|เพลง|เทศกาล/g,"")+"</a></li>"}s.innerHTML='<a class="_i" href="#" ><svg style="margin:4px auto;"><path d="M18 15l-6-6-6 6h12z"/></svg></a>',s.setAttribute("class","btn-up"),t.appendChild(s),l.appendChild(t)}this.classList.add("_none"),t.classList.remove("_none"),s&&s.addEventListener("click",function(e){e.preventDefault(),n.classList.remove("_none"),t.classList.add("_none")})}))),(e=$(".btn-fav a",l).self)&&e.addEventListener("click",function(e){e.preventDefault()}))}($("#category").self),function(){function i(){""!==search_txt.value&&("คอร์ดเพลงที่ถูกใจ"==search_txt.value?FavoriteRes():searchQuery?gcseReq():(ResetQ(),SearchReq(search_txt.value)))}var r,e,t;AreYouReady()&&searchBox&&header&&search_txt&&search_cls&&search_btn&&search_mic&&extens&&(search_txt.addEventListener("focus",function(){header.classList.add("-search")}),search_txt.addEventListener("keyup",function(e){27==(e.which||e.keycode)&&ResetThePage(),""!==this.value?search_cls.classList.remove("_none"):ResetThePage()}),search_cls.addEventListener("click",function(){ResetThePage(),search_txt.focus()}),searchBox.addEventListener("click",function(e){Stope(e)}),searchBox.addEventListener("submit",function(e){e.preventDefault(),i()}),CanUseSpeech()&&(search_mic.classList.remove("_none"),(r=new webkitSpeechRecognition).continuous=!1,r.interimResults=!1,r.lang="th-TH",search_mic.addEventListener("click",function(){search_txt.value="",search_mic.classList.add("-active"),r.start(),r.onresult=function(e){var t=e.results[0][0].transcript;search_txt.value=t,r.stop(),i()},r.onspeechend=function(){r.stop(),search_mic.classList.remove("-active")},r.onerror=function(){r.stop(),search_mic.classList.remove("-active")}})),e=$("#header .rnd.-q").self,t=$("#header .rnd.-x").self,e&&t&&e.addEventListener("click",function(e){Stope(e),ResetQ(),SearchReq("สุ่มคอร์ดเพลง")}))}();var recently=!1;function RecentlyReq(){$("#recently").self&&!recently&&$("#recently").topScroll-$(win).height<=0&&WriteScript("/feeds/posts/default/-/recently?alt=json-in-script&max-results=150&callback=RecentlyRes")}function RecentlyRes(e){if(e.feed&&e.feed.entry){var t=$("#recently li").all,i=e.feed.entry;if(i.length){recently=!0;for(var r=18<(i=3<i.length?Shuffler(i):i).length?18:i.length,l=0;l<r;l++)for(var a=i[l],s=a.link,n=0;n<s.length;n++){if("alternate"===(h=s[n]).rel){var o,c,d=a.id.$t.split(".post-")[1],v=a.title.$t,h=h.href,f=a.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/);f?(c=(f=f[1]).match(/vi\/(.*)\/0|default|maxresdefault/))&&0:f=(o=a.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))?(c=(f=o[1]).match(/embed\/(.*)(\/\?)*/))?"https://i.ytimg.com/vi/"+c[1]+"/0.jpg":"":"";for(var m=[],g=0;g<a.category.length;g++)m.push(a.category[g].term);var p="",u=a.published.$t;u&&(u=u.split("T")[0].split("-"))[1]&&u[2]&&(p=u[2]+"/"+parseInt(u[1])+"/",p+=(parseInt(u[0])+543).toString().substr(2)),t[l]&&(t[l].innerHTML=CreateList(d,v,h,f,m,p))}}Favorite()}}scriptBox.innerHTML=""}function MainList(){if(mainList&&($(mainList).topScroll+$(win).scrollTop-$(win).height-$(win).scrollTop<=0&&0<$(".-lazy",mainList).all.length)){var e=$("article",mainList).all;if(e.length)for(var t=0;t<e.length;t++){var i=e[t],r=$("img",i).self;if($(i).topScroll+$(win).scrollTop-$(win).height-$(win).scrollTop<=0&&!r){var l=i.getAttribute("data-link"),a=i.getAttribute("data-title"),s=$("figure",i).self,n=s.getAttribute("data-img");if(l&&a&&n){var o="";n.match(/vi\/(.*)\/0|default|maxresdefault/)&&(o='class="-ytimg"'),n=n.replace("/s72-c/","/s120/"),s.innerHTML='<a href="'+l+'" title="คอร์ดเพลง '+a+'"><img '+o+' src="'+n+'" alt="หน้าปก เพลง '+a+'" /></a>',i.classList.remove("-lazy");var c=$("span>a",i).all;if(c.length){var d=[a];/\s*[\(|\?]/.test(a)&&(d.push(a.split(/\s*[\(|\?]/)[0]),/\s*\(/.test(a)&&d.push(a.match(/\((.*)\)/)[1]));for(var v=0;v<c.length;v++){var h=c[v],f=h.innerText;(-1<d.indexOf(f)||-1<ignoreLabels.indexOf(f))&&h.parentNode.removeChild(h)}}var m,g=$("time",i).self;g&&(m=g.innerHTML.replace(/\./g,"/"),g.innerHTML=m),Favorite(),MoreList()}}}}}function MoreList(){var e,t,i;BalanceMainList(),navigation&&!$(".-loadmore",navigation).self&&(e=$("article",mainList).all.length,t="/feeds/posts/default/"+searchLabel+"?alt=json-in-script&start-index="+(e=0===e?1:e+1)+"&max-results=1&callback=MoreBtn",i=doc.location.search,(i=!/updated-max=/.test(i))||(t="/feeds/posts/default/"+searchLabel+"?alt=json-in-script&start-index="+e+"&max-results=1&callback=NextBtn"),WriteScript(t)),fixAutoHeightInterval||(fixAutoHeightTime=0,fixAutoHeightInterval=setInterval(FixAutoHeight,300))}function NextBtn(e){var t;e.feed&&e.feed.entry||(t=$(".-next",navigation).self)&&navigation.removeChild(t),scriptBox.innerHTML=""}function MoreBtn(e){var t,i;e.feed&&e.feed.entry?$(".-loadmore",navigation).self||((t=doc.createElement("a")).classList.add("-loadmore"),t.setAttribute("title","โหลดคอร์ดเพลงเพิ่มเติม"),t.setAttribute("href","javascript:void(0);"),t.setAttribute("onclick","MoreReq(this)"),t.innerHTML='<svg><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg><span>แสดงเพิ่มเติม</span>',navigation.insertBefore(t,navigation.childNodes[0])):(i=$(".-next",navigation).self)&&navigation.removeChild(i),scriptBox.innerHTML=""}function MoreReq(){fixAutoHeightInterval=null,navigation.innerHTML="<a href='#' class='_loading'><svg><circle cx='17' cy='17' r='15'/></svg></a>";var e=$("article",mainList).all,t=e?e.length:1,i=20;WriteScript("/feeds/posts/default/"+searchLabel+"?alt=json-in-script&start-index="+(t=1<t?t+1:t)+"&max-results="+(i=emptyItem?i+1:i)+"&callback=MoreRes")}function MoreRes(e){if(e.feed&&e.feed.entry){var t=e.feed.entry;if(t.length){for(var i="",r=0;r<t.length;r++){var l=t[r],a=l.link;if(a.length)for(var s=0;s<a.length;s++)if("alternate"===a[s].rel){var n=l.id.$t.split(".post-")[1],o=l.title.$t,c=[o];/\s*[\(|\?]/.test(o)&&(c.push(o.split(/\s*\(/)[0]),c.push(o.match(/\((.*)\)/)[1]));var d,v,h=a[s].href,f=l.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/);f=f?f[1]:(d=l.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(v=(f=d[1]).match(/embed\/(.*)(\/\?)*/))?"https://i.ytimg.com/vi/"+v[1]+"/0.jpg":"";for(var m=l.category,g=[],p=0;p<m.length;p++)g.push(m[p].term);var u="",L=l.published.$t;L&&(L=L.split("T")[0].split("-"))[1]&&L[2]&&(u=L[2]+"/"+parseInt(L[1])+"/",u+=(parseInt(L[0])+543).toString().substr(2));var b=-1<g.indexOf("recently")?' class="recently"':-1<g.indexOf("trending")?' class="trending"':"";i+="<li"+b+">"+CreateList(n,o,h,f,g,u)+"</li>"}}setTimeout(function(){emptyItem&&mainList.removeChild(emptyItem),$("._loading",navigation).self&&navigation.removeChild($("._loading",navigation).self),mainList.innerHTML+=i,Favorite(),MoreList()},50)}}}function MostReq(){if(mostList&&($("#most-list").topScroll+$(win).scrollTop-$(win).height-$(win).scrollTop<=0&&0<$(".-lazy",mostList).all.length)){var e=$("#most-list article").all;if(e.length)for(var t=0;t<e.length;t++){var i,r=e[t];$("img",r).self||(i=r.className.match(/post\-(\d+)\s\-lazy/))&&WriteScript("/feeds/posts/default/?alt=json-in-script&max-results=1&q="+i[1]+"&callback=MostRes")}}}var mostIDs=[];function MostRes(e){if(e.feed)if(e.feed.entry){var t=e.feed.entry;if(t.length)for(var i=0;i<t.length;i++){var r=t[i];if((S=$("#most-list .post-"+(y=r.id.$t.split(".post-")[1])).self)&&-1==mostIDs.indexOf(y)){mostIDs.push(y);var l,a,s=S.getAttribute("data-link"),n=S.getAttribute("data-title"),o=$("figure",S).self,c=r.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/),d="";if(c?(a=(c=c[1]).match(/vi\/(.*)\/0|default|maxresdefault/))&&(d='class="-ytimg"'):c=!!(l=r.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(d='class="-ytimg"',!!(a=(c=l[1]).match(/embed\/(.*)(\/\?)*/))&&"https://i.ytimg.com/vi/"+a[1]+"/0.jpg"),s&&n&&o){S.removeAttribute("data-link"),S.removeAttribute("data-title"),c&&(c=c.replace("/s72-c/","/s120/"),o.innerHTML='<a href="'+s+'" title="คอร์ดเพลง '+n+'"><img '+d+' src="'+c+'" alt="หน้าปก เพลง '+n+'" /></a>'),S.classList.remove("-lazy");var v=[n];/\s*[\(|\?]/.test(n)&&(v.push(n.split(/\s*[\(|\?]/)[0]),v.push(n.match(/\((.*)\)/)[1]));var h=r.category,f="";if(h.length)for(var m=0;m<h.length;m++){var g=h[m].term;/recently|trending/.test(g)?S.parentNode.setAttribute("class",g):v.indexOf(g)<0&&ignoreLabels.indexOf(g)<0&&(f+="<a href='"+mechords+"/search/label/"+encodeURIComponent(g)+"' title='คอร์ดเพลง "+g+"'>"+g+"</a>")}var p=$(".-loading",S).self;p&&(p.classList.remove("-loading"),p.innerHTML=f);var u,L=r.published.$t,b=$("time",S).self;L&&!b&&(u=(L=L.split("T")[0].split("-"))[2]+"/"+parseInt(L[1])+"/",u+=(parseInt(L[0])+543).toString().substr(2),(b=doc.createElement("footer")).innerHTML="<time>"+u+"</time>",S.appendChild(b))}}}Favorite()}else{var x=e.feed.link;if(x.length)for(var y,S,m=0;m<x.length;m++){"self"===(s=x[m]).rel&&(y=s.href.split("&q="))&&(S=$(".post-"+y[1]).self)&&WriteScript("/feeds/posts/default/-/"+(n=S.getAttribute("data-title"))+"?alt=json-in-script&max-results=10&callback=MostRes")}}scriptBox.innerHTML=""}var totalPost=1500;function TotalRes(e){e.feed&&e.feed.entry&&(totalPost=e.feed.openSearch$totalResults.$t)}WriteScript("/feeds/posts/default/-/คอร์ดเพลง?alt=json-in-script&callback=TotalRes&max-results=1");var rndList=!1,q_string="";function SearchReq(e){var t=1;"สุ่มคอร์ดเพลง"==e?(q_string=e,e="",t=Math.floor(Math.random()*(totalPost-150))+1):-1<e.indexOf("rnd:")?(e=e.split("rnd:")[1],e="&q="+(q_string=e),rndList=!0):-1<e.indexOf("default:")?(e=e.split("default:")[1],e="&q="+(q_string=e),qNotFound=!(rndList=!1)):(e="&q=title%3A"+(q_string=e),rndList=!1),search_txt.value=q_string,search_cls.classList.remove("_none"),header.classList.add("-search"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth(),body.classList.add("_disable-scroll"),WriteScript("/feeds/posts/default/?alt=json-in-script&start-index="+t+"&max-results=150&callback=SearchRes"+e)}function SearchRes(e){var t;if(e.feed&&e.feed.entry){var i=e.feed.entry;if((i=rndList&&18<i.length?Shuffler(i):i).length){for(var r="สุ่มคอร์ดเพลง"==q_string?18:17,l=i.length>r-iQ?r-iQ:i.length,a=[],s=0;s<l;s++){var n=i[s],o=n.link;if(o.length)for(var c=0;c<o.length;c++)if("alternate"===o[c].rel){var d=n.id.$t.split(".post-")[1];if(-1==qIDs.indexOf(d)){qIDs.push(d);var v=n.title.$t;if(-1==["shorten","visiting"].indexOf(v)){var h,f,m=o[c].href,g=n.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/);g=g?g[1]:(h=n.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(f=(g=h[1]).match(/embed\/(.*)(\/\?)*/))?"https://i.ytimg.com/vi/"+f[1]+"/0.jpg":"";for(var p=[],u=0;u<n.category.length;u++)p.push(n.category[u].term);var L="",b=n.published.$t;b&&(b=b.split("T")[0].split("-"))[1]&&b[2]&&(L=b[2]+"/"+parseInt(b[1])+"/",L+=(parseInt(b[0])+543).toString().substr(2));var x=-1<p.indexOf("recently")?"recently":-1<p.indexOf("trending")&&"trending";rndList?a.push([x,CreateList(d,v,m,g,p,L)]):v===search_txt.value?qListA.push([x,CreateList(d,v,m,g,p,L)]):-1<v.indexOf(search_txt.value)?qListB.push([x,CreateList(d,v,m,g,p,L)]):qListC.push([x,CreateList(d,v,m,g,p,L)])}}}}l<r&&!qNotFound?SearchReq("default:"+q_string):rndList||(a=qListA.concat(qListB,qListC));var y=$(".post-list",lightBox).self;if(y&&a.length){for(var S=$("li",y).all,_=a.length>r?r:a.length,u=0;u<_;u++){var w=a[u][0],T=a[u][1];if(S[u]&&(S[u].innerHTML=T,w&&S[u].classList.add(w),u==_-1)){S[_]&&a.length>r-1&&(S[_].innerHTML=CreateList(0,"ดูผลการค้นหาเพิ่มเติม..","/search?q="+search_txt.value,"https://src.mechords.com/img/G.jpg",search_txt.value));for(var k=$("li>div",y).all,B=0;B<k.length;B++)y.removeChild(k[B].parentNode)}}y.removeEventListener("click",Stope),y.addEventListener("click",Stope)}Favorite()}}else{qNotFound?(Alert("ว้า.. ยังไม่มีคอร์ดเพลงนี้เลย<br/>แต่ยังสามารถแนะนำเพลงผ่านทาง<br/> <a href='https://www.facebook.com/mechords' target='_blank'>เฟซบุ๊คแฟนเพจ</a> ได้อยู่นะจ๊ะ"),t=setInterval(function(){-1<alertBox.className.indexOf("_none")&&(clearInterval(t),ResetThePage(),search_txt.focus())},300)):SearchReq("default:"+q_string)}scriptBox.innerHTML=""}function SearchReqRnd(e){ResetQ(),SearchReq("rnd:"+e)}var favStorage,oldFav=localStorage.getItem("favorites");if(oldFav&&(oldFav=JSON.parse(oldFav),Object.keys(oldFav).length)){var items=Object.keys(oldFav);if(items.length){for(var li="",i=0;i<items.length;i++){var id=items[i],data=oldFav[id],title=data[1],link=mechords+"/"+data[0]+".html";link=(link=data[0].match(/(\d{4}\/\d{2}\/[^.]*)/))?mechords+"/"+link[1]+".html":"";var img="https://i.ytimg.com/vi/"+data[3]+"/default.jpg",lbls=data[2];"object"==typeof lbls&&(lbls=lbls.join("|")),FavFind(id=id.substr(1))||FavSet("add",id,link,title,lbls,img)}localStorage.removeItem("favorites"),BtnFav(),Favorite()}}function BtnFav(){var e;CanUseStorage()&&btnFav&&(favStorage=localStorage.getItem("mechords_favorite"),(e=$("a",btnFav).self)&&(favStorage&&Object.keys(JSON.parse(favStorage)).length?e.classList.add("-active"):e.classList.remove("-active"),e.removeEventListener("click",FavoriteRes),e.addEventListener("click",FavoriteRes)))}function FavFind(e){return!!(favStorage=localStorage.getItem("mechords_favorite"))&&!!(favStorage=JSON.parse(favStorage))[e]}function FavListener(e){Stope(e=e||window.event);var t=e.target.parentNode,i=t.className.match(/post\-(\d+)/);if(i=!!i&&i[1]){if(FavFind(i))FavSet("del",i);else{var r=(r=$("header a",t).self)?r.getAttribute("href"):"",l=(l=$("h3",t).self)?l.innerHTML:"",a=(a=$("img",t).self)?a.getAttribute("src"):"",s=$("span a",t).all;if(s.length){for(var n=[],o=0;o<s.length;o++)n.push(s[o].innerHTML);n=n.join("|")}r&&l&&n&&a&&FavSet("add",i,r,l,n,a)}BtnFav()}}function Favorite(){if(CanUseStorage()){favStorage=localStorage.getItem("mechords_favorite");var e=$(".post-list button").all;if(e.length)for(var t=startFav=0;t<e.length;t++){var i=e[t];i.classList.remove("_none");var r=i.parentNode.className.match(/post\-(\d+)/);(r=r?r[1]:0)&&FavFind(r)&&i.classList.add("-active"),i.removeEventListener("click",FavListener),i.addEventListener("click",FavListener)}}}function FavSet(e,t,i,r,l,a){var s,n=$(".post-"+t).all;if(n.length)for(var o=0;o<n.length;o++){var c=$("button,.btn.-like",n[o]).all;if(c.length)for(var d=0;d<c.length;d++)"add"==e?c[d].classList.add("-active"):"del"==e&&c[d].classList.remove("-active")}favStorage=localStorage.getItem("mechords_favorite"),t&&(s=(s=JSON.parse(favStorage))||{},"add"==e?i&&r&&l&&a&&(s[t]=[i,r,l,a]):"del"==e&&delete s[t],localStorage.setItem("mechords_favorite",JSON.stringify(s)))}function FavoriteRes(e){if(Stope(e=e||window.event),t=localStorage.getItem("mechords_favorite"),win.scrollTo(0,0),t&&Object.keys(JSON.parse(t)).length){var t=JSON.parse(t),i=Object.keys(t);if(i.length){for(var r="",l=0;l<i.length;l++){var a=i[l],s=t[a];r+="<li>"+CreateList(a,s[1],s[0],s[3],s[2].split("|"))+"</li>"}body.classList.add("_disable-scroll"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth(),search_txt.value="คอร์ดเพลงที่ถูกใจ",search_cls.classList.remove("_none"),lightBox.classList.remove("_none"),lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide">'+r+"</ul></div>";var n=$(".post-list",lightBox).self;n&&(n.removeEventListener("click",Stope),n.addEventListener("click",Stope)),Favorite(),search_txt.focus()}}}function FavItem(e,t){if(e&&t){if(FavFind(e))FavSet("del",e),t.classList.remove("-active");else{var i=pageURL.split(/[\#\?\&]/)[0],r=$("h3",postItem).self.innerHTML,l=$(".item-tags a",postItem).all,a="";if(l.length)for(var s=0;s<l.length;s++)a+=(0!=s?"|":"")+l[s].innerText;var n=$("img",postItem).self,o=$(".vdo",postItem).self,c=$("iframe",o).self;FavSet("add",e,i,r,a,n=n?n.getAttribute("src"):c&&(n=!!(n=c.src.match(/embed\/(.*)/))&&n[1].split(/\?/)[0])?"https://i.ytimg.com/vi/"+n+"/default.jpg":""),t.classList.add("-active")}BtnFav()}}function ScrollPos(){var e,t,i,r;me_scroll=$(".me-scroll"),me_scroll.self&&(e=$("#body").left,t=$("#body").width+2*me_scroll.width,i=$("#body").width,r=$(win).height/2-me_scroll.height/2,me_scroll.self.style.top=r+"px",$(win).width>t+36?(me_scroll.self.style.right="",me_scroll.self.style.left=e+i+18+"px"):(me_scroll.self.style.left="",me_scroll.self.style.right=0))}BtnFav(),function(l){if(l){var e=l.querySelector("select"),a=l.querySelectorAll("ol>li"),t=doc.getElementById("strum");function s(e){t||((t=doc.createElement("audio")).type="audio/mpeg",t.id="strum",t.loop=!0,t.hidden=!0,extens.appendChild(t)),n(),e=e.replace("#","s"),t.src="https://src.mechords.com/audios/acoustic-guitar-tuning/"+e+".mp3",t.play()}e.onchange=function(){n();for(var e=(this.value||this.options[this.selectedIndex].value).split("|"),t=0;t<e.length;t++)a[t].innerHTML=e[t]};for(var i=0;i<a.length;i++)a[i].addEventListener("click",function(){var e=this.innerText;e?(s(e),this.classList.add("strumming")):n()});function n(){if(t&&(t.pause(),t.currentTime=0),a)for(var e=0;e<a.length;e++)a[e].classList.remove("strumming")}doc.addEventListener("keyup",function(e){var t,i,r;!l.querySelector(".strumming")||null!=(t={96:"stop",97:5,98:4,99:3,100:2,101:1,102:0}[e.which||e.keyCode])&&("stop"!=t&&(r=(i=a[t]).innerText)?(s(r),i.classList.add("strumming")):n())})}}($("#guitar-tuning").self);var btn_scroll=$(".me-scroll button").all;if(btn_scroll.length){for(var g_scroll=$(".me-scroll>._global").self,c_scholl=$(".me-scroll>._chord").self,i=0;i<btn_scroll.length;i++)btn_scroll[i].addEventListener("click",function(e){Stope(e);var t,i=this.value;"up"==i?SmoothScroll(0):"down"==i?(ChordTb(),chordTb?g_scroll&&c_scholl&&(g_scroll.classList.add("_none"),c_scholl.classList.remove("_none"),(t=$("button",c_scholl).self)&&(CloseTooltip(),ChordScrollStart(t.value),ActiveScrollBtn(t)),ScrollPos()):SmoothScroll($("body").height+bottomSpace-$(win).height)):"stop"==i?(g_scroll.classList.remove("_none"),c_scholl.classList.add("_none"),ChordScrollStop(),ScrollPos()):(ChordScrollStart(i),ActiveScrollBtn(this))});var svg_down='<svg><path d="M16.59,10.942L12,15.522l-4.59-4.58L6,12.353l6,6l6-6L16.59,10.942z" /><path d="M16.59,5.647L12,10.228l-4.59-4.58L6,7.058l6,6l6-6L16.59,5.647z" /></svg>';function ActiveScrollBtn(e){var t=$(".me-scroll>._chord>button").all;if(t.length)for(var i=0;i<t.length;i++){var r=t[i];r.classList.remove("-active"),-1==r.value.indexOf("stop")&&(r.innerHTML="")}e&&"stop"!=e.value&&(e.innerHTML=svg_down,e.classList.add("-active"))}function SmoothScroll(e){var r=window.pageYOffset,l=e-r,a=1e3,s=null;window.requestAnimationFrame(function e(t){s=s||t;var i=t-s;window.scrollTo(0,EaseInOutCubic(i,r,l,a));i<a&&window.requestAnimationFrame(e)})}function EaseInOutCubic(e,t,i,r){return(e/=r/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t}}function Alert(e){var t;alertBox&&e&&(t='<div class="-inner"><pre>'+e+'</pre><button type="button" onclick="Xlert(event);">OK</button></div>',alertBox.innerHTML=t,alertBox.classList.remove("_none"))}function Xlert(e){Stope(e),alertBox&&(alertBox.innerHTML="",alertBox.classList.add("_none"))}function FixAutoHeight(){var e=$('[style*="height: auto"]').all;if(e.length)for(var t=0;t<e.length;t++)e[t].style.height="",e[t].getAttribute("style").length||e[t].removeAttribute("style");20<=++fixAutoHeightTime&&fixAutoHeightInterval&&clearInterval(fixAutoHeightInterval)}var fbComment=!1;function FBPlugin(){var e;$("#fb-comments").self&&200<=$(win).scrollTop&&!fbComment&&((e=doc.createElement("script")).async=!0,e.defer=!0,e.src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v8.0&appId=1458156584324917&autoLogAppEvents=1",body.appendChild(e),fbComment=!0)}function FncBundle(){RecentlyReq(),MainList(),BalanceMainList(),MostReq(),ScrollPos(),FBPlugin()}doc.addEventListener("click",function(){ResetThePage()}),doc.addEventListener("DOMContentLoaded",function(e){FncBundle()}),win.addEventListener("scroll",function(){FncBundle()}),win.addEventListener("resize",function(){FncBundle()}),window.onload=LoadTime;