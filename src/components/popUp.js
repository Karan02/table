import React from 'react';  


class Popup extends React.Component {  
    constructor(props){
        super(props);
        this.state={
            name:this.props.product.name,
            price:this.props.product.price,
            qty:this.props.product.qty,
            category:this.props.product.category,
        }
        // this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) =>{
        this.props.onProductTableUpdate(e);
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    render() {      
        return (  
        <div className='popup'>  
            <div className='popup_inner'>  
            {/* <h1>{this.props.text}</h1>   */}
                <input name="name" type="text"  value={this.state.name} onChange={this.handleChange} id={this.props.product.id}/>
                <input name="price" type="number" value={this.state.price} onChange={this.handleChange} id={this.props.product.id} />
                <input name="qty" type="number" value={this.state.qty} onChange={this.handleChange} id={this.props.product.id}/>
                <input  name="category" type="text" value={this.state.category} onChange={this.handleChange} id={this.props.product.id}/>
                {/* <button onClick={this.handleSubmit}>submit</button> */}
                <button onClick={this.props.closePopup}>close</button>
            </div>  
        </div>        
        );  
    }  
}  

export default Popup;