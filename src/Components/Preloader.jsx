import {motion} from 'framer-motion';
import { slideUp, opacity } from './Anime';
import { useEffect, useState } from 'react';
import '../Styles/Preloading.css'

const Preloading = () => {
  const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(()=> {
      if(index === words.length-1) return
      setIndex(index +1)
    }, index === 0 ? 1000 : 150)
  }, [index])


  return (
    <motion.div initial='initial ' exit='exit' variants={slideUp} className="global absolute left-0 top-0 z-50  bg-black text-white flex items-center justify-center h-[100vh] w-full">
      <motion.p initial='initial' animate='enter' variants={opacity}  className='flex gap-4 items-center align-center'><span className=' w-[1rem] h-[1rem] rounded-full bg-white inline-block'></span><span>{words[index]}</span></motion.p>
    </motion.div>
  );
};

export default Preloading;