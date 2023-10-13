
export function EachPost(props){
    return(
        <article>
            <a href={props.url}>
                <h3>{props.title}</h3>
            </a>
        </article>
    )
}
export function Post(){
    return(
        <>
        <span>
            www
        </span>
        <span>
            qqq
        </span>
        </>
    )
}