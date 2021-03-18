import axios from 'axios';

const { REACT_APP_API_YOUTUBE_KEY } = process.env;

const Fetch = async (search) => {
  console.log(search);
  console.log('Fechiando');
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=id&part=snippet&maxResults=5&key=${REACT_APP_API_YOUTUBE_KEY}`,
    { ...search }
  );

  return response;
};

export default Fetch;
