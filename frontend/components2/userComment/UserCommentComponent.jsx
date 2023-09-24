import React, { useState, useEffect } from "react";
import UserComment from "../UserComment";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import VisibilitySensor from "react-visibility-sensor";
import Pagination from "../pagination";
import TitleComponent from "../TitleComponent";
import SmsIcon from "@mui/icons-material/Sms";
import Modal from "../modal/Modal";
import RegisterComment from "../modal/RegisterComment";

const UserCommentComponent = () => {
  const [page, setPage] = useState(0);
  const [isVisibleStatus, setIsVisibleStatus] = useState(false);
  const [isPaging, setIsPaging] = useState(false);
  const [state, setState] = useState([]);
  const [modalState, setModalState] = useState(false);

  const num = 140;
  function onChange(isVisible) {
    setIsVisibleStatus(isVisible);
  }

  useEffect(() => {
    if (isVisibleStatus) {
      setTimeout(() => {
        setPage(page + 1);
        const arr = [1, 1, 1, 1, 1, 1, 1, 1];
        setState([...state, ...arr]);
      }, 1000);
    }
  }, [isVisibleStatus]);

  useEffect(() => {
    if (page >= 3) {
      setIsPaging(true);
    }
    if (isPaging) {
      setState([1, 1, 1, 1, 1, 1, 1, 1]);
    }
  }, [page]);

  return (
    <div className="flex flex-col space-y-[24px]">
      <button
        onClick={() => setModalState(true)}
        className="flex w-full justify-between items-center"
      >
        <TitleComponent title={"نظر کاربران"} />
        <div className="flex ">
          <SmsIcon style={{ color: "#36E2B4" }} />
          <p className="text-[16px] font-[600] mr-[6px]">ثبت نظر</p>
        </div>
      </button>
      {state.map((comm, index) => (
        <UserComment key={index} />
      ))}

      {!isPaging && (
        <VisibilitySensor onChange={onChange}>
          <div className="text-center ">
            <div className="text-center">
              <HourglassBottomIcon
                className="hourClock"
                style={{ marginBottom: "" }}
              />
            </div>
          </div>
        </VisibilitySensor>
      )}

      {isPaging && (
        <Pagination
          totalPage={Math.ceil(num / 8)}
          currentPage={page}
          setCurrentPage={setPage}
        />
      )}
      {modalState && (
        <Modal setModalState={setModalState} OurModal={RegisterComment} />
      )}
    </div>
  );
};

export default UserCommentComponent;
