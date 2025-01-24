// Script para rolagem suave até as seções da página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
/*
// Validação simples do formulário
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.querySelector('input[name="nome"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const telefone = document.querySelector('input[name="telefone"]').value.trim();
    const mensagem = document.querySelector('textarea[name="mensagem"]').value.trim();

    if (!nome || !email || !telefone || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
    }

    // Exemplo de envio simulado
    alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
    this.reset();
});
*/

document.querySelector('#form-contato').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Obtendo valores do formulário
    const nome = document.querySelector('#nome').value.trim();
    const telefone = document.querySelector('#telefone').value.trim();
    const servico = document.querySelector('#servico').value;
    const mensagem = document.querySelector('#mensagem').value.trim();

    // Validação básica
    if (!nome || !telefone || !servico) {
        alert('Por favor, preencha todos os campos obrigatórios antes de enviar.');
        return;
    }

    // Formatação da mensagem para o WhatsApp
    const telefoneWhatsApp = '31971998859'; // Número do WhatsApp sem espaços ou caracteres especiais
    const textoMensagem = `
        Olá, meu nome é ${nome}.
        Telefone: ${telefone}.
        Serviço Necessário: ${servico}.
        Mensagem: ${mensagem || 'Nenhuma mensagem adicional foi enviada.'}
    `;

    // Codifica a mensagem para URL
    const url = `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent(textoMensagem)}`;

    // Redireciona para o WhatsApp
    window.open(url, '_blank');
});


// Botão "Voltar ao Topo"
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.backgroundColor = '#0078d7';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
backToTopButton.style.zIndex = '1000';

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
