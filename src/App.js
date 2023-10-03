import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
/* import Zarafes from './images/image12.png' */
import data from './data'

const App = () => {
      const cardData = data.map((items) => {
        return (
          <Card 
            key= {items.id}
            item= {items}
          />
        )
      })

  return (
    <div>
        <Navbar />
        <Hero />
        <section className='cardBox'>
            {cardData}
        </section>
    </div>
  )
}

export default App