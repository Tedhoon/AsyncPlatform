import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import CommunityPost from './CommunityPost';
import api from '../root/api';

function Community() {
    const [queryset, setQueryset] = useState([]);
    

    useEffect(function(){
        console.log("커뮤니티 마운트!")
        _getCommunity()
    })
    

    const _getCommunity = async() => {
        const community = await api.getCommunity();
        console.log(community)
        console.log(community.data)
        setQueryset(community.data)
    }
    
      
    return (
        <React.Fragment>
            <Link path to = "/community_post">
                <button>글쓰기</button>
            </Link>

                {
                    queryset.map((com)=>
                    <div>
                        <p>id : {com.id}</p>
                        <p>title : {com.title}</p>
                        <p>desc : {com.desc}</p>
                        <hr />
                    </div>
                    )
                }
            
        </React.Fragment>
    )
}

export default Community;