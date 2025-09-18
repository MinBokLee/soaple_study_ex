import React,{useState} from "react";
import TempatureInput from "./TempatureInput";


// 물이 끓는지 여부를 확인하는 컴포넌트
function BoilingVerdict(props) {
    if(props.celsius >= 100)    {
        return <p>물이 끓습니다</p>
    }
        return <p>물이 끓지 않습니다</p>

}

//화씨 -> 섭씨로 변환
function toCelsius(fahrenheit){
    return ((fahrenheit -32)*5) / 9;
}

//섭씨 -> 화씨로 변환
function toFahrenheit(celsius){
    return (celsius * 9) /5 +32;
}


// - 입력값을 변환하는 함수
// - temperature: 입력된 값 (string)
// - convert: 변환 함수(toCelsius 또는 toFahrenheit)
function tryConvert(temperature, convert){
    const input= parseFloat(temperature);
    
    // 숫자가 아닌 경우, 빈 문자열 반환
    if(Number.isNaN(input)){
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();   // 문자열로 변환해서 반환
}

function Calculator(props){
    const[temperature, setTemperature] = useState("");
    const[scale, setScale] = useState("c");

    const handleCelsiusChange =(temperature) => {
            setTemperature(temperature);
            setScale("c");
    }

    const handleFahrenheitChange = (temperature) =>{
            setTemperature(temperature);
            setScale("f");
    }

    const celsius =
            scale === "f" ? tryConvert(temperature,toCelsius) : temperature;
            console.log("celsius. :" + celsius )

    const fahrenheit = 
            scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature; 
            console.log("fahrenheit" + fahrenheit)

    return (

        <div>
            <TempatureInput 
                    scale = "c"
                    temperature={celsius}
                    onTemperatureChange={handleCelsiusChange}
            />

            <TempatureInput
                    scale = "f"
                    temperature={fahrenheit}
                    onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
        
    );

}
export default Calculator