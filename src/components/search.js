import React from "react"

class SearchBar extends React.Component{

    constructor(props){
    super(props);
    this.state={search:""}
    // this.handleChange=this.handleChange.bind(this);
    }

handleChange= (e) =>{
    this.setState({search:e.target.value})
    this.props.onUserInput(e.target.value)
    
}

render(){

    return(
        <div>
            <input type="text" placeholder="Search..." value={this.state.search} onChange={this.handleChange}/>
        </div>
    )
}

}

export default SearchBar