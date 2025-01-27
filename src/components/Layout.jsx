import Authentication from "./Authentication";
import Modal from "./Modal";
import {useState} from "react";


export default function Layout(props) {
       const [showModal, setShowModal] = useState(false);
       const {children}= props
       const header = (
        <header className="header">
         <div>
            <h1 className="text-gradient text-center">Caffeind</h1>
            <p>For coffee insatiates</p>
         </div>
         <button onClick={() => setShowModal(true)}>
            <p>Sign up</p><i className="fa-solid fa-mug-hot"> </i>
            </button>
            
        </header>
        
        )
    
            const footer = (
                <footer>
                    <p><span className="text-gradient">Caffiend</span> made by <a href="https://github.com/hassan-2002">Hassan</a> using React and Firebase<br />Check out the project on <a target="_black" href="https://github.com/Hassan-2002/caffeind">GitHub</a>!</p>
                </footer>
            )
        
            function handleCloseModal() {
                setShowModal(false)
            }
        
       
       
       
       return (
        <> 
           { showModal && (<Modal handleCloseModal={() => setShowModal(false)}>
             <Authentication />
            </Modal>) 
            } 
         {header}
         <main>
             {children}
         </main>
            
            {footer}
        </>
       )
} 