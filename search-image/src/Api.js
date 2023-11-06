import axios from 'axios';
const searchImages = async (term) => {

  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID X2ZihS4lE9FwXDq9SsQeddDmc5egBUS-w57l2vbTC28',
    },
    params: {
      query: term,
    },
  });
  debugger;
  return response.data.results;
}
export default searchImages 