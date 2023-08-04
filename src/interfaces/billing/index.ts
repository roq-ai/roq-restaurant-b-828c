import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BillingInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  oreder_summary?: string;
  total_bill?: number;
  user_id: string;

  user?: UserInterface;
  _count?: {};
}

export interface BillingGetQueryInterface extends GetQueryInterface {
  id?: string;
  oreder_summary?: string;
  user_id?: string;
}
