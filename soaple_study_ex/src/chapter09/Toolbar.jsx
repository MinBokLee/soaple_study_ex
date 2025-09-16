import React  from "react";

const styles ={
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid gray",
    },

    greeting: {
        mariginRight: 8,
    },

};

function Toolbar(props){
    // props에서 필요한 값들을 구조분해 할당으로 꺼내옴
    // isLoggedIn : 로그인 여부 (true/false)
    // onClickLogin : 로그인 버튼 클릭 시 실행할 함수
    // onClickLogout : 로그아웃 버튼 클릭 시 실행할 함수
    const { isLoggedIn, onClickLogin, onClickLogout}  = props;

    return(
        <div style={styles.wrapper}>
            {/* 로그인 상태일때 메세지 출력 */}
            {isLoggedIn && <span style={styles.greeting}>환영합니다.</span>}
            
            {/* 삼항 연산자 사용:
                - 로그인 상태면 로그아웃 버튼 표시
                - 로그인 상태가 아니면 로그인 버튼 표시
            */}
            {isLoggedIn ?
                         (<button onClick = {onClickLogout}>로그아웃</button>) : ( <button onClick = {onClickLogin}>로그인</button> )
            }
    </div>
    );
}
export default Toolbar;