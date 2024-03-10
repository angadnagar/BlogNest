import Link from "next/link"

const NotFound = ()=>{
    return(
        <div>
            <h2>Not Found</h2>
            <p>Sorry this page is not found</p>
            <Link href="/">return to home</Link>
        </div>
    )
}

export default NotFound