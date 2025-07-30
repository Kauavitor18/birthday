import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BirthdaySurprise = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [showLetters, setShowLetters] = useState(false);

  const letters = [
    {
      id: 1,
      content: "Lary, desde que você entrou na minha vida, tudo ficou mais leve e mais bonito. Você me faz sorrir nos dias bons, meu coração se alegra com sua presença e anseia por te ver cada vez mais. Amo seu sorriso e seu jeito bobinho e tagarela como você fala kkk"
    },
    {
      id: 2,
      content: "Você é única, especial, linda, inteligente e fantasticamente perfeita. Amo seu jeitinho, cada detalhe seu, a sua força e a forma como torna tudo mais especial só por estar presente."
    },
    {
      id: 3,
      content: "Hoje eu só quero te desejar todo o amor e felicidade do mundo! Que todos os seus sonhos se realizem e que consiga conquistar tudo que almeja nessa vida. E que a vida seja sempre doce com você. Feliz Aniversário, Lary! 💖"
    }
  ];

  const handleEnvelopeClick = () => {
    setIsEnvelopeOpen(true);
    setTimeout(() => {
      setShowLetters(true);
    }, 1000);
  };

  const nextLetter = () => {
    if (currentLetter < letters.length - 1) {
      setCurrentLetter(currentLetter + 1);
    }
  };

  const prevLetter = () => {
    if (currentLetter > 0) {
      setCurrentLetter(currentLetter - 1);
    }
  };

  // Floating hearts animation
  const FloatingHearts = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <Heart
          key={i}
          className={`hearts-float text-romantic-pink absolute opacity-60`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 1.3}s`,
            fontSize: `${Math.random() * 20 + 15}px`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );

  // Sparkles animation
  const FloatingSparkles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <Sparkles
          key={i}
          className="absolute text-romantic-gold opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `sparkle 3s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
            fontSize: `${Math.random() * 15 + 10}px`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <FloatingHearts />
      <FloatingSparkles />
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-romantic opacity-90"></div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {!isEnvelopeOpen ? (
          // Envelope Component
          <div className="flex flex-col items-center space-y-8">
            <h1 className="font-elegant text-6xl md:text-8xl text-romantic-wine text-center mb-8">
              Para Lary ✨
            </h1>
            
            <div 
              onClick={handleEnvelopeClick}
              className="cursor-pointer transform transition-all duration-500 hover:scale-105 romantic-glow"
            >
              <div className="relative">
                {/* Envelope */}
                <div className="w-80 h-56 md:w-96 md:h-64 bg-gradient-envelope rounded-lg shadow-2xl relative overflow-hidden border-2 border-romantic-gold">
                  <div className="absolute inset-0 bg-gradient-to-br from-romantic-yellow to-romantic-gold opacity-90"></div>
                  
                  {/* Envelope flap */}
                  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-romantic-gold to-romantic-yellow transform origin-top"></div>
                  
                  {/* Envelope content hint */}
                  <div className="absolute inset-4 bg-white/20 rounded border border-romantic-gold/30 flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="mx-auto mb-2 text-romantic-wine text-4xl" />
                      <p className="font-romantic text-romantic-wine text-lg">
                        Clique para abrir
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2">
                  <div className="w-8 h-8 bg-romantic-pink rounded-full animate-pulse"></div>
                </div>
                <div className="absolute -bottom-2 -left-2">
                  <div className="w-6 h-6 bg-romantic-gold rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <p className="font-romantic text-2xl text-romantic-wine text-center max-w-md">
              Uma surpresa especial te aguarda... 💕
            </p>
          </div>
        ) : (
          // Letters Component
          <div className={`${showLetters ? 'letter-appear' : 'opacity-0'} transition-all duration-1000`}>
            <div className="text-center mb-8">
              <h1 className="font-elegant text-5xl md:text-7xl text-romantic-wine mb-4">
                Feliz Aniversário! 🎉
              </h1>
              <p className="font-romantic text-xl text-romantic-wine">
                Carta {currentLetter + 1} de {letters.length}
              </p>
            </div>

            <Card className="max-w-2xl mx-auto romantic-glow bg-gradient-card border-2 border-romantic-pink">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-6">
                  <Heart className="mx-auto text-romantic-wine text-4xl mb-4" />
                </div>
                
                <p className="font-romantic text-lg md:text-xl leading-relaxed text-romantic-wine text-center mb-8">
                  {letters[currentLetter].content}
                </p>
                
                <div className="flex justify-between items-center">
                  <button
                    onClick={prevLetter}
                    disabled={currentLetter === 0}
                    className={`px-6 py-3 rounded-full font-romantic text-lg transition-all duration-300 ${
                      currentLetter === 0 
                        ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                        : 'bg-romantic-wine text-white hover:bg-romantic-wine/90 transform hover:scale-105'
                    }`}
                  >
                    ← Anterior
                  </button>
                  
                  <div className="flex space-x-2">
                    {letters.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentLetter ? 'bg-romantic-wine' : 'bg-romantic-pink'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextLetter}
                    disabled={currentLetter === letters.length - 1}
                    className={`px-6 py-3 rounded-full font-romantic text-lg transition-all duration-300 ${
                      currentLetter === letters.length - 1 
                        ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                        : 'bg-romantic-wine text-white hover:bg-romantic-wine/90 transform hover:scale-105'
                    }`}
                  >
                    Próxima →
                  </button>
                </div>
              </CardContent>
            </Card>
            
            {currentLetter === letters.length - 1 && (
              <div className="text-center mt-8 animate-pulse">
                <p className="font-elegant text-3xl text-romantic-wine">
                  Com todo amor 💕
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BirthdaySurprise;