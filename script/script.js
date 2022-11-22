`use strict`
const getData = async (userId) => {
    const responce = await fetch( 'https://jsonplaceholder.typicode.com/posts/${userId}/')
    console.log("get Id")
     return responce.json();
     
}
 newData = getData(1).then(newData => console.log (newData))