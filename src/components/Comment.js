import react from "react";

function Comment({text, user}){

    return(
        <div>
            <h3>{user}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Comment;