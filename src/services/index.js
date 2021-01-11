const firestore = firebase.firestore();
const likesCollection = firestore.collection('likes');

export const myFunction = () => {
  // seu código aqui
  console.log('Olá mundo!');
};


export const likedPost = () => {
  return likesCollection.add({
    liked: true,
  })
  .then(() => {
    return Promise.resolve(true);
  })
  .catch((error) => { 
    return Promise.reject(error);
  })
}

export const commentPost = (comment) => {
  console.log(comment);
  return likesCollection.add({
    liked: true,
  })
  .then(() => {
    return true
  })
  .catch((error) => { 
    return error;
  })
}