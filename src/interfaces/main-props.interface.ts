import {ISearchBar} from './search-bar.interface';
import {ICardProps} from './card-props.inteface';

export interface IMainProps {
    searchBar: ISearchBar;
    weather: any;
    card: ICardProps[] | undefined;
}
