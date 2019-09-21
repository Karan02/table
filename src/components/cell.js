import React from "react";

class Cell extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state={
  //     isCell: this.props.isCell,
  //   }
  // }
    
  render(){
    return(
        this.props.isCell ? <td><p type='text' name={this.props.cellData.type} 
        id={this.props.cellData.id} 
        // value={this.props.cellData.value} 
        // onChange={this.props.onProductTableUpdate}
        >
        {this.props.cellData.value}
        </p>
        </td> :
        <td><input type='text' name={this.props.cellData.type} 
        id={this.props.cellData.id} 
        value={this.props.cellData.value} 
        onChange={this.props.onProductTableUpdate}
        >
        </input>
        </td>
    );
  }
}

export default Cell;