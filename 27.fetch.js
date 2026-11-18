fetch("https://dummyjson.com/users")
  .then((val) => val.json())
  .then((data) => {
    // console.log(data);
  });

async function getUsers() {
  let res = await fetch("https://dummyjson.com/users");
  let data = await res.json();
  console.log(data);
}

getUsers();
