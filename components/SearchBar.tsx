import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <div className="w-full">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
                <Input
                    type="text"
                    placeholder="어떤 업무의 전화번호를 찾으세요?"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="h-14 pl-12 pr-4 text-base bg-white border-neutral-300 focus:border-brand-600 focus:ring-brand-600"
                />
            </div>
        </div>
    );
}
