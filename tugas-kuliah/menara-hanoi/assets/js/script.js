// "use strict";

let myTimer = null;
let moveInc = 1;
let barsInfo = [{}, {}, {}];
let callStack, moveInfo, diskPosTop, diskPosLeft, DiskID;
    
const speed = 1;

window.onload = function ()
{   
    diskPosTop = new Array();
    diskPosLeft = new Array();

    DiskID = [disk0, disk1, disk2]

    for (var i = 0; i < 3; i++) 
    {  
        diskPosTop[i] = DiskID[i].style.top; 
        diskPosLeft[i] = DiskID[i].style.left; 
    } 

} 

function executeHanoi() {

    const diskCount = 3;

    // Memindahkan piringan dan menjalankan kolom
    for (let i = 0; i < 3; i++)
    {  
        DiskID[i].style.top = diskPosTop[i];
        DiskID[i].style.left= diskPosLeft[i];
    } 

    // untuk menyimpan piringan
    barsInfo[0].disks = ['disk0', 'disk1', 'disk2'];
    barsInfo[1].disks = [];
    barsInfo[2].disks = [];

    // menyiapkan array kosong untuk hanoi
    callStack = []; 

    // mengisi paramater untuk fungsi hanoi
    Hanoi(diskCount, 0, 2, 1);

    // jalankan fungsi perintah utnuk memindahkan piringan
    moveDisk(); 
}


function Hanoi(n, from, to, via) {
    if (n == 0) return;

    Hanoi(n - 1, from, via, to);

    callStack.push([from, to]); 
    // save parameters to callStack array
    
    Hanoi(n - 1, via, to, from);
}


function moveDisk() {
    if (callStack.length == 0) return;

    let param = callStack.shift();  // Get call parameters from callStack
    
    // Note: throughout the code, I use fromBar, toBar to refer to towers
    let  fromBar = param[0];
    let toBar = param[1];

    let elem = document.getElementById(barsInfo[fromBar].disks.pop());  // find top elemnet in fromBar

    moveInfo = { elem: elem,
        fromBar: fromBar,
        toBar: toBar,
        whichPos: "top", // element position property for movement
        dir: -1,  // 1 or -1
        state: "up", // move upward
        endPos: 60    // end position (in pixels) for move upward
    }

    myTimer = setInterval(animateMove, speed); // Start animation
}

function animateMove() {
    let elem = moveInfo.elem;
    let dir = moveInfo.dir;

    let pos = parseInt(elem[(moveInfo.whichPos == "left") ? "offsetLeft" : "offsetTop"]);

    if (((dir == 1) && (pos >= moveInfo.endPos)) || ((dir == -1) && (pos <= moveInfo.endPos))) {  // alert(moveInfo.state); 
        if (moveInfo.state == "up") {
            moveInfo.state = "hor";
            moveInfo.whichPos = "left";
            moveInfo.dir = 1;
            if (moveInfo.fromBar > moveInfo.toBar) moveInfo.dir = -1;
            //alert("toBar:" + moveInfo.toBar);
            let toBar = document.getElementById("bar" + moveInfo.toBar);
            // Next line: 15px is half of tower width    
            moveInfo.endPos = toBar.offsetLeft - Math.floor(elem.offsetWidth / 2) + 15;
            return;
        }

        else if (moveInfo.state == "hor") // move down
        {
            moveInfo.state = "down";
            moveInfo.whichPos = "top";
            moveInfo.dir = 1;
            //alert(elem.offsetHeight);
            moveInfo.endPos = document.getElementById("bottombar").offsetTop - (barsInfo[moveInfo.toBar].disks.length + 1) * elem.offsetHeight;
            return;
        }

        else // end of current call to moveDisk, issue next call
        {
            clearInterval(myTimer);  // cancel timer 
            barsInfo[moveInfo.toBar].disks.push(elem.id);
            moveDisk();
            return;
        }
    }


    // Move Disk
    pos = pos + dir * moveInc;
    elem.style[moveInfo.whichPos] = pos + "px";

    // Move the inside middle image
    if (moveInfo.state == "up") {
        let fromBar = document.getElementById("bar" + moveInfo.fromBar);
        if (elem.offsetTop < fromBar.offsetTop) {
            let x = elem.getElementsByClassName("insideImg")[0].offsetHeight;
            if (x > 0) elem.getElementsByClassName("insideImg")[0].style.height = x - moveInc + "px";
        }
    }

    if (moveInfo.state == "down") {
        let toBar = document.getElementById("bar" + moveInfo.toBar);
        if (elem.offsetTop > toBar.offsetTop) {
            let x = elem.getElementsByClassName("insideImg")[0].offsetHeight;
            if (x < 14) elem.getElementsByClassName("insideImg")[0].style.height = x + moveInc + "px";
        }
    }

}
