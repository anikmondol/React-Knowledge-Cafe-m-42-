import PropTypes from 'prop-types'; // ES6
import { CiBookmarkCheck } from "react-icons/ci";



const Blog = ({blog, handleAddToBookmarks, handleAddToTime}) => {
   const {cover, title, author_img, author, posted_date, reading_time, hashtags, id} = blog;
    return (
        <div className='mb-20 space-y-3'>
            <img className='rounded-lg w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    
                    <span>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookmarks(blog)} className='text-3xl'><CiBookmarkCheck></CiBookmarkCheck></button>
                </div>
            </div>
            <h2 className='text-3xl'>{title}</h2>
            <p className='space-x-1'>
                {
                    hashtags.map((hash, idx) => <span key={idx}>#<a href="">{hash}</a> </span>)
                }
            </p>
            <button className='underline font-medium' onClick={()=>handleAddToTime(id,reading_time)}>Mark as read</button>
        </div>
    );
};


Blog.propTypes = {
    blog:PropTypes.object.isRequired, 
    handleAddToBookmarks: PropTypes.func,
    handleAddToTime: PropTypes.func
}

export default Blog;