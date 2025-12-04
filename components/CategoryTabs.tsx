'use client';

import { ContactCategory } from '@/types/contact';

interface CategoryTabsProps {
    categories: Array<'전체' | ContactCategory>;
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export function CategoryTabs({
    categories,
    activeCategory,
    onCategoryChange,
}: CategoryTabsProps) {
    return (
        <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 pb-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`
              flex-shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all
              ${activeCategory === category
                                ? 'bg-brand-900 text-white shadow-md'
                                : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                            }
            `}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}
