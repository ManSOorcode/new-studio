import React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

const withSize = (size?: number | string) => ({
  width: size ?? 24,
  height: size ?? 24,
});

export const WhatsAppIcon: React.FC<IconProps> = ({
  size,
  title = "WhatsApp",
  ...props
}) => (
  <svg
    width={size ?? 24}
    height={size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={title}
    {...props}
  >
    <path
      fill="currentColor"
      d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.18 1.62 6L0 24l6.18-1.62A11.95 11.95 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.6c-1.74 0-3.45-.46-4.95-1.34l-.35-.2-3.66.96.98-3.56-.23-.37A9.63 9.63 0 0 1 2.4 12C2.4 6.86 6.86 2.4 12 2.4c2.56 0 4.97 1 6.78 2.82A9.56 9.56 0 0 1 21.6 12c0 5.14-4.46 9.6-9.6 9.6zm5.33-6.98c-.29-.14-1.72-.85-1.99-.95-.26-.1-.45-.14-.64.15-.19.29-.75.95-.92 1.14-.16.19-.33.21-.61.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.52-.87-2.08-.23-.57-.47-.49-.64-.5l-.55-.01c-.19 0-.49.07-.75.34-.26.26-1 1-1 2.44s1.02 2.83 1.16 3.03c.14.2 2 3.14 4.84 4.4 2.84 1 3.28.66 3.86.62.58-.05 1.88-.77 2.15-1.52.27-.75.27-1.4.19-1.54-.08-.14-.27-.21-.54-.36z"
    />
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({
  size,
  title = "LinkedIn",
  ...props
}) => (
  <svg
    {...withSize(size)}
    viewBox="0 0 24 24"
    fill="#000"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={title}
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({
  size,
  title = "Phone",
  ...props
}) => (
  <svg
    {...withSize(size)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={title}
    {...props}
  >
    <path
      d="M6.6 10.2c1.6 3 3.9 5.3 6.9 6.9l1.8-1.8a1 1 0 01.9-.27c1 .25 2 .38 3 .38a1 1 0 011 1V20a1 1 0 01-1 1C9.163 21 3 14.837 3 6a1 1 0 011-1h2.5a1 1 0 011 1c0 1 .13 2 .38 3 .08.3.01.62-.27.9L6.6 10.2z"
      fill="currentColor"
    />
  </svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = ({
  size,
  title = "Arrow left",
  ...props
}) => (
  <svg
    {...withSize(size)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={title}
    {...props}
  >
    <path
      d="M15 18l-6-6 6-6"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const BurgerIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="button"
      aria-label="Open menu"
    >
      <path
        d="M3 6H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Close Icon (X)
export const CloseIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
  onClick,
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      role="button"
      aria-label="Close menu"
    >
      <path
        d="M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export type IconName =
  | "whatsapp"
  | "linkedin"
  | "instagram"
  | "phone"
  | "arrow-left";

export interface IconSelectorProps extends IconProps {
  name: IconName;
}

const Icon: React.FC<IconSelectorProps> = ({ name, ...props }) => {
  switch (name) {
    case "whatsapp":
      return <WhatsAppIcon {...props} />;
    case "linkedin":
      return <LinkedInIcon {...props} />;
    case "instagram":
      return <InstagramIcon {...props} />;
    case "phone":
      return <PhoneIcon {...props} />;
    case "arrow-left":
      return <ArrowLeftIcon {...props} />;
    default:
      return null;
  }
};

export default Icon;
