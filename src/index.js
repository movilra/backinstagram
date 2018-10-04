const { GraphQLServer } =  require('graphql-yoga')
 const typeDefs =  `
     type Query{
        description:String
    }
`;
 let pictures = [];
 let idCount = 0;
 const resolvers = {
     Query:{
        pictures:() => pictures
    },
     
    Mutation:{
        createPicture:(root,args) => {
            const picture = {
                id:`id_picture_${idCount++}`,
                title:args.title,
                content:args.content,
            }
            pictures.push(picture)
            return picture
        }
     }
 }
 const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers
})
module.exports = server