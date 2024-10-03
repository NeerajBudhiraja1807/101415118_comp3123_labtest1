function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject('Input must be an array');
        } else {
            const filteredAndLowercased = mixedArray
                .filter(item => typeof item === 'string')  
                .map(word => word.toLowerCase());         

            resolve(filteredAndLowercased); 
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log("Output:", result)) 
    .catch(error => console.error(error));
