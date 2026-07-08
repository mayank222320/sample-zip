import React from 'react';
import { cn } from '@/lib/utils';

interface EmailObfuscatorProps {
  email: string;
  className?: string;
  icon?: React.ReactNode;
}

const EmailObfuscator: React.FC<EmailObfuscatorProps> = ({ email, className, icon }) => {
  // Simple obfuscation by splitting the email
  const [user, domain] = email.split('@');
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <a 
      href="#" 
      onClick={handleClick}
      className={cn("inline-flex items-center", className)}
      onContextMenu={(e) => e.preventDefault()}
    >
      {icon}
      <span className="inline-flex">
        <span>{user}</span>
        <span className="hidden">obfuscate</span>
        <span>@</span>
        <span>{domain}</span>
      </span>
    </a>
  );
};

export default EmailObfuscator;
