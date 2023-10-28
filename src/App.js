import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Component/Menu'
import Footer from './Component/Footer'
import Home from './Component/Home'

export default function App() {
  return (
	<div>
		<BrowserRouter>
		<Menu/>
		<Routes>
			
			<Route path='/' element={<Home/>}>Home</Route>
		
		</Routes>
		<Footer/>
		</BrowserRouter>
	</div>
  )
}
