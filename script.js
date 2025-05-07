function validateDates() {
    var dep = document.getElementById("dep").value;
    var ret = document.getElementById("ret").value;

    var depDate = new Date(dep);
    var retDate = new Date(ret);

    if (ret && dep && retDate < depDate) {
        alert("The return date should be after the departure date.");
        return false;
    }
    return true;
}
