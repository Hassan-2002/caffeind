import { CoffeeForm, Hero, History, Layout, Stats } from "./components";
import { useAuth } from "./context/authContext";
function App() {
  const {globalUser , globalData , isLoading} = useAuth();
 const isAuthenticated = globalUser;
 const isData = globalData && !!Object.keys(globalData || {}).length;
 const authenticatedContent = (
   <>
   <Stats/>
   <History/>
   </>
 )
  return (
    <Layout>
      <Hero/>
      <CoffeeForm isAuthenticated={isAuthenticated}/>
      {isLoading && <p>Loading...</p>}
      {(isAuthenticated && isData) && (authenticatedContent)}
    </Layout>
       
    
  )
}

export default App
