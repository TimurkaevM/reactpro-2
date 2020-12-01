import React from 'react';
import {useDispatch} from "react-redux";
import {makeFavorite, removePhoto} from "./actions";


function Photo(props) {

    // const favorite = useSelector(state => state.favorite);

    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(removePhoto(id));
    }

    const handleCheck = (id) => {
        dispatch(makeFavorite(id));
    }

    return (
        <div className="photo">
            <div className="photo__item">
                <img key={props.id} src={props.url} alt="404"/>
                <div  className="photo__btn">
                    <button
                        className={`btn ${props.title === "Favorite" ? "favorite" : ""}`}
                        onClick={() => handleCheck(props.id, props.title)}>
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                    <button
                        className="checkbox"
                        type="checkbox"
                        onClick={() => handleDelete(props.id)}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div className={`photo__title ${props.title === "Favorite" ? "favorite__title" : ""}`}>{props.title}</div>
        </div>
    );
}

export default Photo;