import React from 'react';

const MainPage = ({user}) => {
    return (
        <div>

            <h2>Добро пожаловать {user.name} {user.lastname}</h2>

        </div>
    );
};

export default MainPage;