import Loader from "react-loader-spinner";

const LoaderComponent = () => {
  return (
    <div className="flex justify-center h-screen bg-loader items-center">
      <Loader type="Oval" color="#ffcc00" height={100} width={100} />
    </div>
  );
};

export default LoaderComponent;
