// import { clsx } from "clsx";
// import { twMerge } from "tailwind-merge"
const { clsx } = require("clsx");
const { twMerge } = require("tailwind-merge");

 function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const formatNumberWithDecimal = (num) => {
  const [int, decimal] = num.toString().split('.')
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : int
}
// PROMPT: [ChatGTP] create toSlug ts arrow function that convert text to lowercase, remove non-word,
// non-whitespace, non-hyphen characters, replace whitespace, trim leading hyphens and trim trailing hyphens

const toSlug = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]+/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')


    module.exports = { cn, formatNumberWithDecimal, toSlug}