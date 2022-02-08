import React,{ useState,useEffect } from 'react'
import axios from 'axios'

const SearchForm = ({catcher,searchWord}) => {
  return (
    <form >
      <label>find countries</label>
      <input value={searchWord} onChange={catcher}/>
    </form>
  )
}

const Countries = ({countries,searchWord,clickHandler}) => {
  const filtered = countries.filter(country => country.name.common.toLowerCase()
  .includes(searchWord.toLowerCase()))

  if (filtered.length > 10) {
    return <div>Too many matched, specify another filter</div>
  } else if (filtered.length > 1) {
    return filtered.map(country => <div key={country.name.common}><Country country={country} show_details={false} clickHandler={clickHandler} /></div>)
  } else if (filtered.length < 1) {
    return <div>No results found to match your search</div>
  }
  return filtered.map(country => <div key={country.name.common}><Country country={country} show_details={true} /></div>)
}

const ListLanguages = ({languages}) => languages.map((language,i) => <li key={i}>{language}</li>)

const Weather = ({city}) => {
  const [weather,setWeater] = useState()
  const api_key = process.env.REACT_APP_API_KEY
  const api_url = "http://api.weatherstack.com/current?access_key=" + api_key + "&query=" + city
  
  useEffect(() => {
    axios.get(api_url)
    .then(data => setWeater(data.data))
  },[])

  if (weather===undefined) {return <div><h2>Weather in {city}</h2><p>loading weather data...</p></div>}
  return (
    <div>
      <h2>Weather in {city}</h2>
      <><b>temperature:</b> {weather.current.temperature} Celsius <br/></>
      <img src={weather.current.weather_icons[0]} alt=""></img><br/>
      <><b>wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir} </>
    </div>
  )
}


const Country = ({country,show_details,clickHandler}) => {
  if (!show_details) {
    return <div><>{country.name.common}</><button value={country.name.common} onClick={clickHandler}>show</button><br/></div>
  } else {
    return (
      <div>
        <h1>{country.name.common}</h1>
        <>capital {country.capital[0]}</><br/>
        <>population {country.population}</><br/>
        <h2>Spoken languages</h2>
        <ul>
          <ListLanguages languages={Object.values(country.languages)} />
        </ul>
        <img src={country.flags.png} width="10%" height="10%" alt="" />
        <Weather city={country.capital[0]} />
      </div>
      
    )
  }
}

const App = () => {
  const [countries,setCountries] = useState([])
  const [searchWord,setSearchWord] = useState("")

  const catchChange = (event) => {
    setSearchWord(event.target.value)
  }

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(data => {
        setCountries(data.data)
      })
  },[])

  return (
    <div>
      <SearchForm catcher={catchChange} searchWord={searchWord}/>
      <Countries countries={countries} searchWord={searchWord} clickHandler={catchChange} />
    </div>
  )
}

export default App;
