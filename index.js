let s = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((i)=>{
    i.addEventListener("click",(e)=>{
        console.log(e.target.innerHTML);
        let a = e.target.innerHTML;
        if(a == "AC"){
            s = ""
            document.querySelector("input").value = 0;
        }
        else if(a == "DEL"){
            s = s.substring(0,s.length-1);
            if(s==""){
                document.querySelector("input").value = 0;
            }
            else{
                document.querySelector("input").value = s;
            }
        }
        else if(a == "="){
            if(s[0]=="/"|| s[0]=="*"){
                document.querySelector("input").value = "Invalid Syntax";
            }
            else{
                document.querySelector("input").value = eval(s);
            }
        }
        else{   
            s = s + e.target.innerHTML;
            document.querySelector("input").value = s;
        }
    })
})