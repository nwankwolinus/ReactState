
import './App.css';
import React from 'react';
import Myimage from './assets/T.jpg';



class App extends React.Component{



  state={ count: 0, intervalid: 0,
    Person: {
      fullName: "Linus Nwankwo",
      bio: "GoMyCode Student",
      imgSrc: Myimage,
      proffession: "Student",
    },
    show : true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  componentDidMount() {
    const newIntervalId = setInterval(() => {
      this.setState(prevState => {
        return {
          ...prevState,
          count: prevState.count + 1,
        };
      });
    }, 1000);
  
    this.setState(prevState => {
      return {
        ...prevState,
        intervalId: newIntervalId,
      };
    });
  }  

  render(){
    return(
      <div className="App">
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="Linus" style={{ width: '400px', height: '500px'}}></img>
            <h1>{this.state.Person.proffession}</h1>
            <br></br>
            <h3>The component has been rendered for {this.state.count} seconds</h3>
          </>
        )}

        <button onClick={this.handleShowPerson}>Click Me</button>
      </div>
    );
  };
}

export default App;
