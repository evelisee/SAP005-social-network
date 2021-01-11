import { likedPost } from "../../services/index.js";
import { onNavigate } from '../../utils/history.js'
  
export const Home = () => {
  // Coloque sua página
  console.log('carregou de novo');
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <h1>Timeline</h1>

      <div class="container-posts">
      </div>
  `;


  const timeline = rootElement.querySelector('.container-posts');
  //Mock para gerar vários posts na tela
  const postsLoop = Array.from(Array(10).keys());
  postsLoop.forEach(() => {
    timeline.innerHTML += `
      <div class="post">
        <h3>Vira lata caramelo</h3>
        <img src="https://fotos.amomeupet.org/uploads/fotos/0x800_1568662224_5d7fe2d09bccd.jpeg">
  
        <button class="like">Curtir</button>
        <button class="comentar">Comentar</button>
        <button class="compartilhar">Compartilhar</button>
      </div>
    `
  });

  const likeButtonArray = rootElement.querySelectorAll('.like');
  likeButtonArray.forEach((button) => {
    button.addEventListener('click', (e) => {
      executeLike(e);
    })
  })


  const executeLike = (e) => {
    likedPost().then(() => {
      console.log('clicou');
      console.log(e);
      // onNavigate('/');
    }).catch(() => {
      alert('Deu rum ai meu kerido');
    });
  }
  return rootElement;
};