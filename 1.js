
function gonder(say) {

    document.getElementById("ekran").value = document.getElementById("ekran").value + say;

}



function cem() {
    let cavab = document.getElementById("cvbekran").value;
    document.getElementById("cvbekran").value = eval(document.getElementById("ekran").value);
}

function sil() {
    let geri = document.getElementById("ekran").value;
    document.getElementById("ekran").value = geri.substr(0, geri.length - 1);

}

function sill() {
    let geri = document.getElementById("cvbekran").value;
    document.getElementById("cvbekran").value = geri.substr(0, geri.length - 1);
}

function sifir() {
    document.getElementById("ekran").value = "";
    document.getElementById("cvbekran").value = "";
}

function yari() {
    let eded = document.getElementById("ekran").value;
    document.getElementById("cvbekran").value = (eded / 100);
}

function yari() {
    let eded = document.getElementById("cvbekran").value;
    document.getElementById("cvbekran").value = (eded / 100);
}





