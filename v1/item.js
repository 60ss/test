var genresr=["คอร์ดเพลงสตริง","คอร์ดเพลงลูกทุ่ง","คอร์ดเพลงเพื่อชีวิต","คอร์ดเพลงลูกทุ่งเพื่อชีวิต","คอร์ดเพลงหมอลำ","คอร์ดเพลงอีสาน","คอร์ดเพลงใต้","คอร์ดเพลงอินดี้","คอร์ดเพลงเร็กเก้สกา","เพลงแร็พ","เพลงคู่","เพลงวันวาเลนไทน์","เพลงปีใหม่","เพลงวันแม่","บทเพลงเพื่อพ่อ","คอร์ดเพลงลาว","คอร์ดเพลงสากล","เพลงลูกทุ่งเก่าๆ","เพลงแปลง","ตารางคอร์ด"],ignore=["คอร์ดเพลง"],genres=document.getElementById("genres"),artists=document.getElementById("artists"),navhome=document.querySelector("header>nav>.-home"),navlink=document.querySelectorAll("header>nav>a");function Genres(e){if(e.preventDefault(),genres){if(""==genres.innerHTML){for(var t="",r=0;r<genresr.length;r++){var s=genresr[r];t+='<a href="/search/label/'+encodeURIComponent(s)+'">'+s.replace(/คอร์ดเพลง/,"")+"</a>\n"}genres.innerHTML=t}ClrNav();e=e.target;-1==genres.className.indexOf("_visible")?(artists.classList.remove("_visible"),genres.classList.add("_visible"),e.classList.add("-curr")):(genres.classList.remove("_visible"),e.classList.remove("-curr"),navhome&&navhome.classList.add("-curr"))}}function Artists(e){var t;e.preventDefault(),artists&&(""==artists.innerHTML&&((t=document.createElement("script")).src="https://mechords.blogspot.com/feeds/posts/default/?alt=json-in-script&max-results=1&callback=Labels",document.head.appendChild(t)),ClrNav(),e=e.target,-1==artists.className.indexOf("_visible")?(genres.classList.remove("_visible"),artists.classList.add("_visible"),e.classList.add("-curr")):(artists.classList.remove("_visible"),e.classList.remove("-curr"),navhome&&navhome.classList.add("-curr")))}function ClrNav(){if(navlink.length)for(var e=0;e<navlink.length;e++)navlink[e].classList.remove("-curr")}function Labels(e){if(console.clear(),e.feed&&e.feed.category){for(var t=e.feed.category,r='<input type="text" onkeyup="FilterLbls(this)" placeholder="กรองป้ายกำกับ.." />',s=0;s<t.length;s++){var n=t[s].term;-1==genresr.indexOf(n)&&-1==ignore.indexOf(n)&&(r+='<a href="/search/label/'+encodeURIComponent(n)+'">'+n.replace(/คอร์ดเพลง/,"")+"</a>\n")}artists.innerHTML+=r}}function FilterLbls(e){console.clear();var t=e.value.toUpperCase(),r=artists.querySelectorAll("a");for(i=0;i<r.length;i++)-1<(r[i].textContent||r[i].innerText).toUpperCase().indexOf(t)?r[i].classList.remove("_none"):r[i].classList.add("_none")}var wasteful=document.querySelectorAll(".wasteful");if(wasteful.length)for(var i=0;i<wasteful.length;i++)wasteful[i].parentNode.removeChild(wasteful[i]);function V2(e){if(e.feed&&e.feed.entry)for(var t=e.feed.entry[0].link,r=0;r<t.length;r++){var s,n,a,i=t[r];"alternate"==i.rel&&(s=i.title,n=i.href,a=(a=document.getElementById("chord-preview"))||document.getElementById("img"),(i=document.createElement("a")).href=n,i.target="_blank",i.innerHTML="ดูคอร์ดเพลง <b>"+s+"</b> เวอร์ชั่นที่เปลี่ยนคีย์ได้",i.classList.add("v2"),a.parentNode.insertBefore(i,a.nextSibling))}}document.addEventListener("DOMContentLoaded",function(e){var t,r=document.querySelector(".post-item h2");r&&(t=r.innerText,t=encodeURIComponent(t.replace(/(\s+)*\,(\s+)*/g," ")),(r=document.createElement("script")).src="https://www.mechords.com/feeds/posts/default/?alt=json-in-script&max-results=1&callback=V2&q="+t,document.body.appendChild(r))});