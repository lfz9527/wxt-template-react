
const App = () => {

  const send = () => {
    const data = {
      message: '111'
    }
    browser.runtime.sendMessage(data, (response) => { console.log(response) })
  }

  return (
    <div>
      <button style={{
        background: 'red',
        width: 100,
        height: 100,
        color: '#000'
      }} onClick={send}>发送</button>
    </div>

  );
};

export default App;
