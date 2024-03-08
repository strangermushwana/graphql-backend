import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../types/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type FieldWrapper<T> = T;
export type ResolverFn<TResult, TParent, TContext, TArgs> = ((
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
  ) => Promise<TResult> | TResult)
| {
    fragment: TResult;
    resolve: (
      parent: TParent,
      args: TArgs,
      context: TContext,
      info: GraphQLResolveInfo
    ) => Promise<TResult> | TResult;
  };

export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Developer = {
  __typename?: 'Developer';
  bio?: Maybe<FieldWrapper<Scalars['String']>>;
  email: FieldWrapper<Scalars['String']>;
  firstName: FieldWrapper<Scalars['String']>;
  id: FieldWrapper<Scalars['ID']>;
  lastName: FieldWrapper<Scalars['String']>;
  phoneNumber?: Maybe<FieldWrapper<Scalars['String']>>;
  profileURL?: Maybe<FieldWrapper<Scalars['String']>>;
  username: FieldWrapper<Scalars['String']>;
};

export type DeveloperCreateInput = {
  bio?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  profileURL?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type DeveloperEducation = {
  __typename?: 'DeveloperEducation';
  formalEducation?: Maybe<FieldWrapper<Scalars['String']>>;
  id: FieldWrapper<Scalars['ID']>;
  institution?: Maybe<FieldWrapper<Scalars['String']>>;
  year?: Maybe<FieldWrapper<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addDeveloper: FieldWrapper<Developer>;
};


export type MutationAddDeveloperArgs = {
  input: DeveloperCreateInput;
};

export type Query = {
  __typename?: 'Query';
  developer?: Maybe<FieldWrapper<Developer>>;
  user: FieldWrapper<User>;
};


export type QueryDeveloperArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  age: FieldWrapper<Scalars['Int']>;
  id: FieldWrapper<Scalars['String']>;
  name: FieldWrapper<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']>>;
  Developer: ResolverTypeWrapper<Partial<Developer>>;
  DeveloperCreateInput: ResolverTypeWrapper<Partial<DeveloperCreateInput>>;
  DeveloperEducation: ResolverTypeWrapper<Partial<DeveloperEducation>>;
  ID: ResolverTypeWrapper<Partial<Scalars['ID']>>;
  Int: ResolverTypeWrapper<Partial<Scalars['Int']>>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Partial<Scalars['String']>>;
  User: ResolverTypeWrapper<Partial<User>>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Partial<Scalars['Boolean']>;
  Developer: Partial<Developer>;
  DeveloperCreateInput: Partial<DeveloperCreateInput>;
  DeveloperEducation: Partial<DeveloperEducation>;
  ID: Partial<Scalars['ID']>;
  Int: Partial<Scalars['Int']>;
  Mutation: {};
  Query: {};
  String: Partial<Scalars['String']>;
  User: Partial<User>;
}>;

export type DeveloperResolversType<ContextType = Context, ParentType extends ResolversParentTypes['Developer'] = ResolversParentTypes['Developer']> = ResolversObject<{
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profileURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeveloperEducationResolversType<ContextType = Context, ParentType extends ResolversParentTypes['DeveloperEducation'] = ResolversParentTypes['DeveloperEducation']> = ResolversObject<{
  formalEducation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  institution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolversType<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addDeveloper?: Resolver<ResolversTypes['Developer'], ParentType, ContextType, RequireFields<MutationAddDeveloperArgs, 'input'>>;
}>;

export type QueryResolversType<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  developer?: Resolver<Maybe<ResolversTypes['Developer']>, ParentType, ContextType, RequireFields<QueryDeveloperArgs, 'id'>>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
}>;

export type UserResolversType<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Developer?: DeveloperResolversType<ContextType>;
  DeveloperEducation?: DeveloperEducationResolversType<ContextType>;
  Mutation?: MutationResolversType<ContextType>;
  Query?: QueryResolversType<ContextType>;
  User?: UserResolversType<ContextType>;
}>;

