import React, { useEffect, useState } from 'react';

interface TypedTextProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
  className?: string;
}

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
  className = '',
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Handler for typing animation
    const handleTyping = () => {
      const currentString = strings[currentIndex];

      if (isDeleting) {
        // Deleting characters
        setCurrentText(current => current.substring(0, current.length - 1));

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex(current => (current + 1) % strings.length);
        }
      } else {
        // Typing characters
        setCurrentText(current => currentString.substring(0, current.length + 1));

        if (currentText === currentString) {
          // Wait before starting to delete
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, delayBetween);
          return;
        }
      }

      // Set next timeout for typing or deleting
      timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    };

    timeout = setTimeout(handleTyping, 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, strings, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className={`relative inline-block ${className}`}>
      {currentText}
      <span className="ml-1 inline-block h-6 w-1 animate-blink bg-primary"></span>
    </span>
  );
};

export default TypedText;
