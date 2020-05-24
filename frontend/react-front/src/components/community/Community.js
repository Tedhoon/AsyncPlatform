import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import CommunityPost from './CommunityPost';
import api from '../root/api';
import CommunityList from './CommunityList';

// import store from 'store';
// import { loadUser } from 'actions/authActions';
// import { connect } from 'react-redux';



function Community() {
    let [queryset, setQueryset] = useState([]);
    let [next, setNext] = useState('');
    let [prev, setPrev] = useState('');

    useEffect(function(){
        console.log("커뮤니티 마운트!")
        // 여기서 user구독을 해볼까
        // store.dispatch(loadUser());
        console.log("구독적용되나?")
        _getCommunity();
    },[])
    
    const _getCommunity = async() => {
        const community = await api.getCommunity();
        // console.log(community))
        setQueryset(community.data.results)
        setNext(community.data.next)
        // array는 result안에 들어있네!
        console.log(community.data)
    }
    const nextPage = async() =>{
        console.log(next)
        const nextQueryset = await api.getCommunity(next)
        // let community2 = await api.getCommunity(community.data.next);
        
        setQueryset(nextQueryset.data.results);
        setNext(nextQueryset.data.next);
        setPrev(nextQueryset.data.previous);
    }

    const prevPage = async() =>{
        console.log('prev')
        const prevQueryset = await api.getCommunity(prev)
        
        setQueryset(prevQueryset.data.results);
        setNext(prevQueryset.data.next)
        setPrev(prevQueryset.data.previous);


    }
      
    return (
        <React.Fragment>
            <Link to = "/community_post">
                <button>글쓰기</button>
            </Link>

            {queryset !== [] ? 
                queryset.map((com)=>
                <div key={com.id}>
                    <Link path to = {"community_detail/"+com.id}> 
                        <CommunityList id={com.id} author_name={com.author_name} title={com.title} desc={com.desc} />
                    </Link>
                </div>
                )
                : "loading..."
            }
            {
                prev? <button onClick={prevPage}>prev</button> 
                : null
            }
            
            {
                next? <button onClick={nextPage}>next</button> 
                : null
            }
            
        </React.Fragment>
    )
}

// const mapStateToProps({

// })
export default Community;
// export default connect()(Community);
// subscribe를 위해 connect를 써주는게 맞는 것 같다