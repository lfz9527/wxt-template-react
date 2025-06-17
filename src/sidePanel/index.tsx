import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@assets/css/tailwind.css'
import {useWxtStorage} from '@/hooks'

import {storage} from '@wxt-dev/storage'

// Define your storage item
const counterState = storage.defineItem('local:counter', {
    fallback: 0
})

function Counter() {
    const [count, setCount] = useWxtStorage(counterState)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Counter />
    </StrictMode>
)
