import { Link, LinkProps } from 'react-router-dom';

type LinkButtonProps = {
  name: string;
  icon: React.ReactNode;
} & LinkProps;

const LinkButton = ({ icon, name, ...rest }: LinkButtonProps) => {
  return (
    <Link {...rest}>
      {icon}
      <span className='dark:text-white text-dark-blue-dark-LMT block text-xl font-semibold'>
        {name}
      </span>
    </Link>
  );
};

export default LinkButton;
