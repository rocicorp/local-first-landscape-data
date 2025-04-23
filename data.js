// @ts-check
import { LandscapeSchema } from "@localfirstfm/landscape-schema";

export const data = LandscapeSchema.make({
  Version: 1,
  Id: "zero",
  Name: "Zero",
  Website: "https://zerosync.dev",
  GitHub: "https://github.com/rocicorp/mono",
  UniquenessNote:
    "Zero is built on Incremental View Maintenance and Server Reconciliation.",
  InitialReleaseDate: new Date("2024-12-18"),
  Deployment: ["Self-hosted"],
  // We call Zero "alpha", but it's not an option here.
  MaturityLevel: "Beta",
  AppTarget: {
    Platform: {
      // Why is there not React Native / Hybrid Mobile here?
      data: ["Browser", "Node"],
      comment: "Basically any JS environment.",
    },
    FrameworkIntegrations: {
      // How come SolidJS isn't present?
      data: ["React", "React Native", "Svelte", "Vue"],
    },
    ClientBundleSize: {
      data: "~40kb",
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
      comment: "Support for other backends is in progress.",
    },
    DataModelParadigm: {
      data: "Relational",
    },
    SchemaManagement: {
      data: ["Schema definition", "Schema migrations"],
      comment:
        "Zero has built-in support for migrating schemas seamlessly across client and server.",
    },
    ExistingDatabaseSupport: {
      data: "Yes",
      comment:
        "Zero is designed to work with existing databases with arbitrary schemas and non-Zero clients.",
    },
  },
  ClientSideData: {
    QueryAPI: {
      data: ["Reactive queries"],
    },
    LocalRefreshLatency: {
      data: "<1ms",
    },
    PersistenceMechanism: {
      data: ["IndexedDB"],
    },
    DataModel: {
      data: "Relational",
    },
    OfflineReads: {
      // What is the definition of "Query Cache"?
      // To me, it implies that only queries that have been made while online are
      // available offline. This is not what Zero offers. With Zero, developers choose
      // the queries to be cached, but all data those queries return is available offline
      // for novel queries. I think this is closer to "Full Support" but not sure.
      data: "Query Cache",
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
    },
    DataSize: {
      data: "25MB-100MB",
    },
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: {
      data: ["Partial Replication"],
      comment: "Use Zero queries to control which data is replicated.",
    },
    ConflictHandling: {
      data: "Server Reconciliation",
      comment: "See: TODO.",
    },
    WhereResolutionOccurs: {
      data: "Client and Server",
    },
    WhatGetsSynced: {
      data: {
        ClientToServer: "mutations",
        ServerToClient: "rows",
      },
    },
    Authority: {
      data: "Centralized",
    },
    Latency: {
      data: "Typically ~10ms over network time client<->server.",
    },
  },
});
