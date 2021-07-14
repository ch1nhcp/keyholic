var ServeUrl = "http://localhost:8000"
async function PostData(url = '', data = {}) {
    // Default options are marked with *
    var Url = ServeUrl + url
    const response = await fetch(Url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer',
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  
  async function GetData(url = '') {
    // Default options are marked with *
    var Url = ServeUrl + url
    const response = await fetch(Url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return  response.json(); // parses JSON response into native JavaScript objects
  }
  export{PostData,GetData}