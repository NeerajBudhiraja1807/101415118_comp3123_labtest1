function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({ error: 'delayed exception!' });
        }, 500);
    });
}

async function handlePromises() {
    try {
        const successMessage = await resolvedPromise();
        console.log(successMessage);  
    } catch (error) {
        console.error(error);
    }

    try {
        const failureMessage = await rejectedPromise();
        console.log(failureMessage);
    } catch (error) {
        console.error(error);  
    }
}
handlePromises();
