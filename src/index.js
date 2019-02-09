import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import RootReducer from './reducers/index'
import { connect } from 'react-redux'
import Root from './routes/routes'
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(RootReducer)

render(<Root store={store} />, document.getElementById('root'))

const mapStateToProps = (state) => {
    return { ...state }
}

export default connect(mapStateToProps)

