document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('smartCta');
    if (!btn) return;

    const pagesize = document.documentElement.scrollHeight - window.innerHeight;

    function setText() {
      const progress = (window.scrollY / pagesize) * 100;

      if (progress < 25) btn.textContent = 'Agendar Avaliação';
      else if (progress < 70) btn.textContent = 'Falar com Especialista';
      else btn.textContent = 'Agendar Agora – Últimas Vagas';
    }

    window.addEventListener('scroll', setText);
    setText();
  });
