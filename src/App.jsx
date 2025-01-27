import { CoffeeForm, Hero, History, Layout, Stats } from "./components";

function App() {
 const isAuthenticated = true;
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
      {isAuthenticated && (authenticatedContent)}
    </Layout>
       
    
  )
}

export default App
