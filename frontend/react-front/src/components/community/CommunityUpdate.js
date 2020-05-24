import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import api from 'components/root/api';
import { detailCommunity, putCommunity } from 'actions/comActions';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const CommunityUpdate = ({community,detailCommunity,putCommunity}) => {
    const slug = useParams();
    const history = useHistory(); 
    const [ title, setTitle ] = useState(community.community.title);
    const [ desc, setDesc ] = useState(community.community.desc);
    useEffect(()=>{
        detailCommunity(slug.id);
    },[])
    const onChange = async (e) => {
        if (e.target.name === "title"){
            setTitle(e.target.value);
        }
        else{
            setDesc(e.target.value);
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        putCommunity({'title':title,'desc':desc}, slug.id, history)
        // history.push('/community');
        
        }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <p>업데이트 페이지입니다</p>
                <label htmlFor="title">제목</label>
                <input type="text" value={title} name="title" onChange={onChange} />
                
                <label htmlFor="desc">내용</label>
                <input type="textarea" value={desc} name="desc" onChange={onChange} />
                
                <input type="submit" value="update" />
            </form>
        </div>
    )
}

CommunityUpdate.propTypes = {
    community: PropTypes.object.isRequired,
    putCommunity: PropTypes.func.isRequired,
    detailCommunity: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    community: state.community

})
export default connect(mapStateToProps, {detailCommunity,putCommunity})(CommunityUpdate);