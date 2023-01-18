import React from "react";
import {Link, useParams} from "react-router-dom";
import api from '../../utils/apiUnsplash';
import {IPhoto} from '../../interfaces/photo.interface';
import './Photo.css';

function Photo(props: { showLoader: any}) {

    const params: any = useParams()

    const [photo, setPhoto] = React.useState({} as IPhoto);

    React.useEffect(() => {
        props.showLoader(true)
        api.getPhotoId(params.id)
            .then((photo: IPhoto) => {
                setPhoto(photo)
            })
            .catch((err: any) => console.log(err))
            .finally(() => {
                props.showLoader(false)
            })
    }, [params.id])

    return (
        <div className="photo">
            <Link className="photo__goback" to="/">⟵ Go back</Link>
            {
                photo ?
                    <>
                        <img className="photo__image" src={photo?.urls?.regular} alt={photo?.alt_description} />
                        <p className="photo__title">{photo?.user?.name}</p>
                        <p className="photo__subtitle">{photo?.description}</p>
                    </>
                    : <p className="photo__note">No photo with such id</p>
            }
        </div>
    );
}

export default Photo;
