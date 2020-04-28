import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import CommunityPost from './CommunityPost';
import api from '../root/api';

const Community = () => {
    // const [community, setCommunity] = useState('');
    useEffect(function(){
        console.log("커뮤니티 마운트!")
        _getCommunity()
    },[])

    const _getCommunity = async() => {
        const community = await api.getCommunity();
        console.log(community)
        console.log(community.data)
    }
    
      
    return (
        <React.Fragment>
            <Link path to = "/community_post">
                <button>글쓰기</button>
            </Link>

            <div>

            </div>
        </React.Fragment>
    )
}

export default Community;