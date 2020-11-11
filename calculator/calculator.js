 //function calc(out){
    const calc=(out)=>{
        var first=document.getElementById("first").value;
    var second=document.getElementById("second").value;
    if(out=="add"){
        out=Number(first)+Number(second);
    }
    else{
        out=Number(first)-Number(second);
    }

document.getElementById("output").innerText=out;
    }
 
/*
fuction add(){
    var first=document.getElementById("first").value;
    var second=document.getElementById('second').value;
    var out=Number(first)+Number(second);
    document.getElementById("output").innerText=out;
}
*/