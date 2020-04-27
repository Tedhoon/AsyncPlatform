import React from 'react';
import { Route, Link } from 'react-router-dom';
// import CommunityPost from './CommunityPost';


const Community = () => {
    return (
        <React.Fragment>
            <Link path to = "/community/create">
                <button>글쓰기</button>
            </Link>
        </React.Fragment>
    )
}

export default Community;