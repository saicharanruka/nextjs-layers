'use client';

import React, { Fragment } from 'react';
import Image from 'next/image';

import { type IntegrationsType } from '../sections/Integrations';
import { motion } from 'motion/react';

const IntegrationsColumn = (props: {
  integrations: IntegrationsType;
  className?: string;
  reversed?: boolean;
}) => {
  const { integrations, className, reversed } = props;

  return (
    <motion.div
      initial={{ y: reversed ? '-50%' : 0 }}
      animate={{ y: reversed ? 0 : '-50%' }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className={`flex flex-col gap-3 pb-4 ${className || ''}`}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map((element) => (
            <div
              key={element.name}
              className='bg-neutral-900 border border-white/10 rounded-3xl p-6'
            >
              <div className='flex justify-center'>
                <Image
                  src={element.icon}
                  alt={element.name}
                  className='size-24'
                />
              </div>
              <h3 className='text-3xl text-center mt-6'>{element.name}</h3>
              <p className='text-center text-white/50 mt-2'>
                {element.description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
};

export default IntegrationsColumn;
