import React from "react";  

// stusents라는 배열로부터 학생 정보가 담긴 객체를 받아 학생들의 이름을 목록 형태로 출력한다.
// 배열을 렌더링하기 위해 map()함수를 사용한다.

const students = [
                {
                    id: 1,
                    name: "Inje"
                },

                {
                    id: 2,
                    name: "Steve"
                },

                {
                    id: 3,
                    name: "Bill"
                },

                {
                    id: 4,
                    name: "Jeff"
                },

                 ];

                 
function AttendanceBook(props){
    return (
        <ul>    {/* id를 키값으로 사용*/}
                {students.map((student) => {
                        return <li key={student.id}>{student.name}</li>
                })}
        </ul>           
    )
}
/*
    각 엘리먼트에 키값이 빠져 있으면 콘솔창에 경고 메세지가 출력된다. 
    이를 수정하기 위해, 각 학생 객체에 고유한 값을 가진 id를 추가해주고 map()함수의 엘리먼트에 key={student.id}를 넣어준다.
    이렇게 하면 학생의 아이디가 키값으로 사용된다.
*/
                {/* 포맷팅된 문자열을 키값으로 사용*/}
                /*
                {students.map((student, index) => {
                    <li key ={`student-id ${student.id}`}>{student.name}</li>;
                })}
                */    

                 {/* 배열의 인덱스를 키값으로 사용*/}    
                /*
                 {students.map((student, index) => {
                    <li key={index}> {student.name}</li>
                })}
                */

export default AttendanceBook;