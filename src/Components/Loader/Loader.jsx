import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <ThreeCircles
        height="100"
        width="100"
        color="#141D2F"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </div>
  );
};

export default Loader;
