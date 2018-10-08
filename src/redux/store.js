import { combineReducers, createStore, applyMiddleware } from "redux";
import { renderToStaticMarkup } from "react-dom/server";
import {
  localizeReducer,
  addTranslationForLanguage,
  initialize
} from "react-localize-redux";
import thunk from "redux-thunk";
import todos from "./modules/todos";
import enTranslation from "./translations/en.json";
import jaTranslation from "./translations/ja.json";

const rootReducer = combineReducers({
  localize: localizeReducer,

  // your reducers
  todos
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

// initialize localize
store.dispatch(
  initialize({
    languages: [
      { name: "English", code: "en" },
      { name: "日本語", code: "ja" }
    ],
    translation: {},
    options: {
      renderToStaticMarkup,
      renderInnerHtml: true,
      defaultLanguage: "en"
    }
  })
);
store.dispatch(addTranslationForLanguage(enTranslation, "en"));
store.dispatch(addTranslationForLanguage(jaTranslation, "ja"));

export default store;
