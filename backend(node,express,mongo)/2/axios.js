const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const getData = () => {
  // console.log('presssed')
  axios.get(`https://reqres.in/api/users`).then((response) => {
    console.log(response);
  });
};
const sendData = () => {
  axios
    .post(
      `https://reqres.in/api/register`,
      {
        email: "eve.holt@reqres.in",
        password: "pistol",
      },
      {
        //this is not needed as axios does this by itself, but if you need to change in any case yo can do this way
        // headers:{
        //   'Content-Type':'application/json'
        // }
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
