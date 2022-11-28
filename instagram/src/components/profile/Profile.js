import React from 'react'
import header from '../profile/profile.css'

const Profile = () => {
    return (
        <div className='profile'>
            <img className='profile_picture' src="https://previews.123rf.com/images/yupiramos/yupiramos2004/yupiramos200436847/145498923-dise%C3%B1o-de-ilustraci%C3%B3n-de-vector-de-icono-de-personaje-de-avatar-de-param%C3%A9dico-masculino.jpg" alt="https://previews.123rf.com/images/yupiramos/yupiramos2004/yupiramos200436847/145498923-dise%C3%B1o-de-ilustraci%C3%B3n-de-vector-de-icono-de-personaje-de-avatar-de-param%C3%A9dico-masculino.jpg" />
            <div className="description">
                <span className="tag">through_my_quirky_lence</span>
                <div className="info">
                    <div className="like">30 <span id='like'>like</span></div>
                    <div className="follow">1 K <span id='follow'>follower</span></div>
                    <div className="following">2 K <span id='following'>following</span></div>
                </div>
                <div className="user_details">
                    <div className="name">Rohit R Jagtap</div>
                    <div className="status">The world through my lence</div>
                </div>
            </div>
        </div>
    )
}

export default Profile