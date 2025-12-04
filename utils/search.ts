import { Contact } from '@/types/contact';

/**
 * Fuzzy search contacts by keywords, department name, and description
 */
export function searchContacts(contacts: Contact[], query: string): Contact[] {
    if (!query.trim()) {
        return contacts;
    }

    const normalizedQuery = query.toLowerCase().trim();

    return contacts.filter((contact) => {
        // Search in keywords
        const keywordMatch = contact.keywords.some((keyword) =>
            keyword.toLowerCase().includes(normalizedQuery)
        );

        // Search in department name
        const departmentMatch = contact.departmentName
            .toLowerCase()
            .includes(normalizedQuery);

        // Search in description
        const descriptionMatch = contact.description
            .toLowerCase()
            .includes(normalizedQuery);

        return keywordMatch || departmentMatch || descriptionMatch;
    });
}

/**
 * Filter contacts by category
 */
export function filterByCategory(
    contacts: Contact[],
    category: string
): Contact[] {
    if (category === '전체') {
        return contacts;
    }

    return contacts.filter((contact) => contact.category === category);
}
