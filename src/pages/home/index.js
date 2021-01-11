import { likedPost, commentPost } from "../../services/index.js";
  
export const Home = () => {
  console.log('caiu no home');
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <h1>Timeline</h1>

      <div class="container-posts">
      </div>
  `;


  //---- Mock para gerar vários posts na tela

  const timeline = rootElement.querySelector('.container-posts');
  const postsLoop = Array.from(Array(10).keys());
  postsLoop.forEach(() => {
    timeline.innerHTML += `
      <div class="post">
        <h3>Vira lata caramelo</h3>
        <img src="https://fotos.amomeupet.org/uploads/fotos/0x800_1568662224_5d7fe2d09bccd.jpeg">
  
        <button class="like">Curtir</button>
        <button class="comentar">Comentar</button>
        <button class="compartilhar">Compartilhar</button>

        <div class="on-comment">
          <hr>
          <textarea class="comentar-text"></textarea>
          <button class="enviar-comentario">enviar</button>
        </div>
      </div>
    `
  });

  //---- Fluxo de Like

  const likeButtonArray = rootElement.querySelectorAll('.like');

  likeButtonArray.forEach((button) => {
    button.addEventListener('click', (e) => {
      executeLike(e);
    });
  });

  const executeLike = (e) => {
    likedPost()
    .then((retorno) => {
      console.log(retorno);
      e.target.classList.add('liked');
    })
    .catch(() => {
      alert('Deu rum ai meu kerido');
    });
  }

  //---- Fluxo de Comment

  const comentButtonArray = rootElement.querySelectorAll('.comentar');
  comentButtonArray.forEach((buttonComment) => {
    buttonComment.addEventListener('click', (event) => {
      showCommentBox(event);
    });
  });

  const showCommentBox = (event) => {
    const cardPost = event.target.parentNode;
    toggleCommentBox(cardPost, true);

    const buttonEnviarComment = cardPost.querySelector('.enviar-comentario');

    buttonEnviarComment.addEventListener('click', () => {
      executeComment(cardPost);
    });
  }

  const executeComment = (cardPost) => {
    const textareaComment = cardPost.querySelector('.comentar-text');
    const holderCommentBlock = cardPost.querySelector('.on-comment');
  
    commentPost(textareaComment.value)
      .then(() => {
        const textPValue = document.createElement("p");
        textPValue.textContent = textareaComment.value;
        cardPost.insertBefore(textPValue, holderCommentBlock);
        toggleCommentBox(cardPost, false);
        textareaComment.value = "";
      })
      .catch(() => {
        alert('Deu ruim aí');
      })
  }

  const toggleCommentBox = (cardPost, show) => {
    const holderCommentBlock = cardPost.querySelector('.on-comment');

    if(show) {
      holderCommentBlock.classList.add('display');
    } else {
      holderCommentBlock.classList.remove('display');
    }
  }

  return rootElement;
};