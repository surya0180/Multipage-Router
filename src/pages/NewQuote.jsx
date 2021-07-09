import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuotes = () => {
    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
    };

    return(
        <QuoteForm onAddQuote={addQuoteHandler} isLoading={false} />
    );
};

export default NewQuotes;