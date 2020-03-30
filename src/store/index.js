import { createStore, applyMiddleware, compose } from 'redux';

import { createBrowserHistory as createHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../containers/reducers';
import logger from '../middleware/logger';

const history = createHistory();

const routeMiddleware = routerMiddleware(history);
const middlewares = [logger, routeMiddleware];

const appliedMiddlewares = applyMiddleware(...middlewares);

const store = createStore(rootReducer(history), compose(appliedMiddlewares));

export { store, history };
