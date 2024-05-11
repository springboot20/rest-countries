import Button from '../icon/Button';

type ModeToggleProps = {
  icon: React.ReactNode;
  active: boolean;
  activate: (theme: string) => void;
  setTheme: (theme: string) => void;
};

const ModeToggle = (props: ModeToggleProps) => {
  const { icon, active, setTheme, activate } = props;
  const toggleTheme = () => {
    if (active) {
      activate('light');
      setTheme('light');
    } else {
      activate('dark');
      setTheme('dark');
    }
  };
  return (
    <Button
      className='flex items-center outline-none border-2 rounded-md px-4 py-2 gap-3 dark:bg-very-dark-blue-DMB shadow-dark-blue-dark-DME'
      onClick={toggleTheme}>
      {icon}
      <span className='dark:text-white text-lg font-semibold'>
        {active ? 'Dark Mode' : 'Light Mode'}
      </span>
    </Button>
  );
};

export default ModeToggle;
