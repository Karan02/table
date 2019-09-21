import React from "react"
import Cell from "./cell"
// import Popup from "./popUp"

class Row extends React.Component{
    constructor(props){
        super(props);
        // this.togglePopup=this.togglePopup.bind(this);
        // this.onDelEve= this.onDelEve.bind(this);
        this.state = { showPopup: false, isCell:true };
        this.onDelEve = this.onDelEve.bind(this)
    }
    togglePopup = () => {  
        this.setState({  
             showPopup: !this.state.showPopup,
             isCell:!this.state.isCell  
        });  
     }  
    async onDelEve  () {
        this.props.onDelEve(this.props.product);
        await this.setState({
            isCell: true,
        })
    }
    render(){
        
        return(
            <tr>
                <Cell 
                    onProductTableUpdate={this.props.onProductTableUpdate} 
                    cellData={{"type": "name",value: this.props.product.name,
                    id: this.props.product.id}} 
                    isCell={this.state.isCell}
                />
                <Cell 
                    onProductTableUpdate={this.props.onProductTableUpdate} 
                    cellData={{"type": "price",value: this.props.product.price,
                    id: this.props.product.id}}
                    isCell={this.state.isCell}
                />
                <Cell 
                    onProductTableUpdate={this.props.onProductTableUpdate} 
                    cellData={{"type": "qty",value: this.props.product.qty,
                    id: this.props.product.id}} isCell={this.state.isCell}
                />
                <Cell 
                    onProductTableUpdate={this.props.onProductTableUpdate} 
                    cellData={{"type": "category",value: this.props.product.category,
                    id: this.props.product.id}} isCell={this.state.isCell}
                />
                {/* <td><button onclick={this.onDelEve}>delete</button></td> */}
        <td><p  value="delete" className="buttons" onClick={this.onDelEve}>Delete</p>{ !this.state.isCell ? <p className="buttons" onClick={this.togglePopup}>ok</p>:<p  className="buttons" onClick={this.togglePopup}>Edit</p>}</td>
                
                  {/* {this.state.showPopup ?  
                <Popup  
                    // text='Click "Close Button" to hide popup'  
                    closePopup={this.togglePopup.bind(this)}  
                    product={this.props.product}
                    onProductTableUpdate={this.props.onProductTableUpdate}
                /> 
                : null  
                }  */}
                
            </tr>
        )
    }



}
export default Row