# Entre Sites - Plataforma Web Oficial

Bem-vindo ao repositório oficial da **Entre Sites**, uma plataforma web premium redefinida para atuar como o canal de vendas de alta performance e vitrine interativa da software house.

Este projeto adota uma arquitetura híbrida de ponta: um **Frontend Ultra-Rápido** (HTML/CSS/JS Vanilla) com suporte a glassmorphism, HSL dinâmico e **três demonstrações práticas e interativas** para encantar os clientes logo de cara; acoplado a uma infraestrutura **Dockerizada completa de WordPress + WooCommerce + Elementor** atuando como painel e e-commerce administrativo.

---

## 🛠️ Estrutura do Repositório

```
Enter Sites/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # Pipeline de automação e validação no GitHub Actions
├── demos/
│   ├── landing-page.html      # Demo Produto 1: Exemplo prático de Landing Page SaaS
│   ├── ecommerce.html         # Demo Produto 2: Mini e-commerce com Carrinho, CEP e Rastreio
│   └── erp.html               # Demo Produto 3: Painel ERP com estoque ativo e emissor de DANFE
├── wp-content/
│   └── plugins/
│       ├── elementor/         # Elementor Free (Descompactado e pronto para ativar)
│       └── elementor-pro/     # Elementor Pro 4.0.2 (Descompactado e pronto para ativar)
├── index.html                 # Página Principal de conversão (3 produtos lado a lado)
├── styles.css                 # Folha de estilos premium com design system integrado
├── app.js                     # Scripts do site e botão inteligente de WhatsApp flutuante
├── docker-compose.yml         # Orquestração do ambiente de desenvolvimento local
└── README.md                  # Este guia técnico explicativo
```

---

## 🚀 Como Iniciar o Projeto Localmente

### 1. Requisitos Prévios
*   [Docker Desktop](https://www.docker.com/) instalado e rodando em seu computador.
*   Navegador Chrome para validação visual.

### 2. Inicialização dos Contêineres
Abra um terminal na pasta raiz do projeto e execute o comando:

```bash
docker compose up -d
```

Este comando provisionará automaticamente:
*   **MariaDB 10.5** (Banco de dados leve e estável)
*   **WordPress** (Instalado na porta **`8090`**)
*   **phpMyAdmin** (Gerenciador do banco na porta **`8082`**)

*Nota: As portas foram configuradas para evitar qualquer conflito com outros contêineres que já estejam ativos na sua máquina.*

### 3. Acessando a Plataforma
*   **Site / Vitrine de Vendas:** Abra o arquivo `index.html` diretamente no seu Chrome ou utilize um servidor local para desenvolvimento.
*   **WordPress Admin:** Acesse [http://localhost:8090/wp-admin](http://localhost:8090/wp-admin) para iniciar as configurações pessoais.
*   **phpMyAdmin:** Acesse [http://localhost:8082](http://localhost:8082) com o usuário `wordpress` e senha `wordpresspassword`.

---

## 🛍️ Portfólio Comercial (Referência de Salário Mínimo 2026: R$ 1.621,00)

*   **Produto 01 - Landing Pages Profissionais:** R$ 1.621,00 (1 Salário Mínimo).
*   **Produto 02 - E-Commerce Lojas Completas:** R$ 8.105,00 (5 Salários Mínimos).
*   **Produto 03 - Multi Lojas + Sistema ERP:** R$ 17.831,00 (11 Salários Mínimos).

---

## 🔬 Exemplos Práticos Interativos (Demos)

Na página inicial, ao clicar em "Ver Exemplo Prático", o cliente será redirecionado para simuladores reais desenvolvidos para comprovar a autoridade técnica da **Entre Sites**:

1.  **Landing Page SaaS (Produto 1):** Simula uma página para um produto chamado "CloudFlow". Conta com um gráfico de monitoramento de latência rodando em tempo real no Javascript e um formulário que celebra a geração da chave de API com confetes interativos.
2.  **Loja Virtual Aura Tech (Produto 2):** Mini e-commerce completo. Permite adicionar produtos ao carrinho, alterar quantidade, digitar um CEP brasileiro para simular cálculo automático do frete (PAC/Sedex) somando ao valor final, rastrear uma entrega em um stepper interativo animado passo a passo, e simular um pagamento seguro via Pix com geração de QR Code.
3.  **Central ERP (Produto 3):** Painel administrador de estoque unificado. Ao alterar o estoque no painel do ERP, o sistema dispara uma animação simulando o sincronismo bidirecional das unidades com o Mercado Livre e Shopee. Possui também um gerador fiscal que emite e exibe uma Nota Fiscal Auxiliar (**DANFE**) idêntica à oficial, além do código estruturado XML.

---

## 🔄 Fluxo Automatizado de CI/CD

O arquivo `.github/workflows/ci-cd.yml` está pré-configurado. Toda vez que um commit for enviado para o GitHub:
1.  **Linter HTML5** inspeciona a estrutura das marcações.
2.  **Stylelint** valida as diretrizes visuais CSS.
3.  **ESLint** verifica a qualidade e segurança do código JS.
4.  **Docker Compose check** garante a integridade dos contêineres antes do deploy.

---

## 📞 Contatos & Credenciais
*   **E-mail:** ikarosistemas@gmail.com
*   **WhatsApp de Suporte:** +55 (33) 99948-3324
