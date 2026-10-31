
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PostImage
 * 
 */
export type PostImage = $Result.DefaultSelection<Prisma.$PostImagePayload>
/**
 * Model Instruction
 * 
 */
export type Instruction = $Result.DefaultSelection<Prisma.$InstructionPayload>
/**
 * Model Ingredients
 * 
 */
export type Ingredients = $Result.DefaultSelection<Prisma.$IngredientsPayload>
/**
 * Model IngredientsItems
 * 
 */
export type IngredientsItems = $Result.DefaultSelection<Prisma.$IngredientsItemsPayload>
/**
 * Model Tags
 * 
 */
export type Tags = $Result.DefaultSelection<Prisma.$TagsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Category: {
  SUNDA: 'SUNDA',
  SOLO: 'SOLO'
};

export type Category = (typeof Category)[keyof typeof Category]


export const Method: {
  RICECOOKER: 'RICECOOKER',
  TRADISIONAL: 'TRADISIONAL'
};

export type Method = (typeof Method)[keyof typeof Method]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type Method = $Enums.Method

export const Method: typeof $Enums.Method

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postImage`: Exposes CRUD operations for the **PostImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostImages
    * const postImages = await prisma.postImage.findMany()
    * ```
    */
  get postImage(): Prisma.PostImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instruction`: Exposes CRUD operations for the **Instruction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instructions
    * const instructions = await prisma.instruction.findMany()
    * ```
    */
  get instruction(): Prisma.InstructionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredients`: Exposes CRUD operations for the **Ingredients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredients.findMany()
    * ```
    */
  get ingredients(): Prisma.IngredientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredientsItems`: Exposes CRUD operations for the **IngredientsItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IngredientsItems
    * const ingredientsItems = await prisma.ingredientsItems.findMany()
    * ```
    */
  get ingredientsItems(): Prisma.IngredientsItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **Tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.TagsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Post: 'Post',
    PostImage: 'PostImage',
    Instruction: 'Instruction',
    Ingredients: 'Ingredients',
    IngredientsItems: 'IngredientsItems',
    Tags: 'Tags'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "post" | "postImage" | "instruction" | "ingredients" | "ingredientsItems" | "tags"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PostImage: {
        payload: Prisma.$PostImagePayload<ExtArgs>
        fields: Prisma.PostImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>
          }
          findFirst: {
            args: Prisma.PostImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>
          }
          findMany: {
            args: Prisma.PostImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>[]
          }
          create: {
            args: Prisma.PostImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>
          }
          createMany: {
            args: Prisma.PostImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>[]
          }
          delete: {
            args: Prisma.PostImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>
          }
          update: {
            args: Prisma.PostImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>
          }
          deleteMany: {
            args: Prisma.PostImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>[]
          }
          upsert: {
            args: Prisma.PostImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostImagePayload>
          }
          aggregate: {
            args: Prisma.PostImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostImage>
          }
          groupBy: {
            args: Prisma.PostImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostImageCountArgs<ExtArgs>
            result: $Utils.Optional<PostImageCountAggregateOutputType> | number
          }
        }
      }
      Instruction: {
        payload: Prisma.$InstructionPayload<ExtArgs>
        fields: Prisma.InstructionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>
          }
          findFirst: {
            args: Prisma.InstructionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>
          }
          findMany: {
            args: Prisma.InstructionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>[]
          }
          create: {
            args: Prisma.InstructionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>
          }
          createMany: {
            args: Prisma.InstructionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>[]
          }
          delete: {
            args: Prisma.InstructionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>
          }
          update: {
            args: Prisma.InstructionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>
          }
          deleteMany: {
            args: Prisma.InstructionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>[]
          }
          upsert: {
            args: Prisma.InstructionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>
          }
          aggregate: {
            args: Prisma.InstructionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstruction>
          }
          groupBy: {
            args: Prisma.InstructionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructionCountArgs<ExtArgs>
            result: $Utils.Optional<InstructionCountAggregateOutputType> | number
          }
        }
      }
      Ingredients: {
        payload: Prisma.$IngredientsPayload<ExtArgs>
        fields: Prisma.IngredientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          findFirst: {
            args: Prisma.IngredientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          findMany: {
            args: Prisma.IngredientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>[]
          }
          create: {
            args: Prisma.IngredientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          createMany: {
            args: Prisma.IngredientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>[]
          }
          delete: {
            args: Prisma.IngredientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          update: {
            args: Prisma.IngredientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          deleteMany: {
            args: Prisma.IngredientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>[]
          }
          upsert: {
            args: Prisma.IngredientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          aggregate: {
            args: Prisma.IngredientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredients>
          }
          groupBy: {
            args: Prisma.IngredientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientsCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientsCountAggregateOutputType> | number
          }
        }
      }
      IngredientsItems: {
        payload: Prisma.$IngredientsItemsPayload<ExtArgs>
        fields: Prisma.IngredientsItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientsItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientsItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsItemsPayload>
          }
          findFirst: {
            args: Prisma.IngredientsItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientsItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsItemsPayload>
          }
          findMany: {
            args: Prisma.IngredientsItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsItemsPayload>[]
          }
          create: {
            args: Prisma.IngredientsItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsItemsPayload>
          }
          createMany: {
            args: Prisma.IngredientsItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientsItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsItemsPayload>[]
          }
          delete: {
            args: Prisma.IngredientsItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsItemsPayload>
          }
          update: {
            args: Prisma.IngredientsItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsItemsPayload>
          }
          deleteMany: {
            args: Prisma.IngredientsItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientsItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientsItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsItemsPayload>[]
          }
          upsert: {
            args: Prisma.IngredientsItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsItemsPayload>
          }
          aggregate: {
            args: Prisma.IngredientsItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredientsItems>
          }
          groupBy: {
            args: Prisma.IngredientsItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientsItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientsItemsCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientsItemsCountAggregateOutputType> | number
          }
        }
      }
      Tags: {
        payload: Prisma.$TagsPayload<ExtArgs>
        fields: Prisma.TagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findFirst: {
            args: Prisma.TagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findMany: {
            args: Prisma.TagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          create: {
            args: Prisma.TagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          createMany: {
            args: Prisma.TagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          delete: {
            args: Prisma.TagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          update: {
            args: Prisma.TagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          deleteMany: {
            args: Prisma.TagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          upsert: {
            args: Prisma.TagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.TagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    post?: PostOmit
    postImage?: PostImageOmit
    instruction?: InstructionOmit
    ingredients?: IngredientsOmit
    ingredientsItems?: IngredientsItemsOmit
    tags?: TagsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    post: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    post?: boolean | UserCountOutputTypeCountPostArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    Instruction: number
    PostImage: number
    Tags: number
    Ingredients: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Instruction?: boolean | PostCountOutputTypeCountInstructionArgs
    PostImage?: boolean | PostCountOutputTypeCountPostImageArgs
    Tags?: boolean | PostCountOutputTypeCountTagsArgs
    Ingredients?: boolean | PostCountOutputTypeCountIngredientsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountInstructionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructionWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPostImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostImageWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientsWhereInput
  }


  /**
   * Count Type IngredientsCountOutputType
   */

  export type IngredientsCountOutputType = {
    IngredientsItems: number
  }

  export type IngredientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    IngredientsItems?: boolean | IngredientsCountOutputTypeCountIngredientsItemsArgs
  }

  // Custom InputTypes
  /**
   * IngredientsCountOutputType without action
   */
  export type IngredientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsCountOutputType
     */
    select?: IngredientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientsCountOutputType without action
   */
  export type IngredientsCountOutputTypeCountIngredientsItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientsItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    post?: boolean | User$postArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    post?: boolean | User$postArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      post: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: Date | null
      image: string | null
      password: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    post<T extends User$postArgs<ExtArgs> = {}>(args?: Subset<T, User$postArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.post
   */
  export type User$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    duration: number | null
    serving: number | null
  }

  export type PostSumAggregateOutputType = {
    duration: number | null
    serving: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    source: string | null
    userId: string | null
    duration: number | null
    serving: number | null
    method: $Enums.Method | null
    category: $Enums.Category | null
    image: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    source: string | null
    userId: string | null
    duration: number | null
    serving: number | null
    method: $Enums.Method | null
    category: $Enums.Category | null
    image: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    description: number
    source: number
    userId: number
    duration: number
    serving: number
    method: number
    category: number
    image: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    duration?: true
    serving?: true
  }

  export type PostSumAggregateInputType = {
    duration?: true
    serving?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    source?: true
    userId?: true
    duration?: true
    serving?: true
    method?: true
    category?: true
    image?: true
    updatedAt?: true
    createdAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    source?: true
    userId?: true
    duration?: true
    serving?: true
    method?: true
    category?: true
    image?: true
    updatedAt?: true
    createdAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    source?: true
    userId?: true
    duration?: true
    serving?: true
    method?: true
    category?: true
    image?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    description: string
    source: string | null
    userId: string
    duration: number
    serving: number
    method: $Enums.Method
    category: $Enums.Category
    image: string | null
    updatedAt: Date
    createdAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    source?: boolean
    userId?: boolean
    duration?: boolean
    serving?: boolean
    method?: boolean
    category?: boolean
    image?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Instruction?: boolean | Post$InstructionArgs<ExtArgs>
    PostImage?: boolean | Post$PostImageArgs<ExtArgs>
    Tags?: boolean | Post$TagsArgs<ExtArgs>
    Ingredients?: boolean | Post$IngredientsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    source?: boolean
    userId?: boolean
    duration?: boolean
    serving?: boolean
    method?: boolean
    category?: boolean
    image?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    source?: boolean
    userId?: boolean
    duration?: boolean
    serving?: boolean
    method?: boolean
    category?: boolean
    image?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    source?: boolean
    userId?: boolean
    duration?: boolean
    serving?: boolean
    method?: boolean
    category?: boolean
    image?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "source" | "userId" | "duration" | "serving" | "method" | "category" | "image" | "updatedAt" | "createdAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Instruction?: boolean | Post$InstructionArgs<ExtArgs>
    PostImage?: boolean | Post$PostImageArgs<ExtArgs>
    Tags?: boolean | Post$TagsArgs<ExtArgs>
    Ingredients?: boolean | Post$IngredientsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Instruction: Prisma.$InstructionPayload<ExtArgs>[]
      PostImage: Prisma.$PostImagePayload<ExtArgs>[]
      Tags: Prisma.$TagsPayload<ExtArgs>[]
      Ingredients: Prisma.$IngredientsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      source: string | null
      userId: string
      duration: number
      serving: number
      method: $Enums.Method
      category: $Enums.Category
      image: string | null
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Instruction<T extends Post$InstructionArgs<ExtArgs> = {}>(args?: Subset<T, Post$InstructionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PostImage<T extends Post$PostImageArgs<ExtArgs> = {}>(args?: Subset<T, Post$PostImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Tags<T extends Post$TagsArgs<ExtArgs> = {}>(args?: Subset<T, Post$TagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Ingredients<T extends Post$IngredientsArgs<ExtArgs> = {}>(args?: Subset<T, Post$IngredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly description: FieldRef<"Post", 'String'>
    readonly source: FieldRef<"Post", 'String'>
    readonly userId: FieldRef<"Post", 'String'>
    readonly duration: FieldRef<"Post", 'Int'>
    readonly serving: FieldRef<"Post", 'Int'>
    readonly method: FieldRef<"Post", 'Method'>
    readonly category: FieldRef<"Post", 'Category'>
    readonly image: FieldRef<"Post", 'String'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.Instruction
   */
  export type Post$InstructionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    where?: InstructionWhereInput
    orderBy?: InstructionOrderByWithRelationInput | InstructionOrderByWithRelationInput[]
    cursor?: InstructionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstructionScalarFieldEnum | InstructionScalarFieldEnum[]
  }

  /**
   * Post.PostImage
   */
  export type Post$PostImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    where?: PostImageWhereInput
    orderBy?: PostImageOrderByWithRelationInput | PostImageOrderByWithRelationInput[]
    cursor?: PostImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostImageScalarFieldEnum | PostImageScalarFieldEnum[]
  }

  /**
   * Post.Tags
   */
  export type Post$TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    where?: TagsWhereInput
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    cursor?: TagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Post.Ingredients
   */
  export type Post$IngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    where?: IngredientsWhereInput
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    cursor?: IngredientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model PostImage
   */

  export type AggregatePostImage = {
    _count: PostImageCountAggregateOutputType | null
    _min: PostImageMinAggregateOutputType | null
    _max: PostImageMaxAggregateOutputType | null
  }

  export type PostImageMinAggregateOutputType = {
    id: string | null
    imageData: Bytes | null
    imageType: string | null
    postId: string | null
  }

  export type PostImageMaxAggregateOutputType = {
    id: string | null
    imageData: Bytes | null
    imageType: string | null
    postId: string | null
  }

  export type PostImageCountAggregateOutputType = {
    id: number
    imageData: number
    imageType: number
    postId: number
    _all: number
  }


  export type PostImageMinAggregateInputType = {
    id?: true
    imageData?: true
    imageType?: true
    postId?: true
  }

  export type PostImageMaxAggregateInputType = {
    id?: true
    imageData?: true
    imageType?: true
    postId?: true
  }

  export type PostImageCountAggregateInputType = {
    id?: true
    imageData?: true
    imageType?: true
    postId?: true
    _all?: true
  }

  export type PostImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostImage to aggregate.
     */
    where?: PostImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     */
    orderBy?: PostImageOrderByWithRelationInput | PostImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostImages
    **/
    _count?: true | PostImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostImageMaxAggregateInputType
  }

  export type GetPostImageAggregateType<T extends PostImageAggregateArgs> = {
        [P in keyof T & keyof AggregatePostImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostImage[P]>
      : GetScalarType<T[P], AggregatePostImage[P]>
  }




  export type PostImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostImageWhereInput
    orderBy?: PostImageOrderByWithAggregationInput | PostImageOrderByWithAggregationInput[]
    by: PostImageScalarFieldEnum[] | PostImageScalarFieldEnum
    having?: PostImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostImageCountAggregateInputType | true
    _min?: PostImageMinAggregateInputType
    _max?: PostImageMaxAggregateInputType
  }

  export type PostImageGroupByOutputType = {
    id: string
    imageData: Bytes
    imageType: string
    postId: string
    _count: PostImageCountAggregateOutputType | null
    _min: PostImageMinAggregateOutputType | null
    _max: PostImageMaxAggregateOutputType | null
  }

  type GetPostImageGroupByPayload<T extends PostImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostImageGroupByOutputType[P]>
            : GetScalarType<T[P], PostImageGroupByOutputType[P]>
        }
      >
    >


  export type PostImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageData?: boolean
    imageType?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postImage"]>

  export type PostImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageData?: boolean
    imageType?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postImage"]>

  export type PostImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageData?: boolean
    imageType?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postImage"]>

  export type PostImageSelectScalar = {
    id?: boolean
    imageData?: boolean
    imageType?: boolean
    postId?: boolean
  }

  export type PostImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageData" | "imageType" | "postId", ExtArgs["result"]["postImage"]>
  export type PostImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostImage"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageData: Prisma.Bytes
      imageType: string
      postId: string
    }, ExtArgs["result"]["postImage"]>
    composites: {}
  }

  type PostImageGetPayload<S extends boolean | null | undefined | PostImageDefaultArgs> = $Result.GetResult<Prisma.$PostImagePayload, S>

  type PostImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostImageCountAggregateInputType | true
    }

  export interface PostImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostImage'], meta: { name: 'PostImage' } }
    /**
     * Find zero or one PostImage that matches the filter.
     * @param {PostImageFindUniqueArgs} args - Arguments to find a PostImage
     * @example
     * // Get one PostImage
     * const postImage = await prisma.postImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostImageFindUniqueArgs>(args: SelectSubset<T, PostImageFindUniqueArgs<ExtArgs>>): Prisma__PostImageClient<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostImageFindUniqueOrThrowArgs} args - Arguments to find a PostImage
     * @example
     * // Get one PostImage
     * const postImage = await prisma.postImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostImageFindUniqueOrThrowArgs>(args: SelectSubset<T, PostImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostImageClient<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageFindFirstArgs} args - Arguments to find a PostImage
     * @example
     * // Get one PostImage
     * const postImage = await prisma.postImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostImageFindFirstArgs>(args?: SelectSubset<T, PostImageFindFirstArgs<ExtArgs>>): Prisma__PostImageClient<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageFindFirstOrThrowArgs} args - Arguments to find a PostImage
     * @example
     * // Get one PostImage
     * const postImage = await prisma.postImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostImageFindFirstOrThrowArgs>(args?: SelectSubset<T, PostImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostImageClient<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostImages
     * const postImages = await prisma.postImage.findMany()
     * 
     * // Get first 10 PostImages
     * const postImages = await prisma.postImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postImageWithIdOnly = await prisma.postImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostImageFindManyArgs>(args?: SelectSubset<T, PostImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostImage.
     * @param {PostImageCreateArgs} args - Arguments to create a PostImage.
     * @example
     * // Create one PostImage
     * const PostImage = await prisma.postImage.create({
     *   data: {
     *     // ... data to create a PostImage
     *   }
     * })
     * 
     */
    create<T extends PostImageCreateArgs>(args: SelectSubset<T, PostImageCreateArgs<ExtArgs>>): Prisma__PostImageClient<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostImages.
     * @param {PostImageCreateManyArgs} args - Arguments to create many PostImages.
     * @example
     * // Create many PostImages
     * const postImage = await prisma.postImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostImageCreateManyArgs>(args?: SelectSubset<T, PostImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostImages and returns the data saved in the database.
     * @param {PostImageCreateManyAndReturnArgs} args - Arguments to create many PostImages.
     * @example
     * // Create many PostImages
     * const postImage = await prisma.postImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostImages and only return the `id`
     * const postImageWithIdOnly = await prisma.postImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostImageCreateManyAndReturnArgs>(args?: SelectSubset<T, PostImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostImage.
     * @param {PostImageDeleteArgs} args - Arguments to delete one PostImage.
     * @example
     * // Delete one PostImage
     * const PostImage = await prisma.postImage.delete({
     *   where: {
     *     // ... filter to delete one PostImage
     *   }
     * })
     * 
     */
    delete<T extends PostImageDeleteArgs>(args: SelectSubset<T, PostImageDeleteArgs<ExtArgs>>): Prisma__PostImageClient<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostImage.
     * @param {PostImageUpdateArgs} args - Arguments to update one PostImage.
     * @example
     * // Update one PostImage
     * const postImage = await prisma.postImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostImageUpdateArgs>(args: SelectSubset<T, PostImageUpdateArgs<ExtArgs>>): Prisma__PostImageClient<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostImages.
     * @param {PostImageDeleteManyArgs} args - Arguments to filter PostImages to delete.
     * @example
     * // Delete a few PostImages
     * const { count } = await prisma.postImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostImageDeleteManyArgs>(args?: SelectSubset<T, PostImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostImages
     * const postImage = await prisma.postImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostImageUpdateManyArgs>(args: SelectSubset<T, PostImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostImages and returns the data updated in the database.
     * @param {PostImageUpdateManyAndReturnArgs} args - Arguments to update many PostImages.
     * @example
     * // Update many PostImages
     * const postImage = await prisma.postImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostImages and only return the `id`
     * const postImageWithIdOnly = await prisma.postImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostImageUpdateManyAndReturnArgs>(args: SelectSubset<T, PostImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostImage.
     * @param {PostImageUpsertArgs} args - Arguments to update or create a PostImage.
     * @example
     * // Update or create a PostImage
     * const postImage = await prisma.postImage.upsert({
     *   create: {
     *     // ... data to create a PostImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostImage we want to update
     *   }
     * })
     */
    upsert<T extends PostImageUpsertArgs>(args: SelectSubset<T, PostImageUpsertArgs<ExtArgs>>): Prisma__PostImageClient<$Result.GetResult<Prisma.$PostImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageCountArgs} args - Arguments to filter PostImages to count.
     * @example
     * // Count the number of PostImages
     * const count = await prisma.postImage.count({
     *   where: {
     *     // ... the filter for the PostImages we want to count
     *   }
     * })
    **/
    count<T extends PostImageCountArgs>(
      args?: Subset<T, PostImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostImageAggregateArgs>(args: Subset<T, PostImageAggregateArgs>): Prisma.PrismaPromise<GetPostImageAggregateType<T>>

    /**
     * Group by PostImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostImageGroupByArgs['orderBy'] }
        : { orderBy?: PostImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostImage model
   */
  readonly fields: PostImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostImage model
   */
  interface PostImageFieldRefs {
    readonly id: FieldRef<"PostImage", 'String'>
    readonly imageData: FieldRef<"PostImage", 'Bytes'>
    readonly imageType: FieldRef<"PostImage", 'String'>
    readonly postId: FieldRef<"PostImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostImage findUnique
   */
  export type PostImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * Filter, which PostImage to fetch.
     */
    where: PostImageWhereUniqueInput
  }

  /**
   * PostImage findUniqueOrThrow
   */
  export type PostImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * Filter, which PostImage to fetch.
     */
    where: PostImageWhereUniqueInput
  }

  /**
   * PostImage findFirst
   */
  export type PostImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * Filter, which PostImage to fetch.
     */
    where?: PostImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     */
    orderBy?: PostImageOrderByWithRelationInput | PostImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostImages.
     */
    cursor?: PostImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostImages.
     */
    distinct?: PostImageScalarFieldEnum | PostImageScalarFieldEnum[]
  }

  /**
   * PostImage findFirstOrThrow
   */
  export type PostImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * Filter, which PostImage to fetch.
     */
    where?: PostImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     */
    orderBy?: PostImageOrderByWithRelationInput | PostImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostImages.
     */
    cursor?: PostImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostImages.
     */
    distinct?: PostImageScalarFieldEnum | PostImageScalarFieldEnum[]
  }

  /**
   * PostImage findMany
   */
  export type PostImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * Filter, which PostImages to fetch.
     */
    where?: PostImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostImages to fetch.
     */
    orderBy?: PostImageOrderByWithRelationInput | PostImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostImages.
     */
    cursor?: PostImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostImages.
     */
    skip?: number
    distinct?: PostImageScalarFieldEnum | PostImageScalarFieldEnum[]
  }

  /**
   * PostImage create
   */
  export type PostImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * The data needed to create a PostImage.
     */
    data: XOR<PostImageCreateInput, PostImageUncheckedCreateInput>
  }

  /**
   * PostImage createMany
   */
  export type PostImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostImages.
     */
    data: PostImageCreateManyInput | PostImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostImage createManyAndReturn
   */
  export type PostImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * The data used to create many PostImages.
     */
    data: PostImageCreateManyInput | PostImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostImage update
   */
  export type PostImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * The data needed to update a PostImage.
     */
    data: XOR<PostImageUpdateInput, PostImageUncheckedUpdateInput>
    /**
     * Choose, which PostImage to update.
     */
    where: PostImageWhereUniqueInput
  }

  /**
   * PostImage updateMany
   */
  export type PostImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostImages.
     */
    data: XOR<PostImageUpdateManyMutationInput, PostImageUncheckedUpdateManyInput>
    /**
     * Filter which PostImages to update
     */
    where?: PostImageWhereInput
    /**
     * Limit how many PostImages to update.
     */
    limit?: number
  }

  /**
   * PostImage updateManyAndReturn
   */
  export type PostImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * The data used to update PostImages.
     */
    data: XOR<PostImageUpdateManyMutationInput, PostImageUncheckedUpdateManyInput>
    /**
     * Filter which PostImages to update
     */
    where?: PostImageWhereInput
    /**
     * Limit how many PostImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostImage upsert
   */
  export type PostImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * The filter to search for the PostImage to update in case it exists.
     */
    where: PostImageWhereUniqueInput
    /**
     * In case the PostImage found by the `where` argument doesn't exist, create a new PostImage with this data.
     */
    create: XOR<PostImageCreateInput, PostImageUncheckedCreateInput>
    /**
     * In case the PostImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostImageUpdateInput, PostImageUncheckedUpdateInput>
  }

  /**
   * PostImage delete
   */
  export type PostImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
    /**
     * Filter which PostImage to delete.
     */
    where: PostImageWhereUniqueInput
  }

  /**
   * PostImage deleteMany
   */
  export type PostImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostImages to delete
     */
    where?: PostImageWhereInput
    /**
     * Limit how many PostImages to delete.
     */
    limit?: number
  }

  /**
   * PostImage without action
   */
  export type PostImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostImage
     */
    select?: PostImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostImage
     */
    omit?: PostImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostImageInclude<ExtArgs> | null
  }


  /**
   * Model Instruction
   */

  export type AggregateInstruction = {
    _count: InstructionCountAggregateOutputType | null
    _avg: InstructionAvgAggregateOutputType | null
    _sum: InstructionSumAggregateOutputType | null
    _min: InstructionMinAggregateOutputType | null
    _max: InstructionMaxAggregateOutputType | null
  }

  export type InstructionAvgAggregateOutputType = {
    instructionNo: number | null
  }

  export type InstructionSumAggregateOutputType = {
    instructionNo: number | null
  }

  export type InstructionMinAggregateOutputType = {
    id: string | null
    postId: string | null
    instructionNo: number | null
    instruction: string | null
  }

  export type InstructionMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    instructionNo: number | null
    instruction: string | null
  }

  export type InstructionCountAggregateOutputType = {
    id: number
    postId: number
    instructionNo: number
    instruction: number
    _all: number
  }


  export type InstructionAvgAggregateInputType = {
    instructionNo?: true
  }

  export type InstructionSumAggregateInputType = {
    instructionNo?: true
  }

  export type InstructionMinAggregateInputType = {
    id?: true
    postId?: true
    instructionNo?: true
    instruction?: true
  }

  export type InstructionMaxAggregateInputType = {
    id?: true
    postId?: true
    instructionNo?: true
    instruction?: true
  }

  export type InstructionCountAggregateInputType = {
    id?: true
    postId?: true
    instructionNo?: true
    instruction?: true
    _all?: true
  }

  export type InstructionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instruction to aggregate.
     */
    where?: InstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructions to fetch.
     */
    orderBy?: InstructionOrderByWithRelationInput | InstructionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instructions
    **/
    _count?: true | InstructionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstructionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstructionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructionMaxAggregateInputType
  }

  export type GetInstructionAggregateType<T extends InstructionAggregateArgs> = {
        [P in keyof T & keyof AggregateInstruction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstruction[P]>
      : GetScalarType<T[P], AggregateInstruction[P]>
  }




  export type InstructionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructionWhereInput
    orderBy?: InstructionOrderByWithAggregationInput | InstructionOrderByWithAggregationInput[]
    by: InstructionScalarFieldEnum[] | InstructionScalarFieldEnum
    having?: InstructionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructionCountAggregateInputType | true
    _avg?: InstructionAvgAggregateInputType
    _sum?: InstructionSumAggregateInputType
    _min?: InstructionMinAggregateInputType
    _max?: InstructionMaxAggregateInputType
  }

  export type InstructionGroupByOutputType = {
    id: string
    postId: string
    instructionNo: number
    instruction: string
    _count: InstructionCountAggregateOutputType | null
    _avg: InstructionAvgAggregateOutputType | null
    _sum: InstructionSumAggregateOutputType | null
    _min: InstructionMinAggregateOutputType | null
    _max: InstructionMaxAggregateOutputType | null
  }

  type GetInstructionGroupByPayload<T extends InstructionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructionGroupByOutputType[P]>
            : GetScalarType<T[P], InstructionGroupByOutputType[P]>
        }
      >
    >


  export type InstructionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    instructionNo?: boolean
    instruction?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instruction"]>

  export type InstructionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    instructionNo?: boolean
    instruction?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instruction"]>

  export type InstructionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    instructionNo?: boolean
    instruction?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instruction"]>

  export type InstructionSelectScalar = {
    id?: boolean
    postId?: boolean
    instructionNo?: boolean
    instruction?: boolean
  }

  export type InstructionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "instructionNo" | "instruction", ExtArgs["result"]["instruction"]>
  export type InstructionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type InstructionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type InstructionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $InstructionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instruction"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      instructionNo: number
      instruction: string
    }, ExtArgs["result"]["instruction"]>
    composites: {}
  }

  type InstructionGetPayload<S extends boolean | null | undefined | InstructionDefaultArgs> = $Result.GetResult<Prisma.$InstructionPayload, S>

  type InstructionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructionCountAggregateInputType | true
    }

  export interface InstructionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instruction'], meta: { name: 'Instruction' } }
    /**
     * Find zero or one Instruction that matches the filter.
     * @param {InstructionFindUniqueArgs} args - Arguments to find a Instruction
     * @example
     * // Get one Instruction
     * const instruction = await prisma.instruction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructionFindUniqueArgs>(args: SelectSubset<T, InstructionFindUniqueArgs<ExtArgs>>): Prisma__InstructionClient<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instruction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructionFindUniqueOrThrowArgs} args - Arguments to find a Instruction
     * @example
     * // Get one Instruction
     * const instruction = await prisma.instruction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructionFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructionClient<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instruction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionFindFirstArgs} args - Arguments to find a Instruction
     * @example
     * // Get one Instruction
     * const instruction = await prisma.instruction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructionFindFirstArgs>(args?: SelectSubset<T, InstructionFindFirstArgs<ExtArgs>>): Prisma__InstructionClient<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instruction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionFindFirstOrThrowArgs} args - Arguments to find a Instruction
     * @example
     * // Get one Instruction
     * const instruction = await prisma.instruction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructionFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructionClient<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instructions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instructions
     * const instructions = await prisma.instruction.findMany()
     * 
     * // Get first 10 Instructions
     * const instructions = await prisma.instruction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructionWithIdOnly = await prisma.instruction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstructionFindManyArgs>(args?: SelectSubset<T, InstructionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instruction.
     * @param {InstructionCreateArgs} args - Arguments to create a Instruction.
     * @example
     * // Create one Instruction
     * const Instruction = await prisma.instruction.create({
     *   data: {
     *     // ... data to create a Instruction
     *   }
     * })
     * 
     */
    create<T extends InstructionCreateArgs>(args: SelectSubset<T, InstructionCreateArgs<ExtArgs>>): Prisma__InstructionClient<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instructions.
     * @param {InstructionCreateManyArgs} args - Arguments to create many Instructions.
     * @example
     * // Create many Instructions
     * const instruction = await prisma.instruction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructionCreateManyArgs>(args?: SelectSubset<T, InstructionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instructions and returns the data saved in the database.
     * @param {InstructionCreateManyAndReturnArgs} args - Arguments to create many Instructions.
     * @example
     * // Create many Instructions
     * const instruction = await prisma.instruction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instructions and only return the `id`
     * const instructionWithIdOnly = await prisma.instruction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructionCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instruction.
     * @param {InstructionDeleteArgs} args - Arguments to delete one Instruction.
     * @example
     * // Delete one Instruction
     * const Instruction = await prisma.instruction.delete({
     *   where: {
     *     // ... filter to delete one Instruction
     *   }
     * })
     * 
     */
    delete<T extends InstructionDeleteArgs>(args: SelectSubset<T, InstructionDeleteArgs<ExtArgs>>): Prisma__InstructionClient<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instruction.
     * @param {InstructionUpdateArgs} args - Arguments to update one Instruction.
     * @example
     * // Update one Instruction
     * const instruction = await prisma.instruction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructionUpdateArgs>(args: SelectSubset<T, InstructionUpdateArgs<ExtArgs>>): Prisma__InstructionClient<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instructions.
     * @param {InstructionDeleteManyArgs} args - Arguments to filter Instructions to delete.
     * @example
     * // Delete a few Instructions
     * const { count } = await prisma.instruction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructionDeleteManyArgs>(args?: SelectSubset<T, InstructionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instructions
     * const instruction = await prisma.instruction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructionUpdateManyArgs>(args: SelectSubset<T, InstructionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructions and returns the data updated in the database.
     * @param {InstructionUpdateManyAndReturnArgs} args - Arguments to update many Instructions.
     * @example
     * // Update many Instructions
     * const instruction = await prisma.instruction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instructions and only return the `id`
     * const instructionWithIdOnly = await prisma.instruction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstructionUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instruction.
     * @param {InstructionUpsertArgs} args - Arguments to update or create a Instruction.
     * @example
     * // Update or create a Instruction
     * const instruction = await prisma.instruction.upsert({
     *   create: {
     *     // ... data to create a Instruction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instruction we want to update
     *   }
     * })
     */
    upsert<T extends InstructionUpsertArgs>(args: SelectSubset<T, InstructionUpsertArgs<ExtArgs>>): Prisma__InstructionClient<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionCountArgs} args - Arguments to filter Instructions to count.
     * @example
     * // Count the number of Instructions
     * const count = await prisma.instruction.count({
     *   where: {
     *     // ... the filter for the Instructions we want to count
     *   }
     * })
    **/
    count<T extends InstructionCountArgs>(
      args?: Subset<T, InstructionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstructionAggregateArgs>(args: Subset<T, InstructionAggregateArgs>): Prisma.PrismaPromise<GetInstructionAggregateType<T>>

    /**
     * Group by Instruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstructionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructionGroupByArgs['orderBy'] }
        : { orderBy?: InstructionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstructionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instruction model
   */
  readonly fields: InstructionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instruction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Instruction model
   */
  interface InstructionFieldRefs {
    readonly id: FieldRef<"Instruction", 'String'>
    readonly postId: FieldRef<"Instruction", 'String'>
    readonly instructionNo: FieldRef<"Instruction", 'Int'>
    readonly instruction: FieldRef<"Instruction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instruction findUnique
   */
  export type InstructionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * Filter, which Instruction to fetch.
     */
    where: InstructionWhereUniqueInput
  }

  /**
   * Instruction findUniqueOrThrow
   */
  export type InstructionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * Filter, which Instruction to fetch.
     */
    where: InstructionWhereUniqueInput
  }

  /**
   * Instruction findFirst
   */
  export type InstructionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * Filter, which Instruction to fetch.
     */
    where?: InstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructions to fetch.
     */
    orderBy?: InstructionOrderByWithRelationInput | InstructionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructions.
     */
    cursor?: InstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructions.
     */
    distinct?: InstructionScalarFieldEnum | InstructionScalarFieldEnum[]
  }

  /**
   * Instruction findFirstOrThrow
   */
  export type InstructionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * Filter, which Instruction to fetch.
     */
    where?: InstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructions to fetch.
     */
    orderBy?: InstructionOrderByWithRelationInput | InstructionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructions.
     */
    cursor?: InstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructions.
     */
    distinct?: InstructionScalarFieldEnum | InstructionScalarFieldEnum[]
  }

  /**
   * Instruction findMany
   */
  export type InstructionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * Filter, which Instructions to fetch.
     */
    where?: InstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructions to fetch.
     */
    orderBy?: InstructionOrderByWithRelationInput | InstructionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instructions.
     */
    cursor?: InstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructions.
     */
    skip?: number
    distinct?: InstructionScalarFieldEnum | InstructionScalarFieldEnum[]
  }

  /**
   * Instruction create
   */
  export type InstructionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * The data needed to create a Instruction.
     */
    data: XOR<InstructionCreateInput, InstructionUncheckedCreateInput>
  }

  /**
   * Instruction createMany
   */
  export type InstructionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instructions.
     */
    data: InstructionCreateManyInput | InstructionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instruction createManyAndReturn
   */
  export type InstructionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * The data used to create many Instructions.
     */
    data: InstructionCreateManyInput | InstructionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instruction update
   */
  export type InstructionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * The data needed to update a Instruction.
     */
    data: XOR<InstructionUpdateInput, InstructionUncheckedUpdateInput>
    /**
     * Choose, which Instruction to update.
     */
    where: InstructionWhereUniqueInput
  }

  /**
   * Instruction updateMany
   */
  export type InstructionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instructions.
     */
    data: XOR<InstructionUpdateManyMutationInput, InstructionUncheckedUpdateManyInput>
    /**
     * Filter which Instructions to update
     */
    where?: InstructionWhereInput
    /**
     * Limit how many Instructions to update.
     */
    limit?: number
  }

  /**
   * Instruction updateManyAndReturn
   */
  export type InstructionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * The data used to update Instructions.
     */
    data: XOR<InstructionUpdateManyMutationInput, InstructionUncheckedUpdateManyInput>
    /**
     * Filter which Instructions to update
     */
    where?: InstructionWhereInput
    /**
     * Limit how many Instructions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instruction upsert
   */
  export type InstructionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * The filter to search for the Instruction to update in case it exists.
     */
    where: InstructionWhereUniqueInput
    /**
     * In case the Instruction found by the `where` argument doesn't exist, create a new Instruction with this data.
     */
    create: XOR<InstructionCreateInput, InstructionUncheckedCreateInput>
    /**
     * In case the Instruction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructionUpdateInput, InstructionUncheckedUpdateInput>
  }

  /**
   * Instruction delete
   */
  export type InstructionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * Filter which Instruction to delete.
     */
    where: InstructionWhereUniqueInput
  }

  /**
   * Instruction deleteMany
   */
  export type InstructionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructions to delete
     */
    where?: InstructionWhereInput
    /**
     * Limit how many Instructions to delete.
     */
    limit?: number
  }

  /**
   * Instruction without action
   */
  export type InstructionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
  }


  /**
   * Model Ingredients
   */

  export type AggregateIngredients = {
    _count: IngredientsCountAggregateOutputType | null
    _min: IngredientsMinAggregateOutputType | null
    _max: IngredientsMaxAggregateOutputType | null
  }

  export type IngredientsMinAggregateOutputType = {
    id: string | null
    ingredientName: string | null
    postId: string | null
  }

  export type IngredientsMaxAggregateOutputType = {
    id: string | null
    ingredientName: string | null
    postId: string | null
  }

  export type IngredientsCountAggregateOutputType = {
    id: number
    ingredientName: number
    postId: number
    _all: number
  }


  export type IngredientsMinAggregateInputType = {
    id?: true
    ingredientName?: true
    postId?: true
  }

  export type IngredientsMaxAggregateInputType = {
    id?: true
    ingredientName?: true
    postId?: true
  }

  export type IngredientsCountAggregateInputType = {
    id?: true
    ingredientName?: true
    postId?: true
    _all?: true
  }

  export type IngredientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to aggregate.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientsMaxAggregateInputType
  }

  export type GetIngredientsAggregateType<T extends IngredientsAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredients[P]>
      : GetScalarType<T[P], AggregateIngredients[P]>
  }




  export type IngredientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientsWhereInput
    orderBy?: IngredientsOrderByWithAggregationInput | IngredientsOrderByWithAggregationInput[]
    by: IngredientsScalarFieldEnum[] | IngredientsScalarFieldEnum
    having?: IngredientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientsCountAggregateInputType | true
    _min?: IngredientsMinAggregateInputType
    _max?: IngredientsMaxAggregateInputType
  }

  export type IngredientsGroupByOutputType = {
    id: string
    ingredientName: string
    postId: string
    _count: IngredientsCountAggregateOutputType | null
    _min: IngredientsMinAggregateOutputType | null
    _max: IngredientsMaxAggregateOutputType | null
  }

  type GetIngredientsGroupByPayload<T extends IngredientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientsGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientsGroupByOutputType[P]>
        }
      >
    >


  export type IngredientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingredientName?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    IngredientsItems?: boolean | Ingredients$IngredientsItemsArgs<ExtArgs>
    _count?: boolean | IngredientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredients"]>

  export type IngredientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingredientName?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredients"]>

  export type IngredientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingredientName?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredients"]>

  export type IngredientsSelectScalar = {
    id?: boolean
    ingredientName?: boolean
    postId?: boolean
  }

  export type IngredientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ingredientName" | "postId", ExtArgs["result"]["ingredients"]>
  export type IngredientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    IngredientsItems?: boolean | Ingredients$IngredientsItemsArgs<ExtArgs>
    _count?: boolean | IngredientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type IngredientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $IngredientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredients"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      IngredientsItems: Prisma.$IngredientsItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ingredientName: string
      postId: string
    }, ExtArgs["result"]["ingredients"]>
    composites: {}
  }

  type IngredientsGetPayload<S extends boolean | null | undefined | IngredientsDefaultArgs> = $Result.GetResult<Prisma.$IngredientsPayload, S>

  type IngredientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientsCountAggregateInputType | true
    }

  export interface IngredientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredients'], meta: { name: 'Ingredients' } }
    /**
     * Find zero or one Ingredients that matches the filter.
     * @param {IngredientsFindUniqueArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientsFindUniqueArgs>(args: SelectSubset<T, IngredientsFindUniqueArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientsFindUniqueOrThrowArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientsFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsFindFirstArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientsFindFirstArgs>(args?: SelectSubset<T, IngredientsFindFirstArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsFindFirstOrThrowArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientsFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredients.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientsWithIdOnly = await prisma.ingredients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientsFindManyArgs>(args?: SelectSubset<T, IngredientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredients.
     * @param {IngredientsCreateArgs} args - Arguments to create a Ingredients.
     * @example
     * // Create one Ingredients
     * const Ingredients = await prisma.ingredients.create({
     *   data: {
     *     // ... data to create a Ingredients
     *   }
     * })
     * 
     */
    create<T extends IngredientsCreateArgs>(args: SelectSubset<T, IngredientsCreateArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientsCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredients = await prisma.ingredients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientsCreateManyArgs>(args?: SelectSubset<T, IngredientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientsCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredients = await prisma.ingredients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientsWithIdOnly = await prisma.ingredients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientsCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredients.
     * @param {IngredientsDeleteArgs} args - Arguments to delete one Ingredients.
     * @example
     * // Delete one Ingredients
     * const Ingredients = await prisma.ingredients.delete({
     *   where: {
     *     // ... filter to delete one Ingredients
     *   }
     * })
     * 
     */
    delete<T extends IngredientsDeleteArgs>(args: SelectSubset<T, IngredientsDeleteArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredients.
     * @param {IngredientsUpdateArgs} args - Arguments to update one Ingredients.
     * @example
     * // Update one Ingredients
     * const ingredients = await prisma.ingredients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientsUpdateArgs>(args: SelectSubset<T, IngredientsUpdateArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientsDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientsDeleteManyArgs>(args?: SelectSubset<T, IngredientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredients = await prisma.ingredients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientsUpdateManyArgs>(args: SelectSubset<T, IngredientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientsUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredients = await prisma.ingredients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientsWithIdOnly = await prisma.ingredients.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredientsUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredients.
     * @param {IngredientsUpsertArgs} args - Arguments to update or create a Ingredients.
     * @example
     * // Update or create a Ingredients
     * const ingredients = await prisma.ingredients.upsert({
     *   create: {
     *     // ... data to create a Ingredients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredients we want to update
     *   }
     * })
     */
    upsert<T extends IngredientsUpsertArgs>(args: SelectSubset<T, IngredientsUpsertArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredients.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientsCountArgs>(
      args?: Subset<T, IngredientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredientsAggregateArgs>(args: Subset<T, IngredientsAggregateArgs>): Prisma.PrismaPromise<GetIngredientsAggregateType<T>>

    /**
     * Group by Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngredientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientsGroupByArgs['orderBy'] }
        : { orderBy?: IngredientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredients model
   */
  readonly fields: IngredientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    IngredientsItems<T extends Ingredients$IngredientsItemsArgs<ExtArgs> = {}>(args?: Subset<T, Ingredients$IngredientsItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ingredients model
   */
  interface IngredientsFieldRefs {
    readonly id: FieldRef<"Ingredients", 'String'>
    readonly ingredientName: FieldRef<"Ingredients", 'String'>
    readonly postId: FieldRef<"Ingredients", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ingredients findUnique
   */
  export type IngredientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where: IngredientsWhereUniqueInput
  }

  /**
   * Ingredients findUniqueOrThrow
   */
  export type IngredientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where: IngredientsWhereUniqueInput
  }

  /**
   * Ingredients findFirst
   */
  export type IngredientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }

  /**
   * Ingredients findFirstOrThrow
   */
  export type IngredientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }

  /**
   * Ingredients findMany
   */
  export type IngredientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }

  /**
   * Ingredients create
   */
  export type IngredientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredients.
     */
    data: XOR<IngredientsCreateInput, IngredientsUncheckedCreateInput>
  }

  /**
   * Ingredients createMany
   */
  export type IngredientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientsCreateManyInput | IngredientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredients createManyAndReturn
   */
  export type IngredientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientsCreateManyInput | IngredientsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingredients update
   */
  export type IngredientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredients.
     */
    data: XOR<IngredientsUpdateInput, IngredientsUncheckedUpdateInput>
    /**
     * Choose, which Ingredients to update.
     */
    where: IngredientsWhereUniqueInput
  }

  /**
   * Ingredients updateMany
   */
  export type IngredientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientsUpdateManyMutationInput, IngredientsUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientsWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredients updateManyAndReturn
   */
  export type IngredientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientsUpdateManyMutationInput, IngredientsUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientsWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingredients upsert
   */
  export type IngredientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredients to update in case it exists.
     */
    where: IngredientsWhereUniqueInput
    /**
     * In case the Ingredients found by the `where` argument doesn't exist, create a new Ingredients with this data.
     */
    create: XOR<IngredientsCreateInput, IngredientsUncheckedCreateInput>
    /**
     * In case the Ingredients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientsUpdateInput, IngredientsUncheckedUpdateInput>
  }

  /**
   * Ingredients delete
   */
  export type IngredientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter which Ingredients to delete.
     */
    where: IngredientsWhereUniqueInput
  }

  /**
   * Ingredients deleteMany
   */
  export type IngredientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientsWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredients.IngredientsItems
   */
  export type Ingredients$IngredientsItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsItems
     */
    select?: IngredientsItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientsItems
     */
    omit?: IngredientsItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsItemsInclude<ExtArgs> | null
    where?: IngredientsItemsWhereInput
    orderBy?: IngredientsItemsOrderByWithRelationInput | IngredientsItemsOrderByWithRelationInput[]
    cursor?: IngredientsItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientsItemsScalarFieldEnum | IngredientsItemsScalarFieldEnum[]
  }

  /**
   * Ingredients without action
   */
  export type IngredientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
  }


  /**
   * Model IngredientsItems
   */

  export type AggregateIngredientsItems = {
    _count: IngredientsItemsCountAggregateOutputType | null
    _min: IngredientsItemsMinAggregateOutputType | null
    _max: IngredientsItemsMaxAggregateOutputType | null
  }

  export type IngredientsItemsMinAggregateOutputType = {
    id: string | null
    ingredientsId: string | null
    itemsName: string | null
  }

  export type IngredientsItemsMaxAggregateOutputType = {
    id: string | null
    ingredientsId: string | null
    itemsName: string | null
  }

  export type IngredientsItemsCountAggregateOutputType = {
    id: number
    ingredientsId: number
    itemsName: number
    _all: number
  }


  export type IngredientsItemsMinAggregateInputType = {
    id?: true
    ingredientsId?: true
    itemsName?: true
  }

  export type IngredientsItemsMaxAggregateInputType = {
    id?: true
    ingredientsId?: true
    itemsName?: true
  }

  export type IngredientsItemsCountAggregateInputType = {
    id?: true
    ingredientsId?: true
    itemsName?: true
    _all?: true
  }

  export type IngredientsItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngredientsItems to aggregate.
     */
    where?: IngredientsItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientsItems to fetch.
     */
    orderBy?: IngredientsItemsOrderByWithRelationInput | IngredientsItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientsItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientsItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IngredientsItems
    **/
    _count?: true | IngredientsItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientsItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientsItemsMaxAggregateInputType
  }

  export type GetIngredientsItemsAggregateType<T extends IngredientsItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredientsItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredientsItems[P]>
      : GetScalarType<T[P], AggregateIngredientsItems[P]>
  }




  export type IngredientsItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientsItemsWhereInput
    orderBy?: IngredientsItemsOrderByWithAggregationInput | IngredientsItemsOrderByWithAggregationInput[]
    by: IngredientsItemsScalarFieldEnum[] | IngredientsItemsScalarFieldEnum
    having?: IngredientsItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientsItemsCountAggregateInputType | true
    _min?: IngredientsItemsMinAggregateInputType
    _max?: IngredientsItemsMaxAggregateInputType
  }

  export type IngredientsItemsGroupByOutputType = {
    id: string
    ingredientsId: string
    itemsName: string
    _count: IngredientsItemsCountAggregateOutputType | null
    _min: IngredientsItemsMinAggregateOutputType | null
    _max: IngredientsItemsMaxAggregateOutputType | null
  }

  type GetIngredientsItemsGroupByPayload<T extends IngredientsItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientsItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientsItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientsItemsGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientsItemsGroupByOutputType[P]>
        }
      >
    >


  export type IngredientsItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingredientsId?: boolean
    itemsName?: boolean
    ingredients?: boolean | IngredientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientsItems"]>

  export type IngredientsItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingredientsId?: boolean
    itemsName?: boolean
    ingredients?: boolean | IngredientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientsItems"]>

  export type IngredientsItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingredientsId?: boolean
    itemsName?: boolean
    ingredients?: boolean | IngredientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientsItems"]>

  export type IngredientsItemsSelectScalar = {
    id?: boolean
    ingredientsId?: boolean
    itemsName?: boolean
  }

  export type IngredientsItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ingredientsId" | "itemsName", ExtArgs["result"]["ingredientsItems"]>
  export type IngredientsItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | IngredientsDefaultArgs<ExtArgs>
  }
  export type IngredientsItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | IngredientsDefaultArgs<ExtArgs>
  }
  export type IngredientsItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | IngredientsDefaultArgs<ExtArgs>
  }

  export type $IngredientsItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IngredientsItems"
    objects: {
      ingredients: Prisma.$IngredientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ingredientsId: string
      itemsName: string
    }, ExtArgs["result"]["ingredientsItems"]>
    composites: {}
  }

  type IngredientsItemsGetPayload<S extends boolean | null | undefined | IngredientsItemsDefaultArgs> = $Result.GetResult<Prisma.$IngredientsItemsPayload, S>

  type IngredientsItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientsItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientsItemsCountAggregateInputType | true
    }

  export interface IngredientsItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IngredientsItems'], meta: { name: 'IngredientsItems' } }
    /**
     * Find zero or one IngredientsItems that matches the filter.
     * @param {IngredientsItemsFindUniqueArgs} args - Arguments to find a IngredientsItems
     * @example
     * // Get one IngredientsItems
     * const ingredientsItems = await prisma.ingredientsItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientsItemsFindUniqueArgs>(args: SelectSubset<T, IngredientsItemsFindUniqueArgs<ExtArgs>>): Prisma__IngredientsItemsClient<$Result.GetResult<Prisma.$IngredientsItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IngredientsItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientsItemsFindUniqueOrThrowArgs} args - Arguments to find a IngredientsItems
     * @example
     * // Get one IngredientsItems
     * const ingredientsItems = await prisma.ingredientsItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientsItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientsItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientsItemsClient<$Result.GetResult<Prisma.$IngredientsItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngredientsItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsItemsFindFirstArgs} args - Arguments to find a IngredientsItems
     * @example
     * // Get one IngredientsItems
     * const ingredientsItems = await prisma.ingredientsItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientsItemsFindFirstArgs>(args?: SelectSubset<T, IngredientsItemsFindFirstArgs<ExtArgs>>): Prisma__IngredientsItemsClient<$Result.GetResult<Prisma.$IngredientsItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngredientsItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsItemsFindFirstOrThrowArgs} args - Arguments to find a IngredientsItems
     * @example
     * // Get one IngredientsItems
     * const ingredientsItems = await prisma.ingredientsItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientsItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientsItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientsItemsClient<$Result.GetResult<Prisma.$IngredientsItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IngredientsItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IngredientsItems
     * const ingredientsItems = await prisma.ingredientsItems.findMany()
     * 
     * // Get first 10 IngredientsItems
     * const ingredientsItems = await prisma.ingredientsItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientsItemsWithIdOnly = await prisma.ingredientsItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientsItemsFindManyArgs>(args?: SelectSubset<T, IngredientsItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IngredientsItems.
     * @param {IngredientsItemsCreateArgs} args - Arguments to create a IngredientsItems.
     * @example
     * // Create one IngredientsItems
     * const IngredientsItems = await prisma.ingredientsItems.create({
     *   data: {
     *     // ... data to create a IngredientsItems
     *   }
     * })
     * 
     */
    create<T extends IngredientsItemsCreateArgs>(args: SelectSubset<T, IngredientsItemsCreateArgs<ExtArgs>>): Prisma__IngredientsItemsClient<$Result.GetResult<Prisma.$IngredientsItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IngredientsItems.
     * @param {IngredientsItemsCreateManyArgs} args - Arguments to create many IngredientsItems.
     * @example
     * // Create many IngredientsItems
     * const ingredientsItems = await prisma.ingredientsItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientsItemsCreateManyArgs>(args?: SelectSubset<T, IngredientsItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IngredientsItems and returns the data saved in the database.
     * @param {IngredientsItemsCreateManyAndReturnArgs} args - Arguments to create many IngredientsItems.
     * @example
     * // Create many IngredientsItems
     * const ingredientsItems = await prisma.ingredientsItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IngredientsItems and only return the `id`
     * const ingredientsItemsWithIdOnly = await prisma.ingredientsItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientsItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientsItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IngredientsItems.
     * @param {IngredientsItemsDeleteArgs} args - Arguments to delete one IngredientsItems.
     * @example
     * // Delete one IngredientsItems
     * const IngredientsItems = await prisma.ingredientsItems.delete({
     *   where: {
     *     // ... filter to delete one IngredientsItems
     *   }
     * })
     * 
     */
    delete<T extends IngredientsItemsDeleteArgs>(args: SelectSubset<T, IngredientsItemsDeleteArgs<ExtArgs>>): Prisma__IngredientsItemsClient<$Result.GetResult<Prisma.$IngredientsItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IngredientsItems.
     * @param {IngredientsItemsUpdateArgs} args - Arguments to update one IngredientsItems.
     * @example
     * // Update one IngredientsItems
     * const ingredientsItems = await prisma.ingredientsItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientsItemsUpdateArgs>(args: SelectSubset<T, IngredientsItemsUpdateArgs<ExtArgs>>): Prisma__IngredientsItemsClient<$Result.GetResult<Prisma.$IngredientsItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IngredientsItems.
     * @param {IngredientsItemsDeleteManyArgs} args - Arguments to filter IngredientsItems to delete.
     * @example
     * // Delete a few IngredientsItems
     * const { count } = await prisma.ingredientsItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientsItemsDeleteManyArgs>(args?: SelectSubset<T, IngredientsItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngredientsItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IngredientsItems
     * const ingredientsItems = await prisma.ingredientsItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientsItemsUpdateManyArgs>(args: SelectSubset<T, IngredientsItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngredientsItems and returns the data updated in the database.
     * @param {IngredientsItemsUpdateManyAndReturnArgs} args - Arguments to update many IngredientsItems.
     * @example
     * // Update many IngredientsItems
     * const ingredientsItems = await prisma.ingredientsItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IngredientsItems and only return the `id`
     * const ingredientsItemsWithIdOnly = await prisma.ingredientsItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredientsItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientsItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IngredientsItems.
     * @param {IngredientsItemsUpsertArgs} args - Arguments to update or create a IngredientsItems.
     * @example
     * // Update or create a IngredientsItems
     * const ingredientsItems = await prisma.ingredientsItems.upsert({
     *   create: {
     *     // ... data to create a IngredientsItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IngredientsItems we want to update
     *   }
     * })
     */
    upsert<T extends IngredientsItemsUpsertArgs>(args: SelectSubset<T, IngredientsItemsUpsertArgs<ExtArgs>>): Prisma__IngredientsItemsClient<$Result.GetResult<Prisma.$IngredientsItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IngredientsItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsItemsCountArgs} args - Arguments to filter IngredientsItems to count.
     * @example
     * // Count the number of IngredientsItems
     * const count = await prisma.ingredientsItems.count({
     *   where: {
     *     // ... the filter for the IngredientsItems we want to count
     *   }
     * })
    **/
    count<T extends IngredientsItemsCountArgs>(
      args?: Subset<T, IngredientsItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientsItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IngredientsItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredientsItemsAggregateArgs>(args: Subset<T, IngredientsItemsAggregateArgs>): Prisma.PrismaPromise<GetIngredientsItemsAggregateType<T>>

    /**
     * Group by IngredientsItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngredientsItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientsItemsGroupByArgs['orderBy'] }
        : { orderBy?: IngredientsItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredientsItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientsItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IngredientsItems model
   */
  readonly fields: IngredientsItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IngredientsItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientsItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients<T extends IngredientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientsDefaultArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IngredientsItems model
   */
  interface IngredientsItemsFieldRefs {
    readonly id: FieldRef<"IngredientsItems", 'String'>
    readonly ingredientsId: FieldRef<"IngredientsItems", 'String'>
    readonly itemsName: FieldRef<"IngredientsItems", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IngredientsItems findUnique
   */
  export type IngredientsItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsItems
     */
    select?: IngredientsItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientsItems
     */
    omit?: IngredientsItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsItemsInclude<ExtArgs> | null
    /**
     * Filter, which IngredientsItems to fetch.
     */
    where: IngredientsItemsWhereUniqueInput
  }

  /**
   * IngredientsItems findUniqueOrThrow
   */
  export type IngredientsItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsItems
     */
    select?: IngredientsItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientsItems
     */
    omit?: IngredientsItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsItemsInclude<ExtArgs> | null
    /**
     * Filter, which IngredientsItems to fetch.
     */
    where: IngredientsItemsWhereUniqueInput
  }

  /**
   * IngredientsItems findFirst
   */
  export type IngredientsItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsItems
     */
    select?: IngredientsItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientsItems
     */
    omit?: IngredientsItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsItemsInclude<ExtArgs> | null
    /**
     * Filter, which IngredientsItems to fetch.
     */
    where?: IngredientsItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientsItems to fetch.
     */
    orderBy?: IngredientsItemsOrderByWithRelationInput | IngredientsItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngredientsItems.
     */
    cursor?: IngredientsItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientsItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngredientsItems.
     */
    distinct?: IngredientsItemsScalarFieldEnum | IngredientsItemsScalarFieldEnum[]
  }

  /**
   * IngredientsItems findFirstOrThrow
   */
  export type IngredientsItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsItems
     */
    select?: IngredientsItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientsItems
     */
    omit?: IngredientsItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsItemsInclude<ExtArgs> | null
    /**
     * Filter, which IngredientsItems to fetch.
     */
    where?: IngredientsItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientsItems to fetch.
     */
    orderBy?: IngredientsItemsOrderByWithRelationInput | IngredientsItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngredientsItems.
     */
    cursor?: IngredientsItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientsItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngredientsItems.
     */
    distinct?: IngredientsItemsScalarFieldEnum | IngredientsItemsScalarFieldEnum[]
  }

  /**
   * IngredientsItems findMany
   */
  export type IngredientsItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsItems
     */
    select?: IngredientsItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientsItems
     */
    omit?: IngredientsItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsItemsInclude<ExtArgs> | null
    /**
     * Filter, which IngredientsItems to fetch.
     */
    where?: IngredientsItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientsItems to fetch.
     */
    orderBy?: IngredientsItemsOrderByWithRelationInput | IngredientsItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IngredientsItems.
     */
    cursor?: IngredientsItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientsItems.
     */
    skip?: number
    distinct?: IngredientsItemsScalarFieldEnum | IngredientsItemsScalarFieldEnum[]
  }

  /**
   * IngredientsItems create
   */
  export type IngredientsItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsItems
     */
    select?: IngredientsItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientsItems
     */
    omit?: IngredientsItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a IngredientsItems.
     */
    data: XOR<IngredientsItemsCreateInput, IngredientsItemsUncheckedCreateInput>
  }

  /**
   * IngredientsItems createMany
   */
  export type IngredientsItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IngredientsItems.
     */
    data: IngredientsItemsCreateManyInput | IngredientsItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IngredientsItems createManyAndReturn
   */
  export type IngredientsItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsItems
     */
    select?: IngredientsItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientsItems
     */
    omit?: IngredientsItemsOmit<ExtArgs> | null
    /**
     * The data used to create many IngredientsItems.
     */
    data: IngredientsItemsCreateManyInput | IngredientsItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IngredientsItems update
   */
  export type IngredientsItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsItems
     */
    select?: IngredientsItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientsItems
     */
    omit?: IngredientsItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a IngredientsItems.
     */
    data: XOR<IngredientsItemsUpdateInput, IngredientsItemsUncheckedUpdateInput>
    /**
     * Choose, which IngredientsItems to update.
     */
    where: IngredientsItemsWhereUniqueInput
  }

  /**
   * IngredientsItems updateMany
   */
  export type IngredientsItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IngredientsItems.
     */
    data: XOR<IngredientsItemsUpdateManyMutationInput, IngredientsItemsUncheckedUpdateManyInput>
    /**
     * Filter which IngredientsItems to update
     */
    where?: IngredientsItemsWhereInput
    /**
     * Limit how many IngredientsItems to update.
     */
    limit?: number
  }

  /**
   * IngredientsItems updateManyAndReturn
   */
  export type IngredientsItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsItems
     */
    select?: IngredientsItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientsItems
     */
    omit?: IngredientsItemsOmit<ExtArgs> | null
    /**
     * The data used to update IngredientsItems.
     */
    data: XOR<IngredientsItemsUpdateManyMutationInput, IngredientsItemsUncheckedUpdateManyInput>
    /**
     * Filter which IngredientsItems to update
     */
    where?: IngredientsItemsWhereInput
    /**
     * Limit how many IngredientsItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IngredientsItems upsert
   */
  export type IngredientsItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsItems
     */
    select?: IngredientsItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientsItems
     */
    omit?: IngredientsItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the IngredientsItems to update in case it exists.
     */
    where: IngredientsItemsWhereUniqueInput
    /**
     * In case the IngredientsItems found by the `where` argument doesn't exist, create a new IngredientsItems with this data.
     */
    create: XOR<IngredientsItemsCreateInput, IngredientsItemsUncheckedCreateInput>
    /**
     * In case the IngredientsItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientsItemsUpdateInput, IngredientsItemsUncheckedUpdateInput>
  }

  /**
   * IngredientsItems delete
   */
  export type IngredientsItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsItems
     */
    select?: IngredientsItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientsItems
     */
    omit?: IngredientsItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsItemsInclude<ExtArgs> | null
    /**
     * Filter which IngredientsItems to delete.
     */
    where: IngredientsItemsWhereUniqueInput
  }

  /**
   * IngredientsItems deleteMany
   */
  export type IngredientsItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngredientsItems to delete
     */
    where?: IngredientsItemsWhereInput
    /**
     * Limit how many IngredientsItems to delete.
     */
    limit?: number
  }

  /**
   * IngredientsItems without action
   */
  export type IngredientsItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsItems
     */
    select?: IngredientsItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientsItems
     */
    omit?: IngredientsItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsItemsInclude<ExtArgs> | null
  }


  /**
   * Model Tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsMinAggregateOutputType = {
    id: string | null
    tagName: string | null
    postId: string | null
  }

  export type TagsMaxAggregateOutputType = {
    id: string | null
    tagName: string | null
    postId: string | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    tagName: number
    postId: number
    _all: number
  }


  export type TagsMinAggregateInputType = {
    id?: true
    tagName?: true
    postId?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    tagName?: true
    postId?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    tagName?: true
    postId?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to aggregate.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type TagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsWhereInput
    orderBy?: TagsOrderByWithAggregationInput | TagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: TagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: string
    tagName: string
    postId: string
    _count: TagsCountAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends TagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type TagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagName?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagName?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagName?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectScalar = {
    id?: boolean
    tagName?: boolean
    postId?: boolean
  }

  export type TagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tagName" | "postId", ExtArgs["result"]["tags"]>
  export type TagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type TagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type TagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $TagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tags"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tagName: string
      postId: string
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type TagsGetPayload<S extends boolean | null | undefined | TagsDefaultArgs> = $Result.GetResult<Prisma.$TagsPayload, S>

  type TagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface TagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tags'], meta: { name: 'Tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {TagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagsFindUniqueArgs>(args: SelectSubset<T, TagsFindUniqueArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagsFindUniqueOrThrowArgs>(args: SelectSubset<T, TagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagsFindFirstArgs>(args?: SelectSubset<T, TagsFindFirstArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagsFindFirstOrThrowArgs>(args?: SelectSubset<T, TagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagsFindManyArgs>(args?: SelectSubset<T, TagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {TagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends TagsCreateArgs>(args: SelectSubset<T, TagsCreateArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagsCreateManyArgs>(args?: SelectSubset<T, TagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagsCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagsCreateManyAndReturnArgs>(args?: SelectSubset<T, TagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tags.
     * @param {TagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends TagsDeleteArgs>(args: SelectSubset<T, TagsDeleteArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {TagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagsUpdateArgs>(args: SelectSubset<T, TagsUpdateArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagsDeleteManyArgs>(args?: SelectSubset<T, TagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagsUpdateManyArgs>(args: SelectSubset<T, TagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagsUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagsUpdateManyAndReturnArgs>(args: SelectSubset<T, TagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tags.
     * @param {TagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends TagsUpsertArgs>(args: SelectSubset<T, TagsUpsertArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagsCountArgs>(
      args?: Subset<T, TagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsGroupByArgs['orderBy'] }
        : { orderBy?: TagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tags model
   */
  readonly fields: TagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tags model
   */
  interface TagsFieldRefs {
    readonly id: FieldRef<"Tags", 'String'>
    readonly tagName: FieldRef<"Tags", 'String'>
    readonly postId: FieldRef<"Tags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tags findUnique
   */
  export type TagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags findUniqueOrThrow
   */
  export type TagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags findFirst
   */
  export type TagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags findFirstOrThrow
   */
  export type TagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags findMany
   */
  export type TagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags create
   */
  export type TagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to create a Tags.
     */
    data: XOR<TagsCreateInput, TagsUncheckedCreateInput>
  }

  /**
   * Tags createMany
   */
  export type TagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagsCreateManyInput | TagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tags createManyAndReturn
   */
  export type TagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagsCreateManyInput | TagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tags update
   */
  export type TagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to update a Tags.
     */
    data: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
    /**
     * Choose, which Tags to update.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags updateMany
   */
  export type TagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagsWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tags updateManyAndReturn
   */
  export type TagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagsWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tags upsert
   */
  export type TagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The filter to search for the Tags to update in case it exists.
     */
    where: TagsWhereUniqueInput
    /**
     * In case the Tags found by the `where` argument doesn't exist, create a new Tags with this data.
     */
    create: XOR<TagsCreateInput, TagsUncheckedCreateInput>
    /**
     * In case the Tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
  }

  /**
   * Tags delete
   */
  export type TagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter which Tags to delete.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags deleteMany
   */
  export type TagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagsWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tags without action
   */
  export type TagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    source: 'source',
    userId: 'userId',
    duration: 'duration',
    serving: 'serving',
    method: 'method',
    category: 'category',
    image: 'image',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostImageScalarFieldEnum: {
    id: 'id',
    imageData: 'imageData',
    imageType: 'imageType',
    postId: 'postId'
  };

  export type PostImageScalarFieldEnum = (typeof PostImageScalarFieldEnum)[keyof typeof PostImageScalarFieldEnum]


  export const InstructionScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    instructionNo: 'instructionNo',
    instruction: 'instruction'
  };

  export type InstructionScalarFieldEnum = (typeof InstructionScalarFieldEnum)[keyof typeof InstructionScalarFieldEnum]


  export const IngredientsScalarFieldEnum: {
    id: 'id',
    ingredientName: 'ingredientName',
    postId: 'postId'
  };

  export type IngredientsScalarFieldEnum = (typeof IngredientsScalarFieldEnum)[keyof typeof IngredientsScalarFieldEnum]


  export const IngredientsItemsScalarFieldEnum: {
    id: 'id',
    ingredientsId: 'ingredientsId',
    itemsName: 'itemsName'
  };

  export type IngredientsItemsScalarFieldEnum = (typeof IngredientsItemsScalarFieldEnum)[keyof typeof IngredientsItemsScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    tagName: 'tagName',
    postId: 'postId'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Method'
   */
  export type EnumMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Method'>
    


  /**
   * Reference to a field of type 'Method[]'
   */
  export type ListEnumMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Method[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    post?: PostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    post?: PostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    post?: PostListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    description?: StringFilter<"Post"> | string
    source?: StringNullableFilter<"Post"> | string | null
    userId?: StringFilter<"Post"> | string
    duration?: IntFilter<"Post"> | number
    serving?: IntFilter<"Post"> | number
    method?: EnumMethodFilter<"Post"> | $Enums.Method
    category?: EnumCategoryFilter<"Post"> | $Enums.Category
    image?: StringNullableFilter<"Post"> | string | null
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Instruction?: InstructionListRelationFilter
    PostImage?: PostImageListRelationFilter
    Tags?: TagsListRelationFilter
    Ingredients?: IngredientsListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    source?: SortOrderInput | SortOrder
    userId?: SortOrder
    duration?: SortOrder
    serving?: SortOrder
    method?: SortOrder
    category?: SortOrder
    image?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    Instruction?: InstructionOrderByRelationAggregateInput
    PostImage?: PostImageOrderByRelationAggregateInput
    Tags?: TagsOrderByRelationAggregateInput
    Ingredients?: IngredientsOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    description?: StringFilter<"Post"> | string
    source?: StringNullableFilter<"Post"> | string | null
    userId?: StringFilter<"Post"> | string
    duration?: IntFilter<"Post"> | number
    serving?: IntFilter<"Post"> | number
    method?: EnumMethodFilter<"Post"> | $Enums.Method
    category?: EnumCategoryFilter<"Post"> | $Enums.Category
    image?: StringNullableFilter<"Post"> | string | null
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Instruction?: InstructionListRelationFilter
    PostImage?: PostImageListRelationFilter
    Tags?: TagsListRelationFilter
    Ingredients?: IngredientsListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    source?: SortOrderInput | SortOrder
    userId?: SortOrder
    duration?: SortOrder
    serving?: SortOrder
    method?: SortOrder
    category?: SortOrder
    image?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    description?: StringWithAggregatesFilter<"Post"> | string
    source?: StringNullableWithAggregatesFilter<"Post"> | string | null
    userId?: StringWithAggregatesFilter<"Post"> | string
    duration?: IntWithAggregatesFilter<"Post"> | number
    serving?: IntWithAggregatesFilter<"Post"> | number
    method?: EnumMethodWithAggregatesFilter<"Post"> | $Enums.Method
    category?: EnumCategoryWithAggregatesFilter<"Post"> | $Enums.Category
    image?: StringNullableWithAggregatesFilter<"Post"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type PostImageWhereInput = {
    AND?: PostImageWhereInput | PostImageWhereInput[]
    OR?: PostImageWhereInput[]
    NOT?: PostImageWhereInput | PostImageWhereInput[]
    id?: StringFilter<"PostImage"> | string
    imageData?: BytesFilter<"PostImage"> | Bytes
    imageType?: StringFilter<"PostImage"> | string
    postId?: StringFilter<"PostImage"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostImageOrderByWithRelationInput = {
    id?: SortOrder
    imageData?: SortOrder
    imageType?: SortOrder
    postId?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type PostImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId_id?: PostImagePostIdIdCompoundUniqueInput
    AND?: PostImageWhereInput | PostImageWhereInput[]
    OR?: PostImageWhereInput[]
    NOT?: PostImageWhereInput | PostImageWhereInput[]
    imageData?: BytesFilter<"PostImage"> | Bytes
    imageType?: StringFilter<"PostImage"> | string
    postId?: StringFilter<"PostImage"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "postId_id">

  export type PostImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageData?: SortOrder
    imageType?: SortOrder
    postId?: SortOrder
    _count?: PostImageCountOrderByAggregateInput
    _max?: PostImageMaxOrderByAggregateInput
    _min?: PostImageMinOrderByAggregateInput
  }

  export type PostImageScalarWhereWithAggregatesInput = {
    AND?: PostImageScalarWhereWithAggregatesInput | PostImageScalarWhereWithAggregatesInput[]
    OR?: PostImageScalarWhereWithAggregatesInput[]
    NOT?: PostImageScalarWhereWithAggregatesInput | PostImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostImage"> | string
    imageData?: BytesWithAggregatesFilter<"PostImage"> | Bytes
    imageType?: StringWithAggregatesFilter<"PostImage"> | string
    postId?: StringWithAggregatesFilter<"PostImage"> | string
  }

  export type InstructionWhereInput = {
    AND?: InstructionWhereInput | InstructionWhereInput[]
    OR?: InstructionWhereInput[]
    NOT?: InstructionWhereInput | InstructionWhereInput[]
    id?: StringFilter<"Instruction"> | string
    postId?: StringFilter<"Instruction"> | string
    instructionNo?: IntFilter<"Instruction"> | number
    instruction?: StringFilter<"Instruction"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type InstructionOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    instructionNo?: SortOrder
    instruction?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type InstructionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId_instructionNo?: InstructionPostIdInstructionNoCompoundUniqueInput
    AND?: InstructionWhereInput | InstructionWhereInput[]
    OR?: InstructionWhereInput[]
    NOT?: InstructionWhereInput | InstructionWhereInput[]
    postId?: StringFilter<"Instruction"> | string
    instructionNo?: IntFilter<"Instruction"> | number
    instruction?: StringFilter<"Instruction"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "postId_instructionNo">

  export type InstructionOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    instructionNo?: SortOrder
    instruction?: SortOrder
    _count?: InstructionCountOrderByAggregateInput
    _avg?: InstructionAvgOrderByAggregateInput
    _max?: InstructionMaxOrderByAggregateInput
    _min?: InstructionMinOrderByAggregateInput
    _sum?: InstructionSumOrderByAggregateInput
  }

  export type InstructionScalarWhereWithAggregatesInput = {
    AND?: InstructionScalarWhereWithAggregatesInput | InstructionScalarWhereWithAggregatesInput[]
    OR?: InstructionScalarWhereWithAggregatesInput[]
    NOT?: InstructionScalarWhereWithAggregatesInput | InstructionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Instruction"> | string
    postId?: StringWithAggregatesFilter<"Instruction"> | string
    instructionNo?: IntWithAggregatesFilter<"Instruction"> | number
    instruction?: StringWithAggregatesFilter<"Instruction"> | string
  }

  export type IngredientsWhereInput = {
    AND?: IngredientsWhereInput | IngredientsWhereInput[]
    OR?: IngredientsWhereInput[]
    NOT?: IngredientsWhereInput | IngredientsWhereInput[]
    id?: StringFilter<"Ingredients"> | string
    ingredientName?: StringFilter<"Ingredients"> | string
    postId?: StringFilter<"Ingredients"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    IngredientsItems?: IngredientsItemsListRelationFilter
  }

  export type IngredientsOrderByWithRelationInput = {
    id?: SortOrder
    ingredientName?: SortOrder
    postId?: SortOrder
    post?: PostOrderByWithRelationInput
    IngredientsItems?: IngredientsItemsOrderByRelationAggregateInput
  }

  export type IngredientsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngredientsWhereInput | IngredientsWhereInput[]
    OR?: IngredientsWhereInput[]
    NOT?: IngredientsWhereInput | IngredientsWhereInput[]
    ingredientName?: StringFilter<"Ingredients"> | string
    postId?: StringFilter<"Ingredients"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    IngredientsItems?: IngredientsItemsListRelationFilter
  }, "id">

  export type IngredientsOrderByWithAggregationInput = {
    id?: SortOrder
    ingredientName?: SortOrder
    postId?: SortOrder
    _count?: IngredientsCountOrderByAggregateInput
    _max?: IngredientsMaxOrderByAggregateInput
    _min?: IngredientsMinOrderByAggregateInput
  }

  export type IngredientsScalarWhereWithAggregatesInput = {
    AND?: IngredientsScalarWhereWithAggregatesInput | IngredientsScalarWhereWithAggregatesInput[]
    OR?: IngredientsScalarWhereWithAggregatesInput[]
    NOT?: IngredientsScalarWhereWithAggregatesInput | IngredientsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ingredients"> | string
    ingredientName?: StringWithAggregatesFilter<"Ingredients"> | string
    postId?: StringWithAggregatesFilter<"Ingredients"> | string
  }

  export type IngredientsItemsWhereInput = {
    AND?: IngredientsItemsWhereInput | IngredientsItemsWhereInput[]
    OR?: IngredientsItemsWhereInput[]
    NOT?: IngredientsItemsWhereInput | IngredientsItemsWhereInput[]
    id?: StringFilter<"IngredientsItems"> | string
    ingredientsId?: StringFilter<"IngredientsItems"> | string
    itemsName?: StringFilter<"IngredientsItems"> | string
    ingredients?: XOR<IngredientsScalarRelationFilter, IngredientsWhereInput>
  }

  export type IngredientsItemsOrderByWithRelationInput = {
    id?: SortOrder
    ingredientsId?: SortOrder
    itemsName?: SortOrder
    ingredients?: IngredientsOrderByWithRelationInput
  }

  export type IngredientsItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngredientsItemsWhereInput | IngredientsItemsWhereInput[]
    OR?: IngredientsItemsWhereInput[]
    NOT?: IngredientsItemsWhereInput | IngredientsItemsWhereInput[]
    ingredientsId?: StringFilter<"IngredientsItems"> | string
    itemsName?: StringFilter<"IngredientsItems"> | string
    ingredients?: XOR<IngredientsScalarRelationFilter, IngredientsWhereInput>
  }, "id">

  export type IngredientsItemsOrderByWithAggregationInput = {
    id?: SortOrder
    ingredientsId?: SortOrder
    itemsName?: SortOrder
    _count?: IngredientsItemsCountOrderByAggregateInput
    _max?: IngredientsItemsMaxOrderByAggregateInput
    _min?: IngredientsItemsMinOrderByAggregateInput
  }

  export type IngredientsItemsScalarWhereWithAggregatesInput = {
    AND?: IngredientsItemsScalarWhereWithAggregatesInput | IngredientsItemsScalarWhereWithAggregatesInput[]
    OR?: IngredientsItemsScalarWhereWithAggregatesInput[]
    NOT?: IngredientsItemsScalarWhereWithAggregatesInput | IngredientsItemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IngredientsItems"> | string
    ingredientsId?: StringWithAggregatesFilter<"IngredientsItems"> | string
    itemsName?: StringWithAggregatesFilter<"IngredientsItems"> | string
  }

  export type TagsWhereInput = {
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    id?: StringFilter<"Tags"> | string
    tagName?: StringFilter<"Tags"> | string
    postId?: StringFilter<"Tags"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type TagsOrderByWithRelationInput = {
    id?: SortOrder
    tagName?: SortOrder
    postId?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type TagsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    tagName?: StringFilter<"Tags"> | string
    postId?: StringFilter<"Tags"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type TagsOrderByWithAggregationInput = {
    id?: SortOrder
    tagName?: SortOrder
    postId?: SortOrder
    _count?: TagsCountOrderByAggregateInput
    _max?: TagsMaxOrderByAggregateInput
    _min?: TagsMinOrderByAggregateInput
  }

  export type TagsScalarWhereWithAggregatesInput = {
    AND?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    OR?: TagsScalarWhereWithAggregatesInput[]
    NOT?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tags"> | string
    tagName?: StringWithAggregatesFilter<"Tags"> | string
    postId?: StringWithAggregatesFilter<"Tags"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    post?: PostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    post?: PostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    post?: PostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    post?: PostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    description: string
    source?: string | null
    duration: number
    serving: number
    method?: $Enums.Method
    category?: $Enums.Category
    image?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostInput
    Instruction?: InstructionCreateNestedManyWithoutPostInput
    PostImage?: PostImageCreateNestedManyWithoutPostInput
    Tags?: TagsCreateNestedManyWithoutPostInput
    Ingredients?: IngredientsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    source?: string | null
    userId: string
    duration: number
    serving: number
    method?: $Enums.Method
    category?: $Enums.Category
    image?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    Instruction?: InstructionUncheckedCreateNestedManyWithoutPostInput
    PostImage?: PostImageUncheckedCreateNestedManyWithoutPostInput
    Tags?: TagsUncheckedCreateNestedManyWithoutPostInput
    Ingredients?: IngredientsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    serving?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostNestedInput
    Instruction?: InstructionUpdateManyWithoutPostNestedInput
    PostImage?: PostImageUpdateManyWithoutPostNestedInput
    Tags?: TagsUpdateManyWithoutPostNestedInput
    Ingredients?: IngredientsUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    serving?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Instruction?: InstructionUncheckedUpdateManyWithoutPostNestedInput
    PostImage?: PostImageUncheckedUpdateManyWithoutPostNestedInput
    Tags?: TagsUncheckedUpdateManyWithoutPostNestedInput
    Ingredients?: IngredientsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    description: string
    source?: string | null
    userId: string
    duration: number
    serving: number
    method?: $Enums.Method
    category?: $Enums.Category
    image?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    serving?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    serving?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostImageCreateInput = {
    id?: string
    imageData: Bytes
    imageType: string
    post: PostCreateNestedOneWithoutPostImageInput
  }

  export type PostImageUncheckedCreateInput = {
    id?: string
    imageData: Bytes
    imageType: string
    postId: string
  }

  export type PostImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageData?: BytesFieldUpdateOperationsInput | Bytes
    imageType?: StringFieldUpdateOperationsInput | string
    post?: PostUpdateOneRequiredWithoutPostImageNestedInput
  }

  export type PostImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageData?: BytesFieldUpdateOperationsInput | Bytes
    imageType?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostImageCreateManyInput = {
    id?: string
    imageData: Bytes
    imageType: string
    postId: string
  }

  export type PostImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageData?: BytesFieldUpdateOperationsInput | Bytes
    imageType?: StringFieldUpdateOperationsInput | string
  }

  export type PostImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageData?: BytesFieldUpdateOperationsInput | Bytes
    imageType?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type InstructionCreateInput = {
    id?: string
    instructionNo: number
    instruction: string
    post: PostCreateNestedOneWithoutInstructionInput
  }

  export type InstructionUncheckedCreateInput = {
    id?: string
    postId: string
    instructionNo: number
    instruction: string
  }

  export type InstructionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructionNo?: IntFieldUpdateOperationsInput | number
    instruction?: StringFieldUpdateOperationsInput | string
    post?: PostUpdateOneRequiredWithoutInstructionNestedInput
  }

  export type InstructionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    instructionNo?: IntFieldUpdateOperationsInput | number
    instruction?: StringFieldUpdateOperationsInput | string
  }

  export type InstructionCreateManyInput = {
    id?: string
    postId: string
    instructionNo: number
    instruction: string
  }

  export type InstructionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructionNo?: IntFieldUpdateOperationsInput | number
    instruction?: StringFieldUpdateOperationsInput | string
  }

  export type InstructionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    instructionNo?: IntFieldUpdateOperationsInput | number
    instruction?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientsCreateInput = {
    id?: string
    ingredientName: string
    post: PostCreateNestedOneWithoutIngredientsInput
    IngredientsItems?: IngredientsItemsCreateNestedManyWithoutIngredientsInput
  }

  export type IngredientsUncheckedCreateInput = {
    id?: string
    ingredientName: string
    postId: string
    IngredientsItems?: IngredientsItemsUncheckedCreateNestedManyWithoutIngredientsInput
  }

  export type IngredientsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientName?: StringFieldUpdateOperationsInput | string
    post?: PostUpdateOneRequiredWithoutIngredientsNestedInput
    IngredientsItems?: IngredientsItemsUpdateManyWithoutIngredientsNestedInput
  }

  export type IngredientsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientName?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    IngredientsItems?: IngredientsItemsUncheckedUpdateManyWithoutIngredientsNestedInput
  }

  export type IngredientsCreateManyInput = {
    id?: string
    ingredientName: string
    postId: string
  }

  export type IngredientsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientName?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientName?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientsItemsCreateInput = {
    id?: string
    itemsName: string
    ingredients: IngredientsCreateNestedOneWithoutIngredientsItemsInput
  }

  export type IngredientsItemsUncheckedCreateInput = {
    id?: string
    ingredientsId: string
    itemsName: string
  }

  export type IngredientsItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemsName?: StringFieldUpdateOperationsInput | string
    ingredients?: IngredientsUpdateOneRequiredWithoutIngredientsItemsNestedInput
  }

  export type IngredientsItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientsId?: StringFieldUpdateOperationsInput | string
    itemsName?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientsItemsCreateManyInput = {
    id?: string
    ingredientsId: string
    itemsName: string
  }

  export type IngredientsItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemsName?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientsItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientsId?: StringFieldUpdateOperationsInput | string
    itemsName?: StringFieldUpdateOperationsInput | string
  }

  export type TagsCreateInput = {
    id?: string
    tagName: string
    post: PostCreateNestedOneWithoutTagsInput
  }

  export type TagsUncheckedCreateInput = {
    id?: string
    tagName: string
    postId: string
  }

  export type TagsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagName?: StringFieldUpdateOperationsInput | string
    post?: PostUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TagsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagName?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type TagsCreateManyInput = {
    id?: string
    tagName: string
    postId: string
  }

  export type TagsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagName?: StringFieldUpdateOperationsInput | string
  }

  export type TagsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagName?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.Method | EnumMethodFieldRefInput<$PrismaModel>
    in?: $Enums.Method[] | ListEnumMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Method[] | ListEnumMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumMethodFilter<$PrismaModel> | $Enums.Method
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type InstructionListRelationFilter = {
    every?: InstructionWhereInput
    some?: InstructionWhereInput
    none?: InstructionWhereInput
  }

  export type PostImageListRelationFilter = {
    every?: PostImageWhereInput
    some?: PostImageWhereInput
    none?: PostImageWhereInput
  }

  export type TagsListRelationFilter = {
    every?: TagsWhereInput
    some?: TagsWhereInput
    none?: TagsWhereInput
  }

  export type IngredientsListRelationFilter = {
    every?: IngredientsWhereInput
    some?: IngredientsWhereInput
    none?: IngredientsWhereInput
  }

  export type InstructionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    source?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    serving?: SortOrder
    method?: SortOrder
    category?: SortOrder
    image?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    duration?: SortOrder
    serving?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    source?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    serving?: SortOrder
    method?: SortOrder
    category?: SortOrder
    image?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    source?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    serving?: SortOrder
    method?: SortOrder
    category?: SortOrder
    image?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    duration?: SortOrder
    serving?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Method | EnumMethodFieldRefInput<$PrismaModel>
    in?: $Enums.Method[] | ListEnumMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Method[] | ListEnumMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumMethodWithAggregatesFilter<$PrismaModel> | $Enums.Method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMethodFilter<$PrismaModel>
    _max?: NestedEnumMethodFilter<$PrismaModel>
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Bytes
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PostImagePostIdIdCompoundUniqueInput = {
    postId: string
    id: string
  }

  export type PostImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageData?: SortOrder
    imageType?: SortOrder
    postId?: SortOrder
  }

  export type PostImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageData?: SortOrder
    imageType?: SortOrder
    postId?: SortOrder
  }

  export type PostImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageData?: SortOrder
    imageType?: SortOrder
    postId?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Bytes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type InstructionPostIdInstructionNoCompoundUniqueInput = {
    postId: string
    instructionNo: number
  }

  export type InstructionCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    instructionNo?: SortOrder
    instruction?: SortOrder
  }

  export type InstructionAvgOrderByAggregateInput = {
    instructionNo?: SortOrder
  }

  export type InstructionMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    instructionNo?: SortOrder
    instruction?: SortOrder
  }

  export type InstructionMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    instructionNo?: SortOrder
    instruction?: SortOrder
  }

  export type InstructionSumOrderByAggregateInput = {
    instructionNo?: SortOrder
  }

  export type IngredientsItemsListRelationFilter = {
    every?: IngredientsItemsWhereInput
    some?: IngredientsItemsWhereInput
    none?: IngredientsItemsWhereInput
  }

  export type IngredientsItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredientsCountOrderByAggregateInput = {
    id?: SortOrder
    ingredientName?: SortOrder
    postId?: SortOrder
  }

  export type IngredientsMaxOrderByAggregateInput = {
    id?: SortOrder
    ingredientName?: SortOrder
    postId?: SortOrder
  }

  export type IngredientsMinOrderByAggregateInput = {
    id?: SortOrder
    ingredientName?: SortOrder
    postId?: SortOrder
  }

  export type IngredientsScalarRelationFilter = {
    is?: IngredientsWhereInput
    isNot?: IngredientsWhereInput
  }

  export type IngredientsItemsCountOrderByAggregateInput = {
    id?: SortOrder
    ingredientsId?: SortOrder
    itemsName?: SortOrder
  }

  export type IngredientsItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    ingredientsId?: SortOrder
    itemsName?: SortOrder
  }

  export type IngredientsItemsMinOrderByAggregateInput = {
    id?: SortOrder
    ingredientsId?: SortOrder
    itemsName?: SortOrder
  }

  export type TagsCountOrderByAggregateInput = {
    id?: SortOrder
    tagName?: SortOrder
    postId?: SortOrder
  }

  export type TagsMaxOrderByAggregateInput = {
    id?: SortOrder
    tagName?: SortOrder
    postId?: SortOrder
  }

  export type TagsMinOrderByAggregateInput = {
    id?: SortOrder
    tagName?: SortOrder
    postId?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutPostInput = {
    create?: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostInput
    connect?: UserWhereUniqueInput
  }

  export type InstructionCreateNestedManyWithoutPostInput = {
    create?: XOR<InstructionCreateWithoutPostInput, InstructionUncheckedCreateWithoutPostInput> | InstructionCreateWithoutPostInput[] | InstructionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: InstructionCreateOrConnectWithoutPostInput | InstructionCreateOrConnectWithoutPostInput[]
    createMany?: InstructionCreateManyPostInputEnvelope
    connect?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
  }

  export type PostImageCreateNestedManyWithoutPostInput = {
    create?: XOR<PostImageCreateWithoutPostInput, PostImageUncheckedCreateWithoutPostInput> | PostImageCreateWithoutPostInput[] | PostImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostImageCreateOrConnectWithoutPostInput | PostImageCreateOrConnectWithoutPostInput[]
    createMany?: PostImageCreateManyPostInputEnvelope
    connect?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
  }

  export type TagsCreateNestedManyWithoutPostInput = {
    create?: XOR<TagsCreateWithoutPostInput, TagsUncheckedCreateWithoutPostInput> | TagsCreateWithoutPostInput[] | TagsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutPostInput | TagsCreateOrConnectWithoutPostInput[]
    createMany?: TagsCreateManyPostInputEnvelope
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
  }

  export type IngredientsCreateNestedManyWithoutPostInput = {
    create?: XOR<IngredientsCreateWithoutPostInput, IngredientsUncheckedCreateWithoutPostInput> | IngredientsCreateWithoutPostInput[] | IngredientsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: IngredientsCreateOrConnectWithoutPostInput | IngredientsCreateOrConnectWithoutPostInput[]
    createMany?: IngredientsCreateManyPostInputEnvelope
    connect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
  }

  export type InstructionUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<InstructionCreateWithoutPostInput, InstructionUncheckedCreateWithoutPostInput> | InstructionCreateWithoutPostInput[] | InstructionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: InstructionCreateOrConnectWithoutPostInput | InstructionCreateOrConnectWithoutPostInput[]
    createMany?: InstructionCreateManyPostInputEnvelope
    connect?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
  }

  export type PostImageUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostImageCreateWithoutPostInput, PostImageUncheckedCreateWithoutPostInput> | PostImageCreateWithoutPostInput[] | PostImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostImageCreateOrConnectWithoutPostInput | PostImageCreateOrConnectWithoutPostInput[]
    createMany?: PostImageCreateManyPostInputEnvelope
    connect?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
  }

  export type TagsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<TagsCreateWithoutPostInput, TagsUncheckedCreateWithoutPostInput> | TagsCreateWithoutPostInput[] | TagsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutPostInput | TagsCreateOrConnectWithoutPostInput[]
    createMany?: TagsCreateManyPostInputEnvelope
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
  }

  export type IngredientsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<IngredientsCreateWithoutPostInput, IngredientsUncheckedCreateWithoutPostInput> | IngredientsCreateWithoutPostInput[] | IngredientsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: IngredientsCreateOrConnectWithoutPostInput | IngredientsCreateOrConnectWithoutPostInput[]
    createMany?: IngredientsCreateManyPostInputEnvelope
    connect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumMethodFieldUpdateOperationsInput = {
    set?: $Enums.Method
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type UserUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostInput
    upsert?: UserUpsertWithoutPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostInput, UserUpdateWithoutPostInput>, UserUncheckedUpdateWithoutPostInput>
  }

  export type InstructionUpdateManyWithoutPostNestedInput = {
    create?: XOR<InstructionCreateWithoutPostInput, InstructionUncheckedCreateWithoutPostInput> | InstructionCreateWithoutPostInput[] | InstructionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: InstructionCreateOrConnectWithoutPostInput | InstructionCreateOrConnectWithoutPostInput[]
    upsert?: InstructionUpsertWithWhereUniqueWithoutPostInput | InstructionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: InstructionCreateManyPostInputEnvelope
    set?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
    disconnect?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
    delete?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
    connect?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
    update?: InstructionUpdateWithWhereUniqueWithoutPostInput | InstructionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: InstructionUpdateManyWithWhereWithoutPostInput | InstructionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: InstructionScalarWhereInput | InstructionScalarWhereInput[]
  }

  export type PostImageUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostImageCreateWithoutPostInput, PostImageUncheckedCreateWithoutPostInput> | PostImageCreateWithoutPostInput[] | PostImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostImageCreateOrConnectWithoutPostInput | PostImageCreateOrConnectWithoutPostInput[]
    upsert?: PostImageUpsertWithWhereUniqueWithoutPostInput | PostImageUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostImageCreateManyPostInputEnvelope
    set?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
    disconnect?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
    delete?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
    connect?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
    update?: PostImageUpdateWithWhereUniqueWithoutPostInput | PostImageUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostImageUpdateManyWithWhereWithoutPostInput | PostImageUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostImageScalarWhereInput | PostImageScalarWhereInput[]
  }

  export type TagsUpdateManyWithoutPostNestedInput = {
    create?: XOR<TagsCreateWithoutPostInput, TagsUncheckedCreateWithoutPostInput> | TagsCreateWithoutPostInput[] | TagsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutPostInput | TagsCreateOrConnectWithoutPostInput[]
    upsert?: TagsUpsertWithWhereUniqueWithoutPostInput | TagsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: TagsCreateManyPostInputEnvelope
    set?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    disconnect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    delete?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    update?: TagsUpdateWithWhereUniqueWithoutPostInput | TagsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: TagsUpdateManyWithWhereWithoutPostInput | TagsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: TagsScalarWhereInput | TagsScalarWhereInput[]
  }

  export type IngredientsUpdateManyWithoutPostNestedInput = {
    create?: XOR<IngredientsCreateWithoutPostInput, IngredientsUncheckedCreateWithoutPostInput> | IngredientsCreateWithoutPostInput[] | IngredientsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: IngredientsCreateOrConnectWithoutPostInput | IngredientsCreateOrConnectWithoutPostInput[]
    upsert?: IngredientsUpsertWithWhereUniqueWithoutPostInput | IngredientsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: IngredientsCreateManyPostInputEnvelope
    set?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    disconnect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    delete?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    connect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    update?: IngredientsUpdateWithWhereUniqueWithoutPostInput | IngredientsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: IngredientsUpdateManyWithWhereWithoutPostInput | IngredientsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: IngredientsScalarWhereInput | IngredientsScalarWhereInput[]
  }

  export type InstructionUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<InstructionCreateWithoutPostInput, InstructionUncheckedCreateWithoutPostInput> | InstructionCreateWithoutPostInput[] | InstructionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: InstructionCreateOrConnectWithoutPostInput | InstructionCreateOrConnectWithoutPostInput[]
    upsert?: InstructionUpsertWithWhereUniqueWithoutPostInput | InstructionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: InstructionCreateManyPostInputEnvelope
    set?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
    disconnect?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
    delete?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
    connect?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
    update?: InstructionUpdateWithWhereUniqueWithoutPostInput | InstructionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: InstructionUpdateManyWithWhereWithoutPostInput | InstructionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: InstructionScalarWhereInput | InstructionScalarWhereInput[]
  }

  export type PostImageUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostImageCreateWithoutPostInput, PostImageUncheckedCreateWithoutPostInput> | PostImageCreateWithoutPostInput[] | PostImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostImageCreateOrConnectWithoutPostInput | PostImageCreateOrConnectWithoutPostInput[]
    upsert?: PostImageUpsertWithWhereUniqueWithoutPostInput | PostImageUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostImageCreateManyPostInputEnvelope
    set?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
    disconnect?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
    delete?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
    connect?: PostImageWhereUniqueInput | PostImageWhereUniqueInput[]
    update?: PostImageUpdateWithWhereUniqueWithoutPostInput | PostImageUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostImageUpdateManyWithWhereWithoutPostInput | PostImageUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostImageScalarWhereInput | PostImageScalarWhereInput[]
  }

  export type TagsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<TagsCreateWithoutPostInput, TagsUncheckedCreateWithoutPostInput> | TagsCreateWithoutPostInput[] | TagsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutPostInput | TagsCreateOrConnectWithoutPostInput[]
    upsert?: TagsUpsertWithWhereUniqueWithoutPostInput | TagsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: TagsCreateManyPostInputEnvelope
    set?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    disconnect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    delete?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    update?: TagsUpdateWithWhereUniqueWithoutPostInput | TagsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: TagsUpdateManyWithWhereWithoutPostInput | TagsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: TagsScalarWhereInput | TagsScalarWhereInput[]
  }

  export type IngredientsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<IngredientsCreateWithoutPostInput, IngredientsUncheckedCreateWithoutPostInput> | IngredientsCreateWithoutPostInput[] | IngredientsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: IngredientsCreateOrConnectWithoutPostInput | IngredientsCreateOrConnectWithoutPostInput[]
    upsert?: IngredientsUpsertWithWhereUniqueWithoutPostInput | IngredientsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: IngredientsCreateManyPostInputEnvelope
    set?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    disconnect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    delete?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    connect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    update?: IngredientsUpdateWithWhereUniqueWithoutPostInput | IngredientsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: IngredientsUpdateManyWithWhereWithoutPostInput | IngredientsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: IngredientsScalarWhereInput | IngredientsScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutPostImageInput = {
    create?: XOR<PostCreateWithoutPostImageInput, PostUncheckedCreateWithoutPostImageInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostImageInput
    connect?: PostWhereUniqueInput
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Bytes
  }

  export type PostUpdateOneRequiredWithoutPostImageNestedInput = {
    create?: XOR<PostCreateWithoutPostImageInput, PostUncheckedCreateWithoutPostImageInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostImageInput
    upsert?: PostUpsertWithoutPostImageInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostImageInput, PostUpdateWithoutPostImageInput>, PostUncheckedUpdateWithoutPostImageInput>
  }

  export type PostCreateNestedOneWithoutInstructionInput = {
    create?: XOR<PostCreateWithoutInstructionInput, PostUncheckedCreateWithoutInstructionInput>
    connectOrCreate?: PostCreateOrConnectWithoutInstructionInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutInstructionNestedInput = {
    create?: XOR<PostCreateWithoutInstructionInput, PostUncheckedCreateWithoutInstructionInput>
    connectOrCreate?: PostCreateOrConnectWithoutInstructionInput
    upsert?: PostUpsertWithoutInstructionInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutInstructionInput, PostUpdateWithoutInstructionInput>, PostUncheckedUpdateWithoutInstructionInput>
  }

  export type PostCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<PostCreateWithoutIngredientsInput, PostUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: PostCreateOrConnectWithoutIngredientsInput
    connect?: PostWhereUniqueInput
  }

  export type IngredientsItemsCreateNestedManyWithoutIngredientsInput = {
    create?: XOR<IngredientsItemsCreateWithoutIngredientsInput, IngredientsItemsUncheckedCreateWithoutIngredientsInput> | IngredientsItemsCreateWithoutIngredientsInput[] | IngredientsItemsUncheckedCreateWithoutIngredientsInput[]
    connectOrCreate?: IngredientsItemsCreateOrConnectWithoutIngredientsInput | IngredientsItemsCreateOrConnectWithoutIngredientsInput[]
    createMany?: IngredientsItemsCreateManyIngredientsInputEnvelope
    connect?: IngredientsItemsWhereUniqueInput | IngredientsItemsWhereUniqueInput[]
  }

  export type IngredientsItemsUncheckedCreateNestedManyWithoutIngredientsInput = {
    create?: XOR<IngredientsItemsCreateWithoutIngredientsInput, IngredientsItemsUncheckedCreateWithoutIngredientsInput> | IngredientsItemsCreateWithoutIngredientsInput[] | IngredientsItemsUncheckedCreateWithoutIngredientsInput[]
    connectOrCreate?: IngredientsItemsCreateOrConnectWithoutIngredientsInput | IngredientsItemsCreateOrConnectWithoutIngredientsInput[]
    createMany?: IngredientsItemsCreateManyIngredientsInputEnvelope
    connect?: IngredientsItemsWhereUniqueInput | IngredientsItemsWhereUniqueInput[]
  }

  export type PostUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<PostCreateWithoutIngredientsInput, PostUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: PostCreateOrConnectWithoutIngredientsInput
    upsert?: PostUpsertWithoutIngredientsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutIngredientsInput, PostUpdateWithoutIngredientsInput>, PostUncheckedUpdateWithoutIngredientsInput>
  }

  export type IngredientsItemsUpdateManyWithoutIngredientsNestedInput = {
    create?: XOR<IngredientsItemsCreateWithoutIngredientsInput, IngredientsItemsUncheckedCreateWithoutIngredientsInput> | IngredientsItemsCreateWithoutIngredientsInput[] | IngredientsItemsUncheckedCreateWithoutIngredientsInput[]
    connectOrCreate?: IngredientsItemsCreateOrConnectWithoutIngredientsInput | IngredientsItemsCreateOrConnectWithoutIngredientsInput[]
    upsert?: IngredientsItemsUpsertWithWhereUniqueWithoutIngredientsInput | IngredientsItemsUpsertWithWhereUniqueWithoutIngredientsInput[]
    createMany?: IngredientsItemsCreateManyIngredientsInputEnvelope
    set?: IngredientsItemsWhereUniqueInput | IngredientsItemsWhereUniqueInput[]
    disconnect?: IngredientsItemsWhereUniqueInput | IngredientsItemsWhereUniqueInput[]
    delete?: IngredientsItemsWhereUniqueInput | IngredientsItemsWhereUniqueInput[]
    connect?: IngredientsItemsWhereUniqueInput | IngredientsItemsWhereUniqueInput[]
    update?: IngredientsItemsUpdateWithWhereUniqueWithoutIngredientsInput | IngredientsItemsUpdateWithWhereUniqueWithoutIngredientsInput[]
    updateMany?: IngredientsItemsUpdateManyWithWhereWithoutIngredientsInput | IngredientsItemsUpdateManyWithWhereWithoutIngredientsInput[]
    deleteMany?: IngredientsItemsScalarWhereInput | IngredientsItemsScalarWhereInput[]
  }

  export type IngredientsItemsUncheckedUpdateManyWithoutIngredientsNestedInput = {
    create?: XOR<IngredientsItemsCreateWithoutIngredientsInput, IngredientsItemsUncheckedCreateWithoutIngredientsInput> | IngredientsItemsCreateWithoutIngredientsInput[] | IngredientsItemsUncheckedCreateWithoutIngredientsInput[]
    connectOrCreate?: IngredientsItemsCreateOrConnectWithoutIngredientsInput | IngredientsItemsCreateOrConnectWithoutIngredientsInput[]
    upsert?: IngredientsItemsUpsertWithWhereUniqueWithoutIngredientsInput | IngredientsItemsUpsertWithWhereUniqueWithoutIngredientsInput[]
    createMany?: IngredientsItemsCreateManyIngredientsInputEnvelope
    set?: IngredientsItemsWhereUniqueInput | IngredientsItemsWhereUniqueInput[]
    disconnect?: IngredientsItemsWhereUniqueInput | IngredientsItemsWhereUniqueInput[]
    delete?: IngredientsItemsWhereUniqueInput | IngredientsItemsWhereUniqueInput[]
    connect?: IngredientsItemsWhereUniqueInput | IngredientsItemsWhereUniqueInput[]
    update?: IngredientsItemsUpdateWithWhereUniqueWithoutIngredientsInput | IngredientsItemsUpdateWithWhereUniqueWithoutIngredientsInput[]
    updateMany?: IngredientsItemsUpdateManyWithWhereWithoutIngredientsInput | IngredientsItemsUpdateManyWithWhereWithoutIngredientsInput[]
    deleteMany?: IngredientsItemsScalarWhereInput | IngredientsItemsScalarWhereInput[]
  }

  export type IngredientsCreateNestedOneWithoutIngredientsItemsInput = {
    create?: XOR<IngredientsCreateWithoutIngredientsItemsInput, IngredientsUncheckedCreateWithoutIngredientsItemsInput>
    connectOrCreate?: IngredientsCreateOrConnectWithoutIngredientsItemsInput
    connect?: IngredientsWhereUniqueInput
  }

  export type IngredientsUpdateOneRequiredWithoutIngredientsItemsNestedInput = {
    create?: XOR<IngredientsCreateWithoutIngredientsItemsInput, IngredientsUncheckedCreateWithoutIngredientsItemsInput>
    connectOrCreate?: IngredientsCreateOrConnectWithoutIngredientsItemsInput
    upsert?: IngredientsUpsertWithoutIngredientsItemsInput
    connect?: IngredientsWhereUniqueInput
    update?: XOR<XOR<IngredientsUpdateToOneWithWhereWithoutIngredientsItemsInput, IngredientsUpdateWithoutIngredientsItemsInput>, IngredientsUncheckedUpdateWithoutIngredientsItemsInput>
  }

  export type PostCreateNestedOneWithoutTagsInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput
    upsert?: PostUpsertWithoutTagsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutTagsInput, PostUpdateWithoutTagsInput>, PostUncheckedUpdateWithoutTagsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.Method | EnumMethodFieldRefInput<$PrismaModel>
    in?: $Enums.Method[] | ListEnumMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Method[] | ListEnumMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumMethodFilter<$PrismaModel> | $Enums.Method
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Method | EnumMethodFieldRefInput<$PrismaModel>
    in?: $Enums.Method[] | ListEnumMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Method[] | ListEnumMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumMethodWithAggregatesFilter<$PrismaModel> | $Enums.Method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMethodFilter<$PrismaModel>
    _max?: NestedEnumMethodFilter<$PrismaModel>
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Bytes
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Bytes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    source?: string | null
    duration: number
    serving: number
    method?: $Enums.Method
    category?: $Enums.Category
    image?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    Instruction?: InstructionCreateNestedManyWithoutPostInput
    PostImage?: PostImageCreateNestedManyWithoutPostInput
    Tags?: TagsCreateNestedManyWithoutPostInput
    Ingredients?: IngredientsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    source?: string | null
    duration: number
    serving: number
    method?: $Enums.Method
    category?: $Enums.Category
    image?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    Instruction?: InstructionUncheckedCreateNestedManyWithoutPostInput
    PostImage?: PostImageUncheckedCreateNestedManyWithoutPostInput
    Tags?: TagsUncheckedCreateNestedManyWithoutPostInput
    Ingredients?: IngredientsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    description?: StringFilter<"Post"> | string
    source?: StringNullableFilter<"Post"> | string | null
    userId?: StringFilter<"Post"> | string
    duration?: IntFilter<"Post"> | number
    serving?: IntFilter<"Post"> | number
    method?: EnumMethodFilter<"Post"> | $Enums.Method
    category?: EnumCategoryFilter<"Post"> | $Enums.Category
    image?: StringNullableFilter<"Post"> | string | null
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    post?: PostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    post?: PostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPostInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
  }

  export type InstructionCreateWithoutPostInput = {
    id?: string
    instructionNo: number
    instruction: string
  }

  export type InstructionUncheckedCreateWithoutPostInput = {
    id?: string
    instructionNo: number
    instruction: string
  }

  export type InstructionCreateOrConnectWithoutPostInput = {
    where: InstructionWhereUniqueInput
    create: XOR<InstructionCreateWithoutPostInput, InstructionUncheckedCreateWithoutPostInput>
  }

  export type InstructionCreateManyPostInputEnvelope = {
    data: InstructionCreateManyPostInput | InstructionCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostImageCreateWithoutPostInput = {
    id?: string
    imageData: Bytes
    imageType: string
  }

  export type PostImageUncheckedCreateWithoutPostInput = {
    id?: string
    imageData: Bytes
    imageType: string
  }

  export type PostImageCreateOrConnectWithoutPostInput = {
    where: PostImageWhereUniqueInput
    create: XOR<PostImageCreateWithoutPostInput, PostImageUncheckedCreateWithoutPostInput>
  }

  export type PostImageCreateManyPostInputEnvelope = {
    data: PostImageCreateManyPostInput | PostImageCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type TagsCreateWithoutPostInput = {
    id?: string
    tagName: string
  }

  export type TagsUncheckedCreateWithoutPostInput = {
    id?: string
    tagName: string
  }

  export type TagsCreateOrConnectWithoutPostInput = {
    where: TagsWhereUniqueInput
    create: XOR<TagsCreateWithoutPostInput, TagsUncheckedCreateWithoutPostInput>
  }

  export type TagsCreateManyPostInputEnvelope = {
    data: TagsCreateManyPostInput | TagsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type IngredientsCreateWithoutPostInput = {
    id?: string
    ingredientName: string
    IngredientsItems?: IngredientsItemsCreateNestedManyWithoutIngredientsInput
  }

  export type IngredientsUncheckedCreateWithoutPostInput = {
    id?: string
    ingredientName: string
    IngredientsItems?: IngredientsItemsUncheckedCreateNestedManyWithoutIngredientsInput
  }

  export type IngredientsCreateOrConnectWithoutPostInput = {
    where: IngredientsWhereUniqueInput
    create: XOR<IngredientsCreateWithoutPostInput, IngredientsUncheckedCreateWithoutPostInput>
  }

  export type IngredientsCreateManyPostInputEnvelope = {
    data: IngredientsCreateManyPostInput | IngredientsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostInput = {
    update: XOR<UserUpdateWithoutPostInput, UserUncheckedUpdateWithoutPostInput>
    create: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostInput, UserUncheckedUpdateWithoutPostInput>
  }

  export type UserUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InstructionUpsertWithWhereUniqueWithoutPostInput = {
    where: InstructionWhereUniqueInput
    update: XOR<InstructionUpdateWithoutPostInput, InstructionUncheckedUpdateWithoutPostInput>
    create: XOR<InstructionCreateWithoutPostInput, InstructionUncheckedCreateWithoutPostInput>
  }

  export type InstructionUpdateWithWhereUniqueWithoutPostInput = {
    where: InstructionWhereUniqueInput
    data: XOR<InstructionUpdateWithoutPostInput, InstructionUncheckedUpdateWithoutPostInput>
  }

  export type InstructionUpdateManyWithWhereWithoutPostInput = {
    where: InstructionScalarWhereInput
    data: XOR<InstructionUpdateManyMutationInput, InstructionUncheckedUpdateManyWithoutPostInput>
  }

  export type InstructionScalarWhereInput = {
    AND?: InstructionScalarWhereInput | InstructionScalarWhereInput[]
    OR?: InstructionScalarWhereInput[]
    NOT?: InstructionScalarWhereInput | InstructionScalarWhereInput[]
    id?: StringFilter<"Instruction"> | string
    postId?: StringFilter<"Instruction"> | string
    instructionNo?: IntFilter<"Instruction"> | number
    instruction?: StringFilter<"Instruction"> | string
  }

  export type PostImageUpsertWithWhereUniqueWithoutPostInput = {
    where: PostImageWhereUniqueInput
    update: XOR<PostImageUpdateWithoutPostInput, PostImageUncheckedUpdateWithoutPostInput>
    create: XOR<PostImageCreateWithoutPostInput, PostImageUncheckedCreateWithoutPostInput>
  }

  export type PostImageUpdateWithWhereUniqueWithoutPostInput = {
    where: PostImageWhereUniqueInput
    data: XOR<PostImageUpdateWithoutPostInput, PostImageUncheckedUpdateWithoutPostInput>
  }

  export type PostImageUpdateManyWithWhereWithoutPostInput = {
    where: PostImageScalarWhereInput
    data: XOR<PostImageUpdateManyMutationInput, PostImageUncheckedUpdateManyWithoutPostInput>
  }

  export type PostImageScalarWhereInput = {
    AND?: PostImageScalarWhereInput | PostImageScalarWhereInput[]
    OR?: PostImageScalarWhereInput[]
    NOT?: PostImageScalarWhereInput | PostImageScalarWhereInput[]
    id?: StringFilter<"PostImage"> | string
    imageData?: BytesFilter<"PostImage"> | Bytes
    imageType?: StringFilter<"PostImage"> | string
    postId?: StringFilter<"PostImage"> | string
  }

  export type TagsUpsertWithWhereUniqueWithoutPostInput = {
    where: TagsWhereUniqueInput
    update: XOR<TagsUpdateWithoutPostInput, TagsUncheckedUpdateWithoutPostInput>
    create: XOR<TagsCreateWithoutPostInput, TagsUncheckedCreateWithoutPostInput>
  }

  export type TagsUpdateWithWhereUniqueWithoutPostInput = {
    where: TagsWhereUniqueInput
    data: XOR<TagsUpdateWithoutPostInput, TagsUncheckedUpdateWithoutPostInput>
  }

  export type TagsUpdateManyWithWhereWithoutPostInput = {
    where: TagsScalarWhereInput
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyWithoutPostInput>
  }

  export type TagsScalarWhereInput = {
    AND?: TagsScalarWhereInput | TagsScalarWhereInput[]
    OR?: TagsScalarWhereInput[]
    NOT?: TagsScalarWhereInput | TagsScalarWhereInput[]
    id?: StringFilter<"Tags"> | string
    tagName?: StringFilter<"Tags"> | string
    postId?: StringFilter<"Tags"> | string
  }

  export type IngredientsUpsertWithWhereUniqueWithoutPostInput = {
    where: IngredientsWhereUniqueInput
    update: XOR<IngredientsUpdateWithoutPostInput, IngredientsUncheckedUpdateWithoutPostInput>
    create: XOR<IngredientsCreateWithoutPostInput, IngredientsUncheckedCreateWithoutPostInput>
  }

  export type IngredientsUpdateWithWhereUniqueWithoutPostInput = {
    where: IngredientsWhereUniqueInput
    data: XOR<IngredientsUpdateWithoutPostInput, IngredientsUncheckedUpdateWithoutPostInput>
  }

  export type IngredientsUpdateManyWithWhereWithoutPostInput = {
    where: IngredientsScalarWhereInput
    data: XOR<IngredientsUpdateManyMutationInput, IngredientsUncheckedUpdateManyWithoutPostInput>
  }

  export type IngredientsScalarWhereInput = {
    AND?: IngredientsScalarWhereInput | IngredientsScalarWhereInput[]
    OR?: IngredientsScalarWhereInput[]
    NOT?: IngredientsScalarWhereInput | IngredientsScalarWhereInput[]
    id?: StringFilter<"Ingredients"> | string
    ingredientName?: StringFilter<"Ingredients"> | string
    postId?: StringFilter<"Ingredients"> | string
  }

  export type PostCreateWithoutPostImageInput = {
    id?: string
    title: string
    description: string
    source?: string | null
    duration: number
    serving: number
    method?: $Enums.Method
    category?: $Enums.Category
    image?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostInput
    Instruction?: InstructionCreateNestedManyWithoutPostInput
    Tags?: TagsCreateNestedManyWithoutPostInput
    Ingredients?: IngredientsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPostImageInput = {
    id?: string
    title: string
    description: string
    source?: string | null
    userId: string
    duration: number
    serving: number
    method?: $Enums.Method
    category?: $Enums.Category
    image?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    Instruction?: InstructionUncheckedCreateNestedManyWithoutPostInput
    Tags?: TagsUncheckedCreateNestedManyWithoutPostInput
    Ingredients?: IngredientsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostImageInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostImageInput, PostUncheckedCreateWithoutPostImageInput>
  }

  export type PostUpsertWithoutPostImageInput = {
    update: XOR<PostUpdateWithoutPostImageInput, PostUncheckedUpdateWithoutPostImageInput>
    create: XOR<PostCreateWithoutPostImageInput, PostUncheckedCreateWithoutPostImageInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPostImageInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPostImageInput, PostUncheckedUpdateWithoutPostImageInput>
  }

  export type PostUpdateWithoutPostImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    serving?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostNestedInput
    Instruction?: InstructionUpdateManyWithoutPostNestedInput
    Tags?: TagsUpdateManyWithoutPostNestedInput
    Ingredients?: IngredientsUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPostImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    serving?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Instruction?: InstructionUncheckedUpdateManyWithoutPostNestedInput
    Tags?: TagsUncheckedUpdateManyWithoutPostNestedInput
    Ingredients?: IngredientsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateWithoutInstructionInput = {
    id?: string
    title: string
    description: string
    source?: string | null
    duration: number
    serving: number
    method?: $Enums.Method
    category?: $Enums.Category
    image?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostInput
    PostImage?: PostImageCreateNestedManyWithoutPostInput
    Tags?: TagsCreateNestedManyWithoutPostInput
    Ingredients?: IngredientsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutInstructionInput = {
    id?: string
    title: string
    description: string
    source?: string | null
    userId: string
    duration: number
    serving: number
    method?: $Enums.Method
    category?: $Enums.Category
    image?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    PostImage?: PostImageUncheckedCreateNestedManyWithoutPostInput
    Tags?: TagsUncheckedCreateNestedManyWithoutPostInput
    Ingredients?: IngredientsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutInstructionInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutInstructionInput, PostUncheckedCreateWithoutInstructionInput>
  }

  export type PostUpsertWithoutInstructionInput = {
    update: XOR<PostUpdateWithoutInstructionInput, PostUncheckedUpdateWithoutInstructionInput>
    create: XOR<PostCreateWithoutInstructionInput, PostUncheckedCreateWithoutInstructionInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutInstructionInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutInstructionInput, PostUncheckedUpdateWithoutInstructionInput>
  }

  export type PostUpdateWithoutInstructionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    serving?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostNestedInput
    PostImage?: PostImageUpdateManyWithoutPostNestedInput
    Tags?: TagsUpdateManyWithoutPostNestedInput
    Ingredients?: IngredientsUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutInstructionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    serving?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PostImage?: PostImageUncheckedUpdateManyWithoutPostNestedInput
    Tags?: TagsUncheckedUpdateManyWithoutPostNestedInput
    Ingredients?: IngredientsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateWithoutIngredientsInput = {
    id?: string
    title: string
    description: string
    source?: string | null
    duration: number
    serving: number
    method?: $Enums.Method
    category?: $Enums.Category
    image?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostInput
    Instruction?: InstructionCreateNestedManyWithoutPostInput
    PostImage?: PostImageCreateNestedManyWithoutPostInput
    Tags?: TagsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutIngredientsInput = {
    id?: string
    title: string
    description: string
    source?: string | null
    userId: string
    duration: number
    serving: number
    method?: $Enums.Method
    category?: $Enums.Category
    image?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    Instruction?: InstructionUncheckedCreateNestedManyWithoutPostInput
    PostImage?: PostImageUncheckedCreateNestedManyWithoutPostInput
    Tags?: TagsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutIngredientsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutIngredientsInput, PostUncheckedCreateWithoutIngredientsInput>
  }

  export type IngredientsItemsCreateWithoutIngredientsInput = {
    id?: string
    itemsName: string
  }

  export type IngredientsItemsUncheckedCreateWithoutIngredientsInput = {
    id?: string
    itemsName: string
  }

  export type IngredientsItemsCreateOrConnectWithoutIngredientsInput = {
    where: IngredientsItemsWhereUniqueInput
    create: XOR<IngredientsItemsCreateWithoutIngredientsInput, IngredientsItemsUncheckedCreateWithoutIngredientsInput>
  }

  export type IngredientsItemsCreateManyIngredientsInputEnvelope = {
    data: IngredientsItemsCreateManyIngredientsInput | IngredientsItemsCreateManyIngredientsInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithoutIngredientsInput = {
    update: XOR<PostUpdateWithoutIngredientsInput, PostUncheckedUpdateWithoutIngredientsInput>
    create: XOR<PostCreateWithoutIngredientsInput, PostUncheckedCreateWithoutIngredientsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutIngredientsInput, PostUncheckedUpdateWithoutIngredientsInput>
  }

  export type PostUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    serving?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostNestedInput
    Instruction?: InstructionUpdateManyWithoutPostNestedInput
    PostImage?: PostImageUpdateManyWithoutPostNestedInput
    Tags?: TagsUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    serving?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Instruction?: InstructionUncheckedUpdateManyWithoutPostNestedInput
    PostImage?: PostImageUncheckedUpdateManyWithoutPostNestedInput
    Tags?: TagsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type IngredientsItemsUpsertWithWhereUniqueWithoutIngredientsInput = {
    where: IngredientsItemsWhereUniqueInput
    update: XOR<IngredientsItemsUpdateWithoutIngredientsInput, IngredientsItemsUncheckedUpdateWithoutIngredientsInput>
    create: XOR<IngredientsItemsCreateWithoutIngredientsInput, IngredientsItemsUncheckedCreateWithoutIngredientsInput>
  }

  export type IngredientsItemsUpdateWithWhereUniqueWithoutIngredientsInput = {
    where: IngredientsItemsWhereUniqueInput
    data: XOR<IngredientsItemsUpdateWithoutIngredientsInput, IngredientsItemsUncheckedUpdateWithoutIngredientsInput>
  }

  export type IngredientsItemsUpdateManyWithWhereWithoutIngredientsInput = {
    where: IngredientsItemsScalarWhereInput
    data: XOR<IngredientsItemsUpdateManyMutationInput, IngredientsItemsUncheckedUpdateManyWithoutIngredientsInput>
  }

  export type IngredientsItemsScalarWhereInput = {
    AND?: IngredientsItemsScalarWhereInput | IngredientsItemsScalarWhereInput[]
    OR?: IngredientsItemsScalarWhereInput[]
    NOT?: IngredientsItemsScalarWhereInput | IngredientsItemsScalarWhereInput[]
    id?: StringFilter<"IngredientsItems"> | string
    ingredientsId?: StringFilter<"IngredientsItems"> | string
    itemsName?: StringFilter<"IngredientsItems"> | string
  }

  export type IngredientsCreateWithoutIngredientsItemsInput = {
    id?: string
    ingredientName: string
    post: PostCreateNestedOneWithoutIngredientsInput
  }

  export type IngredientsUncheckedCreateWithoutIngredientsItemsInput = {
    id?: string
    ingredientName: string
    postId: string
  }

  export type IngredientsCreateOrConnectWithoutIngredientsItemsInput = {
    where: IngredientsWhereUniqueInput
    create: XOR<IngredientsCreateWithoutIngredientsItemsInput, IngredientsUncheckedCreateWithoutIngredientsItemsInput>
  }

  export type IngredientsUpsertWithoutIngredientsItemsInput = {
    update: XOR<IngredientsUpdateWithoutIngredientsItemsInput, IngredientsUncheckedUpdateWithoutIngredientsItemsInput>
    create: XOR<IngredientsCreateWithoutIngredientsItemsInput, IngredientsUncheckedCreateWithoutIngredientsItemsInput>
    where?: IngredientsWhereInput
  }

  export type IngredientsUpdateToOneWithWhereWithoutIngredientsItemsInput = {
    where?: IngredientsWhereInput
    data: XOR<IngredientsUpdateWithoutIngredientsItemsInput, IngredientsUncheckedUpdateWithoutIngredientsItemsInput>
  }

  export type IngredientsUpdateWithoutIngredientsItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientName?: StringFieldUpdateOperationsInput | string
    post?: PostUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type IngredientsUncheckedUpdateWithoutIngredientsItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientName?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateWithoutTagsInput = {
    id?: string
    title: string
    description: string
    source?: string | null
    duration: number
    serving: number
    method?: $Enums.Method
    category?: $Enums.Category
    image?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostInput
    Instruction?: InstructionCreateNestedManyWithoutPostInput
    PostImage?: PostImageCreateNestedManyWithoutPostInput
    Ingredients?: IngredientsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    description: string
    source?: string | null
    userId: string
    duration: number
    serving: number
    method?: $Enums.Method
    category?: $Enums.Category
    image?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    Instruction?: InstructionUncheckedCreateNestedManyWithoutPostInput
    PostImage?: PostImageUncheckedCreateNestedManyWithoutPostInput
    Ingredients?: IngredientsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutTagsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
  }

  export type PostUpsertWithoutTagsInput = {
    update: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutTagsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
  }

  export type PostUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    serving?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostNestedInput
    Instruction?: InstructionUpdateManyWithoutPostNestedInput
    PostImage?: PostImageUpdateManyWithoutPostNestedInput
    Ingredients?: IngredientsUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    serving?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Instruction?: InstructionUncheckedUpdateManyWithoutPostNestedInput
    PostImage?: PostImageUncheckedUpdateManyWithoutPostNestedInput
    Ingredients?: IngredientsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyUserInput = {
    id?: string
    title: string
    description: string
    source?: string | null
    duration: number
    serving: number
    method?: $Enums.Method
    category?: $Enums.Category
    image?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    serving?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Instruction?: InstructionUpdateManyWithoutPostNestedInput
    PostImage?: PostImageUpdateManyWithoutPostNestedInput
    Tags?: TagsUpdateManyWithoutPostNestedInput
    Ingredients?: IngredientsUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    serving?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Instruction?: InstructionUncheckedUpdateManyWithoutPostNestedInput
    PostImage?: PostImageUncheckedUpdateManyWithoutPostNestedInput
    Tags?: TagsUncheckedUpdateManyWithoutPostNestedInput
    Ingredients?: IngredientsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    serving?: IntFieldUpdateOperationsInput | number
    method?: EnumMethodFieldUpdateOperationsInput | $Enums.Method
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructionCreateManyPostInput = {
    id?: string
    instructionNo: number
    instruction: string
  }

  export type PostImageCreateManyPostInput = {
    id?: string
    imageData: Bytes
    imageType: string
  }

  export type TagsCreateManyPostInput = {
    id?: string
    tagName: string
  }

  export type IngredientsCreateManyPostInput = {
    id?: string
    ingredientName: string
  }

  export type InstructionUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructionNo?: IntFieldUpdateOperationsInput | number
    instruction?: StringFieldUpdateOperationsInput | string
  }

  export type InstructionUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructionNo?: IntFieldUpdateOperationsInput | number
    instruction?: StringFieldUpdateOperationsInput | string
  }

  export type InstructionUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructionNo?: IntFieldUpdateOperationsInput | number
    instruction?: StringFieldUpdateOperationsInput | string
  }

  export type PostImageUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageData?: BytesFieldUpdateOperationsInput | Bytes
    imageType?: StringFieldUpdateOperationsInput | string
  }

  export type PostImageUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageData?: BytesFieldUpdateOperationsInput | Bytes
    imageType?: StringFieldUpdateOperationsInput | string
  }

  export type PostImageUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageData?: BytesFieldUpdateOperationsInput | Bytes
    imageType?: StringFieldUpdateOperationsInput | string
  }

  export type TagsUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagName?: StringFieldUpdateOperationsInput | string
  }

  export type TagsUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagName?: StringFieldUpdateOperationsInput | string
  }

  export type TagsUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagName?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientsUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientName?: StringFieldUpdateOperationsInput | string
    IngredientsItems?: IngredientsItemsUpdateManyWithoutIngredientsNestedInput
  }

  export type IngredientsUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientName?: StringFieldUpdateOperationsInput | string
    IngredientsItems?: IngredientsItemsUncheckedUpdateManyWithoutIngredientsNestedInput
  }

  export type IngredientsUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientName?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientsItemsCreateManyIngredientsInput = {
    id?: string
    itemsName: string
  }

  export type IngredientsItemsUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemsName?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientsItemsUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemsName?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientsItemsUncheckedUpdateManyWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemsName?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}