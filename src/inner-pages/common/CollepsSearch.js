import React, { useState } from "react";

const CollepsSearch = () => {
  const [isColleps, setIsColleps] = useState(true);
  const searchToggleFunc = () => {
    const collepsSearch = document.getElementById("collepsSearch");
    const tabSideBtns = document.getElementById("tabSideBtns");
    if (collepsSearch.hasAttribute("hidden")) {
      collepsSearch.removeAttribute("hidden");
      setIsColleps(false);
    } else {
      collepsSearch.setAttribute("hidden", true);
      setIsColleps(true);
    }
  };
  return (
    <div className="tabSideBtns text-end" id="tabSideBtns">
      <div className="collepsSearchOuter">
        <div className="collepsSearch" hidden id="collepsSearch">
          <button className="btn1">
            <SearchGrayIcon className={""} />
          </button>
          <input type="search" />
        </div>
        {isColleps ? (
          <button
            onClick={searchToggleFunc}
            type="button"
            className="grayBtn open"
          >
            <SearchGrayIcon className={""} />
          </button>
        ) : (
          <button
            onClick={searchToggleFunc}
            type="button"
            className="grayBtn close"
          >
            <span>X</span>
          </button>
        )}
      </div>
    </div>
  );
};

const SearchGrayIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.7601 0.257812C5.20611 0.257812 0.680054 4.78387 0.680054 10.3378C0.680054 15.8918 5.20611 20.4178 10.7601 20.4178C12.7882 20.4178 14.6757 19.8096 16.2594 18.7728L23.2922 25.8056L25.6679 23.43L18.7258 16.488C20.0457 14.7833 20.8401 12.6533 20.8401 10.3378C20.8401 4.78387 16.314 0.257812 10.7601 0.257812ZM10.7601 2.49781C15.1035 2.49781 18.6001 5.99432 18.6001 10.3378C18.6001 14.6813 15.1035 18.1778 10.7601 18.1778C6.41656 18.1778 2.92005 14.6813 2.92005 10.3378C2.92005 5.99432 6.41656 2.49781 10.7601 2.49781Z"
      fill="#4A5662"
    />
  </svg>
);

export default CollepsSearch;
