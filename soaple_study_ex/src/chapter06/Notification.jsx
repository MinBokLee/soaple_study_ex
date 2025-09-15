import React from 'react';

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid gray',
        borderRadius: 16,
    },

    messagText: {
        color:"black",
        fontSize: 16,
    },
};



class Notification extends React.Component{
    constructor(props){
        super(props);
        //state 초기화
        this.state ={};
    }

    componentDidMount(){
        //컴포넌트가 처음 화면에 나타날 때 실행
        console.log(`${this.props.id} componentDidMount() called`);
    }

    componentDidUpdate(){
        //컴포넌트가 업데이트될 때 실행
        console.log(`${this.props.id} Notification: componentDidUpdate() called`);
    }

    componentWillUnmount(){
        //컴포넌트가 화면에서 사라질 때 실행    
        console.log(`${this.props.id} Notification: componentWillUnmount() called`);
    }

    render(){
        return(
            <div style={styles.wrapper}>
                <span style={styles.messagText}>
                    {this.props.message}
                </span>
            </div>
        )
    }
}

export default Notification;