import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor } from './configureStore'
import App from './App'
import Selopt from './CRUDManager'


const Root = ({ store }) => (
ReactDOM.render((
	<PersistGate persistor={persistor}>
		<Provider store={store}>
			<BrowserRouter>
			<div>
      			<Route exact path="/" component={App} />
        		<Route exact path="/CRUDManager" component={Selopt}/>
    		</div>
    		</BrowserRouter>
		</Provider>
	</PersistGate>
), document.getElementById('root'))
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root