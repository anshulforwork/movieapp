import React from "react";
import "./index.css"
import img1 from "./img/bat.jpg"

class MovieCard extends React.Component{
    constructor(){
        super();
        this.state={
            title:"THE  BATMAN",
            plot:"Superrnatural Power shown in the movie.",
            price:"Rs.199",
            rating:8.9,
            stars:0,
            fav:true,
            cart:true,
        }
        // this.addStars=this.addStars.bind(this);
    }
    addStars =()=>{
        
        this.setState({
            stars: this.state.stars+0.5
        });

    }
    decreaseStars =()=>{
        this.setState((prevState)=>{
            return{
                stars:prevState.stars-0.5
            }
        });

    }
    changeFav=()=>{
        this.setState(
            {
                fav: !this.state.fav
            }
        );
    }
    changeCart=()=>{
        this.setState(
            {
                cart: !this.state.cart
            }
        );
    }
render(){
    const{title,plot,price,rating,stars,fav,cart}=this.state;
    return (
        <>
        <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img  src={img1} alt="poster" className="img1"/>
                </div>
                <div className="right">
                    <div className="title"><h1>{title}</h1></div>
                    <div className="plot">{plot}</div>
                    <div className="price">{price}</div>                                
                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="stars">

                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="star2"/>
                            <span>{stars}</span>
                            <div >
                            <img src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png" className="star1" onClick={this.addStars}/>
                            <img src="https://cdn-icons-png.flaticon.com/128/10308/10308996.png" className="star1" onClick={this.decreaseStars}/>
                            </div>
                            
                        </div>
                        <div>
            {fav?<button className="btn" onClick={this.changeFav}>Favourite</button>: <button className="ubtn" onClick={this.changeFav}>Un-Favourite</button>}
            {cart?<button className="btn" onClick={this.changeCart}>Add to cart</button>: <button className="rbtn" onClick={this.changeCart}>Remove from cart</button>}
                        </div>
                        
                    </div>                                
                </div>
            </div>
        </div>
        </>
    )
}
}
export default MovieCard;