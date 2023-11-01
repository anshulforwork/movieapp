import React from "react";
import "./index.css"
import Moviecard from "./Moviecard";

class Movielist extends React.Component{
    constructor(){
        super();
        this.state={

        moviesArr : [
                {
                  id:1,
                  title: 'The Avengers',                  
                  plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  star: 0,
                  fav: false,
                  isInCart: false                  
                },
                {
                  id:2,
                  title: 'The Dark Knight',                  
                  plot:
                    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                  rating: '9.0',            
                  price: 199,            
                  star: 0,            
                  fav: false,
                  isInCart: false                  
                },
                {
                  id:3,
                  title: 'Iron Man',                 
                  plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',            
                  price: 139,            
                  star: 0,            
                  fav: false,
                  isInCart: false                  
                }]
        }
        // this.addStars=this.addStars.bind(this);
    }
    handleIncStar=(movie)=>{
      const{moviesArr}=this.state;
      const mid= moviesArr.indexOf(movie);
      if(moviesArr[mid].star<5){
        moviesArr[mid].star+=0.5;
      }
      
      this.setState({
        moviesArr:moviesArr
      }
        
      );
    }
    handleDecStar=(movie)=>{
    const{moviesArr}=this.state;
    const mid=moviesArr.indexOf(movie);
    if(moviesArr[mid].star>0){
      moviesArr[mid].star -=0.5;
    }
    
    this.setState({
      moviesArr
    });
    }
    handleChangeFav=(movie)=>{
      const{moviesArr}=this.state;
      const mid= moviesArr.indexOf(movie);
      moviesArr[mid].fav=!moviesArr[mid].fav;
      this.setState({
        moviesArr
      });
    }
    handleChangeCart=(movie)=>{
      const{moviesArr}=this.state;
      const mid= moviesArr.indexOf(movie);
      moviesArr[mid].isInCart=!moviesArr[mid].isInCart;
      this.setState({
        moviesArr
      });
    }
    render(){
        // const{title,plot,poster,rating,price,star,fav,isInCart}=this.state;
        const{moviesArr}=this.state;
        return(
            <>
            {moviesArr.map((movie)=>
                        <Moviecard  movies={movie}
                        // plot={plot}
                        // price={price}
                        // rating={rating}
                        // stars={stars}
                        // fav={fav}
                        // cart={cart}
                        addStar={this.handleIncStar}
                        decStar={this.handleDecStar}
                        changeCart={this.handleChangeCart}
                        changeFav={this.handleChangeFav}
                        key={movie.id}
            />
)
        }

            </>
        );
    }
}
export default Movielist;