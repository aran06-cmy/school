'use client';

import { Phone, Star, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Contact } from '@/types/contact';
import { getOfficeStatus, getStatusEmoji, getStatusColor } from '@/utils/time';

interface ContactCardProps {
    contact: Contact;
    isFavorite: boolean;
    onToggleFavorite: (id: string) => void;
}

export function ContactCard({
    contact,
    isFavorite,
    onToggleFavorite,
}: ContactCardProps) {
    const status = getOfficeStatus(contact.officeHours);
    const statusEmoji = getStatusEmoji(status);
    const statusColor = getStatusColor(status);

    const handleCall = () => {
        window.location.href = `tel:${contact.phoneNumber}`;
    };

    return (
        <Card className="group relative overflow-hidden border-neutral-300 bg-white transition-all hover:shadow-lg hover:border-brand-400">
            <CardContent className="p-5">
                {/* Status Badge - Top Right */}
                <div className="absolute right-4 top-4">
                    <Badge
                        variant="secondary"
                        className={`${statusColor} bg-neutral-100 text-xs font-medium`}
                    >
                        {statusEmoji} {status}
                    </Badge>
                </div>

                {/* Category Badge */}
                <div className="mb-3">
                    <Badge className="bg-brand-100 text-brand-900 hover:bg-brand-200">
                        {contact.category}
                    </Badge>
                </div>

                {/* Department Name */}
                <h3 className="text-xl font-bold text-neutral-1000 mb-2 pr-24">
                    {contact.departmentName}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                    {contact.description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-neutral-700 mb-2">
                    <MapPin className="h-4 w-4 text-neutral-500" />
                    <span>{contact.location}</span>
                </div>

                {/* Office Hours */}
                <div className="flex items-center gap-2 text-sm text-neutral-700 mb-4">
                    <Clock className="h-4 w-4 text-neutral-500" />
                    <span>
                        평일 {contact.officeHours.weekday.open} -{' '}
                        {contact.officeHours.weekday.close}
                    </span>
                </div>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {contact.keywords.slice(0, 4).map((keyword) => (
                        <span
                            key={keyword}
                            className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs"
                        >
                            #{keyword}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    {/* Call Button */}
                    <button
                        onClick={handleCall}
                        className="flex-1 flex items-center justify-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
                    >
                        <Phone className="h-5 w-5" />
                        <span>전화 걸기</span>
                    </button>

                    {/* Favorite Button */}
                    <button
                        onClick={() => onToggleFavorite(contact.id)}
                        className={`
              p-3 rounded-lg border-2 transition-all
              ${isFavorite
                                ? 'bg-secondary-500 border-secondary-500 text-white'
                                : 'bg-white border-neutral-300 text-neutral-600 hover:border-secondary-500 hover:text-secondary-500'
                            }
            `}
                        aria-label={isFavorite ? '즐겨찾기 해제' : '즐겨찾기 추가'}
                    >
                        <Star
                            className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`}
                        />
                    </button>
                </div>
            </CardContent>
        </Card>
    );
}
