import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import RootReducer from './reducer'
import { connect } from 'react-redux'
import Root from './router'

const store = createStore(RootReducer)

render(<Root store={store} />, document.getElementById('root'))

const mapStateToProps = (state) => {
  return { ...state }
}

export default connect(mapStateToProps)
