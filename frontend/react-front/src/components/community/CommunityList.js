import React from 'react';
import './CommunityList.css';

function CommunityList(props){
    // useEffect(function(){
    //     console.log(props);
    // })
        
    const {id, title, desc } = props;
    return (
        <div className={"com_card"}>
            <p>id : {id}</p>
            <p>title : {title}</p>
            <p>desc : {desc}</p>
        </div>
    )
}

export default CommunityList;