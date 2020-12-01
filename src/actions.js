export const loadPhotos = () => {
    return (dispatch) => {
        dispatch({
            type: "start",
        })

        fetch("https://jsonplaceholder.typicode.com/photos/?_limit=20")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "load",
                    payload: json
                })
            })
    }
}

export const removePhoto = (id) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=20/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "delete",
                    payload: id
                })
            })
    }
}

export  const makeFavorite = (id) => {
    return (dispatch) => {
        // dispatch({
        //     type: "update"
        // })

        fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=20/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: "Favorite",
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(() => {
                dispatch({
                    type: "make",
                    payload: id
                })
            })
    }
}