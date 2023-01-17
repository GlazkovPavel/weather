export interface IPhoto {
    id: string;
    alt_description: string;
    urls: {
        regular: string;
    };
    user: {
        name: string;
    };
    description: string;
}
