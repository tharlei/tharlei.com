import { useEffect, useState } from 'react';

interface TypewriterOptions {
  typeSpeed?: number;
  deleteSpeed?: number;
  holdMs?: number;
}

function randomIndex(length: number, exclude = -1): number {
  if (exclude < 0 || length < 2) return Math.floor(Math.random() * length);
  const i = Math.floor(Math.random() * (length - 1));
  return i >= exclude ? i + 1 : i;
}

export function useTypewriter(
  words: string[],
  { typeSpeed = 75, deleteSpeed = 40, holdMs = 1400 }: TypewriterOptions = {}
): string {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(() => randomIndex(words.length));
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');

  useEffect(() => {
    setText('');
    setWordIdx(randomIndex(words.length));
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
        setWordIdx(i => randomIndex(words.length, i));
        setPhase('typing');
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, wordIdx, words, typeSpeed, deleteSpeed, holdMs]);

  return text;
}
