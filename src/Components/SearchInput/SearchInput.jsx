import { iconSearch } from "../../assets";
import { toast } from "react-toastify";

const SearchInput = ({
  refetch,
  handleSearchChange,
  handleKeyDown,
  searchTexT,
}) => {
  const validateText = () => {
    if (searchTexT === "") {
      toast.error("Please input some text to get the user info.");
    } else {
      refetch();
    }
  };

  return (
    <div className="w-full mt-4 py-5 bg-[#fefefe] dark:bg-[#182239] rounded-2xl shadow-xl relative">
      <div className="w-full relative">
        <input
          type="search"
          className="w-1/2 md:w-[75%] ml-20 md:ml-14 border-none focus:outline-none bg-transparent placeholder:text-[#4b6a9b] text-[#4b6a9b] md:placeholder:text-[0.7rem] dark:placeholder:text-white dark:text-white"
          placeholder="Search Github username..."
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
        <img
          src={iconSearch}
          alt="Search"
          className="absolute top-[2px] left-8 md:left-4"
        />
      </div>
      <button
        type="button"
        className="bg-[#0079ff] hover:bg-[#60abff] py-3 px-5 absolute right-2 top-2 rounded-md text-white"
        onClick={validateText}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
