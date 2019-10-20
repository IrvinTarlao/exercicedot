import React from 'react';
// import './Point.css';



class Point extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            positionX: 100,
            positionY: 100,
        }


        

        // this.timeOut = undefined;
        // this.onMouseDown = this.onMouseDown.bind(this);
        // this.repeat = this.repeat.bind(this);
        // this.toTheRight = this.toTheRight.bind(this);
        // this.onMouseUp = this.onMouseUp.bind(this);
        
    }


toTheRight = () => this.setState({ positionX: parseInt(this.state.positionX) + 5 });


repeat = () => {
  this.toTheRight();
  this.timer = setTimeout(this.repeat, 20);
  console.log(setTimeout)
}

stopMove = () => {
  clearTimeout(this.timer);
  console.log(clearTimeout)
 
}



    render = () => {

        let buttonStyle = {
            position: "absolute",
            height: "100px",
            width: "100px",
            textAlign: "center",
            top: "30vh",
            left: "50vw",
        }

        let buttonStyle2 = {
            position: "absolute",
            height: "100px",
            width: "100px",
            textAlign: "center",
            top: "45vh",
            left: "50vw",
        }

        let pointStyle = {
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            backgroundColor: "brown",
            position: "relative",
            left: `${this.state.positionX}px`,
			top: `${this.state.positionY}px`,
        };

        return (
            <div>
                <button onMouseDown={this.repeat} style={buttonStyle}>move right</button>
                <button onMouseUp={this.stopMove} style={buttonStyle2}>stop</button>
                <div style={pointStyle}></div>

                {/* <Message text="toto"/>
                <Message text="tata"/>
                <Message text="titi"/> */}
            </div>
        )
    }
}

// class Message extends React.Component {
//     constructor(props) {
//         super(props);

//     }

//     render() {
//         return (
//             <div>
//                 {this.props.text}
//             </div>
//         )
//     }
// }












export default Point;