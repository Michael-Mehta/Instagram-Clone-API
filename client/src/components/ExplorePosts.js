



const ExplorePosts = ({post, currUser, setShowComment, setPic, setPost, profile, setAnyUser}) => {
    return(
        <div className='postsExplore'>
            <img src={post.image_url} alt='pic' className='explorePost' />
        </div>
    )
} 



export default ExplorePosts