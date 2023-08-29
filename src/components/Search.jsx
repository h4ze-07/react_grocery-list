import { useState, useRef } from 'react'
import { BiCartAdd } from 'react-icons/bi'

const Search = ({list, setList}) => {

    const [newItem, setNewItem] = useState('');

    const handleChange = (value) => {
        setNewItem(value)
    }

    const inputRef = useRef(null);

    const handleAdd = () => {

        if (newItem === '') {
            return false
        }

        const item = {
            id: list.length === 0 ? 0 : list[list.length - 1].id + 1,
            checked: false,
            title: newItem
        }

        setList([...list, item]);
        setNewItem('')
        inputRef.current.value = '';
    }

    return (
        <section className='mb-[20px]'>
            <div className='flex justify-between'>
                <input
                    ref={inputRef} 
                    type="text"
                    placeholder='add item'
                    onChange={(e) => {handleChange(e.target.value)}}
                    className='outline-none py-1 px-3 w-[80%]'
                />
                <button type='button' onClick={handleAdd} className='py-1 px-2 bg-blue-500 w-[20%] flex justify-center'>
                    <BiCartAdd />
                </button>
            </div>
        </section>
    );
}

export default Search;
