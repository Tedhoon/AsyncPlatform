import React, { useState } from 'react';
import api from '../root/api';

const CommunityPost = () => {

    const [ title, setTitle ] = useState('');
    const [ desc, setDesc ] = useState('');

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
        await api.postCommunity({'title':title, 'desc':desc});

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

export default CommunityPost;