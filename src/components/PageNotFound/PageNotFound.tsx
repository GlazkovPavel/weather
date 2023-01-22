import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../../images/not_found.png';
import './PageNotFound.css';

export function PageNotFound() {
    return (
        <div className="not-found">
            <img className="not-found__image" src={notFoundImage} alt="Not Found"/>
            <h3 className="not-found__title">
                <span>404</span> - Page not Found
            </h3>
            <p className="not-found__text">
                Oh there's nothing here
            </p>
            <Link className="not-found__button" to="/">⟵ Back</Link>
        </div>
    )
}
