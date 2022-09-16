import video from "../data/video.js";
import react, {useState} from "react";
import Votes from "./Votes.js";
import CommentList from "./CommentList.js";


function App() {
  console.log("Here's your data:", video);
  const[upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)
  const [toggleComment, setToggleComment] = useState(true)

  function handleToggleComment(){
    setToggleComment(!toggleComment)
  }

  function handleUpVote(){
    setUpVotes(upVotes=> upVotes +1)
  }

  function handleDownVote(){
    setDownVotes(downVotes=>  downVotes+1)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={`${video.embedUrl}`}
        frameBorder="0"
        allowFullScreen
        title={`${video.title}`}
      />
      <h1>{`${video.title}`}</h1>
      <p>{video.views} views | Uploaded {video.createdAt}</p>
      <div>
        <Votes upVotes={upVotes} downVotes={downVotes} onUpVote={handleUpVote} onDownVote={handleDownVote}/>
        <CommentList comments={video.comments} toggleComment={toggleComment} onToggleComment= {handleToggleComment}/>
      </div>
    </div>
  );
}

export default App;
