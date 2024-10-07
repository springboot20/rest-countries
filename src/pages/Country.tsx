import CountryCard from "../component/country-card/CountryCard";
import useData from "../context/DataContext";
import LinkButton from "../component/icon/LinkButton";
import Icon from "../component/icon/Icon";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Country = () => {
  const { displayCountries } = useData();
  const navigate = useNavigate();

  return (
    <>
      <section className="relative top-[8rem] px-11">
        <div className="max-w-7xl mx-auto">
          <LinkButton
            className="back-btn flex items-center outline-none rounded-md max-w-fit px-5 py-2 gap-2"
            onClick={() => navigate(-1)}
            name={"Back"}
            icon={
              <Icon icon={faArrowLeft} className="h-4 text-dark-blue-dark-LMT dark:text-white" />
            }
          />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mt-10 items-center">
            <CountryCard countries={displayCountries} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Country;
