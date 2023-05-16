// This chapter is about Callbacks, Async Await, Promise
// 2nd parameter of fetch is an object


const requestJoke = async (fistName, lastName) => {
    
    const response = await fetch(`http:api.incdb.com/jokes/random?firstName=${fistName}&lastName=${lastName}`)
    
    const jsonResponse = await response.json();

    console.log(jsonResponse.value);
}

requestJoke("Clint", "Eastwood");

