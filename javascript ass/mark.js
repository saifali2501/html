function userinput(){
    let a = document.getElementById("C_language").value;
    let b = document.getElementById("C++").value;
    let c = document.getElementById("data").value;
    let d = document.getElementById("html").value;
    let e = document.getElementById("Css").value;
    let f = document.getElementById("php").value;
    let g = document.getElementById("Core").value;

  

    // let msg = document.getElementById("msg")

    let  multi= Number(a) + Number(b) + Number(c) + Number(d) + Number(e) +Number(f) +Number(g) 

    msg.innerHTML = multi;

      
    let i = multi/7
    document.getElementById("divid").innerText=i;
    return false;
    
    
}