<script lang="ts">
    import { onMount } from 'svelte';
    import Navbar from '$lib/navbar.svelte';

    // Dashboard statistics and chart data
    let stats = {
        users: 0,
        books: 0,
        borrowed: 0,
        overdue: 0,
    };

    interface ChartDataItem {
        category: string;
        percentage: number;
    }

    let chartData: ChartDataItem[] = [];
    const colors = [
        '#67e8f9', // Cyan
        '#8b5cf6', // Purple
        '#4b5563', // Gray
        '#10b981', // Green
        '#a3a3a3', // Light Gray
        '#f59e0b', // Amber
        '#3b82f6', // Blue
    ];

    // Fetch dashboard data from the API
    async function fetchDashboardData() {
        try {
            const response = await fetch('/api/dashboard');
            if (!response.ok) {
                throw new Error('Failed to fetch dashboard data');
            }
            const data = await response.json();
            stats = data.stats;
            chartData = data.chartData;
            drawChart();
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        }
    }

    // Draw the pie chart
    function drawChart(): void {
        const canvas = document.getElementById('pieChart') as HTMLCanvasElement;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY) * 0.8;
        const innerRadius = radius * 0.5; // For donut chart

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let startAngle = 0;

        // Draw the segments
        chartData.forEach((item, index) => {
            const sliceAngle = (item.percentage / 100) * 2 * Math.PI;
            const endAngle = startAngle + sliceAngle;

            // Draw the slice
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.closePath();

            ctx.fillStyle = colors[index % colors.length];
            ctx.fill();

            // Calculate position for the label
            const labelAngle = startAngle + sliceAngle / 2;
            const labelRadius = radius * 1.2;
            const labelX = centerX + Math.cos(labelAngle) * labelRadius;
            const labelY = centerY + Math.sin(labelAngle) * labelRadius;

            // Draw the label
            ctx.fillStyle = '#333';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${item.category}`, labelX, labelY);
            ctx.fillText(`${item.percentage.toFixed(1)}%`, labelX, labelY + 15);

            startAngle = endAngle;
        });

        // Draw inner circle for donut effect
        ctx.beginPath();
        ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
    }

    onMount(() => {
        fetchDashboardData();
    });
</script>

<svelte:head>
    <title>Dashboard - Data Analyst</title>
</svelte:head>

<div class="dashboard-container">
    <Navbar />

    <main class="main-content">
        <!-- Page Header -->
        <div class="page-header">
            <h2 class="page-title">Dashboard - Data Analytics</h2>
        </div>

        <!-- Statistics Section -->
        <div class="stats-container">
            <div class="stat-card users">
                <div class="stat-icon">👥</div>
                <div class="stat-label">Users</div>
                <div class="stat-value">{stats.users.toLocaleString()}</div>
            </div>
            <div class="stat-card books">
                <div class="stat-icon">📚</div>
                <div class="stat-label">Books</div>
                <div class="stat-value">{stats.books.toLocaleString()}</div>
            </div>
            <div class="stat-card borrowed">
                <div class="stat-icon">📖</div>
                <div class="stat-label">Borrowed</div>
                <div class="stat-value">{stats.borrowed}</div>
            </div>
            <div class="stat-card overdue">
                <div class="stat-icon">⏰</div>
                <div class="stat-label">Overdue</div>
                <div class="stat-value">{stats.overdue}</div>
            </div>
        </div>

        <!-- Analytics Section -->
        <div class="dashboard-grid">
            <div class="chart-section">
                <h3 class="section-title">Category Distribution</h3>
                <canvas id="pieChart" width="500" height="450"></canvas>
            </div>
        </div>
    </main>
</div>


<style>
    .dashboard-container {
        font-family: Arial, sans-serif;
        background-color: #f3f4f6;
        min-height: 100vh;
        padding: 20px;
    }

    .page-header {
        margin-bottom: 20px;
        text-align: center;
    }

    .page-title {
        font-size: 24px;
        font-weight: bold;
        color: #333;
    }

    .stats-container {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
    }

    .stat-card {
        flex: 1;
        background-color: #fff;
        border-radius: 15px; 
        padding: 35px; 
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        text-align: center;
        transform: scale(1); 
        transition: transform 0.2s ease-in-out; 
    }

    .stat-card:hover {
        transform: scale(1.05); 
    }

    .stat-icon {
        font-size: 48px; 
        margin-bottom: 15px;
    }

    .stat-label {
        font-size: 16px; 
        color: #666;
    }

    .stat-value {
        font-size: 32px; 
        font-weight: bold;
        color: #333;
    }

    .dashboard-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .chart-section {
        background-color: #fff;
        border-radius: 15px;
        padding: 35px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        text-align: center;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .section-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }
</style>