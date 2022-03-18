function cart(cakeNumber, addonsCount) {

    var indexTortu = $("#ci.index").val();
    var indexDodatku = $("#i.index").val();
    var zaznaczony = $("#zaznaczony").is(':checked');

    var object = {
        indexTortu: ci.index,
        indexDodatku: i.index,
        zaznaczony: zaznaczony

    for (var i = 0; i < addonsCount; i++) {
       var value = document.getElementById("cb"+cakeNumber+i).checked;
       alert(value);
    }
 $.ajax({
        url: "http://localhost:8080/main",
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(object)
    })
    .done(res => {
        $('#divCi.Index').html(res.ci.index);
        $('#divI.index').html(res.i.index);
        $('#divZaznaczony').html(res.zaznaczony.toString());

    });

}