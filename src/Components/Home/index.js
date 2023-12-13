import {Component} from 'react'
import Header from '../Header'
import MenuCategory from '../MenuCategory'
import Item from '../Item'

import './index.css'

class Home extends Component {
  state = {menuCategories: [], categoryItem: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const menuGenre = data[0].table_menu_list.map(each => ({
      menuCategory: each.menu_category,
      menuCategoryId: each.menu_category_id,
      categoryList: each.category_dishes,
    }))
    const category = menuGenre.filter(each => each.menu_category_id === 11)
    console.log(category)
    this.setState({menuCategories: menuGenre, categoryItem: category})
  }

  getMenuCategoryId = id => {
    const menuCategories = this.state
    const category = menuCategories.menuCategories.filter(
      each => each.menuCategoryId === id,
    )

    const updatedData = category[0].categoryList.map(each => ({
      addOnCat: each.addonCat,
      dishAvailability: each.dish_Availability,
      dishCalories: each.dish_calories,
      dishCurrency: each.dish_currency,
      dishDescription: each.dish_description,
      dishImage: each.dish_image,
      dishPrice: each.dish_price,
      nextUrl: each.nxturl,
      dishId: each.dish_id,
      dishName: each.dish_name,
    }))
    console.log(menuCategories)

    this.setState({categoryItem: updatedData})
  }

  render() {
    const {menuCategories, categoryItem} = this.state

    console.log(menuCategories)

    return (
      <div className="Home-container">
        <Header />
        <ul className="categories_list">
          {menuCategories.map(each => (
            <MenuCategory
              menuCategories={each}
              key={each.menuCategoryId}
              getMenuCategoryId={this.getMenuCategoryId}
            />
          ))}
        </ul>
        <ul>
          {categoryItem.map(each => (
            <Item categoryList={each} key={each.dishId} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
