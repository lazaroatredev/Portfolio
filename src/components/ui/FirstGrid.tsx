
const FirstGrid = () => {
  return (
    <div className="grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto ">
        <div className='lg:col-span-3 md:col-span-6 md:row-span-2 lg:min-h-[60vh]'>
            a
        </div>
        <div className='lg:col-span-2 md:col-span-3 md:row-span-1'>
            b
        </div>
        <div className='lg:col-span-2 md:col-span-3 md:row-span-1'>
            c
        </div>
    </div>
  )
}

export default FirstGrid