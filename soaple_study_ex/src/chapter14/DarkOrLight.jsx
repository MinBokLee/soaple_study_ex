import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props){
    const[theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
            if(theme == "light"){
                setTheme("dark");
            } else if(theme =="dark"){
                  setTheme("light");
            }
    }, [theme])

    return(
<ThemeContext.Provider value={{theme, toggleTheme}}>
    <MainContent />
</ThemeContext.Provider>

    );
}

/*
MainContent 컴포넌트를 자식으로 갖고 있는데, 이를 ThemeContext.Provider로 감싸서 
ThemeContext의 값을 하위 컴포넌트들이 사용할 수 있도록 해준다.
그리고 ThemeContet의 값으로 들어가는 theme와 toggleTheme() 함수는 자체적으로 관리하고 있다.
*/

export default DarkOrLight;