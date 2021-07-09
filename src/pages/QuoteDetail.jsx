import React from 'react';
import { Link, NavLink, Redirect, Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HiglightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'surya', text: 'Somethings never change!'},
    {id: 'q2', author: 'teja', text: 'Hello World!'},
    {id: 'q3', author: 'bannu', text: 'FF ka King hu mai!'},
];

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <Redirect to="/quotes"/>
    }

    return(
        <section>
            <HiglightedQuote text={quote.text} author={quote.author}/>
            <Route path='/quotes/:quoteId/comments'>
                <Comments />
            </Route>
        </section>
    );
};

export default QuoteDetail;