import { PrismaClient } from '@prisma/client';
import { json } from '@sveltejs/kit';

const prisma = new PrismaClient();

export const GET = async () => {
    try {
        // Fetch statistics from the database
        const usersCount = await prisma.user.count();

        // Calculate the total quantity of books
        const booksCount = await prisma.book.aggregate({
            _sum: {
                quantity: true,
            },
        });

        const borrowedCount = await prisma.borrowedBook.count();

        // Count overdue books where isOverdue is true
        const overdueCount = await prisma.borrowedBook.count({
            where: {
                isOverdue: true,
            },
        });

        // Fetch category distribution
        const categoryDistribution = await prisma.book.groupBy({
            by: ['category'],
            _sum: {
                quantity: true,
            },
        });

        const chartData = categoryDistribution.map((item) => ({
            category: item.category,
            percentage: ((item._sum.quantity ?? 0) / (booksCount._sum.quantity ?? 1)) * 100,
        }));

        return json({
            stats: {
                users: usersCount,
                books: booksCount._sum.quantity || 0, // Handle null case
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