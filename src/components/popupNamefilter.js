import React from 'react';  


class PopupNamefilter extends React.Component {  
    constructor(props){
        super(props);
        this.state={
            // name:this.props.product.name,
            // price:this.props.product.price,
            // qty:this.props.product.qty,
            // category:this.props.product.category,
            isCheckedBall: this.props.check.ball,
            isCheckedPhone : this.props.check.phone,
            isCheckedNexus : this.props.check.nexus,
        }
        // this.handleChange = this.handleChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    // handleChange = (e) =>{
    //     this.props.onProductTableUpdate(e);
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
        
    // }
     async handleCheckbox(e){
      await  this.setState({[e.target.name]:e.target.checked})
      this.props.onChecked(this.state.isCheckedBall,this.state.isCheckedPhone, this.state.isCheckedNexus)     
    }
    componentDidMount() {
        document.addEventListener("click", this.handleClickOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("click", this.handleClickOutside);
    }
    handleClickOutside = (event) => {
        if(this.node.contains(event.target)) {  return}
        else{     
            this.props.closePopup();
            
          }
      };
    async handleReset(){
       
       await this.setState({
            isCheckedBall: false,
            isCheckedNexus: false,
            isCheckedPhone:false,
        });
        this.props.onChecked(this.state.isCheckedBall,this.state.isCheckedPhone, this.state.isCheckedNexus)   
      }
    render() {      
        return (  
        <div className='dropdown' ref={node => this.node = node} >  
            <div className='dropdown-inner'>  
            {/* <h1>{this.props.text}</h1>   */}
                {/* <input name="name" type="text"  value={this.state.name} onChange={this.handleChange} id={this.props.product.id}/>
                <input name="price" type="number" value={this.state.price} onChange={this.handleChange} id={this.props.product.id} />
                <input name="qty" type="number" value={this.state.qty} onChange={this.handleChange} id={this.props.product.id}/>
                <input  name="category" type="text" value={this.state.category} onChange={this.handleChange} id={this.props.product.id}/>
                {/* <button onClick={this.handleSubmit}>submit</button> */}
                
                <input type="checkbox" name="isCheckedBall" value="ball" onChange={this.handleCheckbox} checked={this.state.isCheckedBall}/>  ball <br />
                <input type="checkbox" name="isCheckedPhone" value="phone" onChange={this.handleCheckbox} checked={this.state.isCheckedPhone}/>  phone <br /> 
                <input type="checkbox" name="isCheckedNexus" value="nexus" onChange={this.handleCheckbox} checked={this.state.isCheckedNexus}/>  nexus <br />
                <button onClick={this.props.closePopup}>OK</button>
                <button onClick={this.handleReset}>RESET</button>  
            </div>  
        </div>        
        );  
    }  
}  

export default PopupNamefilter;