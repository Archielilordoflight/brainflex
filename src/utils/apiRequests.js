import axios from "axios";

const apiKey = "/?api_key=b69d8763-9129-4940-a747-3d87e6b7996c";
const url = "https://project-2-api.herokuapp.com";

async function getVideos(setRequest) {
  try {
    let response = await axios.get(`${url}/videos${apiKey}`);
    setRequest(response.data);
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getVideoDetails(id, setOnPlay = null) {
  try {
    let { data } = await axios.get(`${url}/videos/${id}${apiKey}`);

    if (setOnPlay) {
      setOnPlay(data);
      return;
    }
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { apiKey, getVideos, getVideoDetails };
