import React, { useState, useEffect } from 'react'
import './schedule.css'
import Card from '../components/Card';

function Schedule() {

    const filterLİst = [
        {
            _id : 1,
            name : 'All',
            active : true,
        },
        {
            _id : 2,
            name : 'Romance',
            active : false,
        },
        {
            _id : 3,
            name : 'Action',
            active : false,
        },
        {
            _id : 4,
            name : 'Thriller',
            active : false,
        },
        {
            _id : 5,
            name : 'Horror',
            active : false,
        },
        {
            _id : 6,
            name : 'Advantura',
            active : false,
        },

    ]

    const [data, setData] = useState([])
    const [movies, setMovies] = useState([])
    const [filters,setFilters]  = useState(filterLİst)

    const fetchData = () => {
        fetch('http://localhost:3000/data/movieData.json').then(res => res.json()).then(data => setData(data))
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(()=>{
        setMovies(data);
    },[data])


    const handlefilterMovies = category => {

        setFilters(
        filters.map(filter=>{
            filter.active = false;
            if(filter.name === category){
                filter.active = true
            }

            return filter
        }))

        console.log(category);
        if(category==='All'){
            setMovies(data)
            return
        }
        const filteredMovies = data.filter(movie=>movies.category === category)
        setMovies(data.filter(movie=>movie.category === category));
    }

    return (
        <section id="schedule" className='schedule'>
            <div className="container-fluid">
                <div className='row'>
                    <h4 className='section-title'>Opening this week</h4>
                    <div className="row">
                        <ul className='filters'>
                            {filters.map(filter=>(
                                <li key={filter._id} className={`${filter.active ? 'active' : undefined}`}
                            onClick={()=>{handlefilterMovies(filter.name)}}>{filter.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="row mt-5">
                        {
                           movies &&  movies.length > 0 ? ( movies.map(movie=> <Card key={movie._id} movie={movie}/>) ) : (<h1>{movies.length}</h1>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Schedule