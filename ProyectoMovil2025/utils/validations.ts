// utils/validations.ts

export const validateEmail = (email: string): boolean => {
  // Valida que tenga al menos un @ y algo después (básico para este proyecto)
  return email.includes('@');
};
