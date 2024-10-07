import React, { useState } from 'react';
import CountriesCard from '../component/country-card/CountriesCard';
import useData from '../context/DataContext';
import Navbar from '../component/navigation/Navbar';
import SearchNavigation from '../component/navigation/SearchNavigation';
import Pagination from '../component/pagination/Pagination';
import { motion } from 'framer-motion';

const Countries = () => {
  const { displayCountries, searchResultMessage } = useData();
  const itemsPerPage = 25;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentCountries = displayCountries.slice(startIndex, endIndex);
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <React.Fragment>
      <Navbar />
      <SearchNavigation />
      <section
        id='countries'
        className='relative top-[20rem] md:top-[13rem] md:h-[calc(100%-13rem)]'>
        <motion.div
          layout
          initial='hidden'
          animate='visible'
          variants={gridVariants}
          className='grid grid-cols-1 sm:grid-cols-2 gap-4 px-8 lg:grid-cols-3 xl:grid-cols-4 mx-auto max-w-7xl pt-5 pb-[9rem] xl:px-0'>
          {searchResultMessage ? (
            <p className='font-semibold dark:text-white text-dark-blue-dark-LMT text-2xl'>
              {searchResultMessage}
            </p>
          ) : (
            currentCountries.map((country) => {
              return <CountriesCard country={country} key={country.name} />;
            })
          )}
        </motion.div>
      </section>
      <Pagination
        totalItems={displayCountries.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />
    </React.Fragment>
  );
};

export default Countries;
