var empty = [];
function getPara()
{
    for(var i = 1;i<7;i++)
    {
        var abc = document.getElementById("in_"+i).value;
        empty.push(abc);
    }
   var xyz = empty.join(".");
   document.getElementById('p_display').innerHTML = xyz;
}