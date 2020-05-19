import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import api from 'components/root/api';
import { addCommunity } from 'actions/comActions';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const CommunityPost = ({addCommunity}) => {
    const history = useHistory(); 
    const [ title, setTitle ] = useState('');
    const [ desc, setDesc ] = useState('');
    useEffect(()=>{
        // console.log(userId)
    },[])
    const onChange = async (e) => {
        if (e.target.name === "title"){
            setTitle(e.target.value);
        }
        else{
            setDesc(e.target.value);
        }
        // console.log(history)
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        // await api.postCommunity({'title':title, 'desc':desc})
        //     .then(function(response){
        //         console.log(response)
        //     })
        //     .catch(function(error) {
        //         console.log(error);
        //         alert(error);
        //     })
        addCommunity({'title':title,'desc':desc})
        history.push('/community');
        
        }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">제목</label>
                <input type="text" value={title} name="title" onChange={onChange} />
                
                <label htmlFor="desc">내용</label>
                <input type="textarea" value={desc} name="desc" onChange={onChange} />
                
                <input type="submit" />
            </form>
        </div>
    )
}

CommunityPost.propTypes = {
    addCommunity: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    // userId: state.auth.user.id

})
export default connect(mapStateToProps, {addCommunity})(CommunityPost);