import React, {useState,useEffect} from 'react';
import './banner.css';
import bgImg from '../images/bg-transformer.jpg';
import MovieContent from '../components/MovieContent';
import PlayBtn from '../components/PlayBtn';
import MovieDate from '../components/MovieDate';
import MovieSwiper from '../components/MovieSwiper';



function Banner() {
  const [movies,setMovies] = useState([]);

  const fetchData = ()=>{
    fetch('http://localhost:3000/data/movieData.json').then(res=>res.json()).then(data=>setMovies(data))
    .catch(e=>console.log(e.message));
  };

  useEffect(()=>{
    fetchData();
  },[]);

  const handleSlideChane = id =>{
    const newMovies = movies.map(movie=>{
      movie.active = false;
      if(movie._id===id){
        movie.active=true;
      }
      return movie;
    });
    setMovies(newMovies);
    console.log(id);
};

  return (
    

<div className="banner">
{
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (
                  
                  <div className='movie'>
            
            
                    <img src={movie.bgImg} alt="" className={`bgImg ${movie.active ? 'active' : undefined}`}/>
            
                    
                    
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <MovieContent movie={movie}/>{console.log(movie.title)}
                            
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <MovieDate movie={movie}/>
                            <PlayBtn movie={movie}/>
                          </div>
                        </div>
                      </div>
                  </div>
            ))}
          </div>) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
}
{
      movies &&movies.length>0 && <MovieSwiper slides={movies} slideChange={handleSlideChane}/>
    }
</div>

  
        
     
  )
}

export default Banner


/*

<div className="banner">
{
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (
                  
                  <div className='movie'>
            
            
                    <img src={movie.bgImg} alt="" className={`bgImg ${movie.active ? 'active' : undefined}`}/>
            
                    
                    
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <MovieContent movie={movie}/>{console.log(movie.title)}
                            
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <MovieDate movie={movie}/>
                            <PlayBtn/>
                          </div>
                        </div>
                      </div>
                  </div>
            ))}
          </div>) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
}
</div>
*/


/*
  <div className='banner'>
    {
      movies && movies.length>0 && movies.map(movie=>{
        
        
      <div className='movie'>
          
          
        <img src={movie.bgImg} alt="" className={`bgImg ${movie.active ? 'active' : undefined}`}/>

        
        
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <MovieContent movie={movie}/>{console.log(movie.title)}
                
              </div>
              <div className="col-lg-6 col-md-12">
                <MovieDate movie={movie}/>
                <PlayBtn/>
              </div>
            </div>
          </div>
      </div>
      })
    }

    {
      movies &&movies.length>0 && <MovieSwiper slides={movies} slideChange={handleSlideChane}/>
    }
    
    </div>
*/

/*

  <div className='banner'>
    <div className='movie'>
        <img src={bgImg} alt="Background Image" className='bgImg'/>
        <div className='container-fluid'>
          <div className='row'>
            <div className="col-lg-6 col-md-12">
              <div className="content active">
                <img src="" alt="Movie Title" className='movie-title' />
                <h4><span>Year</span>
                  <span><i>age</i></span>
                  <span>lenght</span>
                  <span>category</span>
                </h4>
                <p>qwneflkqwfeknqwekfniqwlkefnqwlefknqlwkefnqwlkfenqw
                  kqwmeflqwmeflkqwmfeqwf wflkqw feflkqw fklq weeflkqw ef
                  şlmdşqlwmfşqlwfmşqlwmeflşqwmfelşqwmeflşqwmeflşqwmfelşqwm
                  qwşekfmqwş klnqşjhfqşerhnwelrngweljknglkjn kjeşrgkjwgrnj
                  weşrnwkjgrnwkjrg rjgnwergjn wegwjerg wekjngrwkjnrgjlwenrg
                  weşrjgnwerjgnwe gwen rgjwe ggwekegrnweg wegrwergnrwergwerl
                </p>
                <div className="button">Button</div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className='date'>
                <h2>On 15th August</h2>
              </div>
              </div>
          </div>
        </div>
    </div>
    </div>

    */

/*

    <div className='banner'>
    <div className='movie'>
        <img src={bgImg} alt="Background Image" className='bgImg active'/>
        <div className='container-fluid'>
          <div className='row'>
            <div className="col-lg-6 col-md-12">
              <MovieContent/>
            </div>
            <div className="col-lg-6 col-md-12">
            <MovieDate/>
            <PlayBtn/>
              </div>
          </div>
        </div>
    </div>
    </div>


*/