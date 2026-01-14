
document.addEventListener('DOMContentLoaded', function () {
    const smartCta = document.getElementById('smartCta');

    if (!smartCta) return;

    function updateCTA() {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const progress = (scrollY / (docHeight - winHeight)) * 100;

        if (progress < 20) {
            smartCta.textContent = 'Agendar Avaliação';
        } else if (progress < 70) {
            smartCta.textContent = 'Falar com Especialista';
        } else {
            smartCta.textContent = 'Últimas Vagas da Semana';
        }
    }

    updateCTA(); // roda ao carregar
    window.addEventListener('scroll', updateCTA);
});


//function enviarWhatsapp() {
//    const nomeInput = document.getElementById('name');
//    const whatsappInput = document.getElementById('whatsapp');
//
//    if (!nomeInput || !whatsappInput) {
//        console.error('Inputs não encontrados');
//        return;
//    }
//
//    const nome = nomeInput.value.trim();
//
//    if (!nome) {
//        alert('Por favor, informe seu nome.');
//        return;
//    }
//
//    const mensagem = encodeURIComponent(
//        `Olá! Meu nome é ${nome} e gostaria de saber mais sobre o e-commerce com app.`
//    );
//
//    window.open(
//        'https://wa.me/5561991865680?text=' + mensagem,
//        '_blank'
//    );
//}
