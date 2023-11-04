import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Main from '../Main/Main'
import Portfolio from '../Portfolio/Portfolio'

const RouterPage = () => {
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<Layout />}>
                <Route path='/aboutme' element={<Main />}/>
                <Route path='/portfolio' element={<Portfolio />}/>
            </Route>
        </Routes>
    </div>
  )
}

export default RouterPage