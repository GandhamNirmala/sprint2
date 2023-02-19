import { Component } from "react";
import { store } from "./store"
import {  Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import Category from "./components/Category";
import './App.css';
import NavBar from "./components/Navbar";
import Menu from "./components/Menu";

export default class App extends Component{
   /* Which function does react call : render() */
   render(){ /* render must return something(JSX) */
    return(
    <div>
       <Provider store={store}>
         <NavBar />
          
          <Routes>
            <Route path="/category" element={ <Category />} />
            <Route path="/menu" element={ <Menu />} />
            {/* <Route path="/posts" element={ <Post />} />
            <Route path="/category" element={ <Category />} />
            <Route path="/sign-up" element={ <SignUp />} />
            <Route path="/users" element={ <User />} />
            <Route path="*" element={ <PageNotFound />} /> */} 
            </Routes>
            </Provider>
             </div> 
             );
            }
          }