window.onload = () =>{
    var ele=(document.getElementById("exploreNav").firstElementChild.firstElementChild)
    how(ele);
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "5px 0px";
    document.getElementById("navbar").style.backgroundColor = "rgb(131, 190, 207)";
    document.getElementById("bgimg").style.height="100vh";
    document.getElementById("imgdiv").style.marginLeft = "100vw";
    
  } else {
    document.getElementById("navbar").style.padding = "0px 0px";
    document.getElementById("navbar").style.backgroundColor= "transparent";
    document.getElementById("bgimg").style.height="75vh";
    document.getElementById("imgdiv").style.marginLeft = "0vw";
  }
}
const how = (n) =>{
    var ele = document.getElementById("how");
    ele.parentNode.scrollLeft = ele;
    var x=document.getElementById("exploreNav").getElementsByTagName("h3");
    for(var i = 0;i<x.length;i++){
        x[i].style.backgroundColor = "#000000";
        x[i].style.color = "#EAEAEA";
        x[i].style.boxShadow = "5px 5px 5px #000 inset"
    }
    n.parentElement.style.backgroundColor="#FFFFFF";
    n.parentElement.style.color="#000000";
    n.parentElement.style.boxShadow="5px 5px 5px #000";
}
const why = (n) =>{
    var ele = document.getElementById("why");
    ele.parentNode.scrollLeft = ele.offsetLeft;
    var x=document.getElementById("exploreNav").getElementsByTagName("h3");
    for(var i = 0;i<x.length;i++){
        x[i].style.backgroundColor = "#000000";
        x[i].style.color = "#EAEAEA";
        x[i].style.boxShadow = "5px 5px 5px #000 inset"
    }
    n.parentElement.style.backgroundColor="#FFFFFF";
    n.parentElement.style.color="#000000";
    n.parentElement.style.boxShadow="5px 5px 5px #000";
}
const what = (n) =>{
    var ele = document.getElementById("what");
    ele.parentNode.scrollLeft = ele.offsetLeft;
    var x=document.getElementById("exploreNav").getElementsByTagName("h3");
    for(var i = 0;i<x.length;i++){
        x[i].style.backgroundColor = "#000000";
        x[i].style.color = "#EAEAEA";
        x[i].style.boxShadow = "5px 5px 5px #000 inset"
    }
    n.parentElement.style.backgroundColor="#FFFFFF";
    n.parentElement.style.color="#000000";
    n.parentElement.style.boxShadow="5px 5px 5px #000";
}
const service = () =>{
    document.getElementById("services").scrollIntoView();
    document.getElementById("bgimg").style.height="100vh";
}
const nav = () =>{
    document.getElementById("navbar").style.backgroundColor="rgba(131, 190, 207,0.9)";
}