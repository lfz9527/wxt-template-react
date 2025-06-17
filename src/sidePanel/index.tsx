import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@assets/css/tailwind.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className='text-red-700'>SidePanel</div>
    </StrictMode>
)
