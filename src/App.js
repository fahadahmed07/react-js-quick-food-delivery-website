import React, { Component } from 'react';
import MyRoutes from './config/routes'
import { Provider } from 'react-redux';
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faStar, faHeart, faPhone, faEnvelope, faSearch, faUtensils,
  faThumbsUp, faSortAlphaDown, faUserMinus, faDollarSign, faAngleDoubleRight, faPlus,
  faConciergeBell, faCommentAlt, faInfoCircle, faShoppingBasket, faTimes, faSpinner, faTruck, faTasks,
} from '@fortawesome/free-solid-svg-icons';

library.add(faStar, faHeart, faPhone, faEnvelope, faSearch, faUtensils,
  faThumbsUp, faSortAlphaDown, faUserMinus, faDollarSign, faAngleDoubleRight, faPlus,
  faConciergeBell, faCommentAlt, faInfoCircle, faShoppingBasket, faTimes, faSpinner, faTruck, faTasks,)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <MyRoutes />
        </div>
      </Provider>
    );
  }
}

export default App;