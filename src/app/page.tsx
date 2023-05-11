import Header from '@/components/Header'
import Image from 'next/image'
import Search from './../components/Search';
import Filter from './../components/Filter';

export default function Home() {
  return (
   <main className='bg-[#202D36] h-screen flex flex-col gap-9'>
      <Header/>
      <div className='flex flex-col items-center mx-5'>
          <Search/>
          <Filter/>
      </div>
   </main>
  )
}
