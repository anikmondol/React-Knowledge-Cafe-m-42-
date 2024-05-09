import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div >
            <h2 className='text-center text-xl p-5 bg-violet-200 mb-5 rounded-md'>Spent time on read : {readingTime}</h2>
            <div className='mx-auto bg-slate-200 p-4 pb-36 rounded-md'>
                <h2 className='text-center text-2xl mb-3'>Bookmarked Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;