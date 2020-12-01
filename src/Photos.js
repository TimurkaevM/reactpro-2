import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Photo from "./Photo";
import {loadPhotos} from "./actions";

function Photos(props) {
    const photos = useSelector(state => state.photos);
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPhotos())
    }, []);

    return (
        <div className="photos">
            {loading ? "Sobar de" : (photos.map(photo => {
                return (
                    <Photo url={photo.url} title={photo.title} id={photo.id} />
                );
            }))
            }
        </div>
    );
}

export default Photos;