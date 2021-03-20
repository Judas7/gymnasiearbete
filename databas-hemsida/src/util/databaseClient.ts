
export async function fetchX() {
    const response = await fetch('http://localhost:3001/x');
    const json = await response.json();
    // waits until the request completes...
    console.log(response);
    console.log(json);
}