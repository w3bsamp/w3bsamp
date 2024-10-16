import { useState } from 'react'
import './style.css'
import img from '../../assets/img.png'
import project1 from '../../assets/encurt.png'
import project2 from '../../assets/previsao.png'

function Home() {
  function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')){
        img.setAttribute('src', 'img/eu.jpg')
    } else {
        img.setAttribute('src', 'img/eu.jpg')
    }
}
  return (
    <>
    <body className=''>
      <button className='switch' onClick={toggleMode}>Trocar tema</button>
      <header>
        <menu>
          <div className="flex">
            <ul>
              <li><a href="https://w3bsamp.github.io/w3bsamp/">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
        </menu>
      </header>
      <main>
        <section id="principal">
          <div className='txt-principal'>
            <h2>prazer, meu nome é</h2>
            <h1><span>Raphael Trindade</span></h1>
            <h2>sou estudante de <span className='cursive'>Análise e Desenvolvimento de Sistemas</span></h2>
            <p>Atualmente morando em Goiânia, estudante na faculdade Anhanguera cursando graduação em <span>Análise e Desenvolvimento de Sistemas</span>. Sou fascinado por tecnologia e programação, sempre busco evoluir é dar meu melhor em TUDO.</p>
            <a href="#projetos" className='btna'>Meus Projetos</a>
            <div className="redes">
              <a href="https://github.com/w3bsamp" className='icon' target='_blank'><i class="bi bi-github"></i></a>
              <a href="https://www.instagram.com/_raphaeltrindade" className='icon' target='_blank'><i class="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/in/raphael-marques-nunes-trindade-b03577258/" className='icon' target='_blank'><i class="bi bi-linkedin"></i></a>
              <a href="https://wa.me/5562994949553" className='icon' target='_blank'><i class="bi bi-whatsapp"></i></a>
            </div>
          </div>
          <div className="imagem">
            <img src={img} />
          </div>
        </section>
        <section id="skills">
          <h1 className='title'>Minhas <span>Skills</span></h1>
          <div className="flex">
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
              <p>HTML</p>
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
              <p>CSS</p>
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              <p>React</p>
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
              <p>Python</p>
            </div>
          </div>
        </section>
        <section id="projetos">
          <h1 className='title'>Meus <span>Projetos</span></h1>
          <div className="flex">
            <div className="box">
              <div className="tela">
                <div className='tela' style={{ backgroundImage: `url(${project1})` }}></div>
                <h1>Encurtador de Link</h1>
                <p>Este é um projeto onde criei um Encurtador de Link para poder facilitar meus clientes a por exemplo, acessar meu portfolio, entrar em contato comigo, entre outros.</p>
                <a href="https://w3bsamp.github.io/encurtador" className='btna' target='_blank'>Ir para o Projeto</a>
                <a href="https://github.com/w3bsamp" className='btna' target='_blank'>GitHub</a>
              </div>
            </div>
            <div className="box">
              <div className="tela">
                <div className='tela' style={{ backgroundImage: `url(${project2})` }}></div>
                <h1>Previsão do Clima</h1>
                <p>Este é um projeto onde criei um app para ver a Previsão do Tempo, pode se ver de todas as cidades do mundo.</p>
                <a href="https://w3bsamp.github.io/previsaoclima" className='btna' target='_blank'>Ir para o Projeto</a>
                <a href="https://github.com/w3bsamp" className='btna' target='_blank'>GitHub</a>
              </div>
            </div>
          </div>
        </section>
        <section id='competencias'>
        </section>
        <section id="contato">
          <div className="flex">
            <form action="push">
              <h1 className='title'>Entre em <span>Contato</span></h1>
              <input type="text" name='nome' placeholder='Nome' />
              <input type="email" name='email' placeholder='Email' required />
              <input type="text" name="assunto" placeholder='Envie uma mensagem' required />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <div className="flex">
          <div>
            Criado e Desenvolvido por <span className='cursive'>Raphael Trindade</span>.
          </div>
          <div className="redes">
            <a href="https://github.com/w3bsamp" className='icon' target='_blank'><i class="bi bi-github"></i></a>
            <a href="https://www.instagram.com/_raphaeltrindade" className='icon' target='_blank'><i class="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/raphael-marques-nunes-trindade-b03577258/" className='icon' target='_blank'><i class="bi bi-linkedin"></i></a>
            <a href="https://wa.me/5562994949553" className='icon' target='_blank'><i class="bi bi-whatsapp"></i></a>
          </div>
        </div>
      </footer>
      </body>
    </>
  )
}

export default Home
