import type { SVGProps } from "react";

const C = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <title>C</title>
    <path d="M8 8a4 4 0 1 1 0 8" />
    <path d="M8 8a4 4 0 0 0 0 8" />
  </svg>
);

export { C };
