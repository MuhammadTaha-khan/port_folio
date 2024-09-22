import VedioTut from './Vediotut';

export default function Home() {
  return (
    <div className='bg-black '>
      <h1 className='text-center font-bold mb-10 text-4xl text-white pt-10'>Welcome To My Portfolio</h1>
      <VedioTut videoSrc={"/shortvideo.mp4"}   />
    </div>
  );
}
