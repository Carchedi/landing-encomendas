document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContato");
  if (!form) return; // Adiciona uma verificação de segurança

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = encodeURIComponent(
      document.getElementById("nome").value.trim()
    );
    const condominio = encodeURIComponent(
      document.getElementById("condominio").value.trim()
    );
    const quantidade = encodeURIComponent(
      document.getElementById("quantidade").value.trim()
    );

    const mensagem = `Olá! Meu nome é *${nome}* e tenho interesse no projeto.%0ASou representante do condomínio *${condominio}*, que possui *${quantidade}* unidades.%0A%0A Gostaria de saber mais sobre o sistema de Gestão de Encomendas.`;

    const numero = "5532999735726"; // Substitua pelo seu número (com DDI e DDD)

    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|iphone|ipad|ipod/i.test(userAgent);

    const link = isMobile
      ? `https://wa.me/${numero}?text=${mensagem}`
      : `https://web.whatsapp.com/send?phone=${numero}&text=${mensagem}`;

    window.location.href = link;
  });
});
