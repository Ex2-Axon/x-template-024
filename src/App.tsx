import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function CounterNum({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0)
  const prevValue = useRef(value)

  useEffect(() => {
    let start = prevValue.current
    const end = value
    const duration = 500
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(start + (end - start) * progress)
      
      setDisplayValue(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        prevValue.current = value
      }
    }

    requestAnimationFrame(animate)
  }, [value])

  return <span className="font-orbitron tabular-nums">{displayValue}</span>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-background text-text aether-grid selection:bg-primary selection:text-white">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 card-blur border-b border-primary/20">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={viteLogo} className="w-8 h-8 animate-pulse" alt="Vite logo" />
            <span className="font-orbitron font-bold tracking-tighter text-accent">AETHER</span>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <a href="https://vite.dev" target="_blank" className="text-sm font-medium hover:text-accent transition-colors">Vite</a>
            <a href="https://react.dev" target="_blank" className="text-sm font-medium hover:text-accent transition-colors">React</a>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none opacity-20">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-[100px] animate-pulse delay-700"></div>
          </div>

          <div className="inline-block px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold tracking-widest mb-6 animate-fade-in">
            NEW DIMENSION
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tighter glow-text leading-tight">
            COSMIC <span className="text-accent">GRID</span>
          </h1>
          
          <p className="max-w-xl text-muted text-lg sm:text-xl mb-10 leading-relaxed">
            Navigate the luminous pathways of digital space. Explore the next generation of futuristic interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="px-8 py-4 bg-primary hover:bg-primary/80 text-white font-bold rounded-xl transition-all glow-border active:scale-95 flex items-center justify-center gap-3"
            >
              EXPLORE [<CounterNum value={count} />]
            </button>
            <a 
              href="#documentation"
              className="px-8 py-4 bg-surface hover:bg-surface/80 text-text font-bold rounded-xl transition-all border border-white/5"
            >
              LEARN MORE
            </a>
          </div>
        </section>

        {/* Selected Component Reference (Cards) */}
        <section className="py-20 px-4 bg-surface/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center tracking-tight">DIMENSIONAL <span className="text-primary">CORE</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {/* Card Implementation inspired by Javierrocadev_bright-turkey-65.html */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-full max-w-sm h-72 bg-neutral-900/50 rounded-2xl border border-white/5 hover:border-accent/30">
                  <div className="bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-primary/20 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
                  <div className="bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-accent/20 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
                  <div className="bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-primary/30 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44"></div>
                  
                  <div className="w-full h-full shadow-2xl p-6 bg-surface/50 backdrop-blur-sm rounded-xl flex-col gap-3 flex justify-center relative z-10">
                    <span className="text-text font-bold text-2xl italic tracking-tight font-orbitron">Module {i}</span>
                    <p className="text-muted text-sm leading-relaxed">
                      Dive into curated collections, traverse user-friendly interfaces, and let curiosity guide your exploration of the cosmic grid.
                    </p>
                    <div className="mt-4 flex items-center text-accent text-xs font-bold gap-2">
                      INITIALIZE <span className="w-8 h-[1px] bg-accent"></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section id="documentation" className="py-20 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">ENGINEERING <span className="text-accent">LOGS</span></h2>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                Our architecture leverages Vite and React to deliver lightning-fast performance in the digital void.
              </p>
              <div className="flex gap-4">
                <a href="https://vite.dev" target="_blank" className="p-4 bg-surface rounded-xl hover:scale-105 transition-transform border border-white/5">
                  <img src={viteLogo} className="w-10 h-10" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" className="p-4 bg-surface rounded-xl hover:scale-105 transition-transform border border-white/5">
                  <img src={reactLogo} className="w-10 h-10" alt="React logo" />
                </a>
              </div>
            </div>
            <div className="relative">
              <img src={heroImg} alt="Cosmic visualization" className="rounded-2xl shadow-2xl border border-primary/20 glow-border" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Social Section */}
        <section className="py-20 px-4 bg-primary/5 border-y border-primary/10">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8 font-orbitron tracking-widest">TRANSMISSION CHANNELS</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: 'GitHub', href: 'https://github.com', icon: (props: any) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg> },
                { name: 'Discord', href: 'https://discord.com', icon: (props: any) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.125-.094.252-.192.37-.29a.074.074 0 01.077-.01c3.927 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.196.373.29a.077.077 0 01-.006.127 12.299 12.299 0 01-1.872.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg> },
                { name: 'X', href: 'https://x.com', icon: (props: any) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zm-1.29 19.494h2.039L6.482 3.239H4.293L17.611 20.647z" /></svg> },
                { name: 'Bluesky', href: 'https://bsky.app', icon: (props: any) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C3.405 1.446 1.887 1.485 1.11 2.213.458 2.826.33 4.19 1.027 5.106c1.51 1.983 4.775 2.7 7.23 2.474-5.242.456-7.035 4.056-4.032 6.848 2.756 2.565 6.27 1.488 7.775-1.153.538-.944.538-.944.538-.944v.001s0 0 .538.944c1.506 2.641 5.02 3.718 7.775 1.153 3.003-2.792 1.21-6.392-4.032-6.848 2.455.226 5.72-.491 7.23-2.474.697-.916.569-2.28-.083-2.893-.777-.728-2.295-.767-4.092.592-2.752 1.942-5.711 5.881-6.798 7.995z" /></svg> },
              ].map((social) => (
                <a key={social.name} href={social.href} target="_blank" className="p-3 bg-surface rounded-full hover:bg-primary transition-colors hover:scale-110 transform duration-300 group">
                  <social.icon className="w-6 h-6 text-muted group-hover:text-white" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-orbitron font-bold text-xl tracking-tighter text-accent">MICROTRONIC</span>
          </div>
          <p className="text-muted text-sm">
            © 2026 Microtronic. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-bold tracking-widest text-muted">
            <a href="#" className="hover:text-primary transition-colors">TERMINAL</a>
            <a href="#" className="hover:text-primary transition-colors">PROTOCOL</a>
            <a href="#" className="hover:text-primary transition-colors">ENCRYPTION</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
