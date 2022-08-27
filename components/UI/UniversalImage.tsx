import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';
import JK_IMAGE_PLACEHOLDER from '../../public/images/JK_IMAGE_PLACEHOLDER.svg';

const UniversalImage = ({
  src,
  alt,
  type,
  devName,
}: {
  src: string;
  alt?: string;
  type: 'JK_IMAGE' | 'DEVELOPER_IMAGE';
  devName?: string;
}) => {
  const [error, setError] = useState(false);
  const [loadingFinished, setLoadingFinished] = useState(false);
  const handleLoaded = () => {
    setLoadingFinished(true);
    // console.log('loading complete ' + Number(new Date()));
  };

  return (
    <>
      <>
        <div
          className={clsx(
            {
              'opacity-0': loadingFinished,
              'opacity-100': !loadingFinished,
            },
            'transition-all pointer-events-none'
          )}
        >
          <div className="w-full h-full z-[100] absolute bg-neutral-200 animate-pulse inset-0"></div>
          <div className="w-full h-full z-[99] absolute bg-white inset-0"></div>
        </div>
      </>

      {!error && (
        <Image
          className="select-none"
          layout="fill"
          objectFit="cover"
          src={src}
          alt={`${alt}`}
          onError={() => {
            setError(true);
            handleLoaded();
          }}
          onErrorCapture={(e) => {
            setError(true);
            handleLoaded();
          }}
          onLoadingComplete={handleLoaded}
          draggable={false}
        />
      )}
      {error && type === 'DEVELOPER_IMAGE' && (
        <div className="w-full flex items-center border rounded-full bg-white justify-center h-full text-text20 text-[#9E9E9E]">
          {devName ? devName[0] : ''}
        </div>
      )}
      {error && type === 'JK_IMAGE' && (
        <Image
          className="select-none"
          src={JK_IMAGE_PLACEHOLDER}
          layout={'fill'}
          objectFit="cover"
          alt={`${alt}`}
          draggable={false}
        />
      )}
    </>
  );
};

export default UniversalImage;
