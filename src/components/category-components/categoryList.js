import { Component } from "react";
import { connect } from "react-redux";
import { listCategory } from "../../store/action/category";


export class CategoryList extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          
        };
      }
    
      componentDidMount() {
          this.props.listCategory();
      }

      render(){
        return(
            <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
              {/* {   <th scope="col">ID</th> } */}
                <th scope="col">Name</th>
                
              </tr>
            </thead>
            <tbody>
              {
                this.props.categoryList.list.map((e, index) => (
                 
                  <tr key={e.id}>
                    <th scope="row" key={e.id}> {index + 1}</th>
                    {/* { <td>{e.id}</td> } */}
                    <td>{e.name}</td>
                    
                    {/* <td> 
                      {e.projects.map(p=> (
                          <li key={index}>
                              {p.title} 
                          </li>
                      ))}
                    </td> */}
                  </tr>
                
              ))}   
            </tbody>
          </table>
          )
      }
}

function mapStateToProps(state) {
    return {
      categoryList: state.category
    }; 
  }
  
  export default connect(mapStateToProps, {listCategory})(CategoryList);