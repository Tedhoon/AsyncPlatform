import React from 'react';
import styled from 'styled-components';

function CommunityList(props){
    // useEffect(function(){
    //     console.log(props);
    // })
        
    const {id, author_name, title, desc} = props;
    return (
        <CommunityCard>
            <p>id : {id}</p>
            <p>author: {author_name}</p>
            <p>title : {title}</p>
            <p>desc : {desc}</p>
        </CommunityCard>
    )
}

const CommunityCard = styled.div`
    border: 1px solid blue;
    width: 300px;
    float: left;
    margin: 10px;
    padding: 10px;
`;

export default CommunityList;