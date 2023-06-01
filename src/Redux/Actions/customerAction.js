import axios from "axios";

export const generateCustomers = () => {

    const customerRecords = [];

    const generateCustomer = (i) => {
        const name = "Customer" + i;
        const title = "Title" + i;
        const address = "Address" + i;
        const id = i;

        return {
            name,
            title,
            address,
            id
        };

    }


    for (let i = 0; i < 1000; i++) {
        const customer = generateCustomer(i + 1);
        customerRecords.push(customer);
    }

    return {
        type: "GENERATE_CUSTOMERS",
        payload: customerRecords
    }

}

export const setCustomer = (id) => ({
    type: 'SET_CUSTOMER',
    payload: id,
});


export const fetchRandomImages = () => {
    return (dispatch) => {
        axios
            .get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                const images = response.data;
                const randomIndices = [];
                while (randomIndices.length < 9) {
                    const randomIndex = Math.floor(Math.random() * images.length);
                    if (!randomIndices.includes(randomIndex)) {
                        randomIndices.push(randomIndex);
                    }
                }

                // array for getting the 9 random images
                const randomImages = randomIndices.map((index) => images[index]);
                dispatch(fetchImagesSuccess(randomImages))
            })
            .catch((error) => {
                dispatch(fetchImagesFailure(error.message));
            });

    };

}
//defining the dispatch action for fetchImageSuccess
export const fetchImagesSuccess = (images) => {
    return {
        type: 'FETCH_CUSTOMERS_SUCCESS',
        payload: images,
    };
};

//defining the dispatch action for fetchImageSuccess

export const fetchImagesFailure = (error) => {
    return {
        type: 'FETCH_CUSTOMERS_FAILURE',
        payload: error,
    };
};
