import React from 'react';
import "./App.css"
import Table from "./components/table"
import SearchBar from "./components/search"
import "antd/dist/antd.css";
import data from "./data"
import Pagination from "./components/pagination"

export default class App extends React.Component {
constructor(props){   
  super(props);
  // var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }))
  this.state={  
   filterText:"",
    // products:data,
    // currentPage: 1,
    // todosPerPage: 3,
    exampleItems:data,  
    pageOfItems: [],  
    currentPage:1,
  }
  this.onChangePage = this.onChangePage.bind(this);
  this.handleRowDel = this.handleRowDel.bind(this);
  this.currentPageSetter = this.currentPageSetter.bind(this);
}
// componentWillMount(){
//this.setState({exampleItems: this.state.products})
// }

async onChangePage(pageOfItems) {
  // update state with new page of items
  await this.setState({pageOfItems: pageOfItems});
  
  
}

handleUserInput = (filterText) => {
  this.setState({filterText:filterText})  
}

handleProductTable = (evt) => {
  
  let item = {
    id: evt.target.id,
    name: evt.target.name,
    value: evt.target.value
  };
  
  let products = this.state.exampleItems;
  
  let newProducts = products.map(function(product) {
  
    Object.keys(product).forEach(key => {
      // eslint-disable-next-line
      if (key == item.name && product.id == item.id) {      
             product[key] = item.value;
           }
    })

    // for (var key in product) {
    //   // eslint-disable-next-line
    //   console.log(key);
    //   if (key == item.name && product.id == item.id) {      
    //     product[key] = item.value;
    //   }
    // }
    
    return product;
  });
  this.setState({exampleItems:newProducts});
};

handleRowDel (product){
  let  exampleItems  = [...this.state.exampleItems];
  let index = exampleItems.indexOf(product);
  exampleItems.splice(index, 1);
  this.setState({exampleItems:exampleItems});  
};

 handleAddEvent = (one,two,three,four) =>{
  let products = [...this.state.exampleItems];
  let count = + new Date();
  let item={
    id: count,
    name: one,
    price: two,
    qty: three,
    category: four,
  }
  products.push(item);
  this.setState({exampleItems:products}); 
}

orderChange = (e) =>{
  var  trimText = e.substr(4);
  var  arrangeMethod = e.substr(0,3);
  if(trimText === "price" || trimText === "qty") {
    this.arrangeNumber(trimText, arrangeMethod);
  }
  if(trimText === "category"){
    this.arrangeText(trimText,arrangeMethod);
  }
   
}

async arrangeNumber(key,arrangeMethod){
  let arraycopy = [...this.state.exampleItems];
  if(arrangeMethod === "asc"){
    arraycopy.sort(function(a,b){
      if(Number(a[key]) < Number(b[key])){ return -1;}
      if(Number(a[key]) > Number(b[key])){ return 1;}
      return 0
    })
  }
  if(arrangeMethod === "des"){
    arraycopy.sort(function(a,b){
      if(Number(a[key]) > Number(b[key])){ return -1;}
      if(Number(a[key]) < Number(b[key])){ return 1;}
      return 0
    })
  }

 await this.setState({exampleItems:arraycopy});
 
}
async arrangeText  (key,arrangeMethod) {
  let arraycopy = [...this.state.exampleItems];
  if(arrangeMethod === "asc"){
    arraycopy.sort(function(a,b){
      if((a[key]) < (b[key])){ return -1;}
      if((a[key]) > (b[key])){ return 1;}
      return 0
    })
  }
  if(arrangeMethod === "des"){
    arraycopy.sort(function(a,b){
      if((a[key]) > (b[key])){ return -1;}
      if((a[key]) < (b[key])){ return 1;}
      return 0
    })
  }

 await this.setState({exampleItems:arraycopy});
}

// handleClick = (event) =>{
//   this.setState({
//     currentPage: Number(event.target.id)
//   });
// }
async currentPageSetter(currentPage){
  await this.setState({
    currentPage:currentPage,
  })
   
}
  render(){
    
    // const { currentPage, todosPerPage,products } = this.state;
    // // Logic for displaying current todos
    // const indexOfLastTodo = currentPage * todosPerPage;
    // const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    // console.log(products.slice(indexOfFirstTodo,indexOfLastTodo));
    // const currentTodos = products.slice(indexOfFirstTodo, indexOfLastTodo);
    // const renderTodos = currentTodos.map((todo, index) => {
    //   return <li key={index}>{todo}</li>;
    //    });  
    // const pageNumbers = [];
    //   for (let i = 1; i <= Math.ceil(products.length / todosPerPage); i++) {
    //     pageNumbers.push(i);
    //   }
    // const renderPageNumbers = pageNumbers.map(number => {
    //     return (
    //       <li
    //         key={number}
    //         id={number}
    //         onClick={this.handleClick}
    //       >
    //         {number}
    //       </li>
    //     );
    //   });
    return(
      <div className="rootApp">
        {/* <SearchBar 
          filterText={this.state.filterText} 
          onUserInput={this.handleUserInput} 
        />       */
        //  console.log(this.state.exampleItems ,this.state.pageOfItems)
         
        }
           
        <Table 
          onProductTableUpdate={this.handleProductTable} 
          onRowAdd={this.handleAddEvent} 
          products={this.state.pageOfItems}
          // currentTodos
          onDelEve={this.handleRowDel}
          filterText={this.state.filterText} 
          orderChange={this.orderChange}
        /><div className="pagination">  
          {/* <ul id="page">
           {renderPageNumbers}
          </ul> */}
      </div>
        
      <div className="container">
                    <div className="text-center">
                         
                        {/* {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.name}</div>
                        )} */ }
                         
                        <Pagination 
                        items={this.state.exampleItems} 
                        onChangePage={this.onChangePage} 
                        pageNumber={this.state.currentPage}
                        currentPage={this.currentPageSetter}
                        />
                        
                    </div>
                </div>
                
               
        
      </div>
      
    );
  }

}