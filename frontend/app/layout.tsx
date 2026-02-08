'use client'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#f3f4f6',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ 
        background: 'white', 
        padding: '2rem', 
        borderRadius: '12px', 
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
        width: '100%', 
        maxWidth: '400px' 
      }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          marginBottom: '1.5rem', 
          textAlign: 'center',
          color: '#1f2937'
        }}>
          ✨ Todo App
        </h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%', 
              padding: '12px', 
              border: '2px solid #e5e7eb', 
              borderRadius: '8px', 
              fontSize: '16px',
              outline: 'none'
            }}
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%', 
              padding: '12px', 
              border: '2px solid #e5e7eb', 
              borderRadius: '8px', 
              fontSize: '16px',
              outline: 'none'
            }}
          />
          
          <button 
            style={{
              width: '100%', 
              backgroundColor: '#3b82f6', 
              color: 'white', 
              padding: '12px', 
              borderRadius: '8px', 
              border: 'none',
              fontSize: '16px', 
              fontWeight: '600',
              cursor: 'pointer'
            }}
            onClick={() => alert('Frontend connected! Backend API: http://localhost:8000/docs')}
          >
            Login
          </button>
        </div>
        
        <p style={{ 
          textAlign: 'center', 
          marginTop: '1.5rem', 
          color: '#6b7280', 
          fontSize: '14px' 
        }}>
          Backend API: <a href="http://localhost:8000/docs" style={{ color: '#3b82f6', textDecoration: 'underline' }}>localhost:8000/docs</a>
        </p>
      </div>
    </div>
  )
}
