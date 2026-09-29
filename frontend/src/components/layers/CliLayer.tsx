import React, { useState, useRef, useEffect } from 'react';
import {
  DATA_PROFILE,
  DATA_STATUS,
  DATA_CAPABILITIES,
  DATA_FEATURED,
  DATA_PROJECTS,
  DATA_EXPERIENCE,
  DATA_AWARDS,
  DATA_EDUCATION,
} from '../../data/mockData';
import type { LayerMode, ThemeMode } from '../../types/portfolio';
import './CliLayer.css';

interface LogLine {
  id: string;
  type: 'output' | 'echo' | 'err';
  content: string;
}

interface CliLayerProps {
  onLayerChange: (layer: LayerMode) => void;
  onThemeChange: (theme: ThemeMode) => void;
}

export const CliLayer: React.FC<CliLayerProps> = ({ onLayerChange, onThemeChange }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [logs, setLogs] = useState<LogLine[]>([
    {
      id: 'boot-1',
      type: 'output',
      content: '<span style="color:var(--amber);font-weight:700;">harshbamotra.dev</span> terminal — same data as the UI and the API, typed instead of clicked.',
    },
    {
      id: 'boot-2',
      type: 'output',
      content: 'type <span style="color:var(--amber)">help</span> to see what\'s available.',
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [logs]);

  const printLog = (content: string, type: 'output' | 'echo' | 'err' = 'output') => {
    setLogs((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random()}`, type, content },
    ]);
  };

  const handleCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    printLog(`<span class="prompt">visitor@harshbamotra.dev:~$</span> ${raw}`, 'echo');
    if (!raw) return;

    setHistory((prev) => [...prev, raw]);
    setHistIdx(-1);

    const parts = raw.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    switch (cmd) {
      case 'help':
        printLog('available commands:');
        [
          ['help', 'show this command list'],
          ['about', 'who I am and tagline'],
          ['skills', 'technical capabilities toolkit'],
          ['projects [id]', 'list projects or view detail by id'],
          ['experience', 'employment work history'],
          ['status', 'system metrics & uptime statistics'],
          ['awards', 'recognition and awards'],
          ['education', 'academic background'],
          ['contact', 'email, github, linkedin links'],
          ['ls', 'list files in working directory'],
          ['cat <file>', 'read file content'],
          ['theme <dark|light>', 'switch print styling'],
          ['view <ui|api|cli>', 'switch application layer'],
          ['clear', 'clear terminal screen'],
        ].forEach(([c, desc]) => {
          printLog(`&nbsp;&nbsp;<span style="color:var(--amber)">${c}</span> — ${desc}`);
        });
        break;

      case 'about':
        printLog(DATA_PROFILE.tagline);
        printLog(DATA_PROFILE.summary);
        break;

      case 'skills':
        DATA_CAPABILITIES.forEach((cap) => {
          printLog(`<span style="color:var(--amber)">${cap.name}:</span> ${cap.skills.join(', ')}`);
        });
        break;

      case 'status':
        printLog(`projects delivered: <span style="color:var(--live)">${DATA_STATUS.projects_delivered}</span>`);
        printLog(`experience: <span style="color:var(--live)">${DATA_PROFILE.experience_years}</span>`);
        printLog(`code quality score: <span style="color:var(--live)">${DATA_STATUS.code_quality}</span>`);
        printLog(`peak req/min: <span style="color:var(--live)">${DATA_STATUS.peak_req_per_min}</span>`);
        break;

      case 'projects':
        if (args[0]) {
          const p = DATA_PROJECTS.find((x) => x.id === args[0]);
          if (!p) {
            printLog(`no project found with id ${args[0]}`, 'err');
          } else {
            printLog(`<span style="color:var(--amber)">[${p.id}] ${p.title}</span> (${p.date})`);
            printLog(`description: ${p.description}`);
            printLog(`stack: ${p.stack.join(', ')}`);
          }
        } else {
          DATA_FEATURED.forEach((p) => {
            printLog(`<span style="color:var(--amber)">[${p.id}]</span> ${p.title} — ${p.date}`);
          });
          DATA_PROJECTS.forEach((p) => {
            printLog(`<span style="color:var(--amber)">[${p.id}]</span> ${p.title} — ${p.date}`);
          });
          printLog('&nbsp;');
          printLog('try: <span style="color:var(--amber)">projects 1</span> for details');
        }
        break;

      case 'experience':
        DATA_EXPERIENCE.forEach((exp) => {
          printLog(`<span style="color:var(--amber)">${exp.period}</span> — ${exp.role}, ${exp.company}`);
        });
        break;

      case 'awards':
        DATA_AWARDS.forEach((award) => {
          printLog(`<span style="color:var(--amber)">★ ${award.title}</span> — ${award.subtitle}`);
        });
        break;

      case 'education':
        DATA_EDUCATION.forEach((edu) => {
          printLog(`<span style="color:var(--amber)">${edu.degree}</span> (${edu.year}) — ${edu.institution}`);
        });
        break;

      case 'contact':
        printLog(`email: ${DATA_PROFILE.email}`);
        printLog(`phone: ${DATA_PROFILE.phone}`);
        printLog(`github: ${DATA_PROFILE.github}`);
        printLog(`linkedin: ${DATA_PROFILE.linkedin}`);
        break;

      case 'ls':
        printLog('about.md  skills.json  projects.json  experience.log  status.json  contact.txt');
        break;

      case 'cat':
        if (!args[0]) {
          printLog('usage: cat <file>', 'err');
        } else if (args[0] === 'about.md') {
          printLog(DATA_PROFILE.summary);
        } else if (args[0] === 'status.json') {
          printLog(JSON.stringify(DATA_STATUS, null, 2));
        } else if (args[0] === 'contact.txt') {
          printLog(`email: ${DATA_PROFILE.email}\nphone: ${DATA_PROFILE.phone}`);
        } else {
          printLog(`${args[0]}: no such file`, 'err');
        }
        break;

      case 'clear':
        setLogs([]);
        break;

      case 'theme':
        if (args[0] === 'dark' || args[0] === 'light') {
          onThemeChange(args[0]);
          printLog(`switched to ${args[0]} print.`);
        } else {
          printLog('usage: theme <dark|light>', 'err');
        }
        break;

      case 'view':
        if (['ui', 'api', 'cli'].includes(args[0])) {
          printLog(`switching to ${args[0]} layer...`);
          setTimeout(() => onLayerChange(args[0] as LayerMode), 150);
        } else {
          printLog('usage: view <ui|api|cli>', 'err');
        }
        break;

      default:
        printLog(`${cmd}: command not found. try <span style="color:var(--amber)">help</span>.`, 'err');
        break;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const val = inputVal;
      setInputVal('');
      handleCommand(val);
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0) {
        const nextIdx = histIdx === -1 ? history.length - 1 : Math.max(0, histIdx - 1);
        setHistIdx(nextIdx);
        setInputVal(history[nextIdx] || '');
      }
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      if (history.length > 0 && histIdx !== -1) {
        const nextIdx = Math.min(history.length - 1, histIdx + 1);
        setHistIdx(nextIdx);
        setInputVal(history[nextIdx] || '');
      }
      e.preventDefault();
    }
  };

  return (
    <main className="cli-layer-wrap">
      <div className="terminal">
        <div className="term-bar">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          &nbsp;visitor@harshbamotra.dev — zsh
        </div>

        <div className="term-body" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
          {logs.map((log) => (
            <div
              key={log.id}
              className={`term-line ${log.type}`}
              dangerouslySetInnerHTML={{ __html: log.content }}
            />
          ))}

          <div className="term-input-row">
            <span className="prompt">visitor@harshbamotra.dev:~$</span>
            <input
              ref={inputRef}
              type="text"
              className="term-input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="Terminal command input"
            />
          </div>
        </div>
      </div>
      <div className="cli-hint">
        type <span style={{ color: 'var(--amber)' }}>help</span> to see commands · ↑ / ↓ for history
      </div>
    </main>
  );
};
