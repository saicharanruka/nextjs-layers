'use client';
import Image from 'next/image';

import Button from '@/app/components/Button';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'FAQs', href: '#faqs' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className='py-4 lg:py-8 fixed w-full top-0 z-50'>
        <div className='fcontainer max-w-5xl '>
          <div className='border border-white/15  bg-neutral-950/70 backdrop-blur rounded-[27px] md:rounded-full'>
            <div className='grid grid-cols-2 lg:grid-cols-3 px-4 md:pr-2  p-3 items-center'>
              <div>
                <Image
                  src='./logo.svg'
                  alt='Layers logo'
                  className='pl-4 h-9 md:h-auto w-auto'
                  width={140}
                  height={90}
                />
              </div>

              <div className='lg:flex justify-center items-center hidden'>
                <nav className='flex gap-4 font-medium mr-6'>
                  {navLinks.map((link) => (
                    <a key={link.label} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className='justify-end flex gap-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-menu md:hidden'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1='3'
                    y1='6'
                    x2='21'
                    y2='6'
                    className={`origin-left transition ${
                      isOpen && 'rotate-45 -translate-y-1'
                    }`}
                  ></line>
                  <line
                    x1='3'
                    y1='12'
                    x2='21'
                    y2='12'
                    className={`transition ${isOpen && 'opacity-0'}`}
                  ></line>
                  <line
                    x1='3'
                    y1='18'
                    x2='21'
                    y2='18'
                    className={`transition origin-left ${
                      isOpen && '-rotate-45 translate-y-1'
                    }`}
                  ></line>
                </svg>
                <Button
                  className='hidden md:inline-flex items-center'
                  variant='secondary'
                >
                  Log In
                </Button>
                <Button
                  className='hidden md:inline-flex items-center'
                  variant='primary'
                >
                  Sign up
                </Button>
                {/* <button className="border border-white h-12 rounded-full px-6 font-medium">Log In</button>
                    <button className=" bg-[#A3E635] h-12 rounded-full px-6 font-semibold">Sign Up</button> */}
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className='overflow-hidden'
                >
                  <div className='flex flex-col items-center gap-4 py-4'>
                    {navLinks.map((link) => (
                      <a key={link.href} href={link.href} className=''>
                        {link.label}
                      </a>
                    ))}
                    <Button variant='secondary'>Login</Button>
                    <Button variant='primary'>Sign up</Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className='pb-[86px] md:pb-[98px] lg:[130px]'></div>
    </>
  );
}
