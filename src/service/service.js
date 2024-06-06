import axios from 'axios';
export const getExpenceData = () => {
       return axios
            .get("http://localhost:3001/items")
            .then(response => response.data )
            .catch(error => console.log(error));
}

export const postFormData = (data) => {
    return axios.post('https://httpbin.org/post', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => response.data)
    .catch(error => console.log(error));
}
