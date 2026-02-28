import contentMessages from "@/messages/content"

const Content = () => {

    const handleSend = async () => {
        contentMessages.send('tt', {
            test: "3444"
        })
    }
    const handleSendBg = async () => {
        contentMessages.send('content_bg', {
            test: "3444"
        })
    }

    useEffect(() => {
        contentMessages.on('t', ({ data }) => {
            console.log(111, data)
        })
    }, [])

    return (
        <div style={{
            position: 'fixed',
            zIndex: 999,
            right: 0
        }}>
            <button onClick={handleSend}>content发送消息给siderPanel</button>
            <button onClick={handleSendBg}>content发送消息给background</button>
        </div>
    )
}

export default Content
