$(document).ready(function(){
    $("#addRow").on("click",function(){
        $("tbody").append(
            '<tr>' +

            '<th scope="row">'+

                '<select><option value="null"></option><option value="saab">Saab</option><option value="mercedes">Mercedes</option>option value="audi">Audi</option></select>' +
                
            '</th><td><input type="textbox">' +

            '</td><td>This is where the description would go</td>'+

            '<td><input class="sizes" id="xSmall" type="number" size="4" placeholder="XS"></td>' +

            '<td><input class="sizes" id="small" type="number" size="4" placeholder="S"></td>' +

            '<td><input class="sizes" id="med" type="number" size="4" placeholder="M"></td>' +

            '<td><input class="sizes" id="large" type="number" size="4" placeholder="L"></td>' +

            '<td><input class="sizes" id="xLarge" type="number" size="4" placeholder="XL"></td>' +

            '<td><input class="sizes" id="xxLarge" type="number" size="4" placeholder="XXL"></td>' +

            '<td><input disabled="disabled" size="4" placeholder="X"</td>' +

            '<td><input disabled="disabled" size="4" placeholder="X"</td>' 
            
        );
    })
})