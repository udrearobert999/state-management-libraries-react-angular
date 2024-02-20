import { useNavigate } from 'react-router-dom';
import ShoppingButton from './shopping-button';

const NavBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <nav>
      <div className="top-0 z-30 flex w-full items-center bg-blue-500 py-2 shadow-lg">
        <div className="mx-auto flex w-5/6 items-center justify-end">
          <div>
            <ShoppingButton onClick={handleClick} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
