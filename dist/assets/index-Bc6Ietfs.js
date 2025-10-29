(function () {
  const x = document.createElement("link").relList;
  if (x && x.supports && x.supports("modulepreload")) return;
  for (const b of document.querySelectorAll('link[rel="modulepreload"]')) T(b);
  new MutationObserver((b) => {
    for (const O of b)
      if (O.type === "childList")
        for (const Q of O.addedNodes)
          Q.tagName === "LINK" && Q.rel === "modulepreload" && T(Q);
  }).observe(document, { childList: !0, subtree: !0 });
  function E(b) {
    const O = {};
    return (
      b.integrity && (O.integrity = b.integrity),
      b.referrerPolicy && (O.referrerPolicy = b.referrerPolicy),
      b.crossOrigin === "use-credentials"
        ? (O.credentials = "include")
        : b.crossOrigin === "anonymous"
        ? (O.credentials = "omit")
        : (O.credentials = "same-origin"),
      O
    );
  }
  function T(b) {
    if (b.ep) return;
    b.ep = !0;
    const O = E(b);
    fetch(b.href, O);
  }
})();
const $a = `<nav class="navbar">
  <a href="#top" class="logo">Gestão de Encomendas</a>
  <div class="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <ul class="nav-menu">
    <li><a href="#sobre">Sobre</a></li>
    <li><a href="#funcionalidades">Funcionamento</a></li>
    <li><a href="#comoFunciona">Fluxo</a></li>
    <li><a href="#contato">Contato</a></li>
  </ul>
</nav>
<!-- Overlay será criado pelo JS -->`,
  Pa = `<section class="hero is-fullheight">
  <!-- Imagens de fundo -->
  <img src="/assets/images/bg08.jpg" alt="Imagem 1" class="bg-slide">
  <img src="/assets/images/bg09.jpg" alt="Imagem 2" class="bg-slide">
  <img src="/assets/images/bg10.jpg" alt="Imagem 3" class="bg-slide">

  <!-- Conteúdo da hero -->
  <div class="hero-body">
    <div class="container has-text-centered heroBanner">
      <h1 class="title is-1">Gestão inteligente de encomendas para condomínios.</h1>
      <h2 class="subtitle is-4">Um sistema moderno, desenvolvido para simplificar o recebimento e o controle de
        encomendas residenciais — com segurança, praticidade e total transparência.</h2>
      <a href="#sobre" class="btn btn-primary">Descubra!</a>
    </div>
  </div>
</section>`,
  Na = `<section id="sobre" class="section about">
  <div class="container">
    <h2 class="title is-2 has-text-centered">Modernize a gestão de encomendas do seu condomínio</h2>
    <p class="subtitle is-4 has-text-centered mb-6">
      Simplifique o recebimento, armazenamento e retirada com total transparência.
    </p>

    <div class="cards-grid">
      <!-- Card 1 -->
      <div class="card-moderno p-5 has-text-centered">
        <h3 class="title is-4 card-title">Gestão de Encomendas</h3>
        <div class="card-inner">
          <div class="card-image">
            <img src="assets/images/encomendas.png" alt="encomendas" />
          </div>
          <div class="card-text">
            <p>
              Com o crescimento das compras online, a rotina de recebimentos nos condomínios ficou mais intensa e
              complexa.
              Nosso sistema traz uma solução inteligente para organizar o fluxo de encomendas,
              garantindo<strong>controle eficiente, segurança</strong> e <strong>comunicação clara</strong> entre
              portaria e moradores.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="card-moderno p-5 has-text-centered">
        <h3 class="title is-4 card-title">Automação Completa</h3>
        <div class="card-inner">
          <div class="card-image">
            <img src="assets/images/automacao.png" alt="automação" />
          </div>
          <div class="card-text">
            <p>
              Pensando nas necessidades do dia a dia, desenvolvemos uma plataforma que <strong>automatiza todo o ciclo
                de encomendas</strong> — do registro à retirada — com <strong>economia de tempo, redução de
                erros</strong>
              e <strong>transparência total</strong> no processo.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="card-moderno p-5 has-text-centered">
        <h3 class="title is-4 card-title">Experiência Intuitiva</h3>
        <div class="card-inner">
          <div class="card-image">
            <img src="assets/images/morada.png" alt="experiência" />
          </div>
          <div class="card-text">
            <p>
              Mais do que controle, o sistema oferece uma <strong>experiência digital intuitiva e confiável</strong>,
              projetada para que <strong>moradores, funcionários e gestores</strong> utilizem com facilidade, em
              qualquer dispositivo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
  ja = `<section id="funcionalidades" class="section">
  <div class="container">
    <h2 class="title has-text-centered">
      Como o sistema transforma o dia a dia do condomínio
    </h2>
    <p class="subtitle has-text-centered">
      Benefícios claros para todos os envolvidos.
    </p>

    <div class="accordion-wrapper">

      <div class="accordion-item active" id="moradores-item" data-tab="moradores">
        <div class="item-background"></div>
        <div class="item-content">
          <div class="item-title">Para Moradores</div>
          <div class="item-details">
            <p>
              Tenha todas as informações na palma da mão.
              Receba notificações e acompanhe suas encomendas de forma simples, rápida e segura.
            </p>
            <div style="text-align: right;">
              <a href="#" class="button is-dark" data-bs-toggle="modal" data-bs-target="#modal1">Saiba Mais</a>
            </div>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar"></div>
          </div>
        </div>
      </div>

      <div class="accordion-item" id="funcionarios-item" data-tab="funcionarios">
        <div class="item-background"></div>
        <div class="item-content">
          <div class="item-title">Para Funcionários</div>
          <div class="item-details">
            <p>
              Registre entregas com agilidade e organize o armazenamento de pacotes de forma prática. Localize e
              entregue encomendas em segundos, sem complicações.
            </p>
            <div style="text-align: right;">
              <a href="#" class="button is-dark" data-bs-toggle="modal" data-bs-target="#modal2">Saiba Mais</a>
            </div>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar"></div>
          </div>
        </div>
      </div>

      <div class="accordion-item" id="gestores-item" data-tab="gestores">
        <div class="item-background"></div>
        <div class="item-content">
          <div class="item-title">Para Gestores</div>
          <div class="item-details">
            <p>
              Acesse relatórios, acompanhe métricas e controle todo o fluxo de encomendas do condomínio com uma visão
              estratégica e centralizada.
            </p>
            <div style="text-align: right;">
              <a href="#" class="button is-dark" data-bs-toggle="modal" data-bs-target="#modal3">Saiba Mais</a>
            </div>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar"></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>`,
  qa = `<section id="comoFunciona" class="section section-timeline">
    <div class="container">
        <h2 class="title is-2 has-text-centered">Como o sistema fuciona?</h2>
        <p class="subtitle is-4 has-text-centered mb-6">
            O sistema foi projetado para um fluxo simples e facilitado a todos.
        </p>
        <div class="container py-5">
            <div class="timeline-grid">
                <!-- Card 1 -->
                <div class="timeline-card">
                    <img src="/assets/images/timeline/01.png" class="timeline-card-img"
                        alt="Cadastro inicial">
                    <div class="timeline-card-body">
                        <h4 class="timeline-card-title">Cadastro inicial</h4>
                        <div class="timeline-card-content">
                            <p>A administração cadastra os moradores no sistema, cada um é associado à sua
                                unidade (torre e apartamento).</p>
                        </div>
                        <button class="timeline-card-toggle">+</button>
                    </div>
                </div>
                <!-- Card 2 -->
                <div class="timeline-card">
                    <img src="/assets/images/timeline/02.png" class="timeline-card-img"
                        alt="Registro Inteligente">
                    <div class="timeline-card-body">
                        <h4 class="timeline-card-title">Registro Inteligente</h4>
                        <div class="timeline-card-content">
                            <p>Quando as encomendas são entregues na portaria, o funcionário as registra no sistema por
                                meio de <strong>duas fotos:</strong></p>
                            <ul style="list-style: disc; padding-left: 20px;">
                                <li class="mb-2">Uma foto da encomenda</li>
                                <li>Uma foto da etiqueta do destinatário</li>
                            </ul>
                            <p class="mt-3">A partir da foto da etiqueta, o sistema lê os dados do destinatário e
                                preenche <strong>automaticamente</strong> as informações para o registro.</p>
                        </div>
                        <button class="timeline-card-toggle">+</button>
                    </div>
                </div>
                <!-- Card 3 -->
                <div class="timeline-card">
                    <img src="/assets/images/timeline/03.png" class="timeline-card-img"
                        alt="Notificação imediata">
                    <div class="timeline-card-body">
                        <h4 class="timeline-card-title">Notificação imediata</h4>
                        <div class="timeline-card-content">
                            <p>Quando uma encomenda é registrada no sistema, o morador da unidade
                                é notificado instantaneamente via email e WhatsApp.</p>
                        </div>
                        <button class="timeline-card-toggle">+</button>
                    </div>
                </div>
                <!-- Card 4 -->
                <div class="timeline-card">
                    <img src="/assets/images/timeline/04.png" class="timeline-card-img"
                        alt="Transparência total">
                    <div class="timeline-card-body">
                        <h4 class="timeline-card-title">Transparência total</h4>
                        <div class="timeline-card-content">
                            <p>A qualquer momento, o morador pode acessar o sistema e consultar
                                tudo sobre suas encomendas; inclusive visualizar a foto dos pacotes ainda pendentes de
                                retirada, o que o possibilita planejar essa retirada de maneira otimizada.
                            </p>
                        </div>
                        <button class="timeline-card-toggle">+</button>
                    </div>
                </div>
                <!-- Card 5 -->
                <div class="timeline-card">
                    <img src="/assets/images/timeline/05.png" class="timeline-card-img"
                        alt="Retirada Segura">
                    <div class="timeline-card-body">
                        <h4 class="timeline-card-title">Retirada Segura</h4>
                        <div class="timeline-card-content">
                            <p>Para garantir a segurança, o sistema exige um
                                <strong>código aleatório</strong> e único para a retirada de cada pacote.
                                Esse código é gerado no registro da encomenda e só fica
                                acessível na conta do morador associado à unidade.
                            </p>
                            <p>O código deve ser informado no ato da retirada da encomenda, o que impede qualquer erro
                                na entrega de pacotes.</p>
                            <p>Esse aspecto reforça a segurança
                                tanto para os moradores quanto para os responsáveis pela entrega. </p>
                        </div>
                        <button class="timeline-card-toggle">+</button>
                    </div>
                </div>
                <!-- Card 6 -->
                <div class="timeline-card">
                    <img src="/assets/images/timeline/06.png" class="timeline-card-img"
                        alt="Ainda mais comodidade">
                    <div class="timeline-card-body">
                        <h4 class="timeline-card-title">Ainda mais comodidade</h4>
                        <div class="timeline-card-content">
                            <p>Ainda é possível ao morador solicitar junto à administração do condomínio o
                                <strong>Cartão do Morador</strong>, que contém um <i><strong>QR Code</strong></i>
                                associado à sua unidade. Este cartão
                                possibilita a retirada de encomendas apenas com a sua apresentação, dispensando o uso do
                                código de retirada, mas mantendo a mesma garantia e segurança.
                            </p>
                        </div>
                        <button class="timeline-card-toggle">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`,
  za = `<!-- Modal 1: Para Moradores -->
<div class="modal fade modal-paginated" id="modal1" tabindex="-1" aria-labelledby="modal1Label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div class="modal-content" style="display: flex; flex-direction: column; height: 85vh; max-height: 700px;">
            <!-- Metade Superior: Imagem -->
            <div class="modal-top-image" style="
                    flex: 1;
                    background-image: url('/landing-encomendas/assets/images/bg_a.jpg');
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    border-top-left-radius: var(--bs-modal-border-radius);
                    border-top-right-radius: var(--bs-modal-border-radius);">
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar"
                    style="position: absolute; top: 1rem; right: 1rem;"></button>
            </div>
            <!-- Metade Inferior: Conteúdo -->
            <div class="modal-body" style="flex: 1; display: flex; flex-direction: column; padding: 1.5rem;">
                <div class="content-container"
                    style="flex: 1; overflow-y: auto; padding-right: 1rem; margin-right: -1rem;">
                    <div class="page-content">
                        <h4>Bem-vindo!</h4>
                        <p>O sistema de Gestão de Encomendas foi criado para tornar o processo de recebimento e retirada
                            <strong>mais simples, rápido e seguro.</strong>
                        </p>
                        <p>Logo ao acessar, você tem uma visão clara de todas as suas entregas, com foco em
                            <strong>transparência, praticidade e controle</strong> no seu dia a dia.
                        </p>
                    </div>

                    <div class="page-content hidden">
                        <h4>Encomendas</h4>
                        <p>Na tela inicial, suas encomendas aparecem de forma organizada e intuitiva.</p>
                        <p>Você pode aplicar <strong>filtros rápidos</strong> para visualizar apenas as pendentes,
                            verificar o <strong>status de
                                cada entrega</strong> e acessar dados importantes como destinatário, torre, apartamento,
                            datas e o
                            responsável pelo registro.</p>
                    </div>

                    <div class="page-content hidden">
                        <h4>Visualização e Notificações</h4>
                        <p>Cada entrega possui uma <strong>foto real do pacote</strong>, capturada na portaria,
                            facilitando a identificação.</p>
                        <p>Assim que uma nova encomenda é registrada, você recebe <strong>notificações
                                automáticas</strong> por e-mail
                            e/ou WhatsApp, garantindo comodidade e agilidade.
                        </p>
                    </div>

                    <div class="page-content hidden">
                        <h4>Retirada Segura</h4>
                        <p>Cada entrega possui um <strong>código único de retirada</strong>, que deve ser apresentado na
                            portaria para
                            garantir que o pacote seja entregue à pessoa certa.</p>
                        <p>Para ainda mais praticidade, é possível solicitar um <strong>cartão com QR Code
                                exclusivo</strong>, ideal
                            para quem prefere acesso rápido, mesmo quando não houver acesso ao sistema.</p>
                    </div>

                    <div class="page-content hidden">
                        <h4>Controle e Tranquilidade</h4>
                        <p>O painel do morador também oferece <strong>dashboards com histórico de entregas e
                                retiradas</strong>,
                            proporcionando total visibilidade.</p>
                        <p>Você tem a tranquilidade de saber que suas encomendas estão seguras, registradas e acessíveis
                            — com tecnologia que simplifica e dá confiança a todo o processo.</p>
                    </div>
                </div>

                <div class="modal-footer flex justify-content-between items-center"
                    style="border-top: none; padding-top: 1rem; padding-bottom: 0;">
                    <button type="button" class="btn btn-primary rounded-pill prev-btn me-auto">
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <button type="button" class="btn btn-primary rounded-pill next-btn ms-auto">
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>

                <div class="page-indicator-container mt-3"></div>
            </div>
        </div>
    </div>`,
  Fa = `<!-- Modal 2: Para Funcionários -->
<div class="modal fade modal-paginated" id="modal2" tabindex="-1" aria-labelledby="modal2Label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div class="modal-content" style="display: flex; flex-direction: column; height: 85vh; max-height: 700px;">
            <!-- Metade Superior: Imagem -->
            <div class="modal-top-image" style="
                    flex: 1;
                    background-image: url('/landing-encomendas/assets/images/bg_b.jpg');
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    border-top-left-radius: var(--bs-modal-border-radius);
                    border-top-right-radius: var(--bs-modal-border-radius);">
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar"
                    style="position: absolute; top: 1rem; right: 1rem;"></button>
            </div>
            <!-- Metade Inferior: Conteúdo -->
            <div class="modal-body" style="flex: 1; display: flex; flex-direction: column; padding: 1.5rem;">
                <div class="content-container"
                    style="flex: 1; overflow-y: auto; padding-right: 1rem; margin-right: -1rem;">
                    <div class="page-content">
                        <h4>Visão Geral</h4>
                        <p>O sistema apresenta uma visão <strong>organizada e imediata</strong> de todas as encomendas
                            registradas.</p>
                        <p>Com filtros por destinatário, torre, apartamento ou mesmo por status, é possível localizar
                            qualquer
                            pacote em segundos, garantindo <strong>eficiência e controle total</strong>.</p>
                    </div>

                    <div class="page-content hidden">
                        <h4>Cadastro de Novas Encomendas</h4>
                        <p>Registrar uma nova encomenda é <strong>simples, rápido e intuitivo</strong>.</p>
                        <p>O processo é feito em três passos simples:</p>
                        <ol>
                            <li> Tire <strong>uma foto do pacote</strong>, para rápida localização posterior.</li>
                            <li> Em seguida, <strong>fotografe a etiqueta</strong> — o sistema lê automaticamente os
                                dados de torre,
                                apartamento e destinatário.</li>
                            <li> Revise e confirme. Em segundos, a encomenda é registrada e o morador é notificado
                                automaticamente.</li>
                        </ol>
                    </div>

                    <div class="page-content hidden">
                        <h4>Entrega Segura</h4>
                        <p>Na retirada, o sistema garante <strong>segurança e rastreabilidade total</strong>.</p>
                        <p>O funcionário visualiza a foto do pacote antes da entrega e confere todos os dados.</p>
                        <p>O morador apresenta seu <strong>código de retirada ou QR Code personalizado</strong>, e o
                            sistema libera imediatamente a encomenda.</p>
                        <p>Assim, cada pacote é entregue somente à pessoa autorizada, evitando erros e garantindo
                            tranquilidade.</p>
                    </div>

                    <div class="page-content hidden">
                        <h4>Comprovação e Histórico</h4>
                        <p>Após a retirada, o status da encomenda é atualizado automaticamente para
                            <strong>“Retirada”</strong>.
                        </p>
                        <p>Todas as etapas ficam registradas no sistema, gerando um <strong>histórico completo e
                                auditável</strong>, acessível a qualquer momento.</p>
                    </div>

                    <div class="page-content hidden">
                        <h4>Eficiência e Confiabilidade</h4>
                        <p>O sistema foi projetado para tornar o trabalho da portaria <strong>mais rápido, seguro e
                                organizado</strong>.
                        </p>
                        <p>A automatização elimina erros manuais, melhora o fluxo e aumenta a produtividade — resultado:
                            <strong>mais eficiência para os funcionários e mais confiança para os moradores</strong>.
                        </p>
                    </div>
                </div>

                <div class="modal-footer flex justify-content-between items-center"
                    style="border-top: none; padding-top: 1rem; padding-bottom: 0;">
                    <button type="button" class="btn btn-primary rounded-pill prev-btn me-auto">
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <button type="button" class="btn btn-primary rounded-pill next-btn ms-auto">
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>

                <div class="page-indicator-container mt-3"></div>
            </div>
        </div>
    </div>
</div>`,
  Ha = `<!-- Modal 3: Para Gestores -->
<div class="modal fade modal-paginated" id="modal3" tabindex="-1" aria-labelledby="modal3Label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div class="modal-content" style="display: flex; flex-direction: column; height: 85vh; max-height: 700px;">
            <!-- Metade Superior: Imagem -->
            <div class="modal-top-image" style="
                    flex: 1;
                    background-image: url('/landing-encomendas/assets/images/bg_c.png');
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    border-top-left-radius: var(--bs-modal-border-radius);
                    border-top-right-radius: var(--bs-modal-border-radius);">
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar"
                    style="position: absolute; top: 1rem; right: 1rem;"></button>
            </div>
            <!-- Metade Inferior: Conteúdo -->
            <div class="modal-body" style="flex: 1; display: flex; flex-direction: column; padding: 1.5rem;">
                <div class="content-container"
                    style="flex: 1; overflow-y: auto; padding-right: 1rem; margin-right: -1rem;">
                    <div class="page-content">
                        <h4>Visão Geral da Administração</h4>
                        <p>O síndico, zelador ou administrador conta com um <strong>Painel de Controle
                                centralizado</strong>, reunindo
                            todos os dados e operações do condomínio em um só lugar.</p>
                        <p>A gestão se torna <strong>visual, simples e baseada em dados reais</strong>, facilitando
                            decisões e
                            otimizando rotinas.</p>
                    </div>

                    <div class="page-content hidden">
                        <h4>Módulos de Gestão</h4>
                        <p>A tela principal do administrador dá acesso direto a quatro módulos essenciais:</p>
                        <ul style="list-style: disc;">
                            <li><strong>Encomendas:</strong> gestão completa das entregas, semelhante à visão dos
                                funcionários.</li>
                            <li><strong>Dashboards:</strong> análise de dados e indicadores de desempenho, entregas,
                                horários, fluxos e
                                muitos mais.</li>
                            <li><strong>Funcionários:</strong> controle de acesso e permissões da equipe.</li>
                            <li><strong>Moradores</strong>: gerenciamento de cadastros, unidades e cartões de retirada
                                de encomendas.
                            </li>
                        </ul>
                        <p>Tudo de forma integrada, garantindo controle total e segurança operacional.</p>
                    </div>

                    <div class="page-content hidden">
                        <h4>Dashboards e Indicadores</h4>
                        <p>O módulo de Dashboards transforma dados em <strong>informações estratégicas</strong>:</p>
                        <ul style="list-style: disc;">
                            <li>Volume total e proporção de encomendas retiradas e pendentes.</li>
                            <li>Tendências mensais de fluxo de encomendas.</li>
                            <li>Tempo médio de retirada, útil para medir eficiência.</li>
                            <li>Horários de pico, para otimizar a equipe responsável pelas entregas.</li>
                        </ul>
                        <p>Essas métricas oferecem <strong>visão clara da performance</strong> e auxiliam no
                            planejamento de melhorias.
                        </p>
                    </div>

                    <div class="page-content hidden">
                        <h4>Gestão de Usuários</h4>
                        <p>Gerencie com facilidade os funcionários e moradores do condomínio: </p>
                        <ul style="list-style: disc;">
                            <li>Controle quem pode registrar e entregar encomendas. </li>
                            <li>Mantenha os cadastros de moradores atualizados, com torre, apartamento e cartão de QR
                                Code associados.</li>
                        </ul>
                        <p>Essa organização garante <strong>segurança, rastreabilidade e controle de acessos</strong>,
                            mantendo o sistema sempre confiável e atualizado.</p>

                    </div>

                    <div class="page-content hidden">
                        <h4>Transparência e Eficiência</h4>
                        <p>Com todas as etapas automatizadas e registradas em tempo real, <strong>o sistema reduz falhas
                                manuais</strong>
                            e melhora a <strong>comunicação entre portaria e administração</strong> e gere
                            <strong>relatórios completos e auditáveis</strong>.
                        </p>
                        <p>Relatórios e históricos completos garantem transparência nas operações, redução de custos
                            administrativos e continuidade nas rotinas, mesmo em trocas de equipe.</p>
                        <p>O resultado é uma <strong>gestão moderna, econômica e transparente</strong>, com continuidade
                            mesmo em trocas de equipe.</p>
                    </div>
                </div>

                <div class="modal-footer flex justify-content-between items-center"
                    style="border-top: none; padding-top: 1rem; padding-bottom: 0;">
                    <button type="button" class="btn btn-primary rounded-pill prev-btn me-auto">
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <button type="button" class="btn btn-primary rounded-pill next-btn ms-auto">
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>

                <div class="page-indicator-container mt-3"></div>
            </div>
        </div>
    </div>
</div>`,
  Ba = `<section id="contato" class="section about">
    <div class="text-center mb-4">
        <i class="fa-brands fa-whatsapp fa-3x text-success mb-2"></i>
        <h2 class="fw-bold text-nowrap" style="color:#075E54;">
            Solicite mais informações
        </h2>
        <p class="text-muted">
            Preencha os dados abaixo e envie uma mensagem direto para nós. <br>
            Vamos conversar sobre como facilitar a gestão de encomendas do seu condomínio.
        </p>
    </div>

    <div class="col-md-4 col-lg-3 mx-auto">
        <div class="card border-0 shadow-sm">
            <div class="card-body">
                <form id="formContato">
                    <div class="mb-3">
                        <label for="nome" class="form-label fw-semibold">Seu nome</label>
                        <input type="text" id="nome" class="form-control" placeholder="Ex: João Silva" required>
                    </div>
                    <div class="mb-3">
                        <label for="condominio" class="form-label fw-semibold">Nome do condomínio</label>
                        <input type="text" id="condominio" class="form-control"
                            placeholder="Ex: Condomínio Jardim das Flores" required>
                    </div>
                    <div class="mb-3">
                        <label for="quantidade" class="form-label fw-semibold">Quantidade total de unidades</label>
                        <input type="number" id="quantidade" class="form-control" placeholder="Ex: 1000" min="5"
                            max="2000" required>
                    </div>
                    <button type="submit" class="btn w-100 py-2"
                        style="background-color:#25D366; color:white; font-weight:600;">
                        <i class="fa-brands fa-whatsapp me-2"></i> Enviar pelo WhatsApp
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>`,
  Ra = `<footer id="footer" class="footer">
  <div class="container">
    <p>© 2025 Sistema de Encomendas. Todos os direitos reservados.</p>
  </div>
</footer>
`;
document.addEventListener("DOMContentLoaded", () => {
  const j = document.querySelector(".hamburger"),
    x = document.querySelector(".nav-menu");
  let E = document.querySelector(".nav-overlay");
  if (
    (E ||
      ((E = document.createElement("div")),
      E.classList.add("nav-overlay"),
      document.body.appendChild(E)),
    !j || !x)
  )
    return;
  function T() {
    j.classList.toggle("active"),
      x.classList.toggle("active"),
      E.classList.toggle("active");
  }
  j.addEventListener("click", T),
    x.querySelectorAll("a").forEach((b) => {
      b.addEventListener("click", T);
    }),
    E.addEventListener("click", T),
    window.addEventListener("scroll", () => {
      const b = document.querySelector(".navbar");
      window.scrollY > 10
        ? b.classList.add("scrolled")
        : b.classList.remove("scrolled");
    }),
    document.querySelector(".logo").addEventListener("click", (b) => {
      b.preventDefault(), window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", () => {
  const j = document.querySelector(".accordion-wrapper"),
    x = document.querySelectorAll(".accordion-item");
  if (!j || x.length === 0) return;
  let E = 0,
    T;
  const b = 768,
    O = (P) => {
      x.forEach((B) => {
        B.classList.remove("active");
      }),
        x[P].offsetWidth,
        x[P].classList.add("active"),
        (E = P);
    },
    Q = () => {
      const P = (E + 1) % x.length;
      O(P);
    },
    z = () => {
      clearInterval(T), window.innerWidth > b && (T = setInterval(Q, 5e3));
    },
    H = () => {
      clearInterval(T), z();
    };
  x.forEach((P, B) => {
    P.addEventListener("click", () => {
      const F = window.innerWidth <= b;
      if (P.classList.contains("active")) {
        F || H();
        return;
      }
      O(B), F || H();
    });
  }),
    j.addEventListener("mouseenter", () => {
      clearInterval(T);
    }),
    j.addEventListener("mouseleave", () => {
      H();
    }),
    window.innerWidth > b && O(0),
    z(),
    window.addEventListener("resize", z);
});
document.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach((x) => {
    x.getBoundingClientRect().top < window.innerHeight - 100 &&
      x.classList.add("visible");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const j = document.querySelectorAll(".card-moderno");
  function x(T) {
    const b = T.getBoundingClientRect();
    return (
      b.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      b.bottom >= 0
    );
  }
  function E() {
    let T = 0;
    const b = 150;
    j.forEach((O) => {
      x(O) &&
        !O.classList.contains("visible") &&
        (setTimeout(() => {
          O.classList.add("visible");
        }, T),
        (T += b));
    });
  }
  E(),
    window.addEventListener("scroll", E),
    window.addEventListener("resize", E);
});
var kt = { exports: {} };
/*!
 * Bootstrap v5.3.8 (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ var Wa = kt.exports,
  rs;
function Va() {
  return (
    rs ||
      ((rs = 1),
      (function (j, x) {
        (function (E, T) {
          j.exports = T();
        })(Wa, function () {
          const E = new Map(),
            T = {
              set(n, e, t) {
                E.has(n) || E.set(n, new Map());
                const i = E.get(n);
                i.has(e) || i.size === 0
                  ? i.set(e, t)
                  : console.error(
                      `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                        Array.from(i.keys())[0]
                      }.`
                    );
              },
              get: (n, e) => (E.has(n) && E.get(n).get(e)) || null,
              remove(n, e) {
                if (!E.has(n)) return;
                const t = E.get(n);
                t.delete(e), t.size === 0 && E.delete(n);
              },
            },
            b = "transitionend",
            O = (n) => (
              n &&
                window.CSS &&
                window.CSS.escape &&
                (n = n.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)),
              n
            ),
            Q = (n) =>
              n == null
                ? `${n}`
                : Object.prototype.toString
                    .call(n)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase(),
            z = (n) => {
              n.dispatchEvent(new Event(b));
            },
            H = (n) =>
              !(!n || typeof n != "object") &&
              (n.jquery !== void 0 && (n = n[0]), n.nodeType !== void 0),
            P = (n) =>
              H(n)
                ? n.jquery
                  ? n[0]
                  : n
                : typeof n == "string" && n.length > 0
                ? document.querySelector(O(n))
                : null,
            B = (n) => {
              if (!H(n) || n.getClientRects().length === 0) return !1;
              const e =
                  getComputedStyle(n).getPropertyValue("visibility") ===
                  "visible",
                t = n.closest("details:not([open])");
              if (!t) return e;
              if (t !== n) {
                const i = n.closest("summary");
                if ((i && i.parentNode !== t) || i === null) return !1;
              }
              return e;
            },
            F = (n) =>
              !n ||
              n.nodeType !== Node.ELEMENT_NODE ||
              !!n.classList.contains("disabled") ||
              (n.disabled !== void 0
                ? n.disabled
                : n.hasAttribute("disabled") &&
                  n.getAttribute("disabled") !== "false"),
            de = (n) => {
              if (!document.documentElement.attachShadow) return null;
              if (typeof n.getRootNode == "function") {
                const e = n.getRootNode();
                return e instanceof ShadowRoot ? e : null;
              }
              return n instanceof ShadowRoot
                ? n
                : n.parentNode
                ? de(n.parentNode)
                : null;
            },
            ae = () => {},
            Xe = (n) => {
              n.offsetHeight;
            },
            _n = () =>
              window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
                ? window.jQuery
                : null,
            St = [],
            Z = () => document.documentElement.dir === "rtl",
            ee = (n) => {
              var e;
              (e = () => {
                const t = _n();
                if (t) {
                  const i = n.NAME,
                    s = t.fn[i];
                  (t.fn[i] = n.jQueryInterface),
                    (t.fn[i].Constructor = n),
                    (t.fn[i].noConflict = () => (
                      (t.fn[i] = s), n.jQueryInterface
                    ));
                }
              }),
                document.readyState === "loading"
                  ? (St.length ||
                      document.addEventListener("DOMContentLoaded", () => {
                        for (const t of St) t();
                      }),
                    St.push(e))
                  : e();
            },
            U = (n, e = [], t = n) =>
              typeof n == "function" ? n.call(...e) : t,
            bn = (n, e, t = !0) => {
              if (!t) return void U(n);
              const i =
                ((a) => {
                  if (!a) return 0;
                  let { transitionDuration: r, transitionDelay: c } =
                    window.getComputedStyle(a);
                  const u = Number.parseFloat(r),
                    h = Number.parseFloat(c);
                  return u || h
                    ? ((r = r.split(",")[0]),
                      (c = c.split(",")[0]),
                      1e3 * (Number.parseFloat(r) + Number.parseFloat(c)))
                    : 0;
                })(e) + 5;
              let s = !1;
              const o = ({ target: a }) => {
                a === e && ((s = !0), e.removeEventListener(b, o), U(n));
              };
              e.addEventListener(b, o),
                setTimeout(() => {
                  s || z(e);
                }, i);
            },
            It = (n, e, t, i) => {
              const s = n.length;
              let o = n.indexOf(e);
              return o === -1
                ? !t && i
                  ? n[s - 1]
                  : n[0]
                : ((o += t ? 1 : -1),
                  i && (o = (o + s) % s),
                  n[Math.max(0, Math.min(o, s - 1))]);
            },
            ls = /[^.]*(?=\..*)\.|.*/,
            cs = /\..*/,
            ds = /::\d+$/,
            Dt = {};
          let yn = 1;
          const wn = { mouseenter: "mouseover", mouseleave: "mouseout" },
            us = new Set([
              "click",
              "dblclick",
              "mouseup",
              "mousedown",
              "contextmenu",
              "mousewheel",
              "DOMMouseScroll",
              "mouseover",
              "mouseout",
              "mousemove",
              "selectstart",
              "selectend",
              "keydown",
              "keypress",
              "keyup",
              "orientationchange",
              "touchstart",
              "touchmove",
              "touchend",
              "touchcancel",
              "pointerdown",
              "pointermove",
              "pointerup",
              "pointerleave",
              "pointercancel",
              "gesturestart",
              "gesturechange",
              "gestureend",
              "focus",
              "blur",
              "change",
              "reset",
              "select",
              "submit",
              "focusin",
              "focusout",
              "load",
              "unload",
              "beforeunload",
              "resize",
              "move",
              "DOMContentLoaded",
              "readystatechange",
              "error",
              "abort",
              "scroll",
            ]);
          function En(n, e) {
            return (e && `${e}::${yn++}`) || n.uidEvent || yn++;
          }
          function An(n) {
            const e = En(n);
            return (n.uidEvent = e), (Dt[e] = Dt[e] || {}), Dt[e];
          }
          function xn(n, e, t = null) {
            return Object.values(n).find(
              (i) => i.callable === e && i.delegationSelector === t
            );
          }
          function Cn(n, e, t) {
            const i = typeof e == "string",
              s = i ? t : e || t;
            let o = On(n);
            return us.has(o) || (o = n), [i, s, o];
          }
          function Tn(n, e, t, i, s) {
            if (typeof e != "string" || !n) return;
            let [o, a, r] = Cn(e, t, i);
            e in wn &&
              (a = ((g) =>
                function (f) {
                  if (
                    !f.relatedTarget ||
                    (f.relatedTarget !== f.delegateTarget &&
                      !f.delegateTarget.contains(f.relatedTarget))
                  )
                    return g.call(this, f);
                })(a));
            const c = An(n),
              u = c[r] || (c[r] = {}),
              h = xn(u, a, o ? t : null);
            if (h) return void (h.oneOff = h.oneOff && s);
            const d = En(a, e.replace(ls, "")),
              _ = o
                ? (function (p, g, f) {
                    return function v(S) {
                      const M = p.querySelectorAll(g);
                      for (
                        let { target: w } = S;
                        w && w !== this;
                        w = w.parentNode
                      )
                        for (const C of M)
                          if (C === w)
                            return (
                              $t(S, { delegateTarget: w }),
                              v.oneOff && l.off(p, S.type, g, f),
                              f.apply(w, [S])
                            );
                    };
                  })(n, t, a)
                : (function (p, g) {
                    return function f(v) {
                      return (
                        $t(v, { delegateTarget: p }),
                        f.oneOff && l.off(p, v.type, g),
                        g.apply(p, [v])
                      );
                    };
                  })(n, a);
            (_.delegationSelector = o ? t : null),
              (_.callable = a),
              (_.oneOff = s),
              (_.uidEvent = d),
              (u[d] = _),
              n.addEventListener(r, _, o);
          }
          function Mt(n, e, t, i, s) {
            const o = xn(e[t], i, s);
            o && (n.removeEventListener(t, o, !!s), delete e[t][o.uidEvent]);
          }
          function hs(n, e, t, i) {
            const s = e[t] || {};
            for (const [o, a] of Object.entries(s))
              o.includes(i) && Mt(n, e, t, a.callable, a.delegationSelector);
          }
          function On(n) {
            return (n = n.replace(cs, "")), wn[n] || n;
          }
          const l = {
            on(n, e, t, i) {
              Tn(n, e, t, i, !1);
            },
            one(n, e, t, i) {
              Tn(n, e, t, i, !0);
            },
            off(n, e, t, i) {
              if (typeof e != "string" || !n) return;
              const [s, o, a] = Cn(e, t, i),
                r = a !== e,
                c = An(n),
                u = c[a] || {},
                h = e.startsWith(".");
              if (o === void 0) {
                if (h) for (const d of Object.keys(c)) hs(n, c, d, e.slice(1));
                for (const [d, _] of Object.entries(u)) {
                  const p = d.replace(ds, "");
                  (r && !e.includes(p)) ||
                    Mt(n, c, a, _.callable, _.delegationSelector);
                }
              } else {
                if (!Object.keys(u).length) return;
                Mt(n, c, a, o, s ? t : null);
              }
            },
            trigger(n, e, t) {
              if (typeof e != "string" || !n) return null;
              const i = _n();
              let s = null,
                o = !0,
                a = !0,
                r = !1;
              e !== On(e) &&
                i &&
                ((s = i.Event(e, t)),
                i(n).trigger(s),
                (o = !s.isPropagationStopped()),
                (a = !s.isImmediatePropagationStopped()),
                (r = s.isDefaultPrevented()));
              const c = $t(new Event(e, { bubbles: o, cancelable: !0 }), t);
              return (
                r && c.preventDefault(),
                a && n.dispatchEvent(c),
                c.defaultPrevented && s && s.preventDefault(),
                c
              );
            },
          };
          function $t(n, e = {}) {
            for (const [t, i] of Object.entries(e))
              try {
                n[t] = i;
              } catch {
                Object.defineProperty(n, t, { configurable: !0, get: () => i });
              }
            return n;
          }
          function Ln(n) {
            if (n === "true") return !0;
            if (n === "false") return !1;
            if (n === Number(n).toString()) return Number(n);
            if (n === "" || n === "null") return null;
            if (typeof n != "string") return n;
            try {
              return JSON.parse(decodeURIComponent(n));
            } catch {
              return n;
            }
          }
          function Pt(n) {
            return n.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
          }
          const fe = {
            setDataAttribute(n, e, t) {
              n.setAttribute(`data-bs-${Pt(e)}`, t);
            },
            removeDataAttribute(n, e) {
              n.removeAttribute(`data-bs-${Pt(e)}`);
            },
            getDataAttributes(n) {
              if (!n) return {};
              const e = {},
                t = Object.keys(n.dataset).filter(
                  (i) => i.startsWith("bs") && !i.startsWith("bsConfig")
                );
              for (const i of t) {
                let s = i.replace(/^bs/, "");
                (s = s.charAt(0).toLowerCase() + s.slice(1)),
                  (e[s] = Ln(n.dataset[i]));
              }
              return e;
            },
            getDataAttribute: (n, e) => Ln(n.getAttribute(`data-bs-${Pt(e)}`)),
          };
          class Ge {
            static get Default() {
              return {};
            }
            static get DefaultType() {
              return {};
            }
            static get NAME() {
              throw new Error(
                'You have to implement the static method "NAME", for each component!'
              );
            }
            _getConfig(e) {
              return (
                (e = this._mergeConfigObj(e)),
                (e = this._configAfterMerge(e)),
                this._typeCheckConfig(e),
                e
              );
            }
            _configAfterMerge(e) {
              return e;
            }
            _mergeConfigObj(e, t) {
              const i = H(t) ? fe.getDataAttribute(t, "config") : {};
              return {
                ...this.constructor.Default,
                ...(typeof i == "object" ? i : {}),
                ...(H(t) ? fe.getDataAttributes(t) : {}),
                ...(typeof e == "object" ? e : {}),
              };
            }
            _typeCheckConfig(e, t = this.constructor.DefaultType) {
              for (const [i, s] of Object.entries(t)) {
                const o = e[i],
                  a = H(o) ? "element" : Q(o);
                if (!new RegExp(s).test(a))
                  throw new TypeError(
                    `${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${s}".`
                  );
              }
            }
          }
          class re extends Ge {
            constructor(e, t) {
              super(),
                (e = P(e)) &&
                  ((this._element = e),
                  (this._config = this._getConfig(t)),
                  T.set(this._element, this.constructor.DATA_KEY, this));
            }
            dispose() {
              T.remove(this._element, this.constructor.DATA_KEY),
                l.off(this._element, this.constructor.EVENT_KEY);
              for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
            }
            _queueCallback(e, t, i = !0) {
              bn(e, t, i);
            }
            _getConfig(e) {
              return (
                (e = this._mergeConfigObj(e, this._element)),
                (e = this._configAfterMerge(e)),
                this._typeCheckConfig(e),
                e
              );
            }
            static getInstance(e) {
              return T.get(P(e), this.DATA_KEY);
            }
            static getOrCreateInstance(e, t = {}) {
              return (
                this.getInstance(e) ||
                new this(e, typeof t == "object" ? t : null)
              );
            }
            static get VERSION() {
              return "5.3.8";
            }
            static get DATA_KEY() {
              return `bs.${this.NAME}`;
            }
            static get EVENT_KEY() {
              return `.${this.DATA_KEY}`;
            }
            static eventName(e) {
              return `${e}${this.EVENT_KEY}`;
            }
          }
          const Nt = (n) => {
              let e = n.getAttribute("data-bs-target");
              if (!e || e === "#") {
                let t = n.getAttribute("href");
                if (!t || (!t.includes("#") && !t.startsWith("."))) return null;
                t.includes("#") &&
                  !t.startsWith("#") &&
                  (t = `#${t.split("#")[1]}`),
                  (e = t && t !== "#" ? t.trim() : null);
              }
              return e
                ? e
                    .split(",")
                    .map((t) => O(t))
                    .join(",")
                : null;
            },
            m = {
              find: (n, e = document.documentElement) =>
                [].concat(...Element.prototype.querySelectorAll.call(e, n)),
              findOne: (n, e = document.documentElement) =>
                Element.prototype.querySelector.call(e, n),
              children: (n, e) =>
                [].concat(...n.children).filter((t) => t.matches(e)),
              parents(n, e) {
                const t = [];
                let i = n.parentNode.closest(e);
                for (; i; ) t.push(i), (i = i.parentNode.closest(e));
                return t;
              },
              prev(n, e) {
                let t = n.previousElementSibling;
                for (; t; ) {
                  if (t.matches(e)) return [t];
                  t = t.previousElementSibling;
                }
                return [];
              },
              next(n, e) {
                let t = n.nextElementSibling;
                for (; t; ) {
                  if (t.matches(e)) return [t];
                  t = t.nextElementSibling;
                }
                return [];
              },
              focusableChildren(n) {
                const e = [
                  "a",
                  "button",
                  "input",
                  "textarea",
                  "select",
                  "details",
                  "[tabindex]",
                  '[contenteditable="true"]',
                ]
                  .map((t) => `${t}:not([tabindex^="-"])`)
                  .join(",");
                return this.find(e, n).filter((t) => !F(t) && B(t));
              },
              getSelectorFromElement(n) {
                const e = Nt(n);
                return e && m.findOne(e) ? e : null;
              },
              getElementFromSelector(n) {
                const e = Nt(n);
                return e ? m.findOne(e) : null;
              },
              getMultipleElementsFromSelector(n) {
                const e = Nt(n);
                return e ? m.find(e) : [];
              },
            },
            lt = (n, e = "hide") => {
              const t = `click.dismiss${n.EVENT_KEY}`,
                i = n.NAME;
              l.on(document, t, `[data-bs-dismiss="${i}"]`, function (s) {
                if (
                  (["A", "AREA"].includes(this.tagName) && s.preventDefault(),
                  F(this))
                )
                  return;
                const o =
                  m.getElementFromSelector(this) || this.closest(`.${i}`);
                n.getOrCreateInstance(o)[e]();
              });
            },
            kn = ".bs.alert",
            ms = `close${kn}`,
            ps = `closed${kn}`;
          class Je extends re {
            static get NAME() {
              return "alert";
            }
            close() {
              if (l.trigger(this._element, ms).defaultPrevented) return;
              this._element.classList.remove("show");
              const e = this._element.classList.contains("fade");
              this._queueCallback(
                () => this._destroyElement(),
                this._element,
                e
              );
            }
            _destroyElement() {
              this._element.remove(),
                l.trigger(this._element, ps),
                this.dispose();
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = Je.getOrCreateInstance(this);
                if (typeof e == "string") {
                  if (
                    t[e] === void 0 ||
                    e.startsWith("_") ||
                    e === "constructor"
                  )
                    throw new TypeError(`No method named "${e}"`);
                  t[e](this);
                }
              });
            }
          }
          lt(Je, "close"), ee(Je);
          const Sn = '[data-bs-toggle="button"]';
          class Ze extends re {
            static get NAME() {
              return "button";
            }
            toggle() {
              this._element.setAttribute(
                "aria-pressed",
                this._element.classList.toggle("active")
              );
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = Ze.getOrCreateInstance(this);
                e === "toggle" && t[e]();
              });
            }
          }
          l.on(document, "click.bs.button.data-api", Sn, (n) => {
            n.preventDefault();
            const e = n.target.closest(Sn);
            Ze.getOrCreateInstance(e).toggle();
          }),
            ee(Ze);
          const $e = ".bs.swipe",
            fs = `touchstart${$e}`,
            gs = `touchmove${$e}`,
            vs = `touchend${$e}`,
            _s = `pointerdown${$e}`,
            bs = `pointerup${$e}`,
            ys = { endCallback: null, leftCallback: null, rightCallback: null },
            ws = {
              endCallback: "(function|null)",
              leftCallback: "(function|null)",
              rightCallback: "(function|null)",
            };
          class ct extends Ge {
            constructor(e, t) {
              super(),
                (this._element = e),
                e &&
                  ct.isSupported() &&
                  ((this._config = this._getConfig(t)),
                  (this._deltaX = 0),
                  (this._supportPointerEvents = !!window.PointerEvent),
                  this._initEvents());
            }
            static get Default() {
              return ys;
            }
            static get DefaultType() {
              return ws;
            }
            static get NAME() {
              return "swipe";
            }
            dispose() {
              l.off(this._element, $e);
            }
            _start(e) {
              this._supportPointerEvents
                ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX)
                : (this._deltaX = e.touches[0].clientX);
            }
            _end(e) {
              this._eventIsPointerPenTouch(e) &&
                (this._deltaX = e.clientX - this._deltaX),
                this._handleSwipe(),
                U(this._config.endCallback);
            }
            _move(e) {
              this._deltaX =
                e.touches && e.touches.length > 1
                  ? 0
                  : e.touches[0].clientX - this._deltaX;
            }
            _handleSwipe() {
              const e = Math.abs(this._deltaX);
              if (e <= 40) return;
              const t = e / this._deltaX;
              (this._deltaX = 0),
                t &&
                  U(
                    t > 0
                      ? this._config.rightCallback
                      : this._config.leftCallback
                  );
            }
            _initEvents() {
              this._supportPointerEvents
                ? (l.on(this._element, _s, (e) => this._start(e)),
                  l.on(this._element, bs, (e) => this._end(e)),
                  this._element.classList.add("pointer-event"))
                : (l.on(this._element, fs, (e) => this._start(e)),
                  l.on(this._element, gs, (e) => this._move(e)),
                  l.on(this._element, vs, (e) => this._end(e)));
            }
            _eventIsPointerPenTouch(e) {
              return (
                this._supportPointerEvents &&
                (e.pointerType === "pen" || e.pointerType === "touch")
              );
            }
            static isSupported() {
              return (
                "ontouchstart" in document.documentElement ||
                navigator.maxTouchPoints > 0
              );
            }
          }
          const be = ".bs.carousel",
            In = ".data-api",
            Es = "ArrowLeft",
            As = "ArrowRight",
            et = "next",
            Pe = "prev",
            Ne = "left",
            dt = "right",
            xs = `slide${be}`,
            jt = `slid${be}`,
            Cs = `keydown${be}`,
            Ts = `mouseenter${be}`,
            Os = `mouseleave${be}`,
            Ls = `dragstart${be}`,
            ks = `load${be}${In}`,
            Ss = `click${be}${In}`,
            Dn = "carousel",
            ut = "active",
            Mn = ".active",
            $n = ".carousel-item",
            Is = Mn + $n,
            Ds = { [Es]: dt, [As]: Ne },
            Ms = {
              interval: 5e3,
              keyboard: !0,
              pause: "hover",
              ride: !1,
              touch: !0,
              wrap: !0,
            },
            $s = {
              interval: "(number|boolean)",
              keyboard: "boolean",
              pause: "(string|boolean)",
              ride: "(boolean|string)",
              touch: "boolean",
              wrap: "boolean",
            };
          class je extends re {
            constructor(e, t) {
              super(e, t),
                (this._interval = null),
                (this._activeElement = null),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._swipeHelper = null),
                (this._indicatorsElement = m.findOne(
                  ".carousel-indicators",
                  this._element
                )),
                this._addEventListeners(),
                this._config.ride === Dn && this.cycle();
            }
            static get Default() {
              return Ms;
            }
            static get DefaultType() {
              return $s;
            }
            static get NAME() {
              return "carousel";
            }
            next() {
              this._slide(et);
            }
            nextWhenVisible() {
              !document.hidden && B(this._element) && this.next();
            }
            prev() {
              this._slide(Pe);
            }
            pause() {
              this._isSliding && z(this._element), this._clearInterval();
            }
            cycle() {
              this._clearInterval(),
                this._updateInterval(),
                (this._interval = setInterval(
                  () => this.nextWhenVisible(),
                  this._config.interval
                ));
            }
            _maybeEnableCycle() {
              this._config.ride &&
                (this._isSliding
                  ? l.one(this._element, jt, () => this.cycle())
                  : this.cycle());
            }
            to(e) {
              const t = this._getItems();
              if (e > t.length - 1 || e < 0) return;
              if (this._isSliding)
                return void l.one(this._element, jt, () => this.to(e));
              const i = this._getItemIndex(this._getActive());
              if (i === e) return;
              const s = e > i ? et : Pe;
              this._slide(s, t[e]);
            }
            dispose() {
              this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
            }
            _configAfterMerge(e) {
              return (e.defaultInterval = e.interval), e;
            }
            _addEventListeners() {
              this._config.keyboard &&
                l.on(this._element, Cs, (e) => this._keydown(e)),
                this._config.pause === "hover" &&
                  (l.on(this._element, Ts, () => this.pause()),
                  l.on(this._element, Os, () => this._maybeEnableCycle())),
                this._config.touch &&
                  ct.isSupported() &&
                  this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
              for (const t of m.find(".carousel-item img", this._element))
                l.on(t, Ls, (i) => i.preventDefault());
              const e = {
                leftCallback: () => this._slide(this._directionToOrder(Ne)),
                rightCallback: () => this._slide(this._directionToOrder(dt)),
                endCallback: () => {
                  this._config.pause === "hover" &&
                    (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    (this.touchTimeout = setTimeout(
                      () => this._maybeEnableCycle(),
                      500 + this._config.interval
                    )));
                },
              };
              this._swipeHelper = new ct(this._element, e);
            }
            _keydown(e) {
              if (/input|textarea/i.test(e.target.tagName)) return;
              const t = Ds[e.key];
              t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
            }
            _getItemIndex(e) {
              return this._getItems().indexOf(e);
            }
            _setActiveIndicatorElement(e) {
              if (!this._indicatorsElement) return;
              const t = m.findOne(Mn, this._indicatorsElement);
              t.classList.remove(ut), t.removeAttribute("aria-current");
              const i = m.findOne(
                `[data-bs-slide-to="${e}"]`,
                this._indicatorsElement
              );
              i &&
                (i.classList.add(ut), i.setAttribute("aria-current", "true"));
            }
            _updateInterval() {
              const e = this._activeElement || this._getActive();
              if (!e) return;
              const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
              this._config.interval = t || this._config.defaultInterval;
            }
            _slide(e, t = null) {
              if (this._isSliding) return;
              const i = this._getActive(),
                s = e === et,
                o = t || It(this._getItems(), i, s, this._config.wrap);
              if (o === i) return;
              const a = this._getItemIndex(o),
                r = (d) =>
                  l.trigger(this._element, d, {
                    relatedTarget: o,
                    direction: this._orderToDirection(e),
                    from: this._getItemIndex(i),
                    to: a,
                  });
              if (r(xs).defaultPrevented || !i || !o) return;
              const c = !!this._interval;
              this.pause(),
                (this._isSliding = !0),
                this._setActiveIndicatorElement(a),
                (this._activeElement = o);
              const u = s ? "carousel-item-start" : "carousel-item-end",
                h = s ? "carousel-item-next" : "carousel-item-prev";
              o.classList.add(h),
                Xe(o),
                i.classList.add(u),
                o.classList.add(u),
                this._queueCallback(
                  () => {
                    o.classList.remove(u, h),
                      o.classList.add(ut),
                      i.classList.remove(ut, h, u),
                      (this._isSliding = !1),
                      r(jt);
                  },
                  i,
                  this._isAnimated()
                ),
                c && this.cycle();
            }
            _isAnimated() {
              return this._element.classList.contains("slide");
            }
            _getActive() {
              return m.findOne(Is, this._element);
            }
            _getItems() {
              return m.find($n, this._element);
            }
            _clearInterval() {
              this._interval &&
                (clearInterval(this._interval), (this._interval = null));
            }
            _directionToOrder(e) {
              return Z() ? (e === Ne ? Pe : et) : e === Ne ? et : Pe;
            }
            _orderToDirection(e) {
              return Z() ? (e === Pe ? Ne : dt) : e === Pe ? dt : Ne;
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = je.getOrCreateInstance(this, e);
                if (typeof e != "number") {
                  if (typeof e == "string") {
                    if (
                      t[e] === void 0 ||
                      e.startsWith("_") ||
                      e === "constructor"
                    )
                      throw new TypeError(`No method named "${e}"`);
                    t[e]();
                  }
                } else t.to(e);
              });
            }
          }
          l.on(
            document,
            Ss,
            "[data-bs-slide], [data-bs-slide-to]",
            function (n) {
              const e = m.getElementFromSelector(this);
              if (!e || !e.classList.contains(Dn)) return;
              n.preventDefault();
              const t = je.getOrCreateInstance(e),
                i = this.getAttribute("data-bs-slide-to");
              return i
                ? (t.to(i), void t._maybeEnableCycle())
                : fe.getDataAttribute(this, "slide") === "next"
                ? (t.next(), void t._maybeEnableCycle())
                : (t.prev(), void t._maybeEnableCycle());
            }
          ),
            l.on(window, ks, () => {
              const n = m.find('[data-bs-ride="carousel"]');
              for (const e of n) je.getOrCreateInstance(e);
            }),
            ee(je);
          const tt = ".bs.collapse",
            Ps = `show${tt}`,
            Ns = `shown${tt}`,
            js = `hide${tt}`,
            qs = `hidden${tt}`,
            zs = `click${tt}.data-api`,
            qt = "show",
            qe = "collapse",
            ht = "collapsing",
            Fs = `:scope .${qe} .${qe}`,
            zt = '[data-bs-toggle="collapse"]',
            Hs = { parent: null, toggle: !0 },
            Bs = { parent: "(null|element)", toggle: "boolean" };
          class ze extends re {
            constructor(e, t) {
              super(e, t),
                (this._isTransitioning = !1),
                (this._triggerArray = []);
              const i = m.find(zt);
              for (const s of i) {
                const o = m.getSelectorFromElement(s),
                  a = m.find(o).filter((r) => r === this._element);
                o !== null && a.length && this._triggerArray.push(s);
              }
              this._initializeChildren(),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._triggerArray,
                    this._isShown()
                  ),
                this._config.toggle && this.toggle();
            }
            static get Default() {
              return Hs;
            }
            static get DefaultType() {
              return Bs;
            }
            static get NAME() {
              return "collapse";
            }
            toggle() {
              this._isShown() ? this.hide() : this.show();
            }
            show() {
              if (this._isTransitioning || this._isShown()) return;
              let e = [];
              if (
                (this._config.parent &&
                  (e = this._getFirstLevelChildren(
                    ".collapse.show, .collapse.collapsing"
                  )
                    .filter((s) => s !== this._element)
                    .map((s) => ze.getOrCreateInstance(s, { toggle: !1 }))),
                (e.length && e[0]._isTransitioning) ||
                  l.trigger(this._element, Ps).defaultPrevented)
              )
                return;
              for (const s of e) s.hide();
              const t = this._getDimension();
              this._element.classList.remove(qe),
                this._element.classList.add(ht),
                (this._element.style[t] = 0),
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                (this._isTransitioning = !0);
              const i = `scroll${t[0].toUpperCase() + t.slice(1)}`;
              this._queueCallback(
                () => {
                  (this._isTransitioning = !1),
                    this._element.classList.remove(ht),
                    this._element.classList.add(qe, qt),
                    (this._element.style[t] = ""),
                    l.trigger(this._element, Ns);
                },
                this._element,
                !0
              ),
                (this._element.style[t] = `${this._element[i]}px`);
            }
            hide() {
              if (
                this._isTransitioning ||
                !this._isShown() ||
                l.trigger(this._element, js).defaultPrevented
              )
                return;
              const e = this._getDimension();
              (this._element.style[e] = `${
                this._element.getBoundingClientRect()[e]
              }px`),
                Xe(this._element),
                this._element.classList.add(ht),
                this._element.classList.remove(qe, qt);
              for (const t of this._triggerArray) {
                const i = m.getElementFromSelector(t);
                i &&
                  !this._isShown(i) &&
                  this._addAriaAndCollapsedClass([t], !1);
              }
              (this._isTransitioning = !0),
                (this._element.style[e] = ""),
                this._queueCallback(
                  () => {
                    (this._isTransitioning = !1),
                      this._element.classList.remove(ht),
                      this._element.classList.add(qe),
                      l.trigger(this._element, qs);
                  },
                  this._element,
                  !0
                );
            }
            _isShown(e = this._element) {
              return e.classList.contains(qt);
            }
            _configAfterMerge(e) {
              return (e.toggle = !!e.toggle), (e.parent = P(e.parent)), e;
            }
            _getDimension() {
              return this._element.classList.contains("collapse-horizontal")
                ? "width"
                : "height";
            }
            _initializeChildren() {
              if (!this._config.parent) return;
              const e = this._getFirstLevelChildren(zt);
              for (const t of e) {
                const i = m.getElementFromSelector(t);
                i && this._addAriaAndCollapsedClass([t], this._isShown(i));
              }
            }
            _getFirstLevelChildren(e) {
              const t = m.find(Fs, this._config.parent);
              return m
                .find(e, this._config.parent)
                .filter((i) => !t.includes(i));
            }
            _addAriaAndCollapsedClass(e, t) {
              if (e.length)
                for (const i of e)
                  i.classList.toggle("collapsed", !t),
                    i.setAttribute("aria-expanded", t);
            }
            static jQueryInterface(e) {
              const t = {};
              return (
                typeof e == "string" && /show|hide/.test(e) && (t.toggle = !1),
                this.each(function () {
                  const i = ze.getOrCreateInstance(this, t);
                  if (typeof e == "string") {
                    if (i[e] === void 0)
                      throw new TypeError(`No method named "${e}"`);
                    i[e]();
                  }
                })
              );
            }
          }
          l.on(document, zs, zt, function (n) {
            (n.target.tagName === "A" ||
              (n.delegateTarget && n.delegateTarget.tagName === "A")) &&
              n.preventDefault();
            for (const e of m.getMultipleElementsFromSelector(this))
              ze.getOrCreateInstance(e, { toggle: !1 }).toggle();
          }),
            ee(ze);
          var R = "top",
            Y = "bottom",
            X = "right",
            W = "left",
            mt = "auto",
            Fe = [R, Y, X, W],
            Ae = "start",
            He = "end",
            Pn = "clippingParents",
            Ft = "viewport",
            Be = "popper",
            Nn = "reference",
            Ht = Fe.reduce(function (n, e) {
              return n.concat([e + "-" + Ae, e + "-" + He]);
            }, []),
            Bt = [].concat(Fe, [mt]).reduce(function (n, e) {
              return n.concat([e, e + "-" + Ae, e + "-" + He]);
            }, []),
            jn = "beforeRead",
            qn = "read",
            zn = "afterRead",
            Fn = "beforeMain",
            Hn = "main",
            Bn = "afterMain",
            Rn = "beforeWrite",
            Wn = "write",
            Vn = "afterWrite",
            Kn = [jn, qn, zn, Fn, Hn, Bn, Rn, Wn, Vn];
          function ue(n) {
            return n ? (n.nodeName || "").toLowerCase() : null;
          }
          function G(n) {
            if (n == null) return window;
            if (n.toString() !== "[object Window]") {
              var e = n.ownerDocument;
              return (e && e.defaultView) || window;
            }
            return n;
          }
          function xe(n) {
            return n instanceof G(n).Element || n instanceof Element;
          }
          function te(n) {
            return n instanceof G(n).HTMLElement || n instanceof HTMLElement;
          }
          function Rt(n) {
            return (
              typeof ShadowRoot < "u" &&
              (n instanceof G(n).ShadowRoot || n instanceof ShadowRoot)
            );
          }
          const Wt = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (n) {
              var e = n.state;
              Object.keys(e.elements).forEach(function (t) {
                var i = e.styles[t] || {},
                  s = e.attributes[t] || {},
                  o = e.elements[t];
                te(o) &&
                  ue(o) &&
                  (Object.assign(o.style, i),
                  Object.keys(s).forEach(function (a) {
                    var r = s[a];
                    r === !1
                      ? o.removeAttribute(a)
                      : o.setAttribute(a, r === !0 ? "" : r);
                  }));
              });
            },
            effect: function (n) {
              var e = n.state,
                t = {
                  popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0",
                  },
                  arrow: { position: "absolute" },
                  reference: {},
                };
              return (
                Object.assign(e.elements.popper.style, t.popper),
                (e.styles = t),
                e.elements.arrow &&
                  Object.assign(e.elements.arrow.style, t.arrow),
                function () {
                  Object.keys(e.elements).forEach(function (i) {
                    var s = e.elements[i],
                      o = e.attributes[i] || {},
                      a = Object.keys(
                        e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]
                      ).reduce(function (r, c) {
                        return (r[c] = ""), r;
                      }, {});
                    te(s) &&
                      ue(s) &&
                      (Object.assign(s.style, a),
                      Object.keys(o).forEach(function (r) {
                        s.removeAttribute(r);
                      }));
                  });
                }
              );
            },
            requires: ["computeStyles"],
          };
          function he(n) {
            return n.split("-")[0];
          }
          var Ce = Math.max,
            pt = Math.min,
            Re = Math.round;
          function Vt() {
            var n = navigator.userAgentData;
            return n != null && n.brands && Array.isArray(n.brands)
              ? n.brands
                  .map(function (e) {
                    return e.brand + "/" + e.version;
                  })
                  .join(" ")
              : navigator.userAgent;
          }
          function Un() {
            return !/^((?!chrome|android).)*safari/i.test(Vt());
          }
          function We(n, e, t) {
            e === void 0 && (e = !1), t === void 0 && (t = !1);
            var i = n.getBoundingClientRect(),
              s = 1,
              o = 1;
            e &&
              te(n) &&
              ((s = (n.offsetWidth > 0 && Re(i.width) / n.offsetWidth) || 1),
              (o = (n.offsetHeight > 0 && Re(i.height) / n.offsetHeight) || 1));
            var a = (xe(n) ? G(n) : window).visualViewport,
              r = !Un() && t,
              c = (i.left + (r && a ? a.offsetLeft : 0)) / s,
              u = (i.top + (r && a ? a.offsetTop : 0)) / o,
              h = i.width / s,
              d = i.height / o;
            return {
              width: h,
              height: d,
              top: u,
              right: c + h,
              bottom: u + d,
              left: c,
              x: c,
              y: u,
            };
          }
          function Kt(n) {
            var e = We(n),
              t = n.offsetWidth,
              i = n.offsetHeight;
            return (
              Math.abs(e.width - t) <= 1 && (t = e.width),
              Math.abs(e.height - i) <= 1 && (i = e.height),
              { x: n.offsetLeft, y: n.offsetTop, width: t, height: i }
            );
          }
          function Qn(n, e) {
            var t = e.getRootNode && e.getRootNode();
            if (n.contains(e)) return !0;
            if (t && Rt(t)) {
              var i = e;
              do {
                if (i && n.isSameNode(i)) return !0;
                i = i.parentNode || i.host;
              } while (i);
            }
            return !1;
          }
          function ge(n) {
            return G(n).getComputedStyle(n);
          }
          function Rs(n) {
            return ["table", "td", "th"].indexOf(ue(n)) >= 0;
          }
          function ye(n) {
            return (
              (xe(n) ? n.ownerDocument : n.document) || window.document
            ).documentElement;
          }
          function ft(n) {
            return ue(n) === "html"
              ? n
              : n.assignedSlot ||
                  n.parentNode ||
                  (Rt(n) ? n.host : null) ||
                  ye(n);
          }
          function Yn(n) {
            return te(n) && ge(n).position !== "fixed" ? n.offsetParent : null;
          }
          function nt(n) {
            for (
              var e = G(n), t = Yn(n);
              t && Rs(t) && ge(t).position === "static";

            )
              t = Yn(t);
            return t &&
              (ue(t) === "html" ||
                (ue(t) === "body" && ge(t).position === "static"))
              ? e
              : t ||
                  (function (i) {
                    var s = /firefox/i.test(Vt());
                    if (
                      /Trident/i.test(Vt()) &&
                      te(i) &&
                      ge(i).position === "fixed"
                    )
                      return null;
                    var o = ft(i);
                    for (
                      Rt(o) && (o = o.host);
                      te(o) && ["html", "body"].indexOf(ue(o)) < 0;

                    ) {
                      var a = ge(o);
                      if (
                        a.transform !== "none" ||
                        a.perspective !== "none" ||
                        a.contain === "paint" ||
                        ["transform", "perspective"].indexOf(a.willChange) !==
                          -1 ||
                        (s && a.willChange === "filter") ||
                        (s && a.filter && a.filter !== "none")
                      )
                        return o;
                      o = o.parentNode;
                    }
                    return null;
                  })(n) ||
                  e;
          }
          function Ut(n) {
            return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
          }
          function it(n, e, t) {
            return Ce(n, pt(e, t));
          }
          function Xn(n) {
            return Object.assign(
              {},
              { top: 0, right: 0, bottom: 0, left: 0 },
              n
            );
          }
          function Gn(n, e) {
            return e.reduce(function (t, i) {
              return (t[i] = n), t;
            }, {});
          }
          const Jn = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (n) {
              var e,
                t = n.state,
                i = n.name,
                s = n.options,
                o = t.elements.arrow,
                a = t.modifiersData.popperOffsets,
                r = he(t.placement),
                c = Ut(r),
                u = [W, X].indexOf(r) >= 0 ? "height" : "width";
              if (o && a) {
                var h = (function (I, k) {
                    return Xn(
                      typeof (I =
                        typeof I == "function"
                          ? I(
                              Object.assign({}, k.rects, {
                                placement: k.placement,
                              })
                            )
                          : I) != "number"
                        ? I
                        : Gn(I, Fe)
                    );
                  })(s.padding, t),
                  d = Kt(o),
                  _ = c === "y" ? R : W,
                  p = c === "y" ? Y : X,
                  g =
                    t.rects.reference[u] +
                    t.rects.reference[c] -
                    a[c] -
                    t.rects.popper[u],
                  f = a[c] - t.rects.reference[c],
                  v = nt(o),
                  S = v
                    ? c === "y"
                      ? v.clientHeight || 0
                      : v.clientWidth || 0
                    : 0,
                  M = g / 2 - f / 2,
                  w = h[_],
                  C = S - d[u] - h[p],
                  y = S / 2 - d[u] / 2 + M,
                  A = it(w, y, C),
                  L = c;
                t.modifiersData[i] =
                  (((e = {})[L] = A), (e.centerOffset = A - y), e);
              }
            },
            effect: function (n) {
              var e = n.state,
                t = n.options.element,
                i = t === void 0 ? "[data-popper-arrow]" : t;
              i != null &&
                (typeof i != "string" ||
                  (i = e.elements.popper.querySelector(i))) &&
                Qn(e.elements.popper, i) &&
                (e.elements.arrow = i);
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"],
          };
          function Ve(n) {
            return n.split("-")[1];
          }
          var Ws = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
          function Zn(n) {
            var e,
              t = n.popper,
              i = n.popperRect,
              s = n.placement,
              o = n.variation,
              a = n.offsets,
              r = n.position,
              c = n.gpuAcceleration,
              u = n.adaptive,
              h = n.roundOffsets,
              d = n.isFixed,
              _ = a.x,
              p = _ === void 0 ? 0 : _,
              g = a.y,
              f = g === void 0 ? 0 : g,
              v = typeof h == "function" ? h({ x: p, y: f }) : { x: p, y: f };
            (p = v.x), (f = v.y);
            var S = a.hasOwnProperty("x"),
              M = a.hasOwnProperty("y"),
              w = W,
              C = R,
              y = window;
            if (u) {
              var A = nt(t),
                L = "clientHeight",
                I = "clientWidth";
              A === G(t) &&
                ge((A = ye(t))).position !== "static" &&
                r === "absolute" &&
                ((L = "scrollHeight"), (I = "scrollWidth")),
                (s === R || ((s === W || s === X) && o === He)) &&
                  ((C = Y),
                  (f -=
                    (d && A === y && y.visualViewport
                      ? y.visualViewport.height
                      : A[L]) - i.height),
                  (f *= c ? 1 : -1)),
                (s !== W && ((s !== R && s !== Y) || o !== He)) ||
                  ((w = X),
                  (p -=
                    (d && A === y && y.visualViewport
                      ? y.visualViewport.width
                      : A[I]) - i.width),
                  (p *= c ? 1 : -1));
            }
            var k,
              N = Object.assign({ position: r }, u && Ws),
              J =
                h === !0
                  ? (function (ce, V) {
                      var ie = ce.x,
                        se = ce.y,
                        $ = V.devicePixelRatio || 1;
                      return { x: Re(ie * $) / $ || 0, y: Re(se * $) / $ || 0 };
                    })({ x: p, y: f }, G(t))
                  : { x: p, y: f };
            return (
              (p = J.x),
              (f = J.y),
              c
                ? Object.assign(
                    {},
                    N,
                    (((k = {})[C] = M ? "0" : ""),
                    (k[w] = S ? "0" : ""),
                    (k.transform =
                      (y.devicePixelRatio || 1) <= 1
                        ? "translate(" + p + "px, " + f + "px)"
                        : "translate3d(" + p + "px, " + f + "px, 0)"),
                    k)
                  )
                : Object.assign(
                    {},
                    N,
                    (((e = {})[C] = M ? f + "px" : ""),
                    (e[w] = S ? p + "px" : ""),
                    (e.transform = ""),
                    e)
                  )
            );
          }
          const Qt = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (n) {
              var e = n.state,
                t = n.options,
                i = t.gpuAcceleration,
                s = i === void 0 || i,
                o = t.adaptive,
                a = o === void 0 || o,
                r = t.roundOffsets,
                c = r === void 0 || r,
                u = {
                  placement: he(e.placement),
                  variation: Ve(e.placement),
                  popper: e.elements.popper,
                  popperRect: e.rects.popper,
                  gpuAcceleration: s,
                  isFixed: e.options.strategy === "fixed",
                };
              e.modifiersData.popperOffsets != null &&
                (e.styles.popper = Object.assign(
                  {},
                  e.styles.popper,
                  Zn(
                    Object.assign({}, u, {
                      offsets: e.modifiersData.popperOffsets,
                      position: e.options.strategy,
                      adaptive: a,
                      roundOffsets: c,
                    })
                  )
                )),
                e.modifiersData.arrow != null &&
                  (e.styles.arrow = Object.assign(
                    {},
                    e.styles.arrow,
                    Zn(
                      Object.assign({}, u, {
                        offsets: e.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: c,
                      })
                    )
                  )),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                  "data-popper-placement": e.placement,
                }));
            },
            data: {},
          };
          var gt = { passive: !0 };
          const Yt = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function (n) {
              var e = n.state,
                t = n.instance,
                i = n.options,
                s = i.scroll,
                o = s === void 0 || s,
                a = i.resize,
                r = a === void 0 || a,
                c = G(e.elements.popper),
                u = [].concat(
                  e.scrollParents.reference,
                  e.scrollParents.popper
                );
              return (
                o &&
                  u.forEach(function (h) {
                    h.addEventListener("scroll", t.update, gt);
                  }),
                r && c.addEventListener("resize", t.update, gt),
                function () {
                  o &&
                    u.forEach(function (h) {
                      h.removeEventListener("scroll", t.update, gt);
                    }),
                    r && c.removeEventListener("resize", t.update, gt);
                }
              );
            },
            data: {},
          };
          var Vs = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom",
          };
          function vt(n) {
            return n.replace(/left|right|bottom|top/g, function (e) {
              return Vs[e];
            });
          }
          var Ks = { start: "end", end: "start" };
          function ei(n) {
            return n.replace(/start|end/g, function (e) {
              return Ks[e];
            });
          }
          function Xt(n) {
            var e = G(n);
            return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
          }
          function Gt(n) {
            return We(ye(n)).left + Xt(n).scrollLeft;
          }
          function Jt(n) {
            var e = ge(n),
              t = e.overflow,
              i = e.overflowX,
              s = e.overflowY;
            return /auto|scroll|overlay|hidden/.test(t + s + i);
          }
          function ti(n) {
            return ["html", "body", "#document"].indexOf(ue(n)) >= 0
              ? n.ownerDocument.body
              : te(n) && Jt(n)
              ? n
              : ti(ft(n));
          }
          function st(n, e) {
            var t;
            e === void 0 && (e = []);
            var i = ti(n),
              s = i === ((t = n.ownerDocument) == null ? void 0 : t.body),
              o = G(i),
              a = s ? [o].concat(o.visualViewport || [], Jt(i) ? i : []) : i,
              r = e.concat(a);
            return s ? r : r.concat(st(ft(a)));
          }
          function Zt(n) {
            return Object.assign({}, n, {
              left: n.x,
              top: n.y,
              right: n.x + n.width,
              bottom: n.y + n.height,
            });
          }
          function ni(n, e, t) {
            return e === Ft
              ? Zt(
                  (function (i, s) {
                    var o = G(i),
                      a = ye(i),
                      r = o.visualViewport,
                      c = a.clientWidth,
                      u = a.clientHeight,
                      h = 0,
                      d = 0;
                    if (r) {
                      (c = r.width), (u = r.height);
                      var _ = Un();
                      (_ || (!_ && s === "fixed")) &&
                        ((h = r.offsetLeft), (d = r.offsetTop));
                    }
                    return { width: c, height: u, x: h + Gt(i), y: d };
                  })(n, t)
                )
              : xe(e)
              ? (function (i, s) {
                  var o = We(i, !1, s === "fixed");
                  return (
                    (o.top = o.top + i.clientTop),
                    (o.left = o.left + i.clientLeft),
                    (o.bottom = o.top + i.clientHeight),
                    (o.right = o.left + i.clientWidth),
                    (o.width = i.clientWidth),
                    (o.height = i.clientHeight),
                    (o.x = o.left),
                    (o.y = o.top),
                    o
                  );
                })(e, t)
              : Zt(
                  (function (i) {
                    var s,
                      o = ye(i),
                      a = Xt(i),
                      r = (s = i.ownerDocument) == null ? void 0 : s.body,
                      c = Ce(
                        o.scrollWidth,
                        o.clientWidth,
                        r ? r.scrollWidth : 0,
                        r ? r.clientWidth : 0
                      ),
                      u = Ce(
                        o.scrollHeight,
                        o.clientHeight,
                        r ? r.scrollHeight : 0,
                        r ? r.clientHeight : 0
                      ),
                      h = -a.scrollLeft + Gt(i),
                      d = -a.scrollTop;
                    return (
                      ge(r || o).direction === "rtl" &&
                        (h += Ce(o.clientWidth, r ? r.clientWidth : 0) - c),
                      { width: c, height: u, x: h, y: d }
                    );
                  })(ye(n))
                );
          }
          function ii(n) {
            var e,
              t = n.reference,
              i = n.element,
              s = n.placement,
              o = s ? he(s) : null,
              a = s ? Ve(s) : null,
              r = t.x + t.width / 2 - i.width / 2,
              c = t.y + t.height / 2 - i.height / 2;
            switch (o) {
              case R:
                e = { x: r, y: t.y - i.height };
                break;
              case Y:
                e = { x: r, y: t.y + t.height };
                break;
              case X:
                e = { x: t.x + t.width, y: c };
                break;
              case W:
                e = { x: t.x - i.width, y: c };
                break;
              default:
                e = { x: t.x, y: t.y };
            }
            var u = o ? Ut(o) : null;
            if (u != null) {
              var h = u === "y" ? "height" : "width";
              switch (a) {
                case Ae:
                  e[u] = e[u] - (t[h] / 2 - i[h] / 2);
                  break;
                case He:
                  e[u] = e[u] + (t[h] / 2 - i[h] / 2);
              }
            }
            return e;
          }
          function Ke(n, e) {
            e === void 0 && (e = {});
            var t = e,
              i = t.placement,
              s = i === void 0 ? n.placement : i,
              o = t.strategy,
              a = o === void 0 ? n.strategy : o,
              r = t.boundary,
              c = r === void 0 ? Pn : r,
              u = t.rootBoundary,
              h = u === void 0 ? Ft : u,
              d = t.elementContext,
              _ = d === void 0 ? Be : d,
              p = t.altBoundary,
              g = p !== void 0 && p,
              f = t.padding,
              v = f === void 0 ? 0 : f,
              S = Xn(typeof v != "number" ? v : Gn(v, Fe)),
              M = _ === Be ? Nn : Be,
              w = n.rects.popper,
              C = n.elements[g ? M : _],
              y = (function (V, ie, se, $) {
                var me =
                    ie === "clippingParents"
                      ? (function (D) {
                          var K = st(ft(D)),
                            oe =
                              ["absolute", "fixed"].indexOf(ge(D).position) >=
                                0 && te(D)
                                ? nt(D)
                                : D;
                          return xe(oe)
                            ? K.filter(function (Ee) {
                                return (
                                  xe(Ee) && Qn(Ee, oe) && ue(Ee) !== "body"
                                );
                              })
                            : [];
                        })(V)
                      : [].concat(ie),
                  pe = [].concat(me, [se]),
                  Ye = pe[0],
                  q = pe.reduce(function (D, K) {
                    var oe = ni(V, K, $);
                    return (
                      (D.top = Ce(oe.top, D.top)),
                      (D.right = pt(oe.right, D.right)),
                      (D.bottom = pt(oe.bottom, D.bottom)),
                      (D.left = Ce(oe.left, D.left)),
                      D
                    );
                  }, ni(V, Ye, $));
                return (
                  (q.width = q.right - q.left),
                  (q.height = q.bottom - q.top),
                  (q.x = q.left),
                  (q.y = q.top),
                  q
                );
              })(
                xe(C) ? C : C.contextElement || ye(n.elements.popper),
                c,
                h,
                a
              ),
              A = We(n.elements.reference),
              L = ii({ reference: A, element: w, placement: s }),
              I = Zt(Object.assign({}, w, L)),
              k = _ === Be ? I : A,
              N = {
                top: y.top - k.top + S.top,
                bottom: k.bottom - y.bottom + S.bottom,
                left: y.left - k.left + S.left,
                right: k.right - y.right + S.right,
              },
              J = n.modifiersData.offset;
            if (_ === Be && J) {
              var ce = J[s];
              Object.keys(N).forEach(function (V) {
                var ie = [X, Y].indexOf(V) >= 0 ? 1 : -1,
                  se = [R, Y].indexOf(V) >= 0 ? "y" : "x";
                N[V] += ce[se] * ie;
              });
            }
            return N;
          }
          function Us(n, e) {
            e === void 0 && (e = {});
            var t = e,
              i = t.placement,
              s = t.boundary,
              o = t.rootBoundary,
              a = t.padding,
              r = t.flipVariations,
              c = t.allowedAutoPlacements,
              u = c === void 0 ? Bt : c,
              h = Ve(i),
              d = h
                ? r
                  ? Ht
                  : Ht.filter(function (g) {
                      return Ve(g) === h;
                    })
                : Fe,
              _ = d.filter(function (g) {
                return u.indexOf(g) >= 0;
              });
            _.length === 0 && (_ = d);
            var p = _.reduce(function (g, f) {
              return (
                (g[f] = Ke(n, {
                  placement: f,
                  boundary: s,
                  rootBoundary: o,
                  padding: a,
                })[he(f)]),
                g
              );
            }, {});
            return Object.keys(p).sort(function (g, f) {
              return p[g] - p[f];
            });
          }
          const si = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (n) {
              var e = n.state,
                t = n.options,
                i = n.name;
              if (!e.modifiersData[i]._skip) {
                for (
                  var s = t.mainAxis,
                    o = s === void 0 || s,
                    a = t.altAxis,
                    r = a === void 0 || a,
                    c = t.fallbackPlacements,
                    u = t.padding,
                    h = t.boundary,
                    d = t.rootBoundary,
                    _ = t.altBoundary,
                    p = t.flipVariations,
                    g = p === void 0 || p,
                    f = t.allowedAutoPlacements,
                    v = e.options.placement,
                    S = he(v),
                    M =
                      c ||
                      (S !== v && g
                        ? (function (D) {
                            if (he(D) === mt) return [];
                            var K = vt(D);
                            return [ei(D), K, ei(K)];
                          })(v)
                        : [vt(v)]),
                    w = [v].concat(M).reduce(function (D, K) {
                      return D.concat(
                        he(K) === mt
                          ? Us(e, {
                              placement: K,
                              boundary: h,
                              rootBoundary: d,
                              padding: u,
                              flipVariations: g,
                              allowedAutoPlacements: f,
                            })
                          : K
                      );
                    }, []),
                    C = e.rects.reference,
                    y = e.rects.popper,
                    A = new Map(),
                    L = !0,
                    I = w[0],
                    k = 0;
                  k < w.length;
                  k++
                ) {
                  var N = w[k],
                    J = he(N),
                    ce = Ve(N) === Ae,
                    V = [R, Y].indexOf(J) >= 0,
                    ie = V ? "width" : "height",
                    se = Ke(e, {
                      placement: N,
                      boundary: h,
                      rootBoundary: d,
                      altBoundary: _,
                      padding: u,
                    }),
                    $ = V ? (ce ? X : W) : ce ? Y : R;
                  C[ie] > y[ie] && ($ = vt($));
                  var me = vt($),
                    pe = [];
                  if (
                    (o && pe.push(se[J] <= 0),
                    r && pe.push(se[$] <= 0, se[me] <= 0),
                    pe.every(function (D) {
                      return D;
                    }))
                  ) {
                    (I = N), (L = !1);
                    break;
                  }
                  A.set(N, pe);
                }
                if (L)
                  for (
                    var Ye = function (D) {
                        var K = w.find(function (oe) {
                          var Ee = A.get(oe);
                          if (Ee)
                            return Ee.slice(0, D).every(function (Tt) {
                              return Tt;
                            });
                        });
                        if (K) return (I = K), "break";
                      },
                      q = g ? 3 : 1;
                    q > 0 && Ye(q) !== "break";
                    q--
                  );
                e.placement !== I &&
                  ((e.modifiersData[i]._skip = !0),
                  (e.placement = I),
                  (e.reset = !0));
              }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
          };
          function oi(n, e, t) {
            return (
              t === void 0 && (t = { x: 0, y: 0 }),
              {
                top: n.top - e.height - t.y,
                right: n.right - e.width + t.x,
                bottom: n.bottom - e.height + t.y,
                left: n.left - e.width - t.x,
              }
            );
          }
          function ai(n) {
            return [R, X, Y, W].some(function (e) {
              return n[e] >= 0;
            });
          }
          const ri = {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (n) {
                var e = n.state,
                  t = n.name,
                  i = e.rects.reference,
                  s = e.rects.popper,
                  o = e.modifiersData.preventOverflow,
                  a = Ke(e, { elementContext: "reference" }),
                  r = Ke(e, { altBoundary: !0 }),
                  c = oi(a, i),
                  u = oi(r, s, o),
                  h = ai(c),
                  d = ai(u);
                (e.modifiersData[t] = {
                  referenceClippingOffsets: c,
                  popperEscapeOffsets: u,
                  isReferenceHidden: h,
                  hasPopperEscaped: d,
                }),
                  (e.attributes.popper = Object.assign(
                    {},
                    e.attributes.popper,
                    {
                      "data-popper-reference-hidden": h,
                      "data-popper-escaped": d,
                    }
                  ));
              },
            },
            li = {
              name: "offset",
              enabled: !0,
              phase: "main",
              requires: ["popperOffsets"],
              fn: function (n) {
                var e = n.state,
                  t = n.options,
                  i = n.name,
                  s = t.offset,
                  o = s === void 0 ? [0, 0] : s,
                  a = Bt.reduce(function (h, d) {
                    return (
                      (h[d] = (function (_, p, g) {
                        var f = he(_),
                          v = [W, R].indexOf(f) >= 0 ? -1 : 1,
                          S =
                            typeof g == "function"
                              ? g(Object.assign({}, p, { placement: _ }))
                              : g,
                          M = S[0],
                          w = S[1];
                        return (
                          (M = M || 0),
                          (w = (w || 0) * v),
                          [W, X].indexOf(f) >= 0
                            ? { x: w, y: M }
                            : { x: M, y: w }
                        );
                      })(d, e.rects, o)),
                      h
                    );
                  }, {}),
                  r = a[e.placement],
                  c = r.x,
                  u = r.y;
                e.modifiersData.popperOffsets != null &&
                  ((e.modifiersData.popperOffsets.x += c),
                  (e.modifiersData.popperOffsets.y += u)),
                  (e.modifiersData[i] = a);
              },
            },
            en = {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (n) {
                var e = n.state,
                  t = n.name;
                e.modifiersData[t] = ii({
                  reference: e.rects.reference,
                  element: e.rects.popper,
                  placement: e.placement,
                });
              },
              data: {},
            },
            ci = {
              name: "preventOverflow",
              enabled: !0,
              phase: "main",
              fn: function (n) {
                var e = n.state,
                  t = n.options,
                  i = n.name,
                  s = t.mainAxis,
                  o = s === void 0 || s,
                  a = t.altAxis,
                  r = a !== void 0 && a,
                  c = t.boundary,
                  u = t.rootBoundary,
                  h = t.altBoundary,
                  d = t.padding,
                  _ = t.tether,
                  p = _ === void 0 || _,
                  g = t.tetherOffset,
                  f = g === void 0 ? 0 : g,
                  v = Ke(e, {
                    boundary: c,
                    rootBoundary: u,
                    padding: d,
                    altBoundary: h,
                  }),
                  S = he(e.placement),
                  M = Ve(e.placement),
                  w = !M,
                  C = Ut(S),
                  y = C === "x" ? "y" : "x",
                  A = e.modifiersData.popperOffsets,
                  L = e.rects.reference,
                  I = e.rects.popper,
                  k =
                    typeof f == "function"
                      ? f(
                          Object.assign({}, e.rects, { placement: e.placement })
                        )
                      : f,
                  N =
                    typeof k == "number"
                      ? { mainAxis: k, altAxis: k }
                      : Object.assign({ mainAxis: 0, altAxis: 0 }, k),
                  J = e.modifiersData.offset
                    ? e.modifiersData.offset[e.placement]
                    : null,
                  ce = { x: 0, y: 0 };
                if (A) {
                  if (o) {
                    var V,
                      ie = C === "y" ? R : W,
                      se = C === "y" ? Y : X,
                      $ = C === "y" ? "height" : "width",
                      me = A[C],
                      pe = me + v[ie],
                      Ye = me - v[se],
                      q = p ? -I[$] / 2 : 0,
                      D = M === Ae ? L[$] : I[$],
                      K = M === Ae ? -I[$] : -L[$],
                      oe = e.elements.arrow,
                      Ee = p && oe ? Kt(oe) : { width: 0, height: 0 },
                      Tt = e.modifiersData["arrow#persistent"]
                        ? e.modifiersData["arrow#persistent"].padding
                        : { top: 0, right: 0, bottom: 0, left: 0 },
                      Yi = Tt[ie],
                      Xi = Tt[se],
                      Ot = it(0, L[$], Ee[$]),
                      Ta = w
                        ? L[$] / 2 - q - Ot - Yi - N.mainAxis
                        : D - Ot - Yi - N.mainAxis,
                      Oa = w
                        ? -L[$] / 2 + q + Ot + Xi + N.mainAxis
                        : K + Ot + Xi + N.mainAxis,
                      fn = e.elements.arrow && nt(e.elements.arrow),
                      La = fn
                        ? C === "y"
                          ? fn.clientTop || 0
                          : fn.clientLeft || 0
                        : 0,
                      Gi = (V = J?.[C]) != null ? V : 0,
                      ka = me + Oa - Gi,
                      Ji = it(
                        p ? pt(pe, me + Ta - Gi - La) : pe,
                        me,
                        p ? Ce(Ye, ka) : Ye
                      );
                    (A[C] = Ji), (ce[C] = Ji - me);
                  }
                  if (r) {
                    var Zi,
                      Sa = C === "x" ? R : W,
                      Ia = C === "x" ? Y : X,
                      Me = A[y],
                      Lt = y === "y" ? "height" : "width",
                      es = Me + v[Sa],
                      ts = Me - v[Ia],
                      gn = [R, W].indexOf(S) !== -1,
                      ns = (Zi = J?.[y]) != null ? Zi : 0,
                      is = gn ? es : Me - L[Lt] - I[Lt] - ns + N.altAxis,
                      ss = gn ? Me + L[Lt] + I[Lt] - ns - N.altAxis : ts,
                      os =
                        p && gn
                          ? (function (Da, Ma, vn) {
                              var as = it(Da, Ma, vn);
                              return as > vn ? vn : as;
                            })(is, Me, ss)
                          : it(p ? is : es, Me, p ? ss : ts);
                    (A[y] = os), (ce[y] = os - Me);
                  }
                  e.modifiersData[i] = ce;
                }
              },
              requiresIfExists: ["offset"],
            };
          function Qs(n, e, t) {
            t === void 0 && (t = !1);
            var i,
              s,
              o = te(e),
              a =
                te(e) &&
                (function (d) {
                  var _ = d.getBoundingClientRect(),
                    p = Re(_.width) / d.offsetWidth || 1,
                    g = Re(_.height) / d.offsetHeight || 1;
                  return p !== 1 || g !== 1;
                })(e),
              r = ye(e),
              c = We(n, a, t),
              u = { scrollLeft: 0, scrollTop: 0 },
              h = { x: 0, y: 0 };
            return (
              (o || (!o && !t)) &&
                ((ue(e) !== "body" || Jt(r)) &&
                  (u =
                    (i = e) !== G(i) && te(i)
                      ? {
                          scrollLeft: (s = i).scrollLeft,
                          scrollTop: s.scrollTop,
                        }
                      : Xt(i)),
                te(e)
                  ? (((h = We(e, !0)).x += e.clientLeft), (h.y += e.clientTop))
                  : r && (h.x = Gt(r))),
              {
                x: c.left + u.scrollLeft - h.x,
                y: c.top + u.scrollTop - h.y,
                width: c.width,
                height: c.height,
              }
            );
          }
          function Ys(n) {
            var e = new Map(),
              t = new Set(),
              i = [];
            function s(o) {
              t.add(o.name),
                []
                  .concat(o.requires || [], o.requiresIfExists || [])
                  .forEach(function (a) {
                    if (!t.has(a)) {
                      var r = e.get(a);
                      r && s(r);
                    }
                  }),
                i.push(o);
            }
            return (
              n.forEach(function (o) {
                e.set(o.name, o);
              }),
              n.forEach(function (o) {
                t.has(o.name) || s(o);
              }),
              i
            );
          }
          var di = { placement: "bottom", modifiers: [], strategy: "absolute" };
          function ui() {
            for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
              e[t] = arguments[t];
            return !e.some(function (i) {
              return !(i && typeof i.getBoundingClientRect == "function");
            });
          }
          function _t(n) {
            n === void 0 && (n = {});
            var e = n,
              t = e.defaultModifiers,
              i = t === void 0 ? [] : t,
              s = e.defaultOptions,
              o = s === void 0 ? di : s;
            return function (a, r, c) {
              c === void 0 && (c = o);
              var u,
                h,
                d = {
                  placement: "bottom",
                  orderedModifiers: [],
                  options: Object.assign({}, di, o),
                  modifiersData: {},
                  elements: { reference: a, popper: r },
                  attributes: {},
                  styles: {},
                },
                _ = [],
                p = !1,
                g = {
                  state: d,
                  setOptions: function (v) {
                    var S = typeof v == "function" ? v(d.options) : v;
                    f(),
                      (d.options = Object.assign({}, o, d.options, S)),
                      (d.scrollParents = {
                        reference: xe(a)
                          ? st(a)
                          : a.contextElement
                          ? st(a.contextElement)
                          : [],
                        popper: st(r),
                      });
                    var M,
                      w,
                      C = (function (y) {
                        var A = Ys(y);
                        return Kn.reduce(function (L, I) {
                          return L.concat(
                            A.filter(function (k) {
                              return k.phase === I;
                            })
                          );
                        }, []);
                      })(
                        ((M = [].concat(i, d.options.modifiers)),
                        (w = M.reduce(function (y, A) {
                          var L = y[A.name];
                          return (
                            (y[A.name] = L
                              ? Object.assign({}, L, A, {
                                  options: Object.assign(
                                    {},
                                    L.options,
                                    A.options
                                  ),
                                  data: Object.assign({}, L.data, A.data),
                                })
                              : A),
                            y
                          );
                        }, {})),
                        Object.keys(w).map(function (y) {
                          return w[y];
                        }))
                      );
                    return (
                      (d.orderedModifiers = C.filter(function (y) {
                        return y.enabled;
                      })),
                      d.orderedModifiers.forEach(function (y) {
                        var A = y.name,
                          L = y.options,
                          I = L === void 0 ? {} : L,
                          k = y.effect;
                        if (typeof k == "function") {
                          var N = k({
                            state: d,
                            name: A,
                            instance: g,
                            options: I,
                          });
                          _.push(N || function () {});
                        }
                      }),
                      g.update()
                    );
                  },
                  forceUpdate: function () {
                    if (!p) {
                      var v = d.elements,
                        S = v.reference,
                        M = v.popper;
                      if (ui(S, M)) {
                        (d.rects = {
                          reference: Qs(
                            S,
                            nt(M),
                            d.options.strategy === "fixed"
                          ),
                          popper: Kt(M),
                        }),
                          (d.reset = !1),
                          (d.placement = d.options.placement),
                          d.orderedModifiers.forEach(function (k) {
                            return (d.modifiersData[k.name] = Object.assign(
                              {},
                              k.data
                            ));
                          });
                        for (var w = 0; w < d.orderedModifiers.length; w++)
                          if (d.reset !== !0) {
                            var C = d.orderedModifiers[w],
                              y = C.fn,
                              A = C.options,
                              L = A === void 0 ? {} : A,
                              I = C.name;
                            typeof y == "function" &&
                              (d =
                                y({
                                  state: d,
                                  options: L,
                                  name: I,
                                  instance: g,
                                }) || d);
                          } else (d.reset = !1), (w = -1);
                      }
                    }
                  },
                  update:
                    ((u = function () {
                      return new Promise(function (v) {
                        g.forceUpdate(), v(d);
                      });
                    }),
                    function () {
                      return (
                        h ||
                          (h = new Promise(function (v) {
                            Promise.resolve().then(function () {
                              (h = void 0), v(u());
                            });
                          })),
                        h
                      );
                    }),
                  destroy: function () {
                    f(), (p = !0);
                  },
                };
              if (!ui(a, r)) return g;
              function f() {
                _.forEach(function (v) {
                  return v();
                }),
                  (_ = []);
              }
              return (
                g.setOptions(c).then(function (v) {
                  !p && c.onFirstUpdate && c.onFirstUpdate(v);
                }),
                g
              );
            };
          }
          var Xs = _t(),
            Gs = _t({ defaultModifiers: [Yt, en, Qt, Wt] }),
            tn = _t({ defaultModifiers: [Yt, en, Qt, Wt, li, si, ci, Jn, ri] });
          const hi = Object.freeze(
              Object.defineProperty(
                {
                  __proto__: null,
                  afterMain: Bn,
                  afterRead: zn,
                  afterWrite: Vn,
                  applyStyles: Wt,
                  arrow: Jn,
                  auto: mt,
                  basePlacements: Fe,
                  beforeMain: Fn,
                  beforeRead: jn,
                  beforeWrite: Rn,
                  bottom: Y,
                  clippingParents: Pn,
                  computeStyles: Qt,
                  createPopper: tn,
                  createPopperBase: Xs,
                  createPopperLite: Gs,
                  detectOverflow: Ke,
                  end: He,
                  eventListeners: Yt,
                  flip: si,
                  hide: ri,
                  left: W,
                  main: Hn,
                  modifierPhases: Kn,
                  offset: li,
                  placements: Bt,
                  popper: Be,
                  popperGenerator: _t,
                  popperOffsets: en,
                  preventOverflow: ci,
                  read: qn,
                  reference: Nn,
                  right: X,
                  start: Ae,
                  top: R,
                  variationPlacements: Ht,
                  viewport: Ft,
                  write: Wn,
                },
                Symbol.toStringTag,
                { value: "Module" }
              )
            ),
            mi = "dropdown",
            Te = ".bs.dropdown",
            nn = ".data-api",
            Js = "ArrowUp",
            pi = "ArrowDown",
            Zs = `hide${Te}`,
            eo = `hidden${Te}`,
            to = `show${Te}`,
            no = `shown${Te}`,
            fi = `click${Te}${nn}`,
            gi = `keydown${Te}${nn}`,
            io = `keyup${Te}${nn}`,
            Ue = "show",
            Oe = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            so = `${Oe}.${Ue}`,
            bt = ".dropdown-menu",
            oo = Z() ? "top-end" : "top-start",
            ao = Z() ? "top-start" : "top-end",
            ro = Z() ? "bottom-end" : "bottom-start",
            lo = Z() ? "bottom-start" : "bottom-end",
            co = Z() ? "left-start" : "right-start",
            uo = Z() ? "right-start" : "left-start",
            ho = {
              autoClose: !0,
              boundary: "clippingParents",
              display: "dynamic",
              offset: [0, 2],
              popperConfig: null,
              reference: "toggle",
            },
            mo = {
              autoClose: "(boolean|string)",
              boundary: "(string|element)",
              display: "string",
              offset: "(array|string|function)",
              popperConfig: "(null|object|function)",
              reference: "(string|element|object)",
            };
          class le extends re {
            constructor(e, t) {
              super(e, t),
                (this._popper = null),
                (this._parent = this._element.parentNode),
                (this._menu =
                  m.next(this._element, bt)[0] ||
                  m.prev(this._element, bt)[0] ||
                  m.findOne(bt, this._parent)),
                (this._inNavbar = this._detectNavbar());
            }
            static get Default() {
              return ho;
            }
            static get DefaultType() {
              return mo;
            }
            static get NAME() {
              return mi;
            }
            toggle() {
              return this._isShown() ? this.hide() : this.show();
            }
            show() {
              if (F(this._element) || this._isShown()) return;
              const e = { relatedTarget: this._element };
              if (!l.trigger(this._element, to, e).defaultPrevented) {
                if (
                  (this._createPopper(),
                  "ontouchstart" in document.documentElement &&
                    !this._parent.closest(".navbar-nav"))
                )
                  for (const t of [].concat(...document.body.children))
                    l.on(t, "mouseover", ae);
                this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  this._menu.classList.add(Ue),
                  this._element.classList.add(Ue),
                  l.trigger(this._element, no, e);
              }
            }
            hide() {
              if (F(this._element) || !this._isShown()) return;
              const e = { relatedTarget: this._element };
              this._completeHide(e);
            }
            dispose() {
              this._popper && this._popper.destroy(), super.dispose();
            }
            update() {
              (this._inNavbar = this._detectNavbar()),
                this._popper && this._popper.update();
            }
            _completeHide(e) {
              if (!l.trigger(this._element, Zs, e).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                  for (const t of [].concat(...document.body.children))
                    l.off(t, "mouseover", ae);
                this._popper && this._popper.destroy(),
                  this._menu.classList.remove(Ue),
                  this._element.classList.remove(Ue),
                  this._element.setAttribute("aria-expanded", "false"),
                  fe.removeDataAttribute(this._menu, "popper"),
                  l.trigger(this._element, eo, e);
              }
            }
            _getConfig(e) {
              if (
                typeof (e = super._getConfig(e)).reference == "object" &&
                !H(e.reference) &&
                typeof e.reference.getBoundingClientRect != "function"
              )
                throw new TypeError(
                  `${mi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                );
              return e;
            }
            _createPopper() {
              if (hi === void 0)
                throw new TypeError(
                  "Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)"
                );
              let e = this._element;
              this._config.reference === "parent"
                ? (e = this._parent)
                : H(this._config.reference)
                ? (e = P(this._config.reference))
                : typeof this._config.reference == "object" &&
                  (e = this._config.reference);
              const t = this._getPopperConfig();
              this._popper = tn(e, this._menu, t);
            }
            _isShown() {
              return this._menu.classList.contains(Ue);
            }
            _getPlacement() {
              const e = this._parent;
              if (e.classList.contains("dropend")) return co;
              if (e.classList.contains("dropstart")) return uo;
              if (e.classList.contains("dropup-center")) return "top";
              if (e.classList.contains("dropdown-center")) return "bottom";
              const t =
                getComputedStyle(this._menu)
                  .getPropertyValue("--bs-position")
                  .trim() === "end";
              return e.classList.contains("dropup")
                ? t
                  ? ao
                  : oo
                : t
                ? lo
                : ro;
            }
            _detectNavbar() {
              return this._element.closest(".navbar") !== null;
            }
            _getOffset() {
              const { offset: e } = this._config;
              return typeof e == "string"
                ? e.split(",").map((t) => Number.parseInt(t, 10))
                : typeof e == "function"
                ? (t) => e(t, this._element)
                : e;
            }
            _getPopperConfig() {
              const e = {
                placement: this._getPlacement(),
                modifiers: [
                  {
                    name: "preventOverflow",
                    options: { boundary: this._config.boundary },
                  },
                  { name: "offset", options: { offset: this._getOffset() } },
                ],
              };
              return (
                (this._inNavbar || this._config.display === "static") &&
                  (fe.setDataAttribute(this._menu, "popper", "static"),
                  (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
                { ...e, ...U(this._config.popperConfig, [void 0, e]) }
              );
            }
            _selectMenuItem({ key: e, target: t }) {
              const i = m
                .find(
                  ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                  this._menu
                )
                .filter((s) => B(s));
              i.length && It(i, t, e === pi, !i.includes(t)).focus();
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = le.getOrCreateInstance(this, e);
                if (typeof e == "string") {
                  if (t[e] === void 0)
                    throw new TypeError(`No method named "${e}"`);
                  t[e]();
                }
              });
            }
            static clearMenus(e) {
              if (e.button === 2 || (e.type === "keyup" && e.key !== "Tab"))
                return;
              const t = m.find(so);
              for (const i of t) {
                const s = le.getInstance(i);
                if (!s || s._config.autoClose === !1) continue;
                const o = e.composedPath(),
                  a = o.includes(s._menu);
                if (
                  o.includes(s._element) ||
                  (s._config.autoClose === "inside" && !a) ||
                  (s._config.autoClose === "outside" && a) ||
                  (s._menu.contains(e.target) &&
                    ((e.type === "keyup" && e.key === "Tab") ||
                      /input|select|option|textarea|form/i.test(
                        e.target.tagName
                      )))
                )
                  continue;
                const r = { relatedTarget: s._element };
                e.type === "click" && (r.clickEvent = e), s._completeHide(r);
              }
            }
            static dataApiKeydownHandler(e) {
              const t = /input|textarea/i.test(e.target.tagName),
                i = e.key === "Escape",
                s = [Js, pi].includes(e.key);
              if ((!s && !i) || (t && !i)) return;
              e.preventDefault();
              const o = this.matches(Oe)
                  ? this
                  : m.prev(this, Oe)[0] ||
                    m.next(this, Oe)[0] ||
                    m.findOne(Oe, e.delegateTarget.parentNode),
                a = le.getOrCreateInstance(o);
              if (s)
                return e.stopPropagation(), a.show(), void a._selectMenuItem(e);
              a._isShown() && (e.stopPropagation(), a.hide(), o.focus());
            }
          }
          l.on(document, gi, Oe, le.dataApiKeydownHandler),
            l.on(document, gi, bt, le.dataApiKeydownHandler),
            l.on(document, fi, le.clearMenus),
            l.on(document, io, le.clearMenus),
            l.on(document, fi, Oe, function (n) {
              n.preventDefault(), le.getOrCreateInstance(this).toggle();
            }),
            ee(le);
          const vi = "backdrop",
            _i = "show",
            bi = `mousedown.bs.${vi}`,
            po = {
              className: "modal-backdrop",
              clickCallback: null,
              isAnimated: !1,
              isVisible: !0,
              rootElement: "body",
            },
            fo = {
              className: "string",
              clickCallback: "(function|null)",
              isAnimated: "boolean",
              isVisible: "boolean",
              rootElement: "(element|string)",
            };
          class yi extends Ge {
            constructor(e) {
              super(),
                (this._config = this._getConfig(e)),
                (this._isAppended = !1),
                (this._element = null);
            }
            static get Default() {
              return po;
            }
            static get DefaultType() {
              return fo;
            }
            static get NAME() {
              return vi;
            }
            show(e) {
              if (!this._config.isVisible) return void U(e);
              this._append();
              const t = this._getElement();
              this._config.isAnimated && Xe(t),
                t.classList.add(_i),
                this._emulateAnimation(() => {
                  U(e);
                });
            }
            hide(e) {
              this._config.isVisible
                ? (this._getElement().classList.remove(_i),
                  this._emulateAnimation(() => {
                    this.dispose(), U(e);
                  }))
                : U(e);
            }
            dispose() {
              this._isAppended &&
                (l.off(this._element, bi),
                this._element.remove(),
                (this._isAppended = !1));
            }
            _getElement() {
              if (!this._element) {
                const e = document.createElement("div");
                (e.className = this._config.className),
                  this._config.isAnimated && e.classList.add("fade"),
                  (this._element = e);
              }
              return this._element;
            }
            _configAfterMerge(e) {
              return (e.rootElement = P(e.rootElement)), e;
            }
            _append() {
              if (this._isAppended) return;
              const e = this._getElement();
              this._config.rootElement.append(e),
                l.on(e, bi, () => {
                  U(this._config.clickCallback);
                }),
                (this._isAppended = !0);
            }
            _emulateAnimation(e) {
              bn(e, this._getElement(), this._config.isAnimated);
            }
          }
          const yt = ".bs.focustrap",
            go = `focusin${yt}`,
            vo = `keydown.tab${yt}`,
            wi = "backward",
            _o = { autofocus: !0, trapElement: null },
            bo = { autofocus: "boolean", trapElement: "element" };
          class Ei extends Ge {
            constructor(e) {
              super(),
                (this._config = this._getConfig(e)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null);
            }
            static get Default() {
              return _o;
            }
            static get DefaultType() {
              return bo;
            }
            static get NAME() {
              return "focustrap";
            }
            activate() {
              this._isActive ||
                (this._config.autofocus && this._config.trapElement.focus(),
                l.off(document, yt),
                l.on(document, go, (e) => this._handleFocusin(e)),
                l.on(document, vo, (e) => this._handleKeydown(e)),
                (this._isActive = !0));
            }
            deactivate() {
              this._isActive && ((this._isActive = !1), l.off(document, yt));
            }
            _handleFocusin(e) {
              const { trapElement: t } = this._config;
              if (
                e.target === document ||
                e.target === t ||
                t.contains(e.target)
              )
                return;
              const i = m.focusableChildren(t);
              i.length === 0
                ? t.focus()
                : this._lastTabNavDirection === wi
                ? i[i.length - 1].focus()
                : i[0].focus();
            }
            _handleKeydown(e) {
              e.key === "Tab" &&
                (this._lastTabNavDirection = e.shiftKey ? wi : "forward");
            }
          }
          const Ai = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            xi = ".sticky-top",
            wt = "padding-right",
            Ci = "margin-right";
          class sn {
            constructor() {
              this._element = document.body;
            }
            getWidth() {
              const e = document.documentElement.clientWidth;
              return Math.abs(window.innerWidth - e);
            }
            hide() {
              const e = this.getWidth();
              this._disableOverFlow(),
                this._setElementAttributes(this._element, wt, (t) => t + e),
                this._setElementAttributes(Ai, wt, (t) => t + e),
                this._setElementAttributes(xi, Ci, (t) => t - e);
            }
            reset() {
              this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, wt),
                this._resetElementAttributes(Ai, wt),
                this._resetElementAttributes(xi, Ci);
            }
            isOverflowing() {
              return this.getWidth() > 0;
            }
            _disableOverFlow() {
              this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
            }
            _setElementAttributes(e, t, i) {
              const s = this.getWidth();
              this._applyManipulationCallback(e, (o) => {
                if (
                  o !== this._element &&
                  window.innerWidth > o.clientWidth + s
                )
                  return;
                this._saveInitialAttribute(o, t);
                const a = window.getComputedStyle(o).getPropertyValue(t);
                o.style.setProperty(t, `${i(Number.parseFloat(a))}px`);
              });
            }
            _saveInitialAttribute(e, t) {
              const i = e.style.getPropertyValue(t);
              i && fe.setDataAttribute(e, t, i);
            }
            _resetElementAttributes(e, t) {
              this._applyManipulationCallback(e, (i) => {
                const s = fe.getDataAttribute(i, t);
                s !== null
                  ? (fe.removeDataAttribute(i, t), i.style.setProperty(t, s))
                  : i.style.removeProperty(t);
              });
            }
            _applyManipulationCallback(e, t) {
              if (H(e)) t(e);
              else for (const i of m.find(e, this._element)) t(i);
            }
          }
          const ne = ".bs.modal",
            yo = `hide${ne}`,
            wo = `hidePrevented${ne}`,
            Ti = `hidden${ne}`,
            Oi = `show${ne}`,
            Eo = `shown${ne}`,
            Ao = `resize${ne}`,
            xo = `click.dismiss${ne}`,
            Co = `mousedown.dismiss${ne}`,
            To = `keydown.dismiss${ne}`,
            Oo = `click${ne}.data-api`,
            Li = "modal-open",
            ki = "show",
            on = "modal-static",
            Lo = { backdrop: !0, focus: !0, keyboard: !0 },
            ko = {
              backdrop: "(boolean|string)",
              focus: "boolean",
              keyboard: "boolean",
            };
          class Le extends re {
            constructor(e, t) {
              super(e, t),
                (this._dialog = m.findOne(".modal-dialog", this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new sn()),
                this._addEventListeners();
            }
            static get Default() {
              return Lo;
            }
            static get DefaultType() {
              return ko;
            }
            static get NAME() {
              return "modal";
            }
            toggle(e) {
              return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
              this._isShown ||
                this._isTransitioning ||
                l.trigger(this._element, Oi, { relatedTarget: e })
                  .defaultPrevented ||
                ((this._isShown = !0),
                (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add(Li),
                this._adjustDialog(),
                this._backdrop.show(() => this._showElement(e)));
            }
            hide() {
              this._isShown &&
                !this._isTransitioning &&
                (l.trigger(this._element, yo).defaultPrevented ||
                  ((this._isShown = !1),
                  (this._isTransitioning = !0),
                  this._focustrap.deactivate(),
                  this._element.classList.remove(ki),
                  this._queueCallback(
                    () => this._hideModal(),
                    this._element,
                    this._isAnimated()
                  )));
            }
            dispose() {
              l.off(window, ne),
                l.off(this._dialog, ne),
                this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
            }
            handleUpdate() {
              this._adjustDialog();
            }
            _initializeBackDrop() {
              return new yi({
                isVisible: !!this._config.backdrop,
                isAnimated: this._isAnimated(),
              });
            }
            _initializeFocusTrap() {
              return new Ei({ trapElement: this._element });
            }
            _showElement(e) {
              document.body.contains(this._element) ||
                document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0);
              const t = m.findOne(".modal-body", this._dialog);
              t && (t.scrollTop = 0),
                Xe(this._element),
                this._element.classList.add(ki),
                this._queueCallback(
                  () => {
                    this._config.focus && this._focustrap.activate(),
                      (this._isTransitioning = !1),
                      l.trigger(this._element, Eo, { relatedTarget: e });
                  },
                  this._dialog,
                  this._isAnimated()
                );
            }
            _addEventListeners() {
              l.on(this._element, To, (e) => {
                e.key === "Escape" &&
                  (this._config.keyboard
                    ? this.hide()
                    : this._triggerBackdropTransition());
              }),
                l.on(window, Ao, () => {
                  this._isShown &&
                    !this._isTransitioning &&
                    this._adjustDialog();
                }),
                l.on(this._element, Co, (e) => {
                  l.one(this._element, xo, (t) => {
                    this._element === e.target &&
                      this._element === t.target &&
                      (this._config.backdrop !== "static"
                        ? this._config.backdrop && this.hide()
                        : this._triggerBackdropTransition());
                  });
                });
            }
            _hideModal() {
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                  document.body.classList.remove(Li),
                    this._resetAdjustments(),
                    this._scrollBar.reset(),
                    l.trigger(this._element, Ti);
                });
            }
            _isAnimated() {
              return this._element.classList.contains("fade");
            }
            _triggerBackdropTransition() {
              if (l.trigger(this._element, wo).defaultPrevented) return;
              const e =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                t = this._element.style.overflowY;
              t === "hidden" ||
                this._element.classList.contains(on) ||
                (e || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(on),
                this._queueCallback(() => {
                  this._element.classList.remove(on),
                    this._queueCallback(() => {
                      this._element.style.overflowY = t;
                    }, this._dialog);
                }, this._dialog),
                this._element.focus());
            }
            _adjustDialog() {
              const e =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                t = this._scrollBar.getWidth(),
                i = t > 0;
              if (i && !e) {
                const s = Z() ? "paddingLeft" : "paddingRight";
                this._element.style[s] = `${t}px`;
              }
              if (!i && e) {
                const s = Z() ? "paddingRight" : "paddingLeft";
                this._element.style[s] = `${t}px`;
              }
            }
            _resetAdjustments() {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }
            static jQueryInterface(e, t) {
              return this.each(function () {
                const i = Le.getOrCreateInstance(this, e);
                if (typeof e == "string") {
                  if (i[e] === void 0)
                    throw new TypeError(`No method named "${e}"`);
                  i[e](t);
                }
              });
            }
          }
          l.on(document, Oo, '[data-bs-toggle="modal"]', function (n) {
            const e = m.getElementFromSelector(this);
            ["A", "AREA"].includes(this.tagName) && n.preventDefault(),
              l.one(e, Oi, (i) => {
                i.defaultPrevented ||
                  l.one(e, Ti, () => {
                    B(this) && this.focus();
                  });
              });
            const t = m.findOne(".modal.show");
            t && Le.getInstance(t).hide(),
              Le.getOrCreateInstance(e).toggle(this);
          }),
            lt(Le),
            ee(Le);
          const ve = ".bs.offcanvas",
            Si = ".data-api",
            So = `load${ve}${Si}`,
            Ii = "show",
            Di = "showing",
            Mi = "hiding",
            $i = ".offcanvas.show",
            Io = `show${ve}`,
            Do = `shown${ve}`,
            Mo = `hide${ve}`,
            Pi = `hidePrevented${ve}`,
            Ni = `hidden${ve}`,
            $o = `resize${ve}`,
            Po = `click${ve}${Si}`,
            No = `keydown.dismiss${ve}`,
            jo = { backdrop: !0, keyboard: !0, scroll: !1 },
            qo = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              scroll: "boolean",
            };
          class _e extends re {
            constructor(e, t) {
              super(e, t),
                (this._isShown = !1),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                this._addEventListeners();
            }
            static get Default() {
              return jo;
            }
            static get DefaultType() {
              return qo;
            }
            static get NAME() {
              return "offcanvas";
            }
            toggle(e) {
              return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
              this._isShown ||
                l.trigger(this._element, Io, { relatedTarget: e })
                  .defaultPrevented ||
                ((this._isShown = !0),
                this._backdrop.show(),
                this._config.scroll || new sn().hide(),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add(Di),
                this._queueCallback(
                  () => {
                    (this._config.scroll && !this._config.backdrop) ||
                      this._focustrap.activate(),
                      this._element.classList.add(Ii),
                      this._element.classList.remove(Di),
                      l.trigger(this._element, Do, { relatedTarget: e });
                  },
                  this._element,
                  !0
                ));
            }
            hide() {
              this._isShown &&
                (l.trigger(this._element, Mo).defaultPrevented ||
                  (this._focustrap.deactivate(),
                  this._element.blur(),
                  (this._isShown = !1),
                  this._element.classList.add(Mi),
                  this._backdrop.hide(),
                  this._queueCallback(
                    () => {
                      this._element.classList.remove(Ii, Mi),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        this._config.scroll || new sn().reset(),
                        l.trigger(this._element, Ni);
                    },
                    this._element,
                    !0
                  )));
            }
            dispose() {
              this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
            }
            _initializeBackDrop() {
              const e = !!this._config.backdrop;
              return new yi({
                className: "offcanvas-backdrop",
                isVisible: e,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: e
                  ? () => {
                      this._config.backdrop !== "static"
                        ? this.hide()
                        : l.trigger(this._element, Pi);
                    }
                  : null,
              });
            }
            _initializeFocusTrap() {
              return new Ei({ trapElement: this._element });
            }
            _addEventListeners() {
              l.on(this._element, No, (e) => {
                e.key === "Escape" &&
                  (this._config.keyboard
                    ? this.hide()
                    : l.trigger(this._element, Pi));
              });
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = _e.getOrCreateInstance(this, e);
                if (typeof e == "string") {
                  if (
                    t[e] === void 0 ||
                    e.startsWith("_") ||
                    e === "constructor"
                  )
                    throw new TypeError(`No method named "${e}"`);
                  t[e](this);
                }
              });
            }
          }
          l.on(document, Po, '[data-bs-toggle="offcanvas"]', function (n) {
            const e = m.getElementFromSelector(this);
            if (
              (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
              F(this))
            )
              return;
            l.one(e, Ni, () => {
              B(this) && this.focus();
            });
            const t = m.findOne($i);
            t && t !== e && _e.getInstance(t).hide(),
              _e.getOrCreateInstance(e).toggle(this);
          }),
            l.on(window, So, () => {
              for (const n of m.find($i)) _e.getOrCreateInstance(n).show();
            }),
            l.on(window, $o, () => {
              for (const n of m.find(
                "[aria-modal][class*=show][class*=offcanvas-]"
              ))
                getComputedStyle(n).position !== "fixed" &&
                  _e.getOrCreateInstance(n).hide();
            }),
            lt(_e),
            ee(_e);
          const ji = {
              "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
              a: ["target", "href", "title", "rel"],
              area: [],
              b: [],
              br: [],
              col: [],
              code: [],
              dd: [],
              div: [],
              dl: [],
              dt: [],
              em: [],
              hr: [],
              h1: [],
              h2: [],
              h3: [],
              h4: [],
              h5: [],
              h6: [],
              i: [],
              img: ["src", "srcset", "alt", "title", "width", "height"],
              li: [],
              ol: [],
              p: [],
              pre: [],
              s: [],
              small: [],
              span: [],
              sub: [],
              sup: [],
              strong: [],
              u: [],
              ul: [],
            },
            zo = new Set([
              "background",
              "cite",
              "href",
              "itemtype",
              "longdesc",
              "poster",
              "src",
              "xlink:href",
            ]),
            Fo = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
            Ho = (n, e) => {
              const t = n.nodeName.toLowerCase();
              return e.includes(t)
                ? !zo.has(t) || !!Fo.test(n.nodeValue)
                : e.filter((i) => i instanceof RegExp).some((i) => i.test(t));
            },
            Bo = {
              allowList: ji,
              content: {},
              extraClass: "",
              html: !1,
              sanitize: !0,
              sanitizeFn: null,
              template: "<div></div>",
            },
            Ro = {
              allowList: "object",
              content: "object",
              extraClass: "(string|function)",
              html: "boolean",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              template: "string",
            },
            Wo = {
              entry: "(string|element|function|null)",
              selector: "(string|element)",
            };
          class Vo extends Ge {
            constructor(e) {
              super(), (this._config = this._getConfig(e));
            }
            static get Default() {
              return Bo;
            }
            static get DefaultType() {
              return Ro;
            }
            static get NAME() {
              return "TemplateFactory";
            }
            getContent() {
              return Object.values(this._config.content)
                .map((e) => this._resolvePossibleFunction(e))
                .filter(Boolean);
            }
            hasContent() {
              return this.getContent().length > 0;
            }
            changeContent(e) {
              return (
                this._checkContent(e),
                (this._config.content = { ...this._config.content, ...e }),
                this
              );
            }
            toHtml() {
              const e = document.createElement("div");
              e.innerHTML = this._maybeSanitize(this._config.template);
              for (const [s, o] of Object.entries(this._config.content))
                this._setContent(e, o, s);
              const t = e.children[0],
                i = this._resolvePossibleFunction(this._config.extraClass);
              return i && t.classList.add(...i.split(" ")), t;
            }
            _typeCheckConfig(e) {
              super._typeCheckConfig(e), this._checkContent(e.content);
            }
            _checkContent(e) {
              for (const [t, i] of Object.entries(e))
                super._typeCheckConfig({ selector: t, entry: i }, Wo);
            }
            _setContent(e, t, i) {
              const s = m.findOne(i, e);
              s &&
                ((t = this._resolvePossibleFunction(t))
                  ? H(t)
                    ? this._putElementInTemplate(P(t), s)
                    : this._config.html
                    ? (s.innerHTML = this._maybeSanitize(t))
                    : (s.textContent = t)
                  : s.remove());
            }
            _maybeSanitize(e) {
              return this._config.sanitize
                ? (function (t, i, s) {
                    if (!t.length) return t;
                    if (s && typeof s == "function") return s(t);
                    const o = new window.DOMParser().parseFromString(
                        t,
                        "text/html"
                      ),
                      a = [].concat(...o.body.querySelectorAll("*"));
                    for (const r of a) {
                      const c = r.nodeName.toLowerCase();
                      if (!Object.keys(i).includes(c)) {
                        r.remove();
                        continue;
                      }
                      const u = [].concat(...r.attributes),
                        h = [].concat(i["*"] || [], i[c] || []);
                      for (const d of u)
                        Ho(d, h) || r.removeAttribute(d.nodeName);
                    }
                    return o.body.innerHTML;
                  })(e, this._config.allowList, this._config.sanitizeFn)
                : e;
            }
            _resolvePossibleFunction(e) {
              return U(e, [void 0, this]);
            }
            _putElementInTemplate(e, t) {
              if (this._config.html)
                return (t.innerHTML = ""), void t.append(e);
              t.textContent = e.textContent;
            }
          }
          const Ko = new Set(["sanitize", "allowList", "sanitizeFn"]),
            an = "fade",
            Et = "show",
            Uo = ".tooltip-inner",
            qi = ".modal",
            zi = "hide.bs.modal",
            ot = "hover",
            rn = "focus",
            ln = "click",
            Qo = {
              AUTO: "auto",
              TOP: "top",
              RIGHT: Z() ? "left" : "right",
              BOTTOM: "bottom",
              LEFT: Z() ? "right" : "left",
            },
            Yo = {
              allowList: ji,
              animation: !0,
              boundary: "clippingParents",
              container: !1,
              customClass: "",
              delay: 0,
              fallbackPlacements: ["top", "right", "bottom", "left"],
              html: !1,
              offset: [0, 6],
              placement: "top",
              popperConfig: null,
              sanitize: !0,
              sanitizeFn: null,
              selector: !1,
              template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
              title: "",
              trigger: "hover focus",
            },
            Xo = {
              allowList: "object",
              animation: "boolean",
              boundary: "(string|element)",
              container: "(string|element|boolean)",
              customClass: "(string|function)",
              delay: "(number|object)",
              fallbackPlacements: "array",
              html: "boolean",
              offset: "(array|string|function)",
              placement: "(string|function)",
              popperConfig: "(null|object|function)",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              selector: "(string|boolean)",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
            };
          class ke extends re {
            constructor(e, t) {
              if (hi === void 0)
                throw new TypeError(
                  "Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)"
                );
              super(e, t),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._isHovered = null),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._templateFactory = null),
                (this._newContent = null),
                (this.tip = null),
                this._setListeners(),
                this._config.selector || this._fixTitle();
            }
            static get Default() {
              return Yo;
            }
            static get DefaultType() {
              return Xo;
            }
            static get NAME() {
              return "tooltip";
            }
            enable() {
              this._isEnabled = !0;
            }
            disable() {
              this._isEnabled = !1;
            }
            toggleEnabled() {
              this._isEnabled = !this._isEnabled;
            }
            toggle() {
              this._isEnabled &&
                (this._isShown() ? this._leave() : this._enter());
            }
            dispose() {
              clearTimeout(this._timeout),
                l.off(this._element.closest(qi), zi, this._hideModalHandler),
                this._element.getAttribute("data-bs-original-title") &&
                  this._element.setAttribute(
                    "title",
                    this._element.getAttribute("data-bs-original-title")
                  ),
                this._disposePopper(),
                super.dispose();
            }
            show() {
              if (this._element.style.display === "none")
                throw new Error("Please use show on visible elements");
              if (!this._isWithContent() || !this._isEnabled) return;
              const e = l.trigger(
                  this._element,
                  this.constructor.eventName("show")
                ),
                t = (
                  de(this._element) ||
                  this._element.ownerDocument.documentElement
                ).contains(this._element);
              if (e.defaultPrevented || !t) return;
              this._disposePopper();
              const i = this._getTipElement();
              this._element.setAttribute(
                "aria-describedby",
                i.getAttribute("id")
              );
              const { container: s } = this._config;
              if (
                (this._element.ownerDocument.documentElement.contains(
                  this.tip
                ) ||
                  (s.append(i),
                  l.trigger(
                    this._element,
                    this.constructor.eventName("inserted")
                  )),
                (this._popper = this._createPopper(i)),
                i.classList.add(Et),
                "ontouchstart" in document.documentElement)
              )
                for (const o of [].concat(...document.body.children))
                  l.on(o, "mouseover", ae);
              this._queueCallback(
                () => {
                  l.trigger(this._element, this.constructor.eventName("shown")),
                    this._isHovered === !1 && this._leave(),
                    (this._isHovered = !1);
                },
                this.tip,
                this._isAnimated()
              );
            }
            hide() {
              if (
                this._isShown() &&
                !l.trigger(this._element, this.constructor.eventName("hide"))
                  .defaultPrevented
              ) {
                if (
                  (this._getTipElement().classList.remove(Et),
                  "ontouchstart" in document.documentElement)
                )
                  for (const e of [].concat(...document.body.children))
                    l.off(e, "mouseover", ae);
                (this._activeTrigger[ln] = !1),
                  (this._activeTrigger[rn] = !1),
                  (this._activeTrigger[ot] = !1),
                  (this._isHovered = null),
                  this._queueCallback(
                    () => {
                      this._isWithActiveTrigger() ||
                        (this._isHovered || this._disposePopper(),
                        this._element.removeAttribute("aria-describedby"),
                        l.trigger(
                          this._element,
                          this.constructor.eventName("hidden")
                        ));
                    },
                    this.tip,
                    this._isAnimated()
                  );
              }
            }
            update() {
              this._popper && this._popper.update();
            }
            _isWithContent() {
              return !!this._getTitle();
            }
            _getTipElement() {
              return (
                this.tip ||
                  (this.tip = this._createTipElement(
                    this._newContent || this._getContentForTemplate()
                  )),
                this.tip
              );
            }
            _createTipElement(e) {
              const t = this._getTemplateFactory(e).toHtml();
              if (!t) return null;
              t.classList.remove(an, Et),
                t.classList.add(`bs-${this.constructor.NAME}-auto`);
              const i = ((s) => {
                do s += Math.floor(1e6 * Math.random());
                while (document.getElementById(s));
                return s;
              })(this.constructor.NAME).toString();
              return (
                t.setAttribute("id", i),
                this._isAnimated() && t.classList.add(an),
                t
              );
            }
            setContent(e) {
              (this._newContent = e),
                this._isShown() && (this._disposePopper(), this.show());
            }
            _getTemplateFactory(e) {
              return (
                this._templateFactory
                  ? this._templateFactory.changeContent(e)
                  : (this._templateFactory = new Vo({
                      ...this._config,
                      content: e,
                      extraClass: this._resolvePossibleFunction(
                        this._config.customClass
                      ),
                    })),
                this._templateFactory
              );
            }
            _getContentForTemplate() {
              return { [Uo]: this._getTitle() };
            }
            _getTitle() {
              return (
                this._resolvePossibleFunction(this._config.title) ||
                this._element.getAttribute("data-bs-original-title")
              );
            }
            _initializeOnDelegatedTarget(e) {
              return this.constructor.getOrCreateInstance(
                e.delegateTarget,
                this._getDelegateConfig()
              );
            }
            _isAnimated() {
              return (
                this._config.animation ||
                (this.tip && this.tip.classList.contains(an))
              );
            }
            _isShown() {
              return this.tip && this.tip.classList.contains(Et);
            }
            _createPopper(e) {
              const t = U(this._config.placement, [this, e, this._element]),
                i = Qo[t.toUpperCase()];
              return tn(this._element, e, this._getPopperConfig(i));
            }
            _getOffset() {
              const { offset: e } = this._config;
              return typeof e == "string"
                ? e.split(",").map((t) => Number.parseInt(t, 10))
                : typeof e == "function"
                ? (t) => e(t, this._element)
                : e;
            }
            _resolvePossibleFunction(e) {
              return U(e, [this._element, this._element]);
            }
            _getPopperConfig(e) {
              const t = {
                placement: e,
                modifiers: [
                  {
                    name: "flip",
                    options: {
                      fallbackPlacements: this._config.fallbackPlacements,
                    },
                  },
                  { name: "offset", options: { offset: this._getOffset() } },
                  {
                    name: "preventOverflow",
                    options: { boundary: this._config.boundary },
                  },
                  {
                    name: "arrow",
                    options: { element: `.${this.constructor.NAME}-arrow` },
                  },
                  {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: (i) => {
                      this._getTipElement().setAttribute(
                        "data-popper-placement",
                        i.state.placement
                      );
                    },
                  },
                ],
              };
              return { ...t, ...U(this._config.popperConfig, [void 0, t]) };
            }
            _setListeners() {
              const e = this._config.trigger.split(" ");
              for (const t of e)
                if (t === "click")
                  l.on(
                    this._element,
                    this.constructor.eventName("click"),
                    this._config.selector,
                    (i) => {
                      const s = this._initializeOnDelegatedTarget(i);
                      (s._activeTrigger[ln] = !(
                        s._isShown() && s._activeTrigger[ln]
                      )),
                        s.toggle();
                    }
                  );
                else if (t !== "manual") {
                  const i =
                      t === ot
                        ? this.constructor.eventName("mouseenter")
                        : this.constructor.eventName("focusin"),
                    s =
                      t === ot
                        ? this.constructor.eventName("mouseleave")
                        : this.constructor.eventName("focusout");
                  l.on(this._element, i, this._config.selector, (o) => {
                    const a = this._initializeOnDelegatedTarget(o);
                    (a._activeTrigger[o.type === "focusin" ? rn : ot] = !0),
                      a._enter();
                  }),
                    l.on(this._element, s, this._config.selector, (o) => {
                      const a = this._initializeOnDelegatedTarget(o);
                      (a._activeTrigger[o.type === "focusout" ? rn : ot] =
                        a._element.contains(o.relatedTarget)),
                        a._leave();
                    });
                }
              (this._hideModalHandler = () => {
                this._element && this.hide();
              }),
                l.on(this._element.closest(qi), zi, this._hideModalHandler);
            }
            _fixTitle() {
              const e = this._element.getAttribute("title");
              e &&
                (this._element.getAttribute("aria-label") ||
                  this._element.textContent.trim() ||
                  this._element.setAttribute("aria-label", e),
                this._element.setAttribute("data-bs-original-title", e),
                this._element.removeAttribute("title"));
            }
            _enter() {
              this._isShown() || this._isHovered
                ? (this._isHovered = !0)
                : ((this._isHovered = !0),
                  this._setTimeout(() => {
                    this._isHovered && this.show();
                  }, this._config.delay.show));
            }
            _leave() {
              this._isWithActiveTrigger() ||
                ((this._isHovered = !1),
                this._setTimeout(() => {
                  this._isHovered || this.hide();
                }, this._config.delay.hide));
            }
            _setTimeout(e, t) {
              clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
            }
            _isWithActiveTrigger() {
              return Object.values(this._activeTrigger).includes(!0);
            }
            _getConfig(e) {
              const t = fe.getDataAttributes(this._element);
              for (const i of Object.keys(t)) Ko.has(i) && delete t[i];
              return (
                (e = { ...t, ...(typeof e == "object" && e ? e : {}) }),
                (e = this._mergeConfigObj(e)),
                (e = this._configAfterMerge(e)),
                this._typeCheckConfig(e),
                e
              );
            }
            _configAfterMerge(e) {
              return (
                (e.container =
                  e.container === !1 ? document.body : P(e.container)),
                typeof e.delay == "number" &&
                  (e.delay = { show: e.delay, hide: e.delay }),
                typeof e.title == "number" && (e.title = e.title.toString()),
                typeof e.content == "number" &&
                  (e.content = e.content.toString()),
                e
              );
            }
            _getDelegateConfig() {
              const e = {};
              for (const [t, i] of Object.entries(this._config))
                this.constructor.Default[t] !== i && (e[t] = i);
              return (e.selector = !1), (e.trigger = "manual"), e;
            }
            _disposePopper() {
              this._popper && (this._popper.destroy(), (this._popper = null)),
                this.tip && (this.tip.remove(), (this.tip = null));
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = ke.getOrCreateInstance(this, e);
                if (typeof e == "string") {
                  if (t[e] === void 0)
                    throw new TypeError(`No method named "${e}"`);
                  t[e]();
                }
              });
            }
          }
          ee(ke);
          const Go = ".popover-header",
            Jo = ".popover-body",
            Zo = {
              ...ke.Default,
              content: "",
              offset: [0, 8],
              placement: "right",
              template:
                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
              trigger: "click",
            },
            ea = {
              ...ke.DefaultType,
              content: "(null|string|element|function)",
            };
          class At extends ke {
            static get Default() {
              return Zo;
            }
            static get DefaultType() {
              return ea;
            }
            static get NAME() {
              return "popover";
            }
            _isWithContent() {
              return this._getTitle() || this._getContent();
            }
            _getContentForTemplate() {
              return { [Go]: this._getTitle(), [Jo]: this._getContent() };
            }
            _getContent() {
              return this._resolvePossibleFunction(this._config.content);
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = At.getOrCreateInstance(this, e);
                if (typeof e == "string") {
                  if (t[e] === void 0)
                    throw new TypeError(`No method named "${e}"`);
                  t[e]();
                }
              });
            }
          }
          ee(At);
          const cn = ".bs.scrollspy",
            ta = `activate${cn}`,
            Fi = `click${cn}`,
            na = `load${cn}.data-api`,
            Qe = "active",
            dn = "[href]",
            Hi = ".nav-link",
            ia = `${Hi}, .nav-item > ${Hi}, .list-group-item`,
            sa = {
              offset: null,
              rootMargin: "0px 0px -25%",
              smoothScroll: !1,
              target: null,
              threshold: [0.1, 0.5, 1],
            },
            oa = {
              offset: "(number|null)",
              rootMargin: "string",
              smoothScroll: "boolean",
              target: "element",
              threshold: "array",
            };
          class at extends re {
            constructor(e, t) {
              super(e, t),
                (this._targetLinks = new Map()),
                (this._observableSections = new Map()),
                (this._rootElement =
                  getComputedStyle(this._element).overflowY === "visible"
                    ? null
                    : this._element),
                (this._activeTarget = null),
                (this._observer = null),
                (this._previousScrollData = {
                  visibleEntryTop: 0,
                  parentScrollTop: 0,
                }),
                this.refresh();
            }
            static get Default() {
              return sa;
            }
            static get DefaultType() {
              return oa;
            }
            static get NAME() {
              return "scrollspy";
            }
            refresh() {
              this._initializeTargetsAndObservables(),
                this._maybeEnableSmoothScroll(),
                this._observer
                  ? this._observer.disconnect()
                  : (this._observer = this._getNewObserver());
              for (const e of this._observableSections.values())
                this._observer.observe(e);
            }
            dispose() {
              this._observer.disconnect(), super.dispose();
            }
            _configAfterMerge(e) {
              return (
                (e.target = P(e.target) || document.body),
                (e.rootMargin = e.offset
                  ? `${e.offset}px 0px -30%`
                  : e.rootMargin),
                typeof e.threshold == "string" &&
                  (e.threshold = e.threshold
                    .split(",")
                    .map((t) => Number.parseFloat(t))),
                e
              );
            }
            _maybeEnableSmoothScroll() {
              this._config.smoothScroll &&
                (l.off(this._config.target, Fi),
                l.on(this._config.target, Fi, dn, (e) => {
                  const t = this._observableSections.get(e.target.hash);
                  if (t) {
                    e.preventDefault();
                    const i = this._rootElement || window,
                      s = t.offsetTop - this._element.offsetTop;
                    if (i.scrollTo)
                      return void i.scrollTo({ top: s, behavior: "smooth" });
                    i.scrollTop = s;
                  }
                }));
            }
            _getNewObserver() {
              const e = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin,
              };
              return new IntersectionObserver(
                (t) => this._observerCallback(t),
                e
              );
            }
            _observerCallback(e) {
              const t = (a) => this._targetLinks.get(`#${a.target.id}`),
                i = (a) => {
                  (this._previousScrollData.visibleEntryTop =
                    a.target.offsetTop),
                    this._process(t(a));
                },
                s = (this._rootElement || document.documentElement).scrollTop,
                o = s >= this._previousScrollData.parentScrollTop;
              this._previousScrollData.parentScrollTop = s;
              for (const a of e) {
                if (!a.isIntersecting) {
                  (this._activeTarget = null), this._clearActiveClass(t(a));
                  continue;
                }
                const r =
                  a.target.offsetTop >=
                  this._previousScrollData.visibleEntryTop;
                if (o && r) {
                  if ((i(a), !s)) return;
                } else o || r || i(a);
              }
            }
            _initializeTargetsAndObservables() {
              (this._targetLinks = new Map()),
                (this._observableSections = new Map());
              const e = m.find(dn, this._config.target);
              for (const t of e) {
                if (!t.hash || F(t)) continue;
                const i = m.findOne(decodeURI(t.hash), this._element);
                B(i) &&
                  (this._targetLinks.set(decodeURI(t.hash), t),
                  this._observableSections.set(t.hash, i));
              }
            }
            _process(e) {
              this._activeTarget !== e &&
                (this._clearActiveClass(this._config.target),
                (this._activeTarget = e),
                e.classList.add(Qe),
                this._activateParents(e),
                l.trigger(this._element, ta, { relatedTarget: e }));
            }
            _activateParents(e) {
              if (e.classList.contains("dropdown-item"))
                m.findOne(
                  ".dropdown-toggle",
                  e.closest(".dropdown")
                ).classList.add(Qe);
              else
                for (const t of m.parents(e, ".nav, .list-group"))
                  for (const i of m.prev(t, ia)) i.classList.add(Qe);
            }
            _clearActiveClass(e) {
              e.classList.remove(Qe);
              const t = m.find(`${dn}.${Qe}`, e);
              for (const i of t) i.classList.remove(Qe);
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = at.getOrCreateInstance(this, e);
                if (typeof e == "string") {
                  if (
                    t[e] === void 0 ||
                    e.startsWith("_") ||
                    e === "constructor"
                  )
                    throw new TypeError(`No method named "${e}"`);
                  t[e]();
                }
              });
            }
          }
          l.on(window, na, () => {
            for (const n of m.find('[data-bs-spy="scroll"]'))
              at.getOrCreateInstance(n);
          }),
            ee(at);
          const Se = ".bs.tab",
            aa = `hide${Se}`,
            ra = `hidden${Se}`,
            la = `show${Se}`,
            ca = `shown${Se}`,
            da = `click${Se}`,
            ua = `keydown${Se}`,
            ha = `load${Se}`,
            ma = "ArrowLeft",
            Bi = "ArrowRight",
            pa = "ArrowUp",
            Ri = "ArrowDown",
            un = "Home",
            Wi = "End",
            Ie = "active",
            Vi = "fade",
            hn = "show",
            Ki = ".dropdown-toggle",
            mn = `:not(${Ki})`,
            Ui =
              '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            pn = `.nav-link${mn}, .list-group-item${mn}, [role="tab"]${mn}, ${Ui}`,
            fa = `.${Ie}[data-bs-toggle="tab"], .${Ie}[data-bs-toggle="pill"], .${Ie}[data-bs-toggle="list"]`;
          class De extends re {
            constructor(e) {
              super(e),
                (this._parent = this._element.closest(
                  '.list-group, .nav, [role="tablist"]'
                )),
                this._parent &&
                  (this._setInitialAttributes(
                    this._parent,
                    this._getChildren()
                  ),
                  l.on(this._element, ua, (t) => this._keydown(t)));
            }
            static get NAME() {
              return "tab";
            }
            show() {
              const e = this._element;
              if (this._elemIsActive(e)) return;
              const t = this._getActiveElem(),
                i = t ? l.trigger(t, aa, { relatedTarget: e }) : null;
              l.trigger(e, la, { relatedTarget: t }).defaultPrevented ||
                (i && i.defaultPrevented) ||
                (this._deactivate(t, e), this._activate(e, t));
            }
            _activate(e, t) {
              e &&
                (e.classList.add(Ie),
                this._activate(m.getElementFromSelector(e)),
                this._queueCallback(
                  () => {
                    e.getAttribute("role") === "tab"
                      ? (e.removeAttribute("tabindex"),
                        e.setAttribute("aria-selected", !0),
                        this._toggleDropDown(e, !0),
                        l.trigger(e, ca, { relatedTarget: t }))
                      : e.classList.add(hn);
                  },
                  e,
                  e.classList.contains(Vi)
                ));
            }
            _deactivate(e, t) {
              e &&
                (e.classList.remove(Ie),
                e.blur(),
                this._deactivate(m.getElementFromSelector(e)),
                this._queueCallback(
                  () => {
                    e.getAttribute("role") === "tab"
                      ? (e.setAttribute("aria-selected", !1),
                        e.setAttribute("tabindex", "-1"),
                        this._toggleDropDown(e, !1),
                        l.trigger(e, ra, { relatedTarget: t }))
                      : e.classList.remove(hn);
                  },
                  e,
                  e.classList.contains(Vi)
                ));
            }
            _keydown(e) {
              if (![ma, Bi, pa, Ri, un, Wi].includes(e.key)) return;
              e.stopPropagation(), e.preventDefault();
              const t = this._getChildren().filter((s) => !F(s));
              let i;
              if ([un, Wi].includes(e.key))
                i = t[e.key === un ? 0 : t.length - 1];
              else {
                const s = [Bi, Ri].includes(e.key);
                i = It(t, e.target, s, !0);
              }
              i &&
                (i.focus({ preventScroll: !0 }),
                De.getOrCreateInstance(i).show());
            }
            _getChildren() {
              return m.find(pn, this._parent);
            }
            _getActiveElem() {
              return (
                this._getChildren().find((e) => this._elemIsActive(e)) || null
              );
            }
            _setInitialAttributes(e, t) {
              this._setAttributeIfNotExists(e, "role", "tablist");
              for (const i of t) this._setInitialAttributesOnChild(i);
            }
            _setInitialAttributesOnChild(e) {
              e = this._getInnerElement(e);
              const t = this._elemIsActive(e),
                i = this._getOuterElement(e);
              e.setAttribute("aria-selected", t),
                i !== e &&
                  this._setAttributeIfNotExists(i, "role", "presentation"),
                t || e.setAttribute("tabindex", "-1"),
                this._setAttributeIfNotExists(e, "role", "tab"),
                this._setInitialAttributesOnTargetPanel(e);
            }
            _setInitialAttributesOnTargetPanel(e) {
              const t = m.getElementFromSelector(e);
              t &&
                (this._setAttributeIfNotExists(t, "role", "tabpanel"),
                e.id &&
                  this._setAttributeIfNotExists(
                    t,
                    "aria-labelledby",
                    `${e.id}`
                  ));
            }
            _toggleDropDown(e, t) {
              const i = this._getOuterElement(e);
              if (!i.classList.contains("dropdown")) return;
              const s = (o, a) => {
                const r = m.findOne(o, i);
                r && r.classList.toggle(a, t);
              };
              s(Ki, Ie),
                s(".dropdown-menu", hn),
                i.setAttribute("aria-expanded", t);
            }
            _setAttributeIfNotExists(e, t, i) {
              e.hasAttribute(t) || e.setAttribute(t, i);
            }
            _elemIsActive(e) {
              return e.classList.contains(Ie);
            }
            _getInnerElement(e) {
              return e.matches(pn) ? e : m.findOne(pn, e);
            }
            _getOuterElement(e) {
              return e.closest(".nav-item, .list-group-item") || e;
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = De.getOrCreateInstance(this);
                if (typeof e == "string") {
                  if (
                    t[e] === void 0 ||
                    e.startsWith("_") ||
                    e === "constructor"
                  )
                    throw new TypeError(`No method named "${e}"`);
                  t[e]();
                }
              });
            }
          }
          l.on(document, da, Ui, function (n) {
            ["A", "AREA"].includes(this.tagName) && n.preventDefault(),
              F(this) || De.getOrCreateInstance(this).show();
          }),
            l.on(window, ha, () => {
              for (const n of m.find(fa)) De.getOrCreateInstance(n);
            }),
            ee(De);
          const we = ".bs.toast",
            ga = `mouseover${we}`,
            va = `mouseout${we}`,
            _a = `focusin${we}`,
            ba = `focusout${we}`,
            ya = `hide${we}`,
            wa = `hidden${we}`,
            Ea = `show${we}`,
            Aa = `shown${we}`,
            Qi = "hide",
            xt = "show",
            Ct = "showing",
            xa = { animation: "boolean", autohide: "boolean", delay: "number" },
            Ca = { animation: !0, autohide: !0, delay: 5e3 };
          class rt extends re {
            constructor(e, t) {
              super(e, t),
                (this._timeout = null),
                (this._hasMouseInteraction = !1),
                (this._hasKeyboardInteraction = !1),
                this._setListeners();
            }
            static get Default() {
              return Ca;
            }
            static get DefaultType() {
              return xa;
            }
            static get NAME() {
              return "toast";
            }
            show() {
              l.trigger(this._element, Ea).defaultPrevented ||
                (this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade"),
                this._element.classList.remove(Qi),
                Xe(this._element),
                this._element.classList.add(xt, Ct),
                this._queueCallback(
                  () => {
                    this._element.classList.remove(Ct),
                      l.trigger(this._element, Aa),
                      this._maybeScheduleHide();
                  },
                  this._element,
                  this._config.animation
                ));
            }
            hide() {
              this.isShown() &&
                (l.trigger(this._element, ya).defaultPrevented ||
                  (this._element.classList.add(Ct),
                  this._queueCallback(
                    () => {
                      this._element.classList.add(Qi),
                        this._element.classList.remove(Ct, xt),
                        l.trigger(this._element, wa);
                    },
                    this._element,
                    this._config.animation
                  )));
            }
            dispose() {
              this._clearTimeout(),
                this.isShown() && this._element.classList.remove(xt),
                super.dispose();
            }
            isShown() {
              return this._element.classList.contains(xt);
            }
            _maybeScheduleHide() {
              this._config.autohide &&
                (this._hasMouseInteraction ||
                  this._hasKeyboardInteraction ||
                  (this._timeout = setTimeout(() => {
                    this.hide();
                  }, this._config.delay)));
            }
            _onInteraction(e, t) {
              switch (e.type) {
                case "mouseover":
                case "mouseout":
                  this._hasMouseInteraction = t;
                  break;
                case "focusin":
                case "focusout":
                  this._hasKeyboardInteraction = t;
              }
              if (t) return void this._clearTimeout();
              const i = e.relatedTarget;
              this._element === i ||
                this._element.contains(i) ||
                this._maybeScheduleHide();
            }
            _setListeners() {
              l.on(this._element, ga, (e) => this._onInteraction(e, !0)),
                l.on(this._element, va, (e) => this._onInteraction(e, !1)),
                l.on(this._element, _a, (e) => this._onInteraction(e, !0)),
                l.on(this._element, ba, (e) => this._onInteraction(e, !1));
            }
            _clearTimeout() {
              clearTimeout(this._timeout), (this._timeout = null);
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = rt.getOrCreateInstance(this, e);
                if (typeof e == "string") {
                  if (t[e] === void 0)
                    throw new TypeError(`No method named "${e}"`);
                  t[e](this);
                }
              });
            }
          }
          return (
            lt(rt),
            ee(rt),
            {
              Alert: Je,
              Button: Ze,
              Carousel: je,
              Collapse: ze,
              Dropdown: le,
              Modal: Le,
              Offcanvas: _e,
              Popover: At,
              ScrollSpy: at,
              Tab: De,
              Toast: rt,
              Tooltip: ke,
            }
          );
        });
      })(kt)),
    kt.exports
  );
}
Va();
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".modal-paginated").forEach((x) => {
    const E = x.querySelectorAll(".page-content"),
      T = x.querySelector(".prev-btn"),
      b = x.querySelector(".next-btn"),
      O = x.querySelector(".page-indicator-container"),
      Q = x.querySelector(".content-container");
    let z = 0;
    const H = () => {
        (O.innerHTML = ""),
          E.forEach((F, de) => {
            const ae = document.createElement("span");
            ae.classList.add("indicator-dot"),
              ae.setAttribute("aria-label", `Ir para a página ${de + 1}`),
              ae.addEventListener("click", () => B(de)),
              O.appendChild(ae);
          });
      },
      P = () => {
        (T.hidden = z === 0),
          (b.hidden = z === E.length - 1),
          O.querySelectorAll(".indicator-dot").forEach((de, ae) => {
            de.classList.toggle("active", ae === z);
          });
      },
      B = (F) => {
        E.forEach((de) => de.classList.add("hidden")),
          E[F] && E[F].classList.remove("hidden"),
          (z = F),
          P(),
          Q && Q.scrollTo({ top: 0, behavior: "smooth" });
      };
    b.addEventListener("click", () => {
      z < E.length - 1 && B(z + 1);
    }),
      T.addEventListener("click", () => {
        z > 0 && B(z - 1);
      }),
      x.addEventListener("show.bs.modal", () => {
        B(0);
      }),
      H(),
      B(0);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const j = document.getElementById("formContato");
  j &&
    j.addEventListener("submit", function (x) {
      x.preventDefault();
      const E = encodeURIComponent(
          document.getElementById("nome").value.trim()
        ),
        T = encodeURIComponent(
          document.getElementById("condominio").value.trim()
        ),
        b = encodeURIComponent(
          document.getElementById("quantidade").value.trim()
        ),
        O = `Olá! Meu nome é *${E}* e tenho interesse no projeto.%0ASou representante do condomínio *${T}*, que possui *${b}* unidades.%0A%0A Gostaria de saber mais sobre o sistema de Gestão de Encomendas.`,
        Q = "5532999735726",
        z = navigator.userAgent.toLowerCase(),
        P = /android|iphone|ipad|ipod/i.test(z)
          ? `https://wa.me/${Q}?text=${O}`
          : `https://web.whatsapp.com/send?phone=${Q}&text=${O}`;
      window.location.href = P;
    });
});
function Ka() {
  const j = document.querySelectorAll(".timeline-card");
  j.forEach((x) => {
    const E = x.querySelector(".timeline-card-toggle");
    E &&
      E.addEventListener("click", () => {
        j.forEach((T) => {
          T !== x && T.classList.remove("active");
        }),
          x.classList.toggle("active");
      });
  });
}
document.querySelector("#app").innerHTML = `
  ${$a}
  ${Pa}
  ${Na}
  ${ja}
  ${qa}
  ${Ba}
  ${Ra}
`;
document.body.insertAdjacentHTML("beforeend", za);
document.body.insertAdjacentHTML("beforeend", Fa);
document.body.insertAdjacentHTML("beforeend", Ha);
Ka();
