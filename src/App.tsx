import './App.css'
import heroImg from './assets/hero.png'

function App() {
  return (
    <div className="app-container">
      <header>
        <div className="logo-text">Entre Sites</div>
        <nav>
          <ul>
            <li><a href="#features">Recursos</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
        <button className="btn-secondary">Login</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Conectando o seu mundo digital</h1>
            <p>
              A plataforma definitiva para gerenciar, conectar e escalar sua presença online entre múltiplos sites e serviços com elegância e simplicidade.
            </p>
            <div className="cta-group">
              <button className="btn-primary">Começar Agora</button>
              <button className="btn-secondary">Ver Demonstração</button>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image">
              <img src={heroImg} alt="Entre Sites Platform Preview" />
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="feature-card glass">
            <div className="feature-icon">🚀</div>
            <h3>Performance Extrema</h3>
            <p>Sistemas otimizados para carregar instantaneamente, garantindo a melhor experiência para seus usuários.</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">🛡️</div>
            <h3>Segurança Avançada</h3>
            <p>Proteção de dados de ponta a ponta com as tecnologias mais modernas de criptografia.</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">🔄</div>
            <h3>Integração Fluida</h3>
            <p>Conecte seus sites existentes em minutos com nossas ferramentas de sincronização inteligente.</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Entre Sites. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="#">Twitter</a> | <a href="#">GitHub</a> | <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}

export default App
