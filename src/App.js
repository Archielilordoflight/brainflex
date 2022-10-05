import { useState, useEffect } from "react";
import { getVideos } from "./utils/apiRequests";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Header from "./components/header/Header";
import Upload from "./pages/Upload/Upload";

function App() {
  const [videos, setRequest] = useState(null);

  useEffect(() => {
    getVideos(setRequest);
  }, []);

  if (!videos) {
    return <>Loading</>;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home allVideos={videos} />} />
          <Route
            path="videos/:videoId"
            element={<Home allVideos={videos} />}
          ></Route>
          <Route path="upload" element={<Upload />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
