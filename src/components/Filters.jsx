import { useState, useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
  const { filters, setFilters} = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  
  //Muestra el estado del rango
  // const [minPrice, setMinPrice] = useState(0)
  const handleChangeMinPrice = (event) => {
    // setMinPrice(event.target.value)
    setFilters(prevState => ({
      ... prevState, 
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) =>
  setFilters(prevState => ({
    ... prevState, 
    category: event.target.value
  }))
  
  return (
    <section className="filters">
        <div>
            <label htmlFor={minPriceFilterId}> Precio a partir de: </label>
            <input
            type="range"
            id={minPriceFilterId}
            min='0'
            max='1000'
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
            />
            <span>${filters.minPrice}</span>
        </div>
        <div>
          <label htmlFor={categoryFilterId}> Category </label>
          <select id={categoryFilterId} onChange={handleChangeCategory}>
            <option value='all'>Todas</option>
            <option value='laptops'>Portátiles</option>
            <option value='smartphones'>Celulares</option>
            <option value='shoes'>Zapatillas</option>
          </select>

        </div>
    </section>
  )
}