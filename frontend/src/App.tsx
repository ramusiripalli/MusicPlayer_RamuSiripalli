import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { Button } from "./components/ui/button"

function App() {


  return (
  <>
 <header>
      <SignedOut>
        <SignInButton>
          <Button>Sign In</Button> 
          </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    <div className="text-5xl text-red-500">Hi</div>
  </>
  )
}

export default App
