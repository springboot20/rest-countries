import React from 'react';
import useData from '../../context/DataContext';

type RegionTypes = Array<{ name: string; code: string }>;

const DropdownInput = () => {
  const { selectedRegion, handleRegionChange } = useData();

  const regions: RegionTypes = [
    { name: 'All', code: 'AL' },
    { name: 'Africa', code: 'AF' },
    { name: 'Americas', code: 'AM' },
    { name: 'Antarctic Ocean', code: 'AN' },
    { name: 'Asia', code: 'AS' },
    { name: 'Europe', code: 'EU' },
    { name: 'Oceania', code: 'OC' },
    { name: 'Polar', code: 'PO' },
  ];

  return (
    <select value={selectedRegion} onChange={handleRegionChange} placeholder='Filter by Region'>
      {regions.map((region) => (
        <option key={region.name} value={region.name}>
          {region.name}
        </option>
      ))}
    </select>
  );
};

export default DropdownInput;
