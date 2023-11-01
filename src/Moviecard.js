import React from "react";
import "./index.css"
// import img1 from "./img/bat.jpg"

class MovieCard extends React.Component{
        // constructor(){
        //     super();
        //     this.state={
        //         title:"THE  BATMAN",
        //         plot:"Superrnatural Power shown in the movie.",
        //         price:"Rs.199",
        //         rating:8.9,
        //         stars:0,
        //         fav:true,
        //         cart:true,
        //     }
        //     // this.addStars=this.addStars.bind(this);
        // }
    // addStars =()=>{
        
    //     this.setState({
    //         stars: this.state.stars+0.5
    //     });

    // }
    // decreaseStars =()=>{
    //     this.setState((prevState)=>{
    //         return{
    //             stars:prevState.stars-0.5
    //         }
    //     });

    // }
    // changeFav=()=>{
    //     this.setState(
    //         {
    //             fav: !this.state.fav
    //         }
    //     );
    // }
    // changeCart=()=>{
    //     this.setState(
    //         {
    //             cart: !this.state.cart
    //         }
    //     );
    // }
render(){
        const{title,plot,poster,rating,price,star,fav,isInCart}=this.props.movies;
        const{addStar,decStar,movies,changeCart,changeFav}=this.props;
    return (
        <>
        <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img  src={poster} alt="poster" className="img1"/>
                </div>
                <div className="right">
                    <div className="title"><h1>{title}</h1></div>
                    <div className="plot">{plot}</div>
                    <div className="price">{price}</div>                                
                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="stars">

                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="star2"/>
                            <span>{star}</span>
                            <div >
                            <img src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png" className="star1" onClick={()=>{addStar(movies)}}/>
                            <img src="https://cdn-icons-png.flaticon.com/128/10308/10308996.png" className="star1" onClick={()=>{decStar(movies)}}/>
                            </div>
                            
                        </div>
                        <div>
            {fav?<button className="btn" onClick={()=>changeFav(movies)}>Favourite</button>: <button className="ubtn" onClick={()=>changeFav(movies)}>Un-Favourite</button>}
            {isInCart?<button className="btn" onClick={()=>changeCart(movies)}>Add to cart</button>: <button className="rbtn" onClick={()=>changeCart(movies)}>Remove from cart</button>}

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