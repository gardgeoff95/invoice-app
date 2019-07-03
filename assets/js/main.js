$(document).ready(function(){
    $("#addRow").on("click",function(){
        $("tbody").append(
            '<tr>' +

            '<th scope="row">'+

                '<select><option value="null"></option><option value="saab">Saab</option><option value="mercedes">Mercedes</option>option value="audi">Audi</option></select>' +
                
            '</th><td><input type="textbox">' +

            '</td><td>This is where the description would go</td>'+

            '<td><input id="xSmall" size="4" placeholder="XS"></td>' +

            '<td><input id="small" size="4" placeholder="S"></td>' +

            '<td><input id="med" size="4" placeholder="M"></td>' +

            '<td><input id="large" size="4" placeholder="L"></td>' +

            '<td><input id="xLarge" size="4" placeholder="XL"></td>' +

            '<td><input id="xxLarge" size="4" placeholder="XXL"></td>' +

            '<td><input disabled="disabled" size="4" placeholder="X"</td>' +

            '<td><input disabled="disabled" size="4" placeholder="X"</td>' 
            
        );
    })
})