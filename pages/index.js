import Head from 'next/head'


export default function Home() {
  return (
    <div className='flex justify-center mt-40'>

      <form action="./api/data" method="post" className='p-4 border-4 w-80 '>

        <label htmlFor="name">Enter Name </label><br />
        <input type="text" name="name" id="name" className='text-slate-900 p-2' /> <br /><br />


        <label htmlFor="age"> Enter Age </label> <br />
        <input type="text" name="age" id="age" className='text-slate-900 p-2' /> <br /><br />

        <input type="submit" value="submit" className='bg-blue-500 border-2 p-2 m-4'/>

      </form>
    </div>
  )
}