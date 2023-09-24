import React, { useState } from "react";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import Modal from "../modal/Modal";
import SignupModal from "../modal/SignupModal";
import PlansModals from "../modal/PlansModals";

const CounselingPlantsHeader = () => {
  const [modalState, setModalState] = useState(false);
  return (
    <div className="bg-[#9966FF] text-[#fff] h-[59px] flex items-center justify-between">
      <div className="flex items-center">
        <WidgetsOutlinedIcon
          style={{
            marginRight: "25px",
            marginLeft: "12px",
            marginBottom: "5px",
          }}
        />
        <p className="text-[22px] font-[800] my-[16px]">پلن‌های مشاوره</p>
      </div>
      <div className="flex items-center ml-[24px] text-[#B4F4E3] text-[14px] font-[800]">
        <ErrorOutlineOutlinedIcon />
        <button className="mr-[8px]" onClick={() => setModalState(true)}>
          معرفی پلن‌ها
        </button>
      </div>
      {modalState && (
        <Modal OurModal={PlansModals} setModalState={setModalState} />
      )}
    </div>
  );
};

export default CounselingPlantsHeader;
