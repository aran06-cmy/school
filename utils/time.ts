import { OfficeHours, OfficeStatus } from '@/types/contact';

/**
 * Get the current office status based on office hours and current time
 */
export function getOfficeStatus(
    officeHours: OfficeHours,
    currentTime: Date = new Date()
): OfficeStatus {
    const day = currentTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const currentMinutes = hours * 60 + minutes;

    // Determine which schedule to use
    let schedule: { open: string; close: string } | undefined;

    if (day === 0) {
        // Sunday
        schedule = officeHours.sunday;
    } else if (day === 6) {
        // Saturday
        schedule = officeHours.saturday;
    } else {
        // Weekday (Monday-Friday)
        schedule = officeHours.weekday;
    }

    // If no schedule for this day, office is closed
    if (!schedule) {
        return '부재중';
    }

    // Parse open and close times
    const [openHour, openMin] = schedule.open.split(':').map(Number);
    const [closeHour, closeMin] = schedule.close.split(':').map(Number);
    const openMinutes = openHour * 60 + openMin;
    const closeMinutes = closeHour * 60 + closeMin;

    // Check if currently outside office hours
    if (currentMinutes < openMinutes || currentMinutes >= closeMinutes) {
        return '부재중';
    }

    // Check if it's lunch time (12:00-13:00)
    const lunchStart = 12 * 60; // 12:00
    const lunchEnd = 13 * 60; // 13:00

    if (currentMinutes >= lunchStart && currentMinutes < lunchEnd) {
        return '점심 시간';
    }

    // Office is open and not lunch time
    return '통화 가능';
}

/**
 * Get the status indicator emoji
 */
export function getStatusEmoji(status: OfficeStatus): string {
    switch (status) {
        case '통화 가능':
            return '🟢';
        case '점심 시간':
            return '🟠';
        case '부재중':
            return '🔴';
    }
}

/**
 * Get the status color class
 */
export function getStatusColor(status: OfficeStatus): string {
    switch (status) {
        case '통화 가능':
            return 'text-success';
        case '점심 시간':
            return 'text-warning';
        case '부재중':
            return 'text-error';
    }
}
