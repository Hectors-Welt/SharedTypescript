import { PageMetaData } from '../EgymCloudConnector/PageMetaData';

export class PagedResponse<T> {
    data: T[];
    meta: PageMetaData
}