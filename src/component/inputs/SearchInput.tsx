import useData from '../../context/DataContext';

type SearchInputProps = React.ComponentProps<'input'>;

const SearchInput = (props: SearchInputProps) => {
  const { handleSearchChange, searchCountry } = useData();

  return (
    <input
      type='text'
      placeholder='Search for a country'
      {...props}
      value={searchCountry}
      onChange={handleSearchChange}
    />
  );
};

export default SearchInput;
