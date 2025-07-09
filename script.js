function addValue(val)
{
    let v=document.getElementById('screen')
    v.value=v.value+val;
}
function calc()
{
    let v=document.getElementById('screen').value
    let result=eval(v)
    document.getElementById('screen').value=result
}
function clearAll()
{
    let v=document.getElementById('screen')
    v.value=''
}
function deleteLast()
{
    let v=document.getElementById('screen')
    v.value=v.value.slice(0,-1);
    
}