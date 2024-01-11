import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const SingleQuestion = ({ question, answer }) => {
  const [answers, setAnswers] = useState(false);

  return (
    <div className="question__wrapper">
      <div onClick={() => setAnswers(!answers)}>
        <h4>{question}</h4>
        <button className="btn">
          {answers ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {answers && <p>{answer}</p>}
    </div>
  );
};

export default SingleQuestion;
