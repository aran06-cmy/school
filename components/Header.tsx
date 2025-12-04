import { Settings } from 'lucide-react';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-300 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold">
                        <span className="text-brand-900">jeon.</span>
                        <span className="text-neutral-700">전번</span>
                    </h1>
                </div>
                <button
                    className="rounded-lg p-2 hover:bg-neutral-200 transition-colors"
                    aria-label="설정"
                >
                    <Settings className="h-5 w-5 text-neutral-600" />
                </button>
            </div>
        </header>
    );
}
