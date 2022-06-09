import { useSelector } from "react-redux";
import {selectAllPosts} from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () =>{
    const posts = useSelector(selectAllPosts);

    const orderedPosts= posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts= orderedPosts.map(post=>(
        <article className="article" key={post.id}>
            <h3 className="title">{post.title}</h3>
            <p className="content">{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionButtons post={post}/>
        </article>
         ))
    return(
        <section className="section">
            <h2 className="posts">Posts</h2>
            {renderedPosts} 
        </section>
    )
}

export default PostsList;