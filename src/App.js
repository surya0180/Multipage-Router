import { Route, Redirect, Switch } from 'react-router-dom'
import AllQuotes from './pages/AllQuotes'
import NewQuotes from './pages/NewQuote'
import QuoteDetail from './pages/QuoteDetail'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes"/>
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote" exact>
          <NewQuotes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
