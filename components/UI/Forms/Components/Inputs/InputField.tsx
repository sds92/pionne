import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { validateInputField } from '../../utils/validateInputField';
import FieldWrapper from './FieldWrapper';

const InputField = ({
  onChange,
  value,
  placeholder,
  validationData,
  touched,
}: {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  validationData: ValidationResult;
  touched: boolean;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <FieldWrapper
      validationData={validationData}
      value={value}
      inputRef={inputRef}
      touched={touched}
    >
      <input
        ref={inputRef}
        className="outline-none h-10 md:h-16 bg-transparent text-caption12 md:text-text20 w-full "
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </FieldWrapper>
  );
};

export const useInputField = ({
  placeholder,
  validationSchema,
}: {
  placeholder: string;
  validationSchema: ValidationSchema;
}) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const fieldValid = validateInputField({ validationSchema, value });

  useEffect(() => {
    if (value.length > 0) {
      setTouched(true);
    } else if (value.length === 0) {
      setTouched(false);
    }
  }, [value]);

  const isOk = fieldValid.error === false;

  const Component = (
    <InputField
      value={value}
      touched={touched}
      onChange={(newVal) => setValue(newVal)}
      validationData={fieldValid}
      placeholder={placeholder}
    />
  );

  return { value, Component, isOk };
};
