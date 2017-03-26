function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
    
}
function newOne(){
    if(!document.getElementById) return false;
    if(!document.getElementById("words")) return false;
    
    var words = document.getElementById("words");
    var newone = document.getElementById("newone");
    
    var quote = document.createElement("span");
    var quote_text =document.createTextNode('"');
    quote.appendChild(quote_text);
    quote.setAttribute("id","quote");
    
    var line = document.createElement("p");
    line.setAttribute("id","line");
    words.parentNode.insertBefore(quote,words);
    insertAfter(line,words);
    
    newone.onclick = function(){
        var arr = randomWords();
        words.innerHTML = arr[0];
        line.innerHTML = arr[1];
        
        var rd_color = randomColors();
        document.body.style.backgroundColor = rd_color;
        var buttons = document.getElementById("buttons");
        var inputs = buttons.getElementsByTagName("input");
        inputs[0].style.color = rd_color;
        inputs[1].style.color = rd_color;
    };
    
}
function randomWords(){
    var ran = Math.ceil(Math.random()*10);
    
    var arr = [];
    switch(ran){
        case 1: arr[0] = "其实了解一个人并不代表什么，人是会变的，今天他喜欢凤梨，明天他可以喜欢别的。";
                arr[1] = "——— 重庆森林";
            break;
        case 2: arr[0] ="当我站在瀑布前，觉得非常的难过，我总觉得，应该是两个人站在这里。";
                arr[1] = "——— 春光乍泄";
            break;
        case 3: arr[0] ="One should love animals. They are so tasty.";
                arr[1] = "——— GARFIELD";
            break;
        case 4: arr[0] ="现在很清楚，我向你走去，你向我走来已经很久很久了。虽然在我们相会之前谁也不知道对方的存在。";
                arr[1] = "——— 廊桥遗梦";
            break;
        case 5: arr[0] ="Hope is a good thing and maybe the best of things. And no good thing ever dies.";
                arr[1] = "——— Shawshank Redemption";
            break;
        case 6: arr[0] ="Whatever comes, I'll love you, just as I do now. Until I die.";
                arr[1] = "——— Gone with The Wind";
            break;
        case 7: arr[0] ="I love you more than I've ever loved any woman. And I've waited longer for you than I've waited for any woman.";
                arr[1] = "——— Gone with The Wind";
            break;
        case 8: arr[0] ="To make each day count.";
                arr[1] = "——— TITANIC";
            break;
        case 9: arr[0] ="God made relatives; Thank God we can choose our friends.";
                arr[1] = "——— GARFIELD";
            break;
        case 10: arr[0] ="神明如果真的在的话，要许下什么愿望才好，我自己其实也不知道。";
                arr[1] = "——— 你的名字";
            break;
        default:
            arr[0] ="Life is a box of chocolate!";
            arr[1] = "——— Find your one";
            
    }
    return arr;
}
function randomColors(){
    var ran = Math.ceil(Math.random()*10);
    var color;
    switch(ran){
        case 1:    color = '809c1f';
            break;
        case 2:    color = '2d5294';
            break;
        case 3:    color = '128065';
            break;
        case 4:    color = '2d9437';
            break;
        case 5:    color = 'c44747';
            break;
        case 6:    color = 'e25b25';
            break;
        case 7:    color = '7f32ac';
            break;
        case 8:    color = '32ac71';
            break;
        case 9:    color = '94622d';
            break;
        case 10:color = 'B1238E';
            break;
        default:
            color = '2d7b94';
        
    }
    color = '#'+ color;
    return color;
}
function shareLinks(){
    if(!document.getElementById) return false;
    if(!document.getElementById("share")) return false;
    
    var share = document.getElementById("share");
    var link = document.getElementById("link");
    
    share.onclick = function(){
        var line = document.getElementById("line");
        var words = document.getElementById("words");
        document.title = words.innerHTML + " " + line.innerHTML+" #quote";
        link.onclick();
        }
}
window.onload = function(){
    newOne();
    shareLinks();
}