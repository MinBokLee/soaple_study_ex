import React from "react"

const ThemeContext =  React.createContext();

ThemeContext.displayName= "ThemeContext";

export default ThemeContext;

/*
    컨텍스트의 초깃값을 별도로 설정하지 않았고, 이후 provider에서 값을 설정할 예정.
    그리고 개발자 도구를 통해 컨텍스트의 이름을 확인하기 위해서 ThemeContext의 dispalyName 값을 설정해줌.
*/