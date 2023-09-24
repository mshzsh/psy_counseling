import React from "react";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { toFaDigit } from "fa-utils";

const QuestionNumber = ({ number }) => {
  return (
    <div className="flex text-[16px] font-[600] text-[#9966FF]">
      <ArticleOutlinedIcon style={{ fontSize: "20px", marginLeft: "2px" }} />
      {/* <p>تعداد سوالات</p> */}
      {toFaDigit(number)}
    </div>
  );
};

export default QuestionNumber;
