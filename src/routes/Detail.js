import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams(); // 현재 페이지의 parameter 값 받아오는 역할

    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)
        ).json();
        console.log(json);
    }

    useEffect(() => {
       getMovie();
    }, [])
    return (
        <div>
            <h1>Detail</h1>
            <p>blah</p>
        </div>
    );
}

export default Detail;