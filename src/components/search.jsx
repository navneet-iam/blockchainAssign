import './SearchBar.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className='simple'>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default SearchBar;
