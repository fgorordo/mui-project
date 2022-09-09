import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Authentication from '../pages/Authentication/Authentication'
import Database from '../pages/Database/Database'
import Functions from '../pages/Functions/Functions'
import Hosting from '../pages/Hosting/Hosting'
import MachineLearning from '../pages/MachineLearning/MachineLearning'
import Storage from '../pages/Storage/Storage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="authentication" element={<Authentication />}></Route>
      <Route path="database" element={<Database />}></Route>
      <Route path="storage" element={<Storage />}></Route>
      <Route path="hosting" element={<Hosting />}></Route>
      <Route path="functions" element={<Functions />}></Route>
      <Route path="machine-learning" element={<MachineLearning />}></Route>
    </Routes>
  )
}

export default AppRouter