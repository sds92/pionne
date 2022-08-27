import clsx from 'clsx';
import React, { RefObject, useEffect, useRef, useState } from 'react';

const FieldWrapper = ({
  children,
  validationData,
  value,
  inputRef,
  touched,
}: {
  children: React.ReactNode;
  validationData: ValidationResult;
  value: string;
  inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement>;
  touched: boolean;
}) => {
  const [errorHeight, setErrorHeight] = useState(0);
  const [errorWidth, setErrorWidth] = useState(0);
  const errorStringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (errorStringRef.current) {
      setErrorHeight(errorStringRef.current.getBoundingClientRect().height);
    }
    if (!validationData.msg || validationData.error === false) {
      setErrorHeight(0);
    }
  }, [validationData.error, validationData.msg]);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const showError = validationData.error;
  if (touched) {
    console.log(validationData);
  }

  return (
    <>
      <div className="relative">
        <div
          onClick={handleFocus}
          className={clsx(
            {
              'border-[#AB4A4A] ': touched && validationData.error,
              'border-[#E2E2E2]': value.length > 0 && !validationData.error,
              'bg-[#F6F6F6] focus-within:bg-white': value.length === 0,
            },
            'w-full border cursor-text h-auto transition-all px-4 md:px-8 rounded-[12px] md:rounded-[16px]'
          )}
        >
          {children}
        </div>
        <div
          style={{
            height: errorHeight,
          }}
          className={clsx(
            { ' ': showError },
            'flex transition-all lg:absolute lg:top-0  lg:translate-y-6 lg:-right-0 lg:translate-x-full lg:pl-6 '
          )}
        >
          {showError && (
            <div
              className="flex animate-fadein h-max pt-2 pb-1 lg:py-0 z-10 text-[#AB4A4A] text-caption12"
              ref={errorStringRef}
            >
              {validationData.msg || 'Неверный формат'}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FieldWrapper;
