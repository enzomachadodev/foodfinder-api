import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

const categories = [
	"Restaurantes",
	"Cafeterias",
	"Lanchonetes",
	"Pizzarias",
	"Food Trucks",
	"Bares e Pubs",
	"Padarias",
	"Sorveterias",
	"Fast Food",
];

async function main() {
	const hashPassword = await hash("1234", 10);

	await prisma.user.create({
		data: {
			name: "Admin",
			email: "admin@email.com",
			password: hashPassword,
			image: "https://github.com/m4chado.png",
			isAdmin: true,
		},
	});

	categories.forEach(async (c) => {
		await prisma.category.create({
			data: {
				name: c,
			},
		});
	});
}

main()
	.catch((error) => {
		console.error(error);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
