export interface DB {
  id: number;
  created_at: Date;
  updated_at: Date;
}

export interface Banner extends DB {
  title_text: string;
  banner_text: string;
  picture: {[key: string]: any};
}

export interface Offer extends DB {
  title?: string;
  description?: string;
  icon: {[key: string]: any};
}

export interface Title extends DB {
  title: string;
  description: string;
}

export interface Leisure extends DB {
  name?: string;
  picture: {[key: string]: any};
}

export interface Cottage extends DB {
  name: string;
  price_per_day: number;
  price_per_month: number;
  sort_description: string;
  description: string;
  address_1: string;
  address_2: string;
  plan: {[key: string]: any};
  picture: {[key: string]: any};
  carousel_pictures: {[key: string]: any}[];
  main_picture: {[key: string]: any};
  addInfo?: any;
}
