import { PageMetaData } from './PageMetaData';

export class PagedResponse<T> {
    data: T[];
    meta: PageMetaData
}