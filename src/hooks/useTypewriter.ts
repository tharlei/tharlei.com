import { useEffect, useState } from 'react';

interface TypewriterOptions {
  typeSpeed?: number;
  deleteSpeed?: number;
  holdMs?: number;
}

export function useTypewriter(
  words: string[],
  { typeSpeed = 75, deleteSpeed = 40, holdMs = 1400 }: TypewriterOptions = {}
): string {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');

  useEffect(() => {
    setText('');
    setWordIdx(0);
    setPhase('typing');
  }, [words]);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (phase === 'typing') {
      if (text.length < current.length) {
        t = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      } else {
        t = setTimeout(() => setPhase('deleting'), holdMs);
      }
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
      } else {
        setWordIdx(i => (i + 1) % words.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, wordIdx, words, typeSpeed, deleteSpeed, holdMs]);

  return text;
}
