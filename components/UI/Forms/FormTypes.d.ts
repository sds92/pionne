type Error = string;
type ValidationResult = {
  error: boolean;
  msg: string;
};
type ValidationSchema = {
  minLength?: {
    value: number;
    errorMsg: string;
  };
  maxLength?: {
    value: number;
    errorMsg: string;
  };
  regex?: {
    value: RegExp;
    errorMsg: string;
  };
};
