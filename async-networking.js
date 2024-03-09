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

const getRequest = (endpoint, callbackFunction) => {
    let result = null;
    const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
    //   callbackFunction(null, data);
    result = data;
    } else if (request.readyState === 4) {
    //   callbackFunction(
    //     `An error occurred: ${request.status} - ${request.statusText}`,
    //     null
    //   );
    result =`An error occurred: ${request.status} - ${request.statusText}`;
    }
  });
  request.open("GET", endpoint, false);
  request.send();
  return result;
};

// getRequest(`${jspURI}/users/1`, (err, res) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.table(res);
//   }
// });

console.table(getRequest(`${jspURI}/users`));


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