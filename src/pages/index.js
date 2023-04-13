import Image from 'next/image'
import logo from '../../public/image-qr-code.png'
export default function Home() {
  return (
  <html lang="en">
    <head>
      <meta charset="UTF-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png"></link>
      <title>Frontend Mentor | QR code component</title>
    </head>
    <main className='flex h-screen place-items-center justify-center bg-[#d6e2f0]'>
      <div className=' border w-[350px] h-[525px] bg-white rounded-3xl'>
        <div className=' bg-blue-400 rounded-3xl h-80 m-4 object-fill'>
            <Image 
              className='border object-cover rounded-xl h-80'
              src={logo}
            />
        </div>
        <div className='flex px-5 justify-center text-[#1f3251]'>
          <div className='flex justify-center w-full'>
            <h1 className='font-extrabold text-xl text-center'>Improve your front-end skills by building projects</h1>
          </div>
        </div>
        <div className='flex px-5 pt-3 justify-center'>
          <div className='flex justify-center w-full'>
            <p className='text-center text-[#7b879d]'>
              Scan the QR code to visit Frontend Mentor and take your coding skills to  the next level 
            </p>
          </div>
        </div>
      </div>
    </main>
  </html>
  )
}
