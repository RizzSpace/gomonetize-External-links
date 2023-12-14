
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DigitalProduct
 * 
 */
export type DigitalProduct = $Result.DefaultSelection<Prisma.$DigitalProductPayload>
/**
 * Model CustomerInformation
 * 
 */
export type CustomerInformation = $Result.DefaultSelection<Prisma.$CustomerInformationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DigitalProducts
 * const digitalProducts = await prisma.digitalProduct.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DigitalProducts
   * const digitalProducts = await prisma.digitalProduct.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.digitalProduct`: Exposes CRUD operations for the **DigitalProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DigitalProducts
    * const digitalProducts = await prisma.digitalProduct.findMany()
    * ```
    */
  get digitalProduct(): Prisma.DigitalProductDelegate<ExtArgs>;

  /**
   * `prisma.customerInformation`: Exposes CRUD operations for the **CustomerInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerInformations
    * const customerInformations = await prisma.customerInformation.findMany()
    * ```
    */
  get customerInformation(): Prisma.CustomerInformationDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    DigitalProduct: 'DigitalProduct',
    CustomerInformation: 'CustomerInformation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'digitalProduct' | 'customerInformation'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      DigitalProduct: {
        payload: Prisma.$DigitalProductPayload<ExtArgs>
        fields: Prisma.DigitalProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DigitalProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DigitalProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DigitalProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DigitalProductPayload>
          }
          findFirst: {
            args: Prisma.DigitalProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DigitalProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DigitalProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DigitalProductPayload>
          }
          findMany: {
            args: Prisma.DigitalProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DigitalProductPayload>[]
          }
          create: {
            args: Prisma.DigitalProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DigitalProductPayload>
          }
          createMany: {
            args: Prisma.DigitalProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DigitalProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DigitalProductPayload>
          }
          update: {
            args: Prisma.DigitalProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DigitalProductPayload>
          }
          deleteMany: {
            args: Prisma.DigitalProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DigitalProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DigitalProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DigitalProductPayload>
          }
          aggregate: {
            args: Prisma.DigitalProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDigitalProduct>
          }
          groupBy: {
            args: Prisma.DigitalProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DigitalProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.DigitalProductCountArgs<ExtArgs>,
            result: $Utils.Optional<DigitalProductCountAggregateOutputType> | number
          }
        }
      }
      CustomerInformation: {
        payload: Prisma.$CustomerInformationPayload<ExtArgs>
        fields: Prisma.CustomerInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerInformationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerInformationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerInformationPayload>
          }
          findFirst: {
            args: Prisma.CustomerInformationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerInformationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerInformationPayload>
          }
          findMany: {
            args: Prisma.CustomerInformationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerInformationPayload>[]
          }
          create: {
            args: Prisma.CustomerInformationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerInformationPayload>
          }
          createMany: {
            args: Prisma.CustomerInformationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CustomerInformationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerInformationPayload>
          }
          update: {
            args: Prisma.CustomerInformationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerInformationPayload>
          }
          deleteMany: {
            args: Prisma.CustomerInformationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerInformationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CustomerInformationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerInformationPayload>
          }
          aggregate: {
            args: Prisma.CustomerInformationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCustomerInformation>
          }
          groupBy: {
            args: Prisma.CustomerInformationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CustomerInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerInformationCountArgs<ExtArgs>,
            result: $Utils.Optional<CustomerInformationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'update'
    | 'updateMany'
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
   * Models
   */

  /**
   * Model DigitalProduct
   */

  export type AggregateDigitalProduct = {
    _count: DigitalProductCountAggregateOutputType | null
    _avg: DigitalProductAvgAggregateOutputType | null
    _sum: DigitalProductSumAggregateOutputType | null
    _min: DigitalProductMinAggregateOutputType | null
    _max: DigitalProductMaxAggregateOutputType | null
  }

  export type DigitalProductAvgAggregateOutputType = {
    product_id: number | null
    user_id: number | null
    pricing: number | null
    pageViews: number | null
    salesConverted: number | null
  }

  export type DigitalProductSumAggregateOutputType = {
    product_id: number | null
    user_id: number | null
    pricing: number | null
    pageViews: number | null
    salesConverted: number | null
  }

  export type DigitalProductMinAggregateOutputType = {
    product_id: number | null
    user_id: number | null
    product_img_link: string | null
    heading: string | null
    subheading: string | null
    description: string | null
    pricing: number | null
    product_domain: string | null
    file_url: string | null
    button_title: string | null
    email: boolean | null
    name: boolean | null
    mobile: boolean | null
    pageViews: number | null
    salesConverted: number | null
    pageViewUpdatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DigitalProductMaxAggregateOutputType = {
    product_id: number | null
    user_id: number | null
    product_img_link: string | null
    heading: string | null
    subheading: string | null
    description: string | null
    pricing: number | null
    product_domain: string | null
    file_url: string | null
    button_title: string | null
    email: boolean | null
    name: boolean | null
    mobile: boolean | null
    pageViews: number | null
    salesConverted: number | null
    pageViewUpdatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DigitalProductCountAggregateOutputType = {
    product_id: number
    user_id: number
    product_img_link: number
    heading: number
    subheading: number
    description: number
    pricing: number
    product_domain: number
    file_url: number
    button_title: number
    email: number
    name: number
    mobile: number
    pageViews: number
    salesConverted: number
    pageViewUpdatedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DigitalProductAvgAggregateInputType = {
    product_id?: true
    user_id?: true
    pricing?: true
    pageViews?: true
    salesConverted?: true
  }

  export type DigitalProductSumAggregateInputType = {
    product_id?: true
    user_id?: true
    pricing?: true
    pageViews?: true
    salesConverted?: true
  }

  export type DigitalProductMinAggregateInputType = {
    product_id?: true
    user_id?: true
    product_img_link?: true
    heading?: true
    subheading?: true
    description?: true
    pricing?: true
    product_domain?: true
    file_url?: true
    button_title?: true
    email?: true
    name?: true
    mobile?: true
    pageViews?: true
    salesConverted?: true
    pageViewUpdatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DigitalProductMaxAggregateInputType = {
    product_id?: true
    user_id?: true
    product_img_link?: true
    heading?: true
    subheading?: true
    description?: true
    pricing?: true
    product_domain?: true
    file_url?: true
    button_title?: true
    email?: true
    name?: true
    mobile?: true
    pageViews?: true
    salesConverted?: true
    pageViewUpdatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DigitalProductCountAggregateInputType = {
    product_id?: true
    user_id?: true
    product_img_link?: true
    heading?: true
    subheading?: true
    description?: true
    pricing?: true
    product_domain?: true
    file_url?: true
    button_title?: true
    email?: true
    name?: true
    mobile?: true
    pageViews?: true
    salesConverted?: true
    pageViewUpdatedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DigitalProductAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DigitalProduct to aggregate.
     */
    where?: DigitalProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalProducts to fetch.
     */
    orderBy?: DigitalProductOrderByWithRelationInput | DigitalProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DigitalProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DigitalProducts
    **/
    _count?: true | DigitalProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DigitalProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DigitalProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DigitalProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DigitalProductMaxAggregateInputType
  }

  export type GetDigitalProductAggregateType<T extends DigitalProductAggregateArgs> = {
        [P in keyof T & keyof AggregateDigitalProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDigitalProduct[P]>
      : GetScalarType<T[P], AggregateDigitalProduct[P]>
  }




  export type DigitalProductGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DigitalProductWhereInput
    orderBy?: DigitalProductOrderByWithAggregationInput | DigitalProductOrderByWithAggregationInput[]
    by: DigitalProductScalarFieldEnum[] | DigitalProductScalarFieldEnum
    having?: DigitalProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DigitalProductCountAggregateInputType | true
    _avg?: DigitalProductAvgAggregateInputType
    _sum?: DigitalProductSumAggregateInputType
    _min?: DigitalProductMinAggregateInputType
    _max?: DigitalProductMaxAggregateInputType
  }

  export type DigitalProductGroupByOutputType = {
    product_id: number
    user_id: number
    product_img_link: string
    heading: string
    subheading: string
    description: string
    pricing: number
    product_domain: string
    file_url: string
    button_title: string
    email: boolean | null
    name: boolean | null
    mobile: boolean | null
    pageViews: number
    salesConverted: number
    pageViewUpdatedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: DigitalProductCountAggregateOutputType | null
    _avg: DigitalProductAvgAggregateOutputType | null
    _sum: DigitalProductSumAggregateOutputType | null
    _min: DigitalProductMinAggregateOutputType | null
    _max: DigitalProductMaxAggregateOutputType | null
  }

  type GetDigitalProductGroupByPayload<T extends DigitalProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DigitalProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DigitalProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DigitalProductGroupByOutputType[P]>
            : GetScalarType<T[P], DigitalProductGroupByOutputType[P]>
        }
      >
    >


  export type DigitalProductSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    user_id?: boolean
    product_img_link?: boolean
    heading?: boolean
    subheading?: boolean
    description?: boolean
    pricing?: boolean
    product_domain?: boolean
    file_url?: boolean
    button_title?: boolean
    email?: boolean
    name?: boolean
    mobile?: boolean
    pageViews?: boolean
    salesConverted?: boolean
    pageViewUpdatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["digitalProduct"]>

  export type DigitalProductSelectScalar = {
    product_id?: boolean
    user_id?: boolean
    product_img_link?: boolean
    heading?: boolean
    subheading?: boolean
    description?: boolean
    pricing?: boolean
    product_domain?: boolean
    file_url?: boolean
    button_title?: boolean
    email?: boolean
    name?: boolean
    mobile?: boolean
    pageViews?: boolean
    salesConverted?: boolean
    pageViewUpdatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $DigitalProductPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "DigitalProduct"
    objects: {}
    scalars: $Extensions.GetResult<{
      product_id: number
      user_id: number
      product_img_link: string
      heading: string
      subheading: string
      description: string
      pricing: number
      product_domain: string
      file_url: string
      button_title: string
      email: boolean | null
      name: boolean | null
      mobile: boolean | null
      pageViews: number
      salesConverted: number
      pageViewUpdatedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["digitalProduct"]>
    composites: {}
  }


  type DigitalProductGetPayload<S extends boolean | null | undefined | DigitalProductDefaultArgs> = $Result.GetResult<Prisma.$DigitalProductPayload, S>

  type DigitalProductCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DigitalProductFindManyArgs, 'select' | 'include'> & {
      select?: DigitalProductCountAggregateInputType | true
    }

  export interface DigitalProductDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DigitalProduct'], meta: { name: 'DigitalProduct' } }
    /**
     * Find zero or one DigitalProduct that matches the filter.
     * @param {DigitalProductFindUniqueArgs} args - Arguments to find a DigitalProduct
     * @example
     * // Get one DigitalProduct
     * const digitalProduct = await prisma.digitalProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DigitalProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DigitalProductFindUniqueArgs<ExtArgs>>
    ): Prisma__DigitalProductClient<$Result.GetResult<Prisma.$DigitalProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DigitalProduct that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DigitalProductFindUniqueOrThrowArgs} args - Arguments to find a DigitalProduct
     * @example
     * // Get one DigitalProduct
     * const digitalProduct = await prisma.digitalProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DigitalProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DigitalProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DigitalProductClient<$Result.GetResult<Prisma.$DigitalProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DigitalProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalProductFindFirstArgs} args - Arguments to find a DigitalProduct
     * @example
     * // Get one DigitalProduct
     * const digitalProduct = await prisma.digitalProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DigitalProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DigitalProductFindFirstArgs<ExtArgs>>
    ): Prisma__DigitalProductClient<$Result.GetResult<Prisma.$DigitalProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DigitalProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalProductFindFirstOrThrowArgs} args - Arguments to find a DigitalProduct
     * @example
     * // Get one DigitalProduct
     * const digitalProduct = await prisma.digitalProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DigitalProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DigitalProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DigitalProductClient<$Result.GetResult<Prisma.$DigitalProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DigitalProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DigitalProducts
     * const digitalProducts = await prisma.digitalProduct.findMany()
     * 
     * // Get first 10 DigitalProducts
     * const digitalProducts = await prisma.digitalProduct.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const digitalProductWithProduct_idOnly = await prisma.digitalProduct.findMany({ select: { product_id: true } })
     * 
    **/
    findMany<T extends DigitalProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DigitalProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DigitalProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DigitalProduct.
     * @param {DigitalProductCreateArgs} args - Arguments to create a DigitalProduct.
     * @example
     * // Create one DigitalProduct
     * const DigitalProduct = await prisma.digitalProduct.create({
     *   data: {
     *     // ... data to create a DigitalProduct
     *   }
     * })
     * 
    **/
    create<T extends DigitalProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DigitalProductCreateArgs<ExtArgs>>
    ): Prisma__DigitalProductClient<$Result.GetResult<Prisma.$DigitalProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DigitalProducts.
     *     @param {DigitalProductCreateManyArgs} args - Arguments to create many DigitalProducts.
     *     @example
     *     // Create many DigitalProducts
     *     const digitalProduct = await prisma.digitalProduct.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DigitalProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DigitalProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DigitalProduct.
     * @param {DigitalProductDeleteArgs} args - Arguments to delete one DigitalProduct.
     * @example
     * // Delete one DigitalProduct
     * const DigitalProduct = await prisma.digitalProduct.delete({
     *   where: {
     *     // ... filter to delete one DigitalProduct
     *   }
     * })
     * 
    **/
    delete<T extends DigitalProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DigitalProductDeleteArgs<ExtArgs>>
    ): Prisma__DigitalProductClient<$Result.GetResult<Prisma.$DigitalProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DigitalProduct.
     * @param {DigitalProductUpdateArgs} args - Arguments to update one DigitalProduct.
     * @example
     * // Update one DigitalProduct
     * const digitalProduct = await prisma.digitalProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DigitalProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DigitalProductUpdateArgs<ExtArgs>>
    ): Prisma__DigitalProductClient<$Result.GetResult<Prisma.$DigitalProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DigitalProducts.
     * @param {DigitalProductDeleteManyArgs} args - Arguments to filter DigitalProducts to delete.
     * @example
     * // Delete a few DigitalProducts
     * const { count } = await prisma.digitalProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DigitalProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DigitalProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DigitalProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DigitalProducts
     * const digitalProduct = await prisma.digitalProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DigitalProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DigitalProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DigitalProduct.
     * @param {DigitalProductUpsertArgs} args - Arguments to update or create a DigitalProduct.
     * @example
     * // Update or create a DigitalProduct
     * const digitalProduct = await prisma.digitalProduct.upsert({
     *   create: {
     *     // ... data to create a DigitalProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DigitalProduct we want to update
     *   }
     * })
    **/
    upsert<T extends DigitalProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DigitalProductUpsertArgs<ExtArgs>>
    ): Prisma__DigitalProductClient<$Result.GetResult<Prisma.$DigitalProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DigitalProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalProductCountArgs} args - Arguments to filter DigitalProducts to count.
     * @example
     * // Count the number of DigitalProducts
     * const count = await prisma.digitalProduct.count({
     *   where: {
     *     // ... the filter for the DigitalProducts we want to count
     *   }
     * })
    **/
    count<T extends DigitalProductCountArgs>(
      args?: Subset<T, DigitalProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DigitalProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DigitalProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DigitalProductAggregateArgs>(args: Subset<T, DigitalProductAggregateArgs>): Prisma.PrismaPromise<GetDigitalProductAggregateType<T>>

    /**
     * Group by DigitalProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalProductGroupByArgs} args - Group by arguments.
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
      T extends DigitalProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DigitalProductGroupByArgs['orderBy'] }
        : { orderBy?: DigitalProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DigitalProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDigitalProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DigitalProduct model
   */
  readonly fields: DigitalProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DigitalProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DigitalProductClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DigitalProduct model
   */ 
  interface DigitalProductFieldRefs {
    readonly product_id: FieldRef<"DigitalProduct", 'Int'>
    readonly user_id: FieldRef<"DigitalProduct", 'Int'>
    readonly product_img_link: FieldRef<"DigitalProduct", 'String'>
    readonly heading: FieldRef<"DigitalProduct", 'String'>
    readonly subheading: FieldRef<"DigitalProduct", 'String'>
    readonly description: FieldRef<"DigitalProduct", 'String'>
    readonly pricing: FieldRef<"DigitalProduct", 'Int'>
    readonly product_domain: FieldRef<"DigitalProduct", 'String'>
    readonly file_url: FieldRef<"DigitalProduct", 'String'>
    readonly button_title: FieldRef<"DigitalProduct", 'String'>
    readonly email: FieldRef<"DigitalProduct", 'Boolean'>
    readonly name: FieldRef<"DigitalProduct", 'Boolean'>
    readonly mobile: FieldRef<"DigitalProduct", 'Boolean'>
    readonly pageViews: FieldRef<"DigitalProduct", 'Int'>
    readonly salesConverted: FieldRef<"DigitalProduct", 'Int'>
    readonly pageViewUpdatedAt: FieldRef<"DigitalProduct", 'DateTime'>
    readonly createdAt: FieldRef<"DigitalProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"DigitalProduct", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * DigitalProduct findUnique
   */
  export type DigitalProductFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalProduct
     */
    select?: DigitalProductSelect<ExtArgs> | null
    /**
     * Filter, which DigitalProduct to fetch.
     */
    where: DigitalProductWhereUniqueInput
  }


  /**
   * DigitalProduct findUniqueOrThrow
   */
  export type DigitalProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalProduct
     */
    select?: DigitalProductSelect<ExtArgs> | null
    /**
     * Filter, which DigitalProduct to fetch.
     */
    where: DigitalProductWhereUniqueInput
  }


  /**
   * DigitalProduct findFirst
   */
  export type DigitalProductFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalProduct
     */
    select?: DigitalProductSelect<ExtArgs> | null
    /**
     * Filter, which DigitalProduct to fetch.
     */
    where?: DigitalProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalProducts to fetch.
     */
    orderBy?: DigitalProductOrderByWithRelationInput | DigitalProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DigitalProducts.
     */
    cursor?: DigitalProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DigitalProducts.
     */
    distinct?: DigitalProductScalarFieldEnum | DigitalProductScalarFieldEnum[]
  }


  /**
   * DigitalProduct findFirstOrThrow
   */
  export type DigitalProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalProduct
     */
    select?: DigitalProductSelect<ExtArgs> | null
    /**
     * Filter, which DigitalProduct to fetch.
     */
    where?: DigitalProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalProducts to fetch.
     */
    orderBy?: DigitalProductOrderByWithRelationInput | DigitalProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DigitalProducts.
     */
    cursor?: DigitalProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DigitalProducts.
     */
    distinct?: DigitalProductScalarFieldEnum | DigitalProductScalarFieldEnum[]
  }


  /**
   * DigitalProduct findMany
   */
  export type DigitalProductFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalProduct
     */
    select?: DigitalProductSelect<ExtArgs> | null
    /**
     * Filter, which DigitalProducts to fetch.
     */
    where?: DigitalProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalProducts to fetch.
     */
    orderBy?: DigitalProductOrderByWithRelationInput | DigitalProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DigitalProducts.
     */
    cursor?: DigitalProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalProducts.
     */
    skip?: number
    distinct?: DigitalProductScalarFieldEnum | DigitalProductScalarFieldEnum[]
  }


  /**
   * DigitalProduct create
   */
  export type DigitalProductCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalProduct
     */
    select?: DigitalProductSelect<ExtArgs> | null
    /**
     * The data needed to create a DigitalProduct.
     */
    data: XOR<DigitalProductCreateInput, DigitalProductUncheckedCreateInput>
  }


  /**
   * DigitalProduct createMany
   */
  export type DigitalProductCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DigitalProducts.
     */
    data: DigitalProductCreateManyInput | DigitalProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DigitalProduct update
   */
  export type DigitalProductUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalProduct
     */
    select?: DigitalProductSelect<ExtArgs> | null
    /**
     * The data needed to update a DigitalProduct.
     */
    data: XOR<DigitalProductUpdateInput, DigitalProductUncheckedUpdateInput>
    /**
     * Choose, which DigitalProduct to update.
     */
    where: DigitalProductWhereUniqueInput
  }


  /**
   * DigitalProduct updateMany
   */
  export type DigitalProductUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DigitalProducts.
     */
    data: XOR<DigitalProductUpdateManyMutationInput, DigitalProductUncheckedUpdateManyInput>
    /**
     * Filter which DigitalProducts to update
     */
    where?: DigitalProductWhereInput
  }


  /**
   * DigitalProduct upsert
   */
  export type DigitalProductUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalProduct
     */
    select?: DigitalProductSelect<ExtArgs> | null
    /**
     * The filter to search for the DigitalProduct to update in case it exists.
     */
    where: DigitalProductWhereUniqueInput
    /**
     * In case the DigitalProduct found by the `where` argument doesn't exist, create a new DigitalProduct with this data.
     */
    create: XOR<DigitalProductCreateInput, DigitalProductUncheckedCreateInput>
    /**
     * In case the DigitalProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DigitalProductUpdateInput, DigitalProductUncheckedUpdateInput>
  }


  /**
   * DigitalProduct delete
   */
  export type DigitalProductDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalProduct
     */
    select?: DigitalProductSelect<ExtArgs> | null
    /**
     * Filter which DigitalProduct to delete.
     */
    where: DigitalProductWhereUniqueInput
  }


  /**
   * DigitalProduct deleteMany
   */
  export type DigitalProductDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DigitalProducts to delete
     */
    where?: DigitalProductWhereInput
  }


  /**
   * DigitalProduct without action
   */
  export type DigitalProductDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalProduct
     */
    select?: DigitalProductSelect<ExtArgs> | null
  }



  /**
   * Model CustomerInformation
   */

  export type AggregateCustomerInformation = {
    _count: CustomerInformationCountAggregateOutputType | null
    _avg: CustomerInformationAvgAggregateOutputType | null
    _sum: CustomerInformationSumAggregateOutputType | null
    _min: CustomerInformationMinAggregateOutputType | null
    _max: CustomerInformationMaxAggregateOutputType | null
  }

  export type CustomerInformationAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type CustomerInformationSumAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type CustomerInformationMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    name: string | null
    mobile: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerInformationMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    name: string | null
    mobile: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerInformationCountAggregateOutputType = {
    id: number
    product_id: number
    name: number
    mobile: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerInformationAvgAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type CustomerInformationSumAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type CustomerInformationMinAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    mobile?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerInformationMaxAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    mobile?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerInformationCountAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    mobile?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerInformationAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerInformation to aggregate.
     */
    where?: CustomerInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerInformations to fetch.
     */
    orderBy?: CustomerInformationOrderByWithRelationInput | CustomerInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerInformations
    **/
    _count?: true | CustomerInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerInformationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerInformationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerInformationMaxAggregateInputType
  }

  export type GetCustomerInformationAggregateType<T extends CustomerInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerInformation[P]>
      : GetScalarType<T[P], AggregateCustomerInformation[P]>
  }




  export type CustomerInformationGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CustomerInformationWhereInput
    orderBy?: CustomerInformationOrderByWithAggregationInput | CustomerInformationOrderByWithAggregationInput[]
    by: CustomerInformationScalarFieldEnum[] | CustomerInformationScalarFieldEnum
    having?: CustomerInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerInformationCountAggregateInputType | true
    _avg?: CustomerInformationAvgAggregateInputType
    _sum?: CustomerInformationSumAggregateInputType
    _min?: CustomerInformationMinAggregateInputType
    _max?: CustomerInformationMaxAggregateInputType
  }

  export type CustomerInformationGroupByOutputType = {
    id: number
    product_id: number
    name: string | null
    mobile: string | null
    email: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerInformationCountAggregateOutputType | null
    _avg: CustomerInformationAvgAggregateOutputType | null
    _sum: CustomerInformationSumAggregateOutputType | null
    _min: CustomerInformationMinAggregateOutputType | null
    _max: CustomerInformationMaxAggregateOutputType | null
  }

  type GetCustomerInformationGroupByPayload<T extends CustomerInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerInformationGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerInformationGroupByOutputType[P]>
        }
      >
    >


  export type CustomerInformationSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    name?: boolean
    mobile?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customerInformation"]>

  export type CustomerInformationSelectScalar = {
    id?: boolean
    product_id?: boolean
    name?: boolean
    mobile?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CustomerInformationPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "CustomerInformation"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      product_id: number
      name: string | null
      mobile: string | null
      email: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customerInformation"]>
    composites: {}
  }


  type CustomerInformationGetPayload<S extends boolean | null | undefined | CustomerInformationDefaultArgs> = $Result.GetResult<Prisma.$CustomerInformationPayload, S>

  type CustomerInformationCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CustomerInformationFindManyArgs, 'select' | 'include'> & {
      select?: CustomerInformationCountAggregateInputType | true
    }

  export interface CustomerInformationDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerInformation'], meta: { name: 'CustomerInformation' } }
    /**
     * Find zero or one CustomerInformation that matches the filter.
     * @param {CustomerInformationFindUniqueArgs} args - Arguments to find a CustomerInformation
     * @example
     * // Get one CustomerInformation
     * const customerInformation = await prisma.customerInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerInformationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerInformationFindUniqueArgs<ExtArgs>>
    ): Prisma__CustomerInformationClient<$Result.GetResult<Prisma.$CustomerInformationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CustomerInformation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerInformationFindUniqueOrThrowArgs} args - Arguments to find a CustomerInformation
     * @example
     * // Get one CustomerInformation
     * const customerInformation = await prisma.customerInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerInformationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerInformationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerInformationClient<$Result.GetResult<Prisma.$CustomerInformationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CustomerInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerInformationFindFirstArgs} args - Arguments to find a CustomerInformation
     * @example
     * // Get one CustomerInformation
     * const customerInformation = await prisma.customerInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerInformationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerInformationFindFirstArgs<ExtArgs>>
    ): Prisma__CustomerInformationClient<$Result.GetResult<Prisma.$CustomerInformationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CustomerInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerInformationFindFirstOrThrowArgs} args - Arguments to find a CustomerInformation
     * @example
     * // Get one CustomerInformation
     * const customerInformation = await prisma.customerInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerInformationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerInformationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerInformationClient<$Result.GetResult<Prisma.$CustomerInformationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CustomerInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerInformationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerInformations
     * const customerInformations = await prisma.customerInformation.findMany()
     * 
     * // Get first 10 CustomerInformations
     * const customerInformations = await prisma.customerInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerInformationWithIdOnly = await prisma.customerInformation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerInformationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerInformationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerInformationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CustomerInformation.
     * @param {CustomerInformationCreateArgs} args - Arguments to create a CustomerInformation.
     * @example
     * // Create one CustomerInformation
     * const CustomerInformation = await prisma.customerInformation.create({
     *   data: {
     *     // ... data to create a CustomerInformation
     *   }
     * })
     * 
    **/
    create<T extends CustomerInformationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerInformationCreateArgs<ExtArgs>>
    ): Prisma__CustomerInformationClient<$Result.GetResult<Prisma.$CustomerInformationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CustomerInformations.
     *     @param {CustomerInformationCreateManyArgs} args - Arguments to create many CustomerInformations.
     *     @example
     *     // Create many CustomerInformations
     *     const customerInformation = await prisma.customerInformation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerInformationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerInformationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustomerInformation.
     * @param {CustomerInformationDeleteArgs} args - Arguments to delete one CustomerInformation.
     * @example
     * // Delete one CustomerInformation
     * const CustomerInformation = await prisma.customerInformation.delete({
     *   where: {
     *     // ... filter to delete one CustomerInformation
     *   }
     * })
     * 
    **/
    delete<T extends CustomerInformationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerInformationDeleteArgs<ExtArgs>>
    ): Prisma__CustomerInformationClient<$Result.GetResult<Prisma.$CustomerInformationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CustomerInformation.
     * @param {CustomerInformationUpdateArgs} args - Arguments to update one CustomerInformation.
     * @example
     * // Update one CustomerInformation
     * const customerInformation = await prisma.customerInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerInformationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerInformationUpdateArgs<ExtArgs>>
    ): Prisma__CustomerInformationClient<$Result.GetResult<Prisma.$CustomerInformationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CustomerInformations.
     * @param {CustomerInformationDeleteManyArgs} args - Arguments to filter CustomerInformations to delete.
     * @example
     * // Delete a few CustomerInformations
     * const { count } = await prisma.customerInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerInformationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerInformationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerInformations
     * const customerInformation = await prisma.customerInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerInformationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerInformationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerInformation.
     * @param {CustomerInformationUpsertArgs} args - Arguments to update or create a CustomerInformation.
     * @example
     * // Update or create a CustomerInformation
     * const customerInformation = await prisma.customerInformation.upsert({
     *   create: {
     *     // ... data to create a CustomerInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerInformation we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerInformationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerInformationUpsertArgs<ExtArgs>>
    ): Prisma__CustomerInformationClient<$Result.GetResult<Prisma.$CustomerInformationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CustomerInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerInformationCountArgs} args - Arguments to filter CustomerInformations to count.
     * @example
     * // Count the number of CustomerInformations
     * const count = await prisma.customerInformation.count({
     *   where: {
     *     // ... the filter for the CustomerInformations we want to count
     *   }
     * })
    **/
    count<T extends CustomerInformationCountArgs>(
      args?: Subset<T, CustomerInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerInformationAggregateArgs>(args: Subset<T, CustomerInformationAggregateArgs>): Prisma.PrismaPromise<GetCustomerInformationAggregateType<T>>

    /**
     * Group by CustomerInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerInformationGroupByArgs} args - Group by arguments.
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
      T extends CustomerInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerInformationGroupByArgs['orderBy'] }
        : { orderBy?: CustomerInformationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerInformation model
   */
  readonly fields: CustomerInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerInformationClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CustomerInformation model
   */ 
  interface CustomerInformationFieldRefs {
    readonly id: FieldRef<"CustomerInformation", 'Int'>
    readonly product_id: FieldRef<"CustomerInformation", 'Int'>
    readonly name: FieldRef<"CustomerInformation", 'String'>
    readonly mobile: FieldRef<"CustomerInformation", 'String'>
    readonly email: FieldRef<"CustomerInformation", 'String'>
    readonly createdAt: FieldRef<"CustomerInformation", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomerInformation", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CustomerInformation findUnique
   */
  export type CustomerInformationFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerInformation
     */
    select?: CustomerInformationSelect<ExtArgs> | null
    /**
     * Filter, which CustomerInformation to fetch.
     */
    where: CustomerInformationWhereUniqueInput
  }


  /**
   * CustomerInformation findUniqueOrThrow
   */
  export type CustomerInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerInformation
     */
    select?: CustomerInformationSelect<ExtArgs> | null
    /**
     * Filter, which CustomerInformation to fetch.
     */
    where: CustomerInformationWhereUniqueInput
  }


  /**
   * CustomerInformation findFirst
   */
  export type CustomerInformationFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerInformation
     */
    select?: CustomerInformationSelect<ExtArgs> | null
    /**
     * Filter, which CustomerInformation to fetch.
     */
    where?: CustomerInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerInformations to fetch.
     */
    orderBy?: CustomerInformationOrderByWithRelationInput | CustomerInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerInformations.
     */
    cursor?: CustomerInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerInformations.
     */
    distinct?: CustomerInformationScalarFieldEnum | CustomerInformationScalarFieldEnum[]
  }


  /**
   * CustomerInformation findFirstOrThrow
   */
  export type CustomerInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerInformation
     */
    select?: CustomerInformationSelect<ExtArgs> | null
    /**
     * Filter, which CustomerInformation to fetch.
     */
    where?: CustomerInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerInformations to fetch.
     */
    orderBy?: CustomerInformationOrderByWithRelationInput | CustomerInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerInformations.
     */
    cursor?: CustomerInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerInformations.
     */
    distinct?: CustomerInformationScalarFieldEnum | CustomerInformationScalarFieldEnum[]
  }


  /**
   * CustomerInformation findMany
   */
  export type CustomerInformationFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerInformation
     */
    select?: CustomerInformationSelect<ExtArgs> | null
    /**
     * Filter, which CustomerInformations to fetch.
     */
    where?: CustomerInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerInformations to fetch.
     */
    orderBy?: CustomerInformationOrderByWithRelationInput | CustomerInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerInformations.
     */
    cursor?: CustomerInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerInformations.
     */
    skip?: number
    distinct?: CustomerInformationScalarFieldEnum | CustomerInformationScalarFieldEnum[]
  }


  /**
   * CustomerInformation create
   */
  export type CustomerInformationCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerInformation
     */
    select?: CustomerInformationSelect<ExtArgs> | null
    /**
     * The data needed to create a CustomerInformation.
     */
    data: XOR<CustomerInformationCreateInput, CustomerInformationUncheckedCreateInput>
  }


  /**
   * CustomerInformation createMany
   */
  export type CustomerInformationCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerInformations.
     */
    data: CustomerInformationCreateManyInput | CustomerInformationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CustomerInformation update
   */
  export type CustomerInformationUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerInformation
     */
    select?: CustomerInformationSelect<ExtArgs> | null
    /**
     * The data needed to update a CustomerInformation.
     */
    data: XOR<CustomerInformationUpdateInput, CustomerInformationUncheckedUpdateInput>
    /**
     * Choose, which CustomerInformation to update.
     */
    where: CustomerInformationWhereUniqueInput
  }


  /**
   * CustomerInformation updateMany
   */
  export type CustomerInformationUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerInformations.
     */
    data: XOR<CustomerInformationUpdateManyMutationInput, CustomerInformationUncheckedUpdateManyInput>
    /**
     * Filter which CustomerInformations to update
     */
    where?: CustomerInformationWhereInput
  }


  /**
   * CustomerInformation upsert
   */
  export type CustomerInformationUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerInformation
     */
    select?: CustomerInformationSelect<ExtArgs> | null
    /**
     * The filter to search for the CustomerInformation to update in case it exists.
     */
    where: CustomerInformationWhereUniqueInput
    /**
     * In case the CustomerInformation found by the `where` argument doesn't exist, create a new CustomerInformation with this data.
     */
    create: XOR<CustomerInformationCreateInput, CustomerInformationUncheckedCreateInput>
    /**
     * In case the CustomerInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerInformationUpdateInput, CustomerInformationUncheckedUpdateInput>
  }


  /**
   * CustomerInformation delete
   */
  export type CustomerInformationDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerInformation
     */
    select?: CustomerInformationSelect<ExtArgs> | null
    /**
     * Filter which CustomerInformation to delete.
     */
    where: CustomerInformationWhereUniqueInput
  }


  /**
   * CustomerInformation deleteMany
   */
  export type CustomerInformationDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerInformations to delete
     */
    where?: CustomerInformationWhereInput
  }


  /**
   * CustomerInformation without action
   */
  export type CustomerInformationDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerInformation
     */
    select?: CustomerInformationSelect<ExtArgs> | null
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


  export const DigitalProductScalarFieldEnum: {
    product_id: 'product_id',
    user_id: 'user_id',
    product_img_link: 'product_img_link',
    heading: 'heading',
    subheading: 'subheading',
    description: 'description',
    pricing: 'pricing',
    product_domain: 'product_domain',
    file_url: 'file_url',
    button_title: 'button_title',
    email: 'email',
    name: 'name',
    mobile: 'mobile',
    pageViews: 'pageViews',
    salesConverted: 'salesConverted',
    pageViewUpdatedAt: 'pageViewUpdatedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DigitalProductScalarFieldEnum = (typeof DigitalProductScalarFieldEnum)[keyof typeof DigitalProductScalarFieldEnum]


  export const CustomerInformationScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    name: 'name',
    mobile: 'mobile',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerInformationScalarFieldEnum = (typeof CustomerInformationScalarFieldEnum)[keyof typeof CustomerInformationScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type DigitalProductWhereInput = {
    AND?: DigitalProductWhereInput | DigitalProductWhereInput[]
    OR?: DigitalProductWhereInput[]
    NOT?: DigitalProductWhereInput | DigitalProductWhereInput[]
    product_id?: IntFilter<"DigitalProduct"> | number
    user_id?: IntFilter<"DigitalProduct"> | number
    product_img_link?: StringFilter<"DigitalProduct"> | string
    heading?: StringFilter<"DigitalProduct"> | string
    subheading?: StringFilter<"DigitalProduct"> | string
    description?: StringFilter<"DigitalProduct"> | string
    pricing?: IntFilter<"DigitalProduct"> | number
    product_domain?: StringFilter<"DigitalProduct"> | string
    file_url?: StringFilter<"DigitalProduct"> | string
    button_title?: StringFilter<"DigitalProduct"> | string
    email?: BoolNullableFilter<"DigitalProduct"> | boolean | null
    name?: BoolNullableFilter<"DigitalProduct"> | boolean | null
    mobile?: BoolNullableFilter<"DigitalProduct"> | boolean | null
    pageViews?: IntFilter<"DigitalProduct"> | number
    salesConverted?: IntFilter<"DigitalProduct"> | number
    pageViewUpdatedAt?: DateTimeFilter<"DigitalProduct"> | Date | string
    createdAt?: DateTimeFilter<"DigitalProduct"> | Date | string
    updatedAt?: DateTimeFilter<"DigitalProduct"> | Date | string
  }

  export type DigitalProductOrderByWithRelationInput = {
    product_id?: SortOrder
    user_id?: SortOrder
    product_img_link?: SortOrder
    heading?: SortOrder
    subheading?: SortOrder
    description?: SortOrder
    pricing?: SortOrder
    product_domain?: SortOrder
    file_url?: SortOrder
    button_title?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    pageViews?: SortOrder
    salesConverted?: SortOrder
    pageViewUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DigitalProductWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number
    AND?: DigitalProductWhereInput | DigitalProductWhereInput[]
    OR?: DigitalProductWhereInput[]
    NOT?: DigitalProductWhereInput | DigitalProductWhereInput[]
    user_id?: IntFilter<"DigitalProduct"> | number
    product_img_link?: StringFilter<"DigitalProduct"> | string
    heading?: StringFilter<"DigitalProduct"> | string
    subheading?: StringFilter<"DigitalProduct"> | string
    description?: StringFilter<"DigitalProduct"> | string
    pricing?: IntFilter<"DigitalProduct"> | number
    product_domain?: StringFilter<"DigitalProduct"> | string
    file_url?: StringFilter<"DigitalProduct"> | string
    button_title?: StringFilter<"DigitalProduct"> | string
    email?: BoolNullableFilter<"DigitalProduct"> | boolean | null
    name?: BoolNullableFilter<"DigitalProduct"> | boolean | null
    mobile?: BoolNullableFilter<"DigitalProduct"> | boolean | null
    pageViews?: IntFilter<"DigitalProduct"> | number
    salesConverted?: IntFilter<"DigitalProduct"> | number
    pageViewUpdatedAt?: DateTimeFilter<"DigitalProduct"> | Date | string
    createdAt?: DateTimeFilter<"DigitalProduct"> | Date | string
    updatedAt?: DateTimeFilter<"DigitalProduct"> | Date | string
  }, "product_id" | "product_id">

  export type DigitalProductOrderByWithAggregationInput = {
    product_id?: SortOrder
    user_id?: SortOrder
    product_img_link?: SortOrder
    heading?: SortOrder
    subheading?: SortOrder
    description?: SortOrder
    pricing?: SortOrder
    product_domain?: SortOrder
    file_url?: SortOrder
    button_title?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    pageViews?: SortOrder
    salesConverted?: SortOrder
    pageViewUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DigitalProductCountOrderByAggregateInput
    _avg?: DigitalProductAvgOrderByAggregateInput
    _max?: DigitalProductMaxOrderByAggregateInput
    _min?: DigitalProductMinOrderByAggregateInput
    _sum?: DigitalProductSumOrderByAggregateInput
  }

  export type DigitalProductScalarWhereWithAggregatesInput = {
    AND?: DigitalProductScalarWhereWithAggregatesInput | DigitalProductScalarWhereWithAggregatesInput[]
    OR?: DigitalProductScalarWhereWithAggregatesInput[]
    NOT?: DigitalProductScalarWhereWithAggregatesInput | DigitalProductScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"DigitalProduct"> | number
    user_id?: IntWithAggregatesFilter<"DigitalProduct"> | number
    product_img_link?: StringWithAggregatesFilter<"DigitalProduct"> | string
    heading?: StringWithAggregatesFilter<"DigitalProduct"> | string
    subheading?: StringWithAggregatesFilter<"DigitalProduct"> | string
    description?: StringWithAggregatesFilter<"DigitalProduct"> | string
    pricing?: IntWithAggregatesFilter<"DigitalProduct"> | number
    product_domain?: StringWithAggregatesFilter<"DigitalProduct"> | string
    file_url?: StringWithAggregatesFilter<"DigitalProduct"> | string
    button_title?: StringWithAggregatesFilter<"DigitalProduct"> | string
    email?: BoolNullableWithAggregatesFilter<"DigitalProduct"> | boolean | null
    name?: BoolNullableWithAggregatesFilter<"DigitalProduct"> | boolean | null
    mobile?: BoolNullableWithAggregatesFilter<"DigitalProduct"> | boolean | null
    pageViews?: IntWithAggregatesFilter<"DigitalProduct"> | number
    salesConverted?: IntWithAggregatesFilter<"DigitalProduct"> | number
    pageViewUpdatedAt?: DateTimeWithAggregatesFilter<"DigitalProduct"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"DigitalProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DigitalProduct"> | Date | string
  }

  export type CustomerInformationWhereInput = {
    AND?: CustomerInformationWhereInput | CustomerInformationWhereInput[]
    OR?: CustomerInformationWhereInput[]
    NOT?: CustomerInformationWhereInput | CustomerInformationWhereInput[]
    id?: IntFilter<"CustomerInformation"> | number
    product_id?: IntFilter<"CustomerInformation"> | number
    name?: StringNullableFilter<"CustomerInformation"> | string | null
    mobile?: StringNullableFilter<"CustomerInformation"> | string | null
    email?: StringNullableFilter<"CustomerInformation"> | string | null
    createdAt?: DateTimeFilter<"CustomerInformation"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerInformation"> | Date | string
  }

  export type CustomerInformationOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerInformationWhereInput | CustomerInformationWhereInput[]
    OR?: CustomerInformationWhereInput[]
    NOT?: CustomerInformationWhereInput | CustomerInformationWhereInput[]
    product_id?: IntFilter<"CustomerInformation"> | number
    name?: StringNullableFilter<"CustomerInformation"> | string | null
    mobile?: StringNullableFilter<"CustomerInformation"> | string | null
    email?: StringNullableFilter<"CustomerInformation"> | string | null
    createdAt?: DateTimeFilter<"CustomerInformation"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerInformation"> | Date | string
  }, "id">

  export type CustomerInformationOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerInformationCountOrderByAggregateInput
    _avg?: CustomerInformationAvgOrderByAggregateInput
    _max?: CustomerInformationMaxOrderByAggregateInput
    _min?: CustomerInformationMinOrderByAggregateInput
    _sum?: CustomerInformationSumOrderByAggregateInput
  }

  export type CustomerInformationScalarWhereWithAggregatesInput = {
    AND?: CustomerInformationScalarWhereWithAggregatesInput | CustomerInformationScalarWhereWithAggregatesInput[]
    OR?: CustomerInformationScalarWhereWithAggregatesInput[]
    NOT?: CustomerInformationScalarWhereWithAggregatesInput | CustomerInformationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomerInformation"> | number
    product_id?: IntWithAggregatesFilter<"CustomerInformation"> | number
    name?: StringNullableWithAggregatesFilter<"CustomerInformation"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"CustomerInformation"> | string | null
    email?: StringNullableWithAggregatesFilter<"CustomerInformation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CustomerInformation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomerInformation"> | Date | string
  }

  export type DigitalProductCreateInput = {
    user_id?: number
    product_img_link: string
    heading: string
    subheading: string
    description: string
    pricing: number
    product_domain: string
    file_url: string
    button_title: string
    email?: boolean | null
    name?: boolean | null
    mobile?: boolean | null
    pageViews?: number
    salesConverted?: number
    pageViewUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DigitalProductUncheckedCreateInput = {
    product_id?: number
    user_id?: number
    product_img_link: string
    heading: string
    subheading: string
    description: string
    pricing: number
    product_domain: string
    file_url: string
    button_title: string
    email?: boolean | null
    name?: boolean | null
    mobile?: boolean | null
    pageViews?: number
    salesConverted?: number
    pageViewUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DigitalProductUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    product_img_link?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    subheading?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    product_domain?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    button_title?: StringFieldUpdateOperationsInput | string
    email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pageViews?: IntFieldUpdateOperationsInput | number
    salesConverted?: IntFieldUpdateOperationsInput | number
    pageViewUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DigitalProductUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_img_link?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    subheading?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    product_domain?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    button_title?: StringFieldUpdateOperationsInput | string
    email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pageViews?: IntFieldUpdateOperationsInput | number
    salesConverted?: IntFieldUpdateOperationsInput | number
    pageViewUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DigitalProductCreateManyInput = {
    product_id?: number
    user_id?: number
    product_img_link: string
    heading: string
    subheading: string
    description: string
    pricing: number
    product_domain: string
    file_url: string
    button_title: string
    email?: boolean | null
    name?: boolean | null
    mobile?: boolean | null
    pageViews?: number
    salesConverted?: number
    pageViewUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DigitalProductUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    product_img_link?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    subheading?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    product_domain?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    button_title?: StringFieldUpdateOperationsInput | string
    email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pageViews?: IntFieldUpdateOperationsInput | number
    salesConverted?: IntFieldUpdateOperationsInput | number
    pageViewUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DigitalProductUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_img_link?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    subheading?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricing?: IntFieldUpdateOperationsInput | number
    product_domain?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    button_title?: StringFieldUpdateOperationsInput | string
    email?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pageViews?: IntFieldUpdateOperationsInput | number
    salesConverted?: IntFieldUpdateOperationsInput | number
    pageViewUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerInformationCreateInput = {
    product_id: number
    name?: string | null
    mobile?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerInformationUncheckedCreateInput = {
    id?: number
    product_id: number
    name?: string | null
    mobile?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerInformationUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerInformationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerInformationCreateManyInput = {
    id?: number
    product_id: number
    name?: string | null
    mobile?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerInformationUpdateManyMutationInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerInformationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DigitalProductCountOrderByAggregateInput = {
    product_id?: SortOrder
    user_id?: SortOrder
    product_img_link?: SortOrder
    heading?: SortOrder
    subheading?: SortOrder
    description?: SortOrder
    pricing?: SortOrder
    product_domain?: SortOrder
    file_url?: SortOrder
    button_title?: SortOrder
    email?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    pageViews?: SortOrder
    salesConverted?: SortOrder
    pageViewUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DigitalProductAvgOrderByAggregateInput = {
    product_id?: SortOrder
    user_id?: SortOrder
    pricing?: SortOrder
    pageViews?: SortOrder
    salesConverted?: SortOrder
  }

  export type DigitalProductMaxOrderByAggregateInput = {
    product_id?: SortOrder
    user_id?: SortOrder
    product_img_link?: SortOrder
    heading?: SortOrder
    subheading?: SortOrder
    description?: SortOrder
    pricing?: SortOrder
    product_domain?: SortOrder
    file_url?: SortOrder
    button_title?: SortOrder
    email?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    pageViews?: SortOrder
    salesConverted?: SortOrder
    pageViewUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DigitalProductMinOrderByAggregateInput = {
    product_id?: SortOrder
    user_id?: SortOrder
    product_img_link?: SortOrder
    heading?: SortOrder
    subheading?: SortOrder
    description?: SortOrder
    pricing?: SortOrder
    product_domain?: SortOrder
    file_url?: SortOrder
    button_title?: SortOrder
    email?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    pageViews?: SortOrder
    salesConverted?: SortOrder
    pageViewUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DigitalProductSumOrderByAggregateInput = {
    product_id?: SortOrder
    user_id?: SortOrder
    pricing?: SortOrder
    pageViews?: SortOrder
    salesConverted?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type CustomerInformationCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerInformationAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
  }

  export type CustomerInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerInformationMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerInformationSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DigitalProductDefaultArgs instead
     */
    export type DigitalProductArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = DigitalProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerInformationDefaultArgs instead
     */
    export type CustomerInformationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CustomerInformationDefaultArgs<ExtArgs>

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