import React from "react"
import Row from "./row"
import PopupNamefilter from "./popupNamefilter"
import { Icon } from "antd";
import Search from "antd/lib/transfer/search";
import SearchPopup from "./searchpopup"

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showAddSection: false,
            one:"",
            two:"",
            three:"",
            four:"",
            order:"",
            select:"",
            showPopup: false,
            check:{
              ball:false,
              phone:false,
              nexus:false,
              },
            searchPopup: false,  
            searchPopup2: false, 
            searchbar: "", 
            searchbar2: "",
        };

        // this.onDelEve = this.onDelEve.bind(this);
        // this.handleAdd = this.handleAdd.bind(this);
        // this.showAddSection = this.showAddSection.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        // this.handleSelect = this.handleSelect.bind(this);
        // this.handleA = this.handleA.bind(this);
        this.onChecked = this.onChecked.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this)
        this.handleChangeText2 = this.handleChangeText2.bind(this)
      
    }
    // onDelEve(product){
    //     this.props.onDelEve(product);
    //     console.log(product)
    // }


  handleClick = (e) =>{
    this.setState({order:e.target.name});
    this.props.orderChange(e.target.name);     
  }

  handleAdd = (event) =>{
    this.props.onRowAdd(this.state.one,this.state.two,this.state.three,this.state.four);
    this.setState({showAddSection: !this.state.showAddSection, one:"",two:"",three:"",four:""})
  }

  handleChange = (event) =>{
    this.setState({[event.target.name]: event.target.value});
  }

  handleSelect = (e) =>{
    this.setState({select:e.target.value})
  }
  showAddSection = () => {
    this.setState({
        showAddSection: !this.state.showAddSection
      })
  }
  togglePopup = () => {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
  } 
  handlePopup = () =>{
    this.setState({
      showPopup: !this.state.showPopup
    })
  }
  handlePopup2 = () =>{
    this.setState({
      showPopup2: !this.state.showPopup2
    })
  }
  handleSearchPopup = () =>{
    this.setState({
      searchPopup: !this.state.searchPopup,
    })
  }
  handleSearchPopup2 = () =>{
    this.setState({
      searchPopup2: !this.state.searchPopup2,
    })
  }
  
  handleReset = () =>{
    this.setState({
      searchbar:"",
      searchbar2:""
    })   
  }
  
  async handleChangeText(e){
     await this.setState({
        searchbar: e,
      })
  }

  async handleChangeText2(e){
  await this.setState({
       searchbar2: e,
     })
  }
  
  async onChecked (value1,value2,value3){
   
   await this.setState(
      state => {
         // eslint-disable-next-line
          {state.check.ball = value1
            state.check.phone = value2
            state.check.nexus= value3
      return state
          }
  })
  }

  render(){
      const { onProductTableUpdate, onDelEve } = this.props;
      let filterText = this.props.filterText;
      let text = this.state.select.toLowerCase();
      let {ball,phone,nexus} = this.state.check; 
      let {searchbar,searchbar2} = this.state;   
      let product = this.props.products.map(function(product, index) {
        filterText = filterText.toLowerCase();
        let name = product.name.toLowerCase();
        let category = product.category.toLowerCase(); 
        // if((name.indexOf(filterText) === -1 && category.indexOf(filterText) === -1) || name.indexOf(text) === -1){
        if(name.indexOf(text)){  
        // eslint-disable-next-line 
          return;
        }
        // filter
        if(((ball && (name.indexOf("ball") !== -1)) ||(phone && (name.indexOf("phone") !== -1)) || (nexus && (name.indexOf("nexus") !== -1)) || (!ball && !phone && !nexus))){
         // search
          if(((name.indexOf(searchbar) !== -1) && (category.indexOf(searchbar2) !== -1))){          
            
          return (<Row key={index} onProductTableUpdate={onProductTableUpdate} product={product} onDelEve={onDelEve}/>) 
        } }
       
     }); 
       
      return(
        <div>
          <div className="rootApp-inner">
            
             
              {
              
              <table>
                  <thead>
                      <tr>
                          <th>A<span className="dropdownParent" onClick={this.handlePopup}><Icon type="filter"/></span> { this.state.showPopup ?  
              <PopupNamefilter  
                  // text='Click "Close Button" to hide popup'  
                  closePopup={this.togglePopup.bind(this)}  
                  // product={this.props.product}
                  // onProductTableUpdate={this.props.onProductTableUpdate}
                  check={this.state.check}
                  onChecked = {this.onChecked}
                  
              /> 
              : null }
              <Icon type="search" onClick={this.handleSearchPopup} />{this.state.searchPopup ?
              <SearchPopup closePopup={this.handleSearchPopup}        
              // handleChangeText={this.handleChangeText} 
              handleSubmit={this.handleChangeText}
              handleReset={this.handleReset}
              searchbar={this.state.searchbar}
              />:null}
                          </th>
                          <th><div className="headerWrapper"><div className="tableTitle">B</div><div className="sortingArrow"><button onClick={this.handleClick} className="fa fa-caret-down"  name="asc-price"></button><button  className="fa fa-caret-up" onClick={this.handleClick}  name="des-price"></button></div></div></th>
                          <th><div className="headerWrapper"><div className="tableTitle">C</div><div className="sortingArrow"><button onClick={this.handleClick} className="fa fa-caret-down"  name="asc-qty"></button><button  className="fa fa-caret-up" onClick={this.handleClick}  name="des-qty"></button></div></div></th>
                          <th><div className="headerWrapper"><div className="tableTitle">D</div><div className="sortingArrow"><button onClick={this.handleClick} className="fa fa-caret-down"  name="asc-category"></button><button  className="fa fa-caret-up" onClick={this.handleClick}  name="des-category"></button>
                          </div>
                          <div>
                          <div>
                          <Icon type="search" onClick={this.handleSearchPopup2} /> </div>
                          <div>{this.state.searchPopup2 ?
              <SearchPopup closePopup={this.handleSearchPopup2} 
              // handleChangeText={this.handleChangeText} 
              handleSubmit={this.handleChangeText2}
              handleReset={this.handleReset}
              searchbar={this.state.searchbar2}
              />:null}</div> </div>
              </div></th>
                          {/* <th>C&nbsp;&nbsp;<input type="button" onClick={this.handleClick} name="asc-qty" value="&darr;"></input><input type="button" onClick={this.handleClick} name="des-qty" value="&uarr;"></input></th>
                          <th>D&nbsp;&nbsp;<input type="button" onClick={this.handleClick} name="asc-category" value="&darr;"></input><input type="button" onClick={this.handleClick} name="des-category" value="&uarr;"></input></th> */}
                          <th>Action</th>    
                      </tr>
                  </thead>       
       
                  <tbody>
                  


                      {product}
                      
                      </tbody>
              </table>
           
               }
                
          </div>
          <button className="addButton" onClick={this.showAddSection}>Add</button>
              {
                this.state.showAddSection && 
                <div className="addButton">
                    A: <input type="text" name="one" value={this.state.one} onChange={this.handleChange}/>
                    B: <input type="number"  name="two" value={this.state.two} onChange={this.handleChange}/>
                    C: <input type="number"  name="three" value={this.state.three} onChange={this.handleChange}/>
                    D: <input type="text"  name="four" value={this.state.four} onChange={this.handleChange}/>
                    <button className="SubmitButton" onClick={this.handleAdd}>Submit</button>
                </div>
              }  
          </div>
      );

      }
  }

export default Table;