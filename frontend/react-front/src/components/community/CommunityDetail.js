import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
// import api from 'components/root/api';
import { detailCommunity, deleteCommunity } from 'actions/comActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CommunityDetail = ({community, detailCommunity, deleteCommunity}) => {
    // useParams를 써서 params가 담긴 object를 반환 받을 수 있다.
    const slug = useParams();
    const history = useHistory();

    useEffect(()=>{
        detailCommunity(slug.id)
        console.log(deleteCommunity)
    },[])

    const deleteCom = () => {
        console.log("이거?")
        deleteCommunity(slug.id, history);
    }

    return (
        <div>
            {
                community.community.id ? 
                    <div>
                        <p>{community.community.id}번 째 글입니다.</p>
                        <p>제목 : {community.community.title}</p>
                        <p>내용 : {community.community.desc}</p>
                    </div>

                : <p>"loading..."</p>
            }
            <button onClick={deleteCom}>삭제</button>
            
        </div>

    )
}


CommunityDetail.propTypes = {
    community: PropTypes.object.isRequired,
    detailCommunity: PropTypes.func.isRequired,
    deleteCommunity : PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    community: state.community
})

export default connect(mapStateToProps, {detailCommunity,deleteCommunity})(CommunityDetail);