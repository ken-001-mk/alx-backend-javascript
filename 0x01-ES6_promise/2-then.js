function handleResposeFromAPI(promise) {
    return Promise.t((data) => {
        console.log('Got a response from the API');
        return {
            status: 200,
            body: 'Success',
        };
    }).catch((error) => {
        console.log('Got a error from the API', error.message);
        return Error();
    });
}