import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import CommunityPost from './CommunityPost';
import api from '../root/api';
import CommunityList from './CommunityList';
import styled from 'styled-components';




function Community() {
    let [queryset, setQueryset] = useState([]);
    let [next, setNext] = useState('');
    let [prev, setPrev] = useState('');

    useEffect(function(){
        _getCommunity();
    },[])
    
    const _getCommunity = async() => {
        const community = await api.getCommunity();
        setQueryset(community.data.results)
        setNext(community.data.next)
        // pagination적용하니까 array는 result안에 들어있네!
        // console.log(community.data)
    }
    const nextPage = async() =>{
        const nextQueryset = await api.getCommunity(next)

        setQueryset(nextQueryset.data.results);
        setNext(nextQueryset.data.next);
        setPrev(nextQueryset.data.previous);
    }

    const prevPage = async() =>{
        const prevQueryset = await api.getCommunity(prev)
        
        setQueryset(prevQueryset.data.results);
        setNext(prevQueryset.data.next)
        setPrev(prevQueryset.data.previous);
    }
      
    return (
        <ComContainer>
            <Link to = "/community_post">
                <Button>글쓰기</Button>
            </Link>
            <CardContainer>
                {queryset !== [] ? 
                    queryset.map((com)=>
                    <React.Fragment key={com.id}>
                        <Link path to = {"community_detail/"+com.id}> 
                            <CommunityList id={com.id} author_name={com.author_name} title={com.title} desc={com.desc} />
                        </Link>
                    </React.Fragment>
                    )
                    : "loading..."
                }
            </CardContainer>
            <Pagination>
                {
                    prev? <Button onClick={prevPage}>prev</Button> 
                    : null
                }
                {
                    next? <Button onClick={nextPage}>next</Button> 
                    : null
                }
            </Pagination>
            
            
        </ComContainer>
    )
}

const ComContainer = styled.div`
    width: 100%;
`
const CardContainer = styled.div`
`
const Pagination = styled.div`
    display: flex;
    align-items: center;
    width: 500px;
    margin: 0 auto;
`
const Button = styled.button`
    flex:1;
    display: inline;
    background: orange;
    border-radius: 10px;
    font-weight: bold;
`

export default Community;
// export default connect()(Community);
// subscribe를 위해 connect를 써주는게 맞는 것 같다