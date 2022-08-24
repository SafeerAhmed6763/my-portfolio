const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const addData = await prisma.project.create({
        data: {
            name: "Safeer Ahmed",
            description: "This is my portfolio Website",
            imageUrl: "imageURL",
            technologies: {
                create: [
                    {name: "React JS"},
                    {name: "Next JS"},
                    {name: "Prisma ORM"},
                    {name: "Typscript"},
                    {name: "Javascript"},
                    {name: "MySql"},
                ]
            }            
        }
    })
    console.log('Created New Project Data: ', addData);

    const allProjects = await prisma.project.findMany({
        include: { technologies: true}
    })
    console.log('All Projects: ')
    console.dir(allProjects, { depth: null })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })