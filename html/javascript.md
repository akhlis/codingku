# Taxonomy pages

Fields in the GraphQL schema can have references to other nodes. That's a great way to organize pages and have links between them. Every node has a `belongsTo` field which is able to list all other nodes referencing it. The `belongsTo` field works like the [content type collections](/docs/querying-data#content-type-collections) with `totalCount`, `pageInfo` and `edges`, but the `edges` field is always a [union field](https://graphql.org/learn/schema/#union-types) which can be any node type.
