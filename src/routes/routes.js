import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter , Route} from "react-router-dom";
import Home from '../components/Home';
import CRUDManager from '../components/CRUDManager'
import { Provider } from 'react-redux';
import { persistor } from '../Store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
const Root = ({ store }) => (
    ReactDOM.render((
        <PersistGate persistor={persistor}>
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Home" component={CRUDManager}/>
                    </div>
                </BrowserRouter>
            </Provider>
        </PersistGate>
    ), document.getElementById('root'))
);



export default Root