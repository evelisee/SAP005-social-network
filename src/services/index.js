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
  .then(() => Promise.resolve(true))
  .catch((error) => Promise.reject(error))
}