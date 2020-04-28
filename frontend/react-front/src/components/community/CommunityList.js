import React from 'react';

function CommunityList(props){
    // useEffect(function(){
    //     console.log(props);
    // })
        
    const {id, title, desc } = props;
    return (
        <div>
            <p>id : {id}</p>
            <p>title : {title}</p>
            <p>desc : {desc}</p>
            <hr />
        </div>
    )
}

export default CommunityList;