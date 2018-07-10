import React from 'react'
import './Puppies.css'

class Puppies extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dog: {},
        }
        this.fetchUserData()
    }


    fetchUserData = () => {

        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(dog => this.setState({dog}))
            .catch(error => console.log('error'))
    }



    render() {

        const {dog} = this.state
        return (
            <div className="dog">
                <h3>What's better than puppies and free API's? Absolutely nothing! Enjoy these cute pups!</h3>
                <img src={dog.message} alt="" />
                <br/>
                <button onClick={() => this.fetchUserData()}>New Pup Please!</button>
            </div>
        )
    }
}

export default Puppies
