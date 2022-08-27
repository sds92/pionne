export const validateInputField = ({
  validationSchema,
  value,
}: {
  value: string;
  validationSchema: ValidationSchema;
}) => {
  const { maxLength, minLength, regex } = validationSchema;
  if (value === '') {
    return {
      error: false,
      msg: '',
    };
  }

  if (minLength?.value && value.length < minLength.value) {
    return {
      error: true,
      msg: minLength.errorMsg,
    };
  }
  if (maxLength?.value && value.length > maxLength.value) {
    return {
      error: true,
      msg: maxLength.errorMsg,
    };
  }
  if (regex?.value && !regex.value.test(value)) {
    return {
      error: true,
      msg: regex.errorMsg,
    };
  }
  return {
    error: false,
    msg: '',
  };
};
