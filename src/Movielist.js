import React from "react";
import "./index.css"
import Moviecard from "./Moviecard";

class Movielist extends React.Component{
    render(){
        return(
            <>
            <Moviecard/><Moviecard/><Moviecard/><Moviecard/><Moviecard/>
            </>
        );
    }
}
export default Movielist;