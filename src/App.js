import React, { Component } from 'react';
import MyRoutes from './config/routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faHeart, faPhone, faEnvelope, faSearch, faUtensils,
  faThumbsUp, faSortAlphaDown, faUserMinus, faDollarSign, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

library.add(faStar, faHeart, faPhone, faEnvelope, faSearch, faUtensils,
  faThumbsUp, faSortAlphaDown, faUserMinus, faDollarSign, faAngleDoubleRight)

class App extends Component {
  render() {
    return (
      <div>
        <MyRoutes/>
      </div>
    );
  }
}

export default App;