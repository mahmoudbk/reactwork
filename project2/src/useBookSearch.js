import { useEffect,useState } from "react";
import axios from "axios";
export default function useBookSearch(query, pageNumber){

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(()=> {
        setBooks([]);
    }, [query])
    useEffect(()=> {
        let cancel;
        const source =new axios.CancelToken(c => cancel=c);
        setLoading(true);
        axios({
            method:'GET',
            url:'http://openlibrary.org/search.json',
            params: { q:query, page:pageNumber},
            cancelToken:source
        })
        .then(res => {
            setLoading(false);
            setBooks((prv)=> [...new Set([...prv,...res.data.docs.map(b=>b.title)])]);
            setHasMore(res.data.docs.length > 0);
        }).catch(e=> {
            if(axios.isCancel(e)) return
            setError(true)
        })


        return () => {
            cancel();
          };
    }, [query, pageNumber])

    return { loading, error, books, hasMore}
}