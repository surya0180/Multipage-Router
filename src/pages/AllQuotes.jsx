import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    {id: 'q1', author: 'surya', text: 'Somethings never change!'},
    {id: 'q2', author: 'teja', text: 'Hello World!'},
    {id: 'q3', author: 'bannu', text: 'FF ka King hu mai!'},
];

const AllQuotes = () => {
    return(
        <QuoteList quotes={DUMMY_QUOTES} />
    );
};

export default AllQuotes;