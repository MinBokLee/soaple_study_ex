import React from 'react';
import Notification from './Notification';

const reservedNotifications = [
    {
        id:1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",        
    },
    
    {   
        id:2,
        message: "점심 식사 시간입니다.",
    },
    
    {   
        id:3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        //state 초기화
        this.state = {
            Notifications:[]
        };

    }  
        //컴포넌트가 처음 화면에 나타날 때 실행
        componentDidMount(){
            const{Notifications} = this.state;

            //1초에 한번씩 실행
            timer = setInterval(()=>{
                //아직 보여주지 않은 알림이 있으면
                if(Notifications.length <reservedNotifications.length){
                    //다음 알림의 인덱스
                    const index = Notifications.length;
                    //새로운 알림을 추가  
                    Notifications.push(reservedNotifications[index]);

                    // state를 업데이트 하기 위해, setSstate()함수를 사용해야 한다.
                    this.setState({
                        Notifications: Notifications,
                    });
                } else{
                    this.setState({
                        Notifications: [],
                    }); 
                    //모든 알림을 다 보여줬다면, 타이머를 종료한다.
                    clearInterval(timer);
                }
            }, 1000);
        }//

        //컴포넌트가 화면에서 사라질 때 실행되는 함수
        componentWillUnmount(){
            //기존 타이머가 존재할 경우 clearInterval()함수로 타이머를 종료한다.
            if(timer){
                clearInterval(timer);   
            }
        }

    
       render(){
            return(
                <div>
                    {this.state.Notifications.map(notification =>{
                        return<Notification 
                        key={notification.id}
                        id={notification.id}    
                        message={notification.message} />
                    })}
                </div>
            );//return
        }//render

}//NotificationList 클래스

export default NotificationList;


