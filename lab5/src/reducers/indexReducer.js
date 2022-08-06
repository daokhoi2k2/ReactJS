import {combineReducers} from 'redux' 
import bookReducer from './bookReducer';
import bookCateReducer from './bookCateReducer';
export default combineReducers({      
    bookCate: bookCateReducer,  
    book: bookReducer,      
})
