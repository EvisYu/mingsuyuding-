import { Listing, Reservation, User } from "@prisma/client";

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type SafeReservation = Omit<
  Reservation, 
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

//定义了一个经过筛选的用户类型 SafeUser，它是基于 User 类型，并移除了 'createAt'、
//'updateAt' 和 'emailVerified' 三个属性，然后再加上了 createAt、updateAt 和 
//emailVerified 三个属性，且它们的类型分别为字符串、字符串和字符串或空值（null）
