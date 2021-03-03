import { createContext } from 'react';
import { SearchOptions } from 'shared/utils/interfaces';

export const SearchContext = createContext<SearchOptions>({
   globalText: '',
   fields: ''
});
