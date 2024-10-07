import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Country as SingleCountry } from '../../types';
import Button from '../icon/Button';

type CountriesProps = {
  countries: SingleCountry[];
};

function formatPopulation(population: number | undefined) {
  return population?.toString().replace(/B(?=(\d{3})+(?!\d))/g, ',');
}

const CountryCard = ({ countries }: CountriesProps) => {
  const { name } = useParams();
  const country = countries.find((country) => country.name === name);

  const languages = country?.languages.map((l) => l.name);
  const joinedLanguages = languages?.join(', ');
  const navigate = useNavigate();

  const borderCountries =
    country?.borders &&
    country?.borders
      .map((borderCode) => {
        const borderCountry = countries.find((country) => country.alpha3Code === borderCode);

        return borderCountry ? borderCountry.name : null;
      })
      .filter((borderName) => borderName !== null);

  return (
    <React.Fragment>
      <div className='relative overflow-hidden rounded-lg col-span-2 border'>
        <img src={country?.flag} alt='' className='object-cover bg-no-repeat h-full w-full' />
      </div>
      <div className='col-span-2'>
        <h1 className='text-lg sm:text-3xl font-medium text-dark-blue-dark-DME dark:text-white'>
          {country?.name}
        </h1>
        <div className='grid grid-cols-2 mt-4'>
          <div className='space-y-1'>
            <p className='text-lg font-medium dark:text-white'>
              Native Name:{' '}
              <span className='text-base text-dark-blue-dark-LMT dark:text-white font-normal'>
                {country?.nativeName}
              </span>
            </p>
            <p className='text-lg font-medium dark:text-white'>
              Population:{' '}
              <span className='text-base text-dark-blue-dark-LMT dark:text-white font-normal'>
                {formatPopulation(country?.population)}
              </span>
            </p>
            <p className='text-lg font-medium dark:text-white'>
              Region:{' '}
              <span className='text-base text-dark-blue-dark-LMT dark:text-white font-normal'>
                {country?.region}
              </span>
            </p>
            <p className='text-lg font-medium dark:text-white'>
              Sub Region:{' '}
              <span className='text-base text-dark-blue-dark-LMT dark:text-white font-normal'>
                {country?.subregion}
              </span>
            </p>
            <p className='text-lg font-medium dark:text-white'>
              Capital:{' '}
              <span className='text-base text-dark-blue-dark-LMT dark:text-white font-normal'>
                {country?.capital}
              </span>
            </p>
          </div>
          <div className='space-y-1'>
            <p className='text-lg font-medium dark:text-white'>
              Top Level Domain:{' '}
              <span className='text-base text-dark-blue-dark-LMT dark:text-white font-normal'>
                {country?.region}
              </span>
            </p>
            <p className='text-lg font-medium dark:text-white'>
              Currencies:{' '}
              <span className='text-base text-dark-blue-dark-LMT dark:text-white font-normal'>
                {country?.subregion}
              </span>
            </p>
            <p className='text-lg font-medium dark:text-white'>
              Languages:{' '}
              <span className='text-base text-dark-blue-dark-LMT dark:text-white font-normal'>
                {joinedLanguages}
              </span>
            </p>
          </div>
        </div>

        <div className='flex items-center flex-shrink-0 gap-6 mt-10 w-full'>
          <p className='text-base sm:text-lg font-semibold dark:text-white block flex-shrink-0'>
            Border Countries:{' '}
          </p>
          <div className='overflow-auto'>
            {borderCountries &&
              borderCountries.map((borderName, index) => (
                <Button
                  onClick={() => navigate(`/${borderName}`)}
                  key={index}
                  className='border-btn inline-block text-base font-normal px-4 py-2 rounded-md bg-white dark:text-white dark:bg-dark-blue-dark-DME !text-ellipsis mt-3 mx-2'>
                  {borderName}
                </Button>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CountryCard;
