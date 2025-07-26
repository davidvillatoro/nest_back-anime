
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
 * Model Personajes
 * 
 */
export type Personajes = $Result.DefaultSelection<Prisma.$PersonajesPayload>
/**
 * Model Imagenes
 * 
 */
export type Imagenes = $Result.DefaultSelection<Prisma.$ImagenesPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Personajes
 * const personajes = await prisma.personajes.findMany()
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
   * // Fetch zero or more Personajes
   * const personajes = await prisma.personajes.findMany()
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
   * `prisma.personajes`: Exposes CRUD operations for the **Personajes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personajes
    * const personajes = await prisma.personajes.findMany()
    * ```
    */
  get personajes(): Prisma.PersonajesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imagenes`: Exposes CRUD operations for the **Imagenes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imagenes
    * const imagenes = await prisma.imagenes.findMany()
    * ```
    */
  get imagenes(): Prisma.ImagenesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
    Personajes: 'Personajes',
    Imagenes: 'Imagenes',
    User: 'User'
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
      modelProps: "personajes" | "imagenes" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Personajes: {
        payload: Prisma.$PersonajesPayload<ExtArgs>
        fields: Prisma.PersonajesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonajesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonajesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonajesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonajesPayload>
          }
          findFirst: {
            args: Prisma.PersonajesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonajesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonajesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonajesPayload>
          }
          findMany: {
            args: Prisma.PersonajesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonajesPayload>[]
          }
          create: {
            args: Prisma.PersonajesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonajesPayload>
          }
          createMany: {
            args: Prisma.PersonajesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonajesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonajesPayload>[]
          }
          delete: {
            args: Prisma.PersonajesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonajesPayload>
          }
          update: {
            args: Prisma.PersonajesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonajesPayload>
          }
          deleteMany: {
            args: Prisma.PersonajesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonajesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonajesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonajesPayload>[]
          }
          upsert: {
            args: Prisma.PersonajesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonajesPayload>
          }
          aggregate: {
            args: Prisma.PersonajesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonajes>
          }
          groupBy: {
            args: Prisma.PersonajesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonajesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonajesCountArgs<ExtArgs>
            result: $Utils.Optional<PersonajesCountAggregateOutputType> | number
          }
        }
      }
      Imagenes: {
        payload: Prisma.$ImagenesPayload<ExtArgs>
        fields: Prisma.ImagenesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagenesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagenesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenesPayload>
          }
          findFirst: {
            args: Prisma.ImagenesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagenesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenesPayload>
          }
          findMany: {
            args: Prisma.ImagenesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenesPayload>[]
          }
          create: {
            args: Prisma.ImagenesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenesPayload>
          }
          createMany: {
            args: Prisma.ImagenesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImagenesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenesPayload>[]
          }
          delete: {
            args: Prisma.ImagenesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenesPayload>
          }
          update: {
            args: Prisma.ImagenesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenesPayload>
          }
          deleteMany: {
            args: Prisma.ImagenesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagenesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImagenesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenesPayload>[]
          }
          upsert: {
            args: Prisma.ImagenesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenesPayload>
          }
          aggregate: {
            args: Prisma.ImagenesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImagenes>
          }
          groupBy: {
            args: Prisma.ImagenesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagenesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagenesCountArgs<ExtArgs>
            result: $Utils.Optional<ImagenesCountAggregateOutputType> | number
          }
        }
      }
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
    personajes?: PersonajesOmit
    imagenes?: ImagenesOmit
    user?: UserOmit
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
   * Models
   */

  /**
   * Model Personajes
   */

  export type AggregatePersonajes = {
    _count: PersonajesCountAggregateOutputType | null
    _avg: PersonajesAvgAggregateOutputType | null
    _sum: PersonajesSumAggregateOutputType | null
    _min: PersonajesMinAggregateOutputType | null
    _max: PersonajesMaxAggregateOutputType | null
  }

  export type PersonajesAvgAggregateOutputType = {
    precio: number | null
    inStock: number | null
  }

  export type PersonajesSumAggregateOutputType = {
    precio: number | null
    inStock: number | null
  }

  export type PersonajesMinAggregateOutputType = {
    idPersonaje: string | null
    nombre: string | null
    descripccion: string | null
    precio: number | null
    inStock: number | null
    fechaLanzamiento: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonajesMaxAggregateOutputType = {
    idPersonaje: string | null
    nombre: string | null
    descripccion: string | null
    precio: number | null
    inStock: number | null
    fechaLanzamiento: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonajesCountAggregateOutputType = {
    idPersonaje: number
    nombre: number
    descripccion: number
    precio: number
    inStock: number
    fechaLanzamiento: number
    createdAt: number
    updatedAt: number
    genero: number
    _all: number
  }


  export type PersonajesAvgAggregateInputType = {
    precio?: true
    inStock?: true
  }

  export type PersonajesSumAggregateInputType = {
    precio?: true
    inStock?: true
  }

  export type PersonajesMinAggregateInputType = {
    idPersonaje?: true
    nombre?: true
    descripccion?: true
    precio?: true
    inStock?: true
    fechaLanzamiento?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonajesMaxAggregateInputType = {
    idPersonaje?: true
    nombre?: true
    descripccion?: true
    precio?: true
    inStock?: true
    fechaLanzamiento?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonajesCountAggregateInputType = {
    idPersonaje?: true
    nombre?: true
    descripccion?: true
    precio?: true
    inStock?: true
    fechaLanzamiento?: true
    createdAt?: true
    updatedAt?: true
    genero?: true
    _all?: true
  }

  export type PersonajesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personajes to aggregate.
     */
    where?: PersonajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personajes to fetch.
     */
    orderBy?: PersonajesOrderByWithRelationInput | PersonajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personajes
    **/
    _count?: true | PersonajesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonajesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonajesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonajesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonajesMaxAggregateInputType
  }

  export type GetPersonajesAggregateType<T extends PersonajesAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonajes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonajes[P]>
      : GetScalarType<T[P], AggregatePersonajes[P]>
  }




  export type PersonajesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonajesWhereInput
    orderBy?: PersonajesOrderByWithAggregationInput | PersonajesOrderByWithAggregationInput[]
    by: PersonajesScalarFieldEnum[] | PersonajesScalarFieldEnum
    having?: PersonajesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonajesCountAggregateInputType | true
    _avg?: PersonajesAvgAggregateInputType
    _sum?: PersonajesSumAggregateInputType
    _min?: PersonajesMinAggregateInputType
    _max?: PersonajesMaxAggregateInputType
  }

  export type PersonajesGroupByOutputType = {
    idPersonaje: string
    nombre: string
    descripccion: string
    precio: number | null
    inStock: number | null
    fechaLanzamiento: Date | null
    createdAt: Date
    updatedAt: Date
    genero: string[]
    _count: PersonajesCountAggregateOutputType | null
    _avg: PersonajesAvgAggregateOutputType | null
    _sum: PersonajesSumAggregateOutputType | null
    _min: PersonajesMinAggregateOutputType | null
    _max: PersonajesMaxAggregateOutputType | null
  }

  type GetPersonajesGroupByPayload<T extends PersonajesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonajesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonajesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonajesGroupByOutputType[P]>
            : GetScalarType<T[P], PersonajesGroupByOutputType[P]>
        }
      >
    >


  export type PersonajesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPersonaje?: boolean
    nombre?: boolean
    descripccion?: boolean
    precio?: boolean
    inStock?: boolean
    fechaLanzamiento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    genero?: boolean
    Imagenes?: boolean | Personajes$ImagenesArgs<ExtArgs>
  }, ExtArgs["result"]["personajes"]>

  export type PersonajesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPersonaje?: boolean
    nombre?: boolean
    descripccion?: boolean
    precio?: boolean
    inStock?: boolean
    fechaLanzamiento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    genero?: boolean
  }, ExtArgs["result"]["personajes"]>

  export type PersonajesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPersonaje?: boolean
    nombre?: boolean
    descripccion?: boolean
    precio?: boolean
    inStock?: boolean
    fechaLanzamiento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    genero?: boolean
  }, ExtArgs["result"]["personajes"]>

  export type PersonajesSelectScalar = {
    idPersonaje?: boolean
    nombre?: boolean
    descripccion?: boolean
    precio?: boolean
    inStock?: boolean
    fechaLanzamiento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    genero?: boolean
  }

  export type PersonajesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPersonaje" | "nombre" | "descripccion" | "precio" | "inStock" | "fechaLanzamiento" | "createdAt" | "updatedAt" | "genero", ExtArgs["result"]["personajes"]>
  export type PersonajesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Imagenes?: boolean | Personajes$ImagenesArgs<ExtArgs>
  }
  export type PersonajesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PersonajesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonajesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Personajes"
    objects: {
      Imagenes: Prisma.$ImagenesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      idPersonaje: string
      nombre: string
      descripccion: string
      precio: number | null
      inStock: number | null
      fechaLanzamiento: Date | null
      createdAt: Date
      updatedAt: Date
      genero: string[]
    }, ExtArgs["result"]["personajes"]>
    composites: {}
  }

  type PersonajesGetPayload<S extends boolean | null | undefined | PersonajesDefaultArgs> = $Result.GetResult<Prisma.$PersonajesPayload, S>

  type PersonajesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonajesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonajesCountAggregateInputType | true
    }

  export interface PersonajesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Personajes'], meta: { name: 'Personajes' } }
    /**
     * Find zero or one Personajes that matches the filter.
     * @param {PersonajesFindUniqueArgs} args - Arguments to find a Personajes
     * @example
     * // Get one Personajes
     * const personajes = await prisma.personajes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonajesFindUniqueArgs>(args: SelectSubset<T, PersonajesFindUniqueArgs<ExtArgs>>): Prisma__PersonajesClient<$Result.GetResult<Prisma.$PersonajesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personajes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonajesFindUniqueOrThrowArgs} args - Arguments to find a Personajes
     * @example
     * // Get one Personajes
     * const personajes = await prisma.personajes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonajesFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonajesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonajesClient<$Result.GetResult<Prisma.$PersonajesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonajesFindFirstArgs} args - Arguments to find a Personajes
     * @example
     * // Get one Personajes
     * const personajes = await prisma.personajes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonajesFindFirstArgs>(args?: SelectSubset<T, PersonajesFindFirstArgs<ExtArgs>>): Prisma__PersonajesClient<$Result.GetResult<Prisma.$PersonajesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personajes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonajesFindFirstOrThrowArgs} args - Arguments to find a Personajes
     * @example
     * // Get one Personajes
     * const personajes = await prisma.personajes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonajesFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonajesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonajesClient<$Result.GetResult<Prisma.$PersonajesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonajesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personajes
     * const personajes = await prisma.personajes.findMany()
     * 
     * // Get first 10 Personajes
     * const personajes = await prisma.personajes.findMany({ take: 10 })
     * 
     * // Only select the `idPersonaje`
     * const personajesWithIdPersonajeOnly = await prisma.personajes.findMany({ select: { idPersonaje: true } })
     * 
     */
    findMany<T extends PersonajesFindManyArgs>(args?: SelectSubset<T, PersonajesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonajesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personajes.
     * @param {PersonajesCreateArgs} args - Arguments to create a Personajes.
     * @example
     * // Create one Personajes
     * const Personajes = await prisma.personajes.create({
     *   data: {
     *     // ... data to create a Personajes
     *   }
     * })
     * 
     */
    create<T extends PersonajesCreateArgs>(args: SelectSubset<T, PersonajesCreateArgs<ExtArgs>>): Prisma__PersonajesClient<$Result.GetResult<Prisma.$PersonajesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personajes.
     * @param {PersonajesCreateManyArgs} args - Arguments to create many Personajes.
     * @example
     * // Create many Personajes
     * const personajes = await prisma.personajes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonajesCreateManyArgs>(args?: SelectSubset<T, PersonajesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personajes and returns the data saved in the database.
     * @param {PersonajesCreateManyAndReturnArgs} args - Arguments to create many Personajes.
     * @example
     * // Create many Personajes
     * const personajes = await prisma.personajes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personajes and only return the `idPersonaje`
     * const personajesWithIdPersonajeOnly = await prisma.personajes.createManyAndReturn({
     *   select: { idPersonaje: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonajesCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonajesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonajesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Personajes.
     * @param {PersonajesDeleteArgs} args - Arguments to delete one Personajes.
     * @example
     * // Delete one Personajes
     * const Personajes = await prisma.personajes.delete({
     *   where: {
     *     // ... filter to delete one Personajes
     *   }
     * })
     * 
     */
    delete<T extends PersonajesDeleteArgs>(args: SelectSubset<T, PersonajesDeleteArgs<ExtArgs>>): Prisma__PersonajesClient<$Result.GetResult<Prisma.$PersonajesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personajes.
     * @param {PersonajesUpdateArgs} args - Arguments to update one Personajes.
     * @example
     * // Update one Personajes
     * const personajes = await prisma.personajes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonajesUpdateArgs>(args: SelectSubset<T, PersonajesUpdateArgs<ExtArgs>>): Prisma__PersonajesClient<$Result.GetResult<Prisma.$PersonajesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personajes.
     * @param {PersonajesDeleteManyArgs} args - Arguments to filter Personajes to delete.
     * @example
     * // Delete a few Personajes
     * const { count } = await prisma.personajes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonajesDeleteManyArgs>(args?: SelectSubset<T, PersonajesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonajesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personajes
     * const personajes = await prisma.personajes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonajesUpdateManyArgs>(args: SelectSubset<T, PersonajesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personajes and returns the data updated in the database.
     * @param {PersonajesUpdateManyAndReturnArgs} args - Arguments to update many Personajes.
     * @example
     * // Update many Personajes
     * const personajes = await prisma.personajes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personajes and only return the `idPersonaje`
     * const personajesWithIdPersonajeOnly = await prisma.personajes.updateManyAndReturn({
     *   select: { idPersonaje: true },
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
    updateManyAndReturn<T extends PersonajesUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonajesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonajesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Personajes.
     * @param {PersonajesUpsertArgs} args - Arguments to update or create a Personajes.
     * @example
     * // Update or create a Personajes
     * const personajes = await prisma.personajes.upsert({
     *   create: {
     *     // ... data to create a Personajes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personajes we want to update
     *   }
     * })
     */
    upsert<T extends PersonajesUpsertArgs>(args: SelectSubset<T, PersonajesUpsertArgs<ExtArgs>>): Prisma__PersonajesClient<$Result.GetResult<Prisma.$PersonajesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonajesCountArgs} args - Arguments to filter Personajes to count.
     * @example
     * // Count the number of Personajes
     * const count = await prisma.personajes.count({
     *   where: {
     *     // ... the filter for the Personajes we want to count
     *   }
     * })
    **/
    count<T extends PersonajesCountArgs>(
      args?: Subset<T, PersonajesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonajesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonajesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonajesAggregateArgs>(args: Subset<T, PersonajesAggregateArgs>): Prisma.PrismaPromise<GetPersonajesAggregateType<T>>

    /**
     * Group by Personajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonajesGroupByArgs} args - Group by arguments.
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
      T extends PersonajesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonajesGroupByArgs['orderBy'] }
        : { orderBy?: PersonajesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonajesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonajesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Personajes model
   */
  readonly fields: PersonajesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Personajes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonajesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Imagenes<T extends Personajes$ImagenesArgs<ExtArgs> = {}>(args?: Subset<T, Personajes$ImagenesArgs<ExtArgs>>): Prisma__ImagenesClient<$Result.GetResult<Prisma.$ImagenesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Personajes model
   */
  interface PersonajesFieldRefs {
    readonly idPersonaje: FieldRef<"Personajes", 'String'>
    readonly nombre: FieldRef<"Personajes", 'String'>
    readonly descripccion: FieldRef<"Personajes", 'String'>
    readonly precio: FieldRef<"Personajes", 'Float'>
    readonly inStock: FieldRef<"Personajes", 'Int'>
    readonly fechaLanzamiento: FieldRef<"Personajes", 'DateTime'>
    readonly createdAt: FieldRef<"Personajes", 'DateTime'>
    readonly updatedAt: FieldRef<"Personajes", 'DateTime'>
    readonly genero: FieldRef<"Personajes", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Personajes findUnique
   */
  export type PersonajesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personajes
     */
    select?: PersonajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personajes
     */
    omit?: PersonajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonajesInclude<ExtArgs> | null
    /**
     * Filter, which Personajes to fetch.
     */
    where: PersonajesWhereUniqueInput
  }

  /**
   * Personajes findUniqueOrThrow
   */
  export type PersonajesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personajes
     */
    select?: PersonajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personajes
     */
    omit?: PersonajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonajesInclude<ExtArgs> | null
    /**
     * Filter, which Personajes to fetch.
     */
    where: PersonajesWhereUniqueInput
  }

  /**
   * Personajes findFirst
   */
  export type PersonajesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personajes
     */
    select?: PersonajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personajes
     */
    omit?: PersonajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonajesInclude<ExtArgs> | null
    /**
     * Filter, which Personajes to fetch.
     */
    where?: PersonajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personajes to fetch.
     */
    orderBy?: PersonajesOrderByWithRelationInput | PersonajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personajes.
     */
    cursor?: PersonajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personajes.
     */
    distinct?: PersonajesScalarFieldEnum | PersonajesScalarFieldEnum[]
  }

  /**
   * Personajes findFirstOrThrow
   */
  export type PersonajesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personajes
     */
    select?: PersonajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personajes
     */
    omit?: PersonajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonajesInclude<ExtArgs> | null
    /**
     * Filter, which Personajes to fetch.
     */
    where?: PersonajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personajes to fetch.
     */
    orderBy?: PersonajesOrderByWithRelationInput | PersonajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personajes.
     */
    cursor?: PersonajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personajes.
     */
    distinct?: PersonajesScalarFieldEnum | PersonajesScalarFieldEnum[]
  }

  /**
   * Personajes findMany
   */
  export type PersonajesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personajes
     */
    select?: PersonajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personajes
     */
    omit?: PersonajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonajesInclude<ExtArgs> | null
    /**
     * Filter, which Personajes to fetch.
     */
    where?: PersonajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personajes to fetch.
     */
    orderBy?: PersonajesOrderByWithRelationInput | PersonajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personajes.
     */
    cursor?: PersonajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personajes.
     */
    skip?: number
    distinct?: PersonajesScalarFieldEnum | PersonajesScalarFieldEnum[]
  }

  /**
   * Personajes create
   */
  export type PersonajesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personajes
     */
    select?: PersonajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personajes
     */
    omit?: PersonajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonajesInclude<ExtArgs> | null
    /**
     * The data needed to create a Personajes.
     */
    data: XOR<PersonajesCreateInput, PersonajesUncheckedCreateInput>
  }

  /**
   * Personajes createMany
   */
  export type PersonajesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personajes.
     */
    data: PersonajesCreateManyInput | PersonajesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personajes createManyAndReturn
   */
  export type PersonajesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personajes
     */
    select?: PersonajesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personajes
     */
    omit?: PersonajesOmit<ExtArgs> | null
    /**
     * The data used to create many Personajes.
     */
    data: PersonajesCreateManyInput | PersonajesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personajes update
   */
  export type PersonajesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personajes
     */
    select?: PersonajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personajes
     */
    omit?: PersonajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonajesInclude<ExtArgs> | null
    /**
     * The data needed to update a Personajes.
     */
    data: XOR<PersonajesUpdateInput, PersonajesUncheckedUpdateInput>
    /**
     * Choose, which Personajes to update.
     */
    where: PersonajesWhereUniqueInput
  }

  /**
   * Personajes updateMany
   */
  export type PersonajesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personajes.
     */
    data: XOR<PersonajesUpdateManyMutationInput, PersonajesUncheckedUpdateManyInput>
    /**
     * Filter which Personajes to update
     */
    where?: PersonajesWhereInput
    /**
     * Limit how many Personajes to update.
     */
    limit?: number
  }

  /**
   * Personajes updateManyAndReturn
   */
  export type PersonajesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personajes
     */
    select?: PersonajesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personajes
     */
    omit?: PersonajesOmit<ExtArgs> | null
    /**
     * The data used to update Personajes.
     */
    data: XOR<PersonajesUpdateManyMutationInput, PersonajesUncheckedUpdateManyInput>
    /**
     * Filter which Personajes to update
     */
    where?: PersonajesWhereInput
    /**
     * Limit how many Personajes to update.
     */
    limit?: number
  }

  /**
   * Personajes upsert
   */
  export type PersonajesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personajes
     */
    select?: PersonajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personajes
     */
    omit?: PersonajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonajesInclude<ExtArgs> | null
    /**
     * The filter to search for the Personajes to update in case it exists.
     */
    where: PersonajesWhereUniqueInput
    /**
     * In case the Personajes found by the `where` argument doesn't exist, create a new Personajes with this data.
     */
    create: XOR<PersonajesCreateInput, PersonajesUncheckedCreateInput>
    /**
     * In case the Personajes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonajesUpdateInput, PersonajesUncheckedUpdateInput>
  }

  /**
   * Personajes delete
   */
  export type PersonajesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personajes
     */
    select?: PersonajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personajes
     */
    omit?: PersonajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonajesInclude<ExtArgs> | null
    /**
     * Filter which Personajes to delete.
     */
    where: PersonajesWhereUniqueInput
  }

  /**
   * Personajes deleteMany
   */
  export type PersonajesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personajes to delete
     */
    where?: PersonajesWhereInput
    /**
     * Limit how many Personajes to delete.
     */
    limit?: number
  }

  /**
   * Personajes.Imagenes
   */
  export type Personajes$ImagenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagenes
     */
    select?: ImagenesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagenes
     */
    omit?: ImagenesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenesInclude<ExtArgs> | null
    where?: ImagenesWhereInput
  }

  /**
   * Personajes without action
   */
  export type PersonajesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personajes
     */
    select?: PersonajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personajes
     */
    omit?: PersonajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonajesInclude<ExtArgs> | null
  }


  /**
   * Model Imagenes
   */

  export type AggregateImagenes = {
    _count: ImagenesCountAggregateOutputType | null
    _min: ImagenesMinAggregateOutputType | null
    _max: ImagenesMaxAggregateOutputType | null
  }

  export type ImagenesMinAggregateOutputType = {
    idImagen: string | null
    url: string | null
    publicID: string | null
    personajesIdPersonaje: string | null
  }

  export type ImagenesMaxAggregateOutputType = {
    idImagen: string | null
    url: string | null
    publicID: string | null
    personajesIdPersonaje: string | null
  }

  export type ImagenesCountAggregateOutputType = {
    idImagen: number
    url: number
    publicID: number
    personajesIdPersonaje: number
    _all: number
  }


  export type ImagenesMinAggregateInputType = {
    idImagen?: true
    url?: true
    publicID?: true
    personajesIdPersonaje?: true
  }

  export type ImagenesMaxAggregateInputType = {
    idImagen?: true
    url?: true
    publicID?: true
    personajesIdPersonaje?: true
  }

  export type ImagenesCountAggregateInputType = {
    idImagen?: true
    url?: true
    publicID?: true
    personajesIdPersonaje?: true
    _all?: true
  }

  export type ImagenesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imagenes to aggregate.
     */
    where?: ImagenesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagenes to fetch.
     */
    orderBy?: ImagenesOrderByWithRelationInput | ImagenesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagenesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Imagenes
    **/
    _count?: true | ImagenesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagenesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagenesMaxAggregateInputType
  }

  export type GetImagenesAggregateType<T extends ImagenesAggregateArgs> = {
        [P in keyof T & keyof AggregateImagenes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImagenes[P]>
      : GetScalarType<T[P], AggregateImagenes[P]>
  }




  export type ImagenesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagenesWhereInput
    orderBy?: ImagenesOrderByWithAggregationInput | ImagenesOrderByWithAggregationInput[]
    by: ImagenesScalarFieldEnum[] | ImagenesScalarFieldEnum
    having?: ImagenesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagenesCountAggregateInputType | true
    _min?: ImagenesMinAggregateInputType
    _max?: ImagenesMaxAggregateInputType
  }

  export type ImagenesGroupByOutputType = {
    idImagen: string
    url: string
    publicID: string | null
    personajesIdPersonaje: string | null
    _count: ImagenesCountAggregateOutputType | null
    _min: ImagenesMinAggregateOutputType | null
    _max: ImagenesMaxAggregateOutputType | null
  }

  type GetImagenesGroupByPayload<T extends ImagenesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagenesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagenesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagenesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagenesGroupByOutputType[P]>
        }
      >
    >


  export type ImagenesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idImagen?: boolean
    url?: boolean
    publicID?: boolean
    personajesIdPersonaje?: boolean
    personaje?: boolean | Imagenes$personajeArgs<ExtArgs>
  }, ExtArgs["result"]["imagenes"]>

  export type ImagenesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idImagen?: boolean
    url?: boolean
    publicID?: boolean
    personajesIdPersonaje?: boolean
    personaje?: boolean | Imagenes$personajeArgs<ExtArgs>
  }, ExtArgs["result"]["imagenes"]>

  export type ImagenesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idImagen?: boolean
    url?: boolean
    publicID?: boolean
    personajesIdPersonaje?: boolean
    personaje?: boolean | Imagenes$personajeArgs<ExtArgs>
  }, ExtArgs["result"]["imagenes"]>

  export type ImagenesSelectScalar = {
    idImagen?: boolean
    url?: boolean
    publicID?: boolean
    personajesIdPersonaje?: boolean
  }

  export type ImagenesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idImagen" | "url" | "publicID" | "personajesIdPersonaje", ExtArgs["result"]["imagenes"]>
  export type ImagenesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personaje?: boolean | Imagenes$personajeArgs<ExtArgs>
  }
  export type ImagenesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personaje?: boolean | Imagenes$personajeArgs<ExtArgs>
  }
  export type ImagenesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personaje?: boolean | Imagenes$personajeArgs<ExtArgs>
  }

  export type $ImagenesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Imagenes"
    objects: {
      personaje: Prisma.$PersonajesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      idImagen: string
      url: string
      publicID: string | null
      personajesIdPersonaje: string | null
    }, ExtArgs["result"]["imagenes"]>
    composites: {}
  }

  type ImagenesGetPayload<S extends boolean | null | undefined | ImagenesDefaultArgs> = $Result.GetResult<Prisma.$ImagenesPayload, S>

  type ImagenesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImagenesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagenesCountAggregateInputType | true
    }

  export interface ImagenesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Imagenes'], meta: { name: 'Imagenes' } }
    /**
     * Find zero or one Imagenes that matches the filter.
     * @param {ImagenesFindUniqueArgs} args - Arguments to find a Imagenes
     * @example
     * // Get one Imagenes
     * const imagenes = await prisma.imagenes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagenesFindUniqueArgs>(args: SelectSubset<T, ImagenesFindUniqueArgs<ExtArgs>>): Prisma__ImagenesClient<$Result.GetResult<Prisma.$ImagenesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Imagenes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImagenesFindUniqueOrThrowArgs} args - Arguments to find a Imagenes
     * @example
     * // Get one Imagenes
     * const imagenes = await prisma.imagenes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagenesFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagenesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagenesClient<$Result.GetResult<Prisma.$ImagenesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imagenes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenesFindFirstArgs} args - Arguments to find a Imagenes
     * @example
     * // Get one Imagenes
     * const imagenes = await prisma.imagenes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagenesFindFirstArgs>(args?: SelectSubset<T, ImagenesFindFirstArgs<ExtArgs>>): Prisma__ImagenesClient<$Result.GetResult<Prisma.$ImagenesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imagenes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenesFindFirstOrThrowArgs} args - Arguments to find a Imagenes
     * @example
     * // Get one Imagenes
     * const imagenes = await prisma.imagenes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagenesFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagenesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagenesClient<$Result.GetResult<Prisma.$ImagenesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Imagenes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imagenes
     * const imagenes = await prisma.imagenes.findMany()
     * 
     * // Get first 10 Imagenes
     * const imagenes = await prisma.imagenes.findMany({ take: 10 })
     * 
     * // Only select the `idImagen`
     * const imagenesWithIdImagenOnly = await prisma.imagenes.findMany({ select: { idImagen: true } })
     * 
     */
    findMany<T extends ImagenesFindManyArgs>(args?: SelectSubset<T, ImagenesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagenesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Imagenes.
     * @param {ImagenesCreateArgs} args - Arguments to create a Imagenes.
     * @example
     * // Create one Imagenes
     * const Imagenes = await prisma.imagenes.create({
     *   data: {
     *     // ... data to create a Imagenes
     *   }
     * })
     * 
     */
    create<T extends ImagenesCreateArgs>(args: SelectSubset<T, ImagenesCreateArgs<ExtArgs>>): Prisma__ImagenesClient<$Result.GetResult<Prisma.$ImagenesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Imagenes.
     * @param {ImagenesCreateManyArgs} args - Arguments to create many Imagenes.
     * @example
     * // Create many Imagenes
     * const imagenes = await prisma.imagenes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagenesCreateManyArgs>(args?: SelectSubset<T, ImagenesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Imagenes and returns the data saved in the database.
     * @param {ImagenesCreateManyAndReturnArgs} args - Arguments to create many Imagenes.
     * @example
     * // Create many Imagenes
     * const imagenes = await prisma.imagenes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Imagenes and only return the `idImagen`
     * const imagenesWithIdImagenOnly = await prisma.imagenes.createManyAndReturn({
     *   select: { idImagen: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImagenesCreateManyAndReturnArgs>(args?: SelectSubset<T, ImagenesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagenesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Imagenes.
     * @param {ImagenesDeleteArgs} args - Arguments to delete one Imagenes.
     * @example
     * // Delete one Imagenes
     * const Imagenes = await prisma.imagenes.delete({
     *   where: {
     *     // ... filter to delete one Imagenes
     *   }
     * })
     * 
     */
    delete<T extends ImagenesDeleteArgs>(args: SelectSubset<T, ImagenesDeleteArgs<ExtArgs>>): Prisma__ImagenesClient<$Result.GetResult<Prisma.$ImagenesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Imagenes.
     * @param {ImagenesUpdateArgs} args - Arguments to update one Imagenes.
     * @example
     * // Update one Imagenes
     * const imagenes = await prisma.imagenes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagenesUpdateArgs>(args: SelectSubset<T, ImagenesUpdateArgs<ExtArgs>>): Prisma__ImagenesClient<$Result.GetResult<Prisma.$ImagenesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Imagenes.
     * @param {ImagenesDeleteManyArgs} args - Arguments to filter Imagenes to delete.
     * @example
     * // Delete a few Imagenes
     * const { count } = await prisma.imagenes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagenesDeleteManyArgs>(args?: SelectSubset<T, ImagenesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imagenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imagenes
     * const imagenes = await prisma.imagenes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagenesUpdateManyArgs>(args: SelectSubset<T, ImagenesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imagenes and returns the data updated in the database.
     * @param {ImagenesUpdateManyAndReturnArgs} args - Arguments to update many Imagenes.
     * @example
     * // Update many Imagenes
     * const imagenes = await prisma.imagenes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Imagenes and only return the `idImagen`
     * const imagenesWithIdImagenOnly = await prisma.imagenes.updateManyAndReturn({
     *   select: { idImagen: true },
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
    updateManyAndReturn<T extends ImagenesUpdateManyAndReturnArgs>(args: SelectSubset<T, ImagenesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagenesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Imagenes.
     * @param {ImagenesUpsertArgs} args - Arguments to update or create a Imagenes.
     * @example
     * // Update or create a Imagenes
     * const imagenes = await prisma.imagenes.upsert({
     *   create: {
     *     // ... data to create a Imagenes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imagenes we want to update
     *   }
     * })
     */
    upsert<T extends ImagenesUpsertArgs>(args: SelectSubset<T, ImagenesUpsertArgs<ExtArgs>>): Prisma__ImagenesClient<$Result.GetResult<Prisma.$ImagenesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Imagenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenesCountArgs} args - Arguments to filter Imagenes to count.
     * @example
     * // Count the number of Imagenes
     * const count = await prisma.imagenes.count({
     *   where: {
     *     // ... the filter for the Imagenes we want to count
     *   }
     * })
    **/
    count<T extends ImagenesCountArgs>(
      args?: Subset<T, ImagenesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagenesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imagenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImagenesAggregateArgs>(args: Subset<T, ImagenesAggregateArgs>): Prisma.PrismaPromise<GetImagenesAggregateType<T>>

    /**
     * Group by Imagenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenesGroupByArgs} args - Group by arguments.
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
      T extends ImagenesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagenesGroupByArgs['orderBy'] }
        : { orderBy?: ImagenesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImagenesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagenesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Imagenes model
   */
  readonly fields: ImagenesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Imagenes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagenesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personaje<T extends Imagenes$personajeArgs<ExtArgs> = {}>(args?: Subset<T, Imagenes$personajeArgs<ExtArgs>>): Prisma__PersonajesClient<$Result.GetResult<Prisma.$PersonajesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Imagenes model
   */
  interface ImagenesFieldRefs {
    readonly idImagen: FieldRef<"Imagenes", 'String'>
    readonly url: FieldRef<"Imagenes", 'String'>
    readonly publicID: FieldRef<"Imagenes", 'String'>
    readonly personajesIdPersonaje: FieldRef<"Imagenes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Imagenes findUnique
   */
  export type ImagenesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagenes
     */
    select?: ImagenesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagenes
     */
    omit?: ImagenesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenesInclude<ExtArgs> | null
    /**
     * Filter, which Imagenes to fetch.
     */
    where: ImagenesWhereUniqueInput
  }

  /**
   * Imagenes findUniqueOrThrow
   */
  export type ImagenesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagenes
     */
    select?: ImagenesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagenes
     */
    omit?: ImagenesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenesInclude<ExtArgs> | null
    /**
     * Filter, which Imagenes to fetch.
     */
    where: ImagenesWhereUniqueInput
  }

  /**
   * Imagenes findFirst
   */
  export type ImagenesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagenes
     */
    select?: ImagenesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagenes
     */
    omit?: ImagenesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenesInclude<ExtArgs> | null
    /**
     * Filter, which Imagenes to fetch.
     */
    where?: ImagenesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagenes to fetch.
     */
    orderBy?: ImagenesOrderByWithRelationInput | ImagenesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imagenes.
     */
    cursor?: ImagenesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imagenes.
     */
    distinct?: ImagenesScalarFieldEnum | ImagenesScalarFieldEnum[]
  }

  /**
   * Imagenes findFirstOrThrow
   */
  export type ImagenesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagenes
     */
    select?: ImagenesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagenes
     */
    omit?: ImagenesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenesInclude<ExtArgs> | null
    /**
     * Filter, which Imagenes to fetch.
     */
    where?: ImagenesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagenes to fetch.
     */
    orderBy?: ImagenesOrderByWithRelationInput | ImagenesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imagenes.
     */
    cursor?: ImagenesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imagenes.
     */
    distinct?: ImagenesScalarFieldEnum | ImagenesScalarFieldEnum[]
  }

  /**
   * Imagenes findMany
   */
  export type ImagenesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagenes
     */
    select?: ImagenesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagenes
     */
    omit?: ImagenesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenesInclude<ExtArgs> | null
    /**
     * Filter, which Imagenes to fetch.
     */
    where?: ImagenesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagenes to fetch.
     */
    orderBy?: ImagenesOrderByWithRelationInput | ImagenesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Imagenes.
     */
    cursor?: ImagenesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagenes.
     */
    skip?: number
    distinct?: ImagenesScalarFieldEnum | ImagenesScalarFieldEnum[]
  }

  /**
   * Imagenes create
   */
  export type ImagenesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagenes
     */
    select?: ImagenesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagenes
     */
    omit?: ImagenesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenesInclude<ExtArgs> | null
    /**
     * The data needed to create a Imagenes.
     */
    data?: XOR<ImagenesCreateInput, ImagenesUncheckedCreateInput>
  }

  /**
   * Imagenes createMany
   */
  export type ImagenesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Imagenes.
     */
    data: ImagenesCreateManyInput | ImagenesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Imagenes createManyAndReturn
   */
  export type ImagenesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagenes
     */
    select?: ImagenesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Imagenes
     */
    omit?: ImagenesOmit<ExtArgs> | null
    /**
     * The data used to create many Imagenes.
     */
    data: ImagenesCreateManyInput | ImagenesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Imagenes update
   */
  export type ImagenesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagenes
     */
    select?: ImagenesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagenes
     */
    omit?: ImagenesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenesInclude<ExtArgs> | null
    /**
     * The data needed to update a Imagenes.
     */
    data: XOR<ImagenesUpdateInput, ImagenesUncheckedUpdateInput>
    /**
     * Choose, which Imagenes to update.
     */
    where: ImagenesWhereUniqueInput
  }

  /**
   * Imagenes updateMany
   */
  export type ImagenesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Imagenes.
     */
    data: XOR<ImagenesUpdateManyMutationInput, ImagenesUncheckedUpdateManyInput>
    /**
     * Filter which Imagenes to update
     */
    where?: ImagenesWhereInput
    /**
     * Limit how many Imagenes to update.
     */
    limit?: number
  }

  /**
   * Imagenes updateManyAndReturn
   */
  export type ImagenesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagenes
     */
    select?: ImagenesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Imagenes
     */
    omit?: ImagenesOmit<ExtArgs> | null
    /**
     * The data used to update Imagenes.
     */
    data: XOR<ImagenesUpdateManyMutationInput, ImagenesUncheckedUpdateManyInput>
    /**
     * Filter which Imagenes to update
     */
    where?: ImagenesWhereInput
    /**
     * Limit how many Imagenes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Imagenes upsert
   */
  export type ImagenesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagenes
     */
    select?: ImagenesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagenes
     */
    omit?: ImagenesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenesInclude<ExtArgs> | null
    /**
     * The filter to search for the Imagenes to update in case it exists.
     */
    where: ImagenesWhereUniqueInput
    /**
     * In case the Imagenes found by the `where` argument doesn't exist, create a new Imagenes with this data.
     */
    create: XOR<ImagenesCreateInput, ImagenesUncheckedCreateInput>
    /**
     * In case the Imagenes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagenesUpdateInput, ImagenesUncheckedUpdateInput>
  }

  /**
   * Imagenes delete
   */
  export type ImagenesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagenes
     */
    select?: ImagenesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagenes
     */
    omit?: ImagenesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenesInclude<ExtArgs> | null
    /**
     * Filter which Imagenes to delete.
     */
    where: ImagenesWhereUniqueInput
  }

  /**
   * Imagenes deleteMany
   */
  export type ImagenesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imagenes to delete
     */
    where?: ImagenesWhereInput
    /**
     * Limit how many Imagenes to delete.
     */
    limit?: number
  }

  /**
   * Imagenes.personaje
   */
  export type Imagenes$personajeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personajes
     */
    select?: PersonajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personajes
     */
    omit?: PersonajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonajesInclude<ExtArgs> | null
    where?: PersonajesWhereInput
  }

  /**
   * Imagenes without action
   */
  export type ImagenesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagenes
     */
    select?: ImagenesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagenes
     */
    omit?: ImagenesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenesInclude<ExtArgs> | null
  }


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
    password: string | null
    isActive: boolean | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    isActive: boolean | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    isActive: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isActive?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isActive?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isActive?: true
    role?: true
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
    password: string
    isActive: boolean
    role: $Enums.Role
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
    password?: boolean
    isActive?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "isActive" | "role", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      isActive: boolean
      role: $Enums.Role
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
    readonly password: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'Role'>
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


  export const PersonajesScalarFieldEnum: {
    idPersonaje: 'idPersonaje',
    nombre: 'nombre',
    descripccion: 'descripccion',
    precio: 'precio',
    inStock: 'inStock',
    fechaLanzamiento: 'fechaLanzamiento',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    genero: 'genero'
  };

  export type PersonajesScalarFieldEnum = (typeof PersonajesScalarFieldEnum)[keyof typeof PersonajesScalarFieldEnum]


  export const ImagenesScalarFieldEnum: {
    idImagen: 'idImagen',
    url: 'url',
    publicID: 'publicID',
    personajesIdPersonaje: 'personajesIdPersonaje'
  };

  export type ImagenesScalarFieldEnum = (typeof ImagenesScalarFieldEnum)[keyof typeof ImagenesScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    isActive: 'isActive',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    
  /**
   * Deep Input Types
   */


  export type PersonajesWhereInput = {
    AND?: PersonajesWhereInput | PersonajesWhereInput[]
    OR?: PersonajesWhereInput[]
    NOT?: PersonajesWhereInput | PersonajesWhereInput[]
    idPersonaje?: StringFilter<"Personajes"> | string
    nombre?: StringFilter<"Personajes"> | string
    descripccion?: StringFilter<"Personajes"> | string
    precio?: FloatNullableFilter<"Personajes"> | number | null
    inStock?: IntNullableFilter<"Personajes"> | number | null
    fechaLanzamiento?: DateTimeNullableFilter<"Personajes"> | Date | string | null
    createdAt?: DateTimeFilter<"Personajes"> | Date | string
    updatedAt?: DateTimeFilter<"Personajes"> | Date | string
    genero?: StringNullableListFilter<"Personajes">
    Imagenes?: XOR<ImagenesNullableScalarRelationFilter, ImagenesWhereInput> | null
  }

  export type PersonajesOrderByWithRelationInput = {
    idPersonaje?: SortOrder
    nombre?: SortOrder
    descripccion?: SortOrder
    precio?: SortOrderInput | SortOrder
    inStock?: SortOrderInput | SortOrder
    fechaLanzamiento?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    genero?: SortOrder
    Imagenes?: ImagenesOrderByWithRelationInput
  }

  export type PersonajesWhereUniqueInput = Prisma.AtLeast<{
    idPersonaje?: string
    AND?: PersonajesWhereInput | PersonajesWhereInput[]
    OR?: PersonajesWhereInput[]
    NOT?: PersonajesWhereInput | PersonajesWhereInput[]
    nombre?: StringFilter<"Personajes"> | string
    descripccion?: StringFilter<"Personajes"> | string
    precio?: FloatNullableFilter<"Personajes"> | number | null
    inStock?: IntNullableFilter<"Personajes"> | number | null
    fechaLanzamiento?: DateTimeNullableFilter<"Personajes"> | Date | string | null
    createdAt?: DateTimeFilter<"Personajes"> | Date | string
    updatedAt?: DateTimeFilter<"Personajes"> | Date | string
    genero?: StringNullableListFilter<"Personajes">
    Imagenes?: XOR<ImagenesNullableScalarRelationFilter, ImagenesWhereInput> | null
  }, "idPersonaje">

  export type PersonajesOrderByWithAggregationInput = {
    idPersonaje?: SortOrder
    nombre?: SortOrder
    descripccion?: SortOrder
    precio?: SortOrderInput | SortOrder
    inStock?: SortOrderInput | SortOrder
    fechaLanzamiento?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    genero?: SortOrder
    _count?: PersonajesCountOrderByAggregateInput
    _avg?: PersonajesAvgOrderByAggregateInput
    _max?: PersonajesMaxOrderByAggregateInput
    _min?: PersonajesMinOrderByAggregateInput
    _sum?: PersonajesSumOrderByAggregateInput
  }

  export type PersonajesScalarWhereWithAggregatesInput = {
    AND?: PersonajesScalarWhereWithAggregatesInput | PersonajesScalarWhereWithAggregatesInput[]
    OR?: PersonajesScalarWhereWithAggregatesInput[]
    NOT?: PersonajesScalarWhereWithAggregatesInput | PersonajesScalarWhereWithAggregatesInput[]
    idPersonaje?: StringWithAggregatesFilter<"Personajes"> | string
    nombre?: StringWithAggregatesFilter<"Personajes"> | string
    descripccion?: StringWithAggregatesFilter<"Personajes"> | string
    precio?: FloatNullableWithAggregatesFilter<"Personajes"> | number | null
    inStock?: IntNullableWithAggregatesFilter<"Personajes"> | number | null
    fechaLanzamiento?: DateTimeNullableWithAggregatesFilter<"Personajes"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Personajes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Personajes"> | Date | string
    genero?: StringNullableListFilter<"Personajes">
  }

  export type ImagenesWhereInput = {
    AND?: ImagenesWhereInput | ImagenesWhereInput[]
    OR?: ImagenesWhereInput[]
    NOT?: ImagenesWhereInput | ImagenesWhereInput[]
    idImagen?: StringFilter<"Imagenes"> | string
    url?: StringFilter<"Imagenes"> | string
    publicID?: StringNullableFilter<"Imagenes"> | string | null
    personajesIdPersonaje?: StringNullableFilter<"Imagenes"> | string | null
    personaje?: XOR<PersonajesNullableScalarRelationFilter, PersonajesWhereInput> | null
  }

  export type ImagenesOrderByWithRelationInput = {
    idImagen?: SortOrder
    url?: SortOrder
    publicID?: SortOrderInput | SortOrder
    personajesIdPersonaje?: SortOrderInput | SortOrder
    personaje?: PersonajesOrderByWithRelationInput
  }

  export type ImagenesWhereUniqueInput = Prisma.AtLeast<{
    idImagen?: string
    personajesIdPersonaje?: string
    AND?: ImagenesWhereInput | ImagenesWhereInput[]
    OR?: ImagenesWhereInput[]
    NOT?: ImagenesWhereInput | ImagenesWhereInput[]
    url?: StringFilter<"Imagenes"> | string
    publicID?: StringNullableFilter<"Imagenes"> | string | null
    personaje?: XOR<PersonajesNullableScalarRelationFilter, PersonajesWhereInput> | null
  }, "idImagen" | "personajesIdPersonaje">

  export type ImagenesOrderByWithAggregationInput = {
    idImagen?: SortOrder
    url?: SortOrder
    publicID?: SortOrderInput | SortOrder
    personajesIdPersonaje?: SortOrderInput | SortOrder
    _count?: ImagenesCountOrderByAggregateInput
    _max?: ImagenesMaxOrderByAggregateInput
    _min?: ImagenesMinOrderByAggregateInput
  }

  export type ImagenesScalarWhereWithAggregatesInput = {
    AND?: ImagenesScalarWhereWithAggregatesInput | ImagenesScalarWhereWithAggregatesInput[]
    OR?: ImagenesScalarWhereWithAggregatesInput[]
    NOT?: ImagenesScalarWhereWithAggregatesInput | ImagenesScalarWhereWithAggregatesInput[]
    idImagen?: StringWithAggregatesFilter<"Imagenes"> | string
    url?: StringWithAggregatesFilter<"Imagenes"> | string
    publicID?: StringNullableWithAggregatesFilter<"Imagenes"> | string | null
    personajesIdPersonaje?: StringNullableWithAggregatesFilter<"Imagenes"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
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
    password?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type PersonajesCreateInput = {
    idPersonaje?: string
    nombre: string
    descripccion: string
    precio?: number | null
    inStock?: number | null
    fechaLanzamiento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genero?: PersonajesCreategeneroInput | string[]
    Imagenes?: ImagenesCreateNestedOneWithoutPersonajeInput
  }

  export type PersonajesUncheckedCreateInput = {
    idPersonaje?: string
    nombre: string
    descripccion: string
    precio?: number | null
    inStock?: number | null
    fechaLanzamiento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genero?: PersonajesCreategeneroInput | string[]
    Imagenes?: ImagenesUncheckedCreateNestedOneWithoutPersonajeInput
  }

  export type PersonajesUpdateInput = {
    idPersonaje?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripccion?: StringFieldUpdateOperationsInput | string
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    inStock?: NullableIntFieldUpdateOperationsInput | number | null
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: PersonajesUpdategeneroInput | string[]
    Imagenes?: ImagenesUpdateOneWithoutPersonajeNestedInput
  }

  export type PersonajesUncheckedUpdateInput = {
    idPersonaje?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripccion?: StringFieldUpdateOperationsInput | string
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    inStock?: NullableIntFieldUpdateOperationsInput | number | null
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: PersonajesUpdategeneroInput | string[]
    Imagenes?: ImagenesUncheckedUpdateOneWithoutPersonajeNestedInput
  }

  export type PersonajesCreateManyInput = {
    idPersonaje?: string
    nombre: string
    descripccion: string
    precio?: number | null
    inStock?: number | null
    fechaLanzamiento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genero?: PersonajesCreategeneroInput | string[]
  }

  export type PersonajesUpdateManyMutationInput = {
    idPersonaje?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripccion?: StringFieldUpdateOperationsInput | string
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    inStock?: NullableIntFieldUpdateOperationsInput | number | null
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: PersonajesUpdategeneroInput | string[]
  }

  export type PersonajesUncheckedUpdateManyInput = {
    idPersonaje?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripccion?: StringFieldUpdateOperationsInput | string
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    inStock?: NullableIntFieldUpdateOperationsInput | number | null
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: PersonajesUpdategeneroInput | string[]
  }

  export type ImagenesCreateInput = {
    idImagen?: string
    url?: string
    publicID?: string | null
    personaje?: PersonajesCreateNestedOneWithoutImagenesInput
  }

  export type ImagenesUncheckedCreateInput = {
    idImagen?: string
    url?: string
    publicID?: string | null
    personajesIdPersonaje?: string | null
  }

  export type ImagenesUpdateInput = {
    idImagen?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicID?: NullableStringFieldUpdateOperationsInput | string | null
    personaje?: PersonajesUpdateOneWithoutImagenesNestedInput
  }

  export type ImagenesUncheckedUpdateInput = {
    idImagen?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicID?: NullableStringFieldUpdateOperationsInput | string | null
    personajesIdPersonaje?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImagenesCreateManyInput = {
    idImagen?: string
    url?: string
    publicID?: string | null
    personajesIdPersonaje?: string | null
  }

  export type ImagenesUpdateManyMutationInput = {
    idImagen?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImagenesUncheckedUpdateManyInput = {
    idImagen?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicID?: NullableStringFieldUpdateOperationsInput | string | null
    personajesIdPersonaje?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    isActive?: boolean
    role?: $Enums.Role
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    isActive?: boolean
    role?: $Enums.Role
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    isActive?: boolean
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ImagenesNullableScalarRelationFilter = {
    is?: ImagenesWhereInput | null
    isNot?: ImagenesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PersonajesCountOrderByAggregateInput = {
    idPersonaje?: SortOrder
    nombre?: SortOrder
    descripccion?: SortOrder
    precio?: SortOrder
    inStock?: SortOrder
    fechaLanzamiento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    genero?: SortOrder
  }

  export type PersonajesAvgOrderByAggregateInput = {
    precio?: SortOrder
    inStock?: SortOrder
  }

  export type PersonajesMaxOrderByAggregateInput = {
    idPersonaje?: SortOrder
    nombre?: SortOrder
    descripccion?: SortOrder
    precio?: SortOrder
    inStock?: SortOrder
    fechaLanzamiento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonajesMinOrderByAggregateInput = {
    idPersonaje?: SortOrder
    nombre?: SortOrder
    descripccion?: SortOrder
    precio?: SortOrder
    inStock?: SortOrder
    fechaLanzamiento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonajesSumOrderByAggregateInput = {
    precio?: SortOrder
    inStock?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type PersonajesNullableScalarRelationFilter = {
    is?: PersonajesWhereInput | null
    isNot?: PersonajesWhereInput | null
  }

  export type ImagenesCountOrderByAggregateInput = {
    idImagen?: SortOrder
    url?: SortOrder
    publicID?: SortOrder
    personajesIdPersonaje?: SortOrder
  }

  export type ImagenesMaxOrderByAggregateInput = {
    idImagen?: SortOrder
    url?: SortOrder
    publicID?: SortOrder
    personajesIdPersonaje?: SortOrder
  }

  export type ImagenesMinOrderByAggregateInput = {
    idImagen?: SortOrder
    url?: SortOrder
    publicID?: SortOrder
    personajesIdPersonaje?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PersonajesCreategeneroInput = {
    set: string[]
  }

  export type ImagenesCreateNestedOneWithoutPersonajeInput = {
    create?: XOR<ImagenesCreateWithoutPersonajeInput, ImagenesUncheckedCreateWithoutPersonajeInput>
    connectOrCreate?: ImagenesCreateOrConnectWithoutPersonajeInput
    connect?: ImagenesWhereUniqueInput
  }

  export type ImagenesUncheckedCreateNestedOneWithoutPersonajeInput = {
    create?: XOR<ImagenesCreateWithoutPersonajeInput, ImagenesUncheckedCreateWithoutPersonajeInput>
    connectOrCreate?: ImagenesCreateOrConnectWithoutPersonajeInput
    connect?: ImagenesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PersonajesUpdategeneroInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ImagenesUpdateOneWithoutPersonajeNestedInput = {
    create?: XOR<ImagenesCreateWithoutPersonajeInput, ImagenesUncheckedCreateWithoutPersonajeInput>
    connectOrCreate?: ImagenesCreateOrConnectWithoutPersonajeInput
    upsert?: ImagenesUpsertWithoutPersonajeInput
    disconnect?: ImagenesWhereInput | boolean
    delete?: ImagenesWhereInput | boolean
    connect?: ImagenesWhereUniqueInput
    update?: XOR<XOR<ImagenesUpdateToOneWithWhereWithoutPersonajeInput, ImagenesUpdateWithoutPersonajeInput>, ImagenesUncheckedUpdateWithoutPersonajeInput>
  }

  export type ImagenesUncheckedUpdateOneWithoutPersonajeNestedInput = {
    create?: XOR<ImagenesCreateWithoutPersonajeInput, ImagenesUncheckedCreateWithoutPersonajeInput>
    connectOrCreate?: ImagenesCreateOrConnectWithoutPersonajeInput
    upsert?: ImagenesUpsertWithoutPersonajeInput
    disconnect?: ImagenesWhereInput | boolean
    delete?: ImagenesWhereInput | boolean
    connect?: ImagenesWhereUniqueInput
    update?: XOR<XOR<ImagenesUpdateToOneWithWhereWithoutPersonajeInput, ImagenesUpdateWithoutPersonajeInput>, ImagenesUncheckedUpdateWithoutPersonajeInput>
  }

  export type PersonajesCreateNestedOneWithoutImagenesInput = {
    create?: XOR<PersonajesCreateWithoutImagenesInput, PersonajesUncheckedCreateWithoutImagenesInput>
    connectOrCreate?: PersonajesCreateOrConnectWithoutImagenesInput
    connect?: PersonajesWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PersonajesUpdateOneWithoutImagenesNestedInput = {
    create?: XOR<PersonajesCreateWithoutImagenesInput, PersonajesUncheckedCreateWithoutImagenesInput>
    connectOrCreate?: PersonajesCreateOrConnectWithoutImagenesInput
    upsert?: PersonajesUpsertWithoutImagenesInput
    disconnect?: PersonajesWhereInput | boolean
    delete?: PersonajesWhereInput | boolean
    connect?: PersonajesWhereUniqueInput
    update?: XOR<XOR<PersonajesUpdateToOneWithWhereWithoutImagenesInput, PersonajesUpdateWithoutImagenesInput>, PersonajesUncheckedUpdateWithoutImagenesInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ImagenesCreateWithoutPersonajeInput = {
    idImagen?: string
    url?: string
    publicID?: string | null
  }

  export type ImagenesUncheckedCreateWithoutPersonajeInput = {
    idImagen?: string
    url?: string
    publicID?: string | null
  }

  export type ImagenesCreateOrConnectWithoutPersonajeInput = {
    where: ImagenesWhereUniqueInput
    create: XOR<ImagenesCreateWithoutPersonajeInput, ImagenesUncheckedCreateWithoutPersonajeInput>
  }

  export type ImagenesUpsertWithoutPersonajeInput = {
    update: XOR<ImagenesUpdateWithoutPersonajeInput, ImagenesUncheckedUpdateWithoutPersonajeInput>
    create: XOR<ImagenesCreateWithoutPersonajeInput, ImagenesUncheckedCreateWithoutPersonajeInput>
    where?: ImagenesWhereInput
  }

  export type ImagenesUpdateToOneWithWhereWithoutPersonajeInput = {
    where?: ImagenesWhereInput
    data: XOR<ImagenesUpdateWithoutPersonajeInput, ImagenesUncheckedUpdateWithoutPersonajeInput>
  }

  export type ImagenesUpdateWithoutPersonajeInput = {
    idImagen?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImagenesUncheckedUpdateWithoutPersonajeInput = {
    idImagen?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonajesCreateWithoutImagenesInput = {
    idPersonaje?: string
    nombre: string
    descripccion: string
    precio?: number | null
    inStock?: number | null
    fechaLanzamiento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genero?: PersonajesCreategeneroInput | string[]
  }

  export type PersonajesUncheckedCreateWithoutImagenesInput = {
    idPersonaje?: string
    nombre: string
    descripccion: string
    precio?: number | null
    inStock?: number | null
    fechaLanzamiento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genero?: PersonajesCreategeneroInput | string[]
  }

  export type PersonajesCreateOrConnectWithoutImagenesInput = {
    where: PersonajesWhereUniqueInput
    create: XOR<PersonajesCreateWithoutImagenesInput, PersonajesUncheckedCreateWithoutImagenesInput>
  }

  export type PersonajesUpsertWithoutImagenesInput = {
    update: XOR<PersonajesUpdateWithoutImagenesInput, PersonajesUncheckedUpdateWithoutImagenesInput>
    create: XOR<PersonajesCreateWithoutImagenesInput, PersonajesUncheckedCreateWithoutImagenesInput>
    where?: PersonajesWhereInput
  }

  export type PersonajesUpdateToOneWithWhereWithoutImagenesInput = {
    where?: PersonajesWhereInput
    data: XOR<PersonajesUpdateWithoutImagenesInput, PersonajesUncheckedUpdateWithoutImagenesInput>
  }

  export type PersonajesUpdateWithoutImagenesInput = {
    idPersonaje?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripccion?: StringFieldUpdateOperationsInput | string
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    inStock?: NullableIntFieldUpdateOperationsInput | number | null
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: PersonajesUpdategeneroInput | string[]
  }

  export type PersonajesUncheckedUpdateWithoutImagenesInput = {
    idPersonaje?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripccion?: StringFieldUpdateOperationsInput | string
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    inStock?: NullableIntFieldUpdateOperationsInput | number | null
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: PersonajesUpdategeneroInput | string[]
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