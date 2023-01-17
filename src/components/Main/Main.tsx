import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import Card from '../Card/Card';
import {ICardProps} from '../../interfaces/card-props.inteface';
import {IMainProps} from '../../interfaces/main-props.interface';


function Main(props: IMainProps) {
    return(
        <div>
            <SearchBar query={props.searchBar.query} setQuery={props.searchBar.setQuery} onSearch={props.searchBar.onSearch}
                       handleSubmit={props.searchBar.handleSubmit} isLoader={props.searchBar.isLoader}/>
            <ul className="card">
                {props.card?.map((card: ICardProps) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        imgSrc={card.urls.regular}
                        title={`${card.user.name}: ${card.description}`}
                        alt={card.description}
                    />
                ))}
            </ul>
        </div>
    );

}

export default Main;
