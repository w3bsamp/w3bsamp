import { useState } from 'react'
import './style.css'
import img from '../../assets/img.png'

function Home() {
  return (
    <>
      <header>
        <menu>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Sobre-mim</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </menu>
      </header>
      <main>
        <section id="principal">
          <div className='txt-principal'>
            <h2>prazer, meu nome é</h2>
            <h1><span>Raphael Trindade</span></h1>
            <h2>sou estudante de <span className='cursive'>Análise e Desenvolvimento de Sistemas</span></h2>
            <p>Atualmente morando em Goiânia, estudante na faculdade Anhanguera cursando graduação em <span>Análise e Desenvolvimento de Sistemas</span>. Sou fascinado por tecnologia e programação, sempre busco evoluir é dar meu melhor em TUDO.</p>
            <a href="#" className='btn'>Skills</a>
          </div>
          <div className="imagem">
            <img src={img} />
          </div>
        </section>
        <section id="skills">
          <h1>Minhas <span>Skills</span></h1>
          <div className="skill">
            
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
