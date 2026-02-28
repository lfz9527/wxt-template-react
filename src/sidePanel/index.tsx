import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import useStoreDemo from './store/demo'

import MessageBus from '@/messages/message'

function Counter() {
    const [count, setCount] = useStoreDemo()
    useEffect(() => {
        MessageBus.registerListener()

        const tt = MessageBus.on('tt', ({ data }) => {
            console.log('333333333', data)
        })
        return () => {
            tt()
        }
    }, [])

    return (
        <div>
            <p>Count: {count}</p>
            <button
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>

            <button
                onClick={async () => {
                    try {
                        await MessageBus.sendToTab('t', {
                            info: 2233
                        })
                    } catch (error) {
                        console.log(333, error)
                    }
                }}
            >
                测试消息传递
            </button>
        </div>
    )
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Counter />
    </StrictMode>
)
