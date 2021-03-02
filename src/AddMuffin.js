import React, {Component} from 'react'

class AddMuffin extends Component {
    state = {
        name: null,
        price: null, 
        size: null
    }
    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handelSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handelSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handelChange}/>
                    <label htmlFor="name">Price:</label>
                    <input type="text" id="price" onChange={this.handelChange}/>
                    <label htmlFor="name">Size:</label>
                    <input type="text" id="size" onChange={this.handelChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddMuffin