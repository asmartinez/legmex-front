import { ChangeEvent } from 'react';

export type TypeFooter = 'line' | 'card';

export type HTMLEvent = ChangeEvent<HTMLInputElement>;

export type TypeLayout = '/admin' | '/auth' | '/public';

export type TextViewer = {
   text: string
};

export interface SearchOptions {
   globalText: string;
   fields?: string;
}

export interface ListResponse<T> {
   entities: T[];
}

export interface RouteCustom {
   label: string;
   iconType: 'bx' | 'ni';
   /**
   * See the references for corresponding icon type.
   * @see https://boxicons.com/ for `bx`
   * @see https://demos.creative-tim.com/argon-dashboard-react/?_ga=2.226579357.1613467959.1605477559-291815678.1604883519#/documentation/icons for `ni`
   */
   iconName: string;
   layout: TypeLayout;
   routerLink?: string;
   component?: React.FC;
}

export interface SidebarCustom {
   backgroundOption: 'light-blue' | 'white';
   items: Array<RouteCustom>;
   showTitle?: boolean;
   isFooterCard?: boolean;
}

export interface BadgeCustom {
   title: string;
   value: string | number;
}

export interface IControlViewer {
   pageNumber: number;
   numberPages: number;
   setPageNumber: number;
}

export interface IPDFViewer {
   path: string;
}

export interface FieldLimitSearch {
   key: string;
   label: string;
   isChecked: boolean
}

/*
   Models
*/
export interface DescriptiveRecord {
   id: number;
   dispositionTitle: string;
   date: string;
   volume: string;
   pageNumbers: number;
   legislationTranscriptOriginal: string;
   legislationTranscriptCopy: string;
   place: string;
   dispositionNumber: string;
   dispositionTypeId: string | number;
   affairId: string | number;
}