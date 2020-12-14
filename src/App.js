import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import HomeComponent from "./components/HomeComponent";
import SignInForm from "./components/SignIn";
import SignUpForm from "./components/Signup";
import WebSocketProvider from "./WebSocket";

function App() {
  return (
    <>
      <Provider store={store}>
        <WebSocketProvider>
          <div className="App">
            <HomeComponent />
            <SignInForm />
            <SignUpForm />
          </div>
        </WebSocketProvider>
      </Provider>
    </>
  );
}

export default App;
