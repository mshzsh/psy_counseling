import React from "react";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import TitleComponent from "../TitleComponent";

const InterViewVideo = ({ styles }) => {
  return (
    <div className={`${styles} p-[24px] w-[496px] h-[277px] bg-[#F9F9F9]`}>
      <TitleComponent title={"ویدئو معرفی"} />

      <p className="w-full h-full flex  items-center justify-center">
        <VideoCameraFrontOutlinedIcon
          style={{ color: "#CBCBCB", fontSize: "90px", marginBottom: "63px" }}
        />
      </p>
    </div>
  );
};

export default InterViewVideo;
