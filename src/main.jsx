import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//import store
import { Provider } from 'react-redux'
import store from './store/store.js'

// importing router
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from 'react-router-dom'

// import all comopnents
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import UserInfo from './components/UserInfo.jsx'

// Creating routes
const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element= {<App />}>
		<Route index element={<Login />} />
		<Route path='/register' element={<Register />} />
		<Route path='/user-info' element={<UserInfo />} />
	</Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store} >
			<RouterProvider router={router}/>
		</Provider>
	</React.StrictMode>,
)
