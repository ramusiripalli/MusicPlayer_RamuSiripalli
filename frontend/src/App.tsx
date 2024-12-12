import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage.tsx"
import AuthCallBackPage from "./pages/auth-callback/AuthCallBackPage.tsx"


function App() {
  return (
  <>
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/auth-callback" element={<AuthCallBackPage />}/>
  <Route />
</Routes>
  </>
  )
}

export default App
