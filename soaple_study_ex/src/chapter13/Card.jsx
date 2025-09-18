function Card(props){
    const{title, backgroundColor, children} = props;
    // 부모 컴포넌트로부터 전달받은 props를 구조 분해 할당
    // title: 카드 제목
    // backgroundColor: 배경색 (없으면 기본값 white)
    // children: Card 안에 들어올 자식 요소(내용)

    return(
        <div 
            style={{
                margine: 8,
                padding: 8,
                borderRedius: 8,
                boxShadow: "0px, 0px, 4px, grey",
                backgroundColor: backgroundColor || "white", // || "white" 기본값이 없을때는 화이트를 배경으로 사용한다.
            }}
        
        >
             {/* title이 있으면 제목 표시 */}
            {title && <h1>{title}</h1>}
            
            {/* children은 Card 안쪽에 들어올 모든 내 용 */}
            {children}
        </div>

    );    
}

export default Card;

/*
        Card컴포넌트는 하위 컴포넌트를 감싸기 카드 형태로 보여 주는 컴포넌트로, Continment와, Specialization 두 가지 합성 방법을 모두 사용.
        chirdren을 사용한 부분이 Continment이고, title과, backgroundColor 을 사용한 부분이 Specialization이라고 할 수 있다.
        Card 컴포넌트는 범용적으로 재사용이 가능한 컴포넌트인데 이것을 사용하여, profile 컴포넌트를 만들어 보자 .
*/