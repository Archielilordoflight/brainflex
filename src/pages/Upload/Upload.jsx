import uploadImg from "./../../assets/Images/Upload-video-preview.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Upload.scss";

export default function Upload() {
  const [userUploadData, setUserUploadData] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate();

  const [titleErrInput, setTitleErrInput] = useState(false);
  const [descriptionErrInput, SetDescriptionErrInput] = useState(false);

  let descriptionTooShort =
    userUploadData.description.split(" ").length < 15 ? true : false;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserUploadData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (userUploadData.title.length >= 2) {
      setTitleErrInput(false);
    }

    if (userUploadData.description.length < 10) {
      SetDescriptionErrInput(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userUploadData.title.length < 2) {
      setTitleErrInput(true);
      console.log(titleErrInput);
      alert(
        "Please check that you have included the title and above 2 letters"
      );
    } else if (userUploadData.description.length < 10) {
      SetDescriptionErrInput(true);
      alert(
        "Please check that you have included the description and above 10 letters"
      );
    } else {
      navigate("/");
      alert("Thank you for uploading");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    if (userUploadData.title || userUploadData.description) {
      if (window.confirm("Are you sure to discard your upload session?")) {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  };

  return (
    <section className="upload">
      <h2 className="upload__title">Upload Video</h2>
      <div className="upload__box">
        <div className="upload__imgbox">
          <p className="upload__subtitle">VIDEO THUMBNAIL</p>
          <img src={uploadImg} alt="upload" className="upload__img" />
        </div>
        <form className="upload__form">
          <label className="upload__label">TITLE YOUR VIDEO</label>
          <textarea
            name="title"
            type="text"
            placeholder="Add a title to your video"
            className={`upload__input ${
              titleErrInput ? "upload__input--err" : ""
            }`}
            onChange={handleChange}
          />
          <label className="upload__label">ADD A VIDEO DESCRIPTION</label>
          <textarea
            name="description"
            cols="15"
            rows="5"
            placeholder="Add a description to your video"
            className={`upload__input ${
              descriptionErrInput ? "upload__input--err" : ""
            }`}
            onChange={handleChange}
          />
          <p className={descriptionTooShort ? "bgtext--active" : "bgtext--non"}>
            The viewers are generally expecting more detailed descriptions.
          </p>
        </form>
      </div>
      <div className="upload__buttons-wrapper">
        <button type="submit" className="upload__button" onClick={handleSubmit}>
          PUBLISH
        </button>
        <button className="upload__cancel" onClick={handleCancel}>
          CANCEL
        </button>
      </div>
    </section>
  );
}
