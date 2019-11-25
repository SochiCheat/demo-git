var myList = [
    "bopha",
    "Romdoul",
    "Chompey",
    "Chompa",
    "Kolab",
    "Krorvan",
    "Romchong",
];
$(document).ready(function () {
    $("#search,button ").attr("disabled", true);
    $("#accept").on("change", function () {
        $("#search,button ").attr("disabled", false);
    });
    $("button").on("click", function () {

        //    $result=$("#search").val();
        //    if ($result == "") {
        //        $("#find").html('please enter name');
        //    }
        // function searchName(myList, name);

        var name = $('#search').val();
        var check = $('#find');
        if (name != "") {
            var result = searchName(myList, name);
            result ? check.html("Find :" + name) : check.html("cannot find :" + name);
        } else {
            check.html("please enter something");

        }
        $('a').html("you are agree to search only in good way");
    })
});

function searchName(list, names) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].toLowerCase() == names.toLowerCase()) {
            return true;
        }

    }
    return false;
}