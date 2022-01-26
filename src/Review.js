import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const Review = (props) => {
  const history = useHistory();

  const params = useParams(); 
  
  const [rate, setRate] = React.useState(0);

  React.useEffect(() => {
    const click = (c) => {
      if ([1, 2, 3, 4, 5].indexOf(parseInt(c)) !== -1) {
        setRate(parseInt(c));
      }
    };
    window.addEventListener("", click);

    return () => window.removeEventListener("", click);
  }, []);

  return (
    <>
      
      <div
        style={{          
          width: "20vw",
          height: "90vh",
          margin: "40px auto",
          border: "5px solid pink",
          padding: "50px",
          borderRadius: "500px",
          boxSizing: "border-box",         
        }}
      >
        <h3 style={{ textAlign: "center"}}>
          <span
            style={{
              color: "#fff",             
              background: "skyblue",
              padding: "10px",
              borderRadius: "30px",
              marginRight: "10px"
            }}
          >
            {params.day}요일
          </span>
          평점 남기기
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            width: "auto",
          }}
        >
          {Array.from({ length: 5 }, (item, index) => {
            return (
              <div              
                onClick={() => {
                  setRate(index + 1);
                }}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "30px",
                  margin: "10px 10px 5px 10px",
                  backgroundColor: rate < index + 1 ? "lightgray" : "skyblue",
                }} key={index}
              ></div>
            );
          })}
        </div>

        <button
          style={{
            width: "100%",            
            border: "1px solid white",
            borderRadius: "50px",
            padding: "15px",
            color: "black",
            fontSize: "16px",
            fontWeight: "bold",
            background: "lightgreen",
            marginTop: "30px" 
          }}
          onClick={() => {
            history.goBack();
          }}
        >
          평점 남기기
        </button>
      </div>
    </>
  );
};

export default Review;
