import React, { useState } from 'react';
import FacebookLoginButton from './components/FacebookLoginButton';
import Profile from './components/Profile';
import PagesDropdown from './components/PagesDropdown';
import Insights from './components/Insights';
import axios from 'axios';

function App() {
    const [user, setUser] = useState(null);
    const [pages, setPages] = useState([]);
    const [selectedPage, setSelectedPage] = useState(null);
    const [insights, setInsights] = useState(null);

    const responseFacebook = (response) => {
        setUser({
            name: response.name,
            picture: response.picture.data.url,
            accessToken: response.accessToken,
        });
        fetchPages(response.accessToken);
    };

    const fetchPages = (token) => {
        axios.get(`https://graph.facebook.com/me/accounts?access_token=${token}`)
            .then(res => setPages(res.data.data))
            .catch(err => console.error(err));
    };

    const fetchInsights = (pageId) => {
        const since = '2023-01-01';
        const until = '2023-12-31';
        const period = 'total_over_range';
        axios.get(`https://graph.facebook.com/${pageId}/insights?since=${since}&until=${until}&period=${period}&access_token=${user.accessToken}`)
            .then(res => setInsights(res.data.data))
            .catch(err => console.error(err));
    };

    const handlePageSelect = (e) => {
        const pageId = e.target.value;
        setSelectedPage(pageId);
        fetchInsights(pageId);
    };

    return (
        <div className="App">
            {!user ? (
                <FacebookLoginButton responseFacebook={responseFacebook} />
            ) : (
                <div>
                    <Profile user={user} />
                    <PagesDropdown pages={pages} handlePageSelect={handlePageSelect} />
                    {insights && <Insights insights={insights} />}
                </div>
            )}
        </div>
    );
}

export default App;
