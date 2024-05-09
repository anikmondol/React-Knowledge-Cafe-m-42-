import PropTypes from 'prop-types';



const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-50 p-4 mb-3 rounded-md'>
            <h4 className='text-[20px] font-medium'>{title}</h4>
        </div>
    );
};


Bookmark.propTypes = {
    bookmark: PropTypes.object
}


export default Bookmark;