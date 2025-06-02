"use client";
import { useEffect, useRef } from "react";
import EnquiryForm from "@/components/enquiryForm";

export default function EnquiryPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Floating particles
    const particles = [];
    const particleCount = 50;
    const colors = ["#FF9A3D", "#FF7A00", "#FF6B35", "#FFB673"];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 8 + 2;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width + 20 || this.x < -20) this.speedX *= -1;
        if (this.y > canvas.height + 20 || this.y < -20) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();

        // Draw connecting lines
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = "#FF9A3D";
            ctx.globalAlpha = 0.1 - (distance / 150) * 0.1;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-50 via-orange-100 to-amber-50">
      {/* Animated Background Canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-orange-200/20 blur-2xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-amber-300/20 blur-3xl animate-ping animate-delay-1000" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 py-12">
        {/* Animated Header */}
        <header className="mb-8 pt-15 text-center animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent tracking-wide">
            Tree House
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-md font-light">
            Your dream home starts here —{" "}
            <span className="font-medium text-orange-600">Enquire now!</span>
          </p>

          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full animate-pulse" />
          </div>
        </header>

        {/* Form Container with Glass Morphism */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl max-w-lg w-full p-8 md:p-10 transform transition-all duration-300 hover:shadow-2xl border border-orange-100">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            Quick Enquiry
          </div>
          <EnquiryForm />
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p>
            © {new Date().getFullYear()} Tree House Properties. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
