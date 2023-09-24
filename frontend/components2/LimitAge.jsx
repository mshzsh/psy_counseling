import React from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { toFaDigit } from "fa-utils";

const LimitAge = ({ number, color, styles }) => {
  return (
    <div className={`${styles} flex`}>
      <CalendarMonthOutlinedIcon
        style={{ color: `${color}`, fontSize: "20px", marginLeft: "2px" }}
      />
      {toFaDigit(number)}&nbsp; سال به بالا
    </div>
  );
};

export default LimitAge;
