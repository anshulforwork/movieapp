import React from "react";
import Movielist from "./Movielist";
import "./index.css"
import Navbar from "./Navbar";
import { movies } from "./moviesData";


class App extends React.Component {

  constructor(){
    super();
    this.state={

    moviesArr : movies,
    cartCount:0
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
  let{moviesArr,cartCount}=this.state;
  const mid= moviesArr.indexOf(movie);
  moviesArr[mid].isInCart=!moviesArr[mid].isInCart;
  if(moviesArr[mid].isInCart){
    cartCount+=1;
  }
  else{
    cartCount-=1;
  }
  this.setState({
    moviesArr,
    cartCount
  });
}
  render(){
    let{moviesArr,cartCount}=this.state;
    return (<>
      <Navbar cartCount={cartCount}/>
      <Movielist
      moviesArr={moviesArr}
      addStar={this.handleIncStar}
      decStar={this.handleDecStar}
      changeCart={this.handleChangeCart}
      changeFav={this.handleChangeFav}
      
      />
      </>);
  }
}

export default App;
