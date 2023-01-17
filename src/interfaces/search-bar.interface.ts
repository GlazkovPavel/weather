export interface ISearchBar {
    isLoader: boolean;
    query: string;
    onSearch: () => void;
    handleSubmit: (e: any) => void;
    setQuery: (value: string) => void;
}
