<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="<?php bloginfo( 'description' ); ?>">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

  <!-- --- HEADER NAVIGATION --- -->
  <header>
    <div class="container header-nav">
      <a href="#" class="logo">
        Entre <span>Sites</span>
      </a>
      <nav class="nav-links">
        <a href="#inicio">Início</a>
        <a href="#solucoes">Soluções</a>
        <a href="#diferenciais">Diferenciais</a>
        <a href="#contato">Contato</a>
      </nav>
      <a href="#contato" class="cta-btn-nav">Solicitar Projeto</a>
    </div>
  </header>

  <!-- --- HERO SECTION --- -->
  <section class="hero" id="inicio">
    <div class="container hero-grid">
      <div class="hero-text">
        <h1>Transformamos Ideias em <span>Plataformas Web</span> de Alto Impacto</h1>
        <p>Desenvolvemos soluções digitais completas e otimizadas para gerar vendas em escala. De Landing Pages a sistemas de gestão ERP multiplataformas.</p>
        <div class="hero-buttons">
          <a href="#solucoes" class="btn-primary">Ver Nossos Produtos</a>
          <a href="#contato" class="btn-secondary">Falar com Especialista</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="floating-sphere"></div>
        <div class="visual-card">
          <div class="visual-card-header">
            <div class="visual-card-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: var(--accent-purple); letter-spacing: 1px;">Status da Operação</span>
          </div>
          <div class="visual-card-body">
            <div class="visual-card-title">Vendas Sincronizadas</div>
            <div style="font-size: 12px; color: var(--text-muted);">Integrações Ativas: Shopee, ML e WooCommerce</div>
            <div class="visual-card-stat">+ R$ 48.920,00</div>
            <div style="font-size: 11px; color: var(--accent-green); font-weight: bold; margin-top: 8px; display: flex; align-items: center; gap: 4px;">
              <svg fill="currentColor" viewBox="0 0 20 20" style="width: 14px; height: 14px;"><path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"></path></svg>
              +24% de crescimento este mês
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- --- SOLUTIONS / PRODUCTS SECTION --- -->
  <section id="solucoes" style="background: rgba(255,255,255,0.01); border-top: 1px solid var(--border-glass); border-bottom: 1px solid var(--border-glass);">
    <div class="container">
      <div class="section-title">
        <h2>Nossas Soluções Sob Medida</h2>
        <p>Selecione a engrenagem digital ideal para alavancar a sua empresa. Clique em <strong>Ver Exemplo Prático</strong> para testar a experiência real que criaremos para o seu negócio.</p>
      </div>

      <div class="products-grid">
        <!-- PRODUCT 01: LANDING PAGES -->
        <div class="glass-card product-card cyan">
          <div class="product-image-container">
            <!-- Simulated Landing Page Vector Graphics -->
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #0f172a, #1e293b); display: flex; align-items: center; justify-content: center; position: relative;">
              <div style="width: 85%; height: 80%; border-radius: 6px; border: 1px solid rgba(0, 212, 255, 0.2); background: rgba(8, 9, 12, 0.9); padding: 10px; display: flex; flex-direction: column; gap: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 4px;">
                  <div style="display: flex; gap: 4px;"><span style="width: 6px; height: 6px; border-radius: 50%; background: #ef4444;"></span><span style="width: 6px; height: 6px; border-radius: 50%; background: #f59e0b;"></span><span style="width: 6px; height: 6px; border-radius: 50%; background: #10b981;"></span></div>
                  <span style="font-size: 8px; color: var(--text-muted);">cloudflow.com</span>
                </div>
                <div style="height: 10px; width: 60%; background: linear-gradient(90deg, #fff, #9ca3af); border-radius: 3px;"></div>
                <div style="height: 6px; width: 80%; background: rgba(255,255,255,0.1); border-radius: 2px;"></div>
                <div style="display: flex; gap: 6px; margin-top: 5px;">
                  <div style="height: 14px; width: 35px; background: var(--accent-cyan); border-radius: 3px; display: flex; align-items: center; justify-content: center;"><span style="font-size: 6px; color: #000; font-weight: bold;">Começar</span></div>
                  <div style="height: 14px; width: 35px; border: 1px solid rgba(255,255,255,0.1); border-radius: 3px;"></div>
                </div>
                <div style="margin-top: 10px; border: 1px dashed rgba(0,212,255,0.2); border-radius: 4px; padding: 4px; display: flex; align-items: center; gap: 6px; background: rgba(0, 212, 255, 0.02);">
                  <div style="width: 12px; height: 12px; border-radius: 50%; background: rgba(0, 212, 255, 0.1); color: var(--accent-cyan); display: flex; align-items: center; justify-content: center; font-size: 8px; font-weight: bold;">⚡</div>
                  <div style="font-size: 7px; color: var(--accent-cyan); font-weight: bold;">Conversão otimizada +45%</div>
                </div>
              </div>
            </div>
            <span class="product-badge cyan">Mais Rápido</span>
          </div>

          <div class="product-info">
            <h3>Páginas Profissionais</h3>
            <p class="product-desc">Landing Pages exclusivas de altíssima conversão, com carregamento ultra-rápido, design premium adaptado para celular, e gatilhos mentais otimizados para vendas.</p>
            
            <div class="product-price-box">
              <div class="product-price-label">Investimento Único</div>
              <div class="product-price-val">R$ 1.621,00</div>
              <div class="product-price-sub">Equivalente a 1 Salário Mínimo</div>
            </div>

            <ul class="product-features-list">
              <li>
                <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
                Design 100% Exclusivo e Moderno
              </li>
              <li>
                <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
                Otimização de SEO de Alta Performance
              </li>
              <li>
                <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
                Botão de WhatsApp Integrado
              </li>
              <li>
                <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
                Hospedagem & Domínio Configuráveis
              </li>
            </ul>

            <a href="<?php echo esc_url( get_template_directory_uri() ); ?>/demos/landing-page.html" target="_blank" class="product-action-btn">
              Ver Exemplo Prático
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="width: 16px; height: 16px;"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg>
            </a>
          </div>
        </div>

        <!-- PRODUCT 02: E-COMMERCE -->
        <div class="glass-card product-card purple">
          <div class="product-image-container">
            <!-- Simulated Store Vector Graphics -->
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #1e1b4b, #311042); display: flex; align-items: center; justify-content: center; position: relative;">
              <div style="width: 85%; height: 80%; border-radius: 6px; border: 1px solid rgba(157, 78, 221, 0.2); background: rgba(8, 9, 12, 0.9); padding: 10px; display: flex; flex-direction: column; gap: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 4px;">
                  <span style="font-size: 8px; font-weight: bold; color: var(--accent-purple);">STORE</span>
                  <div style="width: 12px; height: 12px; border-radius: 40%; background: rgba(157,78,221,0.2); display: flex; align-items: center; justify-content: center; font-size: 6px; color: var(--accent-purple);">🛒</div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 4px;">
                  <div style="border: 1px solid rgba(255,255,255,0.05); border-radius: 4px; padding: 4px; display: flex; flex-direction: column; gap: 3px;">
                    <div style="height: 20px; background: rgba(255,255,255,0.05); border-radius: 2px;"></div>
                    <div style="height: 4px; width: 70%; background: #fff; border-radius: 1px;"></div>
                    <div style="height: 3px; width: 40%; background: var(--accent-green); border-radius: 1px;"></div>
                  </div>
                  <div style="border: 1px solid rgba(255,255,255,0.05); border-radius: 4px; padding: 4px; display: flex; flex-direction: column; gap: 3px;">
                    <div style="height: 20px; background: rgba(255,255,255,0.05); border-radius: 2px;"></div>
                    <div style="height: 4px; width: 70%; background: #fff; border-radius: 1px;"></div>
                    <div style="height: 3px; width: 40%; background: var(--accent-green); border-radius: 1px;"></div>
                  </div>
                </div>
                <div style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 3px; padding: 3px; font-size: 6px; color: var(--accent-green); font-weight: bold; text-align: center;">
                  🚚 Frete Calculado por CEP + Rastreamento
                </div>
              </div>
            </div>
            <span class="product-badge purple">Mais Popular</span>
          </div>

          <div class="product-info">
            <h3>E-Commerce Completo</h3>
            <p class="product-desc">Lojas virtuais completas de alta conversão. Inclui cadastro ilimitado, cálculo automático de frete por CEP, rastreamento ativo de pedidos, cupom de desconto e checkout transparente.</p>
            
            <div class="product-price-box">
              <div class="product-price-label">Investimento Único</div>
              <div class="product-price-val">R$ 8.105,00</div>
              <div class="product-price-sub">Equivalente a 5 Salários Mínimos</div>
            </div>

            <ul class="product-features-list">
              <li>
                <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
                Catálogo Dinâmico & Gateways de Pagamento
              </li>
              <li>
                <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
                Cálculo de Frete Correios / Transportadoras
              </li>
              <li>
                <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
                Painel Administrativo para Gestão de Pedidos
              </li>
              <li>
                <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
                Disparos de E-mail de Status do Pedido
              </li>
            </ul>

            <a href="<?php echo esc_url( get_template_directory_uri() ); ?>/demos/ecommerce.html" target="_blank" class="product-action-btn">
              Ver Exemplo Prático
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="width: 16px; height: 16px;"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg>
            </a>
          </div>
        </div>

        <!-- PRODUCT 03: MULTI-LOJAS + ERP -->
        <div class="glass-card product-card green">
          <div class="product-image-container">
            <!-- Simulated ERP Vector Graphics -->
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #062f1c, #091c12); display: flex; align-items: center; justify-content: center; position: relative;">
              <div style="width: 85%; height: 80%; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.2); background: rgba(8, 9, 12, 0.9); padding: 10px; display: flex; flex-direction: column; gap: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 4px;">
                  <span style="font-size: 7px; color: var(--accent-green); font-weight: bold;">ERP CENTRAL</span>
                  <div style="display: flex; gap: 4px;">
                    <span style="font-size: 6px; color: #fff; background: rgba(249, 74, 9, 0.2); border-radius: 2px; padding: 1px 2px;">ML</span>
                    <span style="font-size: 6px; color: #fff; background: rgba(238, 77, 45, 0.2); border-radius: 2px; padding: 1px 2px;">SP</span>
                  </div>
                </div>
                <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 6px; align-items: center; margin-top: 4px;">
                  <div style="display: flex; flex-direction: column; gap: 3px;">
                    <div style="font-size: 6px; color: var(--text-muted);">Estoque Integrado</div>
                    <div style="font-size: 10px; font-weight: 800; color: #fff;">180 Unidades</div>
                    <div style="height: 3px; background: rgba(255,255,255,0.1); border-radius: 1px; overflow: hidden;">
                      <div style="width: 75%; height: 100%; background: var(--accent-green);"></div>
                    </div>
                  </div>
                  <div style="background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.2); border-radius: 4px; padding: 4px; display: flex; flex-direction: column; align-items: center; gap: 2px;">
                    <div style="font-size: 5px; color: var(--text-muted);">NOTA FISCAL</div>
                    <span style="font-size: 5px; color: #fff; background: var(--accent-green); padding: 1px 3px; border-radius: 2px; font-weight: bold;">EMITIR NFe</span>
                  </div>
                </div>
                <div style="text-align: center; font-size: 6px; color: var(--accent-green); animation: pulse 1s infinite alternate; font-weight: bold;">
                  ● Sincronização em Tempo Real ML & Shopee
                </div>
              </div>
            </div>
            <span class="product-badge green">Corporativo</span>
          </div>

          <div class="product-info">
            <h3>Multi-Lojas & Sistema ERP</h3>
            <p class="product-desc">A solução definitiva para grandes operações. Além do e-commerce próprio, integre-se automaticamente ao Mercado Livre e Shopee com estoque sincronizado e emissão rápida de Nota Fiscal.</p>
            
            <div class="product-price-box">
              <div class="product-price-label">Investimento Único</div>
              <div class="product-price-val">R$ 17.831,00</div>
              <div class="product-price-sub">Equivalente a 11 Salários Mínimos</div>
            </div>

            <ul class="product-features-list">
              <li>
                <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
                Painel Centralizado ERP Multiplataforma
              </li>
              <li>
                <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
                Sincronização de Estoque ML, Shopee e Loja
              </li>
              <li>
                <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
                Emissor de Nota Fiscal Automatizado (NF-e)
              </li>
              <li>
                <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
                Suporte de Monitoramento 24h & Cloud VPS
              </li>
            </ul>

            <a href="<?php echo esc_url( get_template_directory_uri() ); ?>/demos/erp.html" target="_blank" class="product-action-btn">
              Ver Exemplo Prático
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="width: 16px; height: 16px;"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- --- BENEFITS / DIFFERENTIALS --- -->
  <section id="diferenciais">
    <div class="container">
      <div class="section-title">
        <h2>Por Que Escolher a Entre Sites?</h2>
        <p>Desenvolvemos projetos focados em usabilidade e performance comercial. Criamos não apenas códigos, mas ativos lucrativos para sua empresa.</p>
      </div>

      <div class="features-grid">
        <div class="glass-card feature-box">
          <div class="feature-icon">⚡</div>
          <h3>Alta Velocidade</h3>
          <p>Otimização minuciosa de scripts para páginas que carregam instantaneamente e retêm clientes.</p>
        </div>
        <div class="glass-card feature-box">
          <div class="feature-icon">🛡️</div>
          <h3>Segurança Máxima</h3>
          <p>Instalação de firewalls robustos e gateways de checkout criptografados ponta a ponta.</p>
        </div>
        <div class="glass-card feature-box">
          <div class="feature-icon">🔄</div>
          <h3>Escalabilidade</h3>
          <p>Estrutura pronta para expansão e adição de novos módulos, integrações ou relatórios.</p>
        </div>
        <div class="glass-card feature-box">
          <div class="feature-icon">🤝</div>
          <h3>Suporte Total</h3>
          <p>Treinamento individual para que você gerencie seu negócio com total independência posterior.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- --- CONTACT & LEAD CAPTURE SECTION --- -->
  <section id="contato" style="background: rgba(255,255,255,0.01); border-top: 1px solid var(--border-glass);">
    <div class="container contact-grid">
      <div class="contact-info-panel">
        <h2>Vamos Iniciar o Seu Projeto?</h2>
        <p>Preencha o formulário rápido ao lado ou entre em contato pelos nossos canais diretos de atendimento para agendar uma reunião comercial.</p>
        
        <div class="contact-details">
          <div class="contact-item">
            <div class="contact-item-icon">📧</div>
            <div class="contact-item-text">
              <span>E-mail Direto</span>
              <strong>ikarosistemas@gmail.com</strong>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-item-icon">💬</div>
            <div class="contact-item-text">
              <span>WhatsApp de Atendimento</span>
              <strong>+55 (33) 99948-3324</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="glass-card">
        <form class="contact-form" id="agency-contact-form">
          <div class="form-group">
            <label for="form-name">Seu Nome Completo</label>
            <input type="text" id="form-name" placeholder="Ex: Ikaro Roger" required>
          </div>
          
          <div class="form-group">
            <label for="form-email">Seu E-mail Corporativo</label>
            <input type="email" id="form-email" placeholder="Ex: seu-nome@empresa.com" required>
          </div>

          <div class="form-group">
            <label for="form-phone">Seu Telefone / WhatsApp</label>
            <input type="tel" id="form-phone" placeholder="Ex: (33) 99948-3324" required>
          </div>

          <div class="form-group">
            <label for="form-product">Solução de Interesse</label>
            <select id="form-product" required>
              <option value="" disabled selected>Selecione um produto</option>
              <option value="Landing Page">Páginas Profissionais (1 Salário Mínimo)</option>
              <option value="E-Commerce">E-Commerce Completo (5 Salários Mínimos)</option>
              <option value="ERP Multi-lojas">Multi-Lojas & Sistema ERP (11 Salários Mínimos)</option>
            </select>
          </div>

          <div class="form-group">
            <label for="form-message">Resumo Breve da Ideia</label>
            <textarea id="form-message" rows="4" placeholder="Ex: Preciso de uma loja de roupas online com integração de frete e pagamento por Pix." required></textarea>
          </div>

          <button type="submit" class="form-submit-btn">Enviar Solicitação de Orçamento</button>
        </form>
      </div>
    </div>
  </section>

  <!-- --- FOOTER --- -->
  <footer>
    <div class="container">
      <p>© 2026 Entre Sites - Desenvolvimento de Plataformas Web de Alta Performance. Todos os direitos reservados.</p>
      <p>Desenvolvido com tecnologia de ponta. Contato: <a href="mailto:ikarosistemas@gmail.com">ikarosistemas@gmail.com</a></p>
    </div>
  </footer>

  <!-- --- FLOATING WHATSAPP BUTTON --- -->
  <div class="whatsapp-float">
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.45 4.817 1.451 5.424 0 9.835-4.394 9.838-9.799.002-2.618-1.01-5.08-2.857-6.93C16.598 2.025 14.137.994 11.52.994c-5.43 0-9.843 4.394-9.847 9.8c0 1.688.444 3.337 1.288 4.796L1.93 21.034l5.632-1.477c-1.492.813-2.316.634-1.492.813z"></path>
    </svg>
  </div>

  <?php wp_footer(); ?>
</body>
</html>
