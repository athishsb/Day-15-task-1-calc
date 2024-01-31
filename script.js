let output = document.getElementById(`result`)
function display(num){
    output.value += num
}
function calcualte(){
    try{
        output.value = eval(output.value)
    }catch(err)
    {
        alert("Cannot read properties of null")
    }
}
function CE(){
output.value = ""
}
function del(){
output.value = output.value.slice(0,-1)
}