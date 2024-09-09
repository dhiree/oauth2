import React from 'react';

const Insights = ({ insights }) => (
    <div>
        <h2>Insights</h2>
        {insights.map(insight => (
            <div key={insight.id}>
                <h3>{insight.name}</h3>
                <p>{insight.values[0].value}</p>
            </div>
        ))}
    </div>
);

export default Insights;
