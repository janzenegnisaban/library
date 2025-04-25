import { PrismaClient } from '@prisma/client';
import { json } from '@sveltejs/kit';

const prisma = new PrismaClient();

export const GET = async () => {
    try {
        // Fetch statistics from the database
        const usersCount = await prisma.user.count();
        const booksCount = await prisma.book.count();
        const borrowedCount = await prisma.borrowedBook.count();
        const overdueCount = await prisma.overdueBook.count();

        // Fetch category distribution
        const categoryDistribution = await prisma.book.groupBy({
            by: ['category'],
            _count: {
                category: true,
            },
        });

        const chartData = categoryDistribution.map((item) => ({
            category: item.category,
            percentage: (item._count.category / booksCount) * 100,
        }));

        return json({
            stats: {
                users: usersCount,
                books: booksCount,
                borrowed: borrowedCount,
                overdue: overdueCount,
            },
            chartData,
        });
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        return json({ error: 'Failed to fetch dashboard data' }, { status: 500 });
    }
};