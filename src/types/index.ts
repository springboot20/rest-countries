import React from 'react';

export type DataContextProps = {
  children: React.ReactNode;
};

export type ThemeContextProps = {
  children: React.ReactNode;
};

export type DataContextType = {
  searchCountry: string;
  selectedRegion: string;
  searchResultMessage: string;
  displayCountries: Array<Country>;
  handleFilteredCountries: (region: string, term: string) => void;
  handleRegionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ThemeContextType = {
  activeMode: boolean;
  activateTheme: (theme: string) => void;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
};

export type Country = {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital?: string;
  altSpellings?: string[];
  subregion: string;
  region: string;
  population: number;
  latlng?: number[];
  demonym: string;
  area?: number;
  timezones: string[];
  borders?: string[];
  nativeName: string;
  numericCode: string;
  gini?: string | number;
  flags: {
    svg: string;
    png: string;
  };
  currencies?: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    iso639_1?: string;
    iso639_2?: string;
    name?: string;
    nativeName?: string;
  }[];
  translations: {
    br?: string;
    pt?: string;
    nl?: string;
    hr?: string;
    fa?: string;
    de?: string;
    es?: string;
    fr?: string;
    ja?: string;
    it?: string;
    hu?: string;
  };
  flag: string;
  regionalBlocs?: {
    acronym: string;
    name: string;
    otherAcronyms?: Array<string>;
    otherNames?: Array<string>;
  }[];
  cioc?: string;
  independent: boolean;
};

export type Countries = {
  countries: Country[];
};

export type FilteredCountries<T> = {
  filteredCountries: T[];
};