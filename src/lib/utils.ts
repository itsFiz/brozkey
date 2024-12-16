// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and tailwind-merge
 * This ensures proper handling of Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a price with the specified currency
 * @param price - The price to format
 * @param currency - The currency code (default: 'MYR')
 */
export function formatPrice(price: number, currency: string = 'MYR') {
  return new Intl.NumberFormat('en-MY', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(price);
}

/**
 * Validates an email address
 * @param email - The email address to validate
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Delays execution for the specified number of milliseconds
 * @param ms - The number of milliseconds to delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Creates a debounced function
 * @param fn - The function to debounce
 * @param wait - The number of milliseconds to delay
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: unknown, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), wait);
  };
}

/**
 * Generate a random string of specified length
 * @param length - The length of the string to generate
 */
export function generateRandomString(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Truncates text to a specified length
 * @param text - The text to truncate
 * @param length - The maximum length
 * @param ending - The ending to append (default: '...')
 */
export function truncateText(text: string, length: number, ending: string = '...'): string {
  if (text.length > length) {
    return text.substring(0, length - ending.length) + ending;
  }
  return text;
}

/**
 * Extracts error message from unknown error
 * @param error - The error to extract message from
 */
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  return 'An unexpected error occurred';
}

/**
 * Check if code is running on client side
 */
export const isClient = typeof window !== 'undefined';

/**
 * Check if code is running on server side
 */
export const isServer = typeof window === 'undefined';

/**
 * Safe JSON parse with default value
 * @param value - The value to parse
 * @param defaultValue - The default value to return if parsing fails
 */
export function safeJsonParse<T>(value: string, defaultValue: T): T {
  try {
    return JSON.parse(value) as T;
  } catch {
    return defaultValue;
  }
}

/**
 * Creates a URL-friendly slug from a string
 * @param str - The string to convert to a slug
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Type guard to check if value is not null or undefined
 * @param value - The value to check
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
