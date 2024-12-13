import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage.tsx"
import AuthCallBackPage from "./pages/auth-callback/AuthCallBackPage.tsx"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"
import MainLayout from "./layout/MainLayout.tsx"
import ChatPage from "./pages/chat/ChatPage.tsx"


function App() {
  return (
  <>
<Routes>
  <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat" element={<ChatPage/>} />
  </Route>
  <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"} />} />
  <Route path="/auth-callback" element={<AuthCallBackPage />}/>

  
</Routes>
  </>
  )
}

export default App
