import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import api from 'components/root/api';
import { detailCommunity } from 'actions/comActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const CommunityDetail = ({community, detailCommunity}) => {
    // useParams를 써서 params가 담긴 object를 반환 받을 수 있다.
    const slug = useParams();
    const history = useHistory();
    useEffect(()=>{
        detailCommunity(slug.id)
    },[])

    const _deleteCommnunity = async() => {
        await api.deleteCommunity(slug.id)
        history.push('/community');
    }

    return (
        <div>
            {
                community.community.id ? 
                    <div>
                        <p>{community.community.id}번 째 글입니다.</p>
                        <p>제목 : {community.community.title}</p>
                        <p>내용 : {community.community.title}</p>
                    </div>

                : <p>"loading..."</p>
            }
            <button onClick={_deleteCommnunity}>삭제</button>
            
        </div>

    )
}


CommunityDetail.propTypes = {
    community: PropTypes.object.isRequired,
    detailCommunity: PropTypes.func.isRequired 
}

const mapStateToProps = state => ({
    community: state.community
})

export default connect(mapStateToProps, {detailCommunity})(CommunityDetail);