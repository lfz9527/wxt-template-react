import { sendMessage } from '@/bridge/content-script'

const Content = () => {


    useEffect(() => {
        console.log(222)
        sendMessage()
    }, [])


    return <div className='text-red-100'>11content</div>
}

export default Content
