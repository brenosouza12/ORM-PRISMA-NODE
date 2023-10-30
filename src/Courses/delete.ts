import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {

  const result = await prisma.courses.delete({

    where: {

      id: "95804a7e-3b35-4ae0-8f65-7bad2b7db5e1",

    },
    
  });


  console.log(result);
}


main();
