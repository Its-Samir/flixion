import MovieList from '@/components/Movies/MovieList';
import Navbar from '@/components/Navbar/Navbar';
import Loading from '@/components/UI/Loading';
import React, { useState } from 'react';

function Movies() {
    const [loading, setLoading] = useState(false);
    function loadingHandler(isTrue) {
        setLoading(isTrue);
    }

    return (
        <div>
            <Navbar />
            {loading ? <Loading /> :
                <MovieList onLoad={loadingHandler} />
            }
        </div>
    )
}

export default Movies;