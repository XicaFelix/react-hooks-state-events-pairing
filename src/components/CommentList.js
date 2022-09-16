import react from "react";
import Comment from "./Comment";

function CommentList({comments, toggleComment, onToggleComment}){
    const commentList = comments.map(item=>item).map((comment)=>
        <Comment text={comment.comment} key={comment.id} user={comment.user}/>)
    return(
        <div>
            <button onClick={onToggleComment}>{toggleComment ? 'Hide Comments' : 'Show Comments'}</button>
           <div style={{display : toggleComment? 'block' : 'none'}}>
           {commentList}
           </div>
        </div>
    )
}

export default CommentList;