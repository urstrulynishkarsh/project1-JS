const val=document.querySelector('#hello');
function increment(){
    let count=parseInt(val.innerText);
    count+=1;
    val.innerText=count;

}

function decrement(){
    let count=parseInt(val.innerText);
    count-=1;
    val.innerText=count;

}