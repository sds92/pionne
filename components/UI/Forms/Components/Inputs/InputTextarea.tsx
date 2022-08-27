import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { validateInputField } from '../../utils/validateInputField';
import FieldWrapper from './FieldWrapper';

export const useInputTextArea = ({
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
    <InputTextArea
      value={value}
      onChange={(newVal) => setValue(newVal)}
      validationData={fieldValid}
      placeholder={placeholder}
      touched={touched}
    />
  );

  return { value, Component, isOk };
};

const InputTextArea = ({
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
  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <>
      <FieldWrapper
        validationData={validationData}
        value={value}
        inputRef={inputRef}
        touched={touched}
      >
        <div className="pt-3 md:pt-5">
          <textarea
            ref={inputRef}
            rows={7}
            className="outline-none bg-transparent h-full w-full resize-none text-caption12 md:text-text20"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
          />
        </div>
      </FieldWrapper>
    </>
  );
};
