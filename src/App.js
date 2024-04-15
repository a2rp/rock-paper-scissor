import React from 'react'
import RockPaperScissor from './rockPaperScissor/RockPaperScissor'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
            <RockPaperScissor />

            <ToastContainer />
        </div>
    )
}

export default App

