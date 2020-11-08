let interval=setInterval(myFunction, 1000);

function myFunction(){
    let hour=document.getElementById("hour");
    let minute=document.getElementById("minute");
    let second=document.getElementById("second");
    let t=new Date();
    let H=t.getHours();
    let M=t.getMinutes();
    let S=t.getSeconds();
    hour.innerHTML=H;
    minute.innerHTML=M;
    second.innerHTML=S;
}

