import VedioTut from './Vediotut';

export default function Home() {
  return (
    <div className='bg-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h1 className='text-center font-bold mb-10 text-4xl text-white pt-10'>Welcome To My Portfolio</h1>
      <VedioTut videoSrc={"/shortvideo.mp4"}   />
    </div>
  );
}
