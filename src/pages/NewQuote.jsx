import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuotes = () => {
    const history = useHistory();

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);

        history.push('/quotes');
    };


    return(
        <QuoteForm onAddQuote={addQuoteHandler} isLoading={false} />
    );
};

export default NewQuotes;