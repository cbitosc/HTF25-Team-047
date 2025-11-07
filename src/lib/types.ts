export type ItemType = 'lost' | 'found';
export type ItemStatus = 'unclaimed' | 'claimed' | 'resolved';

export interface Item {
  id: string;
  type: ItemType;
  title: string;
  description: string;
  category: string;
  location: string;
  date_time: string;
  contact_name: string;
  contact_email: string;
  contact_phone?: string;
  image_url?: string;
  status: ItemStatus;
  created_at: string;
  updated_at: string;
}

export interface Database {
  public: {
    Tables: {
      items: {
        Row: Item;
        Insert: Omit<Item, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Item, 'id' | 'created_at' | 'updated_at'>>;
      };
    };
  };
}

export const CATEGORIES = [
  'Electronics',
  'Clothing',
  'Accessories',
  'Documents',
  'Keys',
  'Bags',
  'Books',
  'Sports Equipment',
  'Jewelry',
  'Other'
] as const;
