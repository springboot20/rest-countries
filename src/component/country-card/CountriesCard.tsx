import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Country } from '../../types/';

function formatCountryPopulation(population: number) {
  return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

type CountriesProps = {
  country: Country;
};

const CountriesCard = ({ country }: CountriesProps) => {
  return (
    <motion.div
      layout
      className='card flex flex-col flex-shrink-0 flex-grow-0 basis-[300px] max-w-full rounded-xl bg-white dark:bg-dark-blue-dark-DME overflow-hidden hover:scale-105 transition-all'>
      <div className='relative'>
        <img src={country.flag} alt='' className='object-cover no-repeat w-full h-[16rem]' />
      </div>
      <div className='p-8'>
        <NavLink
          to={`/${country.name}`}
          className='card-title dark:text-white text-2xl font-semibold hover:underline'>
          {country.name}
        </NavLink>
        <p className='card-population font-semibold dark:text-white'>
          Population:{' '}
          <span className='text-dark-blue-dark-LMT dark:text-white font-normal'>
            {formatCountryPopulation(country.population)}
          </span>
        </p>
        <p className='font-semibold dark:text-white'>
          Region: <span className='font-normal dark:to-dark-gray-LMT'>{country.region}</span>
        </p>
        <p className='font-semibold dark:text-white'>
          Capital: <span className='font-normal dark:to-dark-gray-LMT'>{country.capital}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default CountriesCard;
