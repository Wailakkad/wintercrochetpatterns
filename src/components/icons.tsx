import React from 'react';

export function SheepIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Sheep head and fluffy wool */}
      <ellipse cx="24" cy="27" rx="14" ry="12" fill="#FFF7EF" stroke="#7A3E55" strokeWidth="2.2" />
      {/* Fluffy top hair puffs */}
      <circle cx="17" cy="18" r="4.5" fill="#FFFFFF" stroke="#7A3E55" strokeWidth="2.2" />
      <circle cx="24" cy="16" r="5" fill="#FFFFFF" stroke="#7A3E55" strokeWidth="2.2" />
      <circle cx="31" cy="18" r="4.5" fill="#FFFFFF" stroke="#7A3E55" strokeWidth="2.2" />
      {/* Ears */}
      <ellipse cx="10" cy="24" rx="4.5" ry="2.8" transform="rotate(-25 10 24)" fill="#F8D7E5" stroke="#7A3E55" strokeWidth="2" />
      <ellipse cx="38" cy="24" rx="4.5" ry="2.8" transform="rotate(25 38 24)" fill="#F8D7E5" stroke="#7A3E55" strokeWidth="2" />
      {/* Cute eyes */}
      <circle cx="19" cy="26" r="2" fill="#582639" />
      <circle cx="29" cy="26" r="2" fill="#582639" />
      <circle cx="18.3" cy="25.3" r="0.7" fill="#FFFFFF" />
      <circle cx="28.3" cy="25.3" r="0.7" fill="#FFFFFF" />
      {/* Rosy blush cheeks */}
      <circle cx="15.5" cy="30" r="2.2" fill="#F8D7E5" opacity="0.9" />
      <circle cx="32.5" cy="30" r="2.2" fill="#F8D7E5" opacity="0.9" />
      {/* Cute nose/mouth */}
      <path d="M22.5 30.5C23.2 31.3 24.8 31.3 25.5 30.5" stroke="#7A3E55" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function YarnBallIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="17" fill="#F8D7E5" stroke="#7A3E55" strokeWidth="2.2" />
      {/* Yarn strands */}
      <path d="M12 18C16 23 23 27 35 22" stroke="#7A3E55" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 28C20 33 28 32 35 26" stroke="#7A3E55" strokeWidth="2" strokeLinecap="round" />
      <path d="M19 11C23 18 24 29 20 37" stroke="#7A3E55" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 12C32 20 30 30 25 36" stroke="#7A3E55" strokeWidth="2" strokeLinecap="round" />
      {/* Crochet Hook piercing yarn */}
      <path d="M37 7L13 41" stroke="#9B536E" strokeWidth="3" strokeLinecap="round" />
      <path d="M37 7C38.5 5.5 41 6.5 40 8.5C39 10.5 37 10 36 9" stroke="#9B536E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SnowflakeIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="12" y1="2" x2="12" y2="22"></line>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07"></line>
    </svg>
  );
}

export function StarIcon({ className = 'w-4 h-4 text-amber-400' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
