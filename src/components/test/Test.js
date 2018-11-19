import React, { Component } from 'react'

class Test extends Component {
    state = {
        title: '',
        body: ''
    }
    componentDidMount(){
        fetch
        ('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data=> this.setState({
                title: data.title,
                body: data.body
            })
            );
    }

    // componentWillMount(){
    //     console.log("it will work!");
    // }

    // componentDidUpdate(){
    //     console.log("will work if it updated!");
    // }

    // componentWillReceiveProps(nextProps, nextState){
    //     console.log('will recieve new properties!');
    // }
    
    // static getDerivedStateFromProps(nextProps, prevState){
    //     return {
    //         test: 'something'
    //     };
    // }

  render() {
      const { title, body } = this.state;
    return (
      <div>
        <h1> {title} </h1>
        <p> {body} </p>
      </div>
    )
  }
}

export default Test;