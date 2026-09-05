import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import { Copy, Check } from 'lucide-react';

export interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript',
  title,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Failed to copy code', e);
    }
  };

  const getGrammarLanguage = () => {
    if (language === 'ts' || language === 'typescript') return 'typescript';
    if (language === 'js' || language === 'javascript') return 'javascript';
    if (language === 'bash' || language === 'sh') return 'bash';
    if (language === 'json') return 'json';
    return 'javascript';
  };

  const grammar = Prism.languages[getGrammarLanguage()] || Prism.languages.javascript;
  const highlightedCode = Prism.highlight(code.trim(), grammar, getGrammarLanguage());

  return (
    <div
      style={{
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--neu-inset-sm)',
        backgroundColor: 'var(--code-bg)',
        margin: 'var(--space-4) 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 16px',
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-surface)',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        <span style={{ fontWeight: 600 }}>{title || language.toUpperCase()}</span>
        <button
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'none',
            border: 'none',
            color: copied ? 'var(--success)' : 'var(--text-muted)',
            cursor: 'pointer',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            padding: '4px 8px',
            borderRadius: 'var(--radius-xs)',
            transition: 'color var(--transition-fast)',
          }}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre
        style={{
          margin: 0,
          padding: '16px',
          overflowX: 'auto',
          fontSize: '0.875rem',
          lineHeight: '1.6',
          fontFamily: 'var(--font-mono)',
          color: 'var(--code-text)',
        }}
      >
        <code
          className={`language-${getGrammarLanguage()}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    </div>
  );
};
