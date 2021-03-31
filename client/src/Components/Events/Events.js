import React from 'react'
import './Events.css'



const styles ={
    transition: 'all 1s ease-out'
}

function Events() {

  

    return (
<div className='card-deck'>
       <div className='card-container'>
            <div className='image-conatiner'>
                <img src='/images/logo.png' alt=''></img>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                   <h3> Learn with a language game</h3>
                </div>
                <div className='class-body'>
                   <p> In this online language game, learn with others news words and other expressions meanwhile having fun. </p>
                </div>
                <div className='btn'>
                    <button>
                        <a>
                            View more
                        </a>
                    </button>

                </div>
            </div>
       </div>

    <div className='card-container'>
    <div className='image-conatiner'>
        <img src='/images/boardgame.png' alt=''></img>
    </div>
    <div className='card-content'>
        <div className='card-title'>
        <h3> Play a boardgame learning French</h3>
        </div>
        <div className='class-body'>
        <p> TIme to relax and play a boardgame toegether but attention, only French allowed! </p>
        </div>
        <div className='btn'>
            <button>
                <a>
                    View more
                </a>
            </button>

        </div>
    </div>
    </div>

       <div className='card-container'>
            <div className='image-conatiner'>
                <img src='/images/debate.png' alt=''></img>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                   <h3> Debate on a given subject</h3>
                </div>
                <div className='class-body'>
                   <p> The best opportunity to practice a language is to debate about any subject with other learners </p>
                </div>
                <div className='btn'>
                    <button>
                        <a>
                            View more
                        </a>
                    </button>

                </div>
            </div>
       </div>

</div>
    )
}

export default Events
