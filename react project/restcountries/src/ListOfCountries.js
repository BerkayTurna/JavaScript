import { useState, useEffect } from "react";

function ListOfCountries() {
    const [countryList, setCountryList] = useState([]);
    const [filteredCountryList, setFilteredCountryList] = useState([]);

    return (
        <div>
            Liste Burada olacak
        </div>
    )
}


export default ListOfCountries;