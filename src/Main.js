import React from "react"; // 기본 세팅~! ( 주석은 그냥 혼잣말 하면서 코드복습을 해봤습니다..ㅠ) // 

import { useHistory } from "react-router-dom"; // 유즈히스토리도 임포트 필수!

import styled from 'react-router-dom' // 스타일컴포넌트 쓸라믄 이거 임포트해줘야함. 쓰다가 출력안되서 일단 패스..

const Main = (props) => { // 프랍스 받아와서 기본세팅 해주고.
  const history = useHistory(); // 화면이동에 사용할 수 있는 history 인스턴스에 접근하게 해준다. 당연히 임포트 해줘야함.
  
  const allday = { 0 : "일", 1 : "월", 2 : "화", 3 : "수", 4 : "목", 5 : "금", 6 : "토" }; // 딕셔너리 형식으로 요일 정리.

  const week = Object.keys(allday).map((d, index) => { // Object.keys 매소드를 이용해서 주어진 객체를 문자열로 만들어 주고 맵매소드로 인덱스("0","1" ...)에 아래 선언한거 포함해서 리턴 돌리기~!
    let today = new Date().getDay(); // 뉴데이트해서 날짜 생성해주고 겟데이를 이용해서 주어진 날짜 요일로 반환~! , mdn 보면 자세한 설명.. 굳
    let a = today + parseInt(d) > 6? today + parseInt(d) - 7: today + parseInt(d); // 삼항연산자를 이용해서 위에 선언한 "투데이 요일+ d를 정수형으로 만든 값(0,1,2,3 ...)" 이게 6보다 커? 그러면 전자 아니면 후자.

    return allday[a]; // 리턴값으로 결국 요일을 받는거지. 왜냐면 allday[i]니까. 그리고 요일을 왜 받냐면 밑에꺼 average를 한번 보자.
  });
  const grade = week.map((d, index) => { // 위에서 받아온 요일 인덱스값에 다뿌려
    return {
      day: d,                                                                             // Math.floor() : 정수중에서 가장 큰 값 반환, 같은값은 그냥 같은값 ex). "5.95" -> "5", "3.1" -> "3", "-3.3" -> "-4" 
      rate: Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) + Math.ceil(1), // Math.random() : 0 이상 1 미만의 부동소숫점 의사 난수한다고 mdn에 적혀있음. 으흠.. 그니까 그냥 0부터 1사이 소숫점 무작위로 난사하는거겠지?
    };                                                                                       // Math.ceil() : 주어진 값보다 큰 숫자를 정수로 반환, 같은값은 그냥 같은값 ex). "4" -> "4", "5.3" => "6"
    });                                                                                     // 그래서 이 식을 정리하면 최솟값이 0이 나오고 최댓값이 5가 나와서 그게 랜덤으로 색칠되는거지. 노란색으로.

  return (
    <>
      
      <div
        style={{          
          width: "25vw",
          height: "90vh",
          margin: "40px auto 0 auto",
          padding: "100px 0 0 0",
          border: "5px solid pink",
          borderRadius: "500px",
          boxSizing: "border-box",
        }}
      >
        <h3 style={{ textAlign: "center" , color: "#5fad55"}}>내 일주일은?</h3>

        {grade.map((d, index) => {
          return (
            <div              
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",                
                margin: "auto",
                padding: "17px",
                width: "300px",
                background: ""
                
              }} key={`week1${index}`}
            >
              <p style={{ margin: "0 10px 0 0", fontWeight: "bold", fontSize: "20px", color: "#5fad55" }}>
                {d.day}
              </p>
              {Array.from({ length: 5 }, (c, index) => {
                return (
                  <div
                    
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "30px",
                      margin: "10px",
                      backgroundColor: d.rate < index ? "lightgray" : "skyblue",
                    }} key={index}
                  ></div>
                );
              })}
              <div
                style={{
                  appearance: "auto",
                  backgroundColor: "transparent",
                  borderColor: "purple",
                  width: "0",
                  height: "0",
                  borderTop: "15px solid transparent",
                  borderBottom: "15px solid transparent",
                  borderLeft: "25px solid purple",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={() => {
                  history.push(`/review/${d.day}`);
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;