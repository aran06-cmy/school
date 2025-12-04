export interface OfficeHours {
  weekday: { open: string; close: string };
  saturday?: { open: string; close: string };
  sunday?: { open: string; close: string };
}

export type ContactCategory = '학사' | '생활관' | '행정' | '편의시설' | '학과';

export interface Contact {
  id: string;
  category: ContactCategory;
  departmentName: string;
  phoneNumber: string;
  description: string;
  keywords: string[];
  location: string;
  officeHours: OfficeHours;
}

export type OfficeStatus = '통화 가능' | '점심 시간' | '부재중';
