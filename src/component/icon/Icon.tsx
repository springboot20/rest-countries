import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, ...rest }: FontAwesomeIconProps) => {
  return <FontAwesomeIcon icon={icon} {...rest} />;
};

export default Icon;
