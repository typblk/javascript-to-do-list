
var svg_X = `<svg class="X-sign" style="height: 40px; float:right; padding-bottom: 10px;" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>`;

var ulDOM = document.querySelector("ul");
if(localStorage.getItem("list-items") == null){
    localStorage.setItem("list-items",JSON.stringify([]))}
var stored_lis =JSON.parse( localStorage.getItem("list-items"));


 ulDOM.innerHTML = ""


stored_lis.forEach((stored_li) => {ulDOM.innerHTML +=(`<li>${stored_li}</li>`)}) 


var liDOMs = document.querySelectorAll("li");
var bool = false;
if(stored_lis.length == 0)
    bool = true;
liDOMs.forEach(element=>{element.addEventListener("click",checked_elementFunc);
if(bool)
    {stored_lis.push(element.innerHTML)}
});



console.log(stored_lis)
localStorage.setItem("list-items",JSON.stringify(stored_lis))


function checked_elementFunc(){
     if(this.classList.contains("checked")){
        this.classList.remove("checked")
        this.innerHTML = this.innerHTML.replace(svg_X,"") 
        }
    else
        {this.classList.add("checked")
        if(!this.innerHTML.includes(svg_X)){
        this.innerHTML += svg_X;
        this.querySelector(".X-sign").addEventListener("click",remove_liDOM);
        }
    }
}

function remove_liDOM(){
    var element_content = this.parentElement.innerHTML.replace(svg_X,"")
    stored_lis.splice(stored_lis.indexOf(element_content),1)
    ulDOM.removeChild(this.parentElement);
    localStorage.setItem("list-items",JSON.stringify(stored_lis))
}
function newElement() {

    var taskDOM = document.querySelector("#task");
    if (taskDOM.value.trim()){
        var task = document.createElement("li");
        task.addEventListener("click",checked_elementFunc)
        task.innerHTML = taskDOM.value;
        ulDOM.appendChild(task);
        stored_lis.push(task.innerHTML)
        localStorage.setItem("list-items",JSON.stringify(stored_lis))
        taskDOM.value = "";
        $(document).ready(function(){
            $(".toast").toast("hide");
        })
    } 
    else{
        console.log("error")
        $(document).ready(function(){
            $(".toast").toast("show");
        })
    }
    
}