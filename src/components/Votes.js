import react from "react";

function Votes({upVotes, downVotes, onUpVote, onDownVote}){

    return(
        <div>
             <button onClick={onUpVote}>{upVotes} 👍</button> <button onClick={onDownVote}> {downVotes} 👎</button>
        </div>
    )
}

export default Votes;