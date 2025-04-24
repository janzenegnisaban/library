<script lang="ts">
    import { onMount } from 'svelte';
    import Navbar from '$lib/navbar.svelte';

    // Dashboard statistics
    const stats = {
        users: 1692,
        books: 35572,
        borrowed: 57,
        overdue: 12
    };

    // Calendar data
    let currentMonth = new Date();
    let selectedDate: number | null = null;
    let todayDate: number;

    // Get Philippine timezone date
    function getPhilippineDate(): Date {
        const options = { timeZone: 'Asia/Manila' };
        return new Date(new Date().toLocaleString('en-US', options));
    }

    // Initialize calendar
    function initializeCalendar(): void {
        const philippineDate = getPhilippineDate();
        currentMonth = new Date(philippineDate.getFullYear(), philippineDate.getMonth(), 1);
        todayDate = philippineDate.getDate();
        selectedDate = todayDate;
        updateCalendarDays();
    }

    // Generate days for the current month
    function getDaysInMonth(year: number, month: number): number {
        return new Date(year, month + 1, 0).getDate();
    }

    function getFirstDayOfMonth(year: number, month: number): number {
        return new Date(year, month, 1).getDay();
    }

    let daysInMonth: number;
    let firstDay: number;
    let days: number[];

    function updateCalendarDays(): void {
        daysInMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
        firstDay = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());
        days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    }

    function formatMonthYear(date: Date): string {
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'Asia/Manila' });
    }

    function goToPreviousMonth(): void {
        currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
        updateCalendarDays();
    }

    function goToNextMonth(): void {
        currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
        updateCalendarDays();
    }

    function selectDate(day: number): void {
        selectedDate = day;
    }

    function isToday(day: number): boolean {
        const today = getPhilippineDate();
        return day === today.getDate() &&
            currentMonth.getMonth() === today.getMonth() &&
            currentMonth.getFullYear() === today.getFullYear();
    }

    // Chart data
    let chartData = [
        { category: 'General', percentage: 37 },
        { category: 'Fiction', percentage: 28.9 },
        { category: 'Archives', percentage: 14.9 },
        { category: 'Reference', percentage: 8.2 },
        { category: 'Periodicals', percentage: 7.4 },
        { category: 'Filipiniana', percentage: 3.3 },
        { category: 'Thesis', percentage: 3.7 }
    ];

    // Colors for the chart
    const colors = [
        '#67e8f9', // Cyan
        '#8b5cf6', // Purple
        '#4b5563', // Gray
        '#10b981', // Green
        '#a3a3a3', // Light Gray
        '#f59e0b', // Amber
        '#3b82f6'  // Blue
    ];

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
            ctx.fillText(`${item.percentage}%`, labelX, labelY + 15);

            startAngle = endAngle;
        });

        // Draw inner circle for donut effect
        ctx.beginPath();
        ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
    }

    onMount(() => {
        initializeCalendar();
        drawChart();

        // Update the calendar every minute to ensure date is current
        const timer = setInterval(() => {
            const philippineDate = getPhilippineDate();
            if (philippineDate.getDate() !== todayDate) {
                initializeCalendar();
            }
        }, 60000);

        return () => {
            clearInterval(timer);
        };
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
            <div class="calendar-section">
                <h3 class="section-title">Calendar</h3>
                <div class="calendar">
                    <div class="calendar-header">
                        <button class="calendar-nav" on:click={goToPreviousMonth}>←</button>
                        <div class="current-month">{formatMonthYear(currentMonth)}</div>
                        <button class="calendar-nav" on:click={goToNextMonth}>→</button>
                    </div>
                    <div class="weekdays">
                        <div class="weekday sun">SUN</div>
                        <div class="weekday">MON</div>
                        <div class="weekday">TUE</div>
                        <div class="weekday">WED</div>
                        <div class="weekday">THU</div>
                        <div class="weekday">FRI</div>
                        <div class="weekday sat">SAT</div>
                    </div>
                    <div class="days">
                        {#each Array(firstDay) as _, i}
                            <div class="day empty"></div>
                        {/each}
                        {#each days as day}
                            <button
                                type="button"
                                class="day {selectedDate === day ? 'selected' : ''} {isToday(day) ? 'today' : ''}"
                                on:click={() => selectDate(day)}
                                aria-pressed={selectedDate === day}
                            >
                                {day}
                            </button>
                        {/each}
                    </div>
                </div>
            </div>

            <div class="chart-section">
                <h3 class="section-title">Category Distribution</h3>
                <canvas id="pieChart" width="400" height="400"></canvas>
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
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    .stat-icon {
        font-size: 32px;
        margin-bottom: 10px;
    }

    .stat-label {
        font-size: 14px;
        color: #666;
    }

    .stat-value {
        font-size: 24px;
        font-weight: bold;
        color: #333;
    }

    .dashboard-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .calendar-section,
    .chart-section {
        background-color: #fff;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .section-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .calendar {
        text-align: center;
    }

    .calendar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .calendar-nav {
        background: none;
        border: none;
        font-size: 16px;
        cursor: pointer;
    }

    .current-month {
        font-weight: bold;
    }

    .weekdays {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 5px;
    }

    .day {
        padding: 10px;
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
    }

    .day.selected {
        background-color: #3b82f6;
        color: #fff;
    }

    .day.today {
        font-weight: bold;
        color: #3b82f6;
    }
</style>