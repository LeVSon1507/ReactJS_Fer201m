import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk'; //Redux Thunk là một Middleware cho phép bạn viết các Action trả về một function thay vì một plain javascript object bằng cách trì hoãn việc đưa action đến reducer
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

 
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),

        applyMiddleware(thunk, logger)
    );
 
    return store;
}
