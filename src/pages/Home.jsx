import React, { useState } from 'react'
import ExploreMenu from "../components/ExploreMenu/ExploreMenu.jsx";
import './Home.css'
import FoodDisplay from '../components/FoodDisplay/FoodDisplay.jsx'

export default function Home() {
  const [category, setCategory] = useState("All");
  
  return (
    <div>
      <section className="header">
        <div className="header-contents">
          <h1>Delicious Food, Delivered Fast</h1>
          <p>Browse our menu and order your favourites in seconds.</p>
          <a href="#explore-menu">
            <button className="menu-btn">View Menu</button>
          </a>
        </div>
      </section>

      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />

    </div>
  )
}
