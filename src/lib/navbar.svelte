<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let dropdownOpen = false;

    function toggleDropdown() {
        dropdownOpen = !dropdownOpen;
    }

    // Close dropdown when clicking outside
    onMount(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.library-dropdown')) {
                dropdownOpen = false;
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

    // Logout function
    function handleLogout() {
        // Clear user session (e.g., remove token from localStorage or cookies)
        localStorage.removeItem('authToken'); 

        // Redirect to login page
        window.location.href = '/signin';
    }
</script>

<nav class="bg-[#F5ECE0] shadow-md py-4 px-2 border-b border-gray-200">
    <div class="container mx-auto flex justify-between items-center">
        <!-- Logo and Title -->
        <div class="flex items-center gap-1">
            <img src="/Library-logo.png" alt="SMART Library Logo" class="h-20 w-20">
            <span class="font-bold text-xl">SMART Library</span>
        </div>

        <!-- Navigation Links -->
        <div class="flex items-center space-x-6">
            <a 
                href="/dashboard" 
                class={`font-medium px-3 py-2 rounded-md transition-colors duration-200 hover:bg-[#5F99AE] ${$page.url.pathname === '/dashboard' ? 'text-white bg-[#adb5bd]' : 'text-gray-800'}`}
            >
                DASHBOARD
            </a>
            <a 
                href="/ai-assistant" 
                class={`font-medium px-3 py-2 rounded-md transition-colors duration-200 hover:bg-[#5F99AE] ${$page.url.pathname === '/ai-assistant' ? 'text-white bg-[#adb5bd]' : 'text-gray-800'}`}
            >
                AI ASSISTANT
            </a>

            <!-- MY LIBRARY Dropdown -->
            <div class="relative library-dropdown">
                <button 
                    on:click|stopPropagation={toggleDropdown}
                    class={`flex items-center font-medium px-3 py-2 rounded-md transition-colors duration-200 hover:bg-[#5F99AE] ${$page.url.pathname.startsWith('/my-library') ? 'text-white bg-[#adb5bd]' : 'text-gray-800'}`}
                >
                    MY LIBRARY
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {#if dropdownOpen}
                    <div class="absolute z-10 mt-1 w-40 bg-white rounded-md shadow-lg py-1">
                        <a 
                            href="/my-library/books" 
                            class={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${$page.url.pathname === '/my-library/books' ? 'bg-gray-100' : ''}`}
                        >
                            Books
                        </a>
                        <a 
                            href="/my-library/borrowed" 
                            class={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${$page.url.pathname === '/my-library/borrowed' ? 'bg-gray-100' : ''}`}
                        >
                            Borrowed
                        </a>
                    </div>
                {/if}
            </div>
        </div>

        <!-- Logout -->
        <div class="flex items-center gap-4">
            <button on:click={handleLogout} class="flex items-center gap-2 text-gray-800 px-3 py-2 rounded-md transition-colors duration-200 hover:bg-[#693382] hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-6 fill-current">
                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/>
                </svg>
                <span>Logout</span>
            </button>
        </div>
    </div>
</nav>