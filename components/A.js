import React from 'react';
import ReactDOM from 'react-dom'
import getFetch from '../rest/fetch'

class A extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age:'',
            email:''
        }

    }

    componentDidMount() {
        let url = 'http://localhost:3000/home/getUser';
        let data = {
            name: "leo",
        };
        let doFetch = new getFetch();

        doFetch.post(url, data, (res) => {
            this.setState({
                name: res.name,
                email:res.email,
                age:res.age
            });
        })
    }
    render() {
        return (
            <div>
                <p>my name is {this.state.name}</p>
                <p>my age is {this.state.age}</p>
                <p>my email is {this.state.email}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <A/>,
    document.getElementById('oo')
)