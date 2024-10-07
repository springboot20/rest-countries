import React from "react";

type LinkButtonProps = {
  name: string;
  icon: React.ReactNode;
} & React.ComponentProps<"button">;

const LinkButton = ({ icon, name, ...rest }: LinkButtonProps) => {
  return (
    <button {...rest}>
      {icon}
      <span className="dark:text-white text-dark-blue-dark-LMT block text-base font-medium">
        {name}
      </span>
    </button>
  );
};

export default LinkButton;
