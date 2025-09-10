// Smooth scroll para âncoras
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Exemplo de abertura do WhatsApp (coloque seu número)
const whatsapp = document.getElementById('whatsapp');
whatsapp.href = 'https://wa.me/5511999999999?text=Olá%20Gabi!%20Quero%20saber%20mais%20sobre%20o%20seu%20trabalho';

// Animação ao rolar com IntersectionObserver
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .service, .step, .square, .left-photo img, .hero-text').forEach(el=>{
  el.classList.add('hidden');
  observer.observe(el);
});

// pequenos estilos adicionados via JS (aplica classes que ativam transições)
const style = document.createElement('style');
style.innerHTML = `
.hidden{ opacity:0; transform: translateY(18px); transition: all .8s ease; }
.visible{ opacity:1; transform: translateY(0); }
`;
document.head.appendChild(style);

// formulário - só demonstração (não envia, só limpa e mostra aviso)
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('name').value;
  alert('Obrigada, ' + (name || 'amiga') + '! Recebi sua mensagem 💌 (exemplo)');
  form.reset();
});
