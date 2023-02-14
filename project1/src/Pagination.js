

export default function Pagination({gonextPage,goprevPage}) {
    return (
        <div>
            {goprevPage && <button  onClick={goprevPage}>previous</button>} 
            {gonextPage && <button onClick={gonextPage}>next</button>}
        </div>
    )
}