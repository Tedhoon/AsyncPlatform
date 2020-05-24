import React from 'react';
import styled from 'styled-components';

function CommunityList(props){
    // useEffect(function(){
    //     console.log(props);
    // })
        
    const {id, author_name, title, desc} = props;
    return (
        <React.Fragment>
        <CommunityCard>
            <p>id : {id}</p>
            <p>author: {author_name}</p>
            <p>title : {title}</p>
            <p>desc : {desc}</p>
        </CommunityCard>
        </React.Fragment>
    )
}

const CommunityCard = styled.div`
    display: inline-block;
    border: 1px solid orange;
    width: 300px;
    margin: 10px;
    padding: 10px;
    color: black;
`;

export default CommunityList;