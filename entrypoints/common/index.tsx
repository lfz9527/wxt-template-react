import { openSider, closeSider } from '~/entrypoints/common/utils'

const App = () => {

  return (
    <div>
      <button id='openButton' style={{
        background: '#fff',
        borderRadius: '16px',
        width: 100,
        height: 50,
        color: '#000'
      }} onClick={() => openSider({})}>打开侧边栏</button>
      <button style={{
        background: '#fff',
        borderRadius: '16px',
        width: 100,
        height: 50,
        color: '#000'
      }} onClick={() => closeSider({})}>关闭侧边栏</button>
    </div>

  );
};

export default App;
