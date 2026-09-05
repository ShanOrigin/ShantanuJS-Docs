import React, { useState, useEffect } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import { useTheme } from '../../hooks/useTheme';
import { Copy, Check } from 'lucide-react';

export type DualLanguageCode = {
  typescript: string;
  javascript: string;
};

export interface MonacoCodeEditorProps {
  code: string | DualLanguageCode;
  language?: 'typescript' | 'javascript' | string;
  defaultLanguage?: 'typescript' | 'javascript';
  title?: string;
  height?: string | number;
  readOnly?: boolean;
  onChange?: (value: string | undefined) => void;
}

export const MonacoCodeEditor: React.FC<MonacoCodeEditorProps> = ({
  code,
  language: initialLanguage,
  defaultLanguage = 'typescript',
  title,
  height = '360px',
  readOnly = true,
  onChange,
}) => {
  const { theme } = useTheme();
  const isDual = typeof code === 'object' && code !== null && 'typescript' in code && 'javascript' in code;

  const [activeLang, setActiveLang] = useState<'typescript' | 'javascript'>(
    (initialLanguage === 'javascript' ? 'javascript' : defaultLanguage)
  );

  const [copied, setCopied] = useState(false);

  // Determine active source code
  const currentCode = isDual
    ? (code as DualLanguageCode)[activeLang]
    : typeof code === 'string'
    ? code
    : '';

  const activeMonacoLang = isDual ? activeLang : (initialLanguage || 'typescript');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Failed to copy code:', e);
    }
  };

  const handleEditorDidMount: OnMount = (editor) => {
    editor.updateOptions({
      fontSize: 13,
      fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
      lineNumbers: 'on',
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: 2,
      renderLineHighlight: 'none',
    });
  };

  return (
    <div
      style={{
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--neu-inset-sm)',
        backgroundColor: theme === 'dark' ? '#0b0e15' : '#f0f4f9',
        width: '100%',
      }}
    >
      {/* Editor Header Bar with Tabs and Copy */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          padding: '8px 16px',
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-surface)',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-sans)',
        }}
      >
        {/* Title / Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-primary)',
            }}
          />
          <span style={{ fontWeight: 600, fontSize: '0.825rem', color: 'var(--text-primary)' }}>
            {title || (isDual ? `Quick Start Example — ${activeLang === 'typescript' ? 'TypeScript' : 'JavaScript'} / ESM` : 'Code Example')}
          </span>
        </div>

        {/* Center: Language Switcher Tabs */}
        <div
          role="tablist"
          aria-label="Code language tabs"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'var(--bg-surface-sunken)',
            padding: '3px',
            borderRadius: 'var(--radius-sm)',
            boxShadow: 'var(--neu-inset-sm)',
            gap: '2px',
          }}
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeLang === 'typescript'}
            onClick={() => setActiveLang('typescript')}
            style={{
              border: 'none',
              background: activeLang === 'typescript' ? 'var(--bg-surface)' : 'transparent',
              color: activeLang === 'typescript' ? 'var(--accent-primary)' : 'var(--text-muted)',
              boxShadow: activeLang === 'typescript' ? 'var(--neu-raised-sm)' : 'none',
              borderRadius: 'var(--radius-xs)',
              padding: '4px 12px',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            TypeScript
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeLang === 'javascript'}
            onClick={() => setActiveLang('javascript')}
            style={{
              border: 'none',
              background: activeLang === 'javascript' ? 'var(--bg-surface)' : 'transparent',
              color: activeLang === 'javascript' ? 'var(--accent-primary)' : 'var(--text-muted)',
              boxShadow: activeLang === 'javascript' ? 'var(--neu-raised-sm)' : 'none',
              borderRadius: 'var(--radius-xs)',
              padding: '4px 12px',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            JavaScript
          </button>
        </div>

        {/* Right: Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${activeLang} code to clipboard`}
          className="neu-button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            fontSize: '0.75rem',
            fontWeight: 500,
            borderRadius: 'var(--radius-xs)',
            cursor: 'pointer',
            color: copied ? 'var(--success)' : 'var(--text-secondary)',
          }}
        >
          {copied ? <Check size={13} style={{ color: 'var(--success)' }} /> : <Copy size={13} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Monaco Editor Canvas */}
      <div style={{ position: 'relative', width: '100%' }}>
        <Editor
          height={height}
          language={activeMonacoLang === 'js' ? 'javascript' : activeMonacoLang === 'ts' ? 'typescript' : activeMonacoLang}
          value={currentCode}
          theme={theme === 'dark' ? 'vs-dark' : 'light'}
          options={{
            readOnly,
            domReadOnly: readOnly,
            fontSize: 13,
            fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
            lineNumbers: 'on',
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            padding: { top: 14, bottom: 14 },
          }}
          onMount={handleEditorDidMount}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
