import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/about/about-page.component";
import ContactPage from "./pages/contact/contact-page.component";
import SignupPage from "./pages/signup/signup-page.component";
import LoginPage from "./pages/login/login-page.component";
import VideoPage from "./pages/videos/video-page.component";
import packageData from "./components/packages/packageData.js";
import ShopPage from "./components/shop/shop.component.jsx";
import PackagesPage from "./pages/packages/packages-page.component";
import "./App.css";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

class App extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <BrowserRouter>
                    <div className="App">
                     <Header logo={require('./assets/swan-logo.svg')} />
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="videos" element={<VideoPage />} />
                            <Route path="about" element={<AboutPage />} />
                            <Route path="shop" element={<ShopPage packageData={packageData} />} />
                            <Route path="contact" element={<ContactPage />} />
                            <Route path="signup" element={<SignupPage />} />
                            <Route path="login" element={<LoginPage />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </ErrorBoundary>
        );
    }
}

export default App; 

// To create a store for your React.js app, you can use a library such as Redux or MobX. Both libraries are popular choices for managing application state in React.js and have their own set of best practices.

// Here's an example of how you can set up a store using Redux:

// Install the redux and react-redux packages by running npm install redux react-redux
// Create a new file called store.js in your project directory and set up the store by defining the initial state, actions, and reducers.
// Copy code
// import { createStore } from 'redux';

// const initialState = {
//     packages: [
//         { name: '1 Session', price: '$250', sessions: '1' },
//         { name: '5 Sessions', price: '$1,125', sessions: '5' },
//     ]
// };

// const packageReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'ADD_PACKAGE':
//             return {
//                 ...state,
//                 packages: [...state.packages, action.payload]
//             };
//         case 'DELETE_PACKAGE':
//             return {
//                 ...state,
//                 packages: state.packages.filter(package => package.name !== action.payload)
//             };
//         default:
//             return state;
//     }
// };

// const store = createStore(packageReducer);

// export default store;
// Connect your React components to the store by wrapping them in the <Provider> component from react-redux and passing in the store as a prop. In your app.js file:
// Copy code
// import { Provider } from 'react-redux';
// import store from './store';
