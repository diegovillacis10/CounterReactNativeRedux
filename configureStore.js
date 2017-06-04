import { createStore } from 'redux';

import app from './src/reducers';

const configureStore = () => createStore(app)

export default configureStore;
