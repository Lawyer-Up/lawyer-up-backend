
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
 * Model Workspace
 * 
 */
export type Workspace = $Result.DefaultSelection<Prisma.$WorkspacePayload>
/**
 * Model CaseContext
 * 
 */
export type CaseContext = $Result.DefaultSelection<Prisma.$CaseContextPayload>
/**
 * Model Source
 * 
 */
export type Source = $Result.DefaultSelection<Prisma.$SourcePayload>
/**
 * Model GeneratedFile
 * 
 */
export type GeneratedFile = $Result.DefaultSelection<Prisma.$GeneratedFilePayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model TimelineEvent
 * 
 */
export type TimelineEvent = $Result.DefaultSelection<Prisma.$TimelineEventPayload>
/**
 * Model Argument
 * 
 */
export type Argument = $Result.DefaultSelection<Prisma.$ArgumentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CaseType: {
  CRIMINAL: 'CRIMINAL',
  CIVIL: 'CIVIL',
  FAMILY_LAW: 'FAMILY_LAW',
  PROPERTY_DISPUTE: 'PROPERTY_DISPUTE',
  CORPORATE: 'CORPORATE',
  CONSUMER_PROTECTION: 'CONSUMER_PROTECTION',
  LABOR_LAW: 'LABOR_LAW',
  TAX_DISPUTE: 'TAX_DISPUTE',
  INTELLECTUAL_PROPERTY: 'INTELLECTUAL_PROPERTY',
  OTHER: 'OTHER'
};

export type CaseType = (typeof CaseType)[keyof typeof CaseType]


export const UrgencyLevel: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type UrgencyLevel = (typeof UrgencyLevel)[keyof typeof UrgencyLevel]


export const FileType: {
  BRIEF: 'BRIEF',
  MOTION: 'MOTION',
  PLEADING: 'PLEADING',
  MEMORANDUM: 'MEMORANDUM',
  OTHER: 'OTHER'
};

export type FileType = (typeof FileType)[keyof typeof FileType]

}

export type CaseType = $Enums.CaseType

export const CaseType: typeof $Enums.CaseType

export type UrgencyLevel = $Enums.UrgencyLevel

export const UrgencyLevel: typeof $Enums.UrgencyLevel

export type FileType = $Enums.FileType

export const FileType: typeof $Enums.FileType

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
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caseContext`: Exposes CRUD operations for the **CaseContext** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CaseContexts
    * const caseContexts = await prisma.caseContext.findMany()
    * ```
    */
  get caseContext(): Prisma.CaseContextDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.source`: Exposes CRUD operations for the **Source** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sources
    * const sources = await prisma.source.findMany()
    * ```
    */
  get source(): Prisma.SourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generatedFile`: Exposes CRUD operations for the **GeneratedFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneratedFiles
    * const generatedFiles = await prisma.generatedFile.findMany()
    * ```
    */
  get generatedFile(): Prisma.GeneratedFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timelineEvent`: Exposes CRUD operations for the **TimelineEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimelineEvents
    * const timelineEvents = await prisma.timelineEvent.findMany()
    * ```
    */
  get timelineEvent(): Prisma.TimelineEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.argument`: Exposes CRUD operations for the **Argument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Arguments
    * const arguments = await prisma.argument.findMany()
    * ```
    */
  get argument(): Prisma.ArgumentDelegate<ExtArgs, ClientOptions>;
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
    Workspace: 'Workspace',
    CaseContext: 'CaseContext',
    Source: 'Source',
    GeneratedFile: 'GeneratedFile',
    Note: 'Note',
    TimelineEvent: 'TimelineEvent',
    Argument: 'Argument'
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
      modelProps: "user" | "workspace" | "caseContext" | "source" | "generatedFile" | "note" | "timelineEvent" | "argument"
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
      Workspace: {
        payload: Prisma.$WorkspacePayload<ExtArgs>
        fields: Prisma.WorkspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findFirst: {
            args: Prisma.WorkspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findMany: {
            args: Prisma.WorkspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          create: {
            args: Prisma.WorkspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          createMany: {
            args: Prisma.WorkspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          delete: {
            args: Prisma.WorkspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          update: {
            args: Prisma.WorkspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          aggregate: {
            args: Prisma.WorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace>
          }
          groupBy: {
            args: Prisma.WorkspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceCountAggregateOutputType> | number
          }
        }
      }
      CaseContext: {
        payload: Prisma.$CaseContextPayload<ExtArgs>
        fields: Prisma.CaseContextFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaseContextFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseContextPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaseContextFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseContextPayload>
          }
          findFirst: {
            args: Prisma.CaseContextFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseContextPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaseContextFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseContextPayload>
          }
          findMany: {
            args: Prisma.CaseContextFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseContextPayload>[]
          }
          create: {
            args: Prisma.CaseContextCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseContextPayload>
          }
          createMany: {
            args: Prisma.CaseContextCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaseContextCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseContextPayload>[]
          }
          delete: {
            args: Prisma.CaseContextDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseContextPayload>
          }
          update: {
            args: Prisma.CaseContextUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseContextPayload>
          }
          deleteMany: {
            args: Prisma.CaseContextDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaseContextUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaseContextUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseContextPayload>[]
          }
          upsert: {
            args: Prisma.CaseContextUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseContextPayload>
          }
          aggregate: {
            args: Prisma.CaseContextAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaseContext>
          }
          groupBy: {
            args: Prisma.CaseContextGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaseContextGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaseContextCountArgs<ExtArgs>
            result: $Utils.Optional<CaseContextCountAggregateOutputType> | number
          }
        }
      }
      Source: {
        payload: Prisma.$SourcePayload<ExtArgs>
        fields: Prisma.SourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          findFirst: {
            args: Prisma.SourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          findMany: {
            args: Prisma.SourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          create: {
            args: Prisma.SourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          createMany: {
            args: Prisma.SourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          delete: {
            args: Prisma.SourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          update: {
            args: Prisma.SourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          deleteMany: {
            args: Prisma.SourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          upsert: {
            args: Prisma.SourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          aggregate: {
            args: Prisma.SourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSource>
          }
          groupBy: {
            args: Prisma.SourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceCountArgs<ExtArgs>
            result: $Utils.Optional<SourceCountAggregateOutputType> | number
          }
        }
      }
      GeneratedFile: {
        payload: Prisma.$GeneratedFilePayload<ExtArgs>
        fields: Prisma.GeneratedFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneratedFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneratedFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedFilePayload>
          }
          findFirst: {
            args: Prisma.GeneratedFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneratedFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedFilePayload>
          }
          findMany: {
            args: Prisma.GeneratedFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedFilePayload>[]
          }
          create: {
            args: Prisma.GeneratedFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedFilePayload>
          }
          createMany: {
            args: Prisma.GeneratedFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneratedFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedFilePayload>[]
          }
          delete: {
            args: Prisma.GeneratedFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedFilePayload>
          }
          update: {
            args: Prisma.GeneratedFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedFilePayload>
          }
          deleteMany: {
            args: Prisma.GeneratedFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneratedFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneratedFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedFilePayload>[]
          }
          upsert: {
            args: Prisma.GeneratedFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedFilePayload>
          }
          aggregate: {
            args: Prisma.GeneratedFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneratedFile>
          }
          groupBy: {
            args: Prisma.GeneratedFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneratedFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneratedFileCountArgs<ExtArgs>
            result: $Utils.Optional<GeneratedFileCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      TimelineEvent: {
        payload: Prisma.$TimelineEventPayload<ExtArgs>
        fields: Prisma.TimelineEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimelineEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimelineEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEventPayload>
          }
          findFirst: {
            args: Prisma.TimelineEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimelineEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEventPayload>
          }
          findMany: {
            args: Prisma.TimelineEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEventPayload>[]
          }
          create: {
            args: Prisma.TimelineEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEventPayload>
          }
          createMany: {
            args: Prisma.TimelineEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimelineEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEventPayload>[]
          }
          delete: {
            args: Prisma.TimelineEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEventPayload>
          }
          update: {
            args: Prisma.TimelineEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEventPayload>
          }
          deleteMany: {
            args: Prisma.TimelineEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimelineEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimelineEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEventPayload>[]
          }
          upsert: {
            args: Prisma.TimelineEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEventPayload>
          }
          aggregate: {
            args: Prisma.TimelineEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimelineEvent>
          }
          groupBy: {
            args: Prisma.TimelineEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimelineEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimelineEventCountArgs<ExtArgs>
            result: $Utils.Optional<TimelineEventCountAggregateOutputType> | number
          }
        }
      }
      Argument: {
        payload: Prisma.$ArgumentPayload<ExtArgs>
        fields: Prisma.ArgumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArgumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArgumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload>
          }
          findFirst: {
            args: Prisma.ArgumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArgumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload>
          }
          findMany: {
            args: Prisma.ArgumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload>[]
          }
          create: {
            args: Prisma.ArgumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload>
          }
          createMany: {
            args: Prisma.ArgumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArgumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload>[]
          }
          delete: {
            args: Prisma.ArgumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload>
          }
          update: {
            args: Prisma.ArgumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload>
          }
          deleteMany: {
            args: Prisma.ArgumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArgumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArgumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload>[]
          }
          upsert: {
            args: Prisma.ArgumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArgumentPayload>
          }
          aggregate: {
            args: Prisma.ArgumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArgument>
          }
          groupBy: {
            args: Prisma.ArgumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArgumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArgumentCountArgs<ExtArgs>
            result: $Utils.Optional<ArgumentCountAggregateOutputType> | number
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
    workspace?: WorkspaceOmit
    caseContext?: CaseContextOmit
    source?: SourceOmit
    generatedFile?: GeneratedFileOmit
    note?: NoteOmit
    timelineEvent?: TimelineEventOmit
    argument?: ArgumentOmit
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
    workspaces: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | UserCountOutputTypeCountWorkspacesArgs
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
  export type UserCountOutputTypeCountWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
  }


  /**
   * Count Type WorkspaceCountOutputType
   */

  export type WorkspaceCountOutputType = {
    caseContext: number
    sources: number
    generatedFiles: number
    notes: number
    timeline: number
    arguments: number
  }

  export type WorkspaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caseContext?: boolean | WorkspaceCountOutputTypeCountCaseContextArgs
    sources?: boolean | WorkspaceCountOutputTypeCountSourcesArgs
    generatedFiles?: boolean | WorkspaceCountOutputTypeCountGeneratedFilesArgs
    notes?: boolean | WorkspaceCountOutputTypeCountNotesArgs
    timeline?: boolean | WorkspaceCountOutputTypeCountTimelineArgs
    arguments?: boolean | WorkspaceCountOutputTypeCountArgumentsArgs
  }

  // Custom InputTypes
  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountCaseContextArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseContextWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountSourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountGeneratedFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedFileWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountTimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineEventWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountArgumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArgumentWhereInput
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
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
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
    email: string
    name: string | null
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
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workspaces: Prisma.$WorkspacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
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
    workspaces<T extends User$workspacesArgs<ExtArgs> = {}>(args?: Subset<T, User$workspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
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
   * User.workspaces
   */
  export type User$workspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    cursor?: WorkspaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
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
   * Model Workspace
   */

  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkspaceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspace to aggregate.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithAggregationInput | WorkspaceOrderByWithAggregationInput[]
    by: WorkspaceScalarFieldEnum[] | WorkspaceScalarFieldEnum
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }

  export type WorkspaceGroupByOutputType = {
    id: string
    name: string
    description: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    caseContext?: boolean | Workspace$caseContextArgs<ExtArgs>
    sources?: boolean | Workspace$sourcesArgs<ExtArgs>
    generatedFiles?: boolean | Workspace$generatedFilesArgs<ExtArgs>
    notes?: boolean | Workspace$notesArgs<ExtArgs>
    timeline?: boolean | Workspace$timelineArgs<ExtArgs>
    arguments?: boolean | Workspace$argumentsArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["workspace"]>
  export type WorkspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    caseContext?: boolean | Workspace$caseContextArgs<ExtArgs>
    sources?: boolean | Workspace$sourcesArgs<ExtArgs>
    generatedFiles?: boolean | Workspace$generatedFilesArgs<ExtArgs>
    notes?: boolean | Workspace$notesArgs<ExtArgs>
    timeline?: boolean | Workspace$timelineArgs<ExtArgs>
    arguments?: boolean | Workspace$argumentsArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workspace"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      caseContext: Prisma.$CaseContextPayload<ExtArgs>[]
      sources: Prisma.$SourcePayload<ExtArgs>[]
      generatedFiles: Prisma.$GeneratedFilePayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
      timeline: Prisma.$TimelineEventPayload<ExtArgs>[]
      arguments: Prisma.$ArgumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workspace"]>
    composites: {}
  }

  type WorkspaceGetPayload<S extends boolean | null | undefined | WorkspaceDefaultArgs> = $Result.GetResult<Prisma.$WorkspacePayload, S>

  type WorkspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface WorkspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workspace'], meta: { name: 'Workspace' } }
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceFindUniqueArgs>(args: SelectSubset<T, WorkspaceFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceFindFirstArgs>(args?: SelectSubset<T, WorkspaceFindFirstArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceFindManyArgs>(args?: SelectSubset<T, WorkspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
     */
    create<T extends WorkspaceCreateArgs>(args: SelectSubset<T, WorkspaceCreateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspaces.
     * @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceCreateManyArgs>(args?: SelectSubset<T, WorkspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {WorkspaceCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceDeleteArgs>(args: SelectSubset<T, WorkspaceDeleteArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceUpdateArgs>(args: SelectSubset<T, WorkspaceUpdateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceDeleteManyArgs>(args?: SelectSubset<T, WorkspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceUpdateManyArgs>(args: SelectSubset<T, WorkspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces and returns the data updated in the database.
     * @param {WorkspaceUpdateManyAndReturnArgs} args - Arguments to update many Workspaces.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkspaceUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceUpsertArgs>(args: SelectSubset<T, WorkspaceUpsertArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
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
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workspace model
   */
  readonly fields: WorkspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    caseContext<T extends Workspace$caseContextArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$caseContextArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseContextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sources<T extends Workspace$sourcesArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$sourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generatedFiles<T extends Workspace$generatedFilesArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$generatedFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Workspace$notesArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timeline<T extends Workspace$timelineArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$timelineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    arguments<T extends Workspace$argumentsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$argumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workspace model
   */
  interface WorkspaceFieldRefs {
    readonly id: FieldRef<"Workspace", 'String'>
    readonly name: FieldRef<"Workspace", 'String'>
    readonly description: FieldRef<"Workspace", 'String'>
    readonly userId: FieldRef<"Workspace", 'String'>
    readonly createdAt: FieldRef<"Workspace", 'DateTime'>
    readonly updatedAt: FieldRef<"Workspace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workspace findUnique
   */
  export type WorkspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findFirst
   */
  export type WorkspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspaces to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Workspace.
     */
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }

  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workspace createManyAndReturn
   */
  export type WorkspaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Workspace.
     */
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
  }

  /**
   * Workspace updateManyAndReturn
   */
  export type WorkspaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     */
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     */
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }

  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter which Workspace to delete.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspaces to delete
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to delete.
     */
    limit?: number
  }

  /**
   * Workspace.caseContext
   */
  export type Workspace$caseContextArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseContext
     */
    select?: CaseContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseContext
     */
    omit?: CaseContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseContextInclude<ExtArgs> | null
    where?: CaseContextWhereInput
    orderBy?: CaseContextOrderByWithRelationInput | CaseContextOrderByWithRelationInput[]
    cursor?: CaseContextWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseContextScalarFieldEnum | CaseContextScalarFieldEnum[]
  }

  /**
   * Workspace.sources
   */
  export type Workspace$sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    where?: SourceWhereInput
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    cursor?: SourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Workspace.generatedFiles
   */
  export type Workspace$generatedFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedFile
     */
    select?: GeneratedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedFile
     */
    omit?: GeneratedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedFileInclude<ExtArgs> | null
    where?: GeneratedFileWhereInput
    orderBy?: GeneratedFileOrderByWithRelationInput | GeneratedFileOrderByWithRelationInput[]
    cursor?: GeneratedFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedFileScalarFieldEnum | GeneratedFileScalarFieldEnum[]
  }

  /**
   * Workspace.notes
   */
  export type Workspace$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Workspace.timeline
   */
  export type Workspace$timelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: TimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: TimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEventInclude<ExtArgs> | null
    where?: TimelineEventWhereInput
    orderBy?: TimelineEventOrderByWithRelationInput | TimelineEventOrderByWithRelationInput[]
    cursor?: TimelineEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimelineEventScalarFieldEnum | TimelineEventScalarFieldEnum[]
  }

  /**
   * Workspace.arguments
   */
  export type Workspace$argumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Argument
     */
    omit?: ArgumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArgumentInclude<ExtArgs> | null
    where?: ArgumentWhereInput
    orderBy?: ArgumentOrderByWithRelationInput | ArgumentOrderByWithRelationInput[]
    cursor?: ArgumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArgumentScalarFieldEnum | ArgumentScalarFieldEnum[]
  }

  /**
   * Workspace without action
   */
  export type WorkspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
  }


  /**
   * Model CaseContext
   */

  export type AggregateCaseContext = {
    _count: CaseContextCountAggregateOutputType | null
    _avg: CaseContextAvgAggregateOutputType | null
    _sum: CaseContextSumAggregateOutputType | null
    _min: CaseContextMinAggregateOutputType | null
    _max: CaseContextMaxAggregateOutputType | null
  }

  export type CaseContextAvgAggregateOutputType = {
    clientAge: number | null
  }

  export type CaseContextSumAggregateOutputType = {
    clientAge: number | null
  }

  export type CaseContextMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    clientName: string | null
    clientAge: number | null
    clientContact: string | null
    clientEmail: string | null
    clientOccupation: string | null
    clientAddress: string | null
    firText: string | null
    caseType: $Enums.CaseType | null
    description: string | null
    incidentDate: Date | null
    witnesses: string | null
    location: string | null
    policeStation: string | null
    opposingParty: string | null
    urgency: $Enums.UrgencyLevel | null
    courtOrders: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CaseContextMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    clientName: string | null
    clientAge: number | null
    clientContact: string | null
    clientEmail: string | null
    clientOccupation: string | null
    clientAddress: string | null
    firText: string | null
    caseType: $Enums.CaseType | null
    description: string | null
    incidentDate: Date | null
    witnesses: string | null
    location: string | null
    policeStation: string | null
    opposingParty: string | null
    urgency: $Enums.UrgencyLevel | null
    courtOrders: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CaseContextCountAggregateOutputType = {
    id: number
    workspaceId: number
    clientName: number
    clientAge: number
    clientContact: number
    clientEmail: number
    clientOccupation: number
    clientAddress: number
    firText: number
    caseType: number
    description: number
    incidentDate: number
    witnesses: number
    location: number
    policeStation: number
    opposingParty: number
    urgency: number
    courtOrders: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CaseContextAvgAggregateInputType = {
    clientAge?: true
  }

  export type CaseContextSumAggregateInputType = {
    clientAge?: true
  }

  export type CaseContextMinAggregateInputType = {
    id?: true
    workspaceId?: true
    clientName?: true
    clientAge?: true
    clientContact?: true
    clientEmail?: true
    clientOccupation?: true
    clientAddress?: true
    firText?: true
    caseType?: true
    description?: true
    incidentDate?: true
    witnesses?: true
    location?: true
    policeStation?: true
    opposingParty?: true
    urgency?: true
    courtOrders?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CaseContextMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    clientName?: true
    clientAge?: true
    clientContact?: true
    clientEmail?: true
    clientOccupation?: true
    clientAddress?: true
    firText?: true
    caseType?: true
    description?: true
    incidentDate?: true
    witnesses?: true
    location?: true
    policeStation?: true
    opposingParty?: true
    urgency?: true
    courtOrders?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CaseContextCountAggregateInputType = {
    id?: true
    workspaceId?: true
    clientName?: true
    clientAge?: true
    clientContact?: true
    clientEmail?: true
    clientOccupation?: true
    clientAddress?: true
    firText?: true
    caseType?: true
    description?: true
    incidentDate?: true
    witnesses?: true
    location?: true
    policeStation?: true
    opposingParty?: true
    urgency?: true
    courtOrders?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CaseContextAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseContext to aggregate.
     */
    where?: CaseContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseContexts to fetch.
     */
    orderBy?: CaseContextOrderByWithRelationInput | CaseContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaseContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseContexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CaseContexts
    **/
    _count?: true | CaseContextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaseContextAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaseContextSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaseContextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaseContextMaxAggregateInputType
  }

  export type GetCaseContextAggregateType<T extends CaseContextAggregateArgs> = {
        [P in keyof T & keyof AggregateCaseContext]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaseContext[P]>
      : GetScalarType<T[P], AggregateCaseContext[P]>
  }




  export type CaseContextGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseContextWhereInput
    orderBy?: CaseContextOrderByWithAggregationInput | CaseContextOrderByWithAggregationInput[]
    by: CaseContextScalarFieldEnum[] | CaseContextScalarFieldEnum
    having?: CaseContextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaseContextCountAggregateInputType | true
    _avg?: CaseContextAvgAggregateInputType
    _sum?: CaseContextSumAggregateInputType
    _min?: CaseContextMinAggregateInputType
    _max?: CaseContextMaxAggregateInputType
  }

  export type CaseContextGroupByOutputType = {
    id: string
    workspaceId: string
    clientName: string | null
    clientAge: number | null
    clientContact: string | null
    clientEmail: string | null
    clientOccupation: string | null
    clientAddress: string | null
    firText: string | null
    caseType: $Enums.CaseType | null
    description: string | null
    incidentDate: Date | null
    witnesses: string | null
    location: string | null
    policeStation: string | null
    opposingParty: string | null
    urgency: $Enums.UrgencyLevel | null
    courtOrders: string | null
    createdAt: Date
    updatedAt: Date
    _count: CaseContextCountAggregateOutputType | null
    _avg: CaseContextAvgAggregateOutputType | null
    _sum: CaseContextSumAggregateOutputType | null
    _min: CaseContextMinAggregateOutputType | null
    _max: CaseContextMaxAggregateOutputType | null
  }

  type GetCaseContextGroupByPayload<T extends CaseContextGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaseContextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaseContextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaseContextGroupByOutputType[P]>
            : GetScalarType<T[P], CaseContextGroupByOutputType[P]>
        }
      >
    >


  export type CaseContextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    clientName?: boolean
    clientAge?: boolean
    clientContact?: boolean
    clientEmail?: boolean
    clientOccupation?: boolean
    clientAddress?: boolean
    firText?: boolean
    caseType?: boolean
    description?: boolean
    incidentDate?: boolean
    witnesses?: boolean
    location?: boolean
    policeStation?: boolean
    opposingParty?: boolean
    urgency?: boolean
    courtOrders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseContext"]>

  export type CaseContextSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    clientName?: boolean
    clientAge?: boolean
    clientContact?: boolean
    clientEmail?: boolean
    clientOccupation?: boolean
    clientAddress?: boolean
    firText?: boolean
    caseType?: boolean
    description?: boolean
    incidentDate?: boolean
    witnesses?: boolean
    location?: boolean
    policeStation?: boolean
    opposingParty?: boolean
    urgency?: boolean
    courtOrders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseContext"]>

  export type CaseContextSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    clientName?: boolean
    clientAge?: boolean
    clientContact?: boolean
    clientEmail?: boolean
    clientOccupation?: boolean
    clientAddress?: boolean
    firText?: boolean
    caseType?: boolean
    description?: boolean
    incidentDate?: boolean
    witnesses?: boolean
    location?: boolean
    policeStation?: boolean
    opposingParty?: boolean
    urgency?: boolean
    courtOrders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseContext"]>

  export type CaseContextSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    clientName?: boolean
    clientAge?: boolean
    clientContact?: boolean
    clientEmail?: boolean
    clientOccupation?: boolean
    clientAddress?: boolean
    firText?: boolean
    caseType?: boolean
    description?: boolean
    incidentDate?: boolean
    witnesses?: boolean
    location?: boolean
    policeStation?: boolean
    opposingParty?: boolean
    urgency?: boolean
    courtOrders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CaseContextOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "clientName" | "clientAge" | "clientContact" | "clientEmail" | "clientOccupation" | "clientAddress" | "firText" | "caseType" | "description" | "incidentDate" | "witnesses" | "location" | "policeStation" | "opposingParty" | "urgency" | "courtOrders" | "createdAt" | "updatedAt", ExtArgs["result"]["caseContext"]>
  export type CaseContextInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type CaseContextIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type CaseContextIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $CaseContextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CaseContext"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      clientName: string | null
      clientAge: number | null
      clientContact: string | null
      clientEmail: string | null
      clientOccupation: string | null
      clientAddress: string | null
      firText: string | null
      caseType: $Enums.CaseType | null
      description: string | null
      incidentDate: Date | null
      witnesses: string | null
      location: string | null
      policeStation: string | null
      opposingParty: string | null
      urgency: $Enums.UrgencyLevel | null
      courtOrders: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["caseContext"]>
    composites: {}
  }

  type CaseContextGetPayload<S extends boolean | null | undefined | CaseContextDefaultArgs> = $Result.GetResult<Prisma.$CaseContextPayload, S>

  type CaseContextCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaseContextFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaseContextCountAggregateInputType | true
    }

  export interface CaseContextDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CaseContext'], meta: { name: 'CaseContext' } }
    /**
     * Find zero or one CaseContext that matches the filter.
     * @param {CaseContextFindUniqueArgs} args - Arguments to find a CaseContext
     * @example
     * // Get one CaseContext
     * const caseContext = await prisma.caseContext.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaseContextFindUniqueArgs>(args: SelectSubset<T, CaseContextFindUniqueArgs<ExtArgs>>): Prisma__CaseContextClient<$Result.GetResult<Prisma.$CaseContextPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CaseContext that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaseContextFindUniqueOrThrowArgs} args - Arguments to find a CaseContext
     * @example
     * // Get one CaseContext
     * const caseContext = await prisma.caseContext.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaseContextFindUniqueOrThrowArgs>(args: SelectSubset<T, CaseContextFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaseContextClient<$Result.GetResult<Prisma.$CaseContextPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseContext that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseContextFindFirstArgs} args - Arguments to find a CaseContext
     * @example
     * // Get one CaseContext
     * const caseContext = await prisma.caseContext.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaseContextFindFirstArgs>(args?: SelectSubset<T, CaseContextFindFirstArgs<ExtArgs>>): Prisma__CaseContextClient<$Result.GetResult<Prisma.$CaseContextPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseContext that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseContextFindFirstOrThrowArgs} args - Arguments to find a CaseContext
     * @example
     * // Get one CaseContext
     * const caseContext = await prisma.caseContext.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaseContextFindFirstOrThrowArgs>(args?: SelectSubset<T, CaseContextFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaseContextClient<$Result.GetResult<Prisma.$CaseContextPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CaseContexts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseContextFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaseContexts
     * const caseContexts = await prisma.caseContext.findMany()
     * 
     * // Get first 10 CaseContexts
     * const caseContexts = await prisma.caseContext.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caseContextWithIdOnly = await prisma.caseContext.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaseContextFindManyArgs>(args?: SelectSubset<T, CaseContextFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseContextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CaseContext.
     * @param {CaseContextCreateArgs} args - Arguments to create a CaseContext.
     * @example
     * // Create one CaseContext
     * const CaseContext = await prisma.caseContext.create({
     *   data: {
     *     // ... data to create a CaseContext
     *   }
     * })
     * 
     */
    create<T extends CaseContextCreateArgs>(args: SelectSubset<T, CaseContextCreateArgs<ExtArgs>>): Prisma__CaseContextClient<$Result.GetResult<Prisma.$CaseContextPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CaseContexts.
     * @param {CaseContextCreateManyArgs} args - Arguments to create many CaseContexts.
     * @example
     * // Create many CaseContexts
     * const caseContext = await prisma.caseContext.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaseContextCreateManyArgs>(args?: SelectSubset<T, CaseContextCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CaseContexts and returns the data saved in the database.
     * @param {CaseContextCreateManyAndReturnArgs} args - Arguments to create many CaseContexts.
     * @example
     * // Create many CaseContexts
     * const caseContext = await prisma.caseContext.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CaseContexts and only return the `id`
     * const caseContextWithIdOnly = await prisma.caseContext.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaseContextCreateManyAndReturnArgs>(args?: SelectSubset<T, CaseContextCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseContextPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CaseContext.
     * @param {CaseContextDeleteArgs} args - Arguments to delete one CaseContext.
     * @example
     * // Delete one CaseContext
     * const CaseContext = await prisma.caseContext.delete({
     *   where: {
     *     // ... filter to delete one CaseContext
     *   }
     * })
     * 
     */
    delete<T extends CaseContextDeleteArgs>(args: SelectSubset<T, CaseContextDeleteArgs<ExtArgs>>): Prisma__CaseContextClient<$Result.GetResult<Prisma.$CaseContextPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CaseContext.
     * @param {CaseContextUpdateArgs} args - Arguments to update one CaseContext.
     * @example
     * // Update one CaseContext
     * const caseContext = await prisma.caseContext.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaseContextUpdateArgs>(args: SelectSubset<T, CaseContextUpdateArgs<ExtArgs>>): Prisma__CaseContextClient<$Result.GetResult<Prisma.$CaseContextPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CaseContexts.
     * @param {CaseContextDeleteManyArgs} args - Arguments to filter CaseContexts to delete.
     * @example
     * // Delete a few CaseContexts
     * const { count } = await prisma.caseContext.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaseContextDeleteManyArgs>(args?: SelectSubset<T, CaseContextDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaseContexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseContextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaseContexts
     * const caseContext = await prisma.caseContext.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaseContextUpdateManyArgs>(args: SelectSubset<T, CaseContextUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaseContexts and returns the data updated in the database.
     * @param {CaseContextUpdateManyAndReturnArgs} args - Arguments to update many CaseContexts.
     * @example
     * // Update many CaseContexts
     * const caseContext = await prisma.caseContext.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CaseContexts and only return the `id`
     * const caseContextWithIdOnly = await prisma.caseContext.updateManyAndReturn({
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
    updateManyAndReturn<T extends CaseContextUpdateManyAndReturnArgs>(args: SelectSubset<T, CaseContextUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseContextPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CaseContext.
     * @param {CaseContextUpsertArgs} args - Arguments to update or create a CaseContext.
     * @example
     * // Update or create a CaseContext
     * const caseContext = await prisma.caseContext.upsert({
     *   create: {
     *     // ... data to create a CaseContext
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaseContext we want to update
     *   }
     * })
     */
    upsert<T extends CaseContextUpsertArgs>(args: SelectSubset<T, CaseContextUpsertArgs<ExtArgs>>): Prisma__CaseContextClient<$Result.GetResult<Prisma.$CaseContextPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CaseContexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseContextCountArgs} args - Arguments to filter CaseContexts to count.
     * @example
     * // Count the number of CaseContexts
     * const count = await prisma.caseContext.count({
     *   where: {
     *     // ... the filter for the CaseContexts we want to count
     *   }
     * })
    **/
    count<T extends CaseContextCountArgs>(
      args?: Subset<T, CaseContextCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaseContextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CaseContext.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseContextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CaseContextAggregateArgs>(args: Subset<T, CaseContextAggregateArgs>): Prisma.PrismaPromise<GetCaseContextAggregateType<T>>

    /**
     * Group by CaseContext.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseContextGroupByArgs} args - Group by arguments.
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
      T extends CaseContextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaseContextGroupByArgs['orderBy'] }
        : { orderBy?: CaseContextGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CaseContextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseContextGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CaseContext model
   */
  readonly fields: CaseContextFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CaseContext.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaseContextClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CaseContext model
   */
  interface CaseContextFieldRefs {
    readonly id: FieldRef<"CaseContext", 'String'>
    readonly workspaceId: FieldRef<"CaseContext", 'String'>
    readonly clientName: FieldRef<"CaseContext", 'String'>
    readonly clientAge: FieldRef<"CaseContext", 'Int'>
    readonly clientContact: FieldRef<"CaseContext", 'String'>
    readonly clientEmail: FieldRef<"CaseContext", 'String'>
    readonly clientOccupation: FieldRef<"CaseContext", 'String'>
    readonly clientAddress: FieldRef<"CaseContext", 'String'>
    readonly firText: FieldRef<"CaseContext", 'String'>
    readonly caseType: FieldRef<"CaseContext", 'CaseType'>
    readonly description: FieldRef<"CaseContext", 'String'>
    readonly incidentDate: FieldRef<"CaseContext", 'DateTime'>
    readonly witnesses: FieldRef<"CaseContext", 'String'>
    readonly location: FieldRef<"CaseContext", 'String'>
    readonly policeStation: FieldRef<"CaseContext", 'String'>
    readonly opposingParty: FieldRef<"CaseContext", 'String'>
    readonly urgency: FieldRef<"CaseContext", 'UrgencyLevel'>
    readonly courtOrders: FieldRef<"CaseContext", 'String'>
    readonly createdAt: FieldRef<"CaseContext", 'DateTime'>
    readonly updatedAt: FieldRef<"CaseContext", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CaseContext findUnique
   */
  export type CaseContextFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseContext
     */
    select?: CaseContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseContext
     */
    omit?: CaseContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseContextInclude<ExtArgs> | null
    /**
     * Filter, which CaseContext to fetch.
     */
    where: CaseContextWhereUniqueInput
  }

  /**
   * CaseContext findUniqueOrThrow
   */
  export type CaseContextFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseContext
     */
    select?: CaseContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseContext
     */
    omit?: CaseContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseContextInclude<ExtArgs> | null
    /**
     * Filter, which CaseContext to fetch.
     */
    where: CaseContextWhereUniqueInput
  }

  /**
   * CaseContext findFirst
   */
  export type CaseContextFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseContext
     */
    select?: CaseContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseContext
     */
    omit?: CaseContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseContextInclude<ExtArgs> | null
    /**
     * Filter, which CaseContext to fetch.
     */
    where?: CaseContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseContexts to fetch.
     */
    orderBy?: CaseContextOrderByWithRelationInput | CaseContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseContexts.
     */
    cursor?: CaseContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseContexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseContexts.
     */
    distinct?: CaseContextScalarFieldEnum | CaseContextScalarFieldEnum[]
  }

  /**
   * CaseContext findFirstOrThrow
   */
  export type CaseContextFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseContext
     */
    select?: CaseContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseContext
     */
    omit?: CaseContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseContextInclude<ExtArgs> | null
    /**
     * Filter, which CaseContext to fetch.
     */
    where?: CaseContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseContexts to fetch.
     */
    orderBy?: CaseContextOrderByWithRelationInput | CaseContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseContexts.
     */
    cursor?: CaseContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseContexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseContexts.
     */
    distinct?: CaseContextScalarFieldEnum | CaseContextScalarFieldEnum[]
  }

  /**
   * CaseContext findMany
   */
  export type CaseContextFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseContext
     */
    select?: CaseContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseContext
     */
    omit?: CaseContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseContextInclude<ExtArgs> | null
    /**
     * Filter, which CaseContexts to fetch.
     */
    where?: CaseContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseContexts to fetch.
     */
    orderBy?: CaseContextOrderByWithRelationInput | CaseContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CaseContexts.
     */
    cursor?: CaseContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseContexts.
     */
    skip?: number
    distinct?: CaseContextScalarFieldEnum | CaseContextScalarFieldEnum[]
  }

  /**
   * CaseContext create
   */
  export type CaseContextCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseContext
     */
    select?: CaseContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseContext
     */
    omit?: CaseContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseContextInclude<ExtArgs> | null
    /**
     * The data needed to create a CaseContext.
     */
    data: XOR<CaseContextCreateInput, CaseContextUncheckedCreateInput>
  }

  /**
   * CaseContext createMany
   */
  export type CaseContextCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CaseContexts.
     */
    data: CaseContextCreateManyInput | CaseContextCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CaseContext createManyAndReturn
   */
  export type CaseContextCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseContext
     */
    select?: CaseContextSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaseContext
     */
    omit?: CaseContextOmit<ExtArgs> | null
    /**
     * The data used to create many CaseContexts.
     */
    data: CaseContextCreateManyInput | CaseContextCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseContextIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaseContext update
   */
  export type CaseContextUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseContext
     */
    select?: CaseContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseContext
     */
    omit?: CaseContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseContextInclude<ExtArgs> | null
    /**
     * The data needed to update a CaseContext.
     */
    data: XOR<CaseContextUpdateInput, CaseContextUncheckedUpdateInput>
    /**
     * Choose, which CaseContext to update.
     */
    where: CaseContextWhereUniqueInput
  }

  /**
   * CaseContext updateMany
   */
  export type CaseContextUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CaseContexts.
     */
    data: XOR<CaseContextUpdateManyMutationInput, CaseContextUncheckedUpdateManyInput>
    /**
     * Filter which CaseContexts to update
     */
    where?: CaseContextWhereInput
    /**
     * Limit how many CaseContexts to update.
     */
    limit?: number
  }

  /**
   * CaseContext updateManyAndReturn
   */
  export type CaseContextUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseContext
     */
    select?: CaseContextSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaseContext
     */
    omit?: CaseContextOmit<ExtArgs> | null
    /**
     * The data used to update CaseContexts.
     */
    data: XOR<CaseContextUpdateManyMutationInput, CaseContextUncheckedUpdateManyInput>
    /**
     * Filter which CaseContexts to update
     */
    where?: CaseContextWhereInput
    /**
     * Limit how many CaseContexts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseContextIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaseContext upsert
   */
  export type CaseContextUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseContext
     */
    select?: CaseContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseContext
     */
    omit?: CaseContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseContextInclude<ExtArgs> | null
    /**
     * The filter to search for the CaseContext to update in case it exists.
     */
    where: CaseContextWhereUniqueInput
    /**
     * In case the CaseContext found by the `where` argument doesn't exist, create a new CaseContext with this data.
     */
    create: XOR<CaseContextCreateInput, CaseContextUncheckedCreateInput>
    /**
     * In case the CaseContext was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaseContextUpdateInput, CaseContextUncheckedUpdateInput>
  }

  /**
   * CaseContext delete
   */
  export type CaseContextDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseContext
     */
    select?: CaseContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseContext
     */
    omit?: CaseContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseContextInclude<ExtArgs> | null
    /**
     * Filter which CaseContext to delete.
     */
    where: CaseContextWhereUniqueInput
  }

  /**
   * CaseContext deleteMany
   */
  export type CaseContextDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseContexts to delete
     */
    where?: CaseContextWhereInput
    /**
     * Limit how many CaseContexts to delete.
     */
    limit?: number
  }

  /**
   * CaseContext without action
   */
  export type CaseContextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseContext
     */
    select?: CaseContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseContext
     */
    omit?: CaseContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseContextInclude<ExtArgs> | null
  }


  /**
   * Model Source
   */

  export type AggregateSource = {
    _count: SourceCountAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  export type SourceMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SourceMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SourceCountAggregateOutputType = {
    id: number
    workspaceId: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SourceMinAggregateInputType = {
    id?: true
    workspaceId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SourceMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SourceCountAggregateInputType = {
    id?: true
    workspaceId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Source to aggregate.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sources
    **/
    _count?: true | SourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceMaxAggregateInputType
  }

  export type GetSourceAggregateType<T extends SourceAggregateArgs> = {
        [P in keyof T & keyof AggregateSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSource[P]>
      : GetScalarType<T[P], AggregateSource[P]>
  }




  export type SourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceWhereInput
    orderBy?: SourceOrderByWithAggregationInput | SourceOrderByWithAggregationInput[]
    by: SourceScalarFieldEnum[] | SourceScalarFieldEnum
    having?: SourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceCountAggregateInputType | true
    _min?: SourceMinAggregateInputType
    _max?: SourceMaxAggregateInputType
  }

  export type SourceGroupByOutputType = {
    id: string
    workspaceId: string
    title: string | null
    content: string | null
    createdAt: Date
    updatedAt: Date
    _count: SourceCountAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  type GetSourceGroupByPayload<T extends SourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceGroupByOutputType[P]>
            : GetScalarType<T[P], SourceGroupByOutputType[P]>
        }
      >
    >


  export type SourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["source"]>

  export type SourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["source"]>

  export type SourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["source"]>

  export type SourceSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "title" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["source"]>
  export type SourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type SourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type SourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $SourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Source"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      title: string | null
      content: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["source"]>
    composites: {}
  }

  type SourceGetPayload<S extends boolean | null | undefined | SourceDefaultArgs> = $Result.GetResult<Prisma.$SourcePayload, S>

  type SourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceCountAggregateInputType | true
    }

  export interface SourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Source'], meta: { name: 'Source' } }
    /**
     * Find zero or one Source that matches the filter.
     * @param {SourceFindUniqueArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceFindUniqueArgs>(args: SelectSubset<T, SourceFindUniqueArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Source that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourceFindUniqueOrThrowArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Source that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindFirstArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceFindFirstArgs>(args?: SelectSubset<T, SourceFindFirstArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Source that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindFirstOrThrowArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sources
     * const sources = await prisma.source.findMany()
     * 
     * // Get first 10 Sources
     * const sources = await prisma.source.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceWithIdOnly = await prisma.source.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceFindManyArgs>(args?: SelectSubset<T, SourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Source.
     * @param {SourceCreateArgs} args - Arguments to create a Source.
     * @example
     * // Create one Source
     * const Source = await prisma.source.create({
     *   data: {
     *     // ... data to create a Source
     *   }
     * })
     * 
     */
    create<T extends SourceCreateArgs>(args: SelectSubset<T, SourceCreateArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sources.
     * @param {SourceCreateManyArgs} args - Arguments to create many Sources.
     * @example
     * // Create many Sources
     * const source = await prisma.source.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceCreateManyArgs>(args?: SelectSubset<T, SourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sources and returns the data saved in the database.
     * @param {SourceCreateManyAndReturnArgs} args - Arguments to create many Sources.
     * @example
     * // Create many Sources
     * const source = await prisma.source.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sources and only return the `id`
     * const sourceWithIdOnly = await prisma.source.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Source.
     * @param {SourceDeleteArgs} args - Arguments to delete one Source.
     * @example
     * // Delete one Source
     * const Source = await prisma.source.delete({
     *   where: {
     *     // ... filter to delete one Source
     *   }
     * })
     * 
     */
    delete<T extends SourceDeleteArgs>(args: SelectSubset<T, SourceDeleteArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Source.
     * @param {SourceUpdateArgs} args - Arguments to update one Source.
     * @example
     * // Update one Source
     * const source = await prisma.source.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceUpdateArgs>(args: SelectSubset<T, SourceUpdateArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sources.
     * @param {SourceDeleteManyArgs} args - Arguments to filter Sources to delete.
     * @example
     * // Delete a few Sources
     * const { count } = await prisma.source.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceDeleteManyArgs>(args?: SelectSubset<T, SourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sources
     * const source = await prisma.source.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceUpdateManyArgs>(args: SelectSubset<T, SourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources and returns the data updated in the database.
     * @param {SourceUpdateManyAndReturnArgs} args - Arguments to update many Sources.
     * @example
     * // Update many Sources
     * const source = await prisma.source.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sources and only return the `id`
     * const sourceWithIdOnly = await prisma.source.updateManyAndReturn({
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
    updateManyAndReturn<T extends SourceUpdateManyAndReturnArgs>(args: SelectSubset<T, SourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Source.
     * @param {SourceUpsertArgs} args - Arguments to update or create a Source.
     * @example
     * // Update or create a Source
     * const source = await prisma.source.upsert({
     *   create: {
     *     // ... data to create a Source
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Source we want to update
     *   }
     * })
     */
    upsert<T extends SourceUpsertArgs>(args: SelectSubset<T, SourceUpsertArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceCountArgs} args - Arguments to filter Sources to count.
     * @example
     * // Count the number of Sources
     * const count = await prisma.source.count({
     *   where: {
     *     // ... the filter for the Sources we want to count
     *   }
     * })
    **/
    count<T extends SourceCountArgs>(
      args?: Subset<T, SourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SourceAggregateArgs>(args: Subset<T, SourceAggregateArgs>): Prisma.PrismaPromise<GetSourceAggregateType<T>>

    /**
     * Group by Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceGroupByArgs} args - Group by arguments.
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
      T extends SourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceGroupByArgs['orderBy'] }
        : { orderBy?: SourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Source model
   */
  readonly fields: SourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Source.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Source model
   */
  interface SourceFieldRefs {
    readonly id: FieldRef<"Source", 'String'>
    readonly workspaceId: FieldRef<"Source", 'String'>
    readonly title: FieldRef<"Source", 'String'>
    readonly content: FieldRef<"Source", 'String'>
    readonly createdAt: FieldRef<"Source", 'DateTime'>
    readonly updatedAt: FieldRef<"Source", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Source findUnique
   */
  export type SourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source findUniqueOrThrow
   */
  export type SourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source findFirst
   */
  export type SourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sources.
     */
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source findFirstOrThrow
   */
  export type SourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sources.
     */
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source findMany
   */
  export type SourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Sources to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source create
   */
  export type SourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Source.
     */
    data: XOR<SourceCreateInput, SourceUncheckedCreateInput>
  }

  /**
   * Source createMany
   */
  export type SourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sources.
     */
    data: SourceCreateManyInput | SourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Source createManyAndReturn
   */
  export type SourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * The data used to create many Sources.
     */
    data: SourceCreateManyInput | SourceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Source update
   */
  export type SourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Source.
     */
    data: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
    /**
     * Choose, which Source to update.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source updateMany
   */
  export type SourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sources.
     */
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyInput>
    /**
     * Filter which Sources to update
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to update.
     */
    limit?: number
  }

  /**
   * Source updateManyAndReturn
   */
  export type SourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * The data used to update Sources.
     */
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyInput>
    /**
     * Filter which Sources to update
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Source upsert
   */
  export type SourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Source to update in case it exists.
     */
    where: SourceWhereUniqueInput
    /**
     * In case the Source found by the `where` argument doesn't exist, create a new Source with this data.
     */
    create: XOR<SourceCreateInput, SourceUncheckedCreateInput>
    /**
     * In case the Source was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
  }

  /**
   * Source delete
   */
  export type SourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter which Source to delete.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source deleteMany
   */
  export type SourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sources to delete
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to delete.
     */
    limit?: number
  }

  /**
   * Source without action
   */
  export type SourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
  }


  /**
   * Model GeneratedFile
   */

  export type AggregateGeneratedFile = {
    _count: GeneratedFileCountAggregateOutputType | null
    _min: GeneratedFileMinAggregateOutputType | null
    _max: GeneratedFileMaxAggregateOutputType | null
  }

  export type GeneratedFileMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    title: string | null
    content: string | null
    type: $Enums.FileType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GeneratedFileMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    title: string | null
    content: string | null
    type: $Enums.FileType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GeneratedFileCountAggregateOutputType = {
    id: number
    workspaceId: number
    title: number
    content: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GeneratedFileMinAggregateInputType = {
    id?: true
    workspaceId?: true
    title?: true
    content?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GeneratedFileMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    title?: true
    content?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GeneratedFileCountAggregateInputType = {
    id?: true
    workspaceId?: true
    title?: true
    content?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GeneratedFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedFile to aggregate.
     */
    where?: GeneratedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedFiles to fetch.
     */
    orderBy?: GeneratedFileOrderByWithRelationInput | GeneratedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneratedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneratedFiles
    **/
    _count?: true | GeneratedFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneratedFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneratedFileMaxAggregateInputType
  }

  export type GetGeneratedFileAggregateType<T extends GeneratedFileAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneratedFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneratedFile[P]>
      : GetScalarType<T[P], AggregateGeneratedFile[P]>
  }




  export type GeneratedFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedFileWhereInput
    orderBy?: GeneratedFileOrderByWithAggregationInput | GeneratedFileOrderByWithAggregationInput[]
    by: GeneratedFileScalarFieldEnum[] | GeneratedFileScalarFieldEnum
    having?: GeneratedFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneratedFileCountAggregateInputType | true
    _min?: GeneratedFileMinAggregateInputType
    _max?: GeneratedFileMaxAggregateInputType
  }

  export type GeneratedFileGroupByOutputType = {
    id: string
    workspaceId: string
    title: string | null
    content: string | null
    type: $Enums.FileType | null
    createdAt: Date
    updatedAt: Date
    _count: GeneratedFileCountAggregateOutputType | null
    _min: GeneratedFileMinAggregateOutputType | null
    _max: GeneratedFileMaxAggregateOutputType | null
  }

  type GetGeneratedFileGroupByPayload<T extends GeneratedFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneratedFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneratedFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneratedFileGroupByOutputType[P]>
            : GetScalarType<T[P], GeneratedFileGroupByOutputType[P]>
        }
      >
    >


  export type GeneratedFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedFile"]>

  export type GeneratedFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedFile"]>

  export type GeneratedFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedFile"]>

  export type GeneratedFileSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GeneratedFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "title" | "content" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["generatedFile"]>
  export type GeneratedFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type GeneratedFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type GeneratedFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $GeneratedFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneratedFile"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      title: string | null
      content: string | null
      type: $Enums.FileType | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["generatedFile"]>
    composites: {}
  }

  type GeneratedFileGetPayload<S extends boolean | null | undefined | GeneratedFileDefaultArgs> = $Result.GetResult<Prisma.$GeneratedFilePayload, S>

  type GeneratedFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneratedFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneratedFileCountAggregateInputType | true
    }

  export interface GeneratedFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneratedFile'], meta: { name: 'GeneratedFile' } }
    /**
     * Find zero or one GeneratedFile that matches the filter.
     * @param {GeneratedFileFindUniqueArgs} args - Arguments to find a GeneratedFile
     * @example
     * // Get one GeneratedFile
     * const generatedFile = await prisma.generatedFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneratedFileFindUniqueArgs>(args: SelectSubset<T, GeneratedFileFindUniqueArgs<ExtArgs>>): Prisma__GeneratedFileClient<$Result.GetResult<Prisma.$GeneratedFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneratedFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneratedFileFindUniqueOrThrowArgs} args - Arguments to find a GeneratedFile
     * @example
     * // Get one GeneratedFile
     * const generatedFile = await prisma.generatedFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneratedFileFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneratedFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneratedFileClient<$Result.GetResult<Prisma.$GeneratedFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedFileFindFirstArgs} args - Arguments to find a GeneratedFile
     * @example
     * // Get one GeneratedFile
     * const generatedFile = await prisma.generatedFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneratedFileFindFirstArgs>(args?: SelectSubset<T, GeneratedFileFindFirstArgs<ExtArgs>>): Prisma__GeneratedFileClient<$Result.GetResult<Prisma.$GeneratedFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedFileFindFirstOrThrowArgs} args - Arguments to find a GeneratedFile
     * @example
     * // Get one GeneratedFile
     * const generatedFile = await prisma.generatedFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneratedFileFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneratedFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneratedFileClient<$Result.GetResult<Prisma.$GeneratedFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneratedFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneratedFiles
     * const generatedFiles = await prisma.generatedFile.findMany()
     * 
     * // Get first 10 GeneratedFiles
     * const generatedFiles = await prisma.generatedFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generatedFileWithIdOnly = await prisma.generatedFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneratedFileFindManyArgs>(args?: SelectSubset<T, GeneratedFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneratedFile.
     * @param {GeneratedFileCreateArgs} args - Arguments to create a GeneratedFile.
     * @example
     * // Create one GeneratedFile
     * const GeneratedFile = await prisma.generatedFile.create({
     *   data: {
     *     // ... data to create a GeneratedFile
     *   }
     * })
     * 
     */
    create<T extends GeneratedFileCreateArgs>(args: SelectSubset<T, GeneratedFileCreateArgs<ExtArgs>>): Prisma__GeneratedFileClient<$Result.GetResult<Prisma.$GeneratedFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneratedFiles.
     * @param {GeneratedFileCreateManyArgs} args - Arguments to create many GeneratedFiles.
     * @example
     * // Create many GeneratedFiles
     * const generatedFile = await prisma.generatedFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneratedFileCreateManyArgs>(args?: SelectSubset<T, GeneratedFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GeneratedFiles and returns the data saved in the database.
     * @param {GeneratedFileCreateManyAndReturnArgs} args - Arguments to create many GeneratedFiles.
     * @example
     * // Create many GeneratedFiles
     * const generatedFile = await prisma.generatedFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GeneratedFiles and only return the `id`
     * const generatedFileWithIdOnly = await prisma.generatedFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneratedFileCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneratedFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GeneratedFile.
     * @param {GeneratedFileDeleteArgs} args - Arguments to delete one GeneratedFile.
     * @example
     * // Delete one GeneratedFile
     * const GeneratedFile = await prisma.generatedFile.delete({
     *   where: {
     *     // ... filter to delete one GeneratedFile
     *   }
     * })
     * 
     */
    delete<T extends GeneratedFileDeleteArgs>(args: SelectSubset<T, GeneratedFileDeleteArgs<ExtArgs>>): Prisma__GeneratedFileClient<$Result.GetResult<Prisma.$GeneratedFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneratedFile.
     * @param {GeneratedFileUpdateArgs} args - Arguments to update one GeneratedFile.
     * @example
     * // Update one GeneratedFile
     * const generatedFile = await prisma.generatedFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneratedFileUpdateArgs>(args: SelectSubset<T, GeneratedFileUpdateArgs<ExtArgs>>): Prisma__GeneratedFileClient<$Result.GetResult<Prisma.$GeneratedFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneratedFiles.
     * @param {GeneratedFileDeleteManyArgs} args - Arguments to filter GeneratedFiles to delete.
     * @example
     * // Delete a few GeneratedFiles
     * const { count } = await prisma.generatedFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneratedFileDeleteManyArgs>(args?: SelectSubset<T, GeneratedFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneratedFiles
     * const generatedFile = await prisma.generatedFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneratedFileUpdateManyArgs>(args: SelectSubset<T, GeneratedFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedFiles and returns the data updated in the database.
     * @param {GeneratedFileUpdateManyAndReturnArgs} args - Arguments to update many GeneratedFiles.
     * @example
     * // Update many GeneratedFiles
     * const generatedFile = await prisma.generatedFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GeneratedFiles and only return the `id`
     * const generatedFileWithIdOnly = await prisma.generatedFile.updateManyAndReturn({
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
    updateManyAndReturn<T extends GeneratedFileUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneratedFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GeneratedFile.
     * @param {GeneratedFileUpsertArgs} args - Arguments to update or create a GeneratedFile.
     * @example
     * // Update or create a GeneratedFile
     * const generatedFile = await prisma.generatedFile.upsert({
     *   create: {
     *     // ... data to create a GeneratedFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneratedFile we want to update
     *   }
     * })
     */
    upsert<T extends GeneratedFileUpsertArgs>(args: SelectSubset<T, GeneratedFileUpsertArgs<ExtArgs>>): Prisma__GeneratedFileClient<$Result.GetResult<Prisma.$GeneratedFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneratedFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedFileCountArgs} args - Arguments to filter GeneratedFiles to count.
     * @example
     * // Count the number of GeneratedFiles
     * const count = await prisma.generatedFile.count({
     *   where: {
     *     // ... the filter for the GeneratedFiles we want to count
     *   }
     * })
    **/
    count<T extends GeneratedFileCountArgs>(
      args?: Subset<T, GeneratedFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneratedFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneratedFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneratedFileAggregateArgs>(args: Subset<T, GeneratedFileAggregateArgs>): Prisma.PrismaPromise<GetGeneratedFileAggregateType<T>>

    /**
     * Group by GeneratedFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedFileGroupByArgs} args - Group by arguments.
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
      T extends GeneratedFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneratedFileGroupByArgs['orderBy'] }
        : { orderBy?: GeneratedFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneratedFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratedFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneratedFile model
   */
  readonly fields: GeneratedFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneratedFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneratedFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GeneratedFile model
   */
  interface GeneratedFileFieldRefs {
    readonly id: FieldRef<"GeneratedFile", 'String'>
    readonly workspaceId: FieldRef<"GeneratedFile", 'String'>
    readonly title: FieldRef<"GeneratedFile", 'String'>
    readonly content: FieldRef<"GeneratedFile", 'String'>
    readonly type: FieldRef<"GeneratedFile", 'FileType'>
    readonly createdAt: FieldRef<"GeneratedFile", 'DateTime'>
    readonly updatedAt: FieldRef<"GeneratedFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GeneratedFile findUnique
   */
  export type GeneratedFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedFile
     */
    select?: GeneratedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedFile
     */
    omit?: GeneratedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedFileInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedFile to fetch.
     */
    where: GeneratedFileWhereUniqueInput
  }

  /**
   * GeneratedFile findUniqueOrThrow
   */
  export type GeneratedFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedFile
     */
    select?: GeneratedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedFile
     */
    omit?: GeneratedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedFileInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedFile to fetch.
     */
    where: GeneratedFileWhereUniqueInput
  }

  /**
   * GeneratedFile findFirst
   */
  export type GeneratedFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedFile
     */
    select?: GeneratedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedFile
     */
    omit?: GeneratedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedFileInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedFile to fetch.
     */
    where?: GeneratedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedFiles to fetch.
     */
    orderBy?: GeneratedFileOrderByWithRelationInput | GeneratedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedFiles.
     */
    cursor?: GeneratedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedFiles.
     */
    distinct?: GeneratedFileScalarFieldEnum | GeneratedFileScalarFieldEnum[]
  }

  /**
   * GeneratedFile findFirstOrThrow
   */
  export type GeneratedFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedFile
     */
    select?: GeneratedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedFile
     */
    omit?: GeneratedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedFileInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedFile to fetch.
     */
    where?: GeneratedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedFiles to fetch.
     */
    orderBy?: GeneratedFileOrderByWithRelationInput | GeneratedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedFiles.
     */
    cursor?: GeneratedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedFiles.
     */
    distinct?: GeneratedFileScalarFieldEnum | GeneratedFileScalarFieldEnum[]
  }

  /**
   * GeneratedFile findMany
   */
  export type GeneratedFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedFile
     */
    select?: GeneratedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedFile
     */
    omit?: GeneratedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedFileInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedFiles to fetch.
     */
    where?: GeneratedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedFiles to fetch.
     */
    orderBy?: GeneratedFileOrderByWithRelationInput | GeneratedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneratedFiles.
     */
    cursor?: GeneratedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedFiles.
     */
    skip?: number
    distinct?: GeneratedFileScalarFieldEnum | GeneratedFileScalarFieldEnum[]
  }

  /**
   * GeneratedFile create
   */
  export type GeneratedFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedFile
     */
    select?: GeneratedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedFile
     */
    omit?: GeneratedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedFileInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneratedFile.
     */
    data: XOR<GeneratedFileCreateInput, GeneratedFileUncheckedCreateInput>
  }

  /**
   * GeneratedFile createMany
   */
  export type GeneratedFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneratedFiles.
     */
    data: GeneratedFileCreateManyInput | GeneratedFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneratedFile createManyAndReturn
   */
  export type GeneratedFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedFile
     */
    select?: GeneratedFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedFile
     */
    omit?: GeneratedFileOmit<ExtArgs> | null
    /**
     * The data used to create many GeneratedFiles.
     */
    data: GeneratedFileCreateManyInput | GeneratedFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneratedFile update
   */
  export type GeneratedFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedFile
     */
    select?: GeneratedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedFile
     */
    omit?: GeneratedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedFileInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneratedFile.
     */
    data: XOR<GeneratedFileUpdateInput, GeneratedFileUncheckedUpdateInput>
    /**
     * Choose, which GeneratedFile to update.
     */
    where: GeneratedFileWhereUniqueInput
  }

  /**
   * GeneratedFile updateMany
   */
  export type GeneratedFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneratedFiles.
     */
    data: XOR<GeneratedFileUpdateManyMutationInput, GeneratedFileUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedFiles to update
     */
    where?: GeneratedFileWhereInput
    /**
     * Limit how many GeneratedFiles to update.
     */
    limit?: number
  }

  /**
   * GeneratedFile updateManyAndReturn
   */
  export type GeneratedFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedFile
     */
    select?: GeneratedFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedFile
     */
    omit?: GeneratedFileOmit<ExtArgs> | null
    /**
     * The data used to update GeneratedFiles.
     */
    data: XOR<GeneratedFileUpdateManyMutationInput, GeneratedFileUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedFiles to update
     */
    where?: GeneratedFileWhereInput
    /**
     * Limit how many GeneratedFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneratedFile upsert
   */
  export type GeneratedFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedFile
     */
    select?: GeneratedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedFile
     */
    omit?: GeneratedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedFileInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneratedFile to update in case it exists.
     */
    where: GeneratedFileWhereUniqueInput
    /**
     * In case the GeneratedFile found by the `where` argument doesn't exist, create a new GeneratedFile with this data.
     */
    create: XOR<GeneratedFileCreateInput, GeneratedFileUncheckedCreateInput>
    /**
     * In case the GeneratedFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneratedFileUpdateInput, GeneratedFileUncheckedUpdateInput>
  }

  /**
   * GeneratedFile delete
   */
  export type GeneratedFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedFile
     */
    select?: GeneratedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedFile
     */
    omit?: GeneratedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedFileInclude<ExtArgs> | null
    /**
     * Filter which GeneratedFile to delete.
     */
    where: GeneratedFileWhereUniqueInput
  }

  /**
   * GeneratedFile deleteMany
   */
  export type GeneratedFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedFiles to delete
     */
    where?: GeneratedFileWhereInput
    /**
     * Limit how many GeneratedFiles to delete.
     */
    limit?: number
  }

  /**
   * GeneratedFile without action
   */
  export type GeneratedFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedFile
     */
    select?: GeneratedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedFile
     */
    omit?: GeneratedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedFileInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    workspaceId: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NoteMinAggregateInputType = {
    id?: true
    workspaceId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    workspaceId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: string
    workspaceId: string
    content: string | null
    createdAt: Date
    updatedAt: Date
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type NoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      content: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.updateManyAndReturn({
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
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
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
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'String'>
    readonly workspaceId: FieldRef<"Note", 'String'>
    readonly content: FieldRef<"Note", 'String'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
    readonly updatedAt: FieldRef<"Note", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model TimelineEvent
   */

  export type AggregateTimelineEvent = {
    _count: TimelineEventCountAggregateOutputType | null
    _min: TimelineEventMinAggregateOutputType | null
    _max: TimelineEventMaxAggregateOutputType | null
  }

  export type TimelineEventMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    date: Date | null
    title: string | null
    description: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimelineEventMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    date: Date | null
    title: string | null
    description: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimelineEventCountAggregateOutputType = {
    id: number
    workspaceId: number
    date: number
    title: number
    description: number
    completed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TimelineEventMinAggregateInputType = {
    id?: true
    workspaceId?: true
    date?: true
    title?: true
    description?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimelineEventMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    date?: true
    title?: true
    description?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimelineEventCountAggregateInputType = {
    id?: true
    workspaceId?: true
    date?: true
    title?: true
    description?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TimelineEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimelineEvent to aggregate.
     */
    where?: TimelineEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineEvents to fetch.
     */
    orderBy?: TimelineEventOrderByWithRelationInput | TimelineEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimelineEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimelineEvents
    **/
    _count?: true | TimelineEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimelineEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimelineEventMaxAggregateInputType
  }

  export type GetTimelineEventAggregateType<T extends TimelineEventAggregateArgs> = {
        [P in keyof T & keyof AggregateTimelineEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimelineEvent[P]>
      : GetScalarType<T[P], AggregateTimelineEvent[P]>
  }




  export type TimelineEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineEventWhereInput
    orderBy?: TimelineEventOrderByWithAggregationInput | TimelineEventOrderByWithAggregationInput[]
    by: TimelineEventScalarFieldEnum[] | TimelineEventScalarFieldEnum
    having?: TimelineEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimelineEventCountAggregateInputType | true
    _min?: TimelineEventMinAggregateInputType
    _max?: TimelineEventMaxAggregateInputType
  }

  export type TimelineEventGroupByOutputType = {
    id: string
    workspaceId: string
    date: Date | null
    title: string | null
    description: string | null
    completed: boolean
    createdAt: Date
    updatedAt: Date
    _count: TimelineEventCountAggregateOutputType | null
    _min: TimelineEventMinAggregateOutputType | null
    _max: TimelineEventMaxAggregateOutputType | null
  }

  type GetTimelineEventGroupByPayload<T extends TimelineEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimelineEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimelineEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimelineEventGroupByOutputType[P]>
            : GetScalarType<T[P], TimelineEventGroupByOutputType[P]>
        }
      >
    >


  export type TimelineEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    date?: boolean
    title?: boolean
    description?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timelineEvent"]>

  export type TimelineEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    date?: boolean
    title?: boolean
    description?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timelineEvent"]>

  export type TimelineEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    date?: boolean
    title?: boolean
    description?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timelineEvent"]>

  export type TimelineEventSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    date?: boolean
    title?: boolean
    description?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TimelineEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "date" | "title" | "description" | "completed" | "createdAt" | "updatedAt", ExtArgs["result"]["timelineEvent"]>
  export type TimelineEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type TimelineEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type TimelineEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $TimelineEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimelineEvent"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      date: Date | null
      title: string | null
      description: string | null
      completed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["timelineEvent"]>
    composites: {}
  }

  type TimelineEventGetPayload<S extends boolean | null | undefined | TimelineEventDefaultArgs> = $Result.GetResult<Prisma.$TimelineEventPayload, S>

  type TimelineEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimelineEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimelineEventCountAggregateInputType | true
    }

  export interface TimelineEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimelineEvent'], meta: { name: 'TimelineEvent' } }
    /**
     * Find zero or one TimelineEvent that matches the filter.
     * @param {TimelineEventFindUniqueArgs} args - Arguments to find a TimelineEvent
     * @example
     * // Get one TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimelineEventFindUniqueArgs>(args: SelectSubset<T, TimelineEventFindUniqueArgs<ExtArgs>>): Prisma__TimelineEventClient<$Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimelineEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimelineEventFindUniqueOrThrowArgs} args - Arguments to find a TimelineEvent
     * @example
     * // Get one TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimelineEventFindUniqueOrThrowArgs>(args: SelectSubset<T, TimelineEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimelineEventClient<$Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimelineEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEventFindFirstArgs} args - Arguments to find a TimelineEvent
     * @example
     * // Get one TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimelineEventFindFirstArgs>(args?: SelectSubset<T, TimelineEventFindFirstArgs<ExtArgs>>): Prisma__TimelineEventClient<$Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimelineEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEventFindFirstOrThrowArgs} args - Arguments to find a TimelineEvent
     * @example
     * // Get one TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimelineEventFindFirstOrThrowArgs>(args?: SelectSubset<T, TimelineEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimelineEventClient<$Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimelineEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimelineEvents
     * const timelineEvents = await prisma.timelineEvent.findMany()
     * 
     * // Get first 10 TimelineEvents
     * const timelineEvents = await prisma.timelineEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timelineEventWithIdOnly = await prisma.timelineEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimelineEventFindManyArgs>(args?: SelectSubset<T, TimelineEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimelineEvent.
     * @param {TimelineEventCreateArgs} args - Arguments to create a TimelineEvent.
     * @example
     * // Create one TimelineEvent
     * const TimelineEvent = await prisma.timelineEvent.create({
     *   data: {
     *     // ... data to create a TimelineEvent
     *   }
     * })
     * 
     */
    create<T extends TimelineEventCreateArgs>(args: SelectSubset<T, TimelineEventCreateArgs<ExtArgs>>): Prisma__TimelineEventClient<$Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimelineEvents.
     * @param {TimelineEventCreateManyArgs} args - Arguments to create many TimelineEvents.
     * @example
     * // Create many TimelineEvents
     * const timelineEvent = await prisma.timelineEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimelineEventCreateManyArgs>(args?: SelectSubset<T, TimelineEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimelineEvents and returns the data saved in the database.
     * @param {TimelineEventCreateManyAndReturnArgs} args - Arguments to create many TimelineEvents.
     * @example
     * // Create many TimelineEvents
     * const timelineEvent = await prisma.timelineEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimelineEvents and only return the `id`
     * const timelineEventWithIdOnly = await prisma.timelineEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimelineEventCreateManyAndReturnArgs>(args?: SelectSubset<T, TimelineEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimelineEvent.
     * @param {TimelineEventDeleteArgs} args - Arguments to delete one TimelineEvent.
     * @example
     * // Delete one TimelineEvent
     * const TimelineEvent = await prisma.timelineEvent.delete({
     *   where: {
     *     // ... filter to delete one TimelineEvent
     *   }
     * })
     * 
     */
    delete<T extends TimelineEventDeleteArgs>(args: SelectSubset<T, TimelineEventDeleteArgs<ExtArgs>>): Prisma__TimelineEventClient<$Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimelineEvent.
     * @param {TimelineEventUpdateArgs} args - Arguments to update one TimelineEvent.
     * @example
     * // Update one TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimelineEventUpdateArgs>(args: SelectSubset<T, TimelineEventUpdateArgs<ExtArgs>>): Prisma__TimelineEventClient<$Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimelineEvents.
     * @param {TimelineEventDeleteManyArgs} args - Arguments to filter TimelineEvents to delete.
     * @example
     * // Delete a few TimelineEvents
     * const { count } = await prisma.timelineEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimelineEventDeleteManyArgs>(args?: SelectSubset<T, TimelineEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimelineEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimelineEvents
     * const timelineEvent = await prisma.timelineEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimelineEventUpdateManyArgs>(args: SelectSubset<T, TimelineEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimelineEvents and returns the data updated in the database.
     * @param {TimelineEventUpdateManyAndReturnArgs} args - Arguments to update many TimelineEvents.
     * @example
     * // Update many TimelineEvents
     * const timelineEvent = await prisma.timelineEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimelineEvents and only return the `id`
     * const timelineEventWithIdOnly = await prisma.timelineEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends TimelineEventUpdateManyAndReturnArgs>(args: SelectSubset<T, TimelineEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimelineEvent.
     * @param {TimelineEventUpsertArgs} args - Arguments to update or create a TimelineEvent.
     * @example
     * // Update or create a TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.upsert({
     *   create: {
     *     // ... data to create a TimelineEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimelineEvent we want to update
     *   }
     * })
     */
    upsert<T extends TimelineEventUpsertArgs>(args: SelectSubset<T, TimelineEventUpsertArgs<ExtArgs>>): Prisma__TimelineEventClient<$Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimelineEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEventCountArgs} args - Arguments to filter TimelineEvents to count.
     * @example
     * // Count the number of TimelineEvents
     * const count = await prisma.timelineEvent.count({
     *   where: {
     *     // ... the filter for the TimelineEvents we want to count
     *   }
     * })
    **/
    count<T extends TimelineEventCountArgs>(
      args?: Subset<T, TimelineEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimelineEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimelineEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimelineEventAggregateArgs>(args: Subset<T, TimelineEventAggregateArgs>): Prisma.PrismaPromise<GetTimelineEventAggregateType<T>>

    /**
     * Group by TimelineEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEventGroupByArgs} args - Group by arguments.
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
      T extends TimelineEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimelineEventGroupByArgs['orderBy'] }
        : { orderBy?: TimelineEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimelineEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimelineEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimelineEvent model
   */
  readonly fields: TimelineEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimelineEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimelineEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TimelineEvent model
   */
  interface TimelineEventFieldRefs {
    readonly id: FieldRef<"TimelineEvent", 'String'>
    readonly workspaceId: FieldRef<"TimelineEvent", 'String'>
    readonly date: FieldRef<"TimelineEvent", 'DateTime'>
    readonly title: FieldRef<"TimelineEvent", 'String'>
    readonly description: FieldRef<"TimelineEvent", 'String'>
    readonly completed: FieldRef<"TimelineEvent", 'Boolean'>
    readonly createdAt: FieldRef<"TimelineEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"TimelineEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TimelineEvent findUnique
   */
  export type TimelineEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: TimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: TimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEventInclude<ExtArgs> | null
    /**
     * Filter, which TimelineEvent to fetch.
     */
    where: TimelineEventWhereUniqueInput
  }

  /**
   * TimelineEvent findUniqueOrThrow
   */
  export type TimelineEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: TimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: TimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEventInclude<ExtArgs> | null
    /**
     * Filter, which TimelineEvent to fetch.
     */
    where: TimelineEventWhereUniqueInput
  }

  /**
   * TimelineEvent findFirst
   */
  export type TimelineEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: TimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: TimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEventInclude<ExtArgs> | null
    /**
     * Filter, which TimelineEvent to fetch.
     */
    where?: TimelineEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineEvents to fetch.
     */
    orderBy?: TimelineEventOrderByWithRelationInput | TimelineEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimelineEvents.
     */
    cursor?: TimelineEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimelineEvents.
     */
    distinct?: TimelineEventScalarFieldEnum | TimelineEventScalarFieldEnum[]
  }

  /**
   * TimelineEvent findFirstOrThrow
   */
  export type TimelineEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: TimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: TimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEventInclude<ExtArgs> | null
    /**
     * Filter, which TimelineEvent to fetch.
     */
    where?: TimelineEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineEvents to fetch.
     */
    orderBy?: TimelineEventOrderByWithRelationInput | TimelineEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimelineEvents.
     */
    cursor?: TimelineEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimelineEvents.
     */
    distinct?: TimelineEventScalarFieldEnum | TimelineEventScalarFieldEnum[]
  }

  /**
   * TimelineEvent findMany
   */
  export type TimelineEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: TimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: TimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEventInclude<ExtArgs> | null
    /**
     * Filter, which TimelineEvents to fetch.
     */
    where?: TimelineEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineEvents to fetch.
     */
    orderBy?: TimelineEventOrderByWithRelationInput | TimelineEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimelineEvents.
     */
    cursor?: TimelineEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineEvents.
     */
    skip?: number
    distinct?: TimelineEventScalarFieldEnum | TimelineEventScalarFieldEnum[]
  }

  /**
   * TimelineEvent create
   */
  export type TimelineEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: TimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: TimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEventInclude<ExtArgs> | null
    /**
     * The data needed to create a TimelineEvent.
     */
    data: XOR<TimelineEventCreateInput, TimelineEventUncheckedCreateInput>
  }

  /**
   * TimelineEvent createMany
   */
  export type TimelineEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimelineEvents.
     */
    data: TimelineEventCreateManyInput | TimelineEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimelineEvent createManyAndReturn
   */
  export type TimelineEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: TimelineEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: TimelineEventOmit<ExtArgs> | null
    /**
     * The data used to create many TimelineEvents.
     */
    data: TimelineEventCreateManyInput | TimelineEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimelineEvent update
   */
  export type TimelineEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: TimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: TimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEventInclude<ExtArgs> | null
    /**
     * The data needed to update a TimelineEvent.
     */
    data: XOR<TimelineEventUpdateInput, TimelineEventUncheckedUpdateInput>
    /**
     * Choose, which TimelineEvent to update.
     */
    where: TimelineEventWhereUniqueInput
  }

  /**
   * TimelineEvent updateMany
   */
  export type TimelineEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimelineEvents.
     */
    data: XOR<TimelineEventUpdateManyMutationInput, TimelineEventUncheckedUpdateManyInput>
    /**
     * Filter which TimelineEvents to update
     */
    where?: TimelineEventWhereInput
    /**
     * Limit how many TimelineEvents to update.
     */
    limit?: number
  }

  /**
   * TimelineEvent updateManyAndReturn
   */
  export type TimelineEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: TimelineEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: TimelineEventOmit<ExtArgs> | null
    /**
     * The data used to update TimelineEvents.
     */
    data: XOR<TimelineEventUpdateManyMutationInput, TimelineEventUncheckedUpdateManyInput>
    /**
     * Filter which TimelineEvents to update
     */
    where?: TimelineEventWhereInput
    /**
     * Limit how many TimelineEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimelineEvent upsert
   */
  export type TimelineEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: TimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: TimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEventInclude<ExtArgs> | null
    /**
     * The filter to search for the TimelineEvent to update in case it exists.
     */
    where: TimelineEventWhereUniqueInput
    /**
     * In case the TimelineEvent found by the `where` argument doesn't exist, create a new TimelineEvent with this data.
     */
    create: XOR<TimelineEventCreateInput, TimelineEventUncheckedCreateInput>
    /**
     * In case the TimelineEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimelineEventUpdateInput, TimelineEventUncheckedUpdateInput>
  }

  /**
   * TimelineEvent delete
   */
  export type TimelineEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: TimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: TimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEventInclude<ExtArgs> | null
    /**
     * Filter which TimelineEvent to delete.
     */
    where: TimelineEventWhereUniqueInput
  }

  /**
   * TimelineEvent deleteMany
   */
  export type TimelineEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimelineEvents to delete
     */
    where?: TimelineEventWhereInput
    /**
     * Limit how many TimelineEvents to delete.
     */
    limit?: number
  }

  /**
   * TimelineEvent without action
   */
  export type TimelineEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: TimelineEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: TimelineEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEventInclude<ExtArgs> | null
  }


  /**
   * Model Argument
   */

  export type AggregateArgument = {
    _count: ArgumentCountAggregateOutputType | null
    _min: ArgumentMinAggregateOutputType | null
    _max: ArgumentMaxAggregateOutputType | null
  }

  export type ArgumentMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArgumentMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArgumentCountAggregateOutputType = {
    id: number
    workspaceId: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArgumentMinAggregateInputType = {
    id?: true
    workspaceId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArgumentMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArgumentCountAggregateInputType = {
    id?: true
    workspaceId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArgumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Argument to aggregate.
     */
    where?: ArgumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arguments to fetch.
     */
    orderBy?: ArgumentOrderByWithRelationInput | ArgumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArgumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arguments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arguments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Arguments
    **/
    _count?: true | ArgumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArgumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArgumentMaxAggregateInputType
  }

  export type GetArgumentAggregateType<T extends ArgumentAggregateArgs> = {
        [P in keyof T & keyof AggregateArgument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArgument[P]>
      : GetScalarType<T[P], AggregateArgument[P]>
  }




  export type ArgumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArgumentWhereInput
    orderBy?: ArgumentOrderByWithAggregationInput | ArgumentOrderByWithAggregationInput[]
    by: ArgumentScalarFieldEnum[] | ArgumentScalarFieldEnum
    having?: ArgumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArgumentCountAggregateInputType | true
    _min?: ArgumentMinAggregateInputType
    _max?: ArgumentMaxAggregateInputType
  }

  export type ArgumentGroupByOutputType = {
    id: string
    workspaceId: string
    title: string | null
    content: string | null
    createdAt: Date
    updatedAt: Date
    _count: ArgumentCountAggregateOutputType | null
    _min: ArgumentMinAggregateOutputType | null
    _max: ArgumentMaxAggregateOutputType | null
  }

  type GetArgumentGroupByPayload<T extends ArgumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArgumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArgumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArgumentGroupByOutputType[P]>
            : GetScalarType<T[P], ArgumentGroupByOutputType[P]>
        }
      >
    >


  export type ArgumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["argument"]>

  export type ArgumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["argument"]>

  export type ArgumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["argument"]>

  export type ArgumentSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArgumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "title" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["argument"]>
  export type ArgumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type ArgumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type ArgumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $ArgumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Argument"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      title: string | null
      content: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["argument"]>
    composites: {}
  }

  type ArgumentGetPayload<S extends boolean | null | undefined | ArgumentDefaultArgs> = $Result.GetResult<Prisma.$ArgumentPayload, S>

  type ArgumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArgumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArgumentCountAggregateInputType | true
    }

  export interface ArgumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Argument'], meta: { name: 'Argument' } }
    /**
     * Find zero or one Argument that matches the filter.
     * @param {ArgumentFindUniqueArgs} args - Arguments to find a Argument
     * @example
     * // Get one Argument
     * const argument = await prisma.argument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArgumentFindUniqueArgs>(args: SelectSubset<T, ArgumentFindUniqueArgs<ExtArgs>>): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Argument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArgumentFindUniqueOrThrowArgs} args - Arguments to find a Argument
     * @example
     * // Get one Argument
     * const argument = await prisma.argument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArgumentFindUniqueOrThrowArgs>(args: SelectSubset<T, ArgumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Argument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArgumentFindFirstArgs} args - Arguments to find a Argument
     * @example
     * // Get one Argument
     * const argument = await prisma.argument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArgumentFindFirstArgs>(args?: SelectSubset<T, ArgumentFindFirstArgs<ExtArgs>>): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Argument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArgumentFindFirstOrThrowArgs} args - Arguments to find a Argument
     * @example
     * // Get one Argument
     * const argument = await prisma.argument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArgumentFindFirstOrThrowArgs>(args?: SelectSubset<T, ArgumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Arguments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArgumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Arguments
     * const arguments = await prisma.argument.findMany()
     * 
     * // Get first 10 Arguments
     * const arguments = await prisma.argument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const argumentWithIdOnly = await prisma.argument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArgumentFindManyArgs>(args?: SelectSubset<T, ArgumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Argument.
     * @param {ArgumentCreateArgs} args - Arguments to create a Argument.
     * @example
     * // Create one Argument
     * const Argument = await prisma.argument.create({
     *   data: {
     *     // ... data to create a Argument
     *   }
     * })
     * 
     */
    create<T extends ArgumentCreateArgs>(args: SelectSubset<T, ArgumentCreateArgs<ExtArgs>>): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Arguments.
     * @param {ArgumentCreateManyArgs} args - Arguments to create many Arguments.
     * @example
     * // Create many Arguments
     * const argument = await prisma.argument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArgumentCreateManyArgs>(args?: SelectSubset<T, ArgumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Arguments and returns the data saved in the database.
     * @param {ArgumentCreateManyAndReturnArgs} args - Arguments to create many Arguments.
     * @example
     * // Create many Arguments
     * const argument = await prisma.argument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Arguments and only return the `id`
     * const argumentWithIdOnly = await prisma.argument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArgumentCreateManyAndReturnArgs>(args?: SelectSubset<T, ArgumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Argument.
     * @param {ArgumentDeleteArgs} args - Arguments to delete one Argument.
     * @example
     * // Delete one Argument
     * const Argument = await prisma.argument.delete({
     *   where: {
     *     // ... filter to delete one Argument
     *   }
     * })
     * 
     */
    delete<T extends ArgumentDeleteArgs>(args: SelectSubset<T, ArgumentDeleteArgs<ExtArgs>>): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Argument.
     * @param {ArgumentUpdateArgs} args - Arguments to update one Argument.
     * @example
     * // Update one Argument
     * const argument = await prisma.argument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArgumentUpdateArgs>(args: SelectSubset<T, ArgumentUpdateArgs<ExtArgs>>): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Arguments.
     * @param {ArgumentDeleteManyArgs} args - Arguments to filter Arguments to delete.
     * @example
     * // Delete a few Arguments
     * const { count } = await prisma.argument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArgumentDeleteManyArgs>(args?: SelectSubset<T, ArgumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arguments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArgumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Arguments
     * const argument = await prisma.argument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArgumentUpdateManyArgs>(args: SelectSubset<T, ArgumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arguments and returns the data updated in the database.
     * @param {ArgumentUpdateManyAndReturnArgs} args - Arguments to update many Arguments.
     * @example
     * // Update many Arguments
     * const argument = await prisma.argument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Arguments and only return the `id`
     * const argumentWithIdOnly = await prisma.argument.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArgumentUpdateManyAndReturnArgs>(args: SelectSubset<T, ArgumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Argument.
     * @param {ArgumentUpsertArgs} args - Arguments to update or create a Argument.
     * @example
     * // Update or create a Argument
     * const argument = await prisma.argument.upsert({
     *   create: {
     *     // ... data to create a Argument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Argument we want to update
     *   }
     * })
     */
    upsert<T extends ArgumentUpsertArgs>(args: SelectSubset<T, ArgumentUpsertArgs<ExtArgs>>): Prisma__ArgumentClient<$Result.GetResult<Prisma.$ArgumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Arguments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArgumentCountArgs} args - Arguments to filter Arguments to count.
     * @example
     * // Count the number of Arguments
     * const count = await prisma.argument.count({
     *   where: {
     *     // ... the filter for the Arguments we want to count
     *   }
     * })
    **/
    count<T extends ArgumentCountArgs>(
      args?: Subset<T, ArgumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArgumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Argument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArgumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArgumentAggregateArgs>(args: Subset<T, ArgumentAggregateArgs>): Prisma.PrismaPromise<GetArgumentAggregateType<T>>

    /**
     * Group by Argument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArgumentGroupByArgs} args - Group by arguments.
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
      T extends ArgumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArgumentGroupByArgs['orderBy'] }
        : { orderBy?: ArgumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArgumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArgumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Argument model
   */
  readonly fields: ArgumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Argument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArgumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Argument model
   */
  interface ArgumentFieldRefs {
    readonly id: FieldRef<"Argument", 'String'>
    readonly workspaceId: FieldRef<"Argument", 'String'>
    readonly title: FieldRef<"Argument", 'String'>
    readonly content: FieldRef<"Argument", 'String'>
    readonly createdAt: FieldRef<"Argument", 'DateTime'>
    readonly updatedAt: FieldRef<"Argument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Argument findUnique
   */
  export type ArgumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Argument
     */
    omit?: ArgumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * Filter, which Argument to fetch.
     */
    where: ArgumentWhereUniqueInput
  }

  /**
   * Argument findUniqueOrThrow
   */
  export type ArgumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Argument
     */
    omit?: ArgumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * Filter, which Argument to fetch.
     */
    where: ArgumentWhereUniqueInput
  }

  /**
   * Argument findFirst
   */
  export type ArgumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Argument
     */
    omit?: ArgumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * Filter, which Argument to fetch.
     */
    where?: ArgumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arguments to fetch.
     */
    orderBy?: ArgumentOrderByWithRelationInput | ArgumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arguments.
     */
    cursor?: ArgumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arguments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arguments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arguments.
     */
    distinct?: ArgumentScalarFieldEnum | ArgumentScalarFieldEnum[]
  }

  /**
   * Argument findFirstOrThrow
   */
  export type ArgumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Argument
     */
    omit?: ArgumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * Filter, which Argument to fetch.
     */
    where?: ArgumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arguments to fetch.
     */
    orderBy?: ArgumentOrderByWithRelationInput | ArgumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arguments.
     */
    cursor?: ArgumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arguments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arguments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arguments.
     */
    distinct?: ArgumentScalarFieldEnum | ArgumentScalarFieldEnum[]
  }

  /**
   * Argument findMany
   */
  export type ArgumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Argument
     */
    omit?: ArgumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * Filter, which Arguments to fetch.
     */
    where?: ArgumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arguments to fetch.
     */
    orderBy?: ArgumentOrderByWithRelationInput | ArgumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Arguments.
     */
    cursor?: ArgumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arguments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arguments.
     */
    skip?: number
    distinct?: ArgumentScalarFieldEnum | ArgumentScalarFieldEnum[]
  }

  /**
   * Argument create
   */
  export type ArgumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Argument
     */
    omit?: ArgumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Argument.
     */
    data: XOR<ArgumentCreateInput, ArgumentUncheckedCreateInput>
  }

  /**
   * Argument createMany
   */
  export type ArgumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Arguments.
     */
    data: ArgumentCreateManyInput | ArgumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Argument createManyAndReturn
   */
  export type ArgumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Argument
     */
    omit?: ArgumentOmit<ExtArgs> | null
    /**
     * The data used to create many Arguments.
     */
    data: ArgumentCreateManyInput | ArgumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArgumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Argument update
   */
  export type ArgumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Argument
     */
    omit?: ArgumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Argument.
     */
    data: XOR<ArgumentUpdateInput, ArgumentUncheckedUpdateInput>
    /**
     * Choose, which Argument to update.
     */
    where: ArgumentWhereUniqueInput
  }

  /**
   * Argument updateMany
   */
  export type ArgumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Arguments.
     */
    data: XOR<ArgumentUpdateManyMutationInput, ArgumentUncheckedUpdateManyInput>
    /**
     * Filter which Arguments to update
     */
    where?: ArgumentWhereInput
    /**
     * Limit how many Arguments to update.
     */
    limit?: number
  }

  /**
   * Argument updateManyAndReturn
   */
  export type ArgumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Argument
     */
    omit?: ArgumentOmit<ExtArgs> | null
    /**
     * The data used to update Arguments.
     */
    data: XOR<ArgumentUpdateManyMutationInput, ArgumentUncheckedUpdateManyInput>
    /**
     * Filter which Arguments to update
     */
    where?: ArgumentWhereInput
    /**
     * Limit how many Arguments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArgumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Argument upsert
   */
  export type ArgumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Argument
     */
    omit?: ArgumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Argument to update in case it exists.
     */
    where: ArgumentWhereUniqueInput
    /**
     * In case the Argument found by the `where` argument doesn't exist, create a new Argument with this data.
     */
    create: XOR<ArgumentCreateInput, ArgumentUncheckedCreateInput>
    /**
     * In case the Argument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArgumentUpdateInput, ArgumentUncheckedUpdateInput>
  }

  /**
   * Argument delete
   */
  export type ArgumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Argument
     */
    omit?: ArgumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArgumentInclude<ExtArgs> | null
    /**
     * Filter which Argument to delete.
     */
    where: ArgumentWhereUniqueInput
  }

  /**
   * Argument deleteMany
   */
  export type ArgumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arguments to delete
     */
    where?: ArgumentWhereInput
    /**
     * Limit how many Arguments to delete.
     */
    limit?: number
  }

  /**
   * Argument without action
   */
  export type ArgumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Argument
     */
    select?: ArgumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Argument
     */
    omit?: ArgumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArgumentInclude<ExtArgs> | null
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
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const CaseContextScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    clientName: 'clientName',
    clientAge: 'clientAge',
    clientContact: 'clientContact',
    clientEmail: 'clientEmail',
    clientOccupation: 'clientOccupation',
    clientAddress: 'clientAddress',
    firText: 'firText',
    caseType: 'caseType',
    description: 'description',
    incidentDate: 'incidentDate',
    witnesses: 'witnesses',
    location: 'location',
    policeStation: 'policeStation',
    opposingParty: 'opposingParty',
    urgency: 'urgency',
    courtOrders: 'courtOrders',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CaseContextScalarFieldEnum = (typeof CaseContextScalarFieldEnum)[keyof typeof CaseContextScalarFieldEnum]


  export const SourceScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SourceScalarFieldEnum = (typeof SourceScalarFieldEnum)[keyof typeof SourceScalarFieldEnum]


  export const GeneratedFileScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    title: 'title',
    content: 'content',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GeneratedFileScalarFieldEnum = (typeof GeneratedFileScalarFieldEnum)[keyof typeof GeneratedFileScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const TimelineEventScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    date: 'date',
    title: 'title',
    description: 'description',
    completed: 'completed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TimelineEventScalarFieldEnum = (typeof TimelineEventScalarFieldEnum)[keyof typeof TimelineEventScalarFieldEnum]


  export const ArgumentScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArgumentScalarFieldEnum = (typeof ArgumentScalarFieldEnum)[keyof typeof ArgumentScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CaseType'
   */
  export type EnumCaseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseType'>
    


  /**
   * Reference to a field of type 'CaseType[]'
   */
  export type ListEnumCaseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseType[]'>
    


  /**
   * Reference to a field of type 'UrgencyLevel'
   */
  export type EnumUrgencyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UrgencyLevel'>
    


  /**
   * Reference to a field of type 'UrgencyLevel[]'
   */
  export type ListEnumUrgencyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UrgencyLevel[]'>
    


  /**
   * Reference to a field of type 'FileType'
   */
  export type EnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType'>
    


  /**
   * Reference to a field of type 'FileType[]'
   */
  export type ListEnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType[]'>
    


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
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workspaces?: WorkspaceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaces?: WorkspaceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workspaces?: WorkspaceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WorkspaceWhereInput = {
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    description?: StringNullableFilter<"Workspace"> | string | null
    userId?: StringFilter<"Workspace"> | string
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    caseContext?: CaseContextListRelationFilter
    sources?: SourceListRelationFilter
    generatedFiles?: GeneratedFileListRelationFilter
    notes?: NoteListRelationFilter
    timeline?: TimelineEventListRelationFilter
    arguments?: ArgumentListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    caseContext?: CaseContextOrderByRelationAggregateInput
    sources?: SourceOrderByRelationAggregateInput
    generatedFiles?: GeneratedFileOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    timeline?: TimelineEventOrderByRelationAggregateInput
    arguments?: ArgumentOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    name?: StringFilter<"Workspace"> | string
    description?: StringNullableFilter<"Workspace"> | string | null
    userId?: StringFilter<"Workspace"> | string
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    caseContext?: CaseContextListRelationFilter
    sources?: SourceListRelationFilter
    generatedFiles?: GeneratedFileListRelationFilter
    notes?: NoteListRelationFilter
    timeline?: TimelineEventListRelationFilter
    arguments?: ArgumentListRelationFilter
  }, "id">

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    OR?: WorkspaceScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workspace"> | string
    name?: StringWithAggregatesFilter<"Workspace"> | string
    description?: StringNullableWithAggregatesFilter<"Workspace"> | string | null
    userId?: StringWithAggregatesFilter<"Workspace"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
  }

  export type CaseContextWhereInput = {
    AND?: CaseContextWhereInput | CaseContextWhereInput[]
    OR?: CaseContextWhereInput[]
    NOT?: CaseContextWhereInput | CaseContextWhereInput[]
    id?: StringFilter<"CaseContext"> | string
    workspaceId?: StringFilter<"CaseContext"> | string
    clientName?: StringNullableFilter<"CaseContext"> | string | null
    clientAge?: IntNullableFilter<"CaseContext"> | number | null
    clientContact?: StringNullableFilter<"CaseContext"> | string | null
    clientEmail?: StringNullableFilter<"CaseContext"> | string | null
    clientOccupation?: StringNullableFilter<"CaseContext"> | string | null
    clientAddress?: StringNullableFilter<"CaseContext"> | string | null
    firText?: StringNullableFilter<"CaseContext"> | string | null
    caseType?: EnumCaseTypeNullableFilter<"CaseContext"> | $Enums.CaseType | null
    description?: StringNullableFilter<"CaseContext"> | string | null
    incidentDate?: DateTimeNullableFilter<"CaseContext"> | Date | string | null
    witnesses?: StringNullableFilter<"CaseContext"> | string | null
    location?: StringNullableFilter<"CaseContext"> | string | null
    policeStation?: StringNullableFilter<"CaseContext"> | string | null
    opposingParty?: StringNullableFilter<"CaseContext"> | string | null
    urgency?: EnumUrgencyLevelNullableFilter<"CaseContext"> | $Enums.UrgencyLevel | null
    courtOrders?: StringNullableFilter<"CaseContext"> | string | null
    createdAt?: DateTimeFilter<"CaseContext"> | Date | string
    updatedAt?: DateTimeFilter<"CaseContext"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type CaseContextOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    clientName?: SortOrderInput | SortOrder
    clientAge?: SortOrderInput | SortOrder
    clientContact?: SortOrderInput | SortOrder
    clientEmail?: SortOrderInput | SortOrder
    clientOccupation?: SortOrderInput | SortOrder
    clientAddress?: SortOrderInput | SortOrder
    firText?: SortOrderInput | SortOrder
    caseType?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    incidentDate?: SortOrderInput | SortOrder
    witnesses?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    policeStation?: SortOrderInput | SortOrder
    opposingParty?: SortOrderInput | SortOrder
    urgency?: SortOrderInput | SortOrder
    courtOrders?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type CaseContextWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CaseContextWhereInput | CaseContextWhereInput[]
    OR?: CaseContextWhereInput[]
    NOT?: CaseContextWhereInput | CaseContextWhereInput[]
    workspaceId?: StringFilter<"CaseContext"> | string
    clientName?: StringNullableFilter<"CaseContext"> | string | null
    clientAge?: IntNullableFilter<"CaseContext"> | number | null
    clientContact?: StringNullableFilter<"CaseContext"> | string | null
    clientEmail?: StringNullableFilter<"CaseContext"> | string | null
    clientOccupation?: StringNullableFilter<"CaseContext"> | string | null
    clientAddress?: StringNullableFilter<"CaseContext"> | string | null
    firText?: StringNullableFilter<"CaseContext"> | string | null
    caseType?: EnumCaseTypeNullableFilter<"CaseContext"> | $Enums.CaseType | null
    description?: StringNullableFilter<"CaseContext"> | string | null
    incidentDate?: DateTimeNullableFilter<"CaseContext"> | Date | string | null
    witnesses?: StringNullableFilter<"CaseContext"> | string | null
    location?: StringNullableFilter<"CaseContext"> | string | null
    policeStation?: StringNullableFilter<"CaseContext"> | string | null
    opposingParty?: StringNullableFilter<"CaseContext"> | string | null
    urgency?: EnumUrgencyLevelNullableFilter<"CaseContext"> | $Enums.UrgencyLevel | null
    courtOrders?: StringNullableFilter<"CaseContext"> | string | null
    createdAt?: DateTimeFilter<"CaseContext"> | Date | string
    updatedAt?: DateTimeFilter<"CaseContext"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "id">

  export type CaseContextOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    clientName?: SortOrderInput | SortOrder
    clientAge?: SortOrderInput | SortOrder
    clientContact?: SortOrderInput | SortOrder
    clientEmail?: SortOrderInput | SortOrder
    clientOccupation?: SortOrderInput | SortOrder
    clientAddress?: SortOrderInput | SortOrder
    firText?: SortOrderInput | SortOrder
    caseType?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    incidentDate?: SortOrderInput | SortOrder
    witnesses?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    policeStation?: SortOrderInput | SortOrder
    opposingParty?: SortOrderInput | SortOrder
    urgency?: SortOrderInput | SortOrder
    courtOrders?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CaseContextCountOrderByAggregateInput
    _avg?: CaseContextAvgOrderByAggregateInput
    _max?: CaseContextMaxOrderByAggregateInput
    _min?: CaseContextMinOrderByAggregateInput
    _sum?: CaseContextSumOrderByAggregateInput
  }

  export type CaseContextScalarWhereWithAggregatesInput = {
    AND?: CaseContextScalarWhereWithAggregatesInput | CaseContextScalarWhereWithAggregatesInput[]
    OR?: CaseContextScalarWhereWithAggregatesInput[]
    NOT?: CaseContextScalarWhereWithAggregatesInput | CaseContextScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CaseContext"> | string
    workspaceId?: StringWithAggregatesFilter<"CaseContext"> | string
    clientName?: StringNullableWithAggregatesFilter<"CaseContext"> | string | null
    clientAge?: IntNullableWithAggregatesFilter<"CaseContext"> | number | null
    clientContact?: StringNullableWithAggregatesFilter<"CaseContext"> | string | null
    clientEmail?: StringNullableWithAggregatesFilter<"CaseContext"> | string | null
    clientOccupation?: StringNullableWithAggregatesFilter<"CaseContext"> | string | null
    clientAddress?: StringNullableWithAggregatesFilter<"CaseContext"> | string | null
    firText?: StringNullableWithAggregatesFilter<"CaseContext"> | string | null
    caseType?: EnumCaseTypeNullableWithAggregatesFilter<"CaseContext"> | $Enums.CaseType | null
    description?: StringNullableWithAggregatesFilter<"CaseContext"> | string | null
    incidentDate?: DateTimeNullableWithAggregatesFilter<"CaseContext"> | Date | string | null
    witnesses?: StringNullableWithAggregatesFilter<"CaseContext"> | string | null
    location?: StringNullableWithAggregatesFilter<"CaseContext"> | string | null
    policeStation?: StringNullableWithAggregatesFilter<"CaseContext"> | string | null
    opposingParty?: StringNullableWithAggregatesFilter<"CaseContext"> | string | null
    urgency?: EnumUrgencyLevelNullableWithAggregatesFilter<"CaseContext"> | $Enums.UrgencyLevel | null
    courtOrders?: StringNullableWithAggregatesFilter<"CaseContext"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CaseContext"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CaseContext"> | Date | string
  }

  export type SourceWhereInput = {
    AND?: SourceWhereInput | SourceWhereInput[]
    OR?: SourceWhereInput[]
    NOT?: SourceWhereInput | SourceWhereInput[]
    id?: StringFilter<"Source"> | string
    workspaceId?: StringFilter<"Source"> | string
    title?: StringNullableFilter<"Source"> | string | null
    content?: StringNullableFilter<"Source"> | string | null
    createdAt?: DateTimeFilter<"Source"> | Date | string
    updatedAt?: DateTimeFilter<"Source"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type SourceOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type SourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SourceWhereInput | SourceWhereInput[]
    OR?: SourceWhereInput[]
    NOT?: SourceWhereInput | SourceWhereInput[]
    workspaceId?: StringFilter<"Source"> | string
    title?: StringNullableFilter<"Source"> | string | null
    content?: StringNullableFilter<"Source"> | string | null
    createdAt?: DateTimeFilter<"Source"> | Date | string
    updatedAt?: DateTimeFilter<"Source"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "id">

  export type SourceOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SourceCountOrderByAggregateInput
    _max?: SourceMaxOrderByAggregateInput
    _min?: SourceMinOrderByAggregateInput
  }

  export type SourceScalarWhereWithAggregatesInput = {
    AND?: SourceScalarWhereWithAggregatesInput | SourceScalarWhereWithAggregatesInput[]
    OR?: SourceScalarWhereWithAggregatesInput[]
    NOT?: SourceScalarWhereWithAggregatesInput | SourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Source"> | string
    workspaceId?: StringWithAggregatesFilter<"Source"> | string
    title?: StringNullableWithAggregatesFilter<"Source"> | string | null
    content?: StringNullableWithAggregatesFilter<"Source"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Source"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Source"> | Date | string
  }

  export type GeneratedFileWhereInput = {
    AND?: GeneratedFileWhereInput | GeneratedFileWhereInput[]
    OR?: GeneratedFileWhereInput[]
    NOT?: GeneratedFileWhereInput | GeneratedFileWhereInput[]
    id?: StringFilter<"GeneratedFile"> | string
    workspaceId?: StringFilter<"GeneratedFile"> | string
    title?: StringNullableFilter<"GeneratedFile"> | string | null
    content?: StringNullableFilter<"GeneratedFile"> | string | null
    type?: EnumFileTypeNullableFilter<"GeneratedFile"> | $Enums.FileType | null
    createdAt?: DateTimeFilter<"GeneratedFile"> | Date | string
    updatedAt?: DateTimeFilter<"GeneratedFile"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type GeneratedFileOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type GeneratedFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GeneratedFileWhereInput | GeneratedFileWhereInput[]
    OR?: GeneratedFileWhereInput[]
    NOT?: GeneratedFileWhereInput | GeneratedFileWhereInput[]
    workspaceId?: StringFilter<"GeneratedFile"> | string
    title?: StringNullableFilter<"GeneratedFile"> | string | null
    content?: StringNullableFilter<"GeneratedFile"> | string | null
    type?: EnumFileTypeNullableFilter<"GeneratedFile"> | $Enums.FileType | null
    createdAt?: DateTimeFilter<"GeneratedFile"> | Date | string
    updatedAt?: DateTimeFilter<"GeneratedFile"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "id">

  export type GeneratedFileOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GeneratedFileCountOrderByAggregateInput
    _max?: GeneratedFileMaxOrderByAggregateInput
    _min?: GeneratedFileMinOrderByAggregateInput
  }

  export type GeneratedFileScalarWhereWithAggregatesInput = {
    AND?: GeneratedFileScalarWhereWithAggregatesInput | GeneratedFileScalarWhereWithAggregatesInput[]
    OR?: GeneratedFileScalarWhereWithAggregatesInput[]
    NOT?: GeneratedFileScalarWhereWithAggregatesInput | GeneratedFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeneratedFile"> | string
    workspaceId?: StringWithAggregatesFilter<"GeneratedFile"> | string
    title?: StringNullableWithAggregatesFilter<"GeneratedFile"> | string | null
    content?: StringNullableWithAggregatesFilter<"GeneratedFile"> | string | null
    type?: EnumFileTypeNullableWithAggregatesFilter<"GeneratedFile"> | $Enums.FileType | null
    createdAt?: DateTimeWithAggregatesFilter<"GeneratedFile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GeneratedFile"> | Date | string
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: StringFilter<"Note"> | string
    workspaceId?: StringFilter<"Note"> | string
    content?: StringNullableFilter<"Note"> | string | null
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    workspaceId?: StringFilter<"Note"> | string
    content?: StringNullableFilter<"Note"> | string | null
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Note"> | string
    workspaceId?: StringWithAggregatesFilter<"Note"> | string
    content?: StringNullableWithAggregatesFilter<"Note"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
  }

  export type TimelineEventWhereInput = {
    AND?: TimelineEventWhereInput | TimelineEventWhereInput[]
    OR?: TimelineEventWhereInput[]
    NOT?: TimelineEventWhereInput | TimelineEventWhereInput[]
    id?: StringFilter<"TimelineEvent"> | string
    workspaceId?: StringFilter<"TimelineEvent"> | string
    date?: DateTimeNullableFilter<"TimelineEvent"> | Date | string | null
    title?: StringNullableFilter<"TimelineEvent"> | string | null
    description?: StringNullableFilter<"TimelineEvent"> | string | null
    completed?: BoolFilter<"TimelineEvent"> | boolean
    createdAt?: DateTimeFilter<"TimelineEvent"> | Date | string
    updatedAt?: DateTimeFilter<"TimelineEvent"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type TimelineEventOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    date?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type TimelineEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimelineEventWhereInput | TimelineEventWhereInput[]
    OR?: TimelineEventWhereInput[]
    NOT?: TimelineEventWhereInput | TimelineEventWhereInput[]
    workspaceId?: StringFilter<"TimelineEvent"> | string
    date?: DateTimeNullableFilter<"TimelineEvent"> | Date | string | null
    title?: StringNullableFilter<"TimelineEvent"> | string | null
    description?: StringNullableFilter<"TimelineEvent"> | string | null
    completed?: BoolFilter<"TimelineEvent"> | boolean
    createdAt?: DateTimeFilter<"TimelineEvent"> | Date | string
    updatedAt?: DateTimeFilter<"TimelineEvent"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "id">

  export type TimelineEventOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    date?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TimelineEventCountOrderByAggregateInput
    _max?: TimelineEventMaxOrderByAggregateInput
    _min?: TimelineEventMinOrderByAggregateInput
  }

  export type TimelineEventScalarWhereWithAggregatesInput = {
    AND?: TimelineEventScalarWhereWithAggregatesInput | TimelineEventScalarWhereWithAggregatesInput[]
    OR?: TimelineEventScalarWhereWithAggregatesInput[]
    NOT?: TimelineEventScalarWhereWithAggregatesInput | TimelineEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimelineEvent"> | string
    workspaceId?: StringWithAggregatesFilter<"TimelineEvent"> | string
    date?: DateTimeNullableWithAggregatesFilter<"TimelineEvent"> | Date | string | null
    title?: StringNullableWithAggregatesFilter<"TimelineEvent"> | string | null
    description?: StringNullableWithAggregatesFilter<"TimelineEvent"> | string | null
    completed?: BoolWithAggregatesFilter<"TimelineEvent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TimelineEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TimelineEvent"> | Date | string
  }

  export type ArgumentWhereInput = {
    AND?: ArgumentWhereInput | ArgumentWhereInput[]
    OR?: ArgumentWhereInput[]
    NOT?: ArgumentWhereInput | ArgumentWhereInput[]
    id?: StringFilter<"Argument"> | string
    workspaceId?: StringFilter<"Argument"> | string
    title?: StringNullableFilter<"Argument"> | string | null
    content?: StringNullableFilter<"Argument"> | string | null
    createdAt?: DateTimeFilter<"Argument"> | Date | string
    updatedAt?: DateTimeFilter<"Argument"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type ArgumentOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type ArgumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArgumentWhereInput | ArgumentWhereInput[]
    OR?: ArgumentWhereInput[]
    NOT?: ArgumentWhereInput | ArgumentWhereInput[]
    workspaceId?: StringFilter<"Argument"> | string
    title?: StringNullableFilter<"Argument"> | string | null
    content?: StringNullableFilter<"Argument"> | string | null
    createdAt?: DateTimeFilter<"Argument"> | Date | string
    updatedAt?: DateTimeFilter<"Argument"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "id">

  export type ArgumentOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArgumentCountOrderByAggregateInput
    _max?: ArgumentMaxOrderByAggregateInput
    _min?: ArgumentMinOrderByAggregateInput
  }

  export type ArgumentScalarWhereWithAggregatesInput = {
    AND?: ArgumentScalarWhereWithAggregatesInput | ArgumentScalarWhereWithAggregatesInput[]
    OR?: ArgumentScalarWhereWithAggregatesInput[]
    NOT?: ArgumentScalarWhereWithAggregatesInput | ArgumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Argument"> | string
    workspaceId?: StringWithAggregatesFilter<"Argument"> | string
    title?: StringNullableWithAggregatesFilter<"Argument"> | string | null
    content?: StringNullableWithAggregatesFilter<"Argument"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Argument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Argument"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: WorkspaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: WorkspaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: WorkspaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: WorkspaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkspacesInput
    caseContext?: CaseContextCreateNestedManyWithoutWorkspaceInput
    sources?: SourceCreateNestedManyWithoutWorkspaceInput
    generatedFiles?: GeneratedFileCreateNestedManyWithoutWorkspaceInput
    notes?: NoteCreateNestedManyWithoutWorkspaceInput
    timeline?: TimelineEventCreateNestedManyWithoutWorkspaceInput
    arguments?: ArgumentCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    caseContext?: CaseContextUncheckedCreateNestedManyWithoutWorkspaceInput
    sources?: SourceUncheckedCreateNestedManyWithoutWorkspaceInput
    generatedFiles?: GeneratedFileUncheckedCreateNestedManyWithoutWorkspaceInput
    notes?: NoteUncheckedCreateNestedManyWithoutWorkspaceInput
    timeline?: TimelineEventUncheckedCreateNestedManyWithoutWorkspaceInput
    arguments?: ArgumentUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    caseContext?: CaseContextUpdateManyWithoutWorkspaceNestedInput
    sources?: SourceUpdateManyWithoutWorkspaceNestedInput
    generatedFiles?: GeneratedFileUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUpdateManyWithoutWorkspaceNestedInput
    timeline?: TimelineEventUpdateManyWithoutWorkspaceNestedInput
    arguments?: ArgumentUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseContext?: CaseContextUncheckedUpdateManyWithoutWorkspaceNestedInput
    sources?: SourceUncheckedUpdateManyWithoutWorkspaceNestedInput
    generatedFiles?: GeneratedFileUncheckedUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutWorkspaceNestedInput
    timeline?: TimelineEventUncheckedUpdateManyWithoutWorkspaceNestedInput
    arguments?: ArgumentUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkspaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseContextCreateInput = {
    id?: string
    clientName?: string | null
    clientAge?: number | null
    clientContact?: string | null
    clientEmail?: string | null
    clientOccupation?: string | null
    clientAddress?: string | null
    firText?: string | null
    caseType?: $Enums.CaseType | null
    description?: string | null
    incidentDate?: Date | string | null
    witnesses?: string | null
    location?: string | null
    policeStation?: string | null
    opposingParty?: string | null
    urgency?: $Enums.UrgencyLevel | null
    courtOrders?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutCaseContextInput
  }

  export type CaseContextUncheckedCreateInput = {
    id?: string
    workspaceId: string
    clientName?: string | null
    clientAge?: number | null
    clientContact?: string | null
    clientEmail?: string | null
    clientOccupation?: string | null
    clientAddress?: string | null
    firText?: string | null
    caseType?: $Enums.CaseType | null
    description?: string | null
    incidentDate?: Date | string | null
    witnesses?: string | null
    location?: string | null
    policeStation?: string | null
    opposingParty?: string | null
    urgency?: $Enums.UrgencyLevel | null
    courtOrders?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaseContextUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientAge?: NullableIntFieldUpdateOperationsInput | number | null
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    clientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    firText?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableEnumCaseTypeFieldUpdateOperationsInput | $Enums.CaseType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    incidentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    witnesses?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    policeStation?: NullableStringFieldUpdateOperationsInput | string | null
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableEnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel | null
    courtOrders?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutCaseContextNestedInput
  }

  export type CaseContextUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientAge?: NullableIntFieldUpdateOperationsInput | number | null
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    clientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    firText?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableEnumCaseTypeFieldUpdateOperationsInput | $Enums.CaseType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    incidentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    witnesses?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    policeStation?: NullableStringFieldUpdateOperationsInput | string | null
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableEnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel | null
    courtOrders?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseContextCreateManyInput = {
    id?: string
    workspaceId: string
    clientName?: string | null
    clientAge?: number | null
    clientContact?: string | null
    clientEmail?: string | null
    clientOccupation?: string | null
    clientAddress?: string | null
    firText?: string | null
    caseType?: $Enums.CaseType | null
    description?: string | null
    incidentDate?: Date | string | null
    witnesses?: string | null
    location?: string | null
    policeStation?: string | null
    opposingParty?: string | null
    urgency?: $Enums.UrgencyLevel | null
    courtOrders?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaseContextUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientAge?: NullableIntFieldUpdateOperationsInput | number | null
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    clientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    firText?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableEnumCaseTypeFieldUpdateOperationsInput | $Enums.CaseType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    incidentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    witnesses?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    policeStation?: NullableStringFieldUpdateOperationsInput | string | null
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableEnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel | null
    courtOrders?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseContextUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientAge?: NullableIntFieldUpdateOperationsInput | number | null
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    clientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    firText?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableEnumCaseTypeFieldUpdateOperationsInput | $Enums.CaseType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    incidentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    witnesses?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    policeStation?: NullableStringFieldUpdateOperationsInput | string | null
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableEnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel | null
    courtOrders?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceCreateInput = {
    id?: string
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutSourcesInput
  }

  export type SourceUncheckedCreateInput = {
    id?: string
    workspaceId: string
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutSourcesNestedInput
  }

  export type SourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceCreateManyInput = {
    id?: string
    workspaceId: string
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedFileCreateInput = {
    id?: string
    title?: string | null
    content?: string | null
    type?: $Enums.FileType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutGeneratedFilesInput
  }

  export type GeneratedFileUncheckedCreateInput = {
    id?: string
    workspaceId: string
    title?: string | null
    content?: string | null
    type?: $Enums.FileType | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GeneratedFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutGeneratedFilesNestedInput
  }

  export type GeneratedFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedFileCreateManyInput = {
    id?: string
    workspaceId: string
    title?: string | null
    content?: string | null
    type?: $Enums.FileType | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GeneratedFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateInput = {
    id?: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateInput = {
    id?: string
    workspaceId: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateManyInput = {
    id?: string
    workspaceId: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineEventCreateInput = {
    id?: string
    date?: Date | string | null
    title?: string | null
    description?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutTimelineInput
  }

  export type TimelineEventUncheckedCreateInput = {
    id?: string
    workspaceId: string
    date?: Date | string | null
    title?: string | null
    description?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimelineEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutTimelineNestedInput
  }

  export type TimelineEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineEventCreateManyInput = {
    id?: string
    workspaceId: string
    date?: Date | string | null
    title?: string | null
    description?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimelineEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArgumentCreateInput = {
    id?: string
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutArgumentsInput
  }

  export type ArgumentUncheckedCreateInput = {
    id?: string
    workspaceId: string
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArgumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutArgumentsNestedInput
  }

  export type ArgumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArgumentCreateManyInput = {
    id?: string
    workspaceId: string
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArgumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArgumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type WorkspaceListRelationFilter = {
    every?: WorkspaceWhereInput
    some?: WorkspaceWhereInput
    none?: WorkspaceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkspaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
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

  export type CaseContextListRelationFilter = {
    every?: CaseContextWhereInput
    some?: CaseContextWhereInput
    none?: CaseContextWhereInput
  }

  export type SourceListRelationFilter = {
    every?: SourceWhereInput
    some?: SourceWhereInput
    none?: SourceWhereInput
  }

  export type GeneratedFileListRelationFilter = {
    every?: GeneratedFileWhereInput
    some?: GeneratedFileWhereInput
    none?: GeneratedFileWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type TimelineEventListRelationFilter = {
    every?: TimelineEventWhereInput
    some?: TimelineEventWhereInput
    none?: TimelineEventWhereInput
  }

  export type ArgumentListRelationFilter = {
    every?: ArgumentWhereInput
    some?: ArgumentWhereInput
    none?: ArgumentWhereInput
  }

  export type CaseContextOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GeneratedFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimelineEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArgumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumCaseTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseType | EnumCaseTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CaseType[] | ListEnumCaseTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CaseType[] | ListEnumCaseTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCaseTypeNullableFilter<$PrismaModel> | $Enums.CaseType | null
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

  export type EnumUrgencyLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UrgencyLevel | EnumUrgencyLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUrgencyLevelNullableFilter<$PrismaModel> | $Enums.UrgencyLevel | null
  }

  export type WorkspaceScalarRelationFilter = {
    is?: WorkspaceWhereInput
    isNot?: WorkspaceWhereInput
  }

  export type CaseContextCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    clientName?: SortOrder
    clientAge?: SortOrder
    clientContact?: SortOrder
    clientEmail?: SortOrder
    clientOccupation?: SortOrder
    clientAddress?: SortOrder
    firText?: SortOrder
    caseType?: SortOrder
    description?: SortOrder
    incidentDate?: SortOrder
    witnesses?: SortOrder
    location?: SortOrder
    policeStation?: SortOrder
    opposingParty?: SortOrder
    urgency?: SortOrder
    courtOrders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaseContextAvgOrderByAggregateInput = {
    clientAge?: SortOrder
  }

  export type CaseContextMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    clientName?: SortOrder
    clientAge?: SortOrder
    clientContact?: SortOrder
    clientEmail?: SortOrder
    clientOccupation?: SortOrder
    clientAddress?: SortOrder
    firText?: SortOrder
    caseType?: SortOrder
    description?: SortOrder
    incidentDate?: SortOrder
    witnesses?: SortOrder
    location?: SortOrder
    policeStation?: SortOrder
    opposingParty?: SortOrder
    urgency?: SortOrder
    courtOrders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaseContextMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    clientName?: SortOrder
    clientAge?: SortOrder
    clientContact?: SortOrder
    clientEmail?: SortOrder
    clientOccupation?: SortOrder
    clientAddress?: SortOrder
    firText?: SortOrder
    caseType?: SortOrder
    description?: SortOrder
    incidentDate?: SortOrder
    witnesses?: SortOrder
    location?: SortOrder
    policeStation?: SortOrder
    opposingParty?: SortOrder
    urgency?: SortOrder
    courtOrders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaseContextSumOrderByAggregateInput = {
    clientAge?: SortOrder
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

  export type EnumCaseTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseType | EnumCaseTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CaseType[] | ListEnumCaseTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CaseType[] | ListEnumCaseTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCaseTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.CaseType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCaseTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumCaseTypeNullableFilter<$PrismaModel>
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

  export type EnumUrgencyLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UrgencyLevel | EnumUrgencyLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUrgencyLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.UrgencyLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUrgencyLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumUrgencyLevelNullableFilter<$PrismaModel>
  }

  export type SourceCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFileTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFileTypeNullableFilter<$PrismaModel> | $Enums.FileType | null
  }

  export type GeneratedFileCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GeneratedFileMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GeneratedFileMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFileTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFileTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.FileType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFileTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumFileTypeNullableFilter<$PrismaModel>
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TimelineEventCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    date?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimelineEventMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    date?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimelineEventMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    date?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ArgumentCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArgumentMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArgumentMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkspaceCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput> | WorkspaceCreateWithoutUserInput[] | WorkspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput | WorkspaceCreateOrConnectWithoutUserInput[]
    createMany?: WorkspaceCreateManyUserInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type WorkspaceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput> | WorkspaceCreateWithoutUserInput[] | WorkspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput | WorkspaceCreateOrConnectWithoutUserInput[]
    createMany?: WorkspaceCreateManyUserInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkspaceUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput> | WorkspaceCreateWithoutUserInput[] | WorkspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput | WorkspaceCreateOrConnectWithoutUserInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutUserInput | WorkspaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkspaceCreateManyUserInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutUserInput | WorkspaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutUserInput | WorkspaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type WorkspaceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput> | WorkspaceCreateWithoutUserInput[] | WorkspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput | WorkspaceCreateOrConnectWithoutUserInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutUserInput | WorkspaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkspaceCreateManyUserInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutUserInput | WorkspaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutUserInput | WorkspaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkspacesInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
  }

  export type CaseContextCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<CaseContextCreateWithoutWorkspaceInput, CaseContextUncheckedCreateWithoutWorkspaceInput> | CaseContextCreateWithoutWorkspaceInput[] | CaseContextUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: CaseContextCreateOrConnectWithoutWorkspaceInput | CaseContextCreateOrConnectWithoutWorkspaceInput[]
    createMany?: CaseContextCreateManyWorkspaceInputEnvelope
    connect?: CaseContextWhereUniqueInput | CaseContextWhereUniqueInput[]
  }

  export type SourceCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<SourceCreateWithoutWorkspaceInput, SourceUncheckedCreateWithoutWorkspaceInput> | SourceCreateWithoutWorkspaceInput[] | SourceUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: SourceCreateOrConnectWithoutWorkspaceInput | SourceCreateOrConnectWithoutWorkspaceInput[]
    createMany?: SourceCreateManyWorkspaceInputEnvelope
    connect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
  }

  export type GeneratedFileCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<GeneratedFileCreateWithoutWorkspaceInput, GeneratedFileUncheckedCreateWithoutWorkspaceInput> | GeneratedFileCreateWithoutWorkspaceInput[] | GeneratedFileUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: GeneratedFileCreateOrConnectWithoutWorkspaceInput | GeneratedFileCreateOrConnectWithoutWorkspaceInput[]
    createMany?: GeneratedFileCreateManyWorkspaceInputEnvelope
    connect?: GeneratedFileWhereUniqueInput | GeneratedFileWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<NoteCreateWithoutWorkspaceInput, NoteUncheckedCreateWithoutWorkspaceInput> | NoteCreateWithoutWorkspaceInput[] | NoteUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutWorkspaceInput | NoteCreateOrConnectWithoutWorkspaceInput[]
    createMany?: NoteCreateManyWorkspaceInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type TimelineEventCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<TimelineEventCreateWithoutWorkspaceInput, TimelineEventUncheckedCreateWithoutWorkspaceInput> | TimelineEventCreateWithoutWorkspaceInput[] | TimelineEventUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TimelineEventCreateOrConnectWithoutWorkspaceInput | TimelineEventCreateOrConnectWithoutWorkspaceInput[]
    createMany?: TimelineEventCreateManyWorkspaceInputEnvelope
    connect?: TimelineEventWhereUniqueInput | TimelineEventWhereUniqueInput[]
  }

  export type ArgumentCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ArgumentCreateWithoutWorkspaceInput, ArgumentUncheckedCreateWithoutWorkspaceInput> | ArgumentCreateWithoutWorkspaceInput[] | ArgumentUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ArgumentCreateOrConnectWithoutWorkspaceInput | ArgumentCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ArgumentCreateManyWorkspaceInputEnvelope
    connect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
  }

  export type CaseContextUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<CaseContextCreateWithoutWorkspaceInput, CaseContextUncheckedCreateWithoutWorkspaceInput> | CaseContextCreateWithoutWorkspaceInput[] | CaseContextUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: CaseContextCreateOrConnectWithoutWorkspaceInput | CaseContextCreateOrConnectWithoutWorkspaceInput[]
    createMany?: CaseContextCreateManyWorkspaceInputEnvelope
    connect?: CaseContextWhereUniqueInput | CaseContextWhereUniqueInput[]
  }

  export type SourceUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<SourceCreateWithoutWorkspaceInput, SourceUncheckedCreateWithoutWorkspaceInput> | SourceCreateWithoutWorkspaceInput[] | SourceUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: SourceCreateOrConnectWithoutWorkspaceInput | SourceCreateOrConnectWithoutWorkspaceInput[]
    createMany?: SourceCreateManyWorkspaceInputEnvelope
    connect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
  }

  export type GeneratedFileUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<GeneratedFileCreateWithoutWorkspaceInput, GeneratedFileUncheckedCreateWithoutWorkspaceInput> | GeneratedFileCreateWithoutWorkspaceInput[] | GeneratedFileUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: GeneratedFileCreateOrConnectWithoutWorkspaceInput | GeneratedFileCreateOrConnectWithoutWorkspaceInput[]
    createMany?: GeneratedFileCreateManyWorkspaceInputEnvelope
    connect?: GeneratedFileWhereUniqueInput | GeneratedFileWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<NoteCreateWithoutWorkspaceInput, NoteUncheckedCreateWithoutWorkspaceInput> | NoteCreateWithoutWorkspaceInput[] | NoteUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutWorkspaceInput | NoteCreateOrConnectWithoutWorkspaceInput[]
    createMany?: NoteCreateManyWorkspaceInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type TimelineEventUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<TimelineEventCreateWithoutWorkspaceInput, TimelineEventUncheckedCreateWithoutWorkspaceInput> | TimelineEventCreateWithoutWorkspaceInput[] | TimelineEventUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TimelineEventCreateOrConnectWithoutWorkspaceInput | TimelineEventCreateOrConnectWithoutWorkspaceInput[]
    createMany?: TimelineEventCreateManyWorkspaceInputEnvelope
    connect?: TimelineEventWhereUniqueInput | TimelineEventWhereUniqueInput[]
  }

  export type ArgumentUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ArgumentCreateWithoutWorkspaceInput, ArgumentUncheckedCreateWithoutWorkspaceInput> | ArgumentCreateWithoutWorkspaceInput[] | ArgumentUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ArgumentCreateOrConnectWithoutWorkspaceInput | ArgumentCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ArgumentCreateManyWorkspaceInputEnvelope
    connect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWorkspacesNestedInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    upsert?: UserUpsertWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkspacesInput, UserUpdateWithoutWorkspacesInput>, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type CaseContextUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<CaseContextCreateWithoutWorkspaceInput, CaseContextUncheckedCreateWithoutWorkspaceInput> | CaseContextCreateWithoutWorkspaceInput[] | CaseContextUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: CaseContextCreateOrConnectWithoutWorkspaceInput | CaseContextCreateOrConnectWithoutWorkspaceInput[]
    upsert?: CaseContextUpsertWithWhereUniqueWithoutWorkspaceInput | CaseContextUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: CaseContextCreateManyWorkspaceInputEnvelope
    set?: CaseContextWhereUniqueInput | CaseContextWhereUniqueInput[]
    disconnect?: CaseContextWhereUniqueInput | CaseContextWhereUniqueInput[]
    delete?: CaseContextWhereUniqueInput | CaseContextWhereUniqueInput[]
    connect?: CaseContextWhereUniqueInput | CaseContextWhereUniqueInput[]
    update?: CaseContextUpdateWithWhereUniqueWithoutWorkspaceInput | CaseContextUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: CaseContextUpdateManyWithWhereWithoutWorkspaceInput | CaseContextUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: CaseContextScalarWhereInput | CaseContextScalarWhereInput[]
  }

  export type SourceUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<SourceCreateWithoutWorkspaceInput, SourceUncheckedCreateWithoutWorkspaceInput> | SourceCreateWithoutWorkspaceInput[] | SourceUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: SourceCreateOrConnectWithoutWorkspaceInput | SourceCreateOrConnectWithoutWorkspaceInput[]
    upsert?: SourceUpsertWithWhereUniqueWithoutWorkspaceInput | SourceUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: SourceCreateManyWorkspaceInputEnvelope
    set?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    disconnect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    delete?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    connect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    update?: SourceUpdateWithWhereUniqueWithoutWorkspaceInput | SourceUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: SourceUpdateManyWithWhereWithoutWorkspaceInput | SourceUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: SourceScalarWhereInput | SourceScalarWhereInput[]
  }

  export type GeneratedFileUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<GeneratedFileCreateWithoutWorkspaceInput, GeneratedFileUncheckedCreateWithoutWorkspaceInput> | GeneratedFileCreateWithoutWorkspaceInput[] | GeneratedFileUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: GeneratedFileCreateOrConnectWithoutWorkspaceInput | GeneratedFileCreateOrConnectWithoutWorkspaceInput[]
    upsert?: GeneratedFileUpsertWithWhereUniqueWithoutWorkspaceInput | GeneratedFileUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: GeneratedFileCreateManyWorkspaceInputEnvelope
    set?: GeneratedFileWhereUniqueInput | GeneratedFileWhereUniqueInput[]
    disconnect?: GeneratedFileWhereUniqueInput | GeneratedFileWhereUniqueInput[]
    delete?: GeneratedFileWhereUniqueInput | GeneratedFileWhereUniqueInput[]
    connect?: GeneratedFileWhereUniqueInput | GeneratedFileWhereUniqueInput[]
    update?: GeneratedFileUpdateWithWhereUniqueWithoutWorkspaceInput | GeneratedFileUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: GeneratedFileUpdateManyWithWhereWithoutWorkspaceInput | GeneratedFileUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: GeneratedFileScalarWhereInput | GeneratedFileScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<NoteCreateWithoutWorkspaceInput, NoteUncheckedCreateWithoutWorkspaceInput> | NoteCreateWithoutWorkspaceInput[] | NoteUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutWorkspaceInput | NoteCreateOrConnectWithoutWorkspaceInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutWorkspaceInput | NoteUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: NoteCreateManyWorkspaceInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutWorkspaceInput | NoteUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutWorkspaceInput | NoteUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type TimelineEventUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<TimelineEventCreateWithoutWorkspaceInput, TimelineEventUncheckedCreateWithoutWorkspaceInput> | TimelineEventCreateWithoutWorkspaceInput[] | TimelineEventUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TimelineEventCreateOrConnectWithoutWorkspaceInput | TimelineEventCreateOrConnectWithoutWorkspaceInput[]
    upsert?: TimelineEventUpsertWithWhereUniqueWithoutWorkspaceInput | TimelineEventUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: TimelineEventCreateManyWorkspaceInputEnvelope
    set?: TimelineEventWhereUniqueInput | TimelineEventWhereUniqueInput[]
    disconnect?: TimelineEventWhereUniqueInput | TimelineEventWhereUniqueInput[]
    delete?: TimelineEventWhereUniqueInput | TimelineEventWhereUniqueInput[]
    connect?: TimelineEventWhereUniqueInput | TimelineEventWhereUniqueInput[]
    update?: TimelineEventUpdateWithWhereUniqueWithoutWorkspaceInput | TimelineEventUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: TimelineEventUpdateManyWithWhereWithoutWorkspaceInput | TimelineEventUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: TimelineEventScalarWhereInput | TimelineEventScalarWhereInput[]
  }

  export type ArgumentUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ArgumentCreateWithoutWorkspaceInput, ArgumentUncheckedCreateWithoutWorkspaceInput> | ArgumentCreateWithoutWorkspaceInput[] | ArgumentUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ArgumentCreateOrConnectWithoutWorkspaceInput | ArgumentCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ArgumentUpsertWithWhereUniqueWithoutWorkspaceInput | ArgumentUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ArgumentCreateManyWorkspaceInputEnvelope
    set?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    disconnect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    delete?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    connect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    update?: ArgumentUpdateWithWhereUniqueWithoutWorkspaceInput | ArgumentUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ArgumentUpdateManyWithWhereWithoutWorkspaceInput | ArgumentUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ArgumentScalarWhereInput | ArgumentScalarWhereInput[]
  }

  export type CaseContextUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<CaseContextCreateWithoutWorkspaceInput, CaseContextUncheckedCreateWithoutWorkspaceInput> | CaseContextCreateWithoutWorkspaceInput[] | CaseContextUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: CaseContextCreateOrConnectWithoutWorkspaceInput | CaseContextCreateOrConnectWithoutWorkspaceInput[]
    upsert?: CaseContextUpsertWithWhereUniqueWithoutWorkspaceInput | CaseContextUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: CaseContextCreateManyWorkspaceInputEnvelope
    set?: CaseContextWhereUniqueInput | CaseContextWhereUniqueInput[]
    disconnect?: CaseContextWhereUniqueInput | CaseContextWhereUniqueInput[]
    delete?: CaseContextWhereUniqueInput | CaseContextWhereUniqueInput[]
    connect?: CaseContextWhereUniqueInput | CaseContextWhereUniqueInput[]
    update?: CaseContextUpdateWithWhereUniqueWithoutWorkspaceInput | CaseContextUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: CaseContextUpdateManyWithWhereWithoutWorkspaceInput | CaseContextUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: CaseContextScalarWhereInput | CaseContextScalarWhereInput[]
  }

  export type SourceUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<SourceCreateWithoutWorkspaceInput, SourceUncheckedCreateWithoutWorkspaceInput> | SourceCreateWithoutWorkspaceInput[] | SourceUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: SourceCreateOrConnectWithoutWorkspaceInput | SourceCreateOrConnectWithoutWorkspaceInput[]
    upsert?: SourceUpsertWithWhereUniqueWithoutWorkspaceInput | SourceUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: SourceCreateManyWorkspaceInputEnvelope
    set?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    disconnect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    delete?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    connect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    update?: SourceUpdateWithWhereUniqueWithoutWorkspaceInput | SourceUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: SourceUpdateManyWithWhereWithoutWorkspaceInput | SourceUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: SourceScalarWhereInput | SourceScalarWhereInput[]
  }

  export type GeneratedFileUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<GeneratedFileCreateWithoutWorkspaceInput, GeneratedFileUncheckedCreateWithoutWorkspaceInput> | GeneratedFileCreateWithoutWorkspaceInput[] | GeneratedFileUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: GeneratedFileCreateOrConnectWithoutWorkspaceInput | GeneratedFileCreateOrConnectWithoutWorkspaceInput[]
    upsert?: GeneratedFileUpsertWithWhereUniqueWithoutWorkspaceInput | GeneratedFileUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: GeneratedFileCreateManyWorkspaceInputEnvelope
    set?: GeneratedFileWhereUniqueInput | GeneratedFileWhereUniqueInput[]
    disconnect?: GeneratedFileWhereUniqueInput | GeneratedFileWhereUniqueInput[]
    delete?: GeneratedFileWhereUniqueInput | GeneratedFileWhereUniqueInput[]
    connect?: GeneratedFileWhereUniqueInput | GeneratedFileWhereUniqueInput[]
    update?: GeneratedFileUpdateWithWhereUniqueWithoutWorkspaceInput | GeneratedFileUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: GeneratedFileUpdateManyWithWhereWithoutWorkspaceInput | GeneratedFileUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: GeneratedFileScalarWhereInput | GeneratedFileScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<NoteCreateWithoutWorkspaceInput, NoteUncheckedCreateWithoutWorkspaceInput> | NoteCreateWithoutWorkspaceInput[] | NoteUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutWorkspaceInput | NoteCreateOrConnectWithoutWorkspaceInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutWorkspaceInput | NoteUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: NoteCreateManyWorkspaceInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutWorkspaceInput | NoteUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutWorkspaceInput | NoteUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type TimelineEventUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<TimelineEventCreateWithoutWorkspaceInput, TimelineEventUncheckedCreateWithoutWorkspaceInput> | TimelineEventCreateWithoutWorkspaceInput[] | TimelineEventUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TimelineEventCreateOrConnectWithoutWorkspaceInput | TimelineEventCreateOrConnectWithoutWorkspaceInput[]
    upsert?: TimelineEventUpsertWithWhereUniqueWithoutWorkspaceInput | TimelineEventUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: TimelineEventCreateManyWorkspaceInputEnvelope
    set?: TimelineEventWhereUniqueInput | TimelineEventWhereUniqueInput[]
    disconnect?: TimelineEventWhereUniqueInput | TimelineEventWhereUniqueInput[]
    delete?: TimelineEventWhereUniqueInput | TimelineEventWhereUniqueInput[]
    connect?: TimelineEventWhereUniqueInput | TimelineEventWhereUniqueInput[]
    update?: TimelineEventUpdateWithWhereUniqueWithoutWorkspaceInput | TimelineEventUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: TimelineEventUpdateManyWithWhereWithoutWorkspaceInput | TimelineEventUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: TimelineEventScalarWhereInput | TimelineEventScalarWhereInput[]
  }

  export type ArgumentUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ArgumentCreateWithoutWorkspaceInput, ArgumentUncheckedCreateWithoutWorkspaceInput> | ArgumentCreateWithoutWorkspaceInput[] | ArgumentUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ArgumentCreateOrConnectWithoutWorkspaceInput | ArgumentCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ArgumentUpsertWithWhereUniqueWithoutWorkspaceInput | ArgumentUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ArgumentCreateManyWorkspaceInputEnvelope
    set?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    disconnect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    delete?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    connect?: ArgumentWhereUniqueInput | ArgumentWhereUniqueInput[]
    update?: ArgumentUpdateWithWhereUniqueWithoutWorkspaceInput | ArgumentUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ArgumentUpdateManyWithWhereWithoutWorkspaceInput | ArgumentUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ArgumentScalarWhereInput | ArgumentScalarWhereInput[]
  }

  export type WorkspaceCreateNestedOneWithoutCaseContextInput = {
    create?: XOR<WorkspaceCreateWithoutCaseContextInput, WorkspaceUncheckedCreateWithoutCaseContextInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutCaseContextInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumCaseTypeFieldUpdateOperationsInput = {
    set?: $Enums.CaseType | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumUrgencyLevelFieldUpdateOperationsInput = {
    set?: $Enums.UrgencyLevel | null
  }

  export type WorkspaceUpdateOneRequiredWithoutCaseContextNestedInput = {
    create?: XOR<WorkspaceCreateWithoutCaseContextInput, WorkspaceUncheckedCreateWithoutCaseContextInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutCaseContextInput
    upsert?: WorkspaceUpsertWithoutCaseContextInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutCaseContextInput, WorkspaceUpdateWithoutCaseContextInput>, WorkspaceUncheckedUpdateWithoutCaseContextInput>
  }

  export type WorkspaceCreateNestedOneWithoutSourcesInput = {
    create?: XOR<WorkspaceCreateWithoutSourcesInput, WorkspaceUncheckedCreateWithoutSourcesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutSourcesInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutSourcesNestedInput = {
    create?: XOR<WorkspaceCreateWithoutSourcesInput, WorkspaceUncheckedCreateWithoutSourcesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutSourcesInput
    upsert?: WorkspaceUpsertWithoutSourcesInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutSourcesInput, WorkspaceUpdateWithoutSourcesInput>, WorkspaceUncheckedUpdateWithoutSourcesInput>
  }

  export type WorkspaceCreateNestedOneWithoutGeneratedFilesInput = {
    create?: XOR<WorkspaceCreateWithoutGeneratedFilesInput, WorkspaceUncheckedCreateWithoutGeneratedFilesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutGeneratedFilesInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type NullableEnumFileTypeFieldUpdateOperationsInput = {
    set?: $Enums.FileType | null
  }

  export type WorkspaceUpdateOneRequiredWithoutGeneratedFilesNestedInput = {
    create?: XOR<WorkspaceCreateWithoutGeneratedFilesInput, WorkspaceUncheckedCreateWithoutGeneratedFilesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutGeneratedFilesInput
    upsert?: WorkspaceUpsertWithoutGeneratedFilesInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutGeneratedFilesInput, WorkspaceUpdateWithoutGeneratedFilesInput>, WorkspaceUncheckedUpdateWithoutGeneratedFilesInput>
  }

  export type WorkspaceCreateNestedOneWithoutNotesInput = {
    create?: XOR<WorkspaceCreateWithoutNotesInput, WorkspaceUncheckedCreateWithoutNotesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutNotesInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<WorkspaceCreateWithoutNotesInput, WorkspaceUncheckedCreateWithoutNotesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutNotesInput
    upsert?: WorkspaceUpsertWithoutNotesInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutNotesInput, WorkspaceUpdateWithoutNotesInput>, WorkspaceUncheckedUpdateWithoutNotesInput>
  }

  export type WorkspaceCreateNestedOneWithoutTimelineInput = {
    create?: XOR<WorkspaceCreateWithoutTimelineInput, WorkspaceUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTimelineInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WorkspaceUpdateOneRequiredWithoutTimelineNestedInput = {
    create?: XOR<WorkspaceCreateWithoutTimelineInput, WorkspaceUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTimelineInput
    upsert?: WorkspaceUpsertWithoutTimelineInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutTimelineInput, WorkspaceUpdateWithoutTimelineInput>, WorkspaceUncheckedUpdateWithoutTimelineInput>
  }

  export type WorkspaceCreateNestedOneWithoutArgumentsInput = {
    create?: XOR<WorkspaceCreateWithoutArgumentsInput, WorkspaceUncheckedCreateWithoutArgumentsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutArgumentsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutArgumentsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutArgumentsInput, WorkspaceUncheckedCreateWithoutArgumentsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutArgumentsInput
    upsert?: WorkspaceUpsertWithoutArgumentsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutArgumentsInput, WorkspaceUpdateWithoutArgumentsInput>, WorkspaceUncheckedUpdateWithoutArgumentsInput>
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

  export type NestedEnumCaseTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseType | EnumCaseTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CaseType[] | ListEnumCaseTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CaseType[] | ListEnumCaseTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCaseTypeNullableFilter<$PrismaModel> | $Enums.CaseType | null
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

  export type NestedEnumUrgencyLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UrgencyLevel | EnumUrgencyLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUrgencyLevelNullableFilter<$PrismaModel> | $Enums.UrgencyLevel | null
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

  export type NestedEnumCaseTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseType | EnumCaseTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CaseType[] | ListEnumCaseTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CaseType[] | ListEnumCaseTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCaseTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.CaseType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCaseTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumCaseTypeNullableFilter<$PrismaModel>
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

  export type NestedEnumUrgencyLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UrgencyLevel | EnumUrgencyLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUrgencyLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.UrgencyLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUrgencyLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumUrgencyLevelNullableFilter<$PrismaModel>
  }

  export type NestedEnumFileTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFileTypeNullableFilter<$PrismaModel> | $Enums.FileType | null
  }

  export type NestedEnumFileTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFileTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.FileType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFileTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumFileTypeNullableFilter<$PrismaModel>
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

  export type WorkspaceCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    caseContext?: CaseContextCreateNestedManyWithoutWorkspaceInput
    sources?: SourceCreateNestedManyWithoutWorkspaceInput
    generatedFiles?: GeneratedFileCreateNestedManyWithoutWorkspaceInput
    notes?: NoteCreateNestedManyWithoutWorkspaceInput
    timeline?: TimelineEventCreateNestedManyWithoutWorkspaceInput
    arguments?: ArgumentCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    caseContext?: CaseContextUncheckedCreateNestedManyWithoutWorkspaceInput
    sources?: SourceUncheckedCreateNestedManyWithoutWorkspaceInput
    generatedFiles?: GeneratedFileUncheckedCreateNestedManyWithoutWorkspaceInput
    notes?: NoteUncheckedCreateNestedManyWithoutWorkspaceInput
    timeline?: TimelineEventUncheckedCreateNestedManyWithoutWorkspaceInput
    arguments?: ArgumentUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutUserInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput>
  }

  export type WorkspaceCreateManyUserInputEnvelope = {
    data: WorkspaceCreateManyUserInput | WorkspaceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkspaceWhereUniqueInput
    update: XOR<WorkspaceUpdateWithoutUserInput, WorkspaceUncheckedUpdateWithoutUserInput>
    create: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput>
  }

  export type WorkspaceUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkspaceWhereUniqueInput
    data: XOR<WorkspaceUpdateWithoutUserInput, WorkspaceUncheckedUpdateWithoutUserInput>
  }

  export type WorkspaceUpdateManyWithWhereWithoutUserInput = {
    where: WorkspaceScalarWhereInput
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkspaceScalarWhereInput = {
    AND?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    OR?: WorkspaceScalarWhereInput[]
    NOT?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    description?: StringNullableFilter<"Workspace"> | string | null
    userId?: StringFilter<"Workspace"> | string
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
  }

  export type UserCreateWithoutWorkspacesInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutWorkspacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
  }

  export type CaseContextCreateWithoutWorkspaceInput = {
    id?: string
    clientName?: string | null
    clientAge?: number | null
    clientContact?: string | null
    clientEmail?: string | null
    clientOccupation?: string | null
    clientAddress?: string | null
    firText?: string | null
    caseType?: $Enums.CaseType | null
    description?: string | null
    incidentDate?: Date | string | null
    witnesses?: string | null
    location?: string | null
    policeStation?: string | null
    opposingParty?: string | null
    urgency?: $Enums.UrgencyLevel | null
    courtOrders?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaseContextUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    clientName?: string | null
    clientAge?: number | null
    clientContact?: string | null
    clientEmail?: string | null
    clientOccupation?: string | null
    clientAddress?: string | null
    firText?: string | null
    caseType?: $Enums.CaseType | null
    description?: string | null
    incidentDate?: Date | string | null
    witnesses?: string | null
    location?: string | null
    policeStation?: string | null
    opposingParty?: string | null
    urgency?: $Enums.UrgencyLevel | null
    courtOrders?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaseContextCreateOrConnectWithoutWorkspaceInput = {
    where: CaseContextWhereUniqueInput
    create: XOR<CaseContextCreateWithoutWorkspaceInput, CaseContextUncheckedCreateWithoutWorkspaceInput>
  }

  export type CaseContextCreateManyWorkspaceInputEnvelope = {
    data: CaseContextCreateManyWorkspaceInput | CaseContextCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type SourceCreateWithoutWorkspaceInput = {
    id?: string
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceCreateOrConnectWithoutWorkspaceInput = {
    where: SourceWhereUniqueInput
    create: XOR<SourceCreateWithoutWorkspaceInput, SourceUncheckedCreateWithoutWorkspaceInput>
  }

  export type SourceCreateManyWorkspaceInputEnvelope = {
    data: SourceCreateManyWorkspaceInput | SourceCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type GeneratedFileCreateWithoutWorkspaceInput = {
    id?: string
    title?: string | null
    content?: string | null
    type?: $Enums.FileType | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GeneratedFileUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    title?: string | null
    content?: string | null
    type?: $Enums.FileType | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GeneratedFileCreateOrConnectWithoutWorkspaceInput = {
    where: GeneratedFileWhereUniqueInput
    create: XOR<GeneratedFileCreateWithoutWorkspaceInput, GeneratedFileUncheckedCreateWithoutWorkspaceInput>
  }

  export type GeneratedFileCreateManyWorkspaceInputEnvelope = {
    data: GeneratedFileCreateManyWorkspaceInput | GeneratedFileCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutWorkspaceInput = {
    id?: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCreateOrConnectWithoutWorkspaceInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutWorkspaceInput, NoteUncheckedCreateWithoutWorkspaceInput>
  }

  export type NoteCreateManyWorkspaceInputEnvelope = {
    data: NoteCreateManyWorkspaceInput | NoteCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type TimelineEventCreateWithoutWorkspaceInput = {
    id?: string
    date?: Date | string | null
    title?: string | null
    description?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimelineEventUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    date?: Date | string | null
    title?: string | null
    description?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimelineEventCreateOrConnectWithoutWorkspaceInput = {
    where: TimelineEventWhereUniqueInput
    create: XOR<TimelineEventCreateWithoutWorkspaceInput, TimelineEventUncheckedCreateWithoutWorkspaceInput>
  }

  export type TimelineEventCreateManyWorkspaceInputEnvelope = {
    data: TimelineEventCreateManyWorkspaceInput | TimelineEventCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type ArgumentCreateWithoutWorkspaceInput = {
    id?: string
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArgumentUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArgumentCreateOrConnectWithoutWorkspaceInput = {
    where: ArgumentWhereUniqueInput
    create: XOR<ArgumentCreateWithoutWorkspaceInput, ArgumentUncheckedCreateWithoutWorkspaceInput>
  }

  export type ArgumentCreateManyWorkspaceInputEnvelope = {
    data: ArgumentCreateManyWorkspaceInput | ArgumentCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkspacesInput = {
    update: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkspacesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type UserUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseContextUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: CaseContextWhereUniqueInput
    update: XOR<CaseContextUpdateWithoutWorkspaceInput, CaseContextUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<CaseContextCreateWithoutWorkspaceInput, CaseContextUncheckedCreateWithoutWorkspaceInput>
  }

  export type CaseContextUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: CaseContextWhereUniqueInput
    data: XOR<CaseContextUpdateWithoutWorkspaceInput, CaseContextUncheckedUpdateWithoutWorkspaceInput>
  }

  export type CaseContextUpdateManyWithWhereWithoutWorkspaceInput = {
    where: CaseContextScalarWhereInput
    data: XOR<CaseContextUpdateManyMutationInput, CaseContextUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type CaseContextScalarWhereInput = {
    AND?: CaseContextScalarWhereInput | CaseContextScalarWhereInput[]
    OR?: CaseContextScalarWhereInput[]
    NOT?: CaseContextScalarWhereInput | CaseContextScalarWhereInput[]
    id?: StringFilter<"CaseContext"> | string
    workspaceId?: StringFilter<"CaseContext"> | string
    clientName?: StringNullableFilter<"CaseContext"> | string | null
    clientAge?: IntNullableFilter<"CaseContext"> | number | null
    clientContact?: StringNullableFilter<"CaseContext"> | string | null
    clientEmail?: StringNullableFilter<"CaseContext"> | string | null
    clientOccupation?: StringNullableFilter<"CaseContext"> | string | null
    clientAddress?: StringNullableFilter<"CaseContext"> | string | null
    firText?: StringNullableFilter<"CaseContext"> | string | null
    caseType?: EnumCaseTypeNullableFilter<"CaseContext"> | $Enums.CaseType | null
    description?: StringNullableFilter<"CaseContext"> | string | null
    incidentDate?: DateTimeNullableFilter<"CaseContext"> | Date | string | null
    witnesses?: StringNullableFilter<"CaseContext"> | string | null
    location?: StringNullableFilter<"CaseContext"> | string | null
    policeStation?: StringNullableFilter<"CaseContext"> | string | null
    opposingParty?: StringNullableFilter<"CaseContext"> | string | null
    urgency?: EnumUrgencyLevelNullableFilter<"CaseContext"> | $Enums.UrgencyLevel | null
    courtOrders?: StringNullableFilter<"CaseContext"> | string | null
    createdAt?: DateTimeFilter<"CaseContext"> | Date | string
    updatedAt?: DateTimeFilter<"CaseContext"> | Date | string
  }

  export type SourceUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: SourceWhereUniqueInput
    update: XOR<SourceUpdateWithoutWorkspaceInput, SourceUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<SourceCreateWithoutWorkspaceInput, SourceUncheckedCreateWithoutWorkspaceInput>
  }

  export type SourceUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: SourceWhereUniqueInput
    data: XOR<SourceUpdateWithoutWorkspaceInput, SourceUncheckedUpdateWithoutWorkspaceInput>
  }

  export type SourceUpdateManyWithWhereWithoutWorkspaceInput = {
    where: SourceScalarWhereInput
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type SourceScalarWhereInput = {
    AND?: SourceScalarWhereInput | SourceScalarWhereInput[]
    OR?: SourceScalarWhereInput[]
    NOT?: SourceScalarWhereInput | SourceScalarWhereInput[]
    id?: StringFilter<"Source"> | string
    workspaceId?: StringFilter<"Source"> | string
    title?: StringNullableFilter<"Source"> | string | null
    content?: StringNullableFilter<"Source"> | string | null
    createdAt?: DateTimeFilter<"Source"> | Date | string
    updatedAt?: DateTimeFilter<"Source"> | Date | string
  }

  export type GeneratedFileUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: GeneratedFileWhereUniqueInput
    update: XOR<GeneratedFileUpdateWithoutWorkspaceInput, GeneratedFileUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<GeneratedFileCreateWithoutWorkspaceInput, GeneratedFileUncheckedCreateWithoutWorkspaceInput>
  }

  export type GeneratedFileUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: GeneratedFileWhereUniqueInput
    data: XOR<GeneratedFileUpdateWithoutWorkspaceInput, GeneratedFileUncheckedUpdateWithoutWorkspaceInput>
  }

  export type GeneratedFileUpdateManyWithWhereWithoutWorkspaceInput = {
    where: GeneratedFileScalarWhereInput
    data: XOR<GeneratedFileUpdateManyMutationInput, GeneratedFileUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type GeneratedFileScalarWhereInput = {
    AND?: GeneratedFileScalarWhereInput | GeneratedFileScalarWhereInput[]
    OR?: GeneratedFileScalarWhereInput[]
    NOT?: GeneratedFileScalarWhereInput | GeneratedFileScalarWhereInput[]
    id?: StringFilter<"GeneratedFile"> | string
    workspaceId?: StringFilter<"GeneratedFile"> | string
    title?: StringNullableFilter<"GeneratedFile"> | string | null
    content?: StringNullableFilter<"GeneratedFile"> | string | null
    type?: EnumFileTypeNullableFilter<"GeneratedFile"> | $Enums.FileType | null
    createdAt?: DateTimeFilter<"GeneratedFile"> | Date | string
    updatedAt?: DateTimeFilter<"GeneratedFile"> | Date | string
  }

  export type NoteUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutWorkspaceInput, NoteUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<NoteCreateWithoutWorkspaceInput, NoteUncheckedCreateWithoutWorkspaceInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutWorkspaceInput, NoteUncheckedUpdateWithoutWorkspaceInput>
  }

  export type NoteUpdateManyWithWhereWithoutWorkspaceInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: StringFilter<"Note"> | string
    workspaceId?: StringFilter<"Note"> | string
    content?: StringNullableFilter<"Note"> | string | null
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
  }

  export type TimelineEventUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: TimelineEventWhereUniqueInput
    update: XOR<TimelineEventUpdateWithoutWorkspaceInput, TimelineEventUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<TimelineEventCreateWithoutWorkspaceInput, TimelineEventUncheckedCreateWithoutWorkspaceInput>
  }

  export type TimelineEventUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: TimelineEventWhereUniqueInput
    data: XOR<TimelineEventUpdateWithoutWorkspaceInput, TimelineEventUncheckedUpdateWithoutWorkspaceInput>
  }

  export type TimelineEventUpdateManyWithWhereWithoutWorkspaceInput = {
    where: TimelineEventScalarWhereInput
    data: XOR<TimelineEventUpdateManyMutationInput, TimelineEventUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type TimelineEventScalarWhereInput = {
    AND?: TimelineEventScalarWhereInput | TimelineEventScalarWhereInput[]
    OR?: TimelineEventScalarWhereInput[]
    NOT?: TimelineEventScalarWhereInput | TimelineEventScalarWhereInput[]
    id?: StringFilter<"TimelineEvent"> | string
    workspaceId?: StringFilter<"TimelineEvent"> | string
    date?: DateTimeNullableFilter<"TimelineEvent"> | Date | string | null
    title?: StringNullableFilter<"TimelineEvent"> | string | null
    description?: StringNullableFilter<"TimelineEvent"> | string | null
    completed?: BoolFilter<"TimelineEvent"> | boolean
    createdAt?: DateTimeFilter<"TimelineEvent"> | Date | string
    updatedAt?: DateTimeFilter<"TimelineEvent"> | Date | string
  }

  export type ArgumentUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: ArgumentWhereUniqueInput
    update: XOR<ArgumentUpdateWithoutWorkspaceInput, ArgumentUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<ArgumentCreateWithoutWorkspaceInput, ArgumentUncheckedCreateWithoutWorkspaceInput>
  }

  export type ArgumentUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: ArgumentWhereUniqueInput
    data: XOR<ArgumentUpdateWithoutWorkspaceInput, ArgumentUncheckedUpdateWithoutWorkspaceInput>
  }

  export type ArgumentUpdateManyWithWhereWithoutWorkspaceInput = {
    where: ArgumentScalarWhereInput
    data: XOR<ArgumentUpdateManyMutationInput, ArgumentUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type ArgumentScalarWhereInput = {
    AND?: ArgumentScalarWhereInput | ArgumentScalarWhereInput[]
    OR?: ArgumentScalarWhereInput[]
    NOT?: ArgumentScalarWhereInput | ArgumentScalarWhereInput[]
    id?: StringFilter<"Argument"> | string
    workspaceId?: StringFilter<"Argument"> | string
    title?: StringNullableFilter<"Argument"> | string | null
    content?: StringNullableFilter<"Argument"> | string | null
    createdAt?: DateTimeFilter<"Argument"> | Date | string
    updatedAt?: DateTimeFilter<"Argument"> | Date | string
  }

  export type WorkspaceCreateWithoutCaseContextInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkspacesInput
    sources?: SourceCreateNestedManyWithoutWorkspaceInput
    generatedFiles?: GeneratedFileCreateNestedManyWithoutWorkspaceInput
    notes?: NoteCreateNestedManyWithoutWorkspaceInput
    timeline?: TimelineEventCreateNestedManyWithoutWorkspaceInput
    arguments?: ArgumentCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutCaseContextInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sources?: SourceUncheckedCreateNestedManyWithoutWorkspaceInput
    generatedFiles?: GeneratedFileUncheckedCreateNestedManyWithoutWorkspaceInput
    notes?: NoteUncheckedCreateNestedManyWithoutWorkspaceInput
    timeline?: TimelineEventUncheckedCreateNestedManyWithoutWorkspaceInput
    arguments?: ArgumentUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutCaseContextInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutCaseContextInput, WorkspaceUncheckedCreateWithoutCaseContextInput>
  }

  export type WorkspaceUpsertWithoutCaseContextInput = {
    update: XOR<WorkspaceUpdateWithoutCaseContextInput, WorkspaceUncheckedUpdateWithoutCaseContextInput>
    create: XOR<WorkspaceCreateWithoutCaseContextInput, WorkspaceUncheckedCreateWithoutCaseContextInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutCaseContextInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutCaseContextInput, WorkspaceUncheckedUpdateWithoutCaseContextInput>
  }

  export type WorkspaceUpdateWithoutCaseContextInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    sources?: SourceUpdateManyWithoutWorkspaceNestedInput
    generatedFiles?: GeneratedFileUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUpdateManyWithoutWorkspaceNestedInput
    timeline?: TimelineEventUpdateManyWithoutWorkspaceNestedInput
    arguments?: ArgumentUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutCaseContextInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sources?: SourceUncheckedUpdateManyWithoutWorkspaceNestedInput
    generatedFiles?: GeneratedFileUncheckedUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutWorkspaceNestedInput
    timeline?: TimelineEventUncheckedUpdateManyWithoutWorkspaceNestedInput
    arguments?: ArgumentUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutSourcesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkspacesInput
    caseContext?: CaseContextCreateNestedManyWithoutWorkspaceInput
    generatedFiles?: GeneratedFileCreateNestedManyWithoutWorkspaceInput
    notes?: NoteCreateNestedManyWithoutWorkspaceInput
    timeline?: TimelineEventCreateNestedManyWithoutWorkspaceInput
    arguments?: ArgumentCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutSourcesInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    caseContext?: CaseContextUncheckedCreateNestedManyWithoutWorkspaceInput
    generatedFiles?: GeneratedFileUncheckedCreateNestedManyWithoutWorkspaceInput
    notes?: NoteUncheckedCreateNestedManyWithoutWorkspaceInput
    timeline?: TimelineEventUncheckedCreateNestedManyWithoutWorkspaceInput
    arguments?: ArgumentUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutSourcesInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutSourcesInput, WorkspaceUncheckedCreateWithoutSourcesInput>
  }

  export type WorkspaceUpsertWithoutSourcesInput = {
    update: XOR<WorkspaceUpdateWithoutSourcesInput, WorkspaceUncheckedUpdateWithoutSourcesInput>
    create: XOR<WorkspaceCreateWithoutSourcesInput, WorkspaceUncheckedCreateWithoutSourcesInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutSourcesInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutSourcesInput, WorkspaceUncheckedUpdateWithoutSourcesInput>
  }

  export type WorkspaceUpdateWithoutSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    caseContext?: CaseContextUpdateManyWithoutWorkspaceNestedInput
    generatedFiles?: GeneratedFileUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUpdateManyWithoutWorkspaceNestedInput
    timeline?: TimelineEventUpdateManyWithoutWorkspaceNestedInput
    arguments?: ArgumentUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseContext?: CaseContextUncheckedUpdateManyWithoutWorkspaceNestedInput
    generatedFiles?: GeneratedFileUncheckedUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutWorkspaceNestedInput
    timeline?: TimelineEventUncheckedUpdateManyWithoutWorkspaceNestedInput
    arguments?: ArgumentUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutGeneratedFilesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkspacesInput
    caseContext?: CaseContextCreateNestedManyWithoutWorkspaceInput
    sources?: SourceCreateNestedManyWithoutWorkspaceInput
    notes?: NoteCreateNestedManyWithoutWorkspaceInput
    timeline?: TimelineEventCreateNestedManyWithoutWorkspaceInput
    arguments?: ArgumentCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutGeneratedFilesInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    caseContext?: CaseContextUncheckedCreateNestedManyWithoutWorkspaceInput
    sources?: SourceUncheckedCreateNestedManyWithoutWorkspaceInput
    notes?: NoteUncheckedCreateNestedManyWithoutWorkspaceInput
    timeline?: TimelineEventUncheckedCreateNestedManyWithoutWorkspaceInput
    arguments?: ArgumentUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutGeneratedFilesInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutGeneratedFilesInput, WorkspaceUncheckedCreateWithoutGeneratedFilesInput>
  }

  export type WorkspaceUpsertWithoutGeneratedFilesInput = {
    update: XOR<WorkspaceUpdateWithoutGeneratedFilesInput, WorkspaceUncheckedUpdateWithoutGeneratedFilesInput>
    create: XOR<WorkspaceCreateWithoutGeneratedFilesInput, WorkspaceUncheckedCreateWithoutGeneratedFilesInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutGeneratedFilesInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutGeneratedFilesInput, WorkspaceUncheckedUpdateWithoutGeneratedFilesInput>
  }

  export type WorkspaceUpdateWithoutGeneratedFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    caseContext?: CaseContextUpdateManyWithoutWorkspaceNestedInput
    sources?: SourceUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUpdateManyWithoutWorkspaceNestedInput
    timeline?: TimelineEventUpdateManyWithoutWorkspaceNestedInput
    arguments?: ArgumentUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutGeneratedFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseContext?: CaseContextUncheckedUpdateManyWithoutWorkspaceNestedInput
    sources?: SourceUncheckedUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutWorkspaceNestedInput
    timeline?: TimelineEventUncheckedUpdateManyWithoutWorkspaceNestedInput
    arguments?: ArgumentUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutNotesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkspacesInput
    caseContext?: CaseContextCreateNestedManyWithoutWorkspaceInput
    sources?: SourceCreateNestedManyWithoutWorkspaceInput
    generatedFiles?: GeneratedFileCreateNestedManyWithoutWorkspaceInput
    timeline?: TimelineEventCreateNestedManyWithoutWorkspaceInput
    arguments?: ArgumentCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutNotesInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    caseContext?: CaseContextUncheckedCreateNestedManyWithoutWorkspaceInput
    sources?: SourceUncheckedCreateNestedManyWithoutWorkspaceInput
    generatedFiles?: GeneratedFileUncheckedCreateNestedManyWithoutWorkspaceInput
    timeline?: TimelineEventUncheckedCreateNestedManyWithoutWorkspaceInput
    arguments?: ArgumentUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutNotesInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutNotesInput, WorkspaceUncheckedCreateWithoutNotesInput>
  }

  export type WorkspaceUpsertWithoutNotesInput = {
    update: XOR<WorkspaceUpdateWithoutNotesInput, WorkspaceUncheckedUpdateWithoutNotesInput>
    create: XOR<WorkspaceCreateWithoutNotesInput, WorkspaceUncheckedCreateWithoutNotesInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutNotesInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutNotesInput, WorkspaceUncheckedUpdateWithoutNotesInput>
  }

  export type WorkspaceUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    caseContext?: CaseContextUpdateManyWithoutWorkspaceNestedInput
    sources?: SourceUpdateManyWithoutWorkspaceNestedInput
    generatedFiles?: GeneratedFileUpdateManyWithoutWorkspaceNestedInput
    timeline?: TimelineEventUpdateManyWithoutWorkspaceNestedInput
    arguments?: ArgumentUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseContext?: CaseContextUncheckedUpdateManyWithoutWorkspaceNestedInput
    sources?: SourceUncheckedUpdateManyWithoutWorkspaceNestedInput
    generatedFiles?: GeneratedFileUncheckedUpdateManyWithoutWorkspaceNestedInput
    timeline?: TimelineEventUncheckedUpdateManyWithoutWorkspaceNestedInput
    arguments?: ArgumentUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutTimelineInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkspacesInput
    caseContext?: CaseContextCreateNestedManyWithoutWorkspaceInput
    sources?: SourceCreateNestedManyWithoutWorkspaceInput
    generatedFiles?: GeneratedFileCreateNestedManyWithoutWorkspaceInput
    notes?: NoteCreateNestedManyWithoutWorkspaceInput
    arguments?: ArgumentCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutTimelineInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    caseContext?: CaseContextUncheckedCreateNestedManyWithoutWorkspaceInput
    sources?: SourceUncheckedCreateNestedManyWithoutWorkspaceInput
    generatedFiles?: GeneratedFileUncheckedCreateNestedManyWithoutWorkspaceInput
    notes?: NoteUncheckedCreateNestedManyWithoutWorkspaceInput
    arguments?: ArgumentUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutTimelineInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutTimelineInput, WorkspaceUncheckedCreateWithoutTimelineInput>
  }

  export type WorkspaceUpsertWithoutTimelineInput = {
    update: XOR<WorkspaceUpdateWithoutTimelineInput, WorkspaceUncheckedUpdateWithoutTimelineInput>
    create: XOR<WorkspaceCreateWithoutTimelineInput, WorkspaceUncheckedCreateWithoutTimelineInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutTimelineInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutTimelineInput, WorkspaceUncheckedUpdateWithoutTimelineInput>
  }

  export type WorkspaceUpdateWithoutTimelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    caseContext?: CaseContextUpdateManyWithoutWorkspaceNestedInput
    sources?: SourceUpdateManyWithoutWorkspaceNestedInput
    generatedFiles?: GeneratedFileUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUpdateManyWithoutWorkspaceNestedInput
    arguments?: ArgumentUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutTimelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseContext?: CaseContextUncheckedUpdateManyWithoutWorkspaceNestedInput
    sources?: SourceUncheckedUpdateManyWithoutWorkspaceNestedInput
    generatedFiles?: GeneratedFileUncheckedUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutWorkspaceNestedInput
    arguments?: ArgumentUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutArgumentsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkspacesInput
    caseContext?: CaseContextCreateNestedManyWithoutWorkspaceInput
    sources?: SourceCreateNestedManyWithoutWorkspaceInput
    generatedFiles?: GeneratedFileCreateNestedManyWithoutWorkspaceInput
    notes?: NoteCreateNestedManyWithoutWorkspaceInput
    timeline?: TimelineEventCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutArgumentsInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    caseContext?: CaseContextUncheckedCreateNestedManyWithoutWorkspaceInput
    sources?: SourceUncheckedCreateNestedManyWithoutWorkspaceInput
    generatedFiles?: GeneratedFileUncheckedCreateNestedManyWithoutWorkspaceInput
    notes?: NoteUncheckedCreateNestedManyWithoutWorkspaceInput
    timeline?: TimelineEventUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutArgumentsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutArgumentsInput, WorkspaceUncheckedCreateWithoutArgumentsInput>
  }

  export type WorkspaceUpsertWithoutArgumentsInput = {
    update: XOR<WorkspaceUpdateWithoutArgumentsInput, WorkspaceUncheckedUpdateWithoutArgumentsInput>
    create: XOR<WorkspaceCreateWithoutArgumentsInput, WorkspaceUncheckedCreateWithoutArgumentsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutArgumentsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutArgumentsInput, WorkspaceUncheckedUpdateWithoutArgumentsInput>
  }

  export type WorkspaceUpdateWithoutArgumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    caseContext?: CaseContextUpdateManyWithoutWorkspaceNestedInput
    sources?: SourceUpdateManyWithoutWorkspaceNestedInput
    generatedFiles?: GeneratedFileUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUpdateManyWithoutWorkspaceNestedInput
    timeline?: TimelineEventUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutArgumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseContext?: CaseContextUncheckedUpdateManyWithoutWorkspaceNestedInput
    sources?: SourceUncheckedUpdateManyWithoutWorkspaceNestedInput
    generatedFiles?: GeneratedFileUncheckedUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutWorkspaceNestedInput
    timeline?: TimelineEventUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkspaceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseContext?: CaseContextUpdateManyWithoutWorkspaceNestedInput
    sources?: SourceUpdateManyWithoutWorkspaceNestedInput
    generatedFiles?: GeneratedFileUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUpdateManyWithoutWorkspaceNestedInput
    timeline?: TimelineEventUpdateManyWithoutWorkspaceNestedInput
    arguments?: ArgumentUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseContext?: CaseContextUncheckedUpdateManyWithoutWorkspaceNestedInput
    sources?: SourceUncheckedUpdateManyWithoutWorkspaceNestedInput
    generatedFiles?: GeneratedFileUncheckedUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutWorkspaceNestedInput
    timeline?: TimelineEventUncheckedUpdateManyWithoutWorkspaceNestedInput
    arguments?: ArgumentUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseContextCreateManyWorkspaceInput = {
    id?: string
    clientName?: string | null
    clientAge?: number | null
    clientContact?: string | null
    clientEmail?: string | null
    clientOccupation?: string | null
    clientAddress?: string | null
    firText?: string | null
    caseType?: $Enums.CaseType | null
    description?: string | null
    incidentDate?: Date | string | null
    witnesses?: string | null
    location?: string | null
    policeStation?: string | null
    opposingParty?: string | null
    urgency?: $Enums.UrgencyLevel | null
    courtOrders?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceCreateManyWorkspaceInput = {
    id?: string
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GeneratedFileCreateManyWorkspaceInput = {
    id?: string
    title?: string | null
    content?: string | null
    type?: $Enums.FileType | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCreateManyWorkspaceInput = {
    id?: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimelineEventCreateManyWorkspaceInput = {
    id?: string
    date?: Date | string | null
    title?: string | null
    description?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArgumentCreateManyWorkspaceInput = {
    id?: string
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaseContextUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientAge?: NullableIntFieldUpdateOperationsInput | number | null
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    clientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    firText?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableEnumCaseTypeFieldUpdateOperationsInput | $Enums.CaseType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    incidentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    witnesses?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    policeStation?: NullableStringFieldUpdateOperationsInput | string | null
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableEnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel | null
    courtOrders?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseContextUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientAge?: NullableIntFieldUpdateOperationsInput | number | null
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    clientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    firText?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableEnumCaseTypeFieldUpdateOperationsInput | $Enums.CaseType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    incidentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    witnesses?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    policeStation?: NullableStringFieldUpdateOperationsInput | string | null
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableEnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel | null
    courtOrders?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseContextUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientAge?: NullableIntFieldUpdateOperationsInput | number | null
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    clientOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    clientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    firText?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableEnumCaseTypeFieldUpdateOperationsInput | $Enums.CaseType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    incidentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    witnesses?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    policeStation?: NullableStringFieldUpdateOperationsInput | string | null
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableEnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel | null
    courtOrders?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedFileUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedFileUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedFileUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineEventUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineEventUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineEventUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArgumentUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArgumentUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArgumentUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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