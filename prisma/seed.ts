import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
	const hashPassword = await hash("1234", 10);

	const admin = await prisma.user.create({
		data: {
			name: "Admin",
			email: "admin@email.com",
			password: hashPassword,
			image: "https://github.com/m4chado.png",
			isAdmin: true,
		},
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
