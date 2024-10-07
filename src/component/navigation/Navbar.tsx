import useTheme from '../../context/ThemeContext';
import ModeToggle from '../inputs/ModeToggle';

const Navbar = () => {
  const { activeMode, activateTheme, setTheme } = useTheme();

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white z-20 h-24 dark:bg-very-dark-blue-DMB shadow-sm dark:shadow-dark-blue-dark-DME'>
      <div className='h-full px-6 xl:px-0 mx-auto flex gap-6 items-center justify-between max-w-7xl'>
        <header>
          <h1 className='text-lg font-semibold whitespace-nowrap text-dark-blue-dark-LMT dark:text-white'>
            Where in the world?
          </h1>
        </header>
        <ModeToggle setTheme={setTheme} activate={activateTheme} active={activeMode} />
      </div>
    </nav>
  );
};

export default Navbar;
