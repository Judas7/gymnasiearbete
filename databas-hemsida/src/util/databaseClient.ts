
export async function fetchPerson(firstName: string, callBack: (comment: string) => void) {
    const response = await fetch('http://localhost:3001/Persons?firstName=' + firstName);
    const json = await response.json();
    // waits until the request completes...
    console.log(response);
    console.log(json);
    callBack(json.Comment)
}

export async function sendPerson(input: { sendFirstName: string, sendLastName: string, sendCity: string, sendComment: string }) {
    const response = await fetch('http://localhost:3001/Persons', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(input) });
    // waits until the request completes...
    console.log(response);
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}