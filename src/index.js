
import React from 'react'
import ReactDOM from 'react-dom'
import Container from './components/container'

const App = () => {
    return (<div>
       <h2>VirtServer NG</h2>
        <Container></Container>
        </div>);
}

ReactDOM.render(<App />, document.querySelector('.container'));