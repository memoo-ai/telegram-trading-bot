
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
 * Model Wallet
 * 
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>
/**
 * Model DeleteWallet
 * 
 */
export type DeleteWallet = $Result.DefaultSelection<Prisma.$DeleteWalletPayload>
/**
 * Model ExchangeRate
 * 
 */
export type ExchangeRate = $Result.DefaultSelection<Prisma.$ExchangeRatePayload>

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
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deleteWallet`: Exposes CRUD operations for the **DeleteWallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeleteWallets
    * const deleteWallets = await prisma.deleteWallet.findMany()
    * ```
    */
  get deleteWallet(): Prisma.DeleteWalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exchangeRate`: Exposes CRUD operations for the **ExchangeRate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExchangeRates
    * const exchangeRates = await prisma.exchangeRate.findMany()
    * ```
    */
  get exchangeRate(): Prisma.ExchangeRateDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    Wallet: 'Wallet',
    DeleteWallet: 'DeleteWallet',
    ExchangeRate: 'ExchangeRate'
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
      modelProps: "user" | "wallet" | "deleteWallet" | "exchangeRate"
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
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>
        fields: Prisma.WalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      DeleteWallet: {
        payload: Prisma.$DeleteWalletPayload<ExtArgs>
        fields: Prisma.DeleteWalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeleteWalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteWalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeleteWalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteWalletPayload>
          }
          findFirst: {
            args: Prisma.DeleteWalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteWalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeleteWalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteWalletPayload>
          }
          findMany: {
            args: Prisma.DeleteWalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteWalletPayload>[]
          }
          create: {
            args: Prisma.DeleteWalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteWalletPayload>
          }
          createMany: {
            args: Prisma.DeleteWalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeleteWalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteWalletPayload>[]
          }
          delete: {
            args: Prisma.DeleteWalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteWalletPayload>
          }
          update: {
            args: Prisma.DeleteWalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteWalletPayload>
          }
          deleteMany: {
            args: Prisma.DeleteWalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeleteWalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeleteWalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteWalletPayload>[]
          }
          upsert: {
            args: Prisma.DeleteWalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteWalletPayload>
          }
          aggregate: {
            args: Prisma.DeleteWalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeleteWallet>
          }
          groupBy: {
            args: Prisma.DeleteWalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeleteWalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeleteWalletCountArgs<ExtArgs>
            result: $Utils.Optional<DeleteWalletCountAggregateOutputType> | number
          }
        }
      }
      ExchangeRate: {
        payload: Prisma.$ExchangeRatePayload<ExtArgs>
        fields: Prisma.ExchangeRateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExchangeRateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExchangeRateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          findFirst: {
            args: Prisma.ExchangeRateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExchangeRateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          findMany: {
            args: Prisma.ExchangeRateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>[]
          }
          create: {
            args: Prisma.ExchangeRateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          createMany: {
            args: Prisma.ExchangeRateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExchangeRateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>[]
          }
          delete: {
            args: Prisma.ExchangeRateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          update: {
            args: Prisma.ExchangeRateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          deleteMany: {
            args: Prisma.ExchangeRateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExchangeRateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExchangeRateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>[]
          }
          upsert: {
            args: Prisma.ExchangeRateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          aggregate: {
            args: Prisma.ExchangeRateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExchangeRate>
          }
          groupBy: {
            args: Prisma.ExchangeRateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExchangeRateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExchangeRateCountArgs<ExtArgs>
            result: $Utils.Optional<ExchangeRateCountAggregateOutputType> | number
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
    wallet?: WalletOmit
    deleteWallet?: DeleteWalletOmit
    exchangeRate?: ExchangeRateOmit
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
    wallets: number
    deletedWallets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallets?: boolean | UserCountOutputTypeCountWalletsArgs
    deletedWallets?: boolean | UserCountOutputTypeCountDeletedWalletsArgs
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
  export type UserCountOutputTypeCountWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeletedWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeleteWalletWhereInput
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
    tgId: number | null
    totalInvites: number | null
  }

  export type UserSumAggregateOutputType = {
    tgId: bigint | null
    totalInvites: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    tgId: bigint | null
    isBot: boolean | null
    username: string | null
    firstName: string | null
    lastName: string | null
    inviteCode: string | null
    referralCode: string | null
    agreedToTerms: boolean | null
    totalInvites: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    tgId: bigint | null
    isBot: boolean | null
    username: string | null
    firstName: string | null
    lastName: string | null
    inviteCode: string | null
    referralCode: string | null
    agreedToTerms: boolean | null
    totalInvites: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    tgId: number
    isBot: number
    username: number
    firstName: number
    lastName: number
    inviteCode: number
    referralCode: number
    agreedToTerms: number
    totalInvites: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    tgId?: true
    totalInvites?: true
  }

  export type UserSumAggregateInputType = {
    tgId?: true
    totalInvites?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    tgId?: true
    isBot?: true
    username?: true
    firstName?: true
    lastName?: true
    inviteCode?: true
    referralCode?: true
    agreedToTerms?: true
    totalInvites?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    tgId?: true
    isBot?: true
    username?: true
    firstName?: true
    lastName?: true
    inviteCode?: true
    referralCode?: true
    agreedToTerms?: true
    totalInvites?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    tgId?: true
    isBot?: true
    username?: true
    firstName?: true
    lastName?: true
    inviteCode?: true
    referralCode?: true
    agreedToTerms?: true
    totalInvites?: true
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
    id: string
    tgId: bigint
    isBot: boolean | null
    username: string | null
    firstName: string | null
    lastName: string | null
    inviteCode: string
    referralCode: string
    agreedToTerms: boolean
    totalInvites: number
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
    tgId?: boolean
    isBot?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    inviteCode?: boolean
    referralCode?: boolean
    agreedToTerms?: boolean
    totalInvites?: boolean
    wallets?: boolean | User$walletsArgs<ExtArgs>
    deletedWallets?: boolean | User$deletedWalletsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tgId?: boolean
    isBot?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    inviteCode?: boolean
    referralCode?: boolean
    agreedToTerms?: boolean
    totalInvites?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tgId?: boolean
    isBot?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    inviteCode?: boolean
    referralCode?: boolean
    agreedToTerms?: boolean
    totalInvites?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    tgId?: boolean
    isBot?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    inviteCode?: boolean
    referralCode?: boolean
    agreedToTerms?: boolean
    totalInvites?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tgId" | "isBot" | "username" | "firstName" | "lastName" | "inviteCode" | "referralCode" | "agreedToTerms" | "totalInvites", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallets?: boolean | User$walletsArgs<ExtArgs>
    deletedWallets?: boolean | User$deletedWalletsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      wallets: Prisma.$WalletPayload<ExtArgs>[]
      deletedWallets: Prisma.$DeleteWalletPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tgId: bigint
      isBot: boolean | null
      username: string | null
      firstName: string | null
      lastName: string | null
      inviteCode: string
      referralCode: string
      agreedToTerms: boolean
      totalInvites: number
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
    wallets<T extends User$walletsArgs<ExtArgs> = {}>(args?: Subset<T, User$walletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deletedWallets<T extends User$deletedWalletsArgs<ExtArgs> = {}>(args?: Subset<T, User$deletedWalletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeleteWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly tgId: FieldRef<"User", 'BigInt'>
    readonly isBot: FieldRef<"User", 'Boolean'>
    readonly username: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly inviteCode: FieldRef<"User", 'String'>
    readonly referralCode: FieldRef<"User", 'String'>
    readonly agreedToTerms: FieldRef<"User", 'Boolean'>
    readonly totalInvites: FieldRef<"User", 'Int'>
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
   * User.wallets
   */
  export type User$walletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    cursor?: WalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * User.deletedWallets
   */
  export type User$deletedWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteWallet
     */
    select?: DeleteWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteWallet
     */
    omit?: DeleteWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteWalletInclude<ExtArgs> | null
    where?: DeleteWalletWhereInput
    orderBy?: DeleteWalletOrderByWithRelationInput | DeleteWalletOrderByWithRelationInput[]
    cursor?: DeleteWalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeleteWalletScalarFieldEnum | DeleteWalletScalarFieldEnum[]
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
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    balance: number | null
    balanceUsd: number | null
  }

  export type WalletSumAggregateOutputType = {
    balance: number | null
    balanceUsd: number | null
  }

  export type WalletMinAggregateOutputType = {
    id: string | null
    walletName: string | null
    walletAddress: string | null
    walletPrivateKey: string | null
    isDefaultWallet: boolean | null
    updatedAt: Date | null
    balance: number | null
    balanceUsd: number | null
    userId: string | null
  }

  export type WalletMaxAggregateOutputType = {
    id: string | null
    walletName: string | null
    walletAddress: string | null
    walletPrivateKey: string | null
    isDefaultWallet: boolean | null
    updatedAt: Date | null
    balance: number | null
    balanceUsd: number | null
    userId: string | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    walletName: number
    walletAddress: number
    walletPrivateKey: number
    isDefaultWallet: number
    updatedAt: number
    balance: number
    balanceUsd: number
    userId: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    balance?: true
    balanceUsd?: true
  }

  export type WalletSumAggregateInputType = {
    balance?: true
    balanceUsd?: true
  }

  export type WalletMinAggregateInputType = {
    id?: true
    walletName?: true
    walletAddress?: true
    walletPrivateKey?: true
    isDefaultWallet?: true
    updatedAt?: true
    balance?: true
    balanceUsd?: true
    userId?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    walletName?: true
    walletAddress?: true
    walletPrivateKey?: true
    isDefaultWallet?: true
    updatedAt?: true
    balance?: true
    balanceUsd?: true
    userId?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    walletName?: true
    walletAddress?: true
    walletPrivateKey?: true
    isDefaultWallet?: true
    updatedAt?: true
    balance?: true
    balanceUsd?: true
    userId?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithAggregationInput | WalletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    id: string
    walletName: string
    walletAddress: string
    walletPrivateKey: string
    isDefaultWallet: boolean
    updatedAt: Date
    balance: number
    balanceUsd: number
    userId: string
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletName?: boolean
    walletAddress?: boolean
    walletPrivateKey?: boolean
    isDefaultWallet?: boolean
    updatedAt?: boolean
    balance?: boolean
    balanceUsd?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletName?: boolean
    walletAddress?: boolean
    walletPrivateKey?: boolean
    isDefaultWallet?: boolean
    updatedAt?: boolean
    balance?: boolean
    balanceUsd?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletName?: boolean
    walletAddress?: boolean
    walletPrivateKey?: boolean
    isDefaultWallet?: boolean
    updatedAt?: boolean
    balance?: boolean
    balanceUsd?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectScalar = {
    id?: boolean
    walletName?: boolean
    walletAddress?: boolean
    walletPrivateKey?: boolean
    isDefaultWallet?: boolean
    updatedAt?: boolean
    balance?: boolean
    balanceUsd?: boolean
    userId?: boolean
  }

  export type WalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletName" | "walletAddress" | "walletPrivateKey" | "isDefaultWallet" | "updatedAt" | "balance" | "balanceUsd" | "userId", ExtArgs["result"]["wallet"]>
  export type WalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletName: string
      walletAddress: string
      walletPrivateKey: string
      isDefaultWallet: boolean
      updatedAt: Date
      balance: number
      balanceUsd: number
      userId: string
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type WalletGetPayload<S extends boolean | null | undefined | WalletDefaultArgs> = $Result.GetResult<Prisma.$WalletPayload, S>

  type WalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface WalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallet'], meta: { name: 'Wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletFindManyArgs>(args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends WalletCreateArgs>(args: SelectSubset<T, WalletCreateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletCreateManyArgs>(args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {WalletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends WalletDeleteArgs>(args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletUpdateArgs>(args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletDeleteManyArgs>(args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletUpdateManyArgs>(args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {WalletUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.updateManyAndReturn({
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
    updateManyAndReturn<T extends WalletUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
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
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallet model
   */
  readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Wallet model
   */
  interface WalletFieldRefs {
    readonly id: FieldRef<"Wallet", 'String'>
    readonly walletName: FieldRef<"Wallet", 'String'>
    readonly walletAddress: FieldRef<"Wallet", 'String'>
    readonly walletPrivateKey: FieldRef<"Wallet", 'String'>
    readonly isDefaultWallet: FieldRef<"Wallet", 'Boolean'>
    readonly updatedAt: FieldRef<"Wallet", 'DateTime'>
    readonly balance: FieldRef<"Wallet", 'Int'>
    readonly balanceUsd: FieldRef<"Wallet", 'Int'>
    readonly userId: FieldRef<"Wallet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet create
   */
  export type WalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallet createManyAndReturn
   */
  export type WalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
  }

  /**
   * Wallet updateManyAndReturn
   */
  export type WalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to delete.
     */
    limit?: number
  }

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
  }


  /**
   * Model DeleteWallet
   */

  export type AggregateDeleteWallet = {
    _count: DeleteWalletCountAggregateOutputType | null
    _avg: DeleteWalletAvgAggregateOutputType | null
    _sum: DeleteWalletSumAggregateOutputType | null
    _min: DeleteWalletMinAggregateOutputType | null
    _max: DeleteWalletMaxAggregateOutputType | null
  }

  export type DeleteWalletAvgAggregateOutputType = {
    balance: number | null
    balanceUsd: number | null
  }

  export type DeleteWalletSumAggregateOutputType = {
    balance: number | null
    balanceUsd: number | null
  }

  export type DeleteWalletMinAggregateOutputType = {
    id: string | null
    originalWalletId: string | null
    walletName: string | null
    walletAddress: string | null
    walletPrivateKey: string | null
    isDefaultWallet: boolean | null
    deletedAt: Date | null
    originalCreatedAt: Date | null
    balance: number | null
    balanceUsd: number | null
    userId: string | null
  }

  export type DeleteWalletMaxAggregateOutputType = {
    id: string | null
    originalWalletId: string | null
    walletName: string | null
    walletAddress: string | null
    walletPrivateKey: string | null
    isDefaultWallet: boolean | null
    deletedAt: Date | null
    originalCreatedAt: Date | null
    balance: number | null
    balanceUsd: number | null
    userId: string | null
  }

  export type DeleteWalletCountAggregateOutputType = {
    id: number
    originalWalletId: number
    walletName: number
    walletAddress: number
    walletPrivateKey: number
    isDefaultWallet: number
    deletedAt: number
    originalCreatedAt: number
    balance: number
    balanceUsd: number
    userId: number
    _all: number
  }


  export type DeleteWalletAvgAggregateInputType = {
    balance?: true
    balanceUsd?: true
  }

  export type DeleteWalletSumAggregateInputType = {
    balance?: true
    balanceUsd?: true
  }

  export type DeleteWalletMinAggregateInputType = {
    id?: true
    originalWalletId?: true
    walletName?: true
    walletAddress?: true
    walletPrivateKey?: true
    isDefaultWallet?: true
    deletedAt?: true
    originalCreatedAt?: true
    balance?: true
    balanceUsd?: true
    userId?: true
  }

  export type DeleteWalletMaxAggregateInputType = {
    id?: true
    originalWalletId?: true
    walletName?: true
    walletAddress?: true
    walletPrivateKey?: true
    isDefaultWallet?: true
    deletedAt?: true
    originalCreatedAt?: true
    balance?: true
    balanceUsd?: true
    userId?: true
  }

  export type DeleteWalletCountAggregateInputType = {
    id?: true
    originalWalletId?: true
    walletName?: true
    walletAddress?: true
    walletPrivateKey?: true
    isDefaultWallet?: true
    deletedAt?: true
    originalCreatedAt?: true
    balance?: true
    balanceUsd?: true
    userId?: true
    _all?: true
  }

  export type DeleteWalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeleteWallet to aggregate.
     */
    where?: DeleteWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeleteWallets to fetch.
     */
    orderBy?: DeleteWalletOrderByWithRelationInput | DeleteWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeleteWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeleteWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeleteWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeleteWallets
    **/
    _count?: true | DeleteWalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeleteWalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeleteWalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeleteWalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeleteWalletMaxAggregateInputType
  }

  export type GetDeleteWalletAggregateType<T extends DeleteWalletAggregateArgs> = {
        [P in keyof T & keyof AggregateDeleteWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeleteWallet[P]>
      : GetScalarType<T[P], AggregateDeleteWallet[P]>
  }




  export type DeleteWalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeleteWalletWhereInput
    orderBy?: DeleteWalletOrderByWithAggregationInput | DeleteWalletOrderByWithAggregationInput[]
    by: DeleteWalletScalarFieldEnum[] | DeleteWalletScalarFieldEnum
    having?: DeleteWalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeleteWalletCountAggregateInputType | true
    _avg?: DeleteWalletAvgAggregateInputType
    _sum?: DeleteWalletSumAggregateInputType
    _min?: DeleteWalletMinAggregateInputType
    _max?: DeleteWalletMaxAggregateInputType
  }

  export type DeleteWalletGroupByOutputType = {
    id: string
    originalWalletId: string
    walletName: string
    walletAddress: string
    walletPrivateKey: string
    isDefaultWallet: boolean
    deletedAt: Date
    originalCreatedAt: Date
    balance: number
    balanceUsd: number
    userId: string
    _count: DeleteWalletCountAggregateOutputType | null
    _avg: DeleteWalletAvgAggregateOutputType | null
    _sum: DeleteWalletSumAggregateOutputType | null
    _min: DeleteWalletMinAggregateOutputType | null
    _max: DeleteWalletMaxAggregateOutputType | null
  }

  type GetDeleteWalletGroupByPayload<T extends DeleteWalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeleteWalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeleteWalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeleteWalletGroupByOutputType[P]>
            : GetScalarType<T[P], DeleteWalletGroupByOutputType[P]>
        }
      >
    >


  export type DeleteWalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalWalletId?: boolean
    walletName?: boolean
    walletAddress?: boolean
    walletPrivateKey?: boolean
    isDefaultWallet?: boolean
    deletedAt?: boolean
    originalCreatedAt?: boolean
    balance?: boolean
    balanceUsd?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deleteWallet"]>

  export type DeleteWalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalWalletId?: boolean
    walletName?: boolean
    walletAddress?: boolean
    walletPrivateKey?: boolean
    isDefaultWallet?: boolean
    deletedAt?: boolean
    originalCreatedAt?: boolean
    balance?: boolean
    balanceUsd?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deleteWallet"]>

  export type DeleteWalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalWalletId?: boolean
    walletName?: boolean
    walletAddress?: boolean
    walletPrivateKey?: boolean
    isDefaultWallet?: boolean
    deletedAt?: boolean
    originalCreatedAt?: boolean
    balance?: boolean
    balanceUsd?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deleteWallet"]>

  export type DeleteWalletSelectScalar = {
    id?: boolean
    originalWalletId?: boolean
    walletName?: boolean
    walletAddress?: boolean
    walletPrivateKey?: boolean
    isDefaultWallet?: boolean
    deletedAt?: boolean
    originalCreatedAt?: boolean
    balance?: boolean
    balanceUsd?: boolean
    userId?: boolean
  }

  export type DeleteWalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "originalWalletId" | "walletName" | "walletAddress" | "walletPrivateKey" | "isDefaultWallet" | "deletedAt" | "originalCreatedAt" | "balance" | "balanceUsd" | "userId", ExtArgs["result"]["deleteWallet"]>
  export type DeleteWalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeleteWalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeleteWalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DeleteWalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeleteWallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      originalWalletId: string
      walletName: string
      walletAddress: string
      walletPrivateKey: string
      isDefaultWallet: boolean
      deletedAt: Date
      originalCreatedAt: Date
      balance: number
      balanceUsd: number
      userId: string
    }, ExtArgs["result"]["deleteWallet"]>
    composites: {}
  }

  type DeleteWalletGetPayload<S extends boolean | null | undefined | DeleteWalletDefaultArgs> = $Result.GetResult<Prisma.$DeleteWalletPayload, S>

  type DeleteWalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeleteWalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeleteWalletCountAggregateInputType | true
    }

  export interface DeleteWalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeleteWallet'], meta: { name: 'DeleteWallet' } }
    /**
     * Find zero or one DeleteWallet that matches the filter.
     * @param {DeleteWalletFindUniqueArgs} args - Arguments to find a DeleteWallet
     * @example
     * // Get one DeleteWallet
     * const deleteWallet = await prisma.deleteWallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeleteWalletFindUniqueArgs>(args: SelectSubset<T, DeleteWalletFindUniqueArgs<ExtArgs>>): Prisma__DeleteWalletClient<$Result.GetResult<Prisma.$DeleteWalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeleteWallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeleteWalletFindUniqueOrThrowArgs} args - Arguments to find a DeleteWallet
     * @example
     * // Get one DeleteWallet
     * const deleteWallet = await prisma.deleteWallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeleteWalletFindUniqueOrThrowArgs>(args: SelectSubset<T, DeleteWalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeleteWalletClient<$Result.GetResult<Prisma.$DeleteWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeleteWallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeleteWalletFindFirstArgs} args - Arguments to find a DeleteWallet
     * @example
     * // Get one DeleteWallet
     * const deleteWallet = await prisma.deleteWallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeleteWalletFindFirstArgs>(args?: SelectSubset<T, DeleteWalletFindFirstArgs<ExtArgs>>): Prisma__DeleteWalletClient<$Result.GetResult<Prisma.$DeleteWalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeleteWallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeleteWalletFindFirstOrThrowArgs} args - Arguments to find a DeleteWallet
     * @example
     * // Get one DeleteWallet
     * const deleteWallet = await prisma.deleteWallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeleteWalletFindFirstOrThrowArgs>(args?: SelectSubset<T, DeleteWalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeleteWalletClient<$Result.GetResult<Prisma.$DeleteWalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeleteWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeleteWalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeleteWallets
     * const deleteWallets = await prisma.deleteWallet.findMany()
     * 
     * // Get first 10 DeleteWallets
     * const deleteWallets = await prisma.deleteWallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deleteWalletWithIdOnly = await prisma.deleteWallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeleteWalletFindManyArgs>(args?: SelectSubset<T, DeleteWalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeleteWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeleteWallet.
     * @param {DeleteWalletCreateArgs} args - Arguments to create a DeleteWallet.
     * @example
     * // Create one DeleteWallet
     * const DeleteWallet = await prisma.deleteWallet.create({
     *   data: {
     *     // ... data to create a DeleteWallet
     *   }
     * })
     * 
     */
    create<T extends DeleteWalletCreateArgs>(args: SelectSubset<T, DeleteWalletCreateArgs<ExtArgs>>): Prisma__DeleteWalletClient<$Result.GetResult<Prisma.$DeleteWalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeleteWallets.
     * @param {DeleteWalletCreateManyArgs} args - Arguments to create many DeleteWallets.
     * @example
     * // Create many DeleteWallets
     * const deleteWallet = await prisma.deleteWallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeleteWalletCreateManyArgs>(args?: SelectSubset<T, DeleteWalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeleteWallets and returns the data saved in the database.
     * @param {DeleteWalletCreateManyAndReturnArgs} args - Arguments to create many DeleteWallets.
     * @example
     * // Create many DeleteWallets
     * const deleteWallet = await prisma.deleteWallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeleteWallets and only return the `id`
     * const deleteWalletWithIdOnly = await prisma.deleteWallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeleteWalletCreateManyAndReturnArgs>(args?: SelectSubset<T, DeleteWalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeleteWalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeleteWallet.
     * @param {DeleteWalletDeleteArgs} args - Arguments to delete one DeleteWallet.
     * @example
     * // Delete one DeleteWallet
     * const DeleteWallet = await prisma.deleteWallet.delete({
     *   where: {
     *     // ... filter to delete one DeleteWallet
     *   }
     * })
     * 
     */
    delete<T extends DeleteWalletDeleteArgs>(args: SelectSubset<T, DeleteWalletDeleteArgs<ExtArgs>>): Prisma__DeleteWalletClient<$Result.GetResult<Prisma.$DeleteWalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeleteWallet.
     * @param {DeleteWalletUpdateArgs} args - Arguments to update one DeleteWallet.
     * @example
     * // Update one DeleteWallet
     * const deleteWallet = await prisma.deleteWallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeleteWalletUpdateArgs>(args: SelectSubset<T, DeleteWalletUpdateArgs<ExtArgs>>): Prisma__DeleteWalletClient<$Result.GetResult<Prisma.$DeleteWalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeleteWallets.
     * @param {DeleteWalletDeleteManyArgs} args - Arguments to filter DeleteWallets to delete.
     * @example
     * // Delete a few DeleteWallets
     * const { count } = await prisma.deleteWallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeleteWalletDeleteManyArgs>(args?: SelectSubset<T, DeleteWalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeleteWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeleteWalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeleteWallets
     * const deleteWallet = await prisma.deleteWallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeleteWalletUpdateManyArgs>(args: SelectSubset<T, DeleteWalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeleteWallets and returns the data updated in the database.
     * @param {DeleteWalletUpdateManyAndReturnArgs} args - Arguments to update many DeleteWallets.
     * @example
     * // Update many DeleteWallets
     * const deleteWallet = await prisma.deleteWallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeleteWallets and only return the `id`
     * const deleteWalletWithIdOnly = await prisma.deleteWallet.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeleteWalletUpdateManyAndReturnArgs>(args: SelectSubset<T, DeleteWalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeleteWalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeleteWallet.
     * @param {DeleteWalletUpsertArgs} args - Arguments to update or create a DeleteWallet.
     * @example
     * // Update or create a DeleteWallet
     * const deleteWallet = await prisma.deleteWallet.upsert({
     *   create: {
     *     // ... data to create a DeleteWallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeleteWallet we want to update
     *   }
     * })
     */
    upsert<T extends DeleteWalletUpsertArgs>(args: SelectSubset<T, DeleteWalletUpsertArgs<ExtArgs>>): Prisma__DeleteWalletClient<$Result.GetResult<Prisma.$DeleteWalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeleteWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeleteWalletCountArgs} args - Arguments to filter DeleteWallets to count.
     * @example
     * // Count the number of DeleteWallets
     * const count = await prisma.deleteWallet.count({
     *   where: {
     *     // ... the filter for the DeleteWallets we want to count
     *   }
     * })
    **/
    count<T extends DeleteWalletCountArgs>(
      args?: Subset<T, DeleteWalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeleteWalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeleteWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeleteWalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeleteWalletAggregateArgs>(args: Subset<T, DeleteWalletAggregateArgs>): Prisma.PrismaPromise<GetDeleteWalletAggregateType<T>>

    /**
     * Group by DeleteWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeleteWalletGroupByArgs} args - Group by arguments.
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
      T extends DeleteWalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeleteWalletGroupByArgs['orderBy'] }
        : { orderBy?: DeleteWalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeleteWalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeleteWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeleteWallet model
   */
  readonly fields: DeleteWalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeleteWallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeleteWalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DeleteWallet model
   */
  interface DeleteWalletFieldRefs {
    readonly id: FieldRef<"DeleteWallet", 'String'>
    readonly originalWalletId: FieldRef<"DeleteWallet", 'String'>
    readonly walletName: FieldRef<"DeleteWallet", 'String'>
    readonly walletAddress: FieldRef<"DeleteWallet", 'String'>
    readonly walletPrivateKey: FieldRef<"DeleteWallet", 'String'>
    readonly isDefaultWallet: FieldRef<"DeleteWallet", 'Boolean'>
    readonly deletedAt: FieldRef<"DeleteWallet", 'DateTime'>
    readonly originalCreatedAt: FieldRef<"DeleteWallet", 'DateTime'>
    readonly balance: FieldRef<"DeleteWallet", 'Int'>
    readonly balanceUsd: FieldRef<"DeleteWallet", 'Int'>
    readonly userId: FieldRef<"DeleteWallet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DeleteWallet findUnique
   */
  export type DeleteWalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteWallet
     */
    select?: DeleteWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteWallet
     */
    omit?: DeleteWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteWalletInclude<ExtArgs> | null
    /**
     * Filter, which DeleteWallet to fetch.
     */
    where: DeleteWalletWhereUniqueInput
  }

  /**
   * DeleteWallet findUniqueOrThrow
   */
  export type DeleteWalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteWallet
     */
    select?: DeleteWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteWallet
     */
    omit?: DeleteWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteWalletInclude<ExtArgs> | null
    /**
     * Filter, which DeleteWallet to fetch.
     */
    where: DeleteWalletWhereUniqueInput
  }

  /**
   * DeleteWallet findFirst
   */
  export type DeleteWalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteWallet
     */
    select?: DeleteWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteWallet
     */
    omit?: DeleteWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteWalletInclude<ExtArgs> | null
    /**
     * Filter, which DeleteWallet to fetch.
     */
    where?: DeleteWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeleteWallets to fetch.
     */
    orderBy?: DeleteWalletOrderByWithRelationInput | DeleteWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeleteWallets.
     */
    cursor?: DeleteWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeleteWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeleteWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeleteWallets.
     */
    distinct?: DeleteWalletScalarFieldEnum | DeleteWalletScalarFieldEnum[]
  }

  /**
   * DeleteWallet findFirstOrThrow
   */
  export type DeleteWalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteWallet
     */
    select?: DeleteWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteWallet
     */
    omit?: DeleteWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteWalletInclude<ExtArgs> | null
    /**
     * Filter, which DeleteWallet to fetch.
     */
    where?: DeleteWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeleteWallets to fetch.
     */
    orderBy?: DeleteWalletOrderByWithRelationInput | DeleteWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeleteWallets.
     */
    cursor?: DeleteWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeleteWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeleteWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeleteWallets.
     */
    distinct?: DeleteWalletScalarFieldEnum | DeleteWalletScalarFieldEnum[]
  }

  /**
   * DeleteWallet findMany
   */
  export type DeleteWalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteWallet
     */
    select?: DeleteWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteWallet
     */
    omit?: DeleteWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteWalletInclude<ExtArgs> | null
    /**
     * Filter, which DeleteWallets to fetch.
     */
    where?: DeleteWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeleteWallets to fetch.
     */
    orderBy?: DeleteWalletOrderByWithRelationInput | DeleteWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeleteWallets.
     */
    cursor?: DeleteWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeleteWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeleteWallets.
     */
    skip?: number
    distinct?: DeleteWalletScalarFieldEnum | DeleteWalletScalarFieldEnum[]
  }

  /**
   * DeleteWallet create
   */
  export type DeleteWalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteWallet
     */
    select?: DeleteWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteWallet
     */
    omit?: DeleteWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteWalletInclude<ExtArgs> | null
    /**
     * The data needed to create a DeleteWallet.
     */
    data: XOR<DeleteWalletCreateInput, DeleteWalletUncheckedCreateInput>
  }

  /**
   * DeleteWallet createMany
   */
  export type DeleteWalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeleteWallets.
     */
    data: DeleteWalletCreateManyInput | DeleteWalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeleteWallet createManyAndReturn
   */
  export type DeleteWalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteWallet
     */
    select?: DeleteWalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteWallet
     */
    omit?: DeleteWalletOmit<ExtArgs> | null
    /**
     * The data used to create many DeleteWallets.
     */
    data: DeleteWalletCreateManyInput | DeleteWalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteWalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeleteWallet update
   */
  export type DeleteWalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteWallet
     */
    select?: DeleteWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteWallet
     */
    omit?: DeleteWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteWalletInclude<ExtArgs> | null
    /**
     * The data needed to update a DeleteWallet.
     */
    data: XOR<DeleteWalletUpdateInput, DeleteWalletUncheckedUpdateInput>
    /**
     * Choose, which DeleteWallet to update.
     */
    where: DeleteWalletWhereUniqueInput
  }

  /**
   * DeleteWallet updateMany
   */
  export type DeleteWalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeleteWallets.
     */
    data: XOR<DeleteWalletUpdateManyMutationInput, DeleteWalletUncheckedUpdateManyInput>
    /**
     * Filter which DeleteWallets to update
     */
    where?: DeleteWalletWhereInput
    /**
     * Limit how many DeleteWallets to update.
     */
    limit?: number
  }

  /**
   * DeleteWallet updateManyAndReturn
   */
  export type DeleteWalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteWallet
     */
    select?: DeleteWalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteWallet
     */
    omit?: DeleteWalletOmit<ExtArgs> | null
    /**
     * The data used to update DeleteWallets.
     */
    data: XOR<DeleteWalletUpdateManyMutationInput, DeleteWalletUncheckedUpdateManyInput>
    /**
     * Filter which DeleteWallets to update
     */
    where?: DeleteWalletWhereInput
    /**
     * Limit how many DeleteWallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteWalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeleteWallet upsert
   */
  export type DeleteWalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteWallet
     */
    select?: DeleteWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteWallet
     */
    omit?: DeleteWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteWalletInclude<ExtArgs> | null
    /**
     * The filter to search for the DeleteWallet to update in case it exists.
     */
    where: DeleteWalletWhereUniqueInput
    /**
     * In case the DeleteWallet found by the `where` argument doesn't exist, create a new DeleteWallet with this data.
     */
    create: XOR<DeleteWalletCreateInput, DeleteWalletUncheckedCreateInput>
    /**
     * In case the DeleteWallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeleteWalletUpdateInput, DeleteWalletUncheckedUpdateInput>
  }

  /**
   * DeleteWallet delete
   */
  export type DeleteWalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteWallet
     */
    select?: DeleteWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteWallet
     */
    omit?: DeleteWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteWalletInclude<ExtArgs> | null
    /**
     * Filter which DeleteWallet to delete.
     */
    where: DeleteWalletWhereUniqueInput
  }

  /**
   * DeleteWallet deleteMany
   */
  export type DeleteWalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeleteWallets to delete
     */
    where?: DeleteWalletWhereInput
    /**
     * Limit how many DeleteWallets to delete.
     */
    limit?: number
  }

  /**
   * DeleteWallet without action
   */
  export type DeleteWalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteWallet
     */
    select?: DeleteWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteWallet
     */
    omit?: DeleteWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteWalletInclude<ExtArgs> | null
  }


  /**
   * Model ExchangeRate
   */

  export type AggregateExchangeRate = {
    _count: ExchangeRateCountAggregateOutputType | null
    _avg: ExchangeRateAvgAggregateOutputType | null
    _sum: ExchangeRateSumAggregateOutputType | null
    _min: ExchangeRateMinAggregateOutputType | null
    _max: ExchangeRateMaxAggregateOutputType | null
  }

  export type ExchangeRateAvgAggregateOutputType = {
    solToUsdt: Decimal | null
    usdtToSol: Decimal | null
  }

  export type ExchangeRateSumAggregateOutputType = {
    solToUsdt: Decimal | null
    usdtToSol: Decimal | null
  }

  export type ExchangeRateMinAggregateOutputType = {
    id: string | null
    solToUsdt: Decimal | null
    usdtToSol: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExchangeRateMaxAggregateOutputType = {
    id: string | null
    solToUsdt: Decimal | null
    usdtToSol: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExchangeRateCountAggregateOutputType = {
    id: number
    solToUsdt: number
    usdtToSol: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExchangeRateAvgAggregateInputType = {
    solToUsdt?: true
    usdtToSol?: true
  }

  export type ExchangeRateSumAggregateInputType = {
    solToUsdt?: true
    usdtToSol?: true
  }

  export type ExchangeRateMinAggregateInputType = {
    id?: true
    solToUsdt?: true
    usdtToSol?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExchangeRateMaxAggregateInputType = {
    id?: true
    solToUsdt?: true
    usdtToSol?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExchangeRateCountAggregateInputType = {
    id?: true
    solToUsdt?: true
    usdtToSol?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExchangeRateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeRate to aggregate.
     */
    where?: ExchangeRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRates to fetch.
     */
    orderBy?: ExchangeRateOrderByWithRelationInput | ExchangeRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExchangeRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExchangeRates
    **/
    _count?: true | ExchangeRateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExchangeRateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExchangeRateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExchangeRateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExchangeRateMaxAggregateInputType
  }

  export type GetExchangeRateAggregateType<T extends ExchangeRateAggregateArgs> = {
        [P in keyof T & keyof AggregateExchangeRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExchangeRate[P]>
      : GetScalarType<T[P], AggregateExchangeRate[P]>
  }




  export type ExchangeRateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeRateWhereInput
    orderBy?: ExchangeRateOrderByWithAggregationInput | ExchangeRateOrderByWithAggregationInput[]
    by: ExchangeRateScalarFieldEnum[] | ExchangeRateScalarFieldEnum
    having?: ExchangeRateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExchangeRateCountAggregateInputType | true
    _avg?: ExchangeRateAvgAggregateInputType
    _sum?: ExchangeRateSumAggregateInputType
    _min?: ExchangeRateMinAggregateInputType
    _max?: ExchangeRateMaxAggregateInputType
  }

  export type ExchangeRateGroupByOutputType = {
    id: string
    solToUsdt: Decimal
    usdtToSol: Decimal
    createdAt: Date
    updatedAt: Date
    _count: ExchangeRateCountAggregateOutputType | null
    _avg: ExchangeRateAvgAggregateOutputType | null
    _sum: ExchangeRateSumAggregateOutputType | null
    _min: ExchangeRateMinAggregateOutputType | null
    _max: ExchangeRateMaxAggregateOutputType | null
  }

  type GetExchangeRateGroupByPayload<T extends ExchangeRateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExchangeRateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExchangeRateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExchangeRateGroupByOutputType[P]>
            : GetScalarType<T[P], ExchangeRateGroupByOutputType[P]>
        }
      >
    >


  export type ExchangeRateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solToUsdt?: boolean
    usdtToSol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exchangeRate"]>

  export type ExchangeRateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solToUsdt?: boolean
    usdtToSol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exchangeRate"]>

  export type ExchangeRateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solToUsdt?: boolean
    usdtToSol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exchangeRate"]>

  export type ExchangeRateSelectScalar = {
    id?: boolean
    solToUsdt?: boolean
    usdtToSol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExchangeRateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "solToUsdt" | "usdtToSol" | "createdAt" | "updatedAt", ExtArgs["result"]["exchangeRate"]>

  export type $ExchangeRatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExchangeRate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      solToUsdt: Prisma.Decimal
      usdtToSol: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exchangeRate"]>
    composites: {}
  }

  type ExchangeRateGetPayload<S extends boolean | null | undefined | ExchangeRateDefaultArgs> = $Result.GetResult<Prisma.$ExchangeRatePayload, S>

  type ExchangeRateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExchangeRateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExchangeRateCountAggregateInputType | true
    }

  export interface ExchangeRateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExchangeRate'], meta: { name: 'ExchangeRate' } }
    /**
     * Find zero or one ExchangeRate that matches the filter.
     * @param {ExchangeRateFindUniqueArgs} args - Arguments to find a ExchangeRate
     * @example
     * // Get one ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExchangeRateFindUniqueArgs>(args: SelectSubset<T, ExchangeRateFindUniqueArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExchangeRate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExchangeRateFindUniqueOrThrowArgs} args - Arguments to find a ExchangeRate
     * @example
     * // Get one ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExchangeRateFindUniqueOrThrowArgs>(args: SelectSubset<T, ExchangeRateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeRate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateFindFirstArgs} args - Arguments to find a ExchangeRate
     * @example
     * // Get one ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExchangeRateFindFirstArgs>(args?: SelectSubset<T, ExchangeRateFindFirstArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeRate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateFindFirstOrThrowArgs} args - Arguments to find a ExchangeRate
     * @example
     * // Get one ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExchangeRateFindFirstOrThrowArgs>(args?: SelectSubset<T, ExchangeRateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExchangeRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExchangeRates
     * const exchangeRates = await prisma.exchangeRate.findMany()
     * 
     * // Get first 10 ExchangeRates
     * const exchangeRates = await prisma.exchangeRate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exchangeRateWithIdOnly = await prisma.exchangeRate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExchangeRateFindManyArgs>(args?: SelectSubset<T, ExchangeRateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExchangeRate.
     * @param {ExchangeRateCreateArgs} args - Arguments to create a ExchangeRate.
     * @example
     * // Create one ExchangeRate
     * const ExchangeRate = await prisma.exchangeRate.create({
     *   data: {
     *     // ... data to create a ExchangeRate
     *   }
     * })
     * 
     */
    create<T extends ExchangeRateCreateArgs>(args: SelectSubset<T, ExchangeRateCreateArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExchangeRates.
     * @param {ExchangeRateCreateManyArgs} args - Arguments to create many ExchangeRates.
     * @example
     * // Create many ExchangeRates
     * const exchangeRate = await prisma.exchangeRate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExchangeRateCreateManyArgs>(args?: SelectSubset<T, ExchangeRateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExchangeRates and returns the data saved in the database.
     * @param {ExchangeRateCreateManyAndReturnArgs} args - Arguments to create many ExchangeRates.
     * @example
     * // Create many ExchangeRates
     * const exchangeRate = await prisma.exchangeRate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExchangeRates and only return the `id`
     * const exchangeRateWithIdOnly = await prisma.exchangeRate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExchangeRateCreateManyAndReturnArgs>(args?: SelectSubset<T, ExchangeRateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExchangeRate.
     * @param {ExchangeRateDeleteArgs} args - Arguments to delete one ExchangeRate.
     * @example
     * // Delete one ExchangeRate
     * const ExchangeRate = await prisma.exchangeRate.delete({
     *   where: {
     *     // ... filter to delete one ExchangeRate
     *   }
     * })
     * 
     */
    delete<T extends ExchangeRateDeleteArgs>(args: SelectSubset<T, ExchangeRateDeleteArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExchangeRate.
     * @param {ExchangeRateUpdateArgs} args - Arguments to update one ExchangeRate.
     * @example
     * // Update one ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExchangeRateUpdateArgs>(args: SelectSubset<T, ExchangeRateUpdateArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExchangeRates.
     * @param {ExchangeRateDeleteManyArgs} args - Arguments to filter ExchangeRates to delete.
     * @example
     * // Delete a few ExchangeRates
     * const { count } = await prisma.exchangeRate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExchangeRateDeleteManyArgs>(args?: SelectSubset<T, ExchangeRateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExchangeRates
     * const exchangeRate = await prisma.exchangeRate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExchangeRateUpdateManyArgs>(args: SelectSubset<T, ExchangeRateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeRates and returns the data updated in the database.
     * @param {ExchangeRateUpdateManyAndReturnArgs} args - Arguments to update many ExchangeRates.
     * @example
     * // Update many ExchangeRates
     * const exchangeRate = await prisma.exchangeRate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExchangeRates and only return the `id`
     * const exchangeRateWithIdOnly = await prisma.exchangeRate.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExchangeRateUpdateManyAndReturnArgs>(args: SelectSubset<T, ExchangeRateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExchangeRate.
     * @param {ExchangeRateUpsertArgs} args - Arguments to update or create a ExchangeRate.
     * @example
     * // Update or create a ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.upsert({
     *   create: {
     *     // ... data to create a ExchangeRate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExchangeRate we want to update
     *   }
     * })
     */
    upsert<T extends ExchangeRateUpsertArgs>(args: SelectSubset<T, ExchangeRateUpsertArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExchangeRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateCountArgs} args - Arguments to filter ExchangeRates to count.
     * @example
     * // Count the number of ExchangeRates
     * const count = await prisma.exchangeRate.count({
     *   where: {
     *     // ... the filter for the ExchangeRates we want to count
     *   }
     * })
    **/
    count<T extends ExchangeRateCountArgs>(
      args?: Subset<T, ExchangeRateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExchangeRateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExchangeRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExchangeRateAggregateArgs>(args: Subset<T, ExchangeRateAggregateArgs>): Prisma.PrismaPromise<GetExchangeRateAggregateType<T>>

    /**
     * Group by ExchangeRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateGroupByArgs} args - Group by arguments.
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
      T extends ExchangeRateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExchangeRateGroupByArgs['orderBy'] }
        : { orderBy?: ExchangeRateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExchangeRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExchangeRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExchangeRate model
   */
  readonly fields: ExchangeRateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExchangeRate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExchangeRateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ExchangeRate model
   */
  interface ExchangeRateFieldRefs {
    readonly id: FieldRef<"ExchangeRate", 'String'>
    readonly solToUsdt: FieldRef<"ExchangeRate", 'Decimal'>
    readonly usdtToSol: FieldRef<"ExchangeRate", 'Decimal'>
    readonly createdAt: FieldRef<"ExchangeRate", 'DateTime'>
    readonly updatedAt: FieldRef<"ExchangeRate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExchangeRate findUnique
   */
  export type ExchangeRateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeRate to fetch.
     */
    where: ExchangeRateWhereUniqueInput
  }

  /**
   * ExchangeRate findUniqueOrThrow
   */
  export type ExchangeRateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeRate to fetch.
     */
    where: ExchangeRateWhereUniqueInput
  }

  /**
   * ExchangeRate findFirst
   */
  export type ExchangeRateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeRate to fetch.
     */
    where?: ExchangeRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRates to fetch.
     */
    orderBy?: ExchangeRateOrderByWithRelationInput | ExchangeRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeRates.
     */
    cursor?: ExchangeRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeRates.
     */
    distinct?: ExchangeRateScalarFieldEnum | ExchangeRateScalarFieldEnum[]
  }

  /**
   * ExchangeRate findFirstOrThrow
   */
  export type ExchangeRateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeRate to fetch.
     */
    where?: ExchangeRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRates to fetch.
     */
    orderBy?: ExchangeRateOrderByWithRelationInput | ExchangeRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeRates.
     */
    cursor?: ExchangeRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeRates.
     */
    distinct?: ExchangeRateScalarFieldEnum | ExchangeRateScalarFieldEnum[]
  }

  /**
   * ExchangeRate findMany
   */
  export type ExchangeRateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeRates to fetch.
     */
    where?: ExchangeRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRates to fetch.
     */
    orderBy?: ExchangeRateOrderByWithRelationInput | ExchangeRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExchangeRates.
     */
    cursor?: ExchangeRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRates.
     */
    skip?: number
    distinct?: ExchangeRateScalarFieldEnum | ExchangeRateScalarFieldEnum[]
  }

  /**
   * ExchangeRate create
   */
  export type ExchangeRateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * The data needed to create a ExchangeRate.
     */
    data: XOR<ExchangeRateCreateInput, ExchangeRateUncheckedCreateInput>
  }

  /**
   * ExchangeRate createMany
   */
  export type ExchangeRateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExchangeRates.
     */
    data: ExchangeRateCreateManyInput | ExchangeRateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExchangeRate createManyAndReturn
   */
  export type ExchangeRateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * The data used to create many ExchangeRates.
     */
    data: ExchangeRateCreateManyInput | ExchangeRateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExchangeRate update
   */
  export type ExchangeRateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * The data needed to update a ExchangeRate.
     */
    data: XOR<ExchangeRateUpdateInput, ExchangeRateUncheckedUpdateInput>
    /**
     * Choose, which ExchangeRate to update.
     */
    where: ExchangeRateWhereUniqueInput
  }

  /**
   * ExchangeRate updateMany
   */
  export type ExchangeRateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExchangeRates.
     */
    data: XOR<ExchangeRateUpdateManyMutationInput, ExchangeRateUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeRates to update
     */
    where?: ExchangeRateWhereInput
    /**
     * Limit how many ExchangeRates to update.
     */
    limit?: number
  }

  /**
   * ExchangeRate updateManyAndReturn
   */
  export type ExchangeRateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * The data used to update ExchangeRates.
     */
    data: XOR<ExchangeRateUpdateManyMutationInput, ExchangeRateUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeRates to update
     */
    where?: ExchangeRateWhereInput
    /**
     * Limit how many ExchangeRates to update.
     */
    limit?: number
  }

  /**
   * ExchangeRate upsert
   */
  export type ExchangeRateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * The filter to search for the ExchangeRate to update in case it exists.
     */
    where: ExchangeRateWhereUniqueInput
    /**
     * In case the ExchangeRate found by the `where` argument doesn't exist, create a new ExchangeRate with this data.
     */
    create: XOR<ExchangeRateCreateInput, ExchangeRateUncheckedCreateInput>
    /**
     * In case the ExchangeRate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExchangeRateUpdateInput, ExchangeRateUncheckedUpdateInput>
  }

  /**
   * ExchangeRate delete
   */
  export type ExchangeRateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Filter which ExchangeRate to delete.
     */
    where: ExchangeRateWhereUniqueInput
  }

  /**
   * ExchangeRate deleteMany
   */
  export type ExchangeRateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeRates to delete
     */
    where?: ExchangeRateWhereInput
    /**
     * Limit how many ExchangeRates to delete.
     */
    limit?: number
  }

  /**
   * ExchangeRate without action
   */
  export type ExchangeRateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
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
    tgId: 'tgId',
    isBot: 'isBot',
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
    inviteCode: 'inviteCode',
    referralCode: 'referralCode',
    agreedToTerms: 'agreedToTerms',
    totalInvites: 'totalInvites'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    id: 'id',
    walletName: 'walletName',
    walletAddress: 'walletAddress',
    walletPrivateKey: 'walletPrivateKey',
    isDefaultWallet: 'isDefaultWallet',
    updatedAt: 'updatedAt',
    balance: 'balance',
    balanceUsd: 'balanceUsd',
    userId: 'userId'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const DeleteWalletScalarFieldEnum: {
    id: 'id',
    originalWalletId: 'originalWalletId',
    walletName: 'walletName',
    walletAddress: 'walletAddress',
    walletPrivateKey: 'walletPrivateKey',
    isDefaultWallet: 'isDefaultWallet',
    deletedAt: 'deletedAt',
    originalCreatedAt: 'originalCreatedAt',
    balance: 'balance',
    balanceUsd: 'balanceUsd',
    userId: 'userId'
  };

  export type DeleteWalletScalarFieldEnum = (typeof DeleteWalletScalarFieldEnum)[keyof typeof DeleteWalletScalarFieldEnum]


  export const ExchangeRateScalarFieldEnum: {
    id: 'id',
    solToUsdt: 'solToUsdt',
    usdtToSol: 'usdtToSol',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExchangeRateScalarFieldEnum = (typeof ExchangeRateScalarFieldEnum)[keyof typeof ExchangeRateScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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
    tgId?: BigIntFilter<"User"> | bigint | number
    isBot?: BoolNullableFilter<"User"> | boolean | null
    username?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    inviteCode?: StringFilter<"User"> | string
    referralCode?: StringFilter<"User"> | string
    agreedToTerms?: BoolFilter<"User"> | boolean
    totalInvites?: IntFilter<"User"> | number
    wallets?: WalletListRelationFilter
    deletedWallets?: DeleteWalletListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    tgId?: SortOrder
    isBot?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    inviteCode?: SortOrder
    referralCode?: SortOrder
    agreedToTerms?: SortOrder
    totalInvites?: SortOrder
    wallets?: WalletOrderByRelationAggregateInput
    deletedWallets?: DeleteWalletOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tgId?: bigint | number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    isBot?: BoolNullableFilter<"User"> | boolean | null
    username?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    inviteCode?: StringFilter<"User"> | string
    referralCode?: StringFilter<"User"> | string
    agreedToTerms?: BoolFilter<"User"> | boolean
    totalInvites?: IntFilter<"User"> | number
    wallets?: WalletListRelationFilter
    deletedWallets?: DeleteWalletListRelationFilter
  }, "id" | "tgId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    tgId?: SortOrder
    isBot?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    inviteCode?: SortOrder
    referralCode?: SortOrder
    agreedToTerms?: SortOrder
    totalInvites?: SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    tgId?: BigIntWithAggregatesFilter<"User"> | bigint | number
    isBot?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    inviteCode?: StringWithAggregatesFilter<"User"> | string
    referralCode?: StringWithAggregatesFilter<"User"> | string
    agreedToTerms?: BoolWithAggregatesFilter<"User"> | boolean
    totalInvites?: IntWithAggregatesFilter<"User"> | number
  }

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    id?: StringFilter<"Wallet"> | string
    walletName?: StringFilter<"Wallet"> | string
    walletAddress?: StringFilter<"Wallet"> | string
    walletPrivateKey?: StringFilter<"Wallet"> | string
    isDefaultWallet?: BoolFilter<"Wallet"> | boolean
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    balance?: IntFilter<"Wallet"> | number
    balanceUsd?: IntFilter<"Wallet"> | number
    userId?: StringFilter<"Wallet"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder
    walletName?: SortOrder
    walletAddress?: SortOrder
    walletPrivateKey?: SortOrder
    isDefaultWallet?: SortOrder
    updatedAt?: SortOrder
    balance?: SortOrder
    balanceUsd?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_walletAddress?: WalletUserIdWalletAddressCompoundUniqueInput
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    walletName?: StringFilter<"Wallet"> | string
    walletAddress?: StringFilter<"Wallet"> | string
    walletPrivateKey?: StringFilter<"Wallet"> | string
    isDefaultWallet?: BoolFilter<"Wallet"> | boolean
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    balance?: IntFilter<"Wallet"> | number
    balanceUsd?: IntFilter<"Wallet"> | number
    userId?: StringFilter<"Wallet"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_walletAddress">

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder
    walletName?: SortOrder
    walletAddress?: SortOrder
    walletPrivateKey?: SortOrder
    isDefaultWallet?: SortOrder
    updatedAt?: SortOrder
    balance?: SortOrder
    balanceUsd?: SortOrder
    userId?: SortOrder
    _count?: WalletCountOrderByAggregateInput
    _avg?: WalletAvgOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
    _sum?: WalletSumOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    OR?: WalletScalarWhereWithAggregatesInput[]
    NOT?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wallet"> | string
    walletName?: StringWithAggregatesFilter<"Wallet"> | string
    walletAddress?: StringWithAggregatesFilter<"Wallet"> | string
    walletPrivateKey?: StringWithAggregatesFilter<"Wallet"> | string
    isDefaultWallet?: BoolWithAggregatesFilter<"Wallet"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
    balance?: IntWithAggregatesFilter<"Wallet"> | number
    balanceUsd?: IntWithAggregatesFilter<"Wallet"> | number
    userId?: StringWithAggregatesFilter<"Wallet"> | string
  }

  export type DeleteWalletWhereInput = {
    AND?: DeleteWalletWhereInput | DeleteWalletWhereInput[]
    OR?: DeleteWalletWhereInput[]
    NOT?: DeleteWalletWhereInput | DeleteWalletWhereInput[]
    id?: StringFilter<"DeleteWallet"> | string
    originalWalletId?: StringFilter<"DeleteWallet"> | string
    walletName?: StringFilter<"DeleteWallet"> | string
    walletAddress?: StringFilter<"DeleteWallet"> | string
    walletPrivateKey?: StringFilter<"DeleteWallet"> | string
    isDefaultWallet?: BoolFilter<"DeleteWallet"> | boolean
    deletedAt?: DateTimeFilter<"DeleteWallet"> | Date | string
    originalCreatedAt?: DateTimeFilter<"DeleteWallet"> | Date | string
    balance?: IntFilter<"DeleteWallet"> | number
    balanceUsd?: IntFilter<"DeleteWallet"> | number
    userId?: StringFilter<"DeleteWallet"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DeleteWalletOrderByWithRelationInput = {
    id?: SortOrder
    originalWalletId?: SortOrder
    walletName?: SortOrder
    walletAddress?: SortOrder
    walletPrivateKey?: SortOrder
    isDefaultWallet?: SortOrder
    deletedAt?: SortOrder
    originalCreatedAt?: SortOrder
    balance?: SortOrder
    balanceUsd?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DeleteWalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_walletAddress?: DeleteWalletUserIdWalletAddressCompoundUniqueInput
    AND?: DeleteWalletWhereInput | DeleteWalletWhereInput[]
    OR?: DeleteWalletWhereInput[]
    NOT?: DeleteWalletWhereInput | DeleteWalletWhereInput[]
    originalWalletId?: StringFilter<"DeleteWallet"> | string
    walletName?: StringFilter<"DeleteWallet"> | string
    walletAddress?: StringFilter<"DeleteWallet"> | string
    walletPrivateKey?: StringFilter<"DeleteWallet"> | string
    isDefaultWallet?: BoolFilter<"DeleteWallet"> | boolean
    deletedAt?: DateTimeFilter<"DeleteWallet"> | Date | string
    originalCreatedAt?: DateTimeFilter<"DeleteWallet"> | Date | string
    balance?: IntFilter<"DeleteWallet"> | number
    balanceUsd?: IntFilter<"DeleteWallet"> | number
    userId?: StringFilter<"DeleteWallet"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_walletAddress">

  export type DeleteWalletOrderByWithAggregationInput = {
    id?: SortOrder
    originalWalletId?: SortOrder
    walletName?: SortOrder
    walletAddress?: SortOrder
    walletPrivateKey?: SortOrder
    isDefaultWallet?: SortOrder
    deletedAt?: SortOrder
    originalCreatedAt?: SortOrder
    balance?: SortOrder
    balanceUsd?: SortOrder
    userId?: SortOrder
    _count?: DeleteWalletCountOrderByAggregateInput
    _avg?: DeleteWalletAvgOrderByAggregateInput
    _max?: DeleteWalletMaxOrderByAggregateInput
    _min?: DeleteWalletMinOrderByAggregateInput
    _sum?: DeleteWalletSumOrderByAggregateInput
  }

  export type DeleteWalletScalarWhereWithAggregatesInput = {
    AND?: DeleteWalletScalarWhereWithAggregatesInput | DeleteWalletScalarWhereWithAggregatesInput[]
    OR?: DeleteWalletScalarWhereWithAggregatesInput[]
    NOT?: DeleteWalletScalarWhereWithAggregatesInput | DeleteWalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeleteWallet"> | string
    originalWalletId?: StringWithAggregatesFilter<"DeleteWallet"> | string
    walletName?: StringWithAggregatesFilter<"DeleteWallet"> | string
    walletAddress?: StringWithAggregatesFilter<"DeleteWallet"> | string
    walletPrivateKey?: StringWithAggregatesFilter<"DeleteWallet"> | string
    isDefaultWallet?: BoolWithAggregatesFilter<"DeleteWallet"> | boolean
    deletedAt?: DateTimeWithAggregatesFilter<"DeleteWallet"> | Date | string
    originalCreatedAt?: DateTimeWithAggregatesFilter<"DeleteWallet"> | Date | string
    balance?: IntWithAggregatesFilter<"DeleteWallet"> | number
    balanceUsd?: IntWithAggregatesFilter<"DeleteWallet"> | number
    userId?: StringWithAggregatesFilter<"DeleteWallet"> | string
  }

  export type ExchangeRateWhereInput = {
    AND?: ExchangeRateWhereInput | ExchangeRateWhereInput[]
    OR?: ExchangeRateWhereInput[]
    NOT?: ExchangeRateWhereInput | ExchangeRateWhereInput[]
    id?: StringFilter<"ExchangeRate"> | string
    solToUsdt?: DecimalFilter<"ExchangeRate"> | Decimal | DecimalJsLike | number | string
    usdtToSol?: DecimalFilter<"ExchangeRate"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ExchangeRate"> | Date | string
    updatedAt?: DateTimeFilter<"ExchangeRate"> | Date | string
  }

  export type ExchangeRateOrderByWithRelationInput = {
    id?: SortOrder
    solToUsdt?: SortOrder
    usdtToSol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExchangeRateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExchangeRateWhereInput | ExchangeRateWhereInput[]
    OR?: ExchangeRateWhereInput[]
    NOT?: ExchangeRateWhereInput | ExchangeRateWhereInput[]
    solToUsdt?: DecimalFilter<"ExchangeRate"> | Decimal | DecimalJsLike | number | string
    usdtToSol?: DecimalFilter<"ExchangeRate"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ExchangeRate"> | Date | string
    updatedAt?: DateTimeFilter<"ExchangeRate"> | Date | string
  }, "id">

  export type ExchangeRateOrderByWithAggregationInput = {
    id?: SortOrder
    solToUsdt?: SortOrder
    usdtToSol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExchangeRateCountOrderByAggregateInput
    _avg?: ExchangeRateAvgOrderByAggregateInput
    _max?: ExchangeRateMaxOrderByAggregateInput
    _min?: ExchangeRateMinOrderByAggregateInput
    _sum?: ExchangeRateSumOrderByAggregateInput
  }

  export type ExchangeRateScalarWhereWithAggregatesInput = {
    AND?: ExchangeRateScalarWhereWithAggregatesInput | ExchangeRateScalarWhereWithAggregatesInput[]
    OR?: ExchangeRateScalarWhereWithAggregatesInput[]
    NOT?: ExchangeRateScalarWhereWithAggregatesInput | ExchangeRateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExchangeRate"> | string
    solToUsdt?: DecimalWithAggregatesFilter<"ExchangeRate"> | Decimal | DecimalJsLike | number | string
    usdtToSol?: DecimalWithAggregatesFilter<"ExchangeRate"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"ExchangeRate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExchangeRate"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    tgId: bigint | number
    isBot?: boolean | null
    username?: string | null
    firstName?: string | null
    lastName?: string | null
    inviteCode: string
    referralCode: string
    agreedToTerms?: boolean
    totalInvites?: number
    wallets?: WalletCreateNestedManyWithoutUserInput
    deletedWallets?: DeleteWalletCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    tgId: bigint | number
    isBot?: boolean | null
    username?: string | null
    firstName?: string | null
    lastName?: string | null
    inviteCode: string
    referralCode: string
    agreedToTerms?: boolean
    totalInvites?: number
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    deletedWallets?: DeleteWalletUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgId?: BigIntFieldUpdateOperationsInput | bigint | number
    isBot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    totalInvites?: IntFieldUpdateOperationsInput | number
    wallets?: WalletUpdateManyWithoutUserNestedInput
    deletedWallets?: DeleteWalletUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgId?: BigIntFieldUpdateOperationsInput | bigint | number
    isBot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    totalInvites?: IntFieldUpdateOperationsInput | number
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    deletedWallets?: DeleteWalletUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    tgId: bigint | number
    isBot?: boolean | null
    username?: string | null
    firstName?: string | null
    lastName?: string | null
    inviteCode: string
    referralCode: string
    agreedToTerms?: boolean
    totalInvites?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgId?: BigIntFieldUpdateOperationsInput | bigint | number
    isBot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    totalInvites?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgId?: BigIntFieldUpdateOperationsInput | bigint | number
    isBot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    totalInvites?: IntFieldUpdateOperationsInput | number
  }

  export type WalletCreateInput = {
    id?: string
    walletName: string
    walletAddress: string
    walletPrivateKey: string
    isDefaultWallet: boolean
    updatedAt?: Date | string
    balance?: number
    balanceUsd?: number
    user: UserCreateNestedOneWithoutWalletsInput
  }

  export type WalletUncheckedCreateInput = {
    id?: string
    walletName: string
    walletAddress: string
    walletPrivateKey: string
    isDefaultWallet: boolean
    updatedAt?: Date | string
    balance?: number
    balanceUsd?: number
    userId: string
  }

  export type WalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletName?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    walletPrivateKey?: StringFieldUpdateOperationsInput | string
    isDefaultWallet?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    balanceUsd?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutWalletsNestedInput
  }

  export type WalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletName?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    walletPrivateKey?: StringFieldUpdateOperationsInput | string
    isDefaultWallet?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    balanceUsd?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WalletCreateManyInput = {
    id?: string
    walletName: string
    walletAddress: string
    walletPrivateKey: string
    isDefaultWallet: boolean
    updatedAt?: Date | string
    balance?: number
    balanceUsd?: number
    userId: string
  }

  export type WalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletName?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    walletPrivateKey?: StringFieldUpdateOperationsInput | string
    isDefaultWallet?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    balanceUsd?: IntFieldUpdateOperationsInput | number
  }

  export type WalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletName?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    walletPrivateKey?: StringFieldUpdateOperationsInput | string
    isDefaultWallet?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    balanceUsd?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DeleteWalletCreateInput = {
    id?: string
    originalWalletId: string
    walletName: string
    walletAddress: string
    walletPrivateKey: string
    isDefaultWallet: boolean
    deletedAt?: Date | string
    originalCreatedAt: Date | string
    balance: number
    balanceUsd: number
    user: UserCreateNestedOneWithoutDeletedWalletsInput
  }

  export type DeleteWalletUncheckedCreateInput = {
    id?: string
    originalWalletId: string
    walletName: string
    walletAddress: string
    walletPrivateKey: string
    isDefaultWallet: boolean
    deletedAt?: Date | string
    originalCreatedAt: Date | string
    balance: number
    balanceUsd: number
    userId: string
  }

  export type DeleteWalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalWalletId?: StringFieldUpdateOperationsInput | string
    walletName?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    walletPrivateKey?: StringFieldUpdateOperationsInput | string
    isDefaultWallet?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    balanceUsd?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDeletedWalletsNestedInput
  }

  export type DeleteWalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalWalletId?: StringFieldUpdateOperationsInput | string
    walletName?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    walletPrivateKey?: StringFieldUpdateOperationsInput | string
    isDefaultWallet?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    balanceUsd?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DeleteWalletCreateManyInput = {
    id?: string
    originalWalletId: string
    walletName: string
    walletAddress: string
    walletPrivateKey: string
    isDefaultWallet: boolean
    deletedAt?: Date | string
    originalCreatedAt: Date | string
    balance: number
    balanceUsd: number
    userId: string
  }

  export type DeleteWalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalWalletId?: StringFieldUpdateOperationsInput | string
    walletName?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    walletPrivateKey?: StringFieldUpdateOperationsInput | string
    isDefaultWallet?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    balanceUsd?: IntFieldUpdateOperationsInput | number
  }

  export type DeleteWalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalWalletId?: StringFieldUpdateOperationsInput | string
    walletName?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    walletPrivateKey?: StringFieldUpdateOperationsInput | string
    isDefaultWallet?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    balanceUsd?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExchangeRateCreateInput = {
    id?: string
    solToUsdt: Decimal | DecimalJsLike | number | string
    usdtToSol: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExchangeRateUncheckedCreateInput = {
    id?: string
    solToUsdt: Decimal | DecimalJsLike | number | string
    usdtToSol: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExchangeRateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    solToUsdt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdtToSol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    solToUsdt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdtToSol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateCreateManyInput = {
    id?: string
    solToUsdt: Decimal | DecimalJsLike | number | string
    usdtToSol: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExchangeRateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    solToUsdt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdtToSol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    solToUsdt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdtToSol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type WalletListRelationFilter = {
    every?: WalletWhereInput
    some?: WalletWhereInput
    none?: WalletWhereInput
  }

  export type DeleteWalletListRelationFilter = {
    every?: DeleteWalletWhereInput
    some?: DeleteWalletWhereInput
    none?: DeleteWalletWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WalletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeleteWalletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    tgId?: SortOrder
    isBot?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    inviteCode?: SortOrder
    referralCode?: SortOrder
    agreedToTerms?: SortOrder
    totalInvites?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    tgId?: SortOrder
    totalInvites?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    tgId?: SortOrder
    isBot?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    inviteCode?: SortOrder
    referralCode?: SortOrder
    agreedToTerms?: SortOrder
    totalInvites?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    tgId?: SortOrder
    isBot?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    inviteCode?: SortOrder
    referralCode?: SortOrder
    agreedToTerms?: SortOrder
    totalInvites?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    tgId?: SortOrder
    totalInvites?: SortOrder
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WalletUserIdWalletAddressCompoundUniqueInput = {
    userId: string
    walletAddress: string
  }

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder
    walletName?: SortOrder
    walletAddress?: SortOrder
    walletPrivateKey?: SortOrder
    isDefaultWallet?: SortOrder
    updatedAt?: SortOrder
    balance?: SortOrder
    balanceUsd?: SortOrder
    userId?: SortOrder
  }

  export type WalletAvgOrderByAggregateInput = {
    balance?: SortOrder
    balanceUsd?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder
    walletName?: SortOrder
    walletAddress?: SortOrder
    walletPrivateKey?: SortOrder
    isDefaultWallet?: SortOrder
    updatedAt?: SortOrder
    balance?: SortOrder
    balanceUsd?: SortOrder
    userId?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder
    walletName?: SortOrder
    walletAddress?: SortOrder
    walletPrivateKey?: SortOrder
    isDefaultWallet?: SortOrder
    updatedAt?: SortOrder
    balance?: SortOrder
    balanceUsd?: SortOrder
    userId?: SortOrder
  }

  export type WalletSumOrderByAggregateInput = {
    balance?: SortOrder
    balanceUsd?: SortOrder
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

  export type DeleteWalletUserIdWalletAddressCompoundUniqueInput = {
    userId: string
    walletAddress: string
  }

  export type DeleteWalletCountOrderByAggregateInput = {
    id?: SortOrder
    originalWalletId?: SortOrder
    walletName?: SortOrder
    walletAddress?: SortOrder
    walletPrivateKey?: SortOrder
    isDefaultWallet?: SortOrder
    deletedAt?: SortOrder
    originalCreatedAt?: SortOrder
    balance?: SortOrder
    balanceUsd?: SortOrder
    userId?: SortOrder
  }

  export type DeleteWalletAvgOrderByAggregateInput = {
    balance?: SortOrder
    balanceUsd?: SortOrder
  }

  export type DeleteWalletMaxOrderByAggregateInput = {
    id?: SortOrder
    originalWalletId?: SortOrder
    walletName?: SortOrder
    walletAddress?: SortOrder
    walletPrivateKey?: SortOrder
    isDefaultWallet?: SortOrder
    deletedAt?: SortOrder
    originalCreatedAt?: SortOrder
    balance?: SortOrder
    balanceUsd?: SortOrder
    userId?: SortOrder
  }

  export type DeleteWalletMinOrderByAggregateInput = {
    id?: SortOrder
    originalWalletId?: SortOrder
    walletName?: SortOrder
    walletAddress?: SortOrder
    walletPrivateKey?: SortOrder
    isDefaultWallet?: SortOrder
    deletedAt?: SortOrder
    originalCreatedAt?: SortOrder
    balance?: SortOrder
    balanceUsd?: SortOrder
    userId?: SortOrder
  }

  export type DeleteWalletSumOrderByAggregateInput = {
    balance?: SortOrder
    balanceUsd?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ExchangeRateCountOrderByAggregateInput = {
    id?: SortOrder
    solToUsdt?: SortOrder
    usdtToSol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExchangeRateAvgOrderByAggregateInput = {
    solToUsdt?: SortOrder
    usdtToSol?: SortOrder
  }

  export type ExchangeRateMaxOrderByAggregateInput = {
    id?: SortOrder
    solToUsdt?: SortOrder
    usdtToSol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExchangeRateMinOrderByAggregateInput = {
    id?: SortOrder
    solToUsdt?: SortOrder
    usdtToSol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExchangeRateSumOrderByAggregateInput = {
    solToUsdt?: SortOrder
    usdtToSol?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type WalletCreateNestedManyWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
  }

  export type DeleteWalletCreateNestedManyWithoutUserInput = {
    create?: XOR<DeleteWalletCreateWithoutUserInput, DeleteWalletUncheckedCreateWithoutUserInput> | DeleteWalletCreateWithoutUserInput[] | DeleteWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeleteWalletCreateOrConnectWithoutUserInput | DeleteWalletCreateOrConnectWithoutUserInput[]
    createMany?: DeleteWalletCreateManyUserInputEnvelope
    connect?: DeleteWalletWhereUniqueInput | DeleteWalletWhereUniqueInput[]
  }

  export type WalletUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
  }

  export type DeleteWalletUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeleteWalletCreateWithoutUserInput, DeleteWalletUncheckedCreateWithoutUserInput> | DeleteWalletCreateWithoutUserInput[] | DeleteWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeleteWalletCreateOrConnectWithoutUserInput | DeleteWalletCreateOrConnectWithoutUserInput[]
    createMany?: DeleteWalletCreateManyUserInputEnvelope
    connect?: DeleteWalletWhereUniqueInput | DeleteWalletWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WalletUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    upsert?: WalletUpsertWithWhereUniqueWithoutUserInput | WalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    set?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    disconnect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    delete?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    update?: WalletUpdateWithWhereUniqueWithoutUserInput | WalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalletUpdateManyWithWhereWithoutUserInput | WalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalletScalarWhereInput | WalletScalarWhereInput[]
  }

  export type DeleteWalletUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeleteWalletCreateWithoutUserInput, DeleteWalletUncheckedCreateWithoutUserInput> | DeleteWalletCreateWithoutUserInput[] | DeleteWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeleteWalletCreateOrConnectWithoutUserInput | DeleteWalletCreateOrConnectWithoutUserInput[]
    upsert?: DeleteWalletUpsertWithWhereUniqueWithoutUserInput | DeleteWalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeleteWalletCreateManyUserInputEnvelope
    set?: DeleteWalletWhereUniqueInput | DeleteWalletWhereUniqueInput[]
    disconnect?: DeleteWalletWhereUniqueInput | DeleteWalletWhereUniqueInput[]
    delete?: DeleteWalletWhereUniqueInput | DeleteWalletWhereUniqueInput[]
    connect?: DeleteWalletWhereUniqueInput | DeleteWalletWhereUniqueInput[]
    update?: DeleteWalletUpdateWithWhereUniqueWithoutUserInput | DeleteWalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeleteWalletUpdateManyWithWhereWithoutUserInput | DeleteWalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeleteWalletScalarWhereInput | DeleteWalletScalarWhereInput[]
  }

  export type WalletUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    upsert?: WalletUpsertWithWhereUniqueWithoutUserInput | WalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    set?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    disconnect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    delete?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    update?: WalletUpdateWithWhereUniqueWithoutUserInput | WalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalletUpdateManyWithWhereWithoutUserInput | WalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalletScalarWhereInput | WalletScalarWhereInput[]
  }

  export type DeleteWalletUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeleteWalletCreateWithoutUserInput, DeleteWalletUncheckedCreateWithoutUserInput> | DeleteWalletCreateWithoutUserInput[] | DeleteWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeleteWalletCreateOrConnectWithoutUserInput | DeleteWalletCreateOrConnectWithoutUserInput[]
    upsert?: DeleteWalletUpsertWithWhereUniqueWithoutUserInput | DeleteWalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeleteWalletCreateManyUserInputEnvelope
    set?: DeleteWalletWhereUniqueInput | DeleteWalletWhereUniqueInput[]
    disconnect?: DeleteWalletWhereUniqueInput | DeleteWalletWhereUniqueInput[]
    delete?: DeleteWalletWhereUniqueInput | DeleteWalletWhereUniqueInput[]
    connect?: DeleteWalletWhereUniqueInput | DeleteWalletWhereUniqueInput[]
    update?: DeleteWalletUpdateWithWhereUniqueWithoutUserInput | DeleteWalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeleteWalletUpdateManyWithWhereWithoutUserInput | DeleteWalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeleteWalletScalarWhereInput | DeleteWalletScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWalletsInput = {
    create?: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutWalletsNestedInput = {
    create?: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletsInput
    upsert?: UserUpsertWithoutWalletsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletsInput, UserUpdateWithoutWalletsInput>, UserUncheckedUpdateWithoutWalletsInput>
  }

  export type UserCreateNestedOneWithoutDeletedWalletsInput = {
    create?: XOR<UserCreateWithoutDeletedWalletsInput, UserUncheckedCreateWithoutDeletedWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedWalletsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDeletedWalletsNestedInput = {
    create?: XOR<UserCreateWithoutDeletedWalletsInput, UserUncheckedCreateWithoutDeletedWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedWalletsInput
    upsert?: UserUpsertWithoutDeletedWalletsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeletedWalletsInput, UserUpdateWithoutDeletedWalletsInput>, UserUncheckedUpdateWithoutDeletedWalletsInput>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type WalletCreateWithoutUserInput = {
    id?: string
    walletName: string
    walletAddress: string
    walletPrivateKey: string
    isDefaultWallet: boolean
    updatedAt?: Date | string
    balance?: number
    balanceUsd?: number
  }

  export type WalletUncheckedCreateWithoutUserInput = {
    id?: string
    walletName: string
    walletAddress: string
    walletPrivateKey: string
    isDefaultWallet: boolean
    updatedAt?: Date | string
    balance?: number
    balanceUsd?: number
  }

  export type WalletCreateOrConnectWithoutUserInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type WalletCreateManyUserInputEnvelope = {
    data: WalletCreateManyUserInput | WalletCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DeleteWalletCreateWithoutUserInput = {
    id?: string
    originalWalletId: string
    walletName: string
    walletAddress: string
    walletPrivateKey: string
    isDefaultWallet: boolean
    deletedAt?: Date | string
    originalCreatedAt: Date | string
    balance: number
    balanceUsd: number
  }

  export type DeleteWalletUncheckedCreateWithoutUserInput = {
    id?: string
    originalWalletId: string
    walletName: string
    walletAddress: string
    walletPrivateKey: string
    isDefaultWallet: boolean
    deletedAt?: Date | string
    originalCreatedAt: Date | string
    balance: number
    balanceUsd: number
  }

  export type DeleteWalletCreateOrConnectWithoutUserInput = {
    where: DeleteWalletWhereUniqueInput
    create: XOR<DeleteWalletCreateWithoutUserInput, DeleteWalletUncheckedCreateWithoutUserInput>
  }

  export type DeleteWalletCreateManyUserInputEnvelope = {
    data: DeleteWalletCreateManyUserInput | DeleteWalletCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WalletUpsertWithWhereUniqueWithoutUserInput = {
    where: WalletWhereUniqueInput
    update: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type WalletUpdateWithWhereUniqueWithoutUserInput = {
    where: WalletWhereUniqueInput
    data: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
  }

  export type WalletUpdateManyWithWhereWithoutUserInput = {
    where: WalletScalarWhereInput
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyWithoutUserInput>
  }

  export type WalletScalarWhereInput = {
    AND?: WalletScalarWhereInput | WalletScalarWhereInput[]
    OR?: WalletScalarWhereInput[]
    NOT?: WalletScalarWhereInput | WalletScalarWhereInput[]
    id?: StringFilter<"Wallet"> | string
    walletName?: StringFilter<"Wallet"> | string
    walletAddress?: StringFilter<"Wallet"> | string
    walletPrivateKey?: StringFilter<"Wallet"> | string
    isDefaultWallet?: BoolFilter<"Wallet"> | boolean
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    balance?: IntFilter<"Wallet"> | number
    balanceUsd?: IntFilter<"Wallet"> | number
    userId?: StringFilter<"Wallet"> | string
  }

  export type DeleteWalletUpsertWithWhereUniqueWithoutUserInput = {
    where: DeleteWalletWhereUniqueInput
    update: XOR<DeleteWalletUpdateWithoutUserInput, DeleteWalletUncheckedUpdateWithoutUserInput>
    create: XOR<DeleteWalletCreateWithoutUserInput, DeleteWalletUncheckedCreateWithoutUserInput>
  }

  export type DeleteWalletUpdateWithWhereUniqueWithoutUserInput = {
    where: DeleteWalletWhereUniqueInput
    data: XOR<DeleteWalletUpdateWithoutUserInput, DeleteWalletUncheckedUpdateWithoutUserInput>
  }

  export type DeleteWalletUpdateManyWithWhereWithoutUserInput = {
    where: DeleteWalletScalarWhereInput
    data: XOR<DeleteWalletUpdateManyMutationInput, DeleteWalletUncheckedUpdateManyWithoutUserInput>
  }

  export type DeleteWalletScalarWhereInput = {
    AND?: DeleteWalletScalarWhereInput | DeleteWalletScalarWhereInput[]
    OR?: DeleteWalletScalarWhereInput[]
    NOT?: DeleteWalletScalarWhereInput | DeleteWalletScalarWhereInput[]
    id?: StringFilter<"DeleteWallet"> | string
    originalWalletId?: StringFilter<"DeleteWallet"> | string
    walletName?: StringFilter<"DeleteWallet"> | string
    walletAddress?: StringFilter<"DeleteWallet"> | string
    walletPrivateKey?: StringFilter<"DeleteWallet"> | string
    isDefaultWallet?: BoolFilter<"DeleteWallet"> | boolean
    deletedAt?: DateTimeFilter<"DeleteWallet"> | Date | string
    originalCreatedAt?: DateTimeFilter<"DeleteWallet"> | Date | string
    balance?: IntFilter<"DeleteWallet"> | number
    balanceUsd?: IntFilter<"DeleteWallet"> | number
    userId?: StringFilter<"DeleteWallet"> | string
  }

  export type UserCreateWithoutWalletsInput = {
    id?: string
    tgId: bigint | number
    isBot?: boolean | null
    username?: string | null
    firstName?: string | null
    lastName?: string | null
    inviteCode: string
    referralCode: string
    agreedToTerms?: boolean
    totalInvites?: number
    deletedWallets?: DeleteWalletCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWalletsInput = {
    id?: string
    tgId: bigint | number
    isBot?: boolean | null
    username?: string | null
    firstName?: string | null
    lastName?: string | null
    inviteCode: string
    referralCode: string
    agreedToTerms?: boolean
    totalInvites?: number
    deletedWallets?: DeleteWalletUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWalletsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
  }

  export type UserUpsertWithoutWalletsInput = {
    update: XOR<UserUpdateWithoutWalletsInput, UserUncheckedUpdateWithoutWalletsInput>
    create: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletsInput, UserUncheckedUpdateWithoutWalletsInput>
  }

  export type UserUpdateWithoutWalletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgId?: BigIntFieldUpdateOperationsInput | bigint | number
    isBot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    totalInvites?: IntFieldUpdateOperationsInput | number
    deletedWallets?: DeleteWalletUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgId?: BigIntFieldUpdateOperationsInput | bigint | number
    isBot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    totalInvites?: IntFieldUpdateOperationsInput | number
    deletedWallets?: DeleteWalletUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDeletedWalletsInput = {
    id?: string
    tgId: bigint | number
    isBot?: boolean | null
    username?: string | null
    firstName?: string | null
    lastName?: string | null
    inviteCode: string
    referralCode: string
    agreedToTerms?: boolean
    totalInvites?: number
    wallets?: WalletCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDeletedWalletsInput = {
    id?: string
    tgId: bigint | number
    isBot?: boolean | null
    username?: string | null
    firstName?: string | null
    lastName?: string | null
    inviteCode: string
    referralCode: string
    agreedToTerms?: boolean
    totalInvites?: number
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDeletedWalletsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeletedWalletsInput, UserUncheckedCreateWithoutDeletedWalletsInput>
  }

  export type UserUpsertWithoutDeletedWalletsInput = {
    update: XOR<UserUpdateWithoutDeletedWalletsInput, UserUncheckedUpdateWithoutDeletedWalletsInput>
    create: XOR<UserCreateWithoutDeletedWalletsInput, UserUncheckedCreateWithoutDeletedWalletsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeletedWalletsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeletedWalletsInput, UserUncheckedUpdateWithoutDeletedWalletsInput>
  }

  export type UserUpdateWithoutDeletedWalletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgId?: BigIntFieldUpdateOperationsInput | bigint | number
    isBot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    totalInvites?: IntFieldUpdateOperationsInput | number
    wallets?: WalletUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeletedWalletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tgId?: BigIntFieldUpdateOperationsInput | bigint | number
    isBot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    agreedToTerms?: BoolFieldUpdateOperationsInput | boolean
    totalInvites?: IntFieldUpdateOperationsInput | number
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WalletCreateManyUserInput = {
    id?: string
    walletName: string
    walletAddress: string
    walletPrivateKey: string
    isDefaultWallet: boolean
    updatedAt?: Date | string
    balance?: number
    balanceUsd?: number
  }

  export type DeleteWalletCreateManyUserInput = {
    id?: string
    originalWalletId: string
    walletName: string
    walletAddress: string
    walletPrivateKey: string
    isDefaultWallet: boolean
    deletedAt?: Date | string
    originalCreatedAt: Date | string
    balance: number
    balanceUsd: number
  }

  export type WalletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletName?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    walletPrivateKey?: StringFieldUpdateOperationsInput | string
    isDefaultWallet?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    balanceUsd?: IntFieldUpdateOperationsInput | number
  }

  export type WalletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletName?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    walletPrivateKey?: StringFieldUpdateOperationsInput | string
    isDefaultWallet?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    balanceUsd?: IntFieldUpdateOperationsInput | number
  }

  export type WalletUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletName?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    walletPrivateKey?: StringFieldUpdateOperationsInput | string
    isDefaultWallet?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    balanceUsd?: IntFieldUpdateOperationsInput | number
  }

  export type DeleteWalletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalWalletId?: StringFieldUpdateOperationsInput | string
    walletName?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    walletPrivateKey?: StringFieldUpdateOperationsInput | string
    isDefaultWallet?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    balanceUsd?: IntFieldUpdateOperationsInput | number
  }

  export type DeleteWalletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalWalletId?: StringFieldUpdateOperationsInput | string
    walletName?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    walletPrivateKey?: StringFieldUpdateOperationsInput | string
    isDefaultWallet?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    balanceUsd?: IntFieldUpdateOperationsInput | number
  }

  export type DeleteWalletUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalWalletId?: StringFieldUpdateOperationsInput | string
    walletName?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    walletPrivateKey?: StringFieldUpdateOperationsInput | string
    isDefaultWallet?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    balanceUsd?: IntFieldUpdateOperationsInput | number
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