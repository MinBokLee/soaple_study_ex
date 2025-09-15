import React from 'react';
import Comment from'./Comment';

const comments = [
    {
        name: "이인제",
        comment:"안녕하세요 소플 입니다."
    },
        {
        name: "유재석",
        comment:"안녕하세요 유재석 입니다."
    },
        {
        name: "강민경",
        comment:"리액트 같이 공부해요."
    },
        {
        name: "이해리",
        comment:"저도 배우고 싶습니다."
    },
]

function CommentList(props){
    return(
        <div>
            {comments.map((comments)=>{
                return(
                    <Comment name={comments.name} comment={comments.comment}/>)
            })}
        </div>
    );
}

export default CommentList;
