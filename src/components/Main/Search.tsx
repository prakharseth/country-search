import { FC } from 'react'
import{BiSearch} from 'react-icons/Bi'

interface SearchProps {
  
}

const Search: FC<SearchProps> = ({}) => {
  return <div className='flex gap-5 px-5 py-3 items-center bg-[#2B3743] text-sm rounded lg:w-96 w-full '>
  <BiSearch className='text-xl'/>
  <input className='w-full bg-inherit focus:outline-none placeholder:text-white/80' type="text" placeholder='Search for a country...' />
  {/* <input type="text" /> */}
</div>
}

export default Search