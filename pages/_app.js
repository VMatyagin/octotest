import App from "next/app";
import { BasicTheme, GlobalStyles } from "../ui/utills/styles";
import { ThemeProvider } from "styled-components";
import { Provider } from "mobx-react";
import { fetchInitialStoreState, DataStore } from "../features/DataStore";
import 'mobx-react-lite/batchingForReactDom'


export default class MyApp extends App {
  state = {
    dataStore: new DataStore(),
  };

  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    const initialStoreState = await fetchInitialStoreState();

    return {
      ...appProps,
      initialStoreState,
    };
  }
  // Hydrate serialized state to store
  static getDerivedStateFromProps(props, state) {
    state.dataStore.hydrate(props.initialStoreState);
    return state;
  }

  render() {    
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={BasicTheme}>
        <Provider dataStore={this.state.dataStore}>
          <GlobalStyles />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    );
  }
}
