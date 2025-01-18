export default function Layout(props) {
       const {children}= props
       const Header = <header>  </header>
       
       const Footer = <footer></footer>
       
       return (
        <>  {Header}
         <main>
             {children}
         </main>
            
            {Footer}
        </>
       )
}