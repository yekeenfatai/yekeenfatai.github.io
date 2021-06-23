var display = select("h4");
var result = document.querySelector(".screen>p")
var btn = document.querySelectorAll("input")


function select(tag)
{
    return document.querySelector(tag);
}


var lengt = btn.length
for(let i = 0; i < lengt; i++ )
    {
        if (btn[i].value == "=")
            {
                btn[i].onclick = function(e){
                    var res = display.innerHTML
                    let evaluate = eval(res)
                    display.innerHTML = evaluate
                    result.innerHTML = evaluate}
            }
        else if (btn[i].value == "clear")
            {
                btn[i].onclick = function(e){
                display.innerHTML = 0
                result.innerHTML = 0}
            }
        else{
                
                btn[i].onclick = function(e){
                display.innerHTML += this.value
                result.innerHTML = this.value}

             }
        

        
    }


