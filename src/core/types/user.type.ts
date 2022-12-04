export class GetCustomerByIdDto {
  customer: UserDto;
  referrals?: Customer[];
  reward?: GetRewardDto;
  activations?: [];
  parent?: string;
  ordersTotal?: number;
}

export class GetUser extends GetCustomerByIdDto {
  token: string;
}

export class UserDto {
  refId?: string;
  id?: number;
  firstName?: string;
  secondName?: string;
  patronymic?: string;
  city?: string;
  role?: string;
  verificationStatus?: string;
  rejectPassportReason?: string;
  phoneNumber?: string;
  email?: string;
  birthday?: string;
  checked?: number;
  rating?: string;
  createdAt?: Date;
  updatedAt?: Date;
  avatarUrl?: string;
}

export class Customer {
  name?: string;
  surname?: string;
  secondName?: string;
  id: string;
  dbId?: number;
  score: number;
  totalPaid: number;
  mapUserId: number;
  equipmentType?: string;
  role?: Role;
  verificationStatus?: VerificationStatus;
  rejectPassportReason?: string;
  status?: Status;
  createdAt: number;
  updatedAt: number;
}

export type VerificationStatus = 'not-confirmed' | 'pending' | 'confirmed';
export const VERIFICATION_STATUS_ARRAY: VerificationStatus[] = [
  'not-confirmed',
  'pending',
  'confirmed',
];

export type Role = 'agent' | 'customer' | 'worker';
export const ROLE_ARRAY: Role[] = ['agent', 'customer', 'worker'];

export type Status = 'new' | 'active' | 'blocked';
export const STATUS_ARRAY: Status[] = ['new', 'active', 'blocked'];

export class GetRewardDto {
  total: number;
  totalPaid?: number;
  transactionsCount: number;
}
