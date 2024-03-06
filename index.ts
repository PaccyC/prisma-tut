import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

async function main() {
    /*
    Create User
    const user= await prisma.user.create({
        data:{
            name:"John Doe",
            email:"john.doe@gmail.com"
        }
    });
    */

/*
   // Getting all users
   */
   const users= await prisma.user.findMany({
    include:{
        articles:true
    }
   });
   
   /*
//    Create article and associate it with the user

const article = await prisma.article.create({
    data:{
        title:"John's article",
        body:"John's article",
        author:{
            connect:{
                id:1,
            },
        },
    }
})

*/

/*
// Getting all articles
*/
const articles= await prisma.article.findMany();

// Create user and article and associate them with each othr

// const user= await prisma.user.create({
//     data:{
//         name:"Sara Smith",
//         email: 'sara@gmail.com',
//         articles:{
//             create:{
//                 title:"Sara's first article",
//                 body:"This is Sara's first article"
//             }
//         }
//     }
// })

// Create another article;

// const article= await prisma.article.create({
//     data:{
//         title:"Simple article",
//         body:"This is Simple article",
//         author:{
//             connect:{
//                 id:2
//             }
//         }
//     }
// })

// Updating data

const user= await prisma.user.update({
    where:{
        id:1
    },
    data:{
        name:"John Doe Smith"
    }
})
    console.log(users);
}

main()
.then(async()=>{
await prisma.$disconnect();
})
.catch(async (e)=>{
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
    
})