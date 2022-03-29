import Button from "./Button";

const Header = () => {
    const handleClick=()=>{
    }
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color="purple" text="Show Add Task Bar" handleClick={handleClick}/>
    </header>
  );
};

export default Header;
