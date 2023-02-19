
import { Component } from "react";
import { connect } from "react-redux";
 
import { AddCategory } from "./category-components/addCategory";
// import Menu from "./category-components/category";
import CategoryList from "./category-components/categoryList";
// import { listMenu } from "../store/action/menu";

export  class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentNum: 0
    };
  }
 
  componentDidMount(){
    // this.props.listMenu();
  }
  render() { 
    return (
      <div className="container-fliud">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              <li className=" list-group-item"> <button   className="list-group-item employee-sidebar" onClick={()=>{
                this.setState({componentNum : 1})
              }} > Show all Categories </button> </li>
              <li className="list-group-item">
                <button  className=" list-group-item employee-sidebar" 
                onClick={()=>(this.setState({componentNum : 2}))}>
                   Add Category</button></li>
                   {/* <li className="list-group-item">
                <button  className=" list-group-item menu-sidebar" 
                onClick={()=>(this.setState({componentNum : 3}))}>
                   Add Menu</button></li> */}
              
              {/* <li className="list-group-item">Assign Menu to Restaurant</li>
              <li className="list-group-item">Show all Restaurant</li> */}
            </ul>
          </div>
          <div className="col-lg-9">
              {this.state.componentNum === 1?
                  <CategoryList />:this.state.componentNum === 2?
                  <AddCategory />:this.props.addcategory}
          </div> 
        </div>
      </div>
    );
  }
};
function mapStateToProps(state){
  return {
      // menu:state.addcategory
  }    
}
export default connect(mapStateToProps, {AddCategory})(Category); 