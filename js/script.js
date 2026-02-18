
function getNama(){
    var name = document.getElementById("mynama").value;
    localStorage.setItem("nama", name);
    window.location.href = './status.html';
}

function timeoutData() {
    setTimeout(function(){
        window.location.href = "https://whatsapp.com/channel/0029VbCPX8aChq6Mz9uyPK1r";
    },82000)
}

