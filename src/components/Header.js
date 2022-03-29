import Button from "./Button";

const Header = ({title,toggleShow, showTask}) => {
  
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color={showTask ? "red" :"purple"} text={showTask ? "Close Add Task Bar" :"Show Add Task Bar"} toggleShow={toggleShow} />
    </header>
  );
};

export default Header;
