// const url = 'https://codeforces.com/api/'

const myhandle = 'https://codeforces.com/api/user.info?handles=unknownempire'
fetch(myhandle) 
    .then(response => response.json())
    .then(data => {
      console.log('hit');
    // Process the retrieved data
    // console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
});