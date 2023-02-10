/*Author:Anuja  9 feb 2023*/
function validate() {
    let nm = document.getElementById("n").value;
    let em = document.getElementById("mail").value;
    let at = document.getElementById("day").value;
    let nregx = /^[A-Z a-z]{2,10}$/;
    let eregx =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (nm == "") {
        alert("Name field is empty");
        return false;
    } else if (!nregx.test(nm)) {
        alert("Enter correct name");
        return false;
    } else if (em == "") {
        alert("Email field is empty");
        return false;
    } else if (!eregx.test(em)) {
        alert("Enter proper email");
        return false;
    } else if (at == "") {
        alert("Date field is empty");
        return false;
    } else if (
        document.getElementById("b").checked == false &&
        document.getElementById("f").checked == false &&
        document.getElementById("t").checked == false
    ) {
        alert("select atlest two options");
        return false;
    } else if (
        document.getElementById("ag").checked == false &&
        document.getElementById("ag").checked == false
    ) {
        alert("select atlest one");
        return false;
    } else {
        return true;
    }
}
