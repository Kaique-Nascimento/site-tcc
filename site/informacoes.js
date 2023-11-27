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
        const audio = document.getElementById("audio");
        audio.play().catch(error => {
            console.error("Erro ao iniciar a reprodução do áudio:", error);
        });
    });