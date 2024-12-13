import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchField.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchField = () => {
    return (
        <>
            <div className="searchFieldContainer">
                <div className="txtField">
                    <input type="text"  className="searchField" />
                </div>
                <div className="srchIcon">
                    <FontAwesomeIcon icon={faSearch}  color="#00A450" />
                </div>
            </div>
        </>
    )
}

export default SearchField;