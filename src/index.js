import dva from "dva";

import createHistory from 'history/createHashHistory';
import createLoading from 'dva-loading';

import * as serviceWorker from './serviceWorker';
import './index.css';

// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
app.use(createLoading());

// Dva HMR bug, don't register global model.

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start("#root");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
