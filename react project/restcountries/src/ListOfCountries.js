import { useState, useEffect } from "react";

function ListOfCountries() {
    const [countryList, setCountryList] = useState([]);
    const [filteredCountryList, setFilteredCountryList] = useState([]);

    useEffect(() => {
        const getCountryList = async () => {
            try {
                const res = await fetch('https://restcountries.com/v3.1/all');
                if (!res.ok) {
                    throw new Error('error fetching api');
                }
                const data = await res.json();
                setCountryList(data);
            } catch (error) {
                console.error('Hata:', error);
            }
        };
        getCountryList();
        return () => {

        };
    }, []);
    return (
        <div>
            <div className="country-list">
                {countryList.map(country => (
                    <div className="country-card" key={country.translations.tur.official}>{country.translations.tur.official}</div>
                ))}
            </div>
        </div>
    );
}


export default ListOfCountries;