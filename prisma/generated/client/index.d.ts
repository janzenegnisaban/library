
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
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model BorrowedBook
 * 
 */
export type BorrowedBook = $Result.DefaultSelection<Prisma.$BorrowedBookPayload>
/**
 * Model OverdueBook
 * 
 */
export type OverdueBook = $Result.DefaultSelection<Prisma.$OverdueBookPayload>
/**
 * Model ReturnHistory
 * 
 */
export type ReturnHistory = $Result.DefaultSelection<Prisma.$ReturnHistoryPayload>
/**
 * Model DonatedBook
 * 
 */
export type DonatedBook = $Result.DefaultSelection<Prisma.$DonatedBookPayload>
/**
 * Model Query
 * 
 */
export type Query = $Result.DefaultSelection<Prisma.$QueryPayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.borrowedBook`: Exposes CRUD operations for the **BorrowedBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BorrowedBooks
    * const borrowedBooks = await prisma.borrowedBook.findMany()
    * ```
    */
  get borrowedBook(): Prisma.BorrowedBookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.overdueBook`: Exposes CRUD operations for the **OverdueBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OverdueBooks
    * const overdueBooks = await prisma.overdueBook.findMany()
    * ```
    */
  get overdueBook(): Prisma.OverdueBookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.returnHistory`: Exposes CRUD operations for the **ReturnHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReturnHistories
    * const returnHistories = await prisma.returnHistory.findMany()
    * ```
    */
  get returnHistory(): Prisma.ReturnHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donatedBook`: Exposes CRUD operations for the **DonatedBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DonatedBooks
    * const donatedBooks = await prisma.donatedBook.findMany()
    * ```
    */
  get donatedBook(): Prisma.DonatedBookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.query`: Exposes CRUD operations for the **Query** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Queries
    * const queries = await prisma.query.findMany()
    * ```
    */
  get query(): Prisma.QueryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Book: 'Book',
    BorrowedBook: 'BorrowedBook',
    OverdueBook: 'OverdueBook',
    ReturnHistory: 'ReturnHistory',
    DonatedBook: 'DonatedBook',
    Query: 'Query'
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
      modelProps: "user" | "book" | "borrowedBook" | "overdueBook" | "returnHistory" | "donatedBook" | "query"
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
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      BorrowedBook: {
        payload: Prisma.$BorrowedBookPayload<ExtArgs>
        fields: Prisma.BorrowedBookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BorrowedBookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowedBookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BorrowedBookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowedBookPayload>
          }
          findFirst: {
            args: Prisma.BorrowedBookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowedBookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BorrowedBookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowedBookPayload>
          }
          findMany: {
            args: Prisma.BorrowedBookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowedBookPayload>[]
          }
          create: {
            args: Prisma.BorrowedBookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowedBookPayload>
          }
          createMany: {
            args: Prisma.BorrowedBookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BorrowedBookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowedBookPayload>[]
          }
          delete: {
            args: Prisma.BorrowedBookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowedBookPayload>
          }
          update: {
            args: Prisma.BorrowedBookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowedBookPayload>
          }
          deleteMany: {
            args: Prisma.BorrowedBookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BorrowedBookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BorrowedBookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowedBookPayload>[]
          }
          upsert: {
            args: Prisma.BorrowedBookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowedBookPayload>
          }
          aggregate: {
            args: Prisma.BorrowedBookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBorrowedBook>
          }
          groupBy: {
            args: Prisma.BorrowedBookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BorrowedBookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BorrowedBookCountArgs<ExtArgs>
            result: $Utils.Optional<BorrowedBookCountAggregateOutputType> | number
          }
        }
      }
      OverdueBook: {
        payload: Prisma.$OverdueBookPayload<ExtArgs>
        fields: Prisma.OverdueBookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OverdueBookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverdueBookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OverdueBookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverdueBookPayload>
          }
          findFirst: {
            args: Prisma.OverdueBookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverdueBookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OverdueBookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverdueBookPayload>
          }
          findMany: {
            args: Prisma.OverdueBookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverdueBookPayload>[]
          }
          create: {
            args: Prisma.OverdueBookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverdueBookPayload>
          }
          createMany: {
            args: Prisma.OverdueBookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OverdueBookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverdueBookPayload>[]
          }
          delete: {
            args: Prisma.OverdueBookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverdueBookPayload>
          }
          update: {
            args: Prisma.OverdueBookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverdueBookPayload>
          }
          deleteMany: {
            args: Prisma.OverdueBookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OverdueBookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OverdueBookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverdueBookPayload>[]
          }
          upsert: {
            args: Prisma.OverdueBookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverdueBookPayload>
          }
          aggregate: {
            args: Prisma.OverdueBookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOverdueBook>
          }
          groupBy: {
            args: Prisma.OverdueBookGroupByArgs<ExtArgs>
            result: $Utils.Optional<OverdueBookGroupByOutputType>[]
          }
          count: {
            args: Prisma.OverdueBookCountArgs<ExtArgs>
            result: $Utils.Optional<OverdueBookCountAggregateOutputType> | number
          }
        }
      }
      ReturnHistory: {
        payload: Prisma.$ReturnHistoryPayload<ExtArgs>
        fields: Prisma.ReturnHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReturnHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReturnHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnHistoryPayload>
          }
          findFirst: {
            args: Prisma.ReturnHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReturnHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnHistoryPayload>
          }
          findMany: {
            args: Prisma.ReturnHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnHistoryPayload>[]
          }
          create: {
            args: Prisma.ReturnHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnHistoryPayload>
          }
          createMany: {
            args: Prisma.ReturnHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReturnHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnHistoryPayload>[]
          }
          delete: {
            args: Prisma.ReturnHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnHistoryPayload>
          }
          update: {
            args: Prisma.ReturnHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ReturnHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReturnHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReturnHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ReturnHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnHistoryPayload>
          }
          aggregate: {
            args: Prisma.ReturnHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReturnHistory>
          }
          groupBy: {
            args: Prisma.ReturnHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReturnHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReturnHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ReturnHistoryCountAggregateOutputType> | number
          }
        }
      }
      DonatedBook: {
        payload: Prisma.$DonatedBookPayload<ExtArgs>
        fields: Prisma.DonatedBookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonatedBookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonatedBookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonatedBookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonatedBookPayload>
          }
          findFirst: {
            args: Prisma.DonatedBookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonatedBookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonatedBookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonatedBookPayload>
          }
          findMany: {
            args: Prisma.DonatedBookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonatedBookPayload>[]
          }
          create: {
            args: Prisma.DonatedBookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonatedBookPayload>
          }
          createMany: {
            args: Prisma.DonatedBookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonatedBookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonatedBookPayload>[]
          }
          delete: {
            args: Prisma.DonatedBookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonatedBookPayload>
          }
          update: {
            args: Prisma.DonatedBookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonatedBookPayload>
          }
          deleteMany: {
            args: Prisma.DonatedBookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonatedBookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonatedBookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonatedBookPayload>[]
          }
          upsert: {
            args: Prisma.DonatedBookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonatedBookPayload>
          }
          aggregate: {
            args: Prisma.DonatedBookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonatedBook>
          }
          groupBy: {
            args: Prisma.DonatedBookGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonatedBookGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonatedBookCountArgs<ExtArgs>
            result: $Utils.Optional<DonatedBookCountAggregateOutputType> | number
          }
        }
      }
      Query: {
        payload: Prisma.$QueryPayload<ExtArgs>
        fields: Prisma.QueryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QueryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QueryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          findFirst: {
            args: Prisma.QueryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QueryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          findMany: {
            args: Prisma.QueryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>[]
          }
          create: {
            args: Prisma.QueryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          createMany: {
            args: Prisma.QueryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QueryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>[]
          }
          delete: {
            args: Prisma.QueryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          update: {
            args: Prisma.QueryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          deleteMany: {
            args: Prisma.QueryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QueryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QueryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>[]
          }
          upsert: {
            args: Prisma.QueryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          aggregate: {
            args: Prisma.QueryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuery>
          }
          groupBy: {
            args: Prisma.QueryGroupByArgs<ExtArgs>
            result: $Utils.Optional<QueryGroupByOutputType>[]
          }
          count: {
            args: Prisma.QueryCountArgs<ExtArgs>
            result: $Utils.Optional<QueryCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    book?: BookOmit
    borrowedBook?: BorrowedBookOmit
    overdueBook?: OverdueBookOmit
    returnHistory?: ReturnHistoryOmit
    donatedBook?: DonatedBookOmit
    query?: QueryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    borrowedBooks: number
    overdueBooks: number
    returnHistories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowedBooks?: boolean | UserCountOutputTypeCountBorrowedBooksArgs
    overdueBooks?: boolean | UserCountOutputTypeCountOverdueBooksArgs
    returnHistories?: boolean | UserCountOutputTypeCountReturnHistoriesArgs
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
  export type UserCountOutputTypeCountBorrowedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowedBookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOverdueBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OverdueBookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReturnHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReturnHistoryWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    borrowedBooks: number
    donatedBooks: number
    overdueBooks: number
    returnHistories: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowedBooks?: boolean | BookCountOutputTypeCountBorrowedBooksArgs
    donatedBooks?: boolean | BookCountOutputTypeCountDonatedBooksArgs
    overdueBooks?: boolean | BookCountOutputTypeCountOverdueBooksArgs
    returnHistories?: boolean | BookCountOutputTypeCountReturnHistoriesArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBorrowedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowedBookWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountDonatedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonatedBookWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountOverdueBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OverdueBookWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountReturnHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReturnHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    mobile: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    mobile: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    mobile: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    mobile?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    mobile?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    mobile?: true
    password?: true
    createdAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string
    mobile: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    username?: boolean
    mobile?: boolean
    password?: boolean
    createdAt?: boolean
    borrowedBooks?: boolean | User$borrowedBooksArgs<ExtArgs>
    overdueBooks?: boolean | User$overdueBooksArgs<ExtArgs>
    returnHistories?: boolean | User$returnHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    mobile?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    mobile?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    mobile?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "mobile" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowedBooks?: boolean | User$borrowedBooksArgs<ExtArgs>
    overdueBooks?: boolean | User$overdueBooksArgs<ExtArgs>
    returnHistories?: boolean | User$returnHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      borrowedBooks: Prisma.$BorrowedBookPayload<ExtArgs>[]
      overdueBooks: Prisma.$OverdueBookPayload<ExtArgs>[]
      returnHistories: Prisma.$ReturnHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      mobile: string
      password: string
      createdAt: Date
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
    borrowedBooks<T extends User$borrowedBooksArgs<ExtArgs> = {}>(args?: Subset<T, User$borrowedBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowedBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    overdueBooks<T extends User$overdueBooksArgs<ExtArgs> = {}>(args?: Subset<T, User$overdueBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OverdueBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    returnHistories<T extends User$returnHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$returnHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
   * User.borrowedBooks
   */
  export type User$borrowedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowedBook
     */
    select?: BorrowedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowedBook
     */
    omit?: BorrowedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowedBookInclude<ExtArgs> | null
    where?: BorrowedBookWhereInput
    orderBy?: BorrowedBookOrderByWithRelationInput | BorrowedBookOrderByWithRelationInput[]
    cursor?: BorrowedBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowedBookScalarFieldEnum | BorrowedBookScalarFieldEnum[]
  }

  /**
   * User.overdueBooks
   */
  export type User$overdueBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverdueBook
     */
    select?: OverdueBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverdueBook
     */
    omit?: OverdueBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverdueBookInclude<ExtArgs> | null
    where?: OverdueBookWhereInput
    orderBy?: OverdueBookOrderByWithRelationInput | OverdueBookOrderByWithRelationInput[]
    cursor?: OverdueBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OverdueBookScalarFieldEnum | OverdueBookScalarFieldEnum[]
  }

  /**
   * User.returnHistories
   */
  export type User$returnHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnHistory
     */
    select?: ReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnHistory
     */
    omit?: ReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnHistoryInclude<ExtArgs> | null
    where?: ReturnHistoryWhereInput
    orderBy?: ReturnHistoryOrderByWithRelationInput | ReturnHistoryOrderByWithRelationInput[]
    cursor?: ReturnHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReturnHistoryScalarFieldEnum | ReturnHistoryScalarFieldEnum[]
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
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    title: string | null
    author: string | null
    isbn: string | null
    category: string | null
    addedAt: Date | null
    donatedBy: string | null
    donatedAt: Date | null
    coverImage: string | null
    description: string | null
    quantity: number | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    title: string | null
    author: string | null
    isbn: string | null
    category: string | null
    addedAt: Date | null
    donatedBy: string | null
    donatedAt: Date | null
    coverImage: string | null
    description: string | null
    quantity: number | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    author: number
    isbn: number
    category: number
    addedAt: number
    donatedBy: number
    donatedAt: number
    coverImage: number
    description: number
    quantity: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    isbn?: true
    category?: true
    addedAt?: true
    donatedBy?: true
    donatedAt?: true
    coverImage?: true
    description?: true
    quantity?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    isbn?: true
    category?: true
    addedAt?: true
    donatedBy?: true
    donatedAt?: true
    coverImage?: true
    description?: true
    quantity?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    isbn?: true
    category?: true
    addedAt?: true
    donatedBy?: true
    donatedAt?: true
    coverImage?: true
    description?: true
    quantity?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: number
    title: string
    author: string
    isbn: string
    category: string
    addedAt: Date
    donatedBy: string | null
    donatedAt: Date | null
    coverImage: string | null
    description: string
    quantity: number
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    isbn?: boolean
    category?: boolean
    addedAt?: boolean
    donatedBy?: boolean
    donatedAt?: boolean
    coverImage?: boolean
    description?: boolean
    quantity?: boolean
    borrowedBooks?: boolean | Book$borrowedBooksArgs<ExtArgs>
    donatedBooks?: boolean | Book$donatedBooksArgs<ExtArgs>
    overdueBooks?: boolean | Book$overdueBooksArgs<ExtArgs>
    returnHistories?: boolean | Book$returnHistoriesArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    isbn?: boolean
    category?: boolean
    addedAt?: boolean
    donatedBy?: boolean
    donatedAt?: boolean
    coverImage?: boolean
    description?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    isbn?: boolean
    category?: boolean
    addedAt?: boolean
    donatedBy?: boolean
    donatedAt?: boolean
    coverImage?: boolean
    description?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    isbn?: boolean
    category?: boolean
    addedAt?: boolean
    donatedBy?: boolean
    donatedAt?: boolean
    coverImage?: boolean
    description?: boolean
    quantity?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "author" | "isbn" | "category" | "addedAt" | "donatedBy" | "donatedAt" | "coverImage" | "description" | "quantity", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowedBooks?: boolean | Book$borrowedBooksArgs<ExtArgs>
    donatedBooks?: boolean | Book$donatedBooksArgs<ExtArgs>
    overdueBooks?: boolean | Book$overdueBooksArgs<ExtArgs>
    returnHistories?: boolean | Book$returnHistoriesArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      borrowedBooks: Prisma.$BorrowedBookPayload<ExtArgs>[]
      donatedBooks: Prisma.$DonatedBookPayload<ExtArgs>[]
      overdueBooks: Prisma.$OverdueBookPayload<ExtArgs>[]
      returnHistories: Prisma.$ReturnHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      author: string
      isbn: string
      category: string
      addedAt: Date
      donatedBy: string | null
      donatedAt: Date | null
      coverImage: string | null
      description: string
      quantity: number
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    borrowedBooks<T extends Book$borrowedBooksArgs<ExtArgs> = {}>(args?: Subset<T, Book$borrowedBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowedBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donatedBooks<T extends Book$donatedBooksArgs<ExtArgs> = {}>(args?: Subset<T, Book$donatedBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonatedBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    overdueBooks<T extends Book$overdueBooksArgs<ExtArgs> = {}>(args?: Subset<T, Book$overdueBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OverdueBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    returnHistories<T extends Book$returnHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Book$returnHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'Int'>
    readonly title: FieldRef<"Book", 'String'>
    readonly author: FieldRef<"Book", 'String'>
    readonly isbn: FieldRef<"Book", 'String'>
    readonly category: FieldRef<"Book", 'String'>
    readonly addedAt: FieldRef<"Book", 'DateTime'>
    readonly donatedBy: FieldRef<"Book", 'String'>
    readonly donatedAt: FieldRef<"Book", 'DateTime'>
    readonly coverImage: FieldRef<"Book", 'String'>
    readonly description: FieldRef<"Book", 'String'>
    readonly quantity: FieldRef<"Book", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.borrowedBooks
   */
  export type Book$borrowedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowedBook
     */
    select?: BorrowedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowedBook
     */
    omit?: BorrowedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowedBookInclude<ExtArgs> | null
    where?: BorrowedBookWhereInput
    orderBy?: BorrowedBookOrderByWithRelationInput | BorrowedBookOrderByWithRelationInput[]
    cursor?: BorrowedBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowedBookScalarFieldEnum | BorrowedBookScalarFieldEnum[]
  }

  /**
   * Book.donatedBooks
   */
  export type Book$donatedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonatedBook
     */
    select?: DonatedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonatedBook
     */
    omit?: DonatedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonatedBookInclude<ExtArgs> | null
    where?: DonatedBookWhereInput
    orderBy?: DonatedBookOrderByWithRelationInput | DonatedBookOrderByWithRelationInput[]
    cursor?: DonatedBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonatedBookScalarFieldEnum | DonatedBookScalarFieldEnum[]
  }

  /**
   * Book.overdueBooks
   */
  export type Book$overdueBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverdueBook
     */
    select?: OverdueBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverdueBook
     */
    omit?: OverdueBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverdueBookInclude<ExtArgs> | null
    where?: OverdueBookWhereInput
    orderBy?: OverdueBookOrderByWithRelationInput | OverdueBookOrderByWithRelationInput[]
    cursor?: OverdueBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OverdueBookScalarFieldEnum | OverdueBookScalarFieldEnum[]
  }

  /**
   * Book.returnHistories
   */
  export type Book$returnHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnHistory
     */
    select?: ReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnHistory
     */
    omit?: ReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnHistoryInclude<ExtArgs> | null
    where?: ReturnHistoryWhereInput
    orderBy?: ReturnHistoryOrderByWithRelationInput | ReturnHistoryOrderByWithRelationInput[]
    cursor?: ReturnHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReturnHistoryScalarFieldEnum | ReturnHistoryScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model BorrowedBook
   */

  export type AggregateBorrowedBook = {
    _count: BorrowedBookCountAggregateOutputType | null
    _avg: BorrowedBookAvgAggregateOutputType | null
    _sum: BorrowedBookSumAggregateOutputType | null
    _min: BorrowedBookMinAggregateOutputType | null
    _max: BorrowedBookMaxAggregateOutputType | null
  }

  export type BorrowedBookAvgAggregateOutputType = {
    id: number | null
    bookId: number | null
    userId: number | null
  }

  export type BorrowedBookSumAggregateOutputType = {
    id: number | null
    bookId: number | null
    userId: number | null
  }

  export type BorrowedBookMinAggregateOutputType = {
    id: number | null
    bookId: number | null
    userId: number | null
    borrowedAt: Date | null
    dueDate: Date | null
    returnedAt: Date | null
    isOverdue: boolean | null
  }

  export type BorrowedBookMaxAggregateOutputType = {
    id: number | null
    bookId: number | null
    userId: number | null
    borrowedAt: Date | null
    dueDate: Date | null
    returnedAt: Date | null
    isOverdue: boolean | null
  }

  export type BorrowedBookCountAggregateOutputType = {
    id: number
    bookId: number
    userId: number
    borrowedAt: number
    dueDate: number
    returnedAt: number
    isOverdue: number
    _all: number
  }


  export type BorrowedBookAvgAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
  }

  export type BorrowedBookSumAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
  }

  export type BorrowedBookMinAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
    borrowedAt?: true
    dueDate?: true
    returnedAt?: true
    isOverdue?: true
  }

  export type BorrowedBookMaxAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
    borrowedAt?: true
    dueDate?: true
    returnedAt?: true
    isOverdue?: true
  }

  export type BorrowedBookCountAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
    borrowedAt?: true
    dueDate?: true
    returnedAt?: true
    isOverdue?: true
    _all?: true
  }

  export type BorrowedBookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BorrowedBook to aggregate.
     */
    where?: BorrowedBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BorrowedBooks to fetch.
     */
    orderBy?: BorrowedBookOrderByWithRelationInput | BorrowedBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BorrowedBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BorrowedBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BorrowedBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BorrowedBooks
    **/
    _count?: true | BorrowedBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BorrowedBookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BorrowedBookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BorrowedBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BorrowedBookMaxAggregateInputType
  }

  export type GetBorrowedBookAggregateType<T extends BorrowedBookAggregateArgs> = {
        [P in keyof T & keyof AggregateBorrowedBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBorrowedBook[P]>
      : GetScalarType<T[P], AggregateBorrowedBook[P]>
  }




  export type BorrowedBookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowedBookWhereInput
    orderBy?: BorrowedBookOrderByWithAggregationInput | BorrowedBookOrderByWithAggregationInput[]
    by: BorrowedBookScalarFieldEnum[] | BorrowedBookScalarFieldEnum
    having?: BorrowedBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BorrowedBookCountAggregateInputType | true
    _avg?: BorrowedBookAvgAggregateInputType
    _sum?: BorrowedBookSumAggregateInputType
    _min?: BorrowedBookMinAggregateInputType
    _max?: BorrowedBookMaxAggregateInputType
  }

  export type BorrowedBookGroupByOutputType = {
    id: number
    bookId: number
    userId: number
    borrowedAt: Date
    dueDate: Date
    returnedAt: Date | null
    isOverdue: boolean
    _count: BorrowedBookCountAggregateOutputType | null
    _avg: BorrowedBookAvgAggregateOutputType | null
    _sum: BorrowedBookSumAggregateOutputType | null
    _min: BorrowedBookMinAggregateOutputType | null
    _max: BorrowedBookMaxAggregateOutputType | null
  }

  type GetBorrowedBookGroupByPayload<T extends BorrowedBookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BorrowedBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BorrowedBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BorrowedBookGroupByOutputType[P]>
            : GetScalarType<T[P], BorrowedBookGroupByOutputType[P]>
        }
      >
    >


  export type BorrowedBookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    userId?: boolean
    borrowedAt?: boolean
    dueDate?: boolean
    returnedAt?: boolean
    isOverdue?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrowedBook"]>

  export type BorrowedBookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    userId?: boolean
    borrowedAt?: boolean
    dueDate?: boolean
    returnedAt?: boolean
    isOverdue?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrowedBook"]>

  export type BorrowedBookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    userId?: boolean
    borrowedAt?: boolean
    dueDate?: boolean
    returnedAt?: boolean
    isOverdue?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrowedBook"]>

  export type BorrowedBookSelectScalar = {
    id?: boolean
    bookId?: boolean
    userId?: boolean
    borrowedAt?: boolean
    dueDate?: boolean
    returnedAt?: boolean
    isOverdue?: boolean
  }

  export type BorrowedBookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "userId" | "borrowedAt" | "dueDate" | "returnedAt" | "isOverdue", ExtArgs["result"]["borrowedBook"]>
  export type BorrowedBookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BorrowedBookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BorrowedBookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BorrowedBookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BorrowedBook"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookId: number
      userId: number
      borrowedAt: Date
      dueDate: Date
      returnedAt: Date | null
      isOverdue: boolean
    }, ExtArgs["result"]["borrowedBook"]>
    composites: {}
  }

  type BorrowedBookGetPayload<S extends boolean | null | undefined | BorrowedBookDefaultArgs> = $Result.GetResult<Prisma.$BorrowedBookPayload, S>

  type BorrowedBookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BorrowedBookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BorrowedBookCountAggregateInputType | true
    }

  export interface BorrowedBookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BorrowedBook'], meta: { name: 'BorrowedBook' } }
    /**
     * Find zero or one BorrowedBook that matches the filter.
     * @param {BorrowedBookFindUniqueArgs} args - Arguments to find a BorrowedBook
     * @example
     * // Get one BorrowedBook
     * const borrowedBook = await prisma.borrowedBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BorrowedBookFindUniqueArgs>(args: SelectSubset<T, BorrowedBookFindUniqueArgs<ExtArgs>>): Prisma__BorrowedBookClient<$Result.GetResult<Prisma.$BorrowedBookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BorrowedBook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BorrowedBookFindUniqueOrThrowArgs} args - Arguments to find a BorrowedBook
     * @example
     * // Get one BorrowedBook
     * const borrowedBook = await prisma.borrowedBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BorrowedBookFindUniqueOrThrowArgs>(args: SelectSubset<T, BorrowedBookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BorrowedBookClient<$Result.GetResult<Prisma.$BorrowedBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BorrowedBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowedBookFindFirstArgs} args - Arguments to find a BorrowedBook
     * @example
     * // Get one BorrowedBook
     * const borrowedBook = await prisma.borrowedBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BorrowedBookFindFirstArgs>(args?: SelectSubset<T, BorrowedBookFindFirstArgs<ExtArgs>>): Prisma__BorrowedBookClient<$Result.GetResult<Prisma.$BorrowedBookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BorrowedBook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowedBookFindFirstOrThrowArgs} args - Arguments to find a BorrowedBook
     * @example
     * // Get one BorrowedBook
     * const borrowedBook = await prisma.borrowedBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BorrowedBookFindFirstOrThrowArgs>(args?: SelectSubset<T, BorrowedBookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BorrowedBookClient<$Result.GetResult<Prisma.$BorrowedBookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BorrowedBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowedBookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BorrowedBooks
     * const borrowedBooks = await prisma.borrowedBook.findMany()
     * 
     * // Get first 10 BorrowedBooks
     * const borrowedBooks = await prisma.borrowedBook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const borrowedBookWithIdOnly = await prisma.borrowedBook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BorrowedBookFindManyArgs>(args?: SelectSubset<T, BorrowedBookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowedBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BorrowedBook.
     * @param {BorrowedBookCreateArgs} args - Arguments to create a BorrowedBook.
     * @example
     * // Create one BorrowedBook
     * const BorrowedBook = await prisma.borrowedBook.create({
     *   data: {
     *     // ... data to create a BorrowedBook
     *   }
     * })
     * 
     */
    create<T extends BorrowedBookCreateArgs>(args: SelectSubset<T, BorrowedBookCreateArgs<ExtArgs>>): Prisma__BorrowedBookClient<$Result.GetResult<Prisma.$BorrowedBookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BorrowedBooks.
     * @param {BorrowedBookCreateManyArgs} args - Arguments to create many BorrowedBooks.
     * @example
     * // Create many BorrowedBooks
     * const borrowedBook = await prisma.borrowedBook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BorrowedBookCreateManyArgs>(args?: SelectSubset<T, BorrowedBookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BorrowedBooks and returns the data saved in the database.
     * @param {BorrowedBookCreateManyAndReturnArgs} args - Arguments to create many BorrowedBooks.
     * @example
     * // Create many BorrowedBooks
     * const borrowedBook = await prisma.borrowedBook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BorrowedBooks and only return the `id`
     * const borrowedBookWithIdOnly = await prisma.borrowedBook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BorrowedBookCreateManyAndReturnArgs>(args?: SelectSubset<T, BorrowedBookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowedBookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BorrowedBook.
     * @param {BorrowedBookDeleteArgs} args - Arguments to delete one BorrowedBook.
     * @example
     * // Delete one BorrowedBook
     * const BorrowedBook = await prisma.borrowedBook.delete({
     *   where: {
     *     // ... filter to delete one BorrowedBook
     *   }
     * })
     * 
     */
    delete<T extends BorrowedBookDeleteArgs>(args: SelectSubset<T, BorrowedBookDeleteArgs<ExtArgs>>): Prisma__BorrowedBookClient<$Result.GetResult<Prisma.$BorrowedBookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BorrowedBook.
     * @param {BorrowedBookUpdateArgs} args - Arguments to update one BorrowedBook.
     * @example
     * // Update one BorrowedBook
     * const borrowedBook = await prisma.borrowedBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BorrowedBookUpdateArgs>(args: SelectSubset<T, BorrowedBookUpdateArgs<ExtArgs>>): Prisma__BorrowedBookClient<$Result.GetResult<Prisma.$BorrowedBookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BorrowedBooks.
     * @param {BorrowedBookDeleteManyArgs} args - Arguments to filter BorrowedBooks to delete.
     * @example
     * // Delete a few BorrowedBooks
     * const { count } = await prisma.borrowedBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BorrowedBookDeleteManyArgs>(args?: SelectSubset<T, BorrowedBookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BorrowedBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowedBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BorrowedBooks
     * const borrowedBook = await prisma.borrowedBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BorrowedBookUpdateManyArgs>(args: SelectSubset<T, BorrowedBookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BorrowedBooks and returns the data updated in the database.
     * @param {BorrowedBookUpdateManyAndReturnArgs} args - Arguments to update many BorrowedBooks.
     * @example
     * // Update many BorrowedBooks
     * const borrowedBook = await prisma.borrowedBook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BorrowedBooks and only return the `id`
     * const borrowedBookWithIdOnly = await prisma.borrowedBook.updateManyAndReturn({
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
    updateManyAndReturn<T extends BorrowedBookUpdateManyAndReturnArgs>(args: SelectSubset<T, BorrowedBookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowedBookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BorrowedBook.
     * @param {BorrowedBookUpsertArgs} args - Arguments to update or create a BorrowedBook.
     * @example
     * // Update or create a BorrowedBook
     * const borrowedBook = await prisma.borrowedBook.upsert({
     *   create: {
     *     // ... data to create a BorrowedBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BorrowedBook we want to update
     *   }
     * })
     */
    upsert<T extends BorrowedBookUpsertArgs>(args: SelectSubset<T, BorrowedBookUpsertArgs<ExtArgs>>): Prisma__BorrowedBookClient<$Result.GetResult<Prisma.$BorrowedBookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BorrowedBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowedBookCountArgs} args - Arguments to filter BorrowedBooks to count.
     * @example
     * // Count the number of BorrowedBooks
     * const count = await prisma.borrowedBook.count({
     *   where: {
     *     // ... the filter for the BorrowedBooks we want to count
     *   }
     * })
    **/
    count<T extends BorrowedBookCountArgs>(
      args?: Subset<T, BorrowedBookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BorrowedBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BorrowedBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowedBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BorrowedBookAggregateArgs>(args: Subset<T, BorrowedBookAggregateArgs>): Prisma.PrismaPromise<GetBorrowedBookAggregateType<T>>

    /**
     * Group by BorrowedBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowedBookGroupByArgs} args - Group by arguments.
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
      T extends BorrowedBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BorrowedBookGroupByArgs['orderBy'] }
        : { orderBy?: BorrowedBookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BorrowedBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBorrowedBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BorrowedBook model
   */
  readonly fields: BorrowedBookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BorrowedBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BorrowedBookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BorrowedBook model
   */
  interface BorrowedBookFieldRefs {
    readonly id: FieldRef<"BorrowedBook", 'Int'>
    readonly bookId: FieldRef<"BorrowedBook", 'Int'>
    readonly userId: FieldRef<"BorrowedBook", 'Int'>
    readonly borrowedAt: FieldRef<"BorrowedBook", 'DateTime'>
    readonly dueDate: FieldRef<"BorrowedBook", 'DateTime'>
    readonly returnedAt: FieldRef<"BorrowedBook", 'DateTime'>
    readonly isOverdue: FieldRef<"BorrowedBook", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BorrowedBook findUnique
   */
  export type BorrowedBookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowedBook
     */
    select?: BorrowedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowedBook
     */
    omit?: BorrowedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowedBookInclude<ExtArgs> | null
    /**
     * Filter, which BorrowedBook to fetch.
     */
    where: BorrowedBookWhereUniqueInput
  }

  /**
   * BorrowedBook findUniqueOrThrow
   */
  export type BorrowedBookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowedBook
     */
    select?: BorrowedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowedBook
     */
    omit?: BorrowedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowedBookInclude<ExtArgs> | null
    /**
     * Filter, which BorrowedBook to fetch.
     */
    where: BorrowedBookWhereUniqueInput
  }

  /**
   * BorrowedBook findFirst
   */
  export type BorrowedBookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowedBook
     */
    select?: BorrowedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowedBook
     */
    omit?: BorrowedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowedBookInclude<ExtArgs> | null
    /**
     * Filter, which BorrowedBook to fetch.
     */
    where?: BorrowedBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BorrowedBooks to fetch.
     */
    orderBy?: BorrowedBookOrderByWithRelationInput | BorrowedBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BorrowedBooks.
     */
    cursor?: BorrowedBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BorrowedBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BorrowedBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BorrowedBooks.
     */
    distinct?: BorrowedBookScalarFieldEnum | BorrowedBookScalarFieldEnum[]
  }

  /**
   * BorrowedBook findFirstOrThrow
   */
  export type BorrowedBookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowedBook
     */
    select?: BorrowedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowedBook
     */
    omit?: BorrowedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowedBookInclude<ExtArgs> | null
    /**
     * Filter, which BorrowedBook to fetch.
     */
    where?: BorrowedBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BorrowedBooks to fetch.
     */
    orderBy?: BorrowedBookOrderByWithRelationInput | BorrowedBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BorrowedBooks.
     */
    cursor?: BorrowedBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BorrowedBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BorrowedBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BorrowedBooks.
     */
    distinct?: BorrowedBookScalarFieldEnum | BorrowedBookScalarFieldEnum[]
  }

  /**
   * BorrowedBook findMany
   */
  export type BorrowedBookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowedBook
     */
    select?: BorrowedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowedBook
     */
    omit?: BorrowedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowedBookInclude<ExtArgs> | null
    /**
     * Filter, which BorrowedBooks to fetch.
     */
    where?: BorrowedBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BorrowedBooks to fetch.
     */
    orderBy?: BorrowedBookOrderByWithRelationInput | BorrowedBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BorrowedBooks.
     */
    cursor?: BorrowedBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BorrowedBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BorrowedBooks.
     */
    skip?: number
    distinct?: BorrowedBookScalarFieldEnum | BorrowedBookScalarFieldEnum[]
  }

  /**
   * BorrowedBook create
   */
  export type BorrowedBookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowedBook
     */
    select?: BorrowedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowedBook
     */
    omit?: BorrowedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowedBookInclude<ExtArgs> | null
    /**
     * The data needed to create a BorrowedBook.
     */
    data: XOR<BorrowedBookCreateInput, BorrowedBookUncheckedCreateInput>
  }

  /**
   * BorrowedBook createMany
   */
  export type BorrowedBookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BorrowedBooks.
     */
    data: BorrowedBookCreateManyInput | BorrowedBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BorrowedBook createManyAndReturn
   */
  export type BorrowedBookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowedBook
     */
    select?: BorrowedBookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowedBook
     */
    omit?: BorrowedBookOmit<ExtArgs> | null
    /**
     * The data used to create many BorrowedBooks.
     */
    data: BorrowedBookCreateManyInput | BorrowedBookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowedBookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BorrowedBook update
   */
  export type BorrowedBookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowedBook
     */
    select?: BorrowedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowedBook
     */
    omit?: BorrowedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowedBookInclude<ExtArgs> | null
    /**
     * The data needed to update a BorrowedBook.
     */
    data: XOR<BorrowedBookUpdateInput, BorrowedBookUncheckedUpdateInput>
    /**
     * Choose, which BorrowedBook to update.
     */
    where: BorrowedBookWhereUniqueInput
  }

  /**
   * BorrowedBook updateMany
   */
  export type BorrowedBookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BorrowedBooks.
     */
    data: XOR<BorrowedBookUpdateManyMutationInput, BorrowedBookUncheckedUpdateManyInput>
    /**
     * Filter which BorrowedBooks to update
     */
    where?: BorrowedBookWhereInput
    /**
     * Limit how many BorrowedBooks to update.
     */
    limit?: number
  }

  /**
   * BorrowedBook updateManyAndReturn
   */
  export type BorrowedBookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowedBook
     */
    select?: BorrowedBookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowedBook
     */
    omit?: BorrowedBookOmit<ExtArgs> | null
    /**
     * The data used to update BorrowedBooks.
     */
    data: XOR<BorrowedBookUpdateManyMutationInput, BorrowedBookUncheckedUpdateManyInput>
    /**
     * Filter which BorrowedBooks to update
     */
    where?: BorrowedBookWhereInput
    /**
     * Limit how many BorrowedBooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowedBookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BorrowedBook upsert
   */
  export type BorrowedBookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowedBook
     */
    select?: BorrowedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowedBook
     */
    omit?: BorrowedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowedBookInclude<ExtArgs> | null
    /**
     * The filter to search for the BorrowedBook to update in case it exists.
     */
    where: BorrowedBookWhereUniqueInput
    /**
     * In case the BorrowedBook found by the `where` argument doesn't exist, create a new BorrowedBook with this data.
     */
    create: XOR<BorrowedBookCreateInput, BorrowedBookUncheckedCreateInput>
    /**
     * In case the BorrowedBook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BorrowedBookUpdateInput, BorrowedBookUncheckedUpdateInput>
  }

  /**
   * BorrowedBook delete
   */
  export type BorrowedBookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowedBook
     */
    select?: BorrowedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowedBook
     */
    omit?: BorrowedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowedBookInclude<ExtArgs> | null
    /**
     * Filter which BorrowedBook to delete.
     */
    where: BorrowedBookWhereUniqueInput
  }

  /**
   * BorrowedBook deleteMany
   */
  export type BorrowedBookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BorrowedBooks to delete
     */
    where?: BorrowedBookWhereInput
    /**
     * Limit how many BorrowedBooks to delete.
     */
    limit?: number
  }

  /**
   * BorrowedBook without action
   */
  export type BorrowedBookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowedBook
     */
    select?: BorrowedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowedBook
     */
    omit?: BorrowedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowedBookInclude<ExtArgs> | null
  }


  /**
   * Model OverdueBook
   */

  export type AggregateOverdueBook = {
    _count: OverdueBookCountAggregateOutputType | null
    _avg: OverdueBookAvgAggregateOutputType | null
    _sum: OverdueBookSumAggregateOutputType | null
    _min: OverdueBookMinAggregateOutputType | null
    _max: OverdueBookMaxAggregateOutputType | null
  }

  export type OverdueBookAvgAggregateOutputType = {
    id: number | null
    bookId: number | null
    userId: number | null
  }

  export type OverdueBookSumAggregateOutputType = {
    id: number | null
    bookId: number | null
    userId: number | null
  }

  export type OverdueBookMinAggregateOutputType = {
    id: number | null
    bookId: number | null
    userId: number | null
    overdueAt: Date | null
  }

  export type OverdueBookMaxAggregateOutputType = {
    id: number | null
    bookId: number | null
    userId: number | null
    overdueAt: Date | null
  }

  export type OverdueBookCountAggregateOutputType = {
    id: number
    bookId: number
    userId: number
    overdueAt: number
    _all: number
  }


  export type OverdueBookAvgAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
  }

  export type OverdueBookSumAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
  }

  export type OverdueBookMinAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
    overdueAt?: true
  }

  export type OverdueBookMaxAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
    overdueAt?: true
  }

  export type OverdueBookCountAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
    overdueAt?: true
    _all?: true
  }

  export type OverdueBookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OverdueBook to aggregate.
     */
    where?: OverdueBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OverdueBooks to fetch.
     */
    orderBy?: OverdueBookOrderByWithRelationInput | OverdueBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OverdueBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OverdueBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OverdueBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OverdueBooks
    **/
    _count?: true | OverdueBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OverdueBookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OverdueBookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OverdueBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OverdueBookMaxAggregateInputType
  }

  export type GetOverdueBookAggregateType<T extends OverdueBookAggregateArgs> = {
        [P in keyof T & keyof AggregateOverdueBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOverdueBook[P]>
      : GetScalarType<T[P], AggregateOverdueBook[P]>
  }




  export type OverdueBookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OverdueBookWhereInput
    orderBy?: OverdueBookOrderByWithAggregationInput | OverdueBookOrderByWithAggregationInput[]
    by: OverdueBookScalarFieldEnum[] | OverdueBookScalarFieldEnum
    having?: OverdueBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OverdueBookCountAggregateInputType | true
    _avg?: OverdueBookAvgAggregateInputType
    _sum?: OverdueBookSumAggregateInputType
    _min?: OverdueBookMinAggregateInputType
    _max?: OverdueBookMaxAggregateInputType
  }

  export type OverdueBookGroupByOutputType = {
    id: number
    bookId: number
    userId: number
    overdueAt: Date
    _count: OverdueBookCountAggregateOutputType | null
    _avg: OverdueBookAvgAggregateOutputType | null
    _sum: OverdueBookSumAggregateOutputType | null
    _min: OverdueBookMinAggregateOutputType | null
    _max: OverdueBookMaxAggregateOutputType | null
  }

  type GetOverdueBookGroupByPayload<T extends OverdueBookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OverdueBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OverdueBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OverdueBookGroupByOutputType[P]>
            : GetScalarType<T[P], OverdueBookGroupByOutputType[P]>
        }
      >
    >


  export type OverdueBookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    userId?: boolean
    overdueAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["overdueBook"]>

  export type OverdueBookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    userId?: boolean
    overdueAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["overdueBook"]>

  export type OverdueBookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    userId?: boolean
    overdueAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["overdueBook"]>

  export type OverdueBookSelectScalar = {
    id?: boolean
    bookId?: boolean
    userId?: boolean
    overdueAt?: boolean
  }

  export type OverdueBookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "userId" | "overdueAt", ExtArgs["result"]["overdueBook"]>
  export type OverdueBookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OverdueBookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OverdueBookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OverdueBookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OverdueBook"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookId: number
      userId: number
      overdueAt: Date
    }, ExtArgs["result"]["overdueBook"]>
    composites: {}
  }

  type OverdueBookGetPayload<S extends boolean | null | undefined | OverdueBookDefaultArgs> = $Result.GetResult<Prisma.$OverdueBookPayload, S>

  type OverdueBookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OverdueBookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OverdueBookCountAggregateInputType | true
    }

  export interface OverdueBookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OverdueBook'], meta: { name: 'OverdueBook' } }
    /**
     * Find zero or one OverdueBook that matches the filter.
     * @param {OverdueBookFindUniqueArgs} args - Arguments to find a OverdueBook
     * @example
     * // Get one OverdueBook
     * const overdueBook = await prisma.overdueBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OverdueBookFindUniqueArgs>(args: SelectSubset<T, OverdueBookFindUniqueArgs<ExtArgs>>): Prisma__OverdueBookClient<$Result.GetResult<Prisma.$OverdueBookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OverdueBook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OverdueBookFindUniqueOrThrowArgs} args - Arguments to find a OverdueBook
     * @example
     * // Get one OverdueBook
     * const overdueBook = await prisma.overdueBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OverdueBookFindUniqueOrThrowArgs>(args: SelectSubset<T, OverdueBookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OverdueBookClient<$Result.GetResult<Prisma.$OverdueBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OverdueBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverdueBookFindFirstArgs} args - Arguments to find a OverdueBook
     * @example
     * // Get one OverdueBook
     * const overdueBook = await prisma.overdueBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OverdueBookFindFirstArgs>(args?: SelectSubset<T, OverdueBookFindFirstArgs<ExtArgs>>): Prisma__OverdueBookClient<$Result.GetResult<Prisma.$OverdueBookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OverdueBook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverdueBookFindFirstOrThrowArgs} args - Arguments to find a OverdueBook
     * @example
     * // Get one OverdueBook
     * const overdueBook = await prisma.overdueBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OverdueBookFindFirstOrThrowArgs>(args?: SelectSubset<T, OverdueBookFindFirstOrThrowArgs<ExtArgs>>): Prisma__OverdueBookClient<$Result.GetResult<Prisma.$OverdueBookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OverdueBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverdueBookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OverdueBooks
     * const overdueBooks = await prisma.overdueBook.findMany()
     * 
     * // Get first 10 OverdueBooks
     * const overdueBooks = await prisma.overdueBook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const overdueBookWithIdOnly = await prisma.overdueBook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OverdueBookFindManyArgs>(args?: SelectSubset<T, OverdueBookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OverdueBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OverdueBook.
     * @param {OverdueBookCreateArgs} args - Arguments to create a OverdueBook.
     * @example
     * // Create one OverdueBook
     * const OverdueBook = await prisma.overdueBook.create({
     *   data: {
     *     // ... data to create a OverdueBook
     *   }
     * })
     * 
     */
    create<T extends OverdueBookCreateArgs>(args: SelectSubset<T, OverdueBookCreateArgs<ExtArgs>>): Prisma__OverdueBookClient<$Result.GetResult<Prisma.$OverdueBookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OverdueBooks.
     * @param {OverdueBookCreateManyArgs} args - Arguments to create many OverdueBooks.
     * @example
     * // Create many OverdueBooks
     * const overdueBook = await prisma.overdueBook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OverdueBookCreateManyArgs>(args?: SelectSubset<T, OverdueBookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OverdueBooks and returns the data saved in the database.
     * @param {OverdueBookCreateManyAndReturnArgs} args - Arguments to create many OverdueBooks.
     * @example
     * // Create many OverdueBooks
     * const overdueBook = await prisma.overdueBook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OverdueBooks and only return the `id`
     * const overdueBookWithIdOnly = await prisma.overdueBook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OverdueBookCreateManyAndReturnArgs>(args?: SelectSubset<T, OverdueBookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OverdueBookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OverdueBook.
     * @param {OverdueBookDeleteArgs} args - Arguments to delete one OverdueBook.
     * @example
     * // Delete one OverdueBook
     * const OverdueBook = await prisma.overdueBook.delete({
     *   where: {
     *     // ... filter to delete one OverdueBook
     *   }
     * })
     * 
     */
    delete<T extends OverdueBookDeleteArgs>(args: SelectSubset<T, OverdueBookDeleteArgs<ExtArgs>>): Prisma__OverdueBookClient<$Result.GetResult<Prisma.$OverdueBookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OverdueBook.
     * @param {OverdueBookUpdateArgs} args - Arguments to update one OverdueBook.
     * @example
     * // Update one OverdueBook
     * const overdueBook = await prisma.overdueBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OverdueBookUpdateArgs>(args: SelectSubset<T, OverdueBookUpdateArgs<ExtArgs>>): Prisma__OverdueBookClient<$Result.GetResult<Prisma.$OverdueBookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OverdueBooks.
     * @param {OverdueBookDeleteManyArgs} args - Arguments to filter OverdueBooks to delete.
     * @example
     * // Delete a few OverdueBooks
     * const { count } = await prisma.overdueBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OverdueBookDeleteManyArgs>(args?: SelectSubset<T, OverdueBookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OverdueBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverdueBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OverdueBooks
     * const overdueBook = await prisma.overdueBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OverdueBookUpdateManyArgs>(args: SelectSubset<T, OverdueBookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OverdueBooks and returns the data updated in the database.
     * @param {OverdueBookUpdateManyAndReturnArgs} args - Arguments to update many OverdueBooks.
     * @example
     * // Update many OverdueBooks
     * const overdueBook = await prisma.overdueBook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OverdueBooks and only return the `id`
     * const overdueBookWithIdOnly = await prisma.overdueBook.updateManyAndReturn({
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
    updateManyAndReturn<T extends OverdueBookUpdateManyAndReturnArgs>(args: SelectSubset<T, OverdueBookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OverdueBookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OverdueBook.
     * @param {OverdueBookUpsertArgs} args - Arguments to update or create a OverdueBook.
     * @example
     * // Update or create a OverdueBook
     * const overdueBook = await prisma.overdueBook.upsert({
     *   create: {
     *     // ... data to create a OverdueBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OverdueBook we want to update
     *   }
     * })
     */
    upsert<T extends OverdueBookUpsertArgs>(args: SelectSubset<T, OverdueBookUpsertArgs<ExtArgs>>): Prisma__OverdueBookClient<$Result.GetResult<Prisma.$OverdueBookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OverdueBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverdueBookCountArgs} args - Arguments to filter OverdueBooks to count.
     * @example
     * // Count the number of OverdueBooks
     * const count = await prisma.overdueBook.count({
     *   where: {
     *     // ... the filter for the OverdueBooks we want to count
     *   }
     * })
    **/
    count<T extends OverdueBookCountArgs>(
      args?: Subset<T, OverdueBookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OverdueBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OverdueBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverdueBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OverdueBookAggregateArgs>(args: Subset<T, OverdueBookAggregateArgs>): Prisma.PrismaPromise<GetOverdueBookAggregateType<T>>

    /**
     * Group by OverdueBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverdueBookGroupByArgs} args - Group by arguments.
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
      T extends OverdueBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OverdueBookGroupByArgs['orderBy'] }
        : { orderBy?: OverdueBookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OverdueBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOverdueBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OverdueBook model
   */
  readonly fields: OverdueBookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OverdueBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OverdueBookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OverdueBook model
   */
  interface OverdueBookFieldRefs {
    readonly id: FieldRef<"OverdueBook", 'Int'>
    readonly bookId: FieldRef<"OverdueBook", 'Int'>
    readonly userId: FieldRef<"OverdueBook", 'Int'>
    readonly overdueAt: FieldRef<"OverdueBook", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OverdueBook findUnique
   */
  export type OverdueBookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverdueBook
     */
    select?: OverdueBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverdueBook
     */
    omit?: OverdueBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverdueBookInclude<ExtArgs> | null
    /**
     * Filter, which OverdueBook to fetch.
     */
    where: OverdueBookWhereUniqueInput
  }

  /**
   * OverdueBook findUniqueOrThrow
   */
  export type OverdueBookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverdueBook
     */
    select?: OverdueBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverdueBook
     */
    omit?: OverdueBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverdueBookInclude<ExtArgs> | null
    /**
     * Filter, which OverdueBook to fetch.
     */
    where: OverdueBookWhereUniqueInput
  }

  /**
   * OverdueBook findFirst
   */
  export type OverdueBookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverdueBook
     */
    select?: OverdueBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverdueBook
     */
    omit?: OverdueBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverdueBookInclude<ExtArgs> | null
    /**
     * Filter, which OverdueBook to fetch.
     */
    where?: OverdueBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OverdueBooks to fetch.
     */
    orderBy?: OverdueBookOrderByWithRelationInput | OverdueBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OverdueBooks.
     */
    cursor?: OverdueBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OverdueBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OverdueBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OverdueBooks.
     */
    distinct?: OverdueBookScalarFieldEnum | OverdueBookScalarFieldEnum[]
  }

  /**
   * OverdueBook findFirstOrThrow
   */
  export type OverdueBookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverdueBook
     */
    select?: OverdueBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverdueBook
     */
    omit?: OverdueBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverdueBookInclude<ExtArgs> | null
    /**
     * Filter, which OverdueBook to fetch.
     */
    where?: OverdueBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OverdueBooks to fetch.
     */
    orderBy?: OverdueBookOrderByWithRelationInput | OverdueBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OverdueBooks.
     */
    cursor?: OverdueBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OverdueBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OverdueBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OverdueBooks.
     */
    distinct?: OverdueBookScalarFieldEnum | OverdueBookScalarFieldEnum[]
  }

  /**
   * OverdueBook findMany
   */
  export type OverdueBookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverdueBook
     */
    select?: OverdueBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverdueBook
     */
    omit?: OverdueBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverdueBookInclude<ExtArgs> | null
    /**
     * Filter, which OverdueBooks to fetch.
     */
    where?: OverdueBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OverdueBooks to fetch.
     */
    orderBy?: OverdueBookOrderByWithRelationInput | OverdueBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OverdueBooks.
     */
    cursor?: OverdueBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OverdueBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OverdueBooks.
     */
    skip?: number
    distinct?: OverdueBookScalarFieldEnum | OverdueBookScalarFieldEnum[]
  }

  /**
   * OverdueBook create
   */
  export type OverdueBookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverdueBook
     */
    select?: OverdueBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverdueBook
     */
    omit?: OverdueBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverdueBookInclude<ExtArgs> | null
    /**
     * The data needed to create a OverdueBook.
     */
    data: XOR<OverdueBookCreateInput, OverdueBookUncheckedCreateInput>
  }

  /**
   * OverdueBook createMany
   */
  export type OverdueBookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OverdueBooks.
     */
    data: OverdueBookCreateManyInput | OverdueBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OverdueBook createManyAndReturn
   */
  export type OverdueBookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverdueBook
     */
    select?: OverdueBookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OverdueBook
     */
    omit?: OverdueBookOmit<ExtArgs> | null
    /**
     * The data used to create many OverdueBooks.
     */
    data: OverdueBookCreateManyInput | OverdueBookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverdueBookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OverdueBook update
   */
  export type OverdueBookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverdueBook
     */
    select?: OverdueBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverdueBook
     */
    omit?: OverdueBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverdueBookInclude<ExtArgs> | null
    /**
     * The data needed to update a OverdueBook.
     */
    data: XOR<OverdueBookUpdateInput, OverdueBookUncheckedUpdateInput>
    /**
     * Choose, which OverdueBook to update.
     */
    where: OverdueBookWhereUniqueInput
  }

  /**
   * OverdueBook updateMany
   */
  export type OverdueBookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OverdueBooks.
     */
    data: XOR<OverdueBookUpdateManyMutationInput, OverdueBookUncheckedUpdateManyInput>
    /**
     * Filter which OverdueBooks to update
     */
    where?: OverdueBookWhereInput
    /**
     * Limit how many OverdueBooks to update.
     */
    limit?: number
  }

  /**
   * OverdueBook updateManyAndReturn
   */
  export type OverdueBookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverdueBook
     */
    select?: OverdueBookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OverdueBook
     */
    omit?: OverdueBookOmit<ExtArgs> | null
    /**
     * The data used to update OverdueBooks.
     */
    data: XOR<OverdueBookUpdateManyMutationInput, OverdueBookUncheckedUpdateManyInput>
    /**
     * Filter which OverdueBooks to update
     */
    where?: OverdueBookWhereInput
    /**
     * Limit how many OverdueBooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverdueBookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OverdueBook upsert
   */
  export type OverdueBookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverdueBook
     */
    select?: OverdueBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverdueBook
     */
    omit?: OverdueBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverdueBookInclude<ExtArgs> | null
    /**
     * The filter to search for the OverdueBook to update in case it exists.
     */
    where: OverdueBookWhereUniqueInput
    /**
     * In case the OverdueBook found by the `where` argument doesn't exist, create a new OverdueBook with this data.
     */
    create: XOR<OverdueBookCreateInput, OverdueBookUncheckedCreateInput>
    /**
     * In case the OverdueBook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OverdueBookUpdateInput, OverdueBookUncheckedUpdateInput>
  }

  /**
   * OverdueBook delete
   */
  export type OverdueBookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverdueBook
     */
    select?: OverdueBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverdueBook
     */
    omit?: OverdueBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverdueBookInclude<ExtArgs> | null
    /**
     * Filter which OverdueBook to delete.
     */
    where: OverdueBookWhereUniqueInput
  }

  /**
   * OverdueBook deleteMany
   */
  export type OverdueBookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OverdueBooks to delete
     */
    where?: OverdueBookWhereInput
    /**
     * Limit how many OverdueBooks to delete.
     */
    limit?: number
  }

  /**
   * OverdueBook without action
   */
  export type OverdueBookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverdueBook
     */
    select?: OverdueBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverdueBook
     */
    omit?: OverdueBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverdueBookInclude<ExtArgs> | null
  }


  /**
   * Model ReturnHistory
   */

  export type AggregateReturnHistory = {
    _count: ReturnHistoryCountAggregateOutputType | null
    _avg: ReturnHistoryAvgAggregateOutputType | null
    _sum: ReturnHistorySumAggregateOutputType | null
    _min: ReturnHistoryMinAggregateOutputType | null
    _max: ReturnHistoryMaxAggregateOutputType | null
  }

  export type ReturnHistoryAvgAggregateOutputType = {
    id: number | null
    bookId: number | null
    userId: number | null
  }

  export type ReturnHistorySumAggregateOutputType = {
    id: number | null
    bookId: number | null
    userId: number | null
  }

  export type ReturnHistoryMinAggregateOutputType = {
    id: number | null
    bookId: number | null
    userId: number | null
    returnedAt: Date | null
  }

  export type ReturnHistoryMaxAggregateOutputType = {
    id: number | null
    bookId: number | null
    userId: number | null
    returnedAt: Date | null
  }

  export type ReturnHistoryCountAggregateOutputType = {
    id: number
    bookId: number
    userId: number
    returnedAt: number
    _all: number
  }


  export type ReturnHistoryAvgAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
  }

  export type ReturnHistorySumAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
  }

  export type ReturnHistoryMinAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
    returnedAt?: true
  }

  export type ReturnHistoryMaxAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
    returnedAt?: true
  }

  export type ReturnHistoryCountAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
    returnedAt?: true
    _all?: true
  }

  export type ReturnHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReturnHistory to aggregate.
     */
    where?: ReturnHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnHistories to fetch.
     */
    orderBy?: ReturnHistoryOrderByWithRelationInput | ReturnHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReturnHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReturnHistories
    **/
    _count?: true | ReturnHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReturnHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReturnHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReturnHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReturnHistoryMaxAggregateInputType
  }

  export type GetReturnHistoryAggregateType<T extends ReturnHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateReturnHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReturnHistory[P]>
      : GetScalarType<T[P], AggregateReturnHistory[P]>
  }




  export type ReturnHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReturnHistoryWhereInput
    orderBy?: ReturnHistoryOrderByWithAggregationInput | ReturnHistoryOrderByWithAggregationInput[]
    by: ReturnHistoryScalarFieldEnum[] | ReturnHistoryScalarFieldEnum
    having?: ReturnHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReturnHistoryCountAggregateInputType | true
    _avg?: ReturnHistoryAvgAggregateInputType
    _sum?: ReturnHistorySumAggregateInputType
    _min?: ReturnHistoryMinAggregateInputType
    _max?: ReturnHistoryMaxAggregateInputType
  }

  export type ReturnHistoryGroupByOutputType = {
    id: number
    bookId: number
    userId: number
    returnedAt: Date
    _count: ReturnHistoryCountAggregateOutputType | null
    _avg: ReturnHistoryAvgAggregateOutputType | null
    _sum: ReturnHistorySumAggregateOutputType | null
    _min: ReturnHistoryMinAggregateOutputType | null
    _max: ReturnHistoryMaxAggregateOutputType | null
  }

  type GetReturnHistoryGroupByPayload<T extends ReturnHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReturnHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReturnHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReturnHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ReturnHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ReturnHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    userId?: boolean
    returnedAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["returnHistory"]>

  export type ReturnHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    userId?: boolean
    returnedAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["returnHistory"]>

  export type ReturnHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    userId?: boolean
    returnedAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["returnHistory"]>

  export type ReturnHistorySelectScalar = {
    id?: boolean
    bookId?: boolean
    userId?: boolean
    returnedAt?: boolean
  }

  export type ReturnHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "userId" | "returnedAt", ExtArgs["result"]["returnHistory"]>
  export type ReturnHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReturnHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReturnHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReturnHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReturnHistory"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookId: number
      userId: number
      returnedAt: Date
    }, ExtArgs["result"]["returnHistory"]>
    composites: {}
  }

  type ReturnHistoryGetPayload<S extends boolean | null | undefined | ReturnHistoryDefaultArgs> = $Result.GetResult<Prisma.$ReturnHistoryPayload, S>

  type ReturnHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReturnHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReturnHistoryCountAggregateInputType | true
    }

  export interface ReturnHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReturnHistory'], meta: { name: 'ReturnHistory' } }
    /**
     * Find zero or one ReturnHistory that matches the filter.
     * @param {ReturnHistoryFindUniqueArgs} args - Arguments to find a ReturnHistory
     * @example
     * // Get one ReturnHistory
     * const returnHistory = await prisma.returnHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReturnHistoryFindUniqueArgs>(args: SelectSubset<T, ReturnHistoryFindUniqueArgs<ExtArgs>>): Prisma__ReturnHistoryClient<$Result.GetResult<Prisma.$ReturnHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReturnHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReturnHistoryFindUniqueOrThrowArgs} args - Arguments to find a ReturnHistory
     * @example
     * // Get one ReturnHistory
     * const returnHistory = await prisma.returnHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReturnHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ReturnHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReturnHistoryClient<$Result.GetResult<Prisma.$ReturnHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReturnHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnHistoryFindFirstArgs} args - Arguments to find a ReturnHistory
     * @example
     * // Get one ReturnHistory
     * const returnHistory = await prisma.returnHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReturnHistoryFindFirstArgs>(args?: SelectSubset<T, ReturnHistoryFindFirstArgs<ExtArgs>>): Prisma__ReturnHistoryClient<$Result.GetResult<Prisma.$ReturnHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReturnHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnHistoryFindFirstOrThrowArgs} args - Arguments to find a ReturnHistory
     * @example
     * // Get one ReturnHistory
     * const returnHistory = await prisma.returnHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReturnHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ReturnHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReturnHistoryClient<$Result.GetResult<Prisma.$ReturnHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReturnHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReturnHistories
     * const returnHistories = await prisma.returnHistory.findMany()
     * 
     * // Get first 10 ReturnHistories
     * const returnHistories = await prisma.returnHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const returnHistoryWithIdOnly = await prisma.returnHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReturnHistoryFindManyArgs>(args?: SelectSubset<T, ReturnHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReturnHistory.
     * @param {ReturnHistoryCreateArgs} args - Arguments to create a ReturnHistory.
     * @example
     * // Create one ReturnHistory
     * const ReturnHistory = await prisma.returnHistory.create({
     *   data: {
     *     // ... data to create a ReturnHistory
     *   }
     * })
     * 
     */
    create<T extends ReturnHistoryCreateArgs>(args: SelectSubset<T, ReturnHistoryCreateArgs<ExtArgs>>): Prisma__ReturnHistoryClient<$Result.GetResult<Prisma.$ReturnHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReturnHistories.
     * @param {ReturnHistoryCreateManyArgs} args - Arguments to create many ReturnHistories.
     * @example
     * // Create many ReturnHistories
     * const returnHistory = await prisma.returnHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReturnHistoryCreateManyArgs>(args?: SelectSubset<T, ReturnHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReturnHistories and returns the data saved in the database.
     * @param {ReturnHistoryCreateManyAndReturnArgs} args - Arguments to create many ReturnHistories.
     * @example
     * // Create many ReturnHistories
     * const returnHistory = await prisma.returnHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReturnHistories and only return the `id`
     * const returnHistoryWithIdOnly = await prisma.returnHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReturnHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ReturnHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReturnHistory.
     * @param {ReturnHistoryDeleteArgs} args - Arguments to delete one ReturnHistory.
     * @example
     * // Delete one ReturnHistory
     * const ReturnHistory = await prisma.returnHistory.delete({
     *   where: {
     *     // ... filter to delete one ReturnHistory
     *   }
     * })
     * 
     */
    delete<T extends ReturnHistoryDeleteArgs>(args: SelectSubset<T, ReturnHistoryDeleteArgs<ExtArgs>>): Prisma__ReturnHistoryClient<$Result.GetResult<Prisma.$ReturnHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReturnHistory.
     * @param {ReturnHistoryUpdateArgs} args - Arguments to update one ReturnHistory.
     * @example
     * // Update one ReturnHistory
     * const returnHistory = await prisma.returnHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReturnHistoryUpdateArgs>(args: SelectSubset<T, ReturnHistoryUpdateArgs<ExtArgs>>): Prisma__ReturnHistoryClient<$Result.GetResult<Prisma.$ReturnHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReturnHistories.
     * @param {ReturnHistoryDeleteManyArgs} args - Arguments to filter ReturnHistories to delete.
     * @example
     * // Delete a few ReturnHistories
     * const { count } = await prisma.returnHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReturnHistoryDeleteManyArgs>(args?: SelectSubset<T, ReturnHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReturnHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReturnHistories
     * const returnHistory = await prisma.returnHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReturnHistoryUpdateManyArgs>(args: SelectSubset<T, ReturnHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReturnHistories and returns the data updated in the database.
     * @param {ReturnHistoryUpdateManyAndReturnArgs} args - Arguments to update many ReturnHistories.
     * @example
     * // Update many ReturnHistories
     * const returnHistory = await prisma.returnHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReturnHistories and only return the `id`
     * const returnHistoryWithIdOnly = await prisma.returnHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReturnHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ReturnHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReturnHistory.
     * @param {ReturnHistoryUpsertArgs} args - Arguments to update or create a ReturnHistory.
     * @example
     * // Update or create a ReturnHistory
     * const returnHistory = await prisma.returnHistory.upsert({
     *   create: {
     *     // ... data to create a ReturnHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReturnHistory we want to update
     *   }
     * })
     */
    upsert<T extends ReturnHistoryUpsertArgs>(args: SelectSubset<T, ReturnHistoryUpsertArgs<ExtArgs>>): Prisma__ReturnHistoryClient<$Result.GetResult<Prisma.$ReturnHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReturnHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnHistoryCountArgs} args - Arguments to filter ReturnHistories to count.
     * @example
     * // Count the number of ReturnHistories
     * const count = await prisma.returnHistory.count({
     *   where: {
     *     // ... the filter for the ReturnHistories we want to count
     *   }
     * })
    **/
    count<T extends ReturnHistoryCountArgs>(
      args?: Subset<T, ReturnHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReturnHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReturnHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReturnHistoryAggregateArgs>(args: Subset<T, ReturnHistoryAggregateArgs>): Prisma.PrismaPromise<GetReturnHistoryAggregateType<T>>

    /**
     * Group by ReturnHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnHistoryGroupByArgs} args - Group by arguments.
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
      T extends ReturnHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReturnHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ReturnHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReturnHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReturnHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReturnHistory model
   */
  readonly fields: ReturnHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReturnHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReturnHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReturnHistory model
   */
  interface ReturnHistoryFieldRefs {
    readonly id: FieldRef<"ReturnHistory", 'Int'>
    readonly bookId: FieldRef<"ReturnHistory", 'Int'>
    readonly userId: FieldRef<"ReturnHistory", 'Int'>
    readonly returnedAt: FieldRef<"ReturnHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReturnHistory findUnique
   */
  export type ReturnHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnHistory
     */
    select?: ReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnHistory
     */
    omit?: ReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ReturnHistory to fetch.
     */
    where: ReturnHistoryWhereUniqueInput
  }

  /**
   * ReturnHistory findUniqueOrThrow
   */
  export type ReturnHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnHistory
     */
    select?: ReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnHistory
     */
    omit?: ReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ReturnHistory to fetch.
     */
    where: ReturnHistoryWhereUniqueInput
  }

  /**
   * ReturnHistory findFirst
   */
  export type ReturnHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnHistory
     */
    select?: ReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnHistory
     */
    omit?: ReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ReturnHistory to fetch.
     */
    where?: ReturnHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnHistories to fetch.
     */
    orderBy?: ReturnHistoryOrderByWithRelationInput | ReturnHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReturnHistories.
     */
    cursor?: ReturnHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReturnHistories.
     */
    distinct?: ReturnHistoryScalarFieldEnum | ReturnHistoryScalarFieldEnum[]
  }

  /**
   * ReturnHistory findFirstOrThrow
   */
  export type ReturnHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnHistory
     */
    select?: ReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnHistory
     */
    omit?: ReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ReturnHistory to fetch.
     */
    where?: ReturnHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnHistories to fetch.
     */
    orderBy?: ReturnHistoryOrderByWithRelationInput | ReturnHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReturnHistories.
     */
    cursor?: ReturnHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReturnHistories.
     */
    distinct?: ReturnHistoryScalarFieldEnum | ReturnHistoryScalarFieldEnum[]
  }

  /**
   * ReturnHistory findMany
   */
  export type ReturnHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnHistory
     */
    select?: ReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnHistory
     */
    omit?: ReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ReturnHistories to fetch.
     */
    where?: ReturnHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnHistories to fetch.
     */
    orderBy?: ReturnHistoryOrderByWithRelationInput | ReturnHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReturnHistories.
     */
    cursor?: ReturnHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnHistories.
     */
    skip?: number
    distinct?: ReturnHistoryScalarFieldEnum | ReturnHistoryScalarFieldEnum[]
  }

  /**
   * ReturnHistory create
   */
  export type ReturnHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnHistory
     */
    select?: ReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnHistory
     */
    omit?: ReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ReturnHistory.
     */
    data: XOR<ReturnHistoryCreateInput, ReturnHistoryUncheckedCreateInput>
  }

  /**
   * ReturnHistory createMany
   */
  export type ReturnHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReturnHistories.
     */
    data: ReturnHistoryCreateManyInput | ReturnHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReturnHistory createManyAndReturn
   */
  export type ReturnHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnHistory
     */
    select?: ReturnHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnHistory
     */
    omit?: ReturnHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ReturnHistories.
     */
    data: ReturnHistoryCreateManyInput | ReturnHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReturnHistory update
   */
  export type ReturnHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnHistory
     */
    select?: ReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnHistory
     */
    omit?: ReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ReturnHistory.
     */
    data: XOR<ReturnHistoryUpdateInput, ReturnHistoryUncheckedUpdateInput>
    /**
     * Choose, which ReturnHistory to update.
     */
    where: ReturnHistoryWhereUniqueInput
  }

  /**
   * ReturnHistory updateMany
   */
  export type ReturnHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReturnHistories.
     */
    data: XOR<ReturnHistoryUpdateManyMutationInput, ReturnHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ReturnHistories to update
     */
    where?: ReturnHistoryWhereInput
    /**
     * Limit how many ReturnHistories to update.
     */
    limit?: number
  }

  /**
   * ReturnHistory updateManyAndReturn
   */
  export type ReturnHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnHistory
     */
    select?: ReturnHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnHistory
     */
    omit?: ReturnHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ReturnHistories.
     */
    data: XOR<ReturnHistoryUpdateManyMutationInput, ReturnHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ReturnHistories to update
     */
    where?: ReturnHistoryWhereInput
    /**
     * Limit how many ReturnHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReturnHistory upsert
   */
  export type ReturnHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnHistory
     */
    select?: ReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnHistory
     */
    omit?: ReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ReturnHistory to update in case it exists.
     */
    where: ReturnHistoryWhereUniqueInput
    /**
     * In case the ReturnHistory found by the `where` argument doesn't exist, create a new ReturnHistory with this data.
     */
    create: XOR<ReturnHistoryCreateInput, ReturnHistoryUncheckedCreateInput>
    /**
     * In case the ReturnHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReturnHistoryUpdateInput, ReturnHistoryUncheckedUpdateInput>
  }

  /**
   * ReturnHistory delete
   */
  export type ReturnHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnHistory
     */
    select?: ReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnHistory
     */
    omit?: ReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnHistoryInclude<ExtArgs> | null
    /**
     * Filter which ReturnHistory to delete.
     */
    where: ReturnHistoryWhereUniqueInput
  }

  /**
   * ReturnHistory deleteMany
   */
  export type ReturnHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReturnHistories to delete
     */
    where?: ReturnHistoryWhereInput
    /**
     * Limit how many ReturnHistories to delete.
     */
    limit?: number
  }

  /**
   * ReturnHistory without action
   */
  export type ReturnHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnHistory
     */
    select?: ReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnHistory
     */
    omit?: ReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnHistoryInclude<ExtArgs> | null
  }


  /**
   * Model DonatedBook
   */

  export type AggregateDonatedBook = {
    _count: DonatedBookCountAggregateOutputType | null
    _avg: DonatedBookAvgAggregateOutputType | null
    _sum: DonatedBookSumAggregateOutputType | null
    _min: DonatedBookMinAggregateOutputType | null
    _max: DonatedBookMaxAggregateOutputType | null
  }

  export type DonatedBookAvgAggregateOutputType = {
    id: number | null
    bookId: number | null
  }

  export type DonatedBookSumAggregateOutputType = {
    id: number | null
    bookId: number | null
  }

  export type DonatedBookMinAggregateOutputType = {
    id: number | null
    bookId: number | null
    donatedBy: string | null
    donatedAt: Date | null
  }

  export type DonatedBookMaxAggregateOutputType = {
    id: number | null
    bookId: number | null
    donatedBy: string | null
    donatedAt: Date | null
  }

  export type DonatedBookCountAggregateOutputType = {
    id: number
    bookId: number
    donatedBy: number
    donatedAt: number
    _all: number
  }


  export type DonatedBookAvgAggregateInputType = {
    id?: true
    bookId?: true
  }

  export type DonatedBookSumAggregateInputType = {
    id?: true
    bookId?: true
  }

  export type DonatedBookMinAggregateInputType = {
    id?: true
    bookId?: true
    donatedBy?: true
    donatedAt?: true
  }

  export type DonatedBookMaxAggregateInputType = {
    id?: true
    bookId?: true
    donatedBy?: true
    donatedAt?: true
  }

  export type DonatedBookCountAggregateInputType = {
    id?: true
    bookId?: true
    donatedBy?: true
    donatedAt?: true
    _all?: true
  }

  export type DonatedBookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonatedBook to aggregate.
     */
    where?: DonatedBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonatedBooks to fetch.
     */
    orderBy?: DonatedBookOrderByWithRelationInput | DonatedBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonatedBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonatedBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonatedBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DonatedBooks
    **/
    _count?: true | DonatedBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonatedBookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonatedBookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonatedBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonatedBookMaxAggregateInputType
  }

  export type GetDonatedBookAggregateType<T extends DonatedBookAggregateArgs> = {
        [P in keyof T & keyof AggregateDonatedBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonatedBook[P]>
      : GetScalarType<T[P], AggregateDonatedBook[P]>
  }




  export type DonatedBookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonatedBookWhereInput
    orderBy?: DonatedBookOrderByWithAggregationInput | DonatedBookOrderByWithAggregationInput[]
    by: DonatedBookScalarFieldEnum[] | DonatedBookScalarFieldEnum
    having?: DonatedBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonatedBookCountAggregateInputType | true
    _avg?: DonatedBookAvgAggregateInputType
    _sum?: DonatedBookSumAggregateInputType
    _min?: DonatedBookMinAggregateInputType
    _max?: DonatedBookMaxAggregateInputType
  }

  export type DonatedBookGroupByOutputType = {
    id: number
    bookId: number
    donatedBy: string
    donatedAt: Date
    _count: DonatedBookCountAggregateOutputType | null
    _avg: DonatedBookAvgAggregateOutputType | null
    _sum: DonatedBookSumAggregateOutputType | null
    _min: DonatedBookMinAggregateOutputType | null
    _max: DonatedBookMaxAggregateOutputType | null
  }

  type GetDonatedBookGroupByPayload<T extends DonatedBookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonatedBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonatedBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonatedBookGroupByOutputType[P]>
            : GetScalarType<T[P], DonatedBookGroupByOutputType[P]>
        }
      >
    >


  export type DonatedBookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    donatedBy?: boolean
    donatedAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donatedBook"]>

  export type DonatedBookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    donatedBy?: boolean
    donatedAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donatedBook"]>

  export type DonatedBookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    donatedBy?: boolean
    donatedAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donatedBook"]>

  export type DonatedBookSelectScalar = {
    id?: boolean
    bookId?: boolean
    donatedBy?: boolean
    donatedAt?: boolean
  }

  export type DonatedBookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "donatedBy" | "donatedAt", ExtArgs["result"]["donatedBook"]>
  export type DonatedBookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type DonatedBookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type DonatedBookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $DonatedBookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonatedBook"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookId: number
      donatedBy: string
      donatedAt: Date
    }, ExtArgs["result"]["donatedBook"]>
    composites: {}
  }

  type DonatedBookGetPayload<S extends boolean | null | undefined | DonatedBookDefaultArgs> = $Result.GetResult<Prisma.$DonatedBookPayload, S>

  type DonatedBookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonatedBookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonatedBookCountAggregateInputType | true
    }

  export interface DonatedBookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DonatedBook'], meta: { name: 'DonatedBook' } }
    /**
     * Find zero or one DonatedBook that matches the filter.
     * @param {DonatedBookFindUniqueArgs} args - Arguments to find a DonatedBook
     * @example
     * // Get one DonatedBook
     * const donatedBook = await prisma.donatedBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonatedBookFindUniqueArgs>(args: SelectSubset<T, DonatedBookFindUniqueArgs<ExtArgs>>): Prisma__DonatedBookClient<$Result.GetResult<Prisma.$DonatedBookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DonatedBook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonatedBookFindUniqueOrThrowArgs} args - Arguments to find a DonatedBook
     * @example
     * // Get one DonatedBook
     * const donatedBook = await prisma.donatedBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonatedBookFindUniqueOrThrowArgs>(args: SelectSubset<T, DonatedBookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonatedBookClient<$Result.GetResult<Prisma.$DonatedBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonatedBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonatedBookFindFirstArgs} args - Arguments to find a DonatedBook
     * @example
     * // Get one DonatedBook
     * const donatedBook = await prisma.donatedBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonatedBookFindFirstArgs>(args?: SelectSubset<T, DonatedBookFindFirstArgs<ExtArgs>>): Prisma__DonatedBookClient<$Result.GetResult<Prisma.$DonatedBookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonatedBook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonatedBookFindFirstOrThrowArgs} args - Arguments to find a DonatedBook
     * @example
     * // Get one DonatedBook
     * const donatedBook = await prisma.donatedBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonatedBookFindFirstOrThrowArgs>(args?: SelectSubset<T, DonatedBookFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonatedBookClient<$Result.GetResult<Prisma.$DonatedBookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DonatedBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonatedBookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DonatedBooks
     * const donatedBooks = await prisma.donatedBook.findMany()
     * 
     * // Get first 10 DonatedBooks
     * const donatedBooks = await prisma.donatedBook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donatedBookWithIdOnly = await prisma.donatedBook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonatedBookFindManyArgs>(args?: SelectSubset<T, DonatedBookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonatedBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DonatedBook.
     * @param {DonatedBookCreateArgs} args - Arguments to create a DonatedBook.
     * @example
     * // Create one DonatedBook
     * const DonatedBook = await prisma.donatedBook.create({
     *   data: {
     *     // ... data to create a DonatedBook
     *   }
     * })
     * 
     */
    create<T extends DonatedBookCreateArgs>(args: SelectSubset<T, DonatedBookCreateArgs<ExtArgs>>): Prisma__DonatedBookClient<$Result.GetResult<Prisma.$DonatedBookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DonatedBooks.
     * @param {DonatedBookCreateManyArgs} args - Arguments to create many DonatedBooks.
     * @example
     * // Create many DonatedBooks
     * const donatedBook = await prisma.donatedBook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonatedBookCreateManyArgs>(args?: SelectSubset<T, DonatedBookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DonatedBooks and returns the data saved in the database.
     * @param {DonatedBookCreateManyAndReturnArgs} args - Arguments to create many DonatedBooks.
     * @example
     * // Create many DonatedBooks
     * const donatedBook = await prisma.donatedBook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DonatedBooks and only return the `id`
     * const donatedBookWithIdOnly = await prisma.donatedBook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonatedBookCreateManyAndReturnArgs>(args?: SelectSubset<T, DonatedBookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonatedBookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DonatedBook.
     * @param {DonatedBookDeleteArgs} args - Arguments to delete one DonatedBook.
     * @example
     * // Delete one DonatedBook
     * const DonatedBook = await prisma.donatedBook.delete({
     *   where: {
     *     // ... filter to delete one DonatedBook
     *   }
     * })
     * 
     */
    delete<T extends DonatedBookDeleteArgs>(args: SelectSubset<T, DonatedBookDeleteArgs<ExtArgs>>): Prisma__DonatedBookClient<$Result.GetResult<Prisma.$DonatedBookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DonatedBook.
     * @param {DonatedBookUpdateArgs} args - Arguments to update one DonatedBook.
     * @example
     * // Update one DonatedBook
     * const donatedBook = await prisma.donatedBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonatedBookUpdateArgs>(args: SelectSubset<T, DonatedBookUpdateArgs<ExtArgs>>): Prisma__DonatedBookClient<$Result.GetResult<Prisma.$DonatedBookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DonatedBooks.
     * @param {DonatedBookDeleteManyArgs} args - Arguments to filter DonatedBooks to delete.
     * @example
     * // Delete a few DonatedBooks
     * const { count } = await prisma.donatedBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonatedBookDeleteManyArgs>(args?: SelectSubset<T, DonatedBookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonatedBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonatedBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DonatedBooks
     * const donatedBook = await prisma.donatedBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonatedBookUpdateManyArgs>(args: SelectSubset<T, DonatedBookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonatedBooks and returns the data updated in the database.
     * @param {DonatedBookUpdateManyAndReturnArgs} args - Arguments to update many DonatedBooks.
     * @example
     * // Update many DonatedBooks
     * const donatedBook = await prisma.donatedBook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DonatedBooks and only return the `id`
     * const donatedBookWithIdOnly = await prisma.donatedBook.updateManyAndReturn({
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
    updateManyAndReturn<T extends DonatedBookUpdateManyAndReturnArgs>(args: SelectSubset<T, DonatedBookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonatedBookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DonatedBook.
     * @param {DonatedBookUpsertArgs} args - Arguments to update or create a DonatedBook.
     * @example
     * // Update or create a DonatedBook
     * const donatedBook = await prisma.donatedBook.upsert({
     *   create: {
     *     // ... data to create a DonatedBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DonatedBook we want to update
     *   }
     * })
     */
    upsert<T extends DonatedBookUpsertArgs>(args: SelectSubset<T, DonatedBookUpsertArgs<ExtArgs>>): Prisma__DonatedBookClient<$Result.GetResult<Prisma.$DonatedBookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DonatedBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonatedBookCountArgs} args - Arguments to filter DonatedBooks to count.
     * @example
     * // Count the number of DonatedBooks
     * const count = await prisma.donatedBook.count({
     *   where: {
     *     // ... the filter for the DonatedBooks we want to count
     *   }
     * })
    **/
    count<T extends DonatedBookCountArgs>(
      args?: Subset<T, DonatedBookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonatedBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DonatedBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonatedBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DonatedBookAggregateArgs>(args: Subset<T, DonatedBookAggregateArgs>): Prisma.PrismaPromise<GetDonatedBookAggregateType<T>>

    /**
     * Group by DonatedBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonatedBookGroupByArgs} args - Group by arguments.
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
      T extends DonatedBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonatedBookGroupByArgs['orderBy'] }
        : { orderBy?: DonatedBookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DonatedBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonatedBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DonatedBook model
   */
  readonly fields: DonatedBookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DonatedBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonatedBookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DonatedBook model
   */
  interface DonatedBookFieldRefs {
    readonly id: FieldRef<"DonatedBook", 'Int'>
    readonly bookId: FieldRef<"DonatedBook", 'Int'>
    readonly donatedBy: FieldRef<"DonatedBook", 'String'>
    readonly donatedAt: FieldRef<"DonatedBook", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DonatedBook findUnique
   */
  export type DonatedBookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonatedBook
     */
    select?: DonatedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonatedBook
     */
    omit?: DonatedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonatedBookInclude<ExtArgs> | null
    /**
     * Filter, which DonatedBook to fetch.
     */
    where: DonatedBookWhereUniqueInput
  }

  /**
   * DonatedBook findUniqueOrThrow
   */
  export type DonatedBookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonatedBook
     */
    select?: DonatedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonatedBook
     */
    omit?: DonatedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonatedBookInclude<ExtArgs> | null
    /**
     * Filter, which DonatedBook to fetch.
     */
    where: DonatedBookWhereUniqueInput
  }

  /**
   * DonatedBook findFirst
   */
  export type DonatedBookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonatedBook
     */
    select?: DonatedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonatedBook
     */
    omit?: DonatedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonatedBookInclude<ExtArgs> | null
    /**
     * Filter, which DonatedBook to fetch.
     */
    where?: DonatedBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonatedBooks to fetch.
     */
    orderBy?: DonatedBookOrderByWithRelationInput | DonatedBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonatedBooks.
     */
    cursor?: DonatedBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonatedBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonatedBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonatedBooks.
     */
    distinct?: DonatedBookScalarFieldEnum | DonatedBookScalarFieldEnum[]
  }

  /**
   * DonatedBook findFirstOrThrow
   */
  export type DonatedBookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonatedBook
     */
    select?: DonatedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonatedBook
     */
    omit?: DonatedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonatedBookInclude<ExtArgs> | null
    /**
     * Filter, which DonatedBook to fetch.
     */
    where?: DonatedBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonatedBooks to fetch.
     */
    orderBy?: DonatedBookOrderByWithRelationInput | DonatedBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonatedBooks.
     */
    cursor?: DonatedBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonatedBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonatedBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonatedBooks.
     */
    distinct?: DonatedBookScalarFieldEnum | DonatedBookScalarFieldEnum[]
  }

  /**
   * DonatedBook findMany
   */
  export type DonatedBookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonatedBook
     */
    select?: DonatedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonatedBook
     */
    omit?: DonatedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonatedBookInclude<ExtArgs> | null
    /**
     * Filter, which DonatedBooks to fetch.
     */
    where?: DonatedBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonatedBooks to fetch.
     */
    orderBy?: DonatedBookOrderByWithRelationInput | DonatedBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DonatedBooks.
     */
    cursor?: DonatedBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonatedBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonatedBooks.
     */
    skip?: number
    distinct?: DonatedBookScalarFieldEnum | DonatedBookScalarFieldEnum[]
  }

  /**
   * DonatedBook create
   */
  export type DonatedBookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonatedBook
     */
    select?: DonatedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonatedBook
     */
    omit?: DonatedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonatedBookInclude<ExtArgs> | null
    /**
     * The data needed to create a DonatedBook.
     */
    data: XOR<DonatedBookCreateInput, DonatedBookUncheckedCreateInput>
  }

  /**
   * DonatedBook createMany
   */
  export type DonatedBookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DonatedBooks.
     */
    data: DonatedBookCreateManyInput | DonatedBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonatedBook createManyAndReturn
   */
  export type DonatedBookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonatedBook
     */
    select?: DonatedBookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonatedBook
     */
    omit?: DonatedBookOmit<ExtArgs> | null
    /**
     * The data used to create many DonatedBooks.
     */
    data: DonatedBookCreateManyInput | DonatedBookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonatedBookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonatedBook update
   */
  export type DonatedBookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonatedBook
     */
    select?: DonatedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonatedBook
     */
    omit?: DonatedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonatedBookInclude<ExtArgs> | null
    /**
     * The data needed to update a DonatedBook.
     */
    data: XOR<DonatedBookUpdateInput, DonatedBookUncheckedUpdateInput>
    /**
     * Choose, which DonatedBook to update.
     */
    where: DonatedBookWhereUniqueInput
  }

  /**
   * DonatedBook updateMany
   */
  export type DonatedBookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DonatedBooks.
     */
    data: XOR<DonatedBookUpdateManyMutationInput, DonatedBookUncheckedUpdateManyInput>
    /**
     * Filter which DonatedBooks to update
     */
    where?: DonatedBookWhereInput
    /**
     * Limit how many DonatedBooks to update.
     */
    limit?: number
  }

  /**
   * DonatedBook updateManyAndReturn
   */
  export type DonatedBookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonatedBook
     */
    select?: DonatedBookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonatedBook
     */
    omit?: DonatedBookOmit<ExtArgs> | null
    /**
     * The data used to update DonatedBooks.
     */
    data: XOR<DonatedBookUpdateManyMutationInput, DonatedBookUncheckedUpdateManyInput>
    /**
     * Filter which DonatedBooks to update
     */
    where?: DonatedBookWhereInput
    /**
     * Limit how many DonatedBooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonatedBookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonatedBook upsert
   */
  export type DonatedBookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonatedBook
     */
    select?: DonatedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonatedBook
     */
    omit?: DonatedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonatedBookInclude<ExtArgs> | null
    /**
     * The filter to search for the DonatedBook to update in case it exists.
     */
    where: DonatedBookWhereUniqueInput
    /**
     * In case the DonatedBook found by the `where` argument doesn't exist, create a new DonatedBook with this data.
     */
    create: XOR<DonatedBookCreateInput, DonatedBookUncheckedCreateInput>
    /**
     * In case the DonatedBook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonatedBookUpdateInput, DonatedBookUncheckedUpdateInput>
  }

  /**
   * DonatedBook delete
   */
  export type DonatedBookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonatedBook
     */
    select?: DonatedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonatedBook
     */
    omit?: DonatedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonatedBookInclude<ExtArgs> | null
    /**
     * Filter which DonatedBook to delete.
     */
    where: DonatedBookWhereUniqueInput
  }

  /**
   * DonatedBook deleteMany
   */
  export type DonatedBookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonatedBooks to delete
     */
    where?: DonatedBookWhereInput
    /**
     * Limit how many DonatedBooks to delete.
     */
    limit?: number
  }

  /**
   * DonatedBook without action
   */
  export type DonatedBookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonatedBook
     */
    select?: DonatedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonatedBook
     */
    omit?: DonatedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonatedBookInclude<ExtArgs> | null
  }


  /**
   * Model Query
   */

  export type AggregateQuery = {
    _count: QueryCountAggregateOutputType | null
    _avg: QueryAvgAggregateOutputType | null
    _sum: QuerySumAggregateOutputType | null
    _min: QueryMinAggregateOutputType | null
    _max: QueryMaxAggregateOutputType | null
  }

  export type QueryAvgAggregateOutputType = {
    id: number | null
  }

  export type QuerySumAggregateOutputType = {
    id: number | null
  }

  export type QueryMinAggregateOutputType = {
    id: number | null
    userQuery: string | null
    assistantResponse: string | null
    createdAt: Date | null
  }

  export type QueryMaxAggregateOutputType = {
    id: number | null
    userQuery: string | null
    assistantResponse: string | null
    createdAt: Date | null
  }

  export type QueryCountAggregateOutputType = {
    id: number
    userQuery: number
    assistantResponse: number
    createdAt: number
    _all: number
  }


  export type QueryAvgAggregateInputType = {
    id?: true
  }

  export type QuerySumAggregateInputType = {
    id?: true
  }

  export type QueryMinAggregateInputType = {
    id?: true
    userQuery?: true
    assistantResponse?: true
    createdAt?: true
  }

  export type QueryMaxAggregateInputType = {
    id?: true
    userQuery?: true
    assistantResponse?: true
    createdAt?: true
  }

  export type QueryCountAggregateInputType = {
    id?: true
    userQuery?: true
    assistantResponse?: true
    createdAt?: true
    _all?: true
  }

  export type QueryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Query to aggregate.
     */
    where?: QueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queries to fetch.
     */
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Queries
    **/
    _count?: true | QueryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QueryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QueryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QueryMaxAggregateInputType
  }

  export type GetQueryAggregateType<T extends QueryAggregateArgs> = {
        [P in keyof T & keyof AggregateQuery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuery[P]>
      : GetScalarType<T[P], AggregateQuery[P]>
  }




  export type QueryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueryWhereInput
    orderBy?: QueryOrderByWithAggregationInput | QueryOrderByWithAggregationInput[]
    by: QueryScalarFieldEnum[] | QueryScalarFieldEnum
    having?: QueryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QueryCountAggregateInputType | true
    _avg?: QueryAvgAggregateInputType
    _sum?: QuerySumAggregateInputType
    _min?: QueryMinAggregateInputType
    _max?: QueryMaxAggregateInputType
  }

  export type QueryGroupByOutputType = {
    id: number
    userQuery: string
    assistantResponse: string
    createdAt: Date
    _count: QueryCountAggregateOutputType | null
    _avg: QueryAvgAggregateOutputType | null
    _sum: QuerySumAggregateOutputType | null
    _min: QueryMinAggregateOutputType | null
    _max: QueryMaxAggregateOutputType | null
  }

  type GetQueryGroupByPayload<T extends QueryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QueryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QueryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QueryGroupByOutputType[P]>
            : GetScalarType<T[P], QueryGroupByOutputType[P]>
        }
      >
    >


  export type QuerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userQuery?: boolean
    assistantResponse?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["query"]>

  export type QuerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userQuery?: boolean
    assistantResponse?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["query"]>

  export type QuerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userQuery?: boolean
    assistantResponse?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["query"]>

  export type QuerySelectScalar = {
    id?: boolean
    userQuery?: boolean
    assistantResponse?: boolean
    createdAt?: boolean
  }

  export type QueryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userQuery" | "assistantResponse" | "createdAt", ExtArgs["result"]["query"]>

  export type $QueryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Query"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userQuery: string
      assistantResponse: string
      createdAt: Date
    }, ExtArgs["result"]["query"]>
    composites: {}
  }

  type QueryGetPayload<S extends boolean | null | undefined | QueryDefaultArgs> = $Result.GetResult<Prisma.$QueryPayload, S>

  type QueryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QueryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QueryCountAggregateInputType | true
    }

  export interface QueryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Query'], meta: { name: 'Query' } }
    /**
     * Find zero or one Query that matches the filter.
     * @param {QueryFindUniqueArgs} args - Arguments to find a Query
     * @example
     * // Get one Query
     * const query = await prisma.query.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QueryFindUniqueArgs>(args: SelectSubset<T, QueryFindUniqueArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Query that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QueryFindUniqueOrThrowArgs} args - Arguments to find a Query
     * @example
     * // Get one Query
     * const query = await prisma.query.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QueryFindUniqueOrThrowArgs>(args: SelectSubset<T, QueryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Query that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryFindFirstArgs} args - Arguments to find a Query
     * @example
     * // Get one Query
     * const query = await prisma.query.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QueryFindFirstArgs>(args?: SelectSubset<T, QueryFindFirstArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Query that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryFindFirstOrThrowArgs} args - Arguments to find a Query
     * @example
     * // Get one Query
     * const query = await prisma.query.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QueryFindFirstOrThrowArgs>(args?: SelectSubset<T, QueryFindFirstOrThrowArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Queries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Queries
     * const queries = await prisma.query.findMany()
     * 
     * // Get first 10 Queries
     * const queries = await prisma.query.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const queryWithIdOnly = await prisma.query.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QueryFindManyArgs>(args?: SelectSubset<T, QueryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Query.
     * @param {QueryCreateArgs} args - Arguments to create a Query.
     * @example
     * // Create one Query
     * const Query = await prisma.query.create({
     *   data: {
     *     // ... data to create a Query
     *   }
     * })
     * 
     */
    create<T extends QueryCreateArgs>(args: SelectSubset<T, QueryCreateArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Queries.
     * @param {QueryCreateManyArgs} args - Arguments to create many Queries.
     * @example
     * // Create many Queries
     * const query = await prisma.query.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QueryCreateManyArgs>(args?: SelectSubset<T, QueryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Queries and returns the data saved in the database.
     * @param {QueryCreateManyAndReturnArgs} args - Arguments to create many Queries.
     * @example
     * // Create many Queries
     * const query = await prisma.query.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Queries and only return the `id`
     * const queryWithIdOnly = await prisma.query.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QueryCreateManyAndReturnArgs>(args?: SelectSubset<T, QueryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Query.
     * @param {QueryDeleteArgs} args - Arguments to delete one Query.
     * @example
     * // Delete one Query
     * const Query = await prisma.query.delete({
     *   where: {
     *     // ... filter to delete one Query
     *   }
     * })
     * 
     */
    delete<T extends QueryDeleteArgs>(args: SelectSubset<T, QueryDeleteArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Query.
     * @param {QueryUpdateArgs} args - Arguments to update one Query.
     * @example
     * // Update one Query
     * const query = await prisma.query.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QueryUpdateArgs>(args: SelectSubset<T, QueryUpdateArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Queries.
     * @param {QueryDeleteManyArgs} args - Arguments to filter Queries to delete.
     * @example
     * // Delete a few Queries
     * const { count } = await prisma.query.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QueryDeleteManyArgs>(args?: SelectSubset<T, QueryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Queries
     * const query = await prisma.query.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QueryUpdateManyArgs>(args: SelectSubset<T, QueryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queries and returns the data updated in the database.
     * @param {QueryUpdateManyAndReturnArgs} args - Arguments to update many Queries.
     * @example
     * // Update many Queries
     * const query = await prisma.query.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Queries and only return the `id`
     * const queryWithIdOnly = await prisma.query.updateManyAndReturn({
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
    updateManyAndReturn<T extends QueryUpdateManyAndReturnArgs>(args: SelectSubset<T, QueryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Query.
     * @param {QueryUpsertArgs} args - Arguments to update or create a Query.
     * @example
     * // Update or create a Query
     * const query = await prisma.query.upsert({
     *   create: {
     *     // ... data to create a Query
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Query we want to update
     *   }
     * })
     */
    upsert<T extends QueryUpsertArgs>(args: SelectSubset<T, QueryUpsertArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Queries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryCountArgs} args - Arguments to filter Queries to count.
     * @example
     * // Count the number of Queries
     * const count = await prisma.query.count({
     *   where: {
     *     // ... the filter for the Queries we want to count
     *   }
     * })
    **/
    count<T extends QueryCountArgs>(
      args?: Subset<T, QueryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QueryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Query.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QueryAggregateArgs>(args: Subset<T, QueryAggregateArgs>): Prisma.PrismaPromise<GetQueryAggregateType<T>>

    /**
     * Group by Query.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryGroupByArgs} args - Group by arguments.
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
      T extends QueryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QueryGroupByArgs['orderBy'] }
        : { orderBy?: QueryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QueryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Query model
   */
  readonly fields: QueryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Query.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QueryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Query model
   */
  interface QueryFieldRefs {
    readonly id: FieldRef<"Query", 'Int'>
    readonly userQuery: FieldRef<"Query", 'String'>
    readonly assistantResponse: FieldRef<"Query", 'String'>
    readonly createdAt: FieldRef<"Query", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Query findUnique
   */
  export type QueryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Filter, which Query to fetch.
     */
    where: QueryWhereUniqueInput
  }

  /**
   * Query findUniqueOrThrow
   */
  export type QueryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Filter, which Query to fetch.
     */
    where: QueryWhereUniqueInput
  }

  /**
   * Query findFirst
   */
  export type QueryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Filter, which Query to fetch.
     */
    where?: QueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queries to fetch.
     */
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Queries.
     */
    cursor?: QueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Queries.
     */
    distinct?: QueryScalarFieldEnum | QueryScalarFieldEnum[]
  }

  /**
   * Query findFirstOrThrow
   */
  export type QueryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Filter, which Query to fetch.
     */
    where?: QueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queries to fetch.
     */
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Queries.
     */
    cursor?: QueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Queries.
     */
    distinct?: QueryScalarFieldEnum | QueryScalarFieldEnum[]
  }

  /**
   * Query findMany
   */
  export type QueryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Filter, which Queries to fetch.
     */
    where?: QueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queries to fetch.
     */
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Queries.
     */
    cursor?: QueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queries.
     */
    skip?: number
    distinct?: QueryScalarFieldEnum | QueryScalarFieldEnum[]
  }

  /**
   * Query create
   */
  export type QueryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * The data needed to create a Query.
     */
    data: XOR<QueryCreateInput, QueryUncheckedCreateInput>
  }

  /**
   * Query createMany
   */
  export type QueryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Queries.
     */
    data: QueryCreateManyInput | QueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Query createManyAndReturn
   */
  export type QueryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * The data used to create many Queries.
     */
    data: QueryCreateManyInput | QueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Query update
   */
  export type QueryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * The data needed to update a Query.
     */
    data: XOR<QueryUpdateInput, QueryUncheckedUpdateInput>
    /**
     * Choose, which Query to update.
     */
    where: QueryWhereUniqueInput
  }

  /**
   * Query updateMany
   */
  export type QueryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Queries.
     */
    data: XOR<QueryUpdateManyMutationInput, QueryUncheckedUpdateManyInput>
    /**
     * Filter which Queries to update
     */
    where?: QueryWhereInput
    /**
     * Limit how many Queries to update.
     */
    limit?: number
  }

  /**
   * Query updateManyAndReturn
   */
  export type QueryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * The data used to update Queries.
     */
    data: XOR<QueryUpdateManyMutationInput, QueryUncheckedUpdateManyInput>
    /**
     * Filter which Queries to update
     */
    where?: QueryWhereInput
    /**
     * Limit how many Queries to update.
     */
    limit?: number
  }

  /**
   * Query upsert
   */
  export type QueryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * The filter to search for the Query to update in case it exists.
     */
    where: QueryWhereUniqueInput
    /**
     * In case the Query found by the `where` argument doesn't exist, create a new Query with this data.
     */
    create: XOR<QueryCreateInput, QueryUncheckedCreateInput>
    /**
     * In case the Query was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QueryUpdateInput, QueryUncheckedUpdateInput>
  }

  /**
   * Query delete
   */
  export type QueryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Filter which Query to delete.
     */
    where: QueryWhereUniqueInput
  }

  /**
   * Query deleteMany
   */
  export type QueryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Queries to delete
     */
    where?: QueryWhereInput
    /**
     * Limit how many Queries to delete.
     */
    limit?: number
  }

  /**
   * Query without action
   */
  export type QueryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
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
    email: 'email',
    username: 'username',
    mobile: 'mobile',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    isbn: 'isbn',
    category: 'category',
    addedAt: 'addedAt',
    donatedBy: 'donatedBy',
    donatedAt: 'donatedAt',
    coverImage: 'coverImage',
    description: 'description',
    quantity: 'quantity'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const BorrowedBookScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    userId: 'userId',
    borrowedAt: 'borrowedAt',
    dueDate: 'dueDate',
    returnedAt: 'returnedAt',
    isOverdue: 'isOverdue'
  };

  export type BorrowedBookScalarFieldEnum = (typeof BorrowedBookScalarFieldEnum)[keyof typeof BorrowedBookScalarFieldEnum]


  export const OverdueBookScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    userId: 'userId',
    overdueAt: 'overdueAt'
  };

  export type OverdueBookScalarFieldEnum = (typeof OverdueBookScalarFieldEnum)[keyof typeof OverdueBookScalarFieldEnum]


  export const ReturnHistoryScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    userId: 'userId',
    returnedAt: 'returnedAt'
  };

  export type ReturnHistoryScalarFieldEnum = (typeof ReturnHistoryScalarFieldEnum)[keyof typeof ReturnHistoryScalarFieldEnum]


  export const DonatedBookScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    donatedBy: 'donatedBy',
    donatedAt: 'donatedAt'
  };

  export type DonatedBookScalarFieldEnum = (typeof DonatedBookScalarFieldEnum)[keyof typeof DonatedBookScalarFieldEnum]


  export const QueryScalarFieldEnum: {
    id: 'id',
    userQuery: 'userQuery',
    assistantResponse: 'assistantResponse',
    createdAt: 'createdAt'
  };

  export type QueryScalarFieldEnum = (typeof QueryScalarFieldEnum)[keyof typeof QueryScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    borrowedBooks?: BorrowedBookListRelationFilter
    overdueBooks?: OverdueBookListRelationFilter
    returnHistories?: ReturnHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    borrowedBooks?: BorrowedBookOrderByRelationAggregateInput
    overdueBooks?: OverdueBookOrderByRelationAggregateInput
    returnHistories?: ReturnHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    borrowedBooks?: BorrowedBookListRelationFilter
    overdueBooks?: OverdueBookListRelationFilter
    returnHistories?: ReturnHistoryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    mobile?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    author?: StringFilter<"Book"> | string
    isbn?: StringFilter<"Book"> | string
    category?: StringFilter<"Book"> | string
    addedAt?: DateTimeFilter<"Book"> | Date | string
    donatedBy?: StringNullableFilter<"Book"> | string | null
    donatedAt?: DateTimeNullableFilter<"Book"> | Date | string | null
    coverImage?: StringNullableFilter<"Book"> | string | null
    description?: StringFilter<"Book"> | string
    quantity?: IntFilter<"Book"> | number
    borrowedBooks?: BorrowedBookListRelationFilter
    donatedBooks?: DonatedBookListRelationFilter
    overdueBooks?: OverdueBookListRelationFilter
    returnHistories?: ReturnHistoryListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    isbn?: SortOrder
    category?: SortOrder
    addedAt?: SortOrder
    donatedBy?: SortOrderInput | SortOrder
    donatedAt?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    description?: SortOrder
    quantity?: SortOrder
    borrowedBooks?: BorrowedBookOrderByRelationAggregateInput
    donatedBooks?: DonatedBookOrderByRelationAggregateInput
    overdueBooks?: OverdueBookOrderByRelationAggregateInput
    returnHistories?: ReturnHistoryOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    isbn?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    author?: StringFilter<"Book"> | string
    category?: StringFilter<"Book"> | string
    addedAt?: DateTimeFilter<"Book"> | Date | string
    donatedBy?: StringNullableFilter<"Book"> | string | null
    donatedAt?: DateTimeNullableFilter<"Book"> | Date | string | null
    coverImage?: StringNullableFilter<"Book"> | string | null
    description?: StringFilter<"Book"> | string
    quantity?: IntFilter<"Book"> | number
    borrowedBooks?: BorrowedBookListRelationFilter
    donatedBooks?: DonatedBookListRelationFilter
    overdueBooks?: OverdueBookListRelationFilter
    returnHistories?: ReturnHistoryListRelationFilter
  }, "id" | "isbn">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    isbn?: SortOrder
    category?: SortOrder
    addedAt?: SortOrder
    donatedBy?: SortOrderInput | SortOrder
    donatedAt?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    description?: SortOrder
    quantity?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Book"> | number
    title?: StringWithAggregatesFilter<"Book"> | string
    author?: StringWithAggregatesFilter<"Book"> | string
    isbn?: StringWithAggregatesFilter<"Book"> | string
    category?: StringWithAggregatesFilter<"Book"> | string
    addedAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    donatedBy?: StringNullableWithAggregatesFilter<"Book"> | string | null
    donatedAt?: DateTimeNullableWithAggregatesFilter<"Book"> | Date | string | null
    coverImage?: StringNullableWithAggregatesFilter<"Book"> | string | null
    description?: StringWithAggregatesFilter<"Book"> | string
    quantity?: IntWithAggregatesFilter<"Book"> | number
  }

  export type BorrowedBookWhereInput = {
    AND?: BorrowedBookWhereInput | BorrowedBookWhereInput[]
    OR?: BorrowedBookWhereInput[]
    NOT?: BorrowedBookWhereInput | BorrowedBookWhereInput[]
    id?: IntFilter<"BorrowedBook"> | number
    bookId?: IntFilter<"BorrowedBook"> | number
    userId?: IntFilter<"BorrowedBook"> | number
    borrowedAt?: DateTimeFilter<"BorrowedBook"> | Date | string
    dueDate?: DateTimeFilter<"BorrowedBook"> | Date | string
    returnedAt?: DateTimeNullableFilter<"BorrowedBook"> | Date | string | null
    isOverdue?: BoolFilter<"BorrowedBook"> | boolean
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BorrowedBookOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    borrowedAt?: SortOrder
    dueDate?: SortOrder
    returnedAt?: SortOrderInput | SortOrder
    isOverdue?: SortOrder
    book?: BookOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BorrowedBookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BorrowedBookWhereInput | BorrowedBookWhereInput[]
    OR?: BorrowedBookWhereInput[]
    NOT?: BorrowedBookWhereInput | BorrowedBookWhereInput[]
    bookId?: IntFilter<"BorrowedBook"> | number
    userId?: IntFilter<"BorrowedBook"> | number
    borrowedAt?: DateTimeFilter<"BorrowedBook"> | Date | string
    dueDate?: DateTimeFilter<"BorrowedBook"> | Date | string
    returnedAt?: DateTimeNullableFilter<"BorrowedBook"> | Date | string | null
    isOverdue?: BoolFilter<"BorrowedBook"> | boolean
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BorrowedBookOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    borrowedAt?: SortOrder
    dueDate?: SortOrder
    returnedAt?: SortOrderInput | SortOrder
    isOverdue?: SortOrder
    _count?: BorrowedBookCountOrderByAggregateInput
    _avg?: BorrowedBookAvgOrderByAggregateInput
    _max?: BorrowedBookMaxOrderByAggregateInput
    _min?: BorrowedBookMinOrderByAggregateInput
    _sum?: BorrowedBookSumOrderByAggregateInput
  }

  export type BorrowedBookScalarWhereWithAggregatesInput = {
    AND?: BorrowedBookScalarWhereWithAggregatesInput | BorrowedBookScalarWhereWithAggregatesInput[]
    OR?: BorrowedBookScalarWhereWithAggregatesInput[]
    NOT?: BorrowedBookScalarWhereWithAggregatesInput | BorrowedBookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BorrowedBook"> | number
    bookId?: IntWithAggregatesFilter<"BorrowedBook"> | number
    userId?: IntWithAggregatesFilter<"BorrowedBook"> | number
    borrowedAt?: DateTimeWithAggregatesFilter<"BorrowedBook"> | Date | string
    dueDate?: DateTimeWithAggregatesFilter<"BorrowedBook"> | Date | string
    returnedAt?: DateTimeNullableWithAggregatesFilter<"BorrowedBook"> | Date | string | null
    isOverdue?: BoolWithAggregatesFilter<"BorrowedBook"> | boolean
  }

  export type OverdueBookWhereInput = {
    AND?: OverdueBookWhereInput | OverdueBookWhereInput[]
    OR?: OverdueBookWhereInput[]
    NOT?: OverdueBookWhereInput | OverdueBookWhereInput[]
    id?: IntFilter<"OverdueBook"> | number
    bookId?: IntFilter<"OverdueBook"> | number
    userId?: IntFilter<"OverdueBook"> | number
    overdueAt?: DateTimeFilter<"OverdueBook"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OverdueBookOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    overdueAt?: SortOrder
    book?: BookOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type OverdueBookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OverdueBookWhereInput | OverdueBookWhereInput[]
    OR?: OverdueBookWhereInput[]
    NOT?: OverdueBookWhereInput | OverdueBookWhereInput[]
    bookId?: IntFilter<"OverdueBook"> | number
    userId?: IntFilter<"OverdueBook"> | number
    overdueAt?: DateTimeFilter<"OverdueBook"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OverdueBookOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    overdueAt?: SortOrder
    _count?: OverdueBookCountOrderByAggregateInput
    _avg?: OverdueBookAvgOrderByAggregateInput
    _max?: OverdueBookMaxOrderByAggregateInput
    _min?: OverdueBookMinOrderByAggregateInput
    _sum?: OverdueBookSumOrderByAggregateInput
  }

  export type OverdueBookScalarWhereWithAggregatesInput = {
    AND?: OverdueBookScalarWhereWithAggregatesInput | OverdueBookScalarWhereWithAggregatesInput[]
    OR?: OverdueBookScalarWhereWithAggregatesInput[]
    NOT?: OverdueBookScalarWhereWithAggregatesInput | OverdueBookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OverdueBook"> | number
    bookId?: IntWithAggregatesFilter<"OverdueBook"> | number
    userId?: IntWithAggregatesFilter<"OverdueBook"> | number
    overdueAt?: DateTimeWithAggregatesFilter<"OverdueBook"> | Date | string
  }

  export type ReturnHistoryWhereInput = {
    AND?: ReturnHistoryWhereInput | ReturnHistoryWhereInput[]
    OR?: ReturnHistoryWhereInput[]
    NOT?: ReturnHistoryWhereInput | ReturnHistoryWhereInput[]
    id?: IntFilter<"ReturnHistory"> | number
    bookId?: IntFilter<"ReturnHistory"> | number
    userId?: IntFilter<"ReturnHistory"> | number
    returnedAt?: DateTimeFilter<"ReturnHistory"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReturnHistoryOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    returnedAt?: SortOrder
    book?: BookOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReturnHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReturnHistoryWhereInput | ReturnHistoryWhereInput[]
    OR?: ReturnHistoryWhereInput[]
    NOT?: ReturnHistoryWhereInput | ReturnHistoryWhereInput[]
    bookId?: IntFilter<"ReturnHistory"> | number
    userId?: IntFilter<"ReturnHistory"> | number
    returnedAt?: DateTimeFilter<"ReturnHistory"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReturnHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    returnedAt?: SortOrder
    _count?: ReturnHistoryCountOrderByAggregateInput
    _avg?: ReturnHistoryAvgOrderByAggregateInput
    _max?: ReturnHistoryMaxOrderByAggregateInput
    _min?: ReturnHistoryMinOrderByAggregateInput
    _sum?: ReturnHistorySumOrderByAggregateInput
  }

  export type ReturnHistoryScalarWhereWithAggregatesInput = {
    AND?: ReturnHistoryScalarWhereWithAggregatesInput | ReturnHistoryScalarWhereWithAggregatesInput[]
    OR?: ReturnHistoryScalarWhereWithAggregatesInput[]
    NOT?: ReturnHistoryScalarWhereWithAggregatesInput | ReturnHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReturnHistory"> | number
    bookId?: IntWithAggregatesFilter<"ReturnHistory"> | number
    userId?: IntWithAggregatesFilter<"ReturnHistory"> | number
    returnedAt?: DateTimeWithAggregatesFilter<"ReturnHistory"> | Date | string
  }

  export type DonatedBookWhereInput = {
    AND?: DonatedBookWhereInput | DonatedBookWhereInput[]
    OR?: DonatedBookWhereInput[]
    NOT?: DonatedBookWhereInput | DonatedBookWhereInput[]
    id?: IntFilter<"DonatedBook"> | number
    bookId?: IntFilter<"DonatedBook"> | number
    donatedBy?: StringFilter<"DonatedBook"> | string
    donatedAt?: DateTimeFilter<"DonatedBook"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type DonatedBookOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    donatedBy?: SortOrder
    donatedAt?: SortOrder
    book?: BookOrderByWithRelationInput
  }

  export type DonatedBookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DonatedBookWhereInput | DonatedBookWhereInput[]
    OR?: DonatedBookWhereInput[]
    NOT?: DonatedBookWhereInput | DonatedBookWhereInput[]
    bookId?: IntFilter<"DonatedBook"> | number
    donatedBy?: StringFilter<"DonatedBook"> | string
    donatedAt?: DateTimeFilter<"DonatedBook"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type DonatedBookOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    donatedBy?: SortOrder
    donatedAt?: SortOrder
    _count?: DonatedBookCountOrderByAggregateInput
    _avg?: DonatedBookAvgOrderByAggregateInput
    _max?: DonatedBookMaxOrderByAggregateInput
    _min?: DonatedBookMinOrderByAggregateInput
    _sum?: DonatedBookSumOrderByAggregateInput
  }

  export type DonatedBookScalarWhereWithAggregatesInput = {
    AND?: DonatedBookScalarWhereWithAggregatesInput | DonatedBookScalarWhereWithAggregatesInput[]
    OR?: DonatedBookScalarWhereWithAggregatesInput[]
    NOT?: DonatedBookScalarWhereWithAggregatesInput | DonatedBookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DonatedBook"> | number
    bookId?: IntWithAggregatesFilter<"DonatedBook"> | number
    donatedBy?: StringWithAggregatesFilter<"DonatedBook"> | string
    donatedAt?: DateTimeWithAggregatesFilter<"DonatedBook"> | Date | string
  }

  export type QueryWhereInput = {
    AND?: QueryWhereInput | QueryWhereInput[]
    OR?: QueryWhereInput[]
    NOT?: QueryWhereInput | QueryWhereInput[]
    id?: IntFilter<"Query"> | number
    userQuery?: StringFilter<"Query"> | string
    assistantResponse?: StringFilter<"Query"> | string
    createdAt?: DateTimeFilter<"Query"> | Date | string
  }

  export type QueryOrderByWithRelationInput = {
    id?: SortOrder
    userQuery?: SortOrder
    assistantResponse?: SortOrder
    createdAt?: SortOrder
  }

  export type QueryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QueryWhereInput | QueryWhereInput[]
    OR?: QueryWhereInput[]
    NOT?: QueryWhereInput | QueryWhereInput[]
    userQuery?: StringFilter<"Query"> | string
    assistantResponse?: StringFilter<"Query"> | string
    createdAt?: DateTimeFilter<"Query"> | Date | string
  }, "id">

  export type QueryOrderByWithAggregationInput = {
    id?: SortOrder
    userQuery?: SortOrder
    assistantResponse?: SortOrder
    createdAt?: SortOrder
    _count?: QueryCountOrderByAggregateInput
    _avg?: QueryAvgOrderByAggregateInput
    _max?: QueryMaxOrderByAggregateInput
    _min?: QueryMinOrderByAggregateInput
    _sum?: QuerySumOrderByAggregateInput
  }

  export type QueryScalarWhereWithAggregatesInput = {
    AND?: QueryScalarWhereWithAggregatesInput | QueryScalarWhereWithAggregatesInput[]
    OR?: QueryScalarWhereWithAggregatesInput[]
    NOT?: QueryScalarWhereWithAggregatesInput | QueryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Query"> | number
    userQuery?: StringWithAggregatesFilter<"Query"> | string
    assistantResponse?: StringWithAggregatesFilter<"Query"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Query"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    username: string
    mobile: string
    password: string
    createdAt?: Date | string
    borrowedBooks?: BorrowedBookCreateNestedManyWithoutUserInput
    overdueBooks?: OverdueBookCreateNestedManyWithoutUserInput
    returnHistories?: ReturnHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    mobile: string
    password: string
    createdAt?: Date | string
    borrowedBooks?: BorrowedBookUncheckedCreateNestedManyWithoutUserInput
    overdueBooks?: OverdueBookUncheckedCreateNestedManyWithoutUserInput
    returnHistories?: ReturnHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowedBooks?: BorrowedBookUpdateManyWithoutUserNestedInput
    overdueBooks?: OverdueBookUpdateManyWithoutUserNestedInput
    returnHistories?: ReturnHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowedBooks?: BorrowedBookUncheckedUpdateManyWithoutUserNestedInput
    overdueBooks?: OverdueBookUncheckedUpdateManyWithoutUserNestedInput
    returnHistories?: ReturnHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    mobile: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateInput = {
    title: string
    author: string
    isbn: string
    category: string
    addedAt?: Date | string
    donatedBy?: string | null
    donatedAt?: Date | string | null
    coverImage?: string | null
    description: string
    quantity: number
    borrowedBooks?: BorrowedBookCreateNestedManyWithoutBookInput
    donatedBooks?: DonatedBookCreateNestedManyWithoutBookInput
    overdueBooks?: OverdueBookCreateNestedManyWithoutBookInput
    returnHistories?: ReturnHistoryCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    title: string
    author: string
    isbn: string
    category: string
    addedAt?: Date | string
    donatedBy?: string | null
    donatedAt?: Date | string | null
    coverImage?: string | null
    description: string
    quantity: number
    borrowedBooks?: BorrowedBookUncheckedCreateNestedManyWithoutBookInput
    donatedBooks?: DonatedBookUncheckedCreateNestedManyWithoutBookInput
    overdueBooks?: OverdueBookUncheckedCreateNestedManyWithoutBookInput
    returnHistories?: ReturnHistoryUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    donatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    borrowedBooks?: BorrowedBookUpdateManyWithoutBookNestedInput
    donatedBooks?: DonatedBookUpdateManyWithoutBookNestedInput
    overdueBooks?: OverdueBookUpdateManyWithoutBookNestedInput
    returnHistories?: ReturnHistoryUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    donatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    borrowedBooks?: BorrowedBookUncheckedUpdateManyWithoutBookNestedInput
    donatedBooks?: DonatedBookUncheckedUpdateManyWithoutBookNestedInput
    overdueBooks?: OverdueBookUncheckedUpdateManyWithoutBookNestedInput
    returnHistories?: ReturnHistoryUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: number
    title: string
    author: string
    isbn: string
    category: string
    addedAt?: Date | string
    donatedBy?: string | null
    donatedAt?: Date | string | null
    coverImage?: string | null
    description: string
    quantity: number
  }

  export type BookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    donatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    donatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BorrowedBookCreateInput = {
    borrowedAt?: Date | string
    dueDate: Date | string
    returnedAt?: Date | string | null
    isOverdue?: boolean
    book: BookCreateNestedOneWithoutBorrowedBooksInput
    user: UserCreateNestedOneWithoutBorrowedBooksInput
  }

  export type BorrowedBookUncheckedCreateInput = {
    id?: number
    bookId: number
    userId: number
    borrowedAt?: Date | string
    dueDate: Date | string
    returnedAt?: Date | string | null
    isOverdue?: boolean
  }

  export type BorrowedBookUpdateInput = {
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
    book?: BookUpdateOneRequiredWithoutBorrowedBooksNestedInput
    user?: UserUpdateOneRequiredWithoutBorrowedBooksNestedInput
  }

  export type BorrowedBookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BorrowedBookCreateManyInput = {
    id?: number
    bookId: number
    userId: number
    borrowedAt?: Date | string
    dueDate: Date | string
    returnedAt?: Date | string | null
    isOverdue?: boolean
  }

  export type BorrowedBookUpdateManyMutationInput = {
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BorrowedBookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OverdueBookCreateInput = {
    overdueAt?: Date | string
    book: BookCreateNestedOneWithoutOverdueBooksInput
    user: UserCreateNestedOneWithoutOverdueBooksInput
  }

  export type OverdueBookUncheckedCreateInput = {
    id?: number
    bookId: number
    userId: number
    overdueAt?: Date | string
  }

  export type OverdueBookUpdateInput = {
    overdueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutOverdueBooksNestedInput
    user?: UserUpdateOneRequiredWithoutOverdueBooksNestedInput
  }

  export type OverdueBookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    overdueAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OverdueBookCreateManyInput = {
    id?: number
    bookId: number
    userId: number
    overdueAt?: Date | string
  }

  export type OverdueBookUpdateManyMutationInput = {
    overdueAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OverdueBookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    overdueAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnHistoryCreateInput = {
    returnedAt?: Date | string
    book: BookCreateNestedOneWithoutReturnHistoriesInput
    user: UserCreateNestedOneWithoutReturnHistoriesInput
  }

  export type ReturnHistoryUncheckedCreateInput = {
    id?: number
    bookId: number
    userId: number
    returnedAt?: Date | string
  }

  export type ReturnHistoryUpdateInput = {
    returnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutReturnHistoriesNestedInput
    user?: UserUpdateOneRequiredWithoutReturnHistoriesNestedInput
  }

  export type ReturnHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    returnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnHistoryCreateManyInput = {
    id?: number
    bookId: number
    userId: number
    returnedAt?: Date | string
  }

  export type ReturnHistoryUpdateManyMutationInput = {
    returnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    returnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonatedBookCreateInput = {
    donatedBy: string
    donatedAt?: Date | string
    book: BookCreateNestedOneWithoutDonatedBooksInput
  }

  export type DonatedBookUncheckedCreateInput = {
    id?: number
    bookId: number
    donatedBy: string
    donatedAt?: Date | string
  }

  export type DonatedBookUpdateInput = {
    donatedBy?: StringFieldUpdateOperationsInput | string
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutDonatedBooksNestedInput
  }

  export type DonatedBookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    donatedBy?: StringFieldUpdateOperationsInput | string
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonatedBookCreateManyInput = {
    id?: number
    bookId: number
    donatedBy: string
    donatedAt?: Date | string
  }

  export type DonatedBookUpdateManyMutationInput = {
    donatedBy?: StringFieldUpdateOperationsInput | string
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonatedBookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    donatedBy?: StringFieldUpdateOperationsInput | string
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueryCreateInput = {
    userQuery: string
    assistantResponse: string
    createdAt?: Date | string
  }

  export type QueryUncheckedCreateInput = {
    id?: number
    userQuery: string
    assistantResponse: string
    createdAt?: Date | string
  }

  export type QueryUpdateInput = {
    userQuery?: StringFieldUpdateOperationsInput | string
    assistantResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userQuery?: StringFieldUpdateOperationsInput | string
    assistantResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueryCreateManyInput = {
    id?: number
    userQuery: string
    assistantResponse: string
    createdAt?: Date | string
  }

  export type QueryUpdateManyMutationInput = {
    userQuery?: StringFieldUpdateOperationsInput | string
    assistantResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userQuery?: StringFieldUpdateOperationsInput | string
    assistantResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BorrowedBookListRelationFilter = {
    every?: BorrowedBookWhereInput
    some?: BorrowedBookWhereInput
    none?: BorrowedBookWhereInput
  }

  export type OverdueBookListRelationFilter = {
    every?: OverdueBookWhereInput
    some?: OverdueBookWhereInput
    none?: OverdueBookWhereInput
  }

  export type ReturnHistoryListRelationFilter = {
    every?: ReturnHistoryWhereInput
    some?: ReturnHistoryWhereInput
    none?: ReturnHistoryWhereInput
  }

  export type BorrowedBookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OverdueBookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReturnHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DonatedBookListRelationFilter = {
    every?: DonatedBookWhereInput
    some?: DonatedBookWhereInput
    none?: DonatedBookWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DonatedBookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    isbn?: SortOrder
    category?: SortOrder
    addedAt?: SortOrder
    donatedBy?: SortOrder
    donatedAt?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    isbn?: SortOrder
    category?: SortOrder
    addedAt?: SortOrder
    donatedBy?: SortOrder
    donatedAt?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    isbn?: SortOrder
    category?: SortOrder
    addedAt?: SortOrder
    donatedBy?: SortOrder
    donatedAt?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BorrowedBookCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    borrowedAt?: SortOrder
    dueDate?: SortOrder
    returnedAt?: SortOrder
    isOverdue?: SortOrder
  }

  export type BorrowedBookAvgOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
  }

  export type BorrowedBookMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    borrowedAt?: SortOrder
    dueDate?: SortOrder
    returnedAt?: SortOrder
    isOverdue?: SortOrder
  }

  export type BorrowedBookMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    borrowedAt?: SortOrder
    dueDate?: SortOrder
    returnedAt?: SortOrder
    isOverdue?: SortOrder
  }

  export type BorrowedBookSumOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OverdueBookCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    overdueAt?: SortOrder
  }

  export type OverdueBookAvgOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
  }

  export type OverdueBookMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    overdueAt?: SortOrder
  }

  export type OverdueBookMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    overdueAt?: SortOrder
  }

  export type OverdueBookSumOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
  }

  export type ReturnHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    returnedAt?: SortOrder
  }

  export type ReturnHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
  }

  export type ReturnHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    returnedAt?: SortOrder
  }

  export type ReturnHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    returnedAt?: SortOrder
  }

  export type ReturnHistorySumOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
  }

  export type DonatedBookCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    donatedBy?: SortOrder
    donatedAt?: SortOrder
  }

  export type DonatedBookAvgOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
  }

  export type DonatedBookMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    donatedBy?: SortOrder
    donatedAt?: SortOrder
  }

  export type DonatedBookMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    donatedBy?: SortOrder
    donatedAt?: SortOrder
  }

  export type DonatedBookSumOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
  }

  export type QueryCountOrderByAggregateInput = {
    id?: SortOrder
    userQuery?: SortOrder
    assistantResponse?: SortOrder
    createdAt?: SortOrder
  }

  export type QueryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QueryMaxOrderByAggregateInput = {
    id?: SortOrder
    userQuery?: SortOrder
    assistantResponse?: SortOrder
    createdAt?: SortOrder
  }

  export type QueryMinOrderByAggregateInput = {
    id?: SortOrder
    userQuery?: SortOrder
    assistantResponse?: SortOrder
    createdAt?: SortOrder
  }

  export type QuerySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BorrowedBookCreateNestedManyWithoutUserInput = {
    create?: XOR<BorrowedBookCreateWithoutUserInput, BorrowedBookUncheckedCreateWithoutUserInput> | BorrowedBookCreateWithoutUserInput[] | BorrowedBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BorrowedBookCreateOrConnectWithoutUserInput | BorrowedBookCreateOrConnectWithoutUserInput[]
    createMany?: BorrowedBookCreateManyUserInputEnvelope
    connect?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
  }

  export type OverdueBookCreateNestedManyWithoutUserInput = {
    create?: XOR<OverdueBookCreateWithoutUserInput, OverdueBookUncheckedCreateWithoutUserInput> | OverdueBookCreateWithoutUserInput[] | OverdueBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OverdueBookCreateOrConnectWithoutUserInput | OverdueBookCreateOrConnectWithoutUserInput[]
    createMany?: OverdueBookCreateManyUserInputEnvelope
    connect?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
  }

  export type ReturnHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<ReturnHistoryCreateWithoutUserInput, ReturnHistoryUncheckedCreateWithoutUserInput> | ReturnHistoryCreateWithoutUserInput[] | ReturnHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReturnHistoryCreateOrConnectWithoutUserInput | ReturnHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ReturnHistoryCreateManyUserInputEnvelope
    connect?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
  }

  export type BorrowedBookUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BorrowedBookCreateWithoutUserInput, BorrowedBookUncheckedCreateWithoutUserInput> | BorrowedBookCreateWithoutUserInput[] | BorrowedBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BorrowedBookCreateOrConnectWithoutUserInput | BorrowedBookCreateOrConnectWithoutUserInput[]
    createMany?: BorrowedBookCreateManyUserInputEnvelope
    connect?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
  }

  export type OverdueBookUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OverdueBookCreateWithoutUserInput, OverdueBookUncheckedCreateWithoutUserInput> | OverdueBookCreateWithoutUserInput[] | OverdueBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OverdueBookCreateOrConnectWithoutUserInput | OverdueBookCreateOrConnectWithoutUserInput[]
    createMany?: OverdueBookCreateManyUserInputEnvelope
    connect?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
  }

  export type ReturnHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReturnHistoryCreateWithoutUserInput, ReturnHistoryUncheckedCreateWithoutUserInput> | ReturnHistoryCreateWithoutUserInput[] | ReturnHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReturnHistoryCreateOrConnectWithoutUserInput | ReturnHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ReturnHistoryCreateManyUserInputEnvelope
    connect?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BorrowedBookUpdateManyWithoutUserNestedInput = {
    create?: XOR<BorrowedBookCreateWithoutUserInput, BorrowedBookUncheckedCreateWithoutUserInput> | BorrowedBookCreateWithoutUserInput[] | BorrowedBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BorrowedBookCreateOrConnectWithoutUserInput | BorrowedBookCreateOrConnectWithoutUserInput[]
    upsert?: BorrowedBookUpsertWithWhereUniqueWithoutUserInput | BorrowedBookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BorrowedBookCreateManyUserInputEnvelope
    set?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
    disconnect?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
    delete?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
    connect?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
    update?: BorrowedBookUpdateWithWhereUniqueWithoutUserInput | BorrowedBookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BorrowedBookUpdateManyWithWhereWithoutUserInput | BorrowedBookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BorrowedBookScalarWhereInput | BorrowedBookScalarWhereInput[]
  }

  export type OverdueBookUpdateManyWithoutUserNestedInput = {
    create?: XOR<OverdueBookCreateWithoutUserInput, OverdueBookUncheckedCreateWithoutUserInput> | OverdueBookCreateWithoutUserInput[] | OverdueBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OverdueBookCreateOrConnectWithoutUserInput | OverdueBookCreateOrConnectWithoutUserInput[]
    upsert?: OverdueBookUpsertWithWhereUniqueWithoutUserInput | OverdueBookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OverdueBookCreateManyUserInputEnvelope
    set?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
    disconnect?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
    delete?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
    connect?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
    update?: OverdueBookUpdateWithWhereUniqueWithoutUserInput | OverdueBookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OverdueBookUpdateManyWithWhereWithoutUserInput | OverdueBookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OverdueBookScalarWhereInput | OverdueBookScalarWhereInput[]
  }

  export type ReturnHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReturnHistoryCreateWithoutUserInput, ReturnHistoryUncheckedCreateWithoutUserInput> | ReturnHistoryCreateWithoutUserInput[] | ReturnHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReturnHistoryCreateOrConnectWithoutUserInput | ReturnHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ReturnHistoryUpsertWithWhereUniqueWithoutUserInput | ReturnHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReturnHistoryCreateManyUserInputEnvelope
    set?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
    disconnect?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
    delete?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
    connect?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
    update?: ReturnHistoryUpdateWithWhereUniqueWithoutUserInput | ReturnHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReturnHistoryUpdateManyWithWhereWithoutUserInput | ReturnHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReturnHistoryScalarWhereInput | ReturnHistoryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BorrowedBookUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BorrowedBookCreateWithoutUserInput, BorrowedBookUncheckedCreateWithoutUserInput> | BorrowedBookCreateWithoutUserInput[] | BorrowedBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BorrowedBookCreateOrConnectWithoutUserInput | BorrowedBookCreateOrConnectWithoutUserInput[]
    upsert?: BorrowedBookUpsertWithWhereUniqueWithoutUserInput | BorrowedBookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BorrowedBookCreateManyUserInputEnvelope
    set?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
    disconnect?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
    delete?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
    connect?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
    update?: BorrowedBookUpdateWithWhereUniqueWithoutUserInput | BorrowedBookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BorrowedBookUpdateManyWithWhereWithoutUserInput | BorrowedBookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BorrowedBookScalarWhereInput | BorrowedBookScalarWhereInput[]
  }

  export type OverdueBookUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OverdueBookCreateWithoutUserInput, OverdueBookUncheckedCreateWithoutUserInput> | OverdueBookCreateWithoutUserInput[] | OverdueBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OverdueBookCreateOrConnectWithoutUserInput | OverdueBookCreateOrConnectWithoutUserInput[]
    upsert?: OverdueBookUpsertWithWhereUniqueWithoutUserInput | OverdueBookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OverdueBookCreateManyUserInputEnvelope
    set?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
    disconnect?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
    delete?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
    connect?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
    update?: OverdueBookUpdateWithWhereUniqueWithoutUserInput | OverdueBookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OverdueBookUpdateManyWithWhereWithoutUserInput | OverdueBookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OverdueBookScalarWhereInput | OverdueBookScalarWhereInput[]
  }

  export type ReturnHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReturnHistoryCreateWithoutUserInput, ReturnHistoryUncheckedCreateWithoutUserInput> | ReturnHistoryCreateWithoutUserInput[] | ReturnHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReturnHistoryCreateOrConnectWithoutUserInput | ReturnHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ReturnHistoryUpsertWithWhereUniqueWithoutUserInput | ReturnHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReturnHistoryCreateManyUserInputEnvelope
    set?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
    disconnect?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
    delete?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
    connect?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
    update?: ReturnHistoryUpdateWithWhereUniqueWithoutUserInput | ReturnHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReturnHistoryUpdateManyWithWhereWithoutUserInput | ReturnHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReturnHistoryScalarWhereInput | ReturnHistoryScalarWhereInput[]
  }

  export type BorrowedBookCreateNestedManyWithoutBookInput = {
    create?: XOR<BorrowedBookCreateWithoutBookInput, BorrowedBookUncheckedCreateWithoutBookInput> | BorrowedBookCreateWithoutBookInput[] | BorrowedBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BorrowedBookCreateOrConnectWithoutBookInput | BorrowedBookCreateOrConnectWithoutBookInput[]
    createMany?: BorrowedBookCreateManyBookInputEnvelope
    connect?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
  }

  export type DonatedBookCreateNestedManyWithoutBookInput = {
    create?: XOR<DonatedBookCreateWithoutBookInput, DonatedBookUncheckedCreateWithoutBookInput> | DonatedBookCreateWithoutBookInput[] | DonatedBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: DonatedBookCreateOrConnectWithoutBookInput | DonatedBookCreateOrConnectWithoutBookInput[]
    createMany?: DonatedBookCreateManyBookInputEnvelope
    connect?: DonatedBookWhereUniqueInput | DonatedBookWhereUniqueInput[]
  }

  export type OverdueBookCreateNestedManyWithoutBookInput = {
    create?: XOR<OverdueBookCreateWithoutBookInput, OverdueBookUncheckedCreateWithoutBookInput> | OverdueBookCreateWithoutBookInput[] | OverdueBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: OverdueBookCreateOrConnectWithoutBookInput | OverdueBookCreateOrConnectWithoutBookInput[]
    createMany?: OverdueBookCreateManyBookInputEnvelope
    connect?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
  }

  export type ReturnHistoryCreateNestedManyWithoutBookInput = {
    create?: XOR<ReturnHistoryCreateWithoutBookInput, ReturnHistoryUncheckedCreateWithoutBookInput> | ReturnHistoryCreateWithoutBookInput[] | ReturnHistoryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ReturnHistoryCreateOrConnectWithoutBookInput | ReturnHistoryCreateOrConnectWithoutBookInput[]
    createMany?: ReturnHistoryCreateManyBookInputEnvelope
    connect?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
  }

  export type BorrowedBookUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BorrowedBookCreateWithoutBookInput, BorrowedBookUncheckedCreateWithoutBookInput> | BorrowedBookCreateWithoutBookInput[] | BorrowedBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BorrowedBookCreateOrConnectWithoutBookInput | BorrowedBookCreateOrConnectWithoutBookInput[]
    createMany?: BorrowedBookCreateManyBookInputEnvelope
    connect?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
  }

  export type DonatedBookUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<DonatedBookCreateWithoutBookInput, DonatedBookUncheckedCreateWithoutBookInput> | DonatedBookCreateWithoutBookInput[] | DonatedBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: DonatedBookCreateOrConnectWithoutBookInput | DonatedBookCreateOrConnectWithoutBookInput[]
    createMany?: DonatedBookCreateManyBookInputEnvelope
    connect?: DonatedBookWhereUniqueInput | DonatedBookWhereUniqueInput[]
  }

  export type OverdueBookUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<OverdueBookCreateWithoutBookInput, OverdueBookUncheckedCreateWithoutBookInput> | OverdueBookCreateWithoutBookInput[] | OverdueBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: OverdueBookCreateOrConnectWithoutBookInput | OverdueBookCreateOrConnectWithoutBookInput[]
    createMany?: OverdueBookCreateManyBookInputEnvelope
    connect?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
  }

  export type ReturnHistoryUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<ReturnHistoryCreateWithoutBookInput, ReturnHistoryUncheckedCreateWithoutBookInput> | ReturnHistoryCreateWithoutBookInput[] | ReturnHistoryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ReturnHistoryCreateOrConnectWithoutBookInput | ReturnHistoryCreateOrConnectWithoutBookInput[]
    createMany?: ReturnHistoryCreateManyBookInputEnvelope
    connect?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BorrowedBookUpdateManyWithoutBookNestedInput = {
    create?: XOR<BorrowedBookCreateWithoutBookInput, BorrowedBookUncheckedCreateWithoutBookInput> | BorrowedBookCreateWithoutBookInput[] | BorrowedBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BorrowedBookCreateOrConnectWithoutBookInput | BorrowedBookCreateOrConnectWithoutBookInput[]
    upsert?: BorrowedBookUpsertWithWhereUniqueWithoutBookInput | BorrowedBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BorrowedBookCreateManyBookInputEnvelope
    set?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
    disconnect?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
    delete?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
    connect?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
    update?: BorrowedBookUpdateWithWhereUniqueWithoutBookInput | BorrowedBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BorrowedBookUpdateManyWithWhereWithoutBookInput | BorrowedBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BorrowedBookScalarWhereInput | BorrowedBookScalarWhereInput[]
  }

  export type DonatedBookUpdateManyWithoutBookNestedInput = {
    create?: XOR<DonatedBookCreateWithoutBookInput, DonatedBookUncheckedCreateWithoutBookInput> | DonatedBookCreateWithoutBookInput[] | DonatedBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: DonatedBookCreateOrConnectWithoutBookInput | DonatedBookCreateOrConnectWithoutBookInput[]
    upsert?: DonatedBookUpsertWithWhereUniqueWithoutBookInput | DonatedBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: DonatedBookCreateManyBookInputEnvelope
    set?: DonatedBookWhereUniqueInput | DonatedBookWhereUniqueInput[]
    disconnect?: DonatedBookWhereUniqueInput | DonatedBookWhereUniqueInput[]
    delete?: DonatedBookWhereUniqueInput | DonatedBookWhereUniqueInput[]
    connect?: DonatedBookWhereUniqueInput | DonatedBookWhereUniqueInput[]
    update?: DonatedBookUpdateWithWhereUniqueWithoutBookInput | DonatedBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: DonatedBookUpdateManyWithWhereWithoutBookInput | DonatedBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: DonatedBookScalarWhereInput | DonatedBookScalarWhereInput[]
  }

  export type OverdueBookUpdateManyWithoutBookNestedInput = {
    create?: XOR<OverdueBookCreateWithoutBookInput, OverdueBookUncheckedCreateWithoutBookInput> | OverdueBookCreateWithoutBookInput[] | OverdueBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: OverdueBookCreateOrConnectWithoutBookInput | OverdueBookCreateOrConnectWithoutBookInput[]
    upsert?: OverdueBookUpsertWithWhereUniqueWithoutBookInput | OverdueBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: OverdueBookCreateManyBookInputEnvelope
    set?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
    disconnect?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
    delete?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
    connect?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
    update?: OverdueBookUpdateWithWhereUniqueWithoutBookInput | OverdueBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: OverdueBookUpdateManyWithWhereWithoutBookInput | OverdueBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: OverdueBookScalarWhereInput | OverdueBookScalarWhereInput[]
  }

  export type ReturnHistoryUpdateManyWithoutBookNestedInput = {
    create?: XOR<ReturnHistoryCreateWithoutBookInput, ReturnHistoryUncheckedCreateWithoutBookInput> | ReturnHistoryCreateWithoutBookInput[] | ReturnHistoryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ReturnHistoryCreateOrConnectWithoutBookInput | ReturnHistoryCreateOrConnectWithoutBookInput[]
    upsert?: ReturnHistoryUpsertWithWhereUniqueWithoutBookInput | ReturnHistoryUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ReturnHistoryCreateManyBookInputEnvelope
    set?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
    disconnect?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
    delete?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
    connect?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
    update?: ReturnHistoryUpdateWithWhereUniqueWithoutBookInput | ReturnHistoryUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ReturnHistoryUpdateManyWithWhereWithoutBookInput | ReturnHistoryUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ReturnHistoryScalarWhereInput | ReturnHistoryScalarWhereInput[]
  }

  export type BorrowedBookUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BorrowedBookCreateWithoutBookInput, BorrowedBookUncheckedCreateWithoutBookInput> | BorrowedBookCreateWithoutBookInput[] | BorrowedBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BorrowedBookCreateOrConnectWithoutBookInput | BorrowedBookCreateOrConnectWithoutBookInput[]
    upsert?: BorrowedBookUpsertWithWhereUniqueWithoutBookInput | BorrowedBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BorrowedBookCreateManyBookInputEnvelope
    set?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
    disconnect?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
    delete?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
    connect?: BorrowedBookWhereUniqueInput | BorrowedBookWhereUniqueInput[]
    update?: BorrowedBookUpdateWithWhereUniqueWithoutBookInput | BorrowedBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BorrowedBookUpdateManyWithWhereWithoutBookInput | BorrowedBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BorrowedBookScalarWhereInput | BorrowedBookScalarWhereInput[]
  }

  export type DonatedBookUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<DonatedBookCreateWithoutBookInput, DonatedBookUncheckedCreateWithoutBookInput> | DonatedBookCreateWithoutBookInput[] | DonatedBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: DonatedBookCreateOrConnectWithoutBookInput | DonatedBookCreateOrConnectWithoutBookInput[]
    upsert?: DonatedBookUpsertWithWhereUniqueWithoutBookInput | DonatedBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: DonatedBookCreateManyBookInputEnvelope
    set?: DonatedBookWhereUniqueInput | DonatedBookWhereUniqueInput[]
    disconnect?: DonatedBookWhereUniqueInput | DonatedBookWhereUniqueInput[]
    delete?: DonatedBookWhereUniqueInput | DonatedBookWhereUniqueInput[]
    connect?: DonatedBookWhereUniqueInput | DonatedBookWhereUniqueInput[]
    update?: DonatedBookUpdateWithWhereUniqueWithoutBookInput | DonatedBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: DonatedBookUpdateManyWithWhereWithoutBookInput | DonatedBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: DonatedBookScalarWhereInput | DonatedBookScalarWhereInput[]
  }

  export type OverdueBookUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<OverdueBookCreateWithoutBookInput, OverdueBookUncheckedCreateWithoutBookInput> | OverdueBookCreateWithoutBookInput[] | OverdueBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: OverdueBookCreateOrConnectWithoutBookInput | OverdueBookCreateOrConnectWithoutBookInput[]
    upsert?: OverdueBookUpsertWithWhereUniqueWithoutBookInput | OverdueBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: OverdueBookCreateManyBookInputEnvelope
    set?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
    disconnect?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
    delete?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
    connect?: OverdueBookWhereUniqueInput | OverdueBookWhereUniqueInput[]
    update?: OverdueBookUpdateWithWhereUniqueWithoutBookInput | OverdueBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: OverdueBookUpdateManyWithWhereWithoutBookInput | OverdueBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: OverdueBookScalarWhereInput | OverdueBookScalarWhereInput[]
  }

  export type ReturnHistoryUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<ReturnHistoryCreateWithoutBookInput, ReturnHistoryUncheckedCreateWithoutBookInput> | ReturnHistoryCreateWithoutBookInput[] | ReturnHistoryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ReturnHistoryCreateOrConnectWithoutBookInput | ReturnHistoryCreateOrConnectWithoutBookInput[]
    upsert?: ReturnHistoryUpsertWithWhereUniqueWithoutBookInput | ReturnHistoryUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ReturnHistoryCreateManyBookInputEnvelope
    set?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
    disconnect?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
    delete?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
    connect?: ReturnHistoryWhereUniqueInput | ReturnHistoryWhereUniqueInput[]
    update?: ReturnHistoryUpdateWithWhereUniqueWithoutBookInput | ReturnHistoryUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ReturnHistoryUpdateManyWithWhereWithoutBookInput | ReturnHistoryUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ReturnHistoryScalarWhereInput | ReturnHistoryScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutBorrowedBooksInput = {
    create?: XOR<BookCreateWithoutBorrowedBooksInput, BookUncheckedCreateWithoutBorrowedBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutBorrowedBooksInput
    connect?: BookWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBorrowedBooksInput = {
    create?: XOR<UserCreateWithoutBorrowedBooksInput, UserUncheckedCreateWithoutBorrowedBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBorrowedBooksInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BookUpdateOneRequiredWithoutBorrowedBooksNestedInput = {
    create?: XOR<BookCreateWithoutBorrowedBooksInput, BookUncheckedCreateWithoutBorrowedBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutBorrowedBooksInput
    upsert?: BookUpsertWithoutBorrowedBooksInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutBorrowedBooksInput, BookUpdateWithoutBorrowedBooksInput>, BookUncheckedUpdateWithoutBorrowedBooksInput>
  }

  export type UserUpdateOneRequiredWithoutBorrowedBooksNestedInput = {
    create?: XOR<UserCreateWithoutBorrowedBooksInput, UserUncheckedCreateWithoutBorrowedBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBorrowedBooksInput
    upsert?: UserUpsertWithoutBorrowedBooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBorrowedBooksInput, UserUpdateWithoutBorrowedBooksInput>, UserUncheckedUpdateWithoutBorrowedBooksInput>
  }

  export type BookCreateNestedOneWithoutOverdueBooksInput = {
    create?: XOR<BookCreateWithoutOverdueBooksInput, BookUncheckedCreateWithoutOverdueBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutOverdueBooksInput
    connect?: BookWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOverdueBooksInput = {
    create?: XOR<UserCreateWithoutOverdueBooksInput, UserUncheckedCreateWithoutOverdueBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutOverdueBooksInput
    connect?: UserWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutOverdueBooksNestedInput = {
    create?: XOR<BookCreateWithoutOverdueBooksInput, BookUncheckedCreateWithoutOverdueBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutOverdueBooksInput
    upsert?: BookUpsertWithoutOverdueBooksInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutOverdueBooksInput, BookUpdateWithoutOverdueBooksInput>, BookUncheckedUpdateWithoutOverdueBooksInput>
  }

  export type UserUpdateOneRequiredWithoutOverdueBooksNestedInput = {
    create?: XOR<UserCreateWithoutOverdueBooksInput, UserUncheckedCreateWithoutOverdueBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutOverdueBooksInput
    upsert?: UserUpsertWithoutOverdueBooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOverdueBooksInput, UserUpdateWithoutOverdueBooksInput>, UserUncheckedUpdateWithoutOverdueBooksInput>
  }

  export type BookCreateNestedOneWithoutReturnHistoriesInput = {
    create?: XOR<BookCreateWithoutReturnHistoriesInput, BookUncheckedCreateWithoutReturnHistoriesInput>
    connectOrCreate?: BookCreateOrConnectWithoutReturnHistoriesInput
    connect?: BookWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReturnHistoriesInput = {
    create?: XOR<UserCreateWithoutReturnHistoriesInput, UserUncheckedCreateWithoutReturnHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReturnHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutReturnHistoriesNestedInput = {
    create?: XOR<BookCreateWithoutReturnHistoriesInput, BookUncheckedCreateWithoutReturnHistoriesInput>
    connectOrCreate?: BookCreateOrConnectWithoutReturnHistoriesInput
    upsert?: BookUpsertWithoutReturnHistoriesInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutReturnHistoriesInput, BookUpdateWithoutReturnHistoriesInput>, BookUncheckedUpdateWithoutReturnHistoriesInput>
  }

  export type UserUpdateOneRequiredWithoutReturnHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutReturnHistoriesInput, UserUncheckedCreateWithoutReturnHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReturnHistoriesInput
    upsert?: UserUpsertWithoutReturnHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReturnHistoriesInput, UserUpdateWithoutReturnHistoriesInput>, UserUncheckedUpdateWithoutReturnHistoriesInput>
  }

  export type BookCreateNestedOneWithoutDonatedBooksInput = {
    create?: XOR<BookCreateWithoutDonatedBooksInput, BookUncheckedCreateWithoutDonatedBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutDonatedBooksInput
    connect?: BookWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutDonatedBooksNestedInput = {
    create?: XOR<BookCreateWithoutDonatedBooksInput, BookUncheckedCreateWithoutDonatedBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutDonatedBooksInput
    upsert?: BookUpsertWithoutDonatedBooksInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutDonatedBooksInput, BookUpdateWithoutDonatedBooksInput>, BookUncheckedUpdateWithoutDonatedBooksInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BorrowedBookCreateWithoutUserInput = {
    borrowedAt?: Date | string
    dueDate: Date | string
    returnedAt?: Date | string | null
    isOverdue?: boolean
    book: BookCreateNestedOneWithoutBorrowedBooksInput
  }

  export type BorrowedBookUncheckedCreateWithoutUserInput = {
    id?: number
    bookId: number
    borrowedAt?: Date | string
    dueDate: Date | string
    returnedAt?: Date | string | null
    isOverdue?: boolean
  }

  export type BorrowedBookCreateOrConnectWithoutUserInput = {
    where: BorrowedBookWhereUniqueInput
    create: XOR<BorrowedBookCreateWithoutUserInput, BorrowedBookUncheckedCreateWithoutUserInput>
  }

  export type BorrowedBookCreateManyUserInputEnvelope = {
    data: BorrowedBookCreateManyUserInput | BorrowedBookCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OverdueBookCreateWithoutUserInput = {
    overdueAt?: Date | string
    book: BookCreateNestedOneWithoutOverdueBooksInput
  }

  export type OverdueBookUncheckedCreateWithoutUserInput = {
    id?: number
    bookId: number
    overdueAt?: Date | string
  }

  export type OverdueBookCreateOrConnectWithoutUserInput = {
    where: OverdueBookWhereUniqueInput
    create: XOR<OverdueBookCreateWithoutUserInput, OverdueBookUncheckedCreateWithoutUserInput>
  }

  export type OverdueBookCreateManyUserInputEnvelope = {
    data: OverdueBookCreateManyUserInput | OverdueBookCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReturnHistoryCreateWithoutUserInput = {
    returnedAt?: Date | string
    book: BookCreateNestedOneWithoutReturnHistoriesInput
  }

  export type ReturnHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    bookId: number
    returnedAt?: Date | string
  }

  export type ReturnHistoryCreateOrConnectWithoutUserInput = {
    where: ReturnHistoryWhereUniqueInput
    create: XOR<ReturnHistoryCreateWithoutUserInput, ReturnHistoryUncheckedCreateWithoutUserInput>
  }

  export type ReturnHistoryCreateManyUserInputEnvelope = {
    data: ReturnHistoryCreateManyUserInput | ReturnHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BorrowedBookUpsertWithWhereUniqueWithoutUserInput = {
    where: BorrowedBookWhereUniqueInput
    update: XOR<BorrowedBookUpdateWithoutUserInput, BorrowedBookUncheckedUpdateWithoutUserInput>
    create: XOR<BorrowedBookCreateWithoutUserInput, BorrowedBookUncheckedCreateWithoutUserInput>
  }

  export type BorrowedBookUpdateWithWhereUniqueWithoutUserInput = {
    where: BorrowedBookWhereUniqueInput
    data: XOR<BorrowedBookUpdateWithoutUserInput, BorrowedBookUncheckedUpdateWithoutUserInput>
  }

  export type BorrowedBookUpdateManyWithWhereWithoutUserInput = {
    where: BorrowedBookScalarWhereInput
    data: XOR<BorrowedBookUpdateManyMutationInput, BorrowedBookUncheckedUpdateManyWithoutUserInput>
  }

  export type BorrowedBookScalarWhereInput = {
    AND?: BorrowedBookScalarWhereInput | BorrowedBookScalarWhereInput[]
    OR?: BorrowedBookScalarWhereInput[]
    NOT?: BorrowedBookScalarWhereInput | BorrowedBookScalarWhereInput[]
    id?: IntFilter<"BorrowedBook"> | number
    bookId?: IntFilter<"BorrowedBook"> | number
    userId?: IntFilter<"BorrowedBook"> | number
    borrowedAt?: DateTimeFilter<"BorrowedBook"> | Date | string
    dueDate?: DateTimeFilter<"BorrowedBook"> | Date | string
    returnedAt?: DateTimeNullableFilter<"BorrowedBook"> | Date | string | null
    isOverdue?: BoolFilter<"BorrowedBook"> | boolean
  }

  export type OverdueBookUpsertWithWhereUniqueWithoutUserInput = {
    where: OverdueBookWhereUniqueInput
    update: XOR<OverdueBookUpdateWithoutUserInput, OverdueBookUncheckedUpdateWithoutUserInput>
    create: XOR<OverdueBookCreateWithoutUserInput, OverdueBookUncheckedCreateWithoutUserInput>
  }

  export type OverdueBookUpdateWithWhereUniqueWithoutUserInput = {
    where: OverdueBookWhereUniqueInput
    data: XOR<OverdueBookUpdateWithoutUserInput, OverdueBookUncheckedUpdateWithoutUserInput>
  }

  export type OverdueBookUpdateManyWithWhereWithoutUserInput = {
    where: OverdueBookScalarWhereInput
    data: XOR<OverdueBookUpdateManyMutationInput, OverdueBookUncheckedUpdateManyWithoutUserInput>
  }

  export type OverdueBookScalarWhereInput = {
    AND?: OverdueBookScalarWhereInput | OverdueBookScalarWhereInput[]
    OR?: OverdueBookScalarWhereInput[]
    NOT?: OverdueBookScalarWhereInput | OverdueBookScalarWhereInput[]
    id?: IntFilter<"OverdueBook"> | number
    bookId?: IntFilter<"OverdueBook"> | number
    userId?: IntFilter<"OverdueBook"> | number
    overdueAt?: DateTimeFilter<"OverdueBook"> | Date | string
  }

  export type ReturnHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ReturnHistoryWhereUniqueInput
    update: XOR<ReturnHistoryUpdateWithoutUserInput, ReturnHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ReturnHistoryCreateWithoutUserInput, ReturnHistoryUncheckedCreateWithoutUserInput>
  }

  export type ReturnHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ReturnHistoryWhereUniqueInput
    data: XOR<ReturnHistoryUpdateWithoutUserInput, ReturnHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ReturnHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ReturnHistoryScalarWhereInput
    data: XOR<ReturnHistoryUpdateManyMutationInput, ReturnHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ReturnHistoryScalarWhereInput = {
    AND?: ReturnHistoryScalarWhereInput | ReturnHistoryScalarWhereInput[]
    OR?: ReturnHistoryScalarWhereInput[]
    NOT?: ReturnHistoryScalarWhereInput | ReturnHistoryScalarWhereInput[]
    id?: IntFilter<"ReturnHistory"> | number
    bookId?: IntFilter<"ReturnHistory"> | number
    userId?: IntFilter<"ReturnHistory"> | number
    returnedAt?: DateTimeFilter<"ReturnHistory"> | Date | string
  }

  export type BorrowedBookCreateWithoutBookInput = {
    borrowedAt?: Date | string
    dueDate: Date | string
    returnedAt?: Date | string | null
    isOverdue?: boolean
    user: UserCreateNestedOneWithoutBorrowedBooksInput
  }

  export type BorrowedBookUncheckedCreateWithoutBookInput = {
    id?: number
    userId: number
    borrowedAt?: Date | string
    dueDate: Date | string
    returnedAt?: Date | string | null
    isOverdue?: boolean
  }

  export type BorrowedBookCreateOrConnectWithoutBookInput = {
    where: BorrowedBookWhereUniqueInput
    create: XOR<BorrowedBookCreateWithoutBookInput, BorrowedBookUncheckedCreateWithoutBookInput>
  }

  export type BorrowedBookCreateManyBookInputEnvelope = {
    data: BorrowedBookCreateManyBookInput | BorrowedBookCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type DonatedBookCreateWithoutBookInput = {
    donatedBy: string
    donatedAt?: Date | string
  }

  export type DonatedBookUncheckedCreateWithoutBookInput = {
    id?: number
    donatedBy: string
    donatedAt?: Date | string
  }

  export type DonatedBookCreateOrConnectWithoutBookInput = {
    where: DonatedBookWhereUniqueInput
    create: XOR<DonatedBookCreateWithoutBookInput, DonatedBookUncheckedCreateWithoutBookInput>
  }

  export type DonatedBookCreateManyBookInputEnvelope = {
    data: DonatedBookCreateManyBookInput | DonatedBookCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type OverdueBookCreateWithoutBookInput = {
    overdueAt?: Date | string
    user: UserCreateNestedOneWithoutOverdueBooksInput
  }

  export type OverdueBookUncheckedCreateWithoutBookInput = {
    id?: number
    userId: number
    overdueAt?: Date | string
  }

  export type OverdueBookCreateOrConnectWithoutBookInput = {
    where: OverdueBookWhereUniqueInput
    create: XOR<OverdueBookCreateWithoutBookInput, OverdueBookUncheckedCreateWithoutBookInput>
  }

  export type OverdueBookCreateManyBookInputEnvelope = {
    data: OverdueBookCreateManyBookInput | OverdueBookCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type ReturnHistoryCreateWithoutBookInput = {
    returnedAt?: Date | string
    user: UserCreateNestedOneWithoutReturnHistoriesInput
  }

  export type ReturnHistoryUncheckedCreateWithoutBookInput = {
    id?: number
    userId: number
    returnedAt?: Date | string
  }

  export type ReturnHistoryCreateOrConnectWithoutBookInput = {
    where: ReturnHistoryWhereUniqueInput
    create: XOR<ReturnHistoryCreateWithoutBookInput, ReturnHistoryUncheckedCreateWithoutBookInput>
  }

  export type ReturnHistoryCreateManyBookInputEnvelope = {
    data: ReturnHistoryCreateManyBookInput | ReturnHistoryCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BorrowedBookUpsertWithWhereUniqueWithoutBookInput = {
    where: BorrowedBookWhereUniqueInput
    update: XOR<BorrowedBookUpdateWithoutBookInput, BorrowedBookUncheckedUpdateWithoutBookInput>
    create: XOR<BorrowedBookCreateWithoutBookInput, BorrowedBookUncheckedCreateWithoutBookInput>
  }

  export type BorrowedBookUpdateWithWhereUniqueWithoutBookInput = {
    where: BorrowedBookWhereUniqueInput
    data: XOR<BorrowedBookUpdateWithoutBookInput, BorrowedBookUncheckedUpdateWithoutBookInput>
  }

  export type BorrowedBookUpdateManyWithWhereWithoutBookInput = {
    where: BorrowedBookScalarWhereInput
    data: XOR<BorrowedBookUpdateManyMutationInput, BorrowedBookUncheckedUpdateManyWithoutBookInput>
  }

  export type DonatedBookUpsertWithWhereUniqueWithoutBookInput = {
    where: DonatedBookWhereUniqueInput
    update: XOR<DonatedBookUpdateWithoutBookInput, DonatedBookUncheckedUpdateWithoutBookInput>
    create: XOR<DonatedBookCreateWithoutBookInput, DonatedBookUncheckedCreateWithoutBookInput>
  }

  export type DonatedBookUpdateWithWhereUniqueWithoutBookInput = {
    where: DonatedBookWhereUniqueInput
    data: XOR<DonatedBookUpdateWithoutBookInput, DonatedBookUncheckedUpdateWithoutBookInput>
  }

  export type DonatedBookUpdateManyWithWhereWithoutBookInput = {
    where: DonatedBookScalarWhereInput
    data: XOR<DonatedBookUpdateManyMutationInput, DonatedBookUncheckedUpdateManyWithoutBookInput>
  }

  export type DonatedBookScalarWhereInput = {
    AND?: DonatedBookScalarWhereInput | DonatedBookScalarWhereInput[]
    OR?: DonatedBookScalarWhereInput[]
    NOT?: DonatedBookScalarWhereInput | DonatedBookScalarWhereInput[]
    id?: IntFilter<"DonatedBook"> | number
    bookId?: IntFilter<"DonatedBook"> | number
    donatedBy?: StringFilter<"DonatedBook"> | string
    donatedAt?: DateTimeFilter<"DonatedBook"> | Date | string
  }

  export type OverdueBookUpsertWithWhereUniqueWithoutBookInput = {
    where: OverdueBookWhereUniqueInput
    update: XOR<OverdueBookUpdateWithoutBookInput, OverdueBookUncheckedUpdateWithoutBookInput>
    create: XOR<OverdueBookCreateWithoutBookInput, OverdueBookUncheckedCreateWithoutBookInput>
  }

  export type OverdueBookUpdateWithWhereUniqueWithoutBookInput = {
    where: OverdueBookWhereUniqueInput
    data: XOR<OverdueBookUpdateWithoutBookInput, OverdueBookUncheckedUpdateWithoutBookInput>
  }

  export type OverdueBookUpdateManyWithWhereWithoutBookInput = {
    where: OverdueBookScalarWhereInput
    data: XOR<OverdueBookUpdateManyMutationInput, OverdueBookUncheckedUpdateManyWithoutBookInput>
  }

  export type ReturnHistoryUpsertWithWhereUniqueWithoutBookInput = {
    where: ReturnHistoryWhereUniqueInput
    update: XOR<ReturnHistoryUpdateWithoutBookInput, ReturnHistoryUncheckedUpdateWithoutBookInput>
    create: XOR<ReturnHistoryCreateWithoutBookInput, ReturnHistoryUncheckedCreateWithoutBookInput>
  }

  export type ReturnHistoryUpdateWithWhereUniqueWithoutBookInput = {
    where: ReturnHistoryWhereUniqueInput
    data: XOR<ReturnHistoryUpdateWithoutBookInput, ReturnHistoryUncheckedUpdateWithoutBookInput>
  }

  export type ReturnHistoryUpdateManyWithWhereWithoutBookInput = {
    where: ReturnHistoryScalarWhereInput
    data: XOR<ReturnHistoryUpdateManyMutationInput, ReturnHistoryUncheckedUpdateManyWithoutBookInput>
  }

  export type BookCreateWithoutBorrowedBooksInput = {
    title: string
    author: string
    isbn: string
    category: string
    addedAt?: Date | string
    donatedBy?: string | null
    donatedAt?: Date | string | null
    coverImage?: string | null
    description: string
    quantity: number
    donatedBooks?: DonatedBookCreateNestedManyWithoutBookInput
    overdueBooks?: OverdueBookCreateNestedManyWithoutBookInput
    returnHistories?: ReturnHistoryCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutBorrowedBooksInput = {
    id?: number
    title: string
    author: string
    isbn: string
    category: string
    addedAt?: Date | string
    donatedBy?: string | null
    donatedAt?: Date | string | null
    coverImage?: string | null
    description: string
    quantity: number
    donatedBooks?: DonatedBookUncheckedCreateNestedManyWithoutBookInput
    overdueBooks?: OverdueBookUncheckedCreateNestedManyWithoutBookInput
    returnHistories?: ReturnHistoryUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutBorrowedBooksInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutBorrowedBooksInput, BookUncheckedCreateWithoutBorrowedBooksInput>
  }

  export type UserCreateWithoutBorrowedBooksInput = {
    email: string
    username: string
    mobile: string
    password: string
    createdAt?: Date | string
    overdueBooks?: OverdueBookCreateNestedManyWithoutUserInput
    returnHistories?: ReturnHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBorrowedBooksInput = {
    id?: number
    email: string
    username: string
    mobile: string
    password: string
    createdAt?: Date | string
    overdueBooks?: OverdueBookUncheckedCreateNestedManyWithoutUserInput
    returnHistories?: ReturnHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBorrowedBooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBorrowedBooksInput, UserUncheckedCreateWithoutBorrowedBooksInput>
  }

  export type BookUpsertWithoutBorrowedBooksInput = {
    update: XOR<BookUpdateWithoutBorrowedBooksInput, BookUncheckedUpdateWithoutBorrowedBooksInput>
    create: XOR<BookCreateWithoutBorrowedBooksInput, BookUncheckedCreateWithoutBorrowedBooksInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutBorrowedBooksInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutBorrowedBooksInput, BookUncheckedUpdateWithoutBorrowedBooksInput>
  }

  export type BookUpdateWithoutBorrowedBooksInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    donatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    donatedBooks?: DonatedBookUpdateManyWithoutBookNestedInput
    overdueBooks?: OverdueBookUpdateManyWithoutBookNestedInput
    returnHistories?: ReturnHistoryUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutBorrowedBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    donatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    donatedBooks?: DonatedBookUncheckedUpdateManyWithoutBookNestedInput
    overdueBooks?: OverdueBookUncheckedUpdateManyWithoutBookNestedInput
    returnHistories?: ReturnHistoryUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UserUpsertWithoutBorrowedBooksInput = {
    update: XOR<UserUpdateWithoutBorrowedBooksInput, UserUncheckedUpdateWithoutBorrowedBooksInput>
    create: XOR<UserCreateWithoutBorrowedBooksInput, UserUncheckedCreateWithoutBorrowedBooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBorrowedBooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBorrowedBooksInput, UserUncheckedUpdateWithoutBorrowedBooksInput>
  }

  export type UserUpdateWithoutBorrowedBooksInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overdueBooks?: OverdueBookUpdateManyWithoutUserNestedInput
    returnHistories?: ReturnHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBorrowedBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overdueBooks?: OverdueBookUncheckedUpdateManyWithoutUserNestedInput
    returnHistories?: ReturnHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookCreateWithoutOverdueBooksInput = {
    title: string
    author: string
    isbn: string
    category: string
    addedAt?: Date | string
    donatedBy?: string | null
    donatedAt?: Date | string | null
    coverImage?: string | null
    description: string
    quantity: number
    borrowedBooks?: BorrowedBookCreateNestedManyWithoutBookInput
    donatedBooks?: DonatedBookCreateNestedManyWithoutBookInput
    returnHistories?: ReturnHistoryCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutOverdueBooksInput = {
    id?: number
    title: string
    author: string
    isbn: string
    category: string
    addedAt?: Date | string
    donatedBy?: string | null
    donatedAt?: Date | string | null
    coverImage?: string | null
    description: string
    quantity: number
    borrowedBooks?: BorrowedBookUncheckedCreateNestedManyWithoutBookInput
    donatedBooks?: DonatedBookUncheckedCreateNestedManyWithoutBookInput
    returnHistories?: ReturnHistoryUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutOverdueBooksInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutOverdueBooksInput, BookUncheckedCreateWithoutOverdueBooksInput>
  }

  export type UserCreateWithoutOverdueBooksInput = {
    email: string
    username: string
    mobile: string
    password: string
    createdAt?: Date | string
    borrowedBooks?: BorrowedBookCreateNestedManyWithoutUserInput
    returnHistories?: ReturnHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOverdueBooksInput = {
    id?: number
    email: string
    username: string
    mobile: string
    password: string
    createdAt?: Date | string
    borrowedBooks?: BorrowedBookUncheckedCreateNestedManyWithoutUserInput
    returnHistories?: ReturnHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOverdueBooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOverdueBooksInput, UserUncheckedCreateWithoutOverdueBooksInput>
  }

  export type BookUpsertWithoutOverdueBooksInput = {
    update: XOR<BookUpdateWithoutOverdueBooksInput, BookUncheckedUpdateWithoutOverdueBooksInput>
    create: XOR<BookCreateWithoutOverdueBooksInput, BookUncheckedCreateWithoutOverdueBooksInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutOverdueBooksInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutOverdueBooksInput, BookUncheckedUpdateWithoutOverdueBooksInput>
  }

  export type BookUpdateWithoutOverdueBooksInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    donatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    borrowedBooks?: BorrowedBookUpdateManyWithoutBookNestedInput
    donatedBooks?: DonatedBookUpdateManyWithoutBookNestedInput
    returnHistories?: ReturnHistoryUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutOverdueBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    donatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    borrowedBooks?: BorrowedBookUncheckedUpdateManyWithoutBookNestedInput
    donatedBooks?: DonatedBookUncheckedUpdateManyWithoutBookNestedInput
    returnHistories?: ReturnHistoryUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UserUpsertWithoutOverdueBooksInput = {
    update: XOR<UserUpdateWithoutOverdueBooksInput, UserUncheckedUpdateWithoutOverdueBooksInput>
    create: XOR<UserCreateWithoutOverdueBooksInput, UserUncheckedCreateWithoutOverdueBooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOverdueBooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOverdueBooksInput, UserUncheckedUpdateWithoutOverdueBooksInput>
  }

  export type UserUpdateWithoutOverdueBooksInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowedBooks?: BorrowedBookUpdateManyWithoutUserNestedInput
    returnHistories?: ReturnHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOverdueBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowedBooks?: BorrowedBookUncheckedUpdateManyWithoutUserNestedInput
    returnHistories?: ReturnHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookCreateWithoutReturnHistoriesInput = {
    title: string
    author: string
    isbn: string
    category: string
    addedAt?: Date | string
    donatedBy?: string | null
    donatedAt?: Date | string | null
    coverImage?: string | null
    description: string
    quantity: number
    borrowedBooks?: BorrowedBookCreateNestedManyWithoutBookInput
    donatedBooks?: DonatedBookCreateNestedManyWithoutBookInput
    overdueBooks?: OverdueBookCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutReturnHistoriesInput = {
    id?: number
    title: string
    author: string
    isbn: string
    category: string
    addedAt?: Date | string
    donatedBy?: string | null
    donatedAt?: Date | string | null
    coverImage?: string | null
    description: string
    quantity: number
    borrowedBooks?: BorrowedBookUncheckedCreateNestedManyWithoutBookInput
    donatedBooks?: DonatedBookUncheckedCreateNestedManyWithoutBookInput
    overdueBooks?: OverdueBookUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutReturnHistoriesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutReturnHistoriesInput, BookUncheckedCreateWithoutReturnHistoriesInput>
  }

  export type UserCreateWithoutReturnHistoriesInput = {
    email: string
    username: string
    mobile: string
    password: string
    createdAt?: Date | string
    borrowedBooks?: BorrowedBookCreateNestedManyWithoutUserInput
    overdueBooks?: OverdueBookCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReturnHistoriesInput = {
    id?: number
    email: string
    username: string
    mobile: string
    password: string
    createdAt?: Date | string
    borrowedBooks?: BorrowedBookUncheckedCreateNestedManyWithoutUserInput
    overdueBooks?: OverdueBookUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReturnHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReturnHistoriesInput, UserUncheckedCreateWithoutReturnHistoriesInput>
  }

  export type BookUpsertWithoutReturnHistoriesInput = {
    update: XOR<BookUpdateWithoutReturnHistoriesInput, BookUncheckedUpdateWithoutReturnHistoriesInput>
    create: XOR<BookCreateWithoutReturnHistoriesInput, BookUncheckedCreateWithoutReturnHistoriesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutReturnHistoriesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutReturnHistoriesInput, BookUncheckedUpdateWithoutReturnHistoriesInput>
  }

  export type BookUpdateWithoutReturnHistoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    donatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    borrowedBooks?: BorrowedBookUpdateManyWithoutBookNestedInput
    donatedBooks?: DonatedBookUpdateManyWithoutBookNestedInput
    overdueBooks?: OverdueBookUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutReturnHistoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    donatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    borrowedBooks?: BorrowedBookUncheckedUpdateManyWithoutBookNestedInput
    donatedBooks?: DonatedBookUncheckedUpdateManyWithoutBookNestedInput
    overdueBooks?: OverdueBookUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UserUpsertWithoutReturnHistoriesInput = {
    update: XOR<UserUpdateWithoutReturnHistoriesInput, UserUncheckedUpdateWithoutReturnHistoriesInput>
    create: XOR<UserCreateWithoutReturnHistoriesInput, UserUncheckedCreateWithoutReturnHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReturnHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReturnHistoriesInput, UserUncheckedUpdateWithoutReturnHistoriesInput>
  }

  export type UserUpdateWithoutReturnHistoriesInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowedBooks?: BorrowedBookUpdateManyWithoutUserNestedInput
    overdueBooks?: OverdueBookUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReturnHistoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowedBooks?: BorrowedBookUncheckedUpdateManyWithoutUserNestedInput
    overdueBooks?: OverdueBookUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookCreateWithoutDonatedBooksInput = {
    title: string
    author: string
    isbn: string
    category: string
    addedAt?: Date | string
    donatedBy?: string | null
    donatedAt?: Date | string | null
    coverImage?: string | null
    description: string
    quantity: number
    borrowedBooks?: BorrowedBookCreateNestedManyWithoutBookInput
    overdueBooks?: OverdueBookCreateNestedManyWithoutBookInput
    returnHistories?: ReturnHistoryCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutDonatedBooksInput = {
    id?: number
    title: string
    author: string
    isbn: string
    category: string
    addedAt?: Date | string
    donatedBy?: string | null
    donatedAt?: Date | string | null
    coverImage?: string | null
    description: string
    quantity: number
    borrowedBooks?: BorrowedBookUncheckedCreateNestedManyWithoutBookInput
    overdueBooks?: OverdueBookUncheckedCreateNestedManyWithoutBookInput
    returnHistories?: ReturnHistoryUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutDonatedBooksInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutDonatedBooksInput, BookUncheckedCreateWithoutDonatedBooksInput>
  }

  export type BookUpsertWithoutDonatedBooksInput = {
    update: XOR<BookUpdateWithoutDonatedBooksInput, BookUncheckedUpdateWithoutDonatedBooksInput>
    create: XOR<BookCreateWithoutDonatedBooksInput, BookUncheckedCreateWithoutDonatedBooksInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutDonatedBooksInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutDonatedBooksInput, BookUncheckedUpdateWithoutDonatedBooksInput>
  }

  export type BookUpdateWithoutDonatedBooksInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    donatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    borrowedBooks?: BorrowedBookUpdateManyWithoutBookNestedInput
    overdueBooks?: OverdueBookUpdateManyWithoutBookNestedInput
    returnHistories?: ReturnHistoryUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutDonatedBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    donatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    borrowedBooks?: BorrowedBookUncheckedUpdateManyWithoutBookNestedInput
    overdueBooks?: OverdueBookUncheckedUpdateManyWithoutBookNestedInput
    returnHistories?: ReturnHistoryUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BorrowedBookCreateManyUserInput = {
    id?: number
    bookId: number
    borrowedAt?: Date | string
    dueDate: Date | string
    returnedAt?: Date | string | null
    isOverdue?: boolean
  }

  export type OverdueBookCreateManyUserInput = {
    id?: number
    bookId: number
    overdueAt?: Date | string
  }

  export type ReturnHistoryCreateManyUserInput = {
    id?: number
    bookId: number
    returnedAt?: Date | string
  }

  export type BorrowedBookUpdateWithoutUserInput = {
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
    book?: BookUpdateOneRequiredWithoutBorrowedBooksNestedInput
  }

  export type BorrowedBookUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BorrowedBookUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OverdueBookUpdateWithoutUserInput = {
    overdueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutOverdueBooksNestedInput
  }

  export type OverdueBookUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    overdueAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OverdueBookUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    overdueAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnHistoryUpdateWithoutUserInput = {
    returnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutReturnHistoriesNestedInput
  }

  export type ReturnHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    returnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    returnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BorrowedBookCreateManyBookInput = {
    id?: number
    userId: number
    borrowedAt?: Date | string
    dueDate: Date | string
    returnedAt?: Date | string | null
    isOverdue?: boolean
  }

  export type DonatedBookCreateManyBookInput = {
    id?: number
    donatedBy: string
    donatedAt?: Date | string
  }

  export type OverdueBookCreateManyBookInput = {
    id?: number
    userId: number
    overdueAt?: Date | string
  }

  export type ReturnHistoryCreateManyBookInput = {
    id?: number
    userId: number
    returnedAt?: Date | string
  }

  export type BorrowedBookUpdateWithoutBookInput = {
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutBorrowedBooksNestedInput
  }

  export type BorrowedBookUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BorrowedBookUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DonatedBookUpdateWithoutBookInput = {
    donatedBy?: StringFieldUpdateOperationsInput | string
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonatedBookUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    donatedBy?: StringFieldUpdateOperationsInput | string
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonatedBookUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    donatedBy?: StringFieldUpdateOperationsInput | string
    donatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OverdueBookUpdateWithoutBookInput = {
    overdueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOverdueBooksNestedInput
  }

  export type OverdueBookUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    overdueAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OverdueBookUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    overdueAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnHistoryUpdateWithoutBookInput = {
    returnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReturnHistoriesNestedInput
  }

  export type ReturnHistoryUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    returnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnHistoryUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    returnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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