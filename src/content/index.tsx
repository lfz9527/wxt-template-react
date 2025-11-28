

const Content = () => {

    const handleSend = async () => { }

    return (
        <div className='flex justify-end'>
            <button onClick={handleSend} className='p-3 bg-blue-600 text-white rounded-2xl cursor-pointer active:opacity-90'>测试发送消息给background</button>
        </div>
    )
}

export default Content
