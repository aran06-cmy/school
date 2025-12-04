'use client';

import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'jeon-favorites';

export function useFavorites() {
    const [favorites, setFavorites] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load favorites from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(FAVORITES_KEY);
        if (stored) {
            try {
                setFavorites(JSON.parse(stored));
            } catch (error) {
                console.error('Failed to parse favorites:', error);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save favorites to localStorage whenever they change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
        }
    }, [favorites, isLoaded]);

    const toggleFavorite = (id: string) => {
        setFavorites((prev) => {
            if (prev.includes(id)) {
                return prev.filter((favId) => favId !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const isFavorite = (id: string) => favorites.includes(id);

    return {
        favorites,
        toggleFavorite,
        isFavorite,
        isLoaded,
    };
}
