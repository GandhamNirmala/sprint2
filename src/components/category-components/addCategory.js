
import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
//import {addCategory} from '../../store/action/category';
// import Menu from "../Menu";
import { addCategory } from "../../store/action/category";

 export class AddCategory extends Component{
  

    constructor(props){
        super(props);
    this.state = {
        category:{
            name: ''
        },
        errors: {},
        msg: ''
        
    };
  }

  componentDidMount(){

  }
        


  render() {
    return (
      <div>
        <div className="card">
          <h5 className="card-header">Add Category</h5>
          <div className="card-body">
            <h5 className="card-title">Enter Category Info: </h5>
            <p className="card-text">
            <span>{this.state.msg}</span> <br />
               <label>Category Name: </label>
               <input type="text" 
                        name="name"
                        value={this.state.category.name}
                        onChange={this.changeHandler} />
                        <span style={{ color : 'red'}}>{this.state.errors['name']}</span>
                <br /><br />
                <button onClick={this.onAdd}>Add category</button>
            </p>

          </div>
        </div>
      </div>
    );
  }

  changeHandler= (event) =>{
    this.setState({
        category: {
            ...this.state.category, 
            [event.target.name] : event.target.value
        }
    });
}

onAdd = ()=>{
    /* Validate User inputs */
    if(this.handleValidation()){
        console.log(this.state.category);
        /* Call the API */
       this.postCategory(this.state.category);
    }
    else{
        /* Display error messages */
        console.log('validation not passed..');     
    }
}

   
handleValidation(){
    let name = this.state.category.name;

    let tempErrors={}
    let formValid = true; 
    if(!name){ //If name is not given
        formValid = false;
        tempErrors['name']='Category Name cannot be empty';
    }

    this.setState({
        errors: tempErrors
    });

    return formValid; 
}

async postCategory(category){
    try {
        const response = axios.post("http://localhost:8585/api/category/add", category);
        const data = (await response).data;
        console.log('API success');
        console.log(data);
        this.setState({
            msg: data.msg
        })
        //react out to action and update the store
        this.props.addCategory(data);
      } catch (error) {
    //     console.log(error)
        //console.error(error.response.data.msg);
        this.setState({
    //        msg: 'Operation Failed'
        })
      }
}
}
function mapStateToProps(state){
    return {
        // menuList : state.category
    }    
}

export default connect(mapStateToProps, {})(AddCategory); 
