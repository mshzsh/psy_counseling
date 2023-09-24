import React, { useState } from "react";
import BuyTestCard from "./BuyTestCard";
import TestCardSpecifications from "./TestCardSpecifications";
import TestToolbar from "./TestToolbar";
import VisibilitySensor from "react-visibility-sensor";
import TestDescription from "./TestDescription";
import TestValidation from "./TestValidation";
import UserCommentComponent from "./userComment/UserCommentComponent";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";

const TestDetailPage = () => {
  const [cardVisible, setCardVisible] = useState(false);
  const [getToolbarId, setGetToolbarId] = useState("");
  const onChange = (e) => {
    console.log(e, "e");
    setCardVisible(e);
  };

  const toolbarFunction = () => {
    if (getToolbarId === 1) {
      return <TestDescription />;
    } else if (getToolbarId === 2) {
      return <TestValidation />;
    } else if (getToolbarId === 3) {
      return <UserCommentComponent />;
    } else if (getToolbarId === 4) {
      return <FrequentlyAskedQuestions />;
    }
  };

  return (
    <div className="flex ">
      <div className="flex-1 flex flex-col">
        <BuyTestCard visibleState={false} />
        <VisibilitySensor onChange={onChange}>
          <TestToolbar setGetToolbarId={setGetToolbarId} />
        </VisibilitySensor>

        {toolbarFunction()}
      </div>
      <div className="w-[496px] relative mr-[24px]">
        <div className="sticky top-0 mb-[24px]">
          <TestCardSpecifications />

          <div
            className={`sticky top-0 mt-[24px] ${
              cardVisible
                ? "opacity-0 pointer-events-none transition-all duration-500"
                : "opacity-100  transition-all duration-500"
            }`}
          >
            <BuyTestCard visibleState={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDetailPage;
