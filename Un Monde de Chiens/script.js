
function diapo () {
    //alert("ok");
    var diapos = document.getElementById('diaporama');
    var cache = document.getElementById('cache');

    diapos.style.visibility = "visible";
    diapos.style.opacity = "1";
    diapos.style.transition = "opacity 0.2s linear";
    cache.style.visibility = "visible";
    cache.style.opacity = "1";
    cache.style.transition = "opacity 0.2s linear";
}

function quit () {
    //alert("ok");
    var diapos = document.getElementById('diaporama');
    var cache = document.getElementById('cache');

    diapos.style.visibility = "hidden";
    diapos.style.opacity = "0";
    diapos.style.transition = "visibility 0s 0.1s, opacity 0.1s linear";
    cache.style.visibility = "hidden";
    cache.style.opacity = "0";
    cache.style.transition = "visibility 0s 0.1s, opacity 0.1s linear";
}