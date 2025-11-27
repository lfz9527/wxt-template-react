const Content = () => {


    useEffect(() => {
        browser.runtime.connect({
            name: 'sss'
        })
    }, [])


    return <div className='text-red-100'>content</div>
}

export default Content
