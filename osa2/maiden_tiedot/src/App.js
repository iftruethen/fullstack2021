import React,{ useState,useEffect } from 'react'
import axios from 'axios'

const Search_form = ({catcher,searchWord}) => {
  return (
    // <form onChange={} >
    <form >
      <label>find countries</label>
      <input value={searchWord} onChange={catcher}/>
    </form>
  )
}

// käytetty taulukon indeksejä avaimina, huono käytäntö, mutta
// rajapinta ei tarjoa elementeille identifiereitä natiivisti
const Countries = ({countries}) => countries.map((country,i) => {
  return <Country key={i} country={country} />
})

const Country = ({country}) => <div><>{country.name.common}</><br/></div>

const App = () => {
  const [countries,setCountries] = useState([])
  const [searchWord,setSearchWord] = useState("")

  const catchChange = (event) => {
    setSearchWord(event.target.value)
    console.log({searchWord})
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
      <Countries countries={countries} />
    </div>
  )
}

export default App;
