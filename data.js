// @ts-check
import { LandscapeSchema } from "@localfirstfm/landscape-schema";

export const data = LandscapeSchema.make({
  Version: 1,
  Id: "zero",
  Name: "Zero",
  Description: "General-Purpose Sync",
  License: "Apache-2.0",
  Logo: {
    Dark: "logo.dark.svg",
    Light: "logo.light.svg",
  },
  AuthIdentity: {
    AuthenticationMethod: {
      data: ["JWT Tokens"],
    },
    AuthorizationPermissions: {
      data: "Custom",
      comment:
        "Read permissions implemented using 'rules' based on ZQL queries, write permissions using fully custom code.",
    },
    Encryption: {
      data: "No",
      comment:
        "Data can be encrypted at rest, but e2e encryption doesn't make much sense for Zero.",
    },
  },

  Website: "https://zerosync.dev",
  GitHub: "https://github.com/rocicorp/mono",
  UniquenessNote:
    "Zero is built on Incremental View Maintenance and Server Reconciliation.",
  InitialReleaseDate: new Date("2024-12-18"),
  Deployment: ["Self-hosted"],
  MaturityLevel: "Alpha",
  AppTarget: {
    Platform: {
      data: ["Browser", "Node"],
      comment: "Any JS environment",
    },
    FrameworkIntegrations: {
      data: ["React", "React Native", "SolidJS", "Svelte", "Vue"],
    },
    ClientBundleSize: {
      data: "~40kb gzipped",
    },
    LanguageSDK: {
      data: ["JavaScript", "TypeScript"],
    },
  },
  Networking: {
    Protocol: {
      data: ["WebSockets", "HTTP"],
    },
    Topology: {
      data: "Client-Server",
    },
  },
  ServerSideData: {
    PersistenceMechanism: {
      data: ["Postgres"],
      comment: "Support for other backends in progress",
    },
    DataSize: {
      data: "100GB",
      comment:
        "Currently recommended for up to 100GB with plans to support larger datasets. As with any database actual performance depends on indexes, queries, and many other factors.",
    },
    DataModelParadigm: {
      data: "Relational",
    },
    SchemaManagement: {
      data: ["Schema migration", "Validate schemas on write"],
      comment:
        "Built-in support for migrating schemas seamlessly across client and server",
    },
    ExistingDatabaseSupport: {
      data: "Designed to work with existing databases and arbitrary schemas.",
      comment:
        "You can use Zero side-by-side with traditional APIs. Zero clients will see write from APIs reactively, API users will see writes from Zero on refresh.",
    },
  },
  ClientSideData: {
    QueryAPI: {
      data: ["Sync", "Reactive queries"],
    },
    LocalRefreshLatency: {
      data: "0ms",
      comment:
        "Zero uses Incremental View Maintenance to precisely update queries without re-running them from scratch. Most queries used by standard apps update in microseconds. To achieve this, Zero keeps only a relatively small (<100MB) local cache of most frequently used data on device, in memory, on the main thread. Other queries seamlessly fallback to the server.",
    },
    PersistenceMechanism: {
      data: ["IndexedDB", "SQLite", "Custom"],
      comment:
        "Client-side storage layer is pluggable. IndexedDB is used by default in browsers and SQLite on mobile. But you can use other storage mechanism.",
    },
    PersistenceFeatures: {
      data: "Transactions",
      comment:
        "Mutations are transactional and support arbitrary code on both client and server. Client-side indexes are built automatically as needed.",
    },
    DataModel: {
      data: "Relational",
    },
    SchemaManagement: {
      data: ["Schema migrations"],
      comment:
        "Use normal approaches to schema migration with your backend database – Zero automatically replicates those changes to clients",
    },
    OfflineReads: {
      data: "Full Support",
      comment:
        "Developers choose data to be cached via query. Data is available to be queried while offline (even with novel queries)",
    },
    // I think that we should use a different term than "Optimistic Updates". The
    // web community uses this term to mean something much weaker – where either the
    // framework or the data layer offers a way to simulate the result of a server
    // update locally at either the view or query-result layer.
    //
    // What sync engines and local-first mean by 'optimistic updates' is more that
    // you can update the primary data and all queries and views reactively update.
    //
    // I suggest "client-first writes".
    OptimisticUpdates: {
      data: "Yes",
    },
    OfflineWrites: {
      data: "No",
      comment:
        "Zero technically supports offline writes currently, but the plan is to disable them after five minutes offline. See https://bugs.rocicorp.dev/issue/3425 fo more information.",
    },
    DataSize: {
      data: "25MB-100MB",
      comment:
        'Zero uses "Query Driven Sync". You just make queries and Zero syncs the data backing those queries automatically. Zero maintains a local cache of needed data by itself, and falls back to server for additional data automatically.',
    },
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: {
      data: ["Partial Replication"],
      comment: "Use ZQL queries to control which data is replicated",
    },
    ConflictHandling: {
      data: "Automatic via Server Reconciliation",
      comment:
        "See https://rocicorp.dev/blog/ready-player-two for more information about server reconciliation",
    },
    WhereResolutionOccurs: {
      data: "Client and Server",
    },
    WhatGetsSynced: {
      data: {
        ClientToServer: "mutations",
        ServerToClient: "rows",
      },
      comment:
        '"Mutations" are application defined logical operations, like "addComment" or "likePost"',
    },
    Throughput: {
      data: "Hundreds of writes per second",
      comment:
        "Sharding work in progress to enable arbitrary aggregate throughput",
    },
    Concurrency: {
      data: "Effectively unlimited",
      comment: "The server is horizontally scalable and shared-nothing",
    },
    Authority: {
      data: "Centralized",
    },
    Latency: {
      data: "Typically ~10ms over network time",
    },
  },
  UIRelated: {
    RichTextEditing: {
      data: "Pairs well with Yjs and other CRDTs",
      comment:
        "First-class support not needed because Zero's custom mutators can run CRDT algorithms. In fact, you don't even need to run a special server for collab since you can just sync the CRDT over Zero itself.",
    },
    Components: {
      data: ["You write the components"],
      comment: "We sync the data",
    },
  },
  DevelopmentWorkflowsDX: {
    DebuggingTools: {
      data: ["Not much yet"],
      comment: "More tools coming in beta",
    },
    CLI: {
      data: "Local development server and schema management",
    },
    TypeSupport: {
      data: "People are saying we have the best types",
      comment:
        "Look, everybody's talking about it — Zero's query language types, absolutely incredible, truly the best. Nobody's ever seen types like these before, believe me. They're strong, they're beautiful, they're so well-typed, so accurate — it's like magic, but it's real, folks. And it's so easy to use, people are saying, 'Rocicorp, how did they do it?' Well, they did it. Just tremendous types.",
    },
  },
});
