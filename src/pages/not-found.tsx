import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-md mx-4 rounded-xl border border-white/10 bg-white/5 p-8">
        <div className="flex mb-4 gap-2 items-center">
          <AlertCircle className="h-8 w-8 text-red-500" />
          <h1 className="text-2xl font-bold text-white">404 — Página não encontrada</h1>
        </div>
        <p className="text-sm text-gray-400">
          A página que você está procurando não existe.
        </p>
      </div>
    </div>
  );
}
