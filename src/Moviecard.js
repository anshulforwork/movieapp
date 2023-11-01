
import "./index.css"
import headStyle from "./headingOne.module.css";
// import img1 from "./img/bat.jpg"

function MovieCard(props){

        const{title,plot,poster,rating,price,star,fav,isInCart}=props.movies;
        const{addStar,decStar,movies,changeCart,changeFav}=props;
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
            {fav?<button className={headStyle.btn} onClick={()=>changeFav(movies)}>Un-Favourite</button>: <button className="ubtn" onClick={()=>changeFav(movies)}>Favourite</button>}
            {isInCart?<button className="rbtn" onClick={()=>changeCart(movies)}>Remove from cart</button>: <button className="btn" onClick={()=>changeCart(movies)}>Add to cart</button>}

                        </div>
                        
                    </div>                                
                </div>
            </div>
        </div>
        </>
    )
}

export default MovieCard;