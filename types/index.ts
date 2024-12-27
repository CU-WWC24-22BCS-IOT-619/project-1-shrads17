export interface Animal {
  name: any;
  id: string;
  tag: string;
  type: 'cattle' | 'sheep' | 'goat' | 'pig' | 'other';
  breed?: string;
  status: 'active' | 'inactive';
  location: GeoLocation;
  lastUpdate: string;
  health: 'good' | 'attention' | 'critical';
  notes?: string;
}

export interface GeoLocation {
  latitude: number;
  longitude: number;
  timestamp: string;
}

export interface HerdStats {
  total: number;
  active: number;
  needsAttention: number;
}