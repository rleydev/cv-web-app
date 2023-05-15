export default async function getData(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
}