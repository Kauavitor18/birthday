import { useState } from 'react';
import { Heart, Sparkles, Gift, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BirthdaySurprise = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [showLetters, setShowLetters] = useState(false);
  const [showSecretButton, setShowSecretButton] = useState(false);
  const [showSecretContent, setShowSecretContent] = useState(false);
  const [cardFlipping, setCardFlipping] = useState(false);

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
    }, 1500);
    setTimeout(() => {
      setShowSecretButton(true);
    }, 3000);
  };

  const nextLetter = () => {
    if (currentLetter < letters.length - 1) {
      setCardFlipping(true);
      setTimeout(() => {
        setCurrentLetter(currentLetter + 1);
        setCardFlipping(false);
      }, 300);
    }
  };

  const prevLetter = () => {
    if (currentLetter > 0) {
      setCardFlipping(true);
      setTimeout(() => {
        setCurrentLetter(currentLetter - 1);
        setCardFlipping(false);
      }, 300);
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

  // Celebration balloons for final message
  const CelebrationBalloons = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute balloon-float"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          <div className={`w-6 h-8 rounded-full ${i % 2 === 0 ? 'bg-romantic-pink' : 'bg-romantic-gold'}`} />
        </div>
      ))}
    </div>
  );

  // Fireworks effect
  const Fireworks = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <Star
          key={i}
          className="absolute firework-burst text-romantic-yellow opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50 + 10}%`,
            animationDelay: `${i * 0.2}s`,
            fontSize: `${Math.random() * 10 + 8}px`
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
              className="cursor-pointer transform transition-all duration-500 hover:scale-105 romantic-glow envelope-container"
            >
              <div className="relative">
                {/* Envelope */}
                <div className={`w-80 h-56 md:w-96 md:h-64 bg-gradient-envelope rounded-lg shadow-2xl relative overflow-hidden border-2 border-romantic-gold ${isEnvelopeOpen ? 'envelope-opening' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-romantic-yellow to-romantic-gold opacity-90"></div>
                  
                  {/* Envelope flap - animates opening */}
                  <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-romantic-gold to-romantic-yellow transform origin-top transition-all duration-1000 ${isEnvelopeOpen ? 'rotate-12 translate-y-2' : ''}`}></div>
                  
                  {/* Hearts floating up from envelope */}
                  {isEnvelopeOpen && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(4)].map((_, i) => (
                        <Heart
                          key={i}
                          className="absolute text-romantic-pink hearts-up opacity-80"
                          style={{
                            left: `${40 + Math.random() * 20}%`,
                            top: '50%',
                            animationDelay: `${i * 0.3}s`,
                            fontSize: '20px'
                          }}
                        />
                      ))}
                    </div>
                  )}
                  
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

            <Card className={`max-w-2xl mx-auto romantic-glow bg-gradient-card border-2 border-romantic-pink transition-all duration-300 ${cardFlipping ? 'card-flip' : ''}`}>
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
              <>
                <CelebrationBalloons />
                <Fireworks />
                <div className="text-center mt-8 animate-pulse">
                  <p className="font-elegant text-3xl text-romantic-wine mb-6">
                    Com todo amor 💕
                  </p>
                </div>
              </>
            )}

            {/* Secret Button */}
            {showSecretButton && !showSecretContent && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowSecretContent(true)}
                  className="secret-button bg-gradient-to-r from-romantic-pink to-romantic-gold text-romantic-wine font-romantic text-lg px-8 py-3 rounded-full transform transition-all duration-500 hover:scale-110 shadow-lg opacity-0 animate-fade-in"
                  style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
                >
                  🎁 Clique aqui para ver algo especial
                </button>
              </div>
            )}

            {/* Secret Content */}
            {showSecretContent && (
              <div className="text-center mt-8 p-6 bg-white/20 rounded-lg border border-romantic-gold/30 animate-fade-in">
                <div className="mb-4">
                  <Gift className="mx-auto text-romantic-wine text-6xl mb-4 animate-bounce" />
                </div>
                <p className="font-elegant text-2xl text-romantic-wine mb-4">
                  Uma memória especial nossa! 💝
                </p>
                <div className="w-64 h-48 mx-auto bg-gradient-to-br from-romantic-yellow/30 to-romantic-pink/30 rounded-lg border-2 border-romantic-gold/50 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="mx-auto text-romantic-wine text-4xl mb-2" />
                    <p className="font-romantic text-romantic-wine">
                      Aqui você pode colocar<br />
                      uma foto especial<br />
                      de vocês dois! 📸
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BirthdaySurprise;