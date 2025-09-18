import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props){
    const{theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme =="light" ? "black" : "white",
            }}
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
            <button onClick={toggleTheme}> 테마 변경</button>

        </div>
    );
}

export default MainContent;

//MainContent 컴포넌트는 ThemeContext로붜 현재 설정된 테마 값을 받아와 실제 화면의 콛텐츠를 렌더링하는 역활을 한다.
// 또한 테마 변경을 누를 경우, ThemeContext로부터 받은 toggleTheme() 함수를 호출하여 ThemeContext의 값을 변경하는 역활도 한다.

// 여기서는 ThemeContext.Consumer컴포넌트를 사용하는 방법 대신, useContext() 훅을 사용하기로 한다.