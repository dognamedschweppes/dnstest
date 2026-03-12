const story = {

"00001":{
title:"Test Adventure",
img:"https://file.garden/ZZrJCnMkSSUP2GKj/00001.gif",
text:"A hero appears.",
next:"00002"
},

"00002":{
title:"Second page",
img:"https://file.garden/ZZrJCnMkSSUP2GKj/00002.gif",
text:"The adventure continues.",
next:"00003"
},

"00003":{
title:"Third page",
img:"https://file.garden/ZZrJCnMkSSUP2GKj/00003.gif",
text:"Something happens.",
next:"00004"
},

"00004":{
title:"Fourth page",
img:"https://file.garden/ZZrJCnMkSSUP2GKj/00004.png",
text:"More story.",
next:"00005"
},

"00005":{
title:"Fifth page",
img:"https://file.garden/ZZrJCnMkSSUP2GKj/00005.png",
text:"End of test.",
next:null
}

};

let page = location.pathname.replace("/","");

if(page=="") page="00001";

let data = story[page];

document.getElementById("title").innerText=data.title;
document.getElementById("panel").src=data.img;
document.getElementById("text").innerText=data.text;

if(data.next){
document.getElementById("next").href="/"+data.next;
}else{
document.getElementById("next").style.display="none";

}

