import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const axios = require('axios');

class RecipesIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  async componentDidMount() {
    const {data} = await axios.get('http://localhost:5000/recipes');
    this.setState({recipes: data});
  }

  render() {
    const {recipes} = this.state;
    if (recipes.length !== 0) {
      console.log(recipes)
      return (
        <ul>
          {recipes.map((recipe, idx) => (
            <li key={idx}>
              <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
            </li>
          ))}
        </ul>
      );
    } else {
      return <></>
    }
  }
}

export default RecipesIndex;
