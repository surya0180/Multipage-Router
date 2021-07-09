import React from 'react';
import { Link, NavLink, Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
    const params = useParams();

    return(
        <section>
            <h1>Quote Details Page</h1>
            <h2>{params.quoteId}</h2>
            <Route path='/quotes/:quoteId/comments'>
                <Comments />
            </Route>
        </section>
    );
};

export default QuoteDetail;