import React,{ useState,useEffect } from 'react'
import axios from 'axios'

const Search_form = ({catcher,searchWord}) => {
  return (
    <form >
      <label>find countries</label>
      <input value={searchWord} onChange={catcher}/>
    </form>
  )
}

const Countries = ({countries,searchWord,i}) => {
  const filtered = countries.filter(country => country.name.common.toLowerCase()
  .includes(searchWord.toLowerCase()))

  if (filtered.length > 10) {
    return <div>Too many matched, specify another filter</div>
  } else if (filtered.length > 1) {
    return filtered.map(country => <div key={country.name.common}><Country country={country} show_details={false} /></div>)
  } else if (filtered.length < 1) {
    return <div>No results found to match your search</div>
  }
  console.log("nyt pitäisi näyttää yksi")
  return filtered.map(country => <div key={country.name.common}><Country country={country} show_details={true} /></div>)
}

const List_languages = ({languages}) => languages.map((language,i) => <li key={i}>{language}</li>)

const Country = ({country,show_details}) => {
  console.log(Object.values(country.languages))
  if (!show_details) {
    return <div><>{country.name.common}</><br/></div>
  } else {
    return (
      <div>
        <h1>{country.name.common}</h1>
        <>capital {country.capital[0]}</><br/>
        <>population {country.population}</><br/>
        <h2>languages</h2>
        <ul>
          <List_languages languages={Object.values(country.languages)} />
        </ul>
        <img src={country.flags.png} width="10%" height="10%" />
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
        // console.log(data.data)
        setCountries(data.data)
      })
  },[])

  // console.log(countries)

  return (
    <div>
      <Search_form catcher={catchChange} searchWord={searchWord}/>
      <Countries countries={countries} searchWord={searchWord}/>
    </div>
  )
}

export default App;
