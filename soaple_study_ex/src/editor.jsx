class LinkButton extends React.Component	{

	constructor(props)	{
		super(props);
			this.state = {
				liked: false
			};
		}
	}

	/* 이 코드는 LikeButton 이라는  리액트 클래스 컴포넌트를 나타낸다.
	 모든 클래스 컴포넌트에는 constructor이라는 함수가 존재하는데, 우리말로 생성자라는 의미를 갖고 있으며, 
	 클래스가 생성될 때 실행되는 함수이다.
	 이 생성자 코드를 보면, this.state라는 부분이 나오는데 이 부분이 바로 현재 컴포넌트에의 state를 생성자에서 정의한다.
	 이렇게 정의한 state는 정의된 이후, 일반적인 자바스크립트 변수를 다루듯이 직접 수정할 수는 없다. 
	 수정이 불가능한건 아니지만  직접 수정하는것은 권장되지 않는다. 
	 */

	 //state를 직접 수정(잘못된 사용법)
	 this.state = {
		name : 'Inje'
 	 };

	 //setState 함수를 통한 수정(정상적인 사용법)
	 this.setState({
		name: 'Inje'
	 })

	 /* 그러나 리액트가 수정된 것을 제대로 인지하지 못할 수도 있길 때문에 애초에 state는 직접적인 변경이 불가능하다고 생각하는 것이 좋다.
	 state를 변경하고 싶다면 반드시 setState()라는 함수를 사용해야 한다. 
	 setState 함수는 state를 변경하는 함수인데, 이 함수를 사용하면 리액트가 state가 변경된 것을 인지하고, 
	 변경된 state를 기반으로 다시 렌더링을 수행한다. 
	 */