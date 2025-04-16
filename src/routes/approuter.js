import React from 'react'
import { Route, Routes } from 'react-router'
import IndexPage from '../pages/IndexPage'
import { ListPage } from '../pages/ListPage'
import { ViewPage } from '../pages/ViewPage'

export default function Approuter() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage/>}/>
      <Route path='/list' element = {<ListPage/>}/>
      <Route path='/view/:id' element= {<ViewPage/>}/>
    </Routes>
  )
}
