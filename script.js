function showDog() {
  axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      console.log(response.data.message);
      document.querySelector('#dog-pic').src = response.data.message;
    });
}

showDog();