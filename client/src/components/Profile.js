import React from 'react';

const Profile = ({ user }) => (
    <div>
        <img src={user.picture} alt={user.name} />
        <h1>{user.name}</h1>
    </div>
);

export default Profile;
