import React from "react";
import styled from "styled-components";
import "./index.css";
const Nav = styled.div`
width: 100%;
height: 10vh;
background:linear-gradient(170deg,#1bc059,#0d47a1);
border-bottom: 1px solid gray;
display: flex;
justify-content: space-between;
`;
const CartCount =styled.div`
background-color:${(props)=>props.color};
border-radius:50%;
padding:4px 8px;
position:absolute;
font-size:12px;
top;-5px;
margin-left:-18px;
visibility:${(props)=>props.show?"visible":"hidden"};
&:hover{font-size:18px;}

`;
class Navbar extends React.Component{

    render(){
        return(
            <>
            <Nav>
                <div className="title" style={{color:"red",
            font:"normal 500 30px/50px cursive",
           margin:"3px"}} >
                    Movie-App
                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/1136/1136140.png"alt="cart icon" style={style.cartIcon}/>
                    <CartCount color="orange" show={true}>3</CartCount>

                </div>
            </Nav>
            </>
        )
    }
}

const style={
    cartIcon:{
        position:"absolute",
        width:"4vw",
        minWidth:"50px",
        right:10,
        top:-5,
        fontSize :12
    },
    cartCount:{
       
    }
}
export default Navbar;