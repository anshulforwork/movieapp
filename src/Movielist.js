import Moviecard from "./Moviecard";
function Movielist(props){
    
        // const{title,plot,poster,rating,price,star,fav,isInCart}=this.state;
        
        const{moviesArr,addStar,changeCart,changeFav,decStar}=props;
        
        return(
            <>
            {moviesArr.map((movie)=>
                        <Moviecard  movies={movie}
                        addStar={addStar}
                        decStar={decStar}
                        changeCart={changeCart}
                        changeFav={changeFav}
                        key={movie.id}
            />
)}

            </>
        );
    }

export default Movielist;