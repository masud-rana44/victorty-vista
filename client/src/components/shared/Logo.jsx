import logo from "../../../public/logo.svg";
const Logo = () => {
  return (
    <div className="flex items-center space-x-1">
      <img src={logo} alt="logo" />
      <h1 className="text-2xl font-bold">WinWave</h1>
    </div>
  );
};

export default Logo;
