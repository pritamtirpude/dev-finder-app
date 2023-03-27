import { useQuery } from "@tanstack/react-query";
import { useState, Fragment } from "react";
import { fetchGithubUser } from "./api";
import { Header, SearchInput, UserInfo, Loader, Footer } from "./Components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [searchTexT, setSearchText] = useState("octocat");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      refetch();
    }
  };

  const {
    data: userData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["githubuser", "octocat"],
    queryFn: () => fetchGithubUser(searchTexT),
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Fragment>
      <div className="h-screen w-screen bg-[#f6f8ff] dark:bg-[#141D2F] flex justify-center transition-all">
        <div className="max-w-3xl m-auto md:w-[95%]">
          <Header />
          <SearchInput
            handleSearchChange={handleSearchChange}
            handleKeyDown={handleKeyDown}
            searchTexT={searchTexT}
            refetch={refetch}
          />
          <UserInfo userData={userData} />
        </div>
      </div>
      <Footer />

      <ToastContainer
        autoClose={5000}
        position="bottom-center"
        theme="colored"
        pauseOnHover
        closeOnClick
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
      />
    </Fragment>
  );
};

export default App;
