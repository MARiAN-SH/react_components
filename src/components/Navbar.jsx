import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className="navList">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/module2">Module 2</Link>
        </li>
        <li>
          <Link to="/module3">Module 3</Link>
        </li>
        <li>
          <Link to="/module4">Module 4</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/color-picker">Color Picker</Link>
        </li>
        <li>
          <Link to="/popup">Popup</Link>
        </li>
        <li>
          <Link to="/todo-list">Todo List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
