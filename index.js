//imports
const fetch = require('node-fetch');


////this is a request to a website that returns HTML////////
// fetch('http://espn.com') //url or endpoint
// .then(response => {
//     return response.text();// an extra step that happens to see the text
// })
// .then((html)=> {
//     console.log(html);
// });


/////request to a 3rd party datebase that returns a json object/////
// fetch('https://api.github.com/users/scott95100') //endpoint
// .then(response => {
//     return response.json(); //change this response so we can work with it in JS
// })
// .then(data => {
//     console.log(data);
// });

fetch('https://api.spacexdata.com/v3/capsules')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
})


fetch('https://api.spacexdata.com/v3/capsules')
.then(response => {
    return response.json();
})
.then(dataArray => {
    console.log(dataArray)
    let c102Object = dataArray[1];
    let capsuleSerial = c102Object['capsule_serial'] //had to use bracket notation because of the key with an "_"
    let capsuleStatus = c102Object.status
    console.log(c102Object)
    console.log(capsuleSerial)
    console.log(capsuleStatus)
})