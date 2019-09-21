import React from "react"

class SearchPopup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search:this.props.searchbar
        }
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }
     handleChangeText = (e) =>{
         this.setState({
            search:e.target.value,
        })
    }
    handleSubmit = () =>{
        this.props.handleSubmit(this.state.search);
    }
    async handleReset(){
       await this.setState({
            search:"",
        })
       this.props.handleReset(); 
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
    render(){
         return(<div className="searchPopup"  ref={node => this.node = node} >
             <div className="searchPopup-inner"><input className="searchPopupInput" type="text" onChange={this.handleChangeText} value={this.state.search}/>
             <div className="searchPopupButtons"><button onClick={this.handleSubmit}>submit</button><button  onClick={this.handleReset}>reset</button></div>
             </div>
             </div>);   

    }

}

export default SearchPopup