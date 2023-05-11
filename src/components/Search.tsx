import { FC } from 'react'
import{BiSearch} from 'react-icons/Bi'

interface SearchProps {
  
}

const Search: FC<SearchProps> = ({}) => {
  return <div className='flex items-center gap-5 h-5 bg-[#2B3743] w-full text-sm p-5 rounded'>
            <BiSearch className='text-lg'/>
            <input className='w-full bg-inherit focus:outline-none placeholder:text-white ' type="text" placeholder='Search for a country...' />
        </div>
}

export default Search