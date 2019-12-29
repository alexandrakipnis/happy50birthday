import React from 'react'
import './DecisionMaker.css'

class DecisionMaker extends React.Component {
        state = {
            text: '',
        }

      handleClick = () => {
        const num = Math.floor((Math.random() * 9) + 1)
        if(num === 1){
            this.setState({
            text: 'PROBABLY NOT'
            })
        }
        if(num === 2) {
            this.setState({
                text: 'HECK YEAH'
            })
        }

        if(num === 3){
            this.setState({
                text: 'PUT SOME MORE THOUGHT INTO IT'
            })
        }

        if(num === 4){
            this.setState({
                text: 'CALL AND ASK SASHA'
            })
        }

        if(num === 5){
            this.setState({
                text: 'CALL AND ASK IZZY'
            })
        }

        if(num === 6){
            this.setState({
                text: 'DO NOT DO IT'
            })
        }

        if(num === 7){
            this.setState({
                text: 'NOT SURE'
            })
        }
        

        if(num === 8){
            this.setState({
                text: '011110010110010101110011 (YES)'
            })
        }

        if(num === 9){
            this.setState({
                text: '0110111001101111 (NO)'
            })
        }
      }

    render () {
        return (
            <div className="decision">
                <h3 className="title">Tough decision to make? Have no fear! Click the button below to help you out!</h3>
                <br/>
                <h1 className="blah">{this.state.text}</h1>
                <br/>
                <button onClick={this.handleClick}>
                    MAKE A DECISION!
                </button>

            </div>
        )
    }
}

export default DecisionMaker