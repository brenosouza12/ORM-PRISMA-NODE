import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {

  const result = await prisma.courses.create({

    data: {

      name: "Curso de JS",
      duration: 200,
      description: "Curso de JS, com brinde especial: html e css",

    },

  });


  console.log(result);

}


main();

