import axios from "axios"

export const fetchRandomData = (pageNumber: number = 1) => {
    return axios.get(`https://randomuser.me/api?page=${pageNumber}`)
    .then(({data}) => {
        // handle success
        console.log(data);
        return data;
    })
    .catch(error => {
        // handle error
        console.log(error)
        return [];
    });

}