const { ApolloServer, gql } = require('apollo-server');


const typeDefs= gql`

type Country {
  Name: String
  Year: String
  AreaSquareKilometres: Int
  TotalPopulation: Int
}

type Query {
    countries: [Country]!
}`;


const countries = [
        {
            Name: "Albania",
            Year: "2000",
            AreaSquareKilometres: 28748,
            TotalPopulation: 3401198
        },
        {
            Name: "Albania",
            Year: "2001",
            AreaSquareKilometres: 28748,
            TotalPopulation: 3073734
        },
        {
            Name: "Albania",
            Year: "2002",
            AreaSquareKilometres: 28748,
            TotalPopulation: 3093465
        },
        {
            Name: "Albania",
            Year: "2003",
            AreaSquareKilometres : 28748,
            TotalPopulation: 3111162
        }
    ];

const resolvers = {
    Query: {
        countries: () => countries,
    },
};


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Test server ready at ${url}`);
});