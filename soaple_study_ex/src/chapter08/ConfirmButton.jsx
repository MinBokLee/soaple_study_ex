import React from "react";

// 클래스 컴포넌트 생성
class ConfirmButton extends React.Component {

    constructor(props)  {
        super(props);//부모 클래스의 생성자 호출(React.Component)

        //state 변수 초기화: isConfirmed를 false로 설정
        this.state = {
            isConfirmed: false,
        } ;

        /** 
         * 클래스형 컴포넌트에서 이벤트 핸들러(this를 사용)를 정의할 때는
         * 해당 함수의 this를 현재 클래스 인스턴스에 바인딩 해야함.
         * 
         * 바인딩 하지 않으면, handleConfirm을 이벤트에서 호출할 때,
         * this가 undefined가 되어 오류 발생함.
         * 
        **/
        this.handleConfirm = this.handleConfirm.bind(this);;
    }

    // 버튼 클릭 시, 호출되는 메서드
    handleConfirm() {
        // 이전 상태(preState)를 기반으로 isConfirmed 값을 반전시킴
        this.setState((preState) => ({
            isConfirmed: !preState.isConfirmed,
        }));
    }

    render() {
        return(
            <button onClick = {this.handleConfirm} //클릭 시, handleConfirm 실행
                    disabled = {this.state.isConfirmed} // isConfirmed가 trud면 버튼 활성화
            >
                {this.state.isConfirmed ? "확인됨": "확인하기"}  {/* 확인 상태에따라  버튼 텍스트 변경*/}
            </button>
        );
    }

}

export default ConfirmButton;