'use client';

import Image from 'next/image';
import Button from '../components/Button';
import Pointer from '../components/Pointer';

import { motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 30 }, { duration: 0.5 }],
    ]);
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -150 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { y: [0, 16, 0], x: -0 },
        { duration: 0.75, ease: 'easeInOut' },
      ],
    ]);
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1 }],
      [rightDesignScope.current, { y: 0, x: -20 }, { duration: 0.5 }],
    ]);
    rightPointerAnimate([]);
  }, []);

  return (
    <section className='py-24 overflow-x-clip'>
      <div className='fcontainer relative'>
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -50 }}
          className='absolute lg:-left-52 xl:-left-32 hidden lg:block'
        >
          <Image
            src='/images/design-example-1.png'
            alt='Design 1'
            width={320}
            height={470}
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className='absolute left-56 top-96 hidden lg:block'
        >
          <Pointer name='Andrea' color='blue' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          ref={rightDesignScope}
          className='absolute -right-52 -top-16 hidden lg:block'
        >
          <Image
            src='/images/design-example-2.png'
            alt='Design 1'
            width={320}
            height={470}
          />
        </motion.div>

        <motion.div
          ref={rightPointerScope}
          className='absolute right-64 -top-4 hidden lg:block'
        >
          <Pointer name='Ronald' color='red' />
        </motion.div>

        <div className='flex justify-center'>
          <div
            className='inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full
                text-white/80 font-semibold'
          >
            ✨ $7.5M seed round raised
          </div>
        </div>

        <h1 className='text-6xl md:text-7xl lg:8xl font-medium text-center mt-6 max-w-5xl mx-auto'>
          Impactful design created effortlessly
        </h1>
        <p className='text-xl text-center text-white/50 mt-8 max-w-2xl mx-auto'>
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow
        </p>
        <form
          action=''
          className='flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto'
        >
          <input
            type='email'
            placeholder='Enter your email'
            className='bg-transparent px-4 md:flex-1 w-full'
          />
          <Button
            className='whitespace-nowrap'
            variant='primary'
            type='submit'
            size='sm'
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
