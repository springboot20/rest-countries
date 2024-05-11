import { useContext, createContext, useState } from 'react';
import { countriesData } from '../data';
import { DataContextProps, DataContextType, Country } from '../types';

const DataContext = createContext({} as DataContextType);

export const DataProvider = ({ children }: DataContextProps) => {
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [searchCountry, setSearchCountry] = useState('');

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const region = event.target.value;
    setSelectedRegion(region);
    setSearchCountry('');
    handleFilteredCountries(region, searchCountry);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchCountry(value);
    handleFilteredCountries(selectedRegion, value);
  };

  const handleFilteredCountries = (region: string, term: string) => {
    if (region === 'All') {
      setFilteredCountries(countriesData);
    } else {
      const filtered = countriesData.filter(
        (country) =>
          (region === '' || country.region === region) &&
          country.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  };

  // const searchedCountry = countriesData.find((country) =>
  //   country.name.toLowerCase().includes(searchCountry.toLowerCase())
  // );

  const displayCountries =
    searchCountry === '' && selectedRegion === '' ? countriesData : filteredCountries;

  const searchResultMessage =
    searchCountry && displayCountries.length === 0 ? `No country found for "${searchCountry}"` : '';

  return (
    <DataContext.Provider
      value={{
        handleFilteredCountries,
        displayCountries,
        selectedRegion,
        handleRegionChange,
        handleSearchChange,
        searchCountry,
        searchResultMessage,
      }}>
      {children}
    </DataContext.Provider>
  );
};
const useData = () => {
  return useContext(DataContext);
};

export default useData;
