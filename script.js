let btn = document.querySelector('.toss');
let res = document.querySelector('#result');
function check(){
let r =Math.ceil(Math.random()*2);
if(r==1){
document.querySelector('#result').textContent="head";
}
else{
    document.querySelector('#result').innerHTML="tail";
}
}
btn.addEventListener('click',check)
