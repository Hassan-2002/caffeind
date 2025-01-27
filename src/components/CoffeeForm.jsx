import {coffeeOptions} from '../utils/index'
import { useState } from 'react';
import {Modal, Authentication} from './index'



export default function CoffeeForm(props) {
    const {isAuthenticated} = props;
    const [showModal, setShowModal] = useState(false);
    const [selectedCoffee, setSelectedCoffee] = useState('');
    const [otherCoffeeTypes, setOtherCoffeeTypes] = useState(false);
    const [coffeeCost, setcoffeeCost ] = useState(0);
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    function handlesubmit( ) {
        if(!isAuthenticated){
            setShowModal(true);

            return
        }
      
        
        console.log(selectedCoffee, coffeeCost, hour, min)
    }
    return (
        <>
        { showModal && 
            (<Modal handleCloseModal={() => setShowModal(false)}>
                <Authentication />
            </Modal>
            )
        }
          <div className="section-header ">
            <h3> <i className="fa-solid fa-pencil"></i> Start tracking now</h3>
            

            </div> 
            <h4>Select coffee</h4>
            <div className="coffee-grid">
                   {
                    coffeeOptions.slice(0,5).map((option, optionIndex) =>{
                        return (
                              <button onClick={() => {setSelectedCoffee(option.name)
                                setOtherCoffeeTypes(false)
                              }}
                               className={'button-card' + (selectedCoffee === option.name ? 'coffee-button-selected' : '')} key={optionIndex}>
                                <h4>{option.name}</h4>
                                <h3> {option.caffeine} mg</h3>
                              </button>
                              
                        );
                    })
                   } 
                   <button className= {'button-card' + (otherCoffeeTypes ? 'coffee-button-selected' : '')} onClick={() => {setOtherCoffeeTypes(true); setSelectedCoffee('')}}>
                      <h4>Other</h4>
                   </button>
                   </div> 
                    
                   {otherCoffeeTypes && (
                         <select name="coffee-list" id="coffee-list">
                           <option value="none">Select type</option>
                            {coffeeOptions.map((option, optionIndex) => {
                            return (
                           <option key={optionIndex} value={option.name}>
                             {option.name} ({option.caffeine} mg)
                          </option>
                      );
             })}
                      </select>
                     )}
                    <h4>Add the cost $</h4>
                    <input type="number" name="" id="" placeholder='$' className='w-full' value={coffeeCost} onChange={(e) => {setcoffeeCost(e.target.value)}} />
                  {
                      coffeeCost > 0 && (
                          <h4>Cost: ${coffeeCost}</h4>
                      )
                  }

                    {/* Time since consumption */}
                    <h4>Time since consumption</h4>
                    <div className='time-entry'>
                        
                            <div>
                                <h6>Hours</h6>
                                                           <select name="" id="hours-select" onChange={(e) => {setHour(e.target.value)}}>
                                {
                                    [...Array(24).keys()].map((hour, hourIndex) => {
                                        return (
                                            <option key={hourIndex} value={hour} >{hour}</option>
                                        );
                                    })
                                }

                                                           </select>
                            </div>
                            <div>
                                                           <h6>Minutes</h6>
                                                           <select name="" id="hours-select"  onChange={(e) => {setMin(e.target.value)}}>
                                {
                                    [0,15,30,45].map((min, minIndex) => {
                                        return (
                                            <option key={minIndex} value={min}>{min}</option>
                                        );
                                    })
                                }
                                                           </select>
                            </div>
                            <button type='submit' onClick={handlesubmit}>
                                Add Entry
                            </button>
                        

                    </div>
        </>
    )
}