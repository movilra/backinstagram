// Code generated by Prisma (prisma@1.17.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  picture: (where?: PictureWhereInput) => Promise<boolean>;
  rating: (where?: RatingWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export interface Fragmentable {
  $fragment<T>(fragment: string | Object): T;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  $getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;

  /**
   * Queries
   */

  picture: (where: PictureWhereUniqueInput) => Picture;
  pictures: (
    args?: {
      where?: PictureWhereInput;
      orderBy?: PictureOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<PictureNode>>;
  picturesConnection: (
    args?: {
      where?: PictureWhereInput;
      orderBy?: PictureOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PictureConnection;
  rating: (where: RatingWhereUniqueInput) => Rating;
  ratings: (
    args?: {
      where?: RatingWhereInput;
      orderBy?: RatingOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<RatingNode>>;
  ratingsConnection: (
    args?: {
      where?: RatingWhereInput;
      orderBy?: RatingOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => RatingConnection;
  user: (where: UserWhereUniqueInput) => User;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<UserNode>>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPicture: (data: PictureCreateInput) => Picture;
  updatePicture: (
    args: { data: PictureUpdateInput; where: PictureWhereUniqueInput }
  ) => Picture;
  updateManyPictures: (
    args: { data: PictureUpdateInput; where?: PictureWhereInput }
  ) => BatchPayload;
  upsertPicture: (
    args: {
      where: PictureWhereUniqueInput;
      create: PictureCreateInput;
      update: PictureUpdateInput;
    }
  ) => Picture;
  deletePicture: (where: PictureWhereUniqueInput) => Picture;
  deleteManyPictures: (where?: PictureWhereInput) => BatchPayload;
  createRating: (data: RatingCreateInput) => Rating;
  updateRating: (
    args: { data: RatingUpdateInput; where: RatingWhereUniqueInput }
  ) => Rating;
  updateManyRatings: (
    args: { data: RatingUpdateInput; where?: RatingWhereInput }
  ) => BatchPayload;
  upsertRating: (
    args: {
      where: RatingWhereUniqueInput;
      create: RatingCreateInput;
      update: RatingUpdateInput;
    }
  ) => Rating;
  deleteRating: (where: RatingWhereUniqueInput) => Rating;
  deleteManyRatings: (where?: RatingWhereInput) => BatchPayload;
  createUser: (data: UserCreateInput) => User;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => User;
  updateManyUsers: (
    args: { data: UserUpdateInput; where?: UserWhereInput }
  ) => BatchPayload;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => User;
  deleteUser: (where: UserWhereUniqueInput) => User;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  picture: (
    where?: PictureSubscriptionWhereInput
  ) => PictureSubscriptionPayloadSubscription;
  rating: (
    where?: RatingSubscriptionWhereInput
  ) => RatingSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PictureOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "sinopsis_ASC"
  | "sinopsis_DESC"
  | "likes_ASC"
  | "likes_DESC"
  | "poster_ASC"
  | "poster_DESC"
  | "video_url_ASC"
  | "video_url_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type RatingOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "rate_ASC"
  | "rate_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "lastname_ASC"
  | "lastname_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "status_ASC"
  | "status_DESC"
  | "paypal_id_ASC"
  | "paypal_id_DESC"
  | "avatar_ASC"
  | "avatar_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface UserUpdateDataInput {
  name?: String;
  lastname?: String;
  email?: String;
  password?: String;
  status?: Boolean;
  paypal_id?: String;
  avatar?: String;
}

export interface PictureCreateInput {
  title: String;
  sinopsis: String;
  likes: Float;
  poster?: String;
  video_url: String;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  lastname?: String;
  lastname_not?: String;
  lastname_in?: String[] | String;
  lastname_not_in?: String[] | String;
  lastname_lt?: String;
  lastname_lte?: String;
  lastname_gt?: String;
  lastname_gte?: String;
  lastname_contains?: String;
  lastname_not_contains?: String;
  lastname_starts_with?: String;
  lastname_not_starts_with?: String;
  lastname_ends_with?: String;
  lastname_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  status?: Boolean;
  status_not?: Boolean;
  paypal_id?: String;
  paypal_id_not?: String;
  paypal_id_in?: String[] | String;
  paypal_id_not_in?: String[] | String;
  paypal_id_lt?: String;
  paypal_id_lte?: String;
  paypal_id_gt?: String;
  paypal_id_gte?: String;
  paypal_id_contains?: String;
  paypal_id_not_contains?: String;
  paypal_id_starts_with?: String;
  paypal_id_not_starts_with?: String;
  paypal_id_ends_with?: String;
  paypal_id_not_ends_with?: String;
  avatar?: String;
  avatar_not?: String;
  avatar_in?: String[] | String;
  avatar_not_in?: String[] | String;
  avatar_lt?: String;
  avatar_lte?: String;
  avatar_gt?: String;
  avatar_gte?: String;
  avatar_contains?: String;
  avatar_not_contains?: String;
  avatar_starts_with?: String;
  avatar_not_starts_with?: String;
  avatar_ends_with?: String;
  avatar_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export type PictureWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface PictureWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  sinopsis?: String;
  sinopsis_not?: String;
  sinopsis_in?: String[] | String;
  sinopsis_not_in?: String[] | String;
  sinopsis_lt?: String;
  sinopsis_lte?: String;
  sinopsis_gt?: String;
  sinopsis_gte?: String;
  sinopsis_contains?: String;
  sinopsis_not_contains?: String;
  sinopsis_starts_with?: String;
  sinopsis_not_starts_with?: String;
  sinopsis_ends_with?: String;
  sinopsis_not_ends_with?: String;
  likes?: Float;
  likes_not?: Float;
  likes_in?: Float[] | Float;
  likes_not_in?: Float[] | Float;
  likes_lt?: Float;
  likes_lte?: Float;
  likes_gt?: Float;
  likes_gte?: Float;
  poster?: String;
  poster_not?: String;
  poster_in?: String[] | String;
  poster_not_in?: String[] | String;
  poster_lt?: String;
  poster_lte?: String;
  poster_gt?: String;
  poster_gte?: String;
  poster_contains?: String;
  poster_not_contains?: String;
  poster_starts_with?: String;
  poster_not_starts_with?: String;
  poster_ends_with?: String;
  poster_not_ends_with?: String;
  video_url?: String;
  video_url_not?: String;
  video_url_in?: String[] | String;
  video_url_not_in?: String[] | String;
  video_url_lt?: String;
  video_url_lte?: String;
  video_url_gt?: String;
  video_url_gte?: String;
  video_url_contains?: String;
  video_url_not_contains?: String;
  video_url_starts_with?: String;
  video_url_not_starts_with?: String;
  video_url_ends_with?: String;
  video_url_not_ends_with?: String;
  AND?: PictureWhereInput[] | PictureWhereInput;
  OR?: PictureWhereInput[] | PictureWhereInput;
  NOT?: PictureWhereInput[] | PictureWhereInput;
}

export interface PictureSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PictureWhereInput;
  AND?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput;
  OR?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput;
  NOT?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput;
}

export interface RatingUpdateInput {
  user?: UserUpdateOneRequiredInput;
  picture?: PictureUpdateOneRequiredInput;
  rate?: Float;
}

export interface PictureUpsertNestedInput {
  update: PictureUpdateDataInput;
  create: PictureCreateInput;
}

export interface PictureCreateOneInput {
  create?: PictureCreateInput;
  connect?: PictureWhereUniqueInput;
}

export interface PictureUpdateOneRequiredInput {
  create?: PictureCreateInput;
  update?: PictureUpdateDataInput;
  upsert?: PictureUpsertNestedInput;
  connect?: PictureWhereUniqueInput;
}

export interface UserCreateInput {
  name: String;
  lastname: String;
  email: String;
  password: String;
  status?: Boolean;
  paypal_id?: String;
  avatar?: String;
}

export type RatingWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput;
  update?: UserUpdateDataInput;
  upsert?: UserUpsertNestedInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateInput {
  name?: String;
  lastname?: String;
  email?: String;
  password?: String;
  status?: Boolean;
  paypal_id?: String;
  avatar?: String;
}

export interface PictureUpdateInput {
  title?: String;
  sinopsis?: String;
  likes?: Float;
  poster?: String;
  video_url?: String;
}

export interface RatingCreateInput {
  user: UserCreateOneInput;
  picture: PictureCreateOneInput;
  rate: Float;
}

export interface UserCreateOneInput {
  create?: UserCreateInput;
  connect?: UserWhereUniqueInput;
}

export interface RatingSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: RatingWhereInput;
  AND?: RatingSubscriptionWhereInput[] | RatingSubscriptionWhereInput;
  OR?: RatingSubscriptionWhereInput[] | RatingSubscriptionWhereInput;
  NOT?: RatingSubscriptionWhereInput[] | RatingSubscriptionWhereInput;
}

export interface PictureUpdateDataInput {
  title?: String;
  sinopsis?: String;
  likes?: Float;
  poster?: String;
  video_url?: String;
}

export interface RatingWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  user?: UserWhereInput;
  picture?: PictureWhereInput;
  rate?: Float;
  rate_not?: Float;
  rate_in?: Float[] | Float;
  rate_not_in?: Float[] | Float;
  rate_lt?: Float;
  rate_lte?: Float;
  rate_gt?: Float;
  rate_gte?: Float;
  AND?: RatingWhereInput[] | RatingWhereInput;
  OR?: RatingWhereInput[] | RatingWhereInput;
  NOT?: RatingWhereInput[] | RatingWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface AggregatePictureNode {
  count: Int;
}

export interface AggregatePicture
  extends Promise<AggregatePictureNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePictureSubscription
  extends Promise<AsyncIterator<AggregatePictureNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface RatingSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface RatingSubscriptionPayload
  extends Promise<RatingSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Rating>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RatingPreviousValues>() => T;
}

export interface RatingSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RatingSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RatingSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RatingPreviousValuesSubscription>() => T;
}

export interface PictureEdgeNode {
  cursor: String;
}

export interface PictureEdge extends Promise<PictureEdgeNode>, Fragmentable {
  node: <T = Picture>() => T;
  cursor: () => Promise<String>;
}

export interface PictureEdgeSubscription
  extends Promise<AsyncIterator<PictureEdgeNode>>,
    Fragmentable {
  node: <T = PictureSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserPreviousValuesNode {
  id: ID_Output;
  name: String;
  lastname: String;
  email: String;
  password: String;
  status?: Boolean;
  paypal_id?: String;
  avatar?: String;
}

export interface UserPreviousValues
  extends Promise<UserPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  lastname: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  status: () => Promise<Boolean>;
  paypal_id: () => Promise<String>;
  avatar: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  lastname: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  status: () => Promise<AsyncIterator<Boolean>>;
  paypal_id: () => Promise<AsyncIterator<String>>;
  avatar: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUserNode {
  count: Int;
}

export interface AggregateUser
  extends Promise<AggregateUserNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUserNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayload
  extends Promise<UserSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = User>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValues>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserConnectionNode {}

export interface UserConnection
  extends Promise<UserConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<UserEdgeNode>>>() => T;
  aggregate: <T = AggregateUser>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<UserEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface PictureConnectionNode {}

export interface PictureConnection
  extends Promise<PictureConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<PictureEdgeNode>>>() => T;
  aggregate: <T = AggregatePicture>() => T;
}

export interface PictureConnectionSubscription
  extends Promise<AsyncIterator<PictureConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<PictureEdgeSubscription>>>>() => T;
  aggregate: <T = AggregatePictureSubscription>() => T;
}

export interface RatingEdgeNode {
  cursor: String;
}

export interface RatingEdge extends Promise<RatingEdgeNode>, Fragmentable {
  node: <T = Rating>() => T;
  cursor: () => Promise<String>;
}

export interface RatingEdgeSubscription
  extends Promise<AsyncIterator<RatingEdgeNode>>,
    Fragmentable {
  node: <T = RatingSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserNode {
  id: ID_Output;
  name: String;
  lastname: String;
  email: String;
  password: String;
  status?: Boolean;
  paypal_id?: String;
  avatar?: String;
}

export interface User extends Promise<UserNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  lastname: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  status: () => Promise<Boolean>;
  paypal_id: () => Promise<String>;
  avatar: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<UserNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  lastname: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  status: () => Promise<AsyncIterator<Boolean>>;
  paypal_id: () => Promise<AsyncIterator<String>>;
  avatar: () => Promise<AsyncIterator<String>>;
}

export interface PicturePreviousValuesNode {
  id: ID_Output;
  title: String;
  sinopsis: String;
  likes: Float;
  poster?: String;
  video_url: String;
}

export interface PicturePreviousValues
  extends Promise<PicturePreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  sinopsis: () => Promise<String>;
  likes: () => Promise<Float>;
  poster: () => Promise<String>;
  video_url: () => Promise<String>;
}

export interface PicturePreviousValuesSubscription
  extends Promise<AsyncIterator<PicturePreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  sinopsis: () => Promise<AsyncIterator<String>>;
  likes: () => Promise<AsyncIterator<Float>>;
  poster: () => Promise<AsyncIterator<String>>;
  video_url: () => Promise<AsyncIterator<String>>;
}

export interface PictureSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface PictureSubscriptionPayload
  extends Promise<PictureSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Picture>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PicturePreviousValues>() => T;
}

export interface PictureSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PictureSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PictureSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PicturePreviousValuesSubscription>() => T;
}

export interface RatingPreviousValuesNode {
  id: ID_Output;
  rate: Float;
}

export interface RatingPreviousValues
  extends Promise<RatingPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  rate: () => Promise<Float>;
}

export interface RatingPreviousValuesSubscription
  extends Promise<AsyncIterator<RatingPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  rate: () => Promise<AsyncIterator<Float>>;
}

export interface PictureNode {
  id: ID_Output;
  title: String;
  sinopsis: String;
  likes: Float;
  poster?: String;
  video_url: String;
}

export interface Picture extends Promise<PictureNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  sinopsis: () => Promise<String>;
  likes: () => Promise<Float>;
  poster: () => Promise<String>;
  video_url: () => Promise<String>;
}

export interface PictureSubscription
  extends Promise<AsyncIterator<PictureNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  sinopsis: () => Promise<AsyncIterator<String>>;
  likes: () => Promise<AsyncIterator<Float>>;
  poster: () => Promise<AsyncIterator<String>>;
  video_url: () => Promise<AsyncIterator<String>>;
}

export interface RatingNode {
  id: ID_Output;
  rate: Float;
}

export interface Rating extends Promise<RatingNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = User>() => T;
  picture: <T = Picture>() => T;
  rate: () => Promise<Float>;
}

export interface RatingSubscription
  extends Promise<AsyncIterator<RatingNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  user: <T = UserSubscription>() => T;
  picture: <T = PictureSubscription>() => T;
  rate: () => Promise<AsyncIterator<Float>>;
}

export interface RatingConnectionNode {}

export interface RatingConnection
  extends Promise<RatingConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<RatingEdgeNode>>>() => T;
  aggregate: <T = AggregateRating>() => T;
}

export interface RatingConnectionSubscription
  extends Promise<AsyncIterator<RatingConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<RatingEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateRatingSubscription>() => T;
}

export interface AggregateRatingNode {
  count: Int;
}

export interface AggregateRating
  extends Promise<AggregateRatingNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRatingSubscription
  extends Promise<AsyncIterator<AggregateRatingNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserEdgeNode {
  cursor: String;
}

export interface UserEdge extends Promise<UserEdgeNode>, Fragmentable {
  node: <T = User>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdgeNode>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Type Defs
 */

export const prisma: Prisma;
