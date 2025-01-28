import React, { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const handleImageClick = (work) => {
    setSelectedWork(work);
  };

  const handleCloseModal = () => {
    setSelectedWork(null);
  };

  return (
    <div id="work" className="mywork">
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <img
            key={index}
            src={work.w_img}
            alt={work.w_name}
            onClick={() => handleImageClick(work)}
            className="work-image"
          />
        ))}
      </div>

      {selectedWork && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              ✖
            </button>
            <img
              src={selectedWork.w_img}
              alt={selectedWork.w_name}
              className="modal-image"
            />
            <a
              href={selectedWork.link}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-visit"
            >
              Visit Site
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWork;
