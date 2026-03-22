import React, { useState } from 'react';
import { Note } from '../types';

const initialNotes: Note[] = [
  {
    id: '1',
    title: 'Welcome to Potentia Ludi',
    content: 'This is your universal on-chain gaming wallet hub. Track your games, rewards, and assets across multiple blockchains.',
    createdAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    title: 'Connect Your Wallet',
    content: 'Connect a Web3 wallet to start tracking your on-chain gaming activity, balances, and NFTs.',
    createdAt: new Date('2024-01-02'),
  },
  {
    id: '3',
    title: 'Multi-Chain Support',
    content: 'Potentia Ludi supports Polygon, Ethereum, and more. Switch chains to view balances and game assets on each network.',
    createdAt: new Date('2024-01-03'),
  },
];

const NotesPage: React.FC = () => {
  const [notes] = useState<Note[]>(initialNotes);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📝 Notes</h1>
      <ul style={styles.list}>
        {notes.map((note) => (
          <li key={note.id} style={styles.noteCard}>
            <h2 style={styles.noteTitle}>{note.title}</h2>
            <p style={styles.noteContent}>{note.content}</p>
            <span style={styles.noteDate}>
              {note.createdAt.toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: '2rem',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    background: 'linear-gradient(90deg, #00d9ff, #7000ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  noteCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '1.5rem',
    border: '1px solid rgba(0, 217, 255, 0.2)',
  },
  noteTitle: {
    fontSize: '1.2rem',
    marginTop: 0,
    marginBottom: '0.5rem',
    color: '#00d9ff',
  },
  noteContent: {
    margin: '0 0 0.75rem 0',
    color: '#d0d0d0',
    lineHeight: 1.6,
  },
  noteDate: {
    fontSize: '0.8rem',
    color: '#888',
  },
};

export default NotesPage;
