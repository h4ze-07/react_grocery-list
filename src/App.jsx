import { useEffect, useState } from 'react';
import ProductsList from './components/ProductsList';
import Search from './components/Search';
import './index.css';

function App() {

  const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])


  const clearList = () => {
    setList([])
  }

  return (
    <div className='h-screen flex flex-col justify-between'>
      <header className='bg-blue-500'>
        <div className='max-w-[1440px] text-white font-semibold text-[40px] mx-auto py-2 text-center'>
          Grocery list
        </div>
      </header>
      <main className='max-w-[800px] w-full my-16 flex-1 self-center'>
        <div className='border mx-3'>
          <Search list={list} setList={setList} />
          <ProductsList list={list} setList={setList} />
        </div>
      </main>
      <footer className='bg-blue-500 py-3 '>
        <p className='text-[20px] font-bold text-white text-center max-w-[1440px] mx-auto'>Products to buy: {list.length}
        <button
          type='button'
          onClick={clearList}
          className='block text-center mt-4 py-1 px-5 border-2 border-white  mx-auto'
        >Clear list</button>
        </p>

      </footer>
    </div>
  )
}

export default App
