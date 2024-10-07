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
      className='flex flex-col flex-shrink-0 flex-grow-0 basis-[300px] max-w-full rounded-lg bg-white dark:bg-dark-blue-dark-DME overflow-hidden hover:scale-105 transition-all border'>
      <div className='relative h-40 border-b'>
        <img src={country.flag} alt='' className='object-cover no-repeat w-full h-full' />
      </div>
      <div className='p-4'>
        <NavLink
          to={`/${country.name}`}
          className='card-title dark:text-white text-xl font-medium hover:underline'>
          {country.name}
        </NavLink>
        <p className='card-population font-medium dark:text-white'>
          Population:{' '}
          <span className='text-dark-blue-dark-LMT dark:text-white font-thin'>
            {formatCountryPopulation(country.population)}
          </span>
        </p>
        <p className='font-medium dark:text-white'>
          Region: <span className='font-thin dark:to-dark-gray-LMT'>{country.region}</span>
        </p>
        <p className='font-medium dark:text-white'>
          Capital: <span className='font-thin dark:to-dark-gray-LMT'>{country.capital}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default CountriesCard;
