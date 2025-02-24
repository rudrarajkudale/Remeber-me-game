let computer = [];
let user = [];
let colors = ["red", "green", "yellow", "pink"];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", (event) => {
    if (start == false) {
        console.log("Game is started");
        start = true;
        levelup();
    }
});

function levelup() {
    user =[];
    level++;
    h2.innerText = `Level ${level}`;
    let random = Math.floor(Math.random() * colors.length);
    let rndcol = colors[random];
    let btn = document.querySelector(`.${rndcol}`)
    flash(btn);
    computer.push(rndcol);
}

function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function ans(idx)
{
    if(user[idx] === computer[idx])
    {
        if(user.length == computer.length)
        {
            setTimeout(levelup,1000)
        }
    }
    else{
        h2.innerHTML = `your score was <b>${level}<b>  <br>  Press any key to start the game!`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(()=>
        {
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
}

function btnpress()
{
    let btn = this;
    userflash(btn);
    let usercolor = btn.getAttribute("id");
    user.push(usercolor);
    ans(user.length-1);
}
allbtns = document.querySelectorAll(".d")
for(btn of allbtns)
{
    btn.addEventListener("click", btnpress)
}

function reset()
{
    let computer = [];
    let user = [];
    let start = false;
    let level = 0;
}