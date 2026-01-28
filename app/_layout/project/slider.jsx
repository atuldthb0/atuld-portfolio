'use client';

import Image from 'next/image';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }) {
  const image =
    type === 'image' ? (
      <Image
        src={source}
        className='object-cover'
        fill={true}
        alt='project items'
      />
    ) : null;
  const video = null;

  return (
    <Center
      className='relative w-1/4 rounded md:h-[60vw] md:min-w-[250px]'
      style={{
        minWidth: '150px',
        height: '20vw',
      }}
    >
      {image}
      {video}
    </Center>
  );
}
