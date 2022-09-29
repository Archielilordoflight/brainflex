import axios from "axios";

const apiKey = "/?api_key=b69d8763-9129-4940-a747-3d87e6b7996c";
const url = "https://project-2-api.herokuapp.com";

// const ipa = axios.create({
//   baseURL: `https://project-2-api.herokuapp.com${apiKey}`,
// });

async function getVideos(setRequest) {
  try {
    let response = await axios.get(`${url}/videos${apiKey}`);
    setRequest(response.data);
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getVideoDetails(id, setOnPlay) {
  try {
    let response = await axios.get(`${url}/videos/${id}${apiKey}`);
    setOnPlay(response.data);
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { apiKey, getVideos, getVideoDetails };
