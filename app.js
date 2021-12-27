var userInput=document.querySelector("#userinput");
    var btn=document.querySelector("#add");
    var output=document.querySelector("#output");
    var clearBtn=document.querySelector("#clearbtn")
    var text=document.querySelector("#text")
    var count=0
    text.innerText=`you have 0 task`
    btn.addEventListener("click",()=>{
        if(userInput.value==""){
            alert("please enter valid task")
        }else{
            output.innerHTML +=`<li>${userInput.value}</li>`
            userInput.value=""
            count++
            text.innerText=`you have ${count} task`

        }
        
    })
    clearBtn.addEventListener("click",()=>{
        output.innerHTML=""
        text.innerText=`you have ${count=count-count} task` 
        if(count==0){
            count=0 
        }
})