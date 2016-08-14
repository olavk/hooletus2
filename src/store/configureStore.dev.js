import {createStore, compose} from 'redux';
import {reduxReactRouter} from 'redux-router';
import {createHistory} from 'history';
import {persistState} from 'redux-devtools';
import rootReducer from '../reducers';
import DevTools from '../routes/root/DevTools';
import routes from '../routes/root/routes';

const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  ),
  reduxReactRouter({
    routes,
    createHistory,
  })
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}
