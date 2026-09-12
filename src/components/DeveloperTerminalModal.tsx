import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, X, CornerDownLeft, Sparkles, Send, ExternalLink } from 'lucide-react';

interface DeveloperTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  type: 'input' | 'output' | 'system';
  content: string | React.ReactNode;
}

export default function DeveloperTerminalModal({ isOpen, onClose }: DeveloperTerminalModalProps) {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      type: 'system',
      content: '⚡ JAHID DEV SHELL [Version 2.6.0-release] — Type "help" or click quick commands below.',
    },
    {
      id: 'init-2',
      type: 'output',
      content: 'Connected to node @DEVELOPER_JAHID_BHAI • Status: ONLINE 🟢',
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newLogs: CommandLog[] = [
      ...logs,
      { id: String(Date.now()), type: 'input', content: `$ ${cmd}` },
    ];

    switch (trimmed) {
      case 'help':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          content: (
            <div className="space-y-1 text-slate-300">
              <p className="text-cyan-400 font-semibold">Available Commands:</p>
              <p><span className="text-emerald-400 font-mono">about</span> - Summary bio of JAHID</p>
              <p><span className="text-emerald-400 font-mono">skills</span> - List all technical proficiencies</p>
              <p><span className="text-emerald-400 font-mono">owner</span> - View Xova Solutions credentials</p>
              <p><span className="text-emerald-400 font-mono">contact</span> - Direct link to Telegram</p>
              <p><span className="text-emerald-400 font-mono">clear</span> - Clean up terminal output</p>
            </div>
          ),
        });
        break;

      case 'about':
      case 'bio':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          content: (
            <div className="space-y-1 text-slate-300">
              <p className="text-white font-bold">JAHID ❤️🔥</p>
              <p>Role: Web Developer &amp; Digital Creator</p>
              <p>Origin: Bangladesh 🇧🇩</p>
              <p>Username: @DEVELOPER_JAHID_BHAI</p>
              <p>Kind: Muslim 🎁</p>
              <p>Hobby: Earn Money Online 🔥</p>
              <p>Favourite Sports: Football ⚽</p>
            </div>
          ),
        });
        break;

      case 'skills':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          content: (
            <p className="text-cyan-300 font-mono">
              Next.js, Node.js, PHP, React.js, TypeScript, JavaScript, HTML, CSS, MySQL, REST API, Git, GitHub, cPanel, Linux, Web Development
            </p>
          ),
        });
        break;

      case 'owner':
      case 'xova':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          content: (
            <div className="p-2 rounded bg-amber-500/10 border border-amber-500/30 text-amber-200">
              🏆 Owner Of: <strong>Xova Solutions 🔥</strong>
              <br />
              Official Channel:{' '}
              <a
                href="https://t.me/XovaSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 underline"
              >
                https://t.me/XovaSolutions
              </a>
            </div>
          ),
        });
        break;

      case 'contact':
      case 'telegram':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          content: (
            <a
              href="https://t.me/DEVELOPER_JAHID_BHAI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-cyan-300 underline font-mono"
            >
              Open Telegram: https://t.me/DEVELOPER_JAHID_BHAI <ExternalLink className="w-3 h-3" />
            </a>
          ),
        });
        break;

      case 'clear':
        setLogs([
          {
            id: 'init-1',
            type: 'system',
            content: '⚡ Terminal cleared. Ready for input.',
          },
        ]);
        setInputVal('');
        return;

      default:
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          content: (
            <span className="text-rose-400">
              Command not recognized: &quot;{cmd}&quot;. Type &quot;help&quot; for available commands.
            </span>
          ),
        });
    }

    setLogs(newLogs);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  const quickCommands = ['about', 'skills', 'owner', 'contact', 'clear'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Terminal Window Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl rounded-2xl overflow-hidden bg-[#070b16] border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.25)] flex flex-col max-h-[85vh] z-10"
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 ml-2 text-xs font-mono text-cyan-300">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>jahid@dev-box:~</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close terminal"
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Command Chips */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#090e1c] border-b border-white/5 overflow-x-auto scrollbar-none">
              <span className="text-[11px] font-mono text-slate-400 shrink-0">Quick Run:</span>
              {quickCommands.map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={() => executeCommand(cmd)}
                  className="px-2.5 py-0.5 rounded text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-colors cursor-pointer shrink-0"
                >
                  ${cmd}
                </button>
              ))}
            </div>

            {/* Terminal Body Logs */}
            <div className="p-4 overflow-y-auto flex-1 font-mono text-xs space-y-2 min-h-[260px] max-h-[420px] select-text">
              {logs.map((log) => (
                <div key={log.id} className="leading-relaxed">
                  {log.type === 'input' && (
                    <span className="text-cyan-400 font-bold">{log.content}</span>
                  )}
                  {log.type === 'system' && (
                    <span className="text-purple-400">{log.content}</span>
                  )}
                  {log.type === 'output' && (
                    <div className="text-slate-200 mt-0.5">{log.content}</div>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Terminal Input Line */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0a101f] border-t border-white/10">
              <span className="text-emerald-400 font-mono font-bold text-sm">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type command ('help', 'about', 'skills')..."
                className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-slate-600"
              />
              <button
                type="button"
                onClick={() => executeCommand(inputVal)}
                aria-label="Execute command"
                className="p-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 transition-colors cursor-pointer"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
