import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { isJsonString } from './uils';
import { jwtDecode } from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './redux/slices/userSlide';
import * as UserService from './service/UserService'
import Loading from './components/LoadingComponent/Loading'


 function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const [isPending, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const { storageData, decoded } = handleDecoded()
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData)
    }
    setIsLoading(false)
  }, [])

   const handleDecoded = () => {
    let storageData = localStorage.getItem('access_token')
    let decoded = {}
    if(storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData)
         decoded = jwtDecode(storageData)
    }
    return { decoded , storageData}
   }

   UserService.axiosJWT.interceptors.request.use(async (config) => {
    const currentTime = new Date()
    const { decoded } = handleDecoded()
    if(decoded?.exp < currentTime.getTime() / 1000) {
      try {
        const data = await UserService.refreshToken();
        console.log("New access token:", data?.access_token);
        config.headers['token'] = `Bearer ${data?.access_token}`
    } catch (error) {
        console.error("Error refreshing token:", error);
    }
    }
    return config;
  }, (err) => {
    return Promise.reject(err);
  });

  const handleGetDetailsUser = async (id, token) => {
    let storageRefreshToken = localStorage.getItem('refresh_token')
    const refreshToken = JSON.parse(storageRefreshToken)
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token, refreshToken: refreshToken}))
  }


  return (
    <div>
      <Loading isLoading={isPending}>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const isCheckAuth = !route.isPrivated || user.isAdmin
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            return (
              <Route key={route.path} path={isCheckAuth ? route.path : undefined} element={
                <Layout>
                <Page />
                </Layout>
              } />
            )
          })}
        </Routes>
      </Router>
      </Loading>
    </div>
  )
}

export default App;