async function fetchProfileData() {  //fetch na url
    const url = 'https://raw.githubusercontent.com/198080mari/Portfolio-api/mainassets/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()  //retorna convertido em json
}