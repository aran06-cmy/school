'use client';

import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { CategoryTabs } from '@/components/CategoryTabs';
import { ContactCard } from '@/components/ContactCard';
import { contacts } from '@/data/contacts';
import { searchContacts, filterByCategory } from '@/utils/search';
import { useFavorites } from '@/hooks/useFavorites';
import { ContactCategory } from '@/types/contact';

const categories: Array<'전체' | ContactCategory> = [
  '전체',
  '학사',
  '생활관',
  '행정',
  '학과',
  '편의시설',
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('전체');
  const { favorites, toggleFavorite, isFavorite, isLoaded } = useFavorites();

  // Filter and search contacts
  const filteredContacts = useMemo(() => {
    let result = contacts;

    // Apply category filter
    result = filterByCategory(result, activeCategory);

    // Apply search
    result = searchContacts(result, searchQuery);

    return result;
  }, [searchQuery, activeCategory]);

  // Separate favorites from regular contacts
  const favoriteContacts = useMemo(() => {
    return filteredContacts.filter((contact) => isFavorite(contact.id));
  }, [filteredContacts, favorites, isFavorite]);

  const regularContacts = useMemo(() => {
    return filteredContacts.filter((contact) => !isFavorite(contact.id));
  }, [filteredContacts, favorites, isFavorite]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-6 max-w-4xl">
        {/* Hero Section - Search */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-1000 mb-4">
            필요한 연락처를 빠르게 찾아보세요
          </h2>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-neutral-600">
            {filteredContacts.length}개의 연락처
            {searchQuery && ` - "${searchQuery}" 검색 결과`}
          </p>
        </div>

        {/* Favorites Section */}
        {isLoaded && favoriteContacts.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-neutral-1000 mb-4 flex items-center gap-2">
              <span>⭐</span>
              <span>즐겨찾기</span>
            </h3>
            <div className="grid gap-4 sm:grid-cols-1">
              {favoriteContacts.map((contact) => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  isFavorite={true}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular Contacts Section */}
        {regularContacts.length > 0 ? (
          <div>
            {favoriteContacts.length > 0 && (
              <h3 className="text-lg font-bold text-neutral-1000 mb-4">
                전체 연락처
              </h3>
            )}
            <div className="grid gap-4 sm:grid-cols-1">
              {regularContacts.map((contact) => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  isFavorite={false}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </div>
        ) : (
          favoriteContacts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-neutral-600 text-lg">
                검색 결과가 없습니다.
              </p>
              <p className="text-neutral-500 text-sm mt-2">
                다른 키워드로 검색해보세요.
              </p>
            </div>
          )
        )}
      </main>
    </div>
  );
}
