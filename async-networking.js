//XHR

// const request = new XMLHttpRequest(); // readystate 0

// request.addEventListener(
//     "readystatechange",
//     ()=> {
//         if(request.readyState===4&&request.status===200){
//             console.log(request.responseText);
//         }
//         else if(request.readyState===4){
//             console.warn(`An error occurred: ${request.status} - ${request.statusText}`);
//         }
//     }
// );

// request.open("GET", "https://jsonplaceholder.typicode.com/users/2"); //readystate 1
// request.send(); //readystate 2

const jspURI = "https://jsonplaceholder.typicode.com";

// const getRequest = (endpoint, callbackFunction) => {
//     // let result = null;
//     const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText);
//       callbackFunction(null, data);
//     // result = data;
//     } else if (request.readyState === 4) {
//       callbackFunction(
//         `An error occurred: ${request.status} - ${request.statusText}`,
//         null
//       );
//     // result =`An error occurred: ${request.status} - ${request.statusText}`;
//     }
//   });
//   request.open("GET", endpoint, false);
//   request.send();
//   // return result;
// };
// console.log(1);
// getRequest(`${jspURI}/users/1`, (err, res) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.table(res);
//   }
// });
// console.log(2);
// console.table(getRequest(`${jspURI}/users/`));

//callback hell
// getRequest(
//     `${jspURI}/users/1`,
//     (err, res) => {
//         if (err) {
//             console.error(err);
//         }
//         else {
//             console.table(res);
//             getRequest(
//                 `${jspURI}/users/2`,
//                 (err, res) => {
//                     if (err) {
//                         console.error(err);
//                     }
//                     else {
//                         console.table(res);
//                         getRequest(
//                             `${jspURI}/users/3`,
//                             (err, res) => {
//                                 if (err) {
//                                     console.error(err);
//                                 }
//                                 else {
//                                     console.table(res);
//                                     getRequest(
//                                         `${jspURI}/users/4`,
//                                         (err, res) => {
//                                             if (err) {
//                                                 console.error(err);
//                                             }
//                                             else {
//                                                 console.table(res);

//                                             }
//                                         }
//                                     );
//                                 }
//                             }
//                         );
//                     }
//                 }
//             );

//         }
//     }
// );



// Promise 

// const getRequestWithPromise = (endpoint) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject(
//           `An error occurred: ${request.status} - ${request.statusText}`
//         );
//       }
//     });
//     request.open("GET", endpoint);
//     request.send();
//   });
// };


// console.log(1);
// console.log(2);
// getRequestWithPromise(`${jspURI}/users/1`)
// .then((res)=>{
//   console.log(res);
//   return getRequestWithPromise(`${jspURI}/users/2`)})
// .then((res)=>{
//   console.log(res);
//   return getRequestWithPromise(`${jspURI}/users/3`)})
// .catch((err)=>console.log(err))
// .finally(()=>console.log("Tüm istekler tamamlandı"));
// console.log(3);
// console.log(4);

// const myToDo = {
//   userId: 3,
//   title: "Orkun Hodja",
//   completed: true
// }
  
// fetch(`${jspURI}/todos/`, {
//   method: "POST",
//   userId: 3,
//   body: JSON.stringify(myToDo),
//   headers: {
//   "content-type": "application/json"
// }})
// .then(resp=>resp.json())
// .then(json=>console.log(json))

// fetch(`${jspURI}/posts/1`, {
//   method: "PUT",
//   body: JSON.stringify({
//     id: 1,
//     title: "Barkın in the cage",
//     body: "deneme",
//     userId: 1
//   }),
//   headers: {
//   "content-type": "application/json"
// }})
// .then(resp=>resp.json())
// .then(json=>console.log(json));

// fetch(`${jspURI}/posts/1`, {
//   method: "PATCH",
//   body: JSON.stringify({
//     title: "Mert in the cage",
//   }),
//   headers: {
//   "content-type": "application/json"
// }})
// .then(resp=>resp.json())
// .then(json=>console.log(json));

// fetch(`${jspURI}/posts/1`, {
//   method: "DELETE",
// })


//await

// const getCommentsWithAwait = async()=>{
//   console.log("inner await 1");
//   console.log("inner await 2");
//   const response = await fetch(`${jspURI}/comments/1`);
//   const data = await response.json();
//   console.log("await answer: ", data);
//   console.log("inner await 3");
//   console.log("inner await 4");
// }
// const getCommentsWithThen = async()=>{
//   console.log("inner then 1");
//   console.log("inner then 2");
//   fetch(`${jspURI}/comments/1`)
//   .then(response => response.json())
//   .then(data=>console.log("then answer: ", data));
//   console.log("inner then 3");
//   console.log("inner then 4");
// }

// console.log("outer 1");
// console.log("outer 2");
// getCommentsWithAwait();
// getCommentsWithThen();
// console.log("outer 3");
// console.log("outer 4");