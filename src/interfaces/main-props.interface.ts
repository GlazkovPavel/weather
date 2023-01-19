import {ISearchBar} from './search-bar.interface';
import {ICardProps} from './card-props.inteface';
import {ApiLocationResponseInterface} from './api-location-response.interface';
import {IWeatherResponse} from '../components/App/App';

export interface IMainProps {
    searchBar: ISearchBar;
    weather: IWeatherResponse;
    city: ApiLocationResponseInterface;
    card: ICardProps[] | undefined;
}
