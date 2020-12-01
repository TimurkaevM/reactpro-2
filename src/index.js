import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const initialState = {
    photos: [],
    loading: false,
    // favorite: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "start":
            return {
                ...state,
                loading: true
            };

        case "load":
            return {
                ...state,
                photos: action.payload,
                loading: false
            };

        case "delete":
            return {
                ...state,
                photos: state.photos.filter((photo) => photo.id !== action.payload)
            }
        case "make":
            return {
                ...state,
                // favorite: true,
                photos: state.photos.map((photo) => {
                    if(photo.id === action.payload) {
                        return {
                            ...photo,
                            title: "Favorite"
                        }
                    }
                    return photo
                })
            }


        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <div className="container">
              <App />
          </div>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

