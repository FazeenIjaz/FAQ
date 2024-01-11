import "./App.css";
import SingleQuestion from "./SingleQuestion";
import { data } from "./data";
import star from "./images/icon-star.svg"
function App() {
  return (
   <>
   
   
   <div className="wrapper"/>

      <div className="app">
        <div className="icon">
          <img src={star}alt="" />
          <h1>FAQ's</h1>
        </div>
      {data.map((question) => (
        <SingleQuestion
          key={question.id}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </div>
   
   </>
  );
}

export default App;
