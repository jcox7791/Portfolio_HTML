'use strict'
const load = () => {
    getFromServer();
}

const getFromServer = async () => {
    let response = await fetch("/api/index");
    let body = await response.json();
    // console.log("response from server: ",body);
    let paragraphIntro = body["portfolio"]["index"]["paragraphIntro"];
    // console.log("body response from json: ",paragraphIntro);
    let paragraph_root = document.getElementById("intoParagraph_root");
    paragraph_root.innerHTML = paragraphIntro;
}

window.onload = load();