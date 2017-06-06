import { createStore } from 'redux';

import app from './reducers';

const configureStore = () => createStore(app)

export default configureStore;
