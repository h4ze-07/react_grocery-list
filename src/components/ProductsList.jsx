import {AiOutlineCheck, AiOutlineDelete} from 'react-icons/ai';

const ProductsList = ({list, setList}) => {

    const handleCheck = (id) => {
        setList(
            list.map((item) => {
                if (item.id === id) {
                    return {...item, checked: true}
                } else {
                    return item
                }
            })
        )
    }

    const handleDelete = (id) => {
        const newList = list.filter((item => {
            return item.id !== id
        }))

        setList(newList)

    }

    return (
        <section className=''>
            <div className=' bg-blue-500 flex flex-col gap-3'>
                {list.length 
                    ? 
                    list.map((item) => (
                        <div key={item.id} className=''>

                                <p className={`text-lg text-center text-white px-3 font-semibold ${item.checked ? 'bg-green-300 line-through' : null}`}>{item.title}</p>                          

                                <div className='flex justify-center gap-3'>
                                    <button
                                        className='flex items-center justify-center bg-green-500 py-2 px-3' 
                                        onClick={(e) => handleCheck(item.id)}
                                    >
                                        <AiOutlineCheck />
                                    </button>

                                    <button
                                        className='flex items-center justify-center bg-red-500 py-2 px-3'
                                        onClick={(e) => handleDelete(item.id)}
                                    > 
                                        <AiOutlineDelete />
                                    </button>
                                </div>


                        </div>
                    ))
                    :
                    <p className='text-center text-[18px] bg-blue-500 text-white font-semibold py-4'>Your list is empty!</p>
                }  
            </div>
                
                
        </section>
    );
}

export default ProductsList;
