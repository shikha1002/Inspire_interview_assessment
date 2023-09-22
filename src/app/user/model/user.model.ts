
export interface user {
    author: string;
    birthday: string;
    birthPlace: string;
    books: book[];
}

export interface book {
    imageUrl: string;
    title: string;
    purchaseLink: string;
    PublishDate: string;
}

export const initialValue = {
    imageUrl: '',
    title: '',
    purchaseLink: '',
    PublishDate: ''
}