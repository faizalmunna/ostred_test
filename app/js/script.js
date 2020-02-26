console.log("Load script.js");

// Instantiating the global app object
var app = {};


// load this script on page loads

    // START jquery function for counter of the banner part     
function add() {
    var a = $("#noOfRoom").val();
    a++;
    if (a >= 1) {
        $("#subs").removeAttr("disabled");
    }
    $("#noOfRoom").val(a);
}
function subst() {
    var b = $("#noOfRoom").val();
    if (b.length > 0 && b >= 1) {
        b--;
        $("#noOfRoom").val(b);
    }
    else {
        $("#subs").attr("disabled", "disabled");

    }
}
// END jquery function for counter of the banner part 

