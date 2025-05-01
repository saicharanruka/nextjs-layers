import figmaIcon from '@/public/images/figma-logo.svg';
import notionIcon from '@/public/images/notion-logo.svg';
import slackIcon from '@/public/images/slack-logo.svg';
import relumeIcon from '@/public/images/relume-logo.svg';
import githubIcon from '@/public/images/github-logo.svg';
import framerIcon from '@/public/images/framer-logo.svg';

const integrations = [
  {
    name: 'Figma',
    icon: figmaIcon,
    description: 'Figma is a collaborative interface design tool.',
  },
  {
    name: 'Notion',
    icon: notionIcon,
    description: 'Notion is an all-in-one workspace for notes and docs.',
  },
  {
    name: 'Slack',
    icon: slackIcon,
    description: 'Slack is a powerful team communication platform.',
  },
  {
    name: 'Relume',
    icon: relumeIcon,
    description: 'Relume is a no-code website builder and design system.',
  },
  {
    name: 'Framer',
    icon: framerIcon,
    description: 'Framer is a professional website prototyping tool.',
  },
  {
    name: 'GitHub',
    icon: githubIcon,
    description: 'GitHub is the leading platform for code collaboration.',
  },
];

export type IntegrationsType = typeof integrations;

import React from 'react';
import Tag from '../components/Tag';
import IntegrationsColumn from '../components/IntegrationsColumn';

const Integrations = () => {
  return (
    <section className='py-24 overflow-hidden'>
      <div className='fcontainer'>
        <div className='grid lg:grid-cols-2 lg:gap-10'>
          <div>
            <Tag>Integrations</Tag>
            <h2 className='text-6xl font-medium mt-6'>
              Plays well with <span className='text-lime-400'>others</span>
            </h2>
            <p className='text-white/50 mt-4 text-lg'>
              Layers seamlessly connects wth your favorite tools, making it easy
              to plug into any workflow and collaborate across platforms.
            </p>
          </div>
          <div
            className='h-[400px] lg:h-[800px] lg:mt-0 mt-8 grid md:grid-cols-2 overflow-hidden gap-5
         [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'
          >
            <IntegrationsColumn integrations={integrations} />
            <IntegrationsColumn
              integrations={integrations.slice().reverse()}
              className='hidden md:flex'
              reversed={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
