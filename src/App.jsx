import { CoffeeForm, Hero, History, Layout, Stats } from "./components";

function App() {
 const isAuthenticated = false;
 const authenticatedContent = (
   <>
   <Stats/>
   <History/>
   </>
 )
  return (
    <Layout>
      <Hero/>
      <CoffeeForm/>
      {isAuthenticated && (authenticatedContent)}
    </Layout>
       
    
  )
}

export default App
