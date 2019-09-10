export function createLi(info){
    let liNode = document.createElement("li");
    let textNode = document.createTextNode(info);

    liNode.appendChild(textNode);
    document.getElementById("console").appendChild(liNode);
}
function createBackToMenuButt(game){
    let butt = document.createElement("button");           
    butt.setAttribute("type","button");
    butt.addEventListener("click", game.createMenu);
    //butt.setAttribute("onclick","game.createMenu()");
    document.getElementById("returnToMenu").appendChild(butt);
    let text = document.createTextNode("Back to Menu");
    butt.appendChild(text);
}