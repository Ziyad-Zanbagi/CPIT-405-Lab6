const likes = 100;
const dislikes = 35;

let upCount = likes
let downCount = dislikes

let likesBtn = document.getElementById("likeBtn");
let dislikesBtn = document.getElementById("dislikeBtn")
likesBtn.innerText = "👍" + likes;
dislikesBtn.innerText =  "👎"+ dislikes;


window.onload = function() {
    if(document.cookie && document.cookie.indexOf("voted") >-1) {
        disableButtons();
    }
}

function doLike() {
    upCount++;
    likesBtn.innerText = "👍" + upCount;
    disableButtons();
    setCookie();
    console.log("you liked this");
}

function doDislike() {
    downCount++;
    dislikesBtn.innerText = "👎" + downCount;
    disableButtons();
    setCookie();
    console.log("you disliked this");
}

function disableButtons() {
    dislikesBtn.disabled = true;
    likesBtn.disabled = true;
}

function setCookie() {
    document.cookie = "voted=true; SameSite=Strict; Max-Age=60";
}