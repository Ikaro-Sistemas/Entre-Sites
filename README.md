# 🌐 Entre Sites (entresites.com)

> Plataforma e Software House especializada em Landing Pages de Alta Conversão, E-commerces All-in-One e Convites Interativos de Gala.

---

## 🚀 CI/CD - Deploy Automático na HostGator

Este repositório possui uma esteira de integração e entrega contínua (**GitHub Actions**) configurada no arquivo `.github/workflows/deploy.yml`.

Toda vez que você fizer um `git push` na branch `main`, o GitHub Actions irá sincronizar e subir automaticamente todas as alterações para o seu servidor na **HostGator** (na pasta `public_html/` de `entresites.com`).

---

### 🔑 Como Configurar os Secrets no GitHub (Único Passo Necessário)

Para que o GitHub Actions consiga acessar o seu servidor HostGator, adicione as seguintes credenciais nas configurações do repositório:

1. Acesse o seu repositório no GitHub: **[https://github.com/Ikaro-Sistemas/Entre-Sites](https://github.com/Ikaro-Sistemas/Entre-Sites)**
2. Vá em **Settings** > **Secrets and variables** > **Actions**
3. Clique em **New repository secret** e adicione as 4 variáveis abaixo:

| Nome do Secret | Descrição | Exemplo |
|---|---|---|
| `FTP_SERVER` | Endereço do Servidor FTP ou IP da HostGator | `ftp.entresites.com` ou IP do seu cPanel |
| `FTP_USERNAME` | Usuário do cPanel / Conta FTP da HostGator | `seu_usuario` |
| `FTP_PASSWORD` | Senha do cPanel / Conta FTP | `sua_senha_segura` |
| `FTP_REMOTE_ROOT` | Pasta raiz pública no servidor | `public_html/` |

---

## 📁 Estrutura de Arquivos

```text
Entre-Sites/
│
├── index.html                   # 🌐 Portal Principal da Software House
├── assets/
│   ├── css/style.css           # 🎨 Design System e Estilização
│   ├── js/main.js              # ⚙️ Scripts de navegação e interações
│   └── images/                 # 🖼️ Banners e logotipos otimizados
│
├── demos/                      # 🚀 Demonstrações Interativas
│   ├── aniversario/            # 👑 Demo: Convite Real 15 Anos
│   ├── casamento/              # 💍 Demo: Casamento de Luxo
│   ├── clinica/                # ✨ Demo: Clínica BellaVitta
│   ├── lanchonete/             # 🍔 Demo: CraftBurger Delivery
│   ├── ecommerce-eletronicos/  # ⚡ Demo: Nexus Tech Store
│   └── ecommerce-variedades/   # 👗 Demo: Aura Boutique Moda
│
└── .github/workflows/deploy.yml # 🤖 Pipeline de CI/CD para HostGator
```
