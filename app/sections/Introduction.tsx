'use client';

import { useEffect, useRef, useState } from 'react';
import Tag from '../components/Tag';
import { useScroll, useTransform } from 'motion/react';

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split('');

const Introduction = () => {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ['start end', 'end end'],
  });
  const [currentWord, setCurrentWord] = useState(0);

  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);
  useEffect(() => {
    wordIndex.on('change', (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className='py-28 lg:py-40'>
      <div className='fcontainer'>
        <div className='sticky top-20 md:top-28 lg:top-40'>
          <div></div>
          <div className='flex justify-center'>
            <Tag>Introducing Layers</Tag>
          </div>

          <div className='text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10 xl:max-w-6xl mx-auto'>
            <span>Your creative process deserves better.</span>{' '}
            <span className='text-white/15'>
              {words.map((word, wordIndex) => (
                <span
                  className={` ${
                    wordIndex < currentWord &&
                    'text-white transition duration-500'
                  }`}
                  key={wordIndex}
                >{`${word}`}</span>
              ))}
            </span>
            <span className='text-lime-400 block'>
              That&apos;s why we built layers
            </span>
          </div>
        </div>
        <div className='h-[150vh]' ref={scrollTarget}></div>
      </div>
    </section>
  );
};

export default Introduction;
