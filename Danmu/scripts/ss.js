function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof oldonload != "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
function launch(){
    if(!document.getElementById) return false;
    var launch = document.getElementById("launch");
    var print = document.getElementById("print");
    

    launch.onclick = function(){
        if(!document.getElementById("putin")) return false;
        
        var putin = document.getElementById("putin");
        var content = document.createElement("p");
        var content_text = document.createTextNode(putin.value);
        content.appendChild(content_text);
        print.appendChild(content);
        
        
        content.style.position = "absolute";
        //字体颜色样式随机
        var ran = Math.random()*375;
        var random = (Math.floor(Math.random()*16581300)).toString(16);
        content.style.color = "#" + random;
        content.style.fontSize = (Math.random()+1) + "em";
        
        var n = print.childElementCount;
        content.setAttribute("id",n);
        //速度随机
        var v = Math.random()*10+5;
        moveElement(n,1500,ran,v);
        
        putin.value ="";
    }
}


function moveElement(elemID,final_x,final_y,interval){
    if(!document.getElementById) return false;
    if(!document.getElementById(elemID)) return false;
    
    var elem = document.getElementById(elemID);
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    if(!elem.style.right){
        elem.style.right = "0px";
    }
    if(!elem.style.top){
        elem.style.top = "0px";
    }
    
    var xpos = parseInt(elem.style.right);
    var ypos = final_y;
    
    if(xpos == final_x){
        elem.style.right = "0px";
        moveElement(elemID,final_x,final_y,interval);
        return true;
    }
    
    /*if(xpos > final_x){
        xpos --;
    }*/
    if(xpos < final_x){
        xpos ++;
    }
    elem.style.right = xpos + "px";
    elem.style.top = ypos + "px";
    
    //connection
    var repeat = "moveElement('"+elemID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat, interval);
    
}
function clear(){
    if(!document.getElementById) return false;
    var clear = document.getElementById("clear");
    var print = document.getElementById("print");
    
    clear.onclick = function(){
        while(print.hasChildNodes()){
            print.removeChild(print.firstChild);
        }
    }
}
addLoadEvent(launch);
addLoadEvent(clear);
