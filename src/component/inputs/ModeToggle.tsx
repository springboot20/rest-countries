import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Icon from "../icon/Icon";
import Button from "../icon/Button";

type ModeToggleProps = {
  active: boolean;
  activate: (theme: string) => void;
  setTheme: (theme: string) => void;
};

const ModeToggle = (props: ModeToggleProps) => {
  const { active, setTheme, activate } = props;
  const toggleTheme = () => {
    if (active) {
      activate("light");
      setTheme("light");
    } else {
      activate("dark");
      setTheme("dark");
    }
  };
  return (
    <Button
      className="flex items-center outline-none border-2 rounded-md px-3 py-2 gap-3 dark:bg-very-dark-blue-DMB shadow-dark-blue-dark-DME"
      onClick={toggleTheme}
    >
      <Icon
        icon={active ? faMoon : faSun}
        className={`mode-icon ${active ? "text-white" : "text-gray-800"}`}
      />
      <span className={`hidden sm:block dark:text-white text-base font-medium`}>
        {active ? "Dark Mode" : "Light Mode"}
      </span>
    </Button>
  );
};

export default ModeToggle;
