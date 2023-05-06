import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

// const options = {
//     params: { hl: "en", gl: "US" },
//     headers: {
//         "X-RapidAPI-Key":
//             process.env.REACT_APP_YOUTUBE_API_KEY || "YOUR_API_KEY",
//         "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
//     },
// };

const options = {
    method: 'GET',
    // url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: {
     
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY||'481af110d2mshf4a44b8c7e82686p19ab55jsna3e5535e0b29',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      // 'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
    }
  };

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
