<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from '$lib/navbar.svelte';
  import { SearchOutline } from 'flowbite-svelte-icons';

  let books: { id: number; title: string; author: string; category: string; quantity: number }[] = [];
  let searchQuery = '';
  let showBorrowModal = false;
  let selectedBook: { id: number; title: string; author: string; category: string; quantity: number } | null = null;
  let borrowDetails = { userId: '', dueDate: '' };
  let showBorrowSuccessModal = false;

  // Fetch books from the backend
  async function fetchBooks() {
    try {
      const response = await fetch('/api/books'); // Fetch all books from the database
      if (response.ok) {
        books = await response.json();
        console.log('Books fetched:', books); // Debugging
      } else {
        console.error('Failed to fetch books:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  // Fetch books on page load
  onMount(() => {
    fetchBooks();
  });

  function openBorrowModal(book: { id: number; title: string; author: string; category: string; quantity: number }) {
    selectedBook = book;
    showBorrowModal = true;
  }

  function closeBorrowModal() {
    showBorrowModal = false;
    selectedBook = null;
    borrowDetails = { userId: '', dueDate: '' };
  }

  async function confirmBorrowBook() {
    try {
      const response = await fetch('/api/borrowed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookId: selectedBook?.id ?? 0,
          userId: borrowDetails.userId,
          dueDate: borrowDetails.dueDate,
        }),
      });

      if (response.ok) {
        // Refresh the books list
        await fetchBooks();
        closeBorrowModal();

        // Show success modal
        showBorrowSuccessModal = true;
        setTimeout(() => {
          showBorrowSuccessModal = false;
        }, 2000);
      } else {
        console.error('Failed to borrow book:', response.statusText);
      }
    } catch (error) {
      console.error('Error borrowing book:', error);
    }
  }

  // Filter books based on search query
  $: filteredBooks = searchQuery
    ? books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : books;
</script>

<div class="min-h-screen bg-gray-400">
  <Navbar />
  <div class="bg-gray-400 text-white p-4 flex justify-between items-center">
    <h1 class="text-xl font-bold flex items-center">
      <svg class="w-6 h-6 mr-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 14h-2.722L11 20.278a5.511 5.511 0 0 1-.9.722H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM9 3H4a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V4a1 1 0 0 0-1-1ZM6.5 18.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.132 7.9 15.6 4.368a1 1 0 0 0-1.414 0L12 6.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
      </svg>
      BORROW BOOKS
    </h1>
    <div class="relative w-64">
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="search book..."
        class="pl-4 pr-10 py-2 w-full rounded-full bg-white text-black placeholder-gray-800 focus:outline-none"
      />
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <SearchOutline class="w-4 h-4 text-gray-500" />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    {#if filteredBooks.length > 0}
      {#each filteredBooks as book}
        <div class="flex justify-between items-start p-4 bg-white rounded-lg shadow">
          <div>
            <h2 class="font-bold">{book.title}</h2>
            <p class="text-sm">AUTHOR: {book.author}</p>
            <p class="text-sm">CATEGORY: {book.category}</p>
            <p class="text-sm">QUANTITY: {book.quantity}</p>
          </div>
          <button on:click={() => openBorrowModal(book)} class="text-sm bg-cyan-800 text-white px-3 py-1 rounded hover:bg-cyan-700">Borrow</button>
        </div>
      {/each}
    {:else}
      <div class="col-span-2 text-center py-8 bg-white rounded-lg shadow">
        <p class="text-gray-500">No books available to borrow.</p>
      </div>
    {/if}
  </div>

  <!-- Borrow Book Modal -->
  {#if showBorrowModal}
    <div class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
      <div class="bg-white rounded-md p-8 w-full max-w-md mx-4 border-2 border-black">
        <h2 class="text-center text-2xl font-bold mb-6">Borrow Book</h2>
        <div class="space-y-4">
          <div class="flex flex-col">
            <label for="user-id" class="text-sm text-gray-600">User ID:</label>
            <input id="user-id" bind:value={borrowDetails.userId} class="border p-2 rounded" type="text" />
          </div>
          <div class="flex flex-col">
            <label for="due-date" class="text-sm text-gray-600">Due Date:</label>
            <input id="due-date" bind:value={borrowDetails.dueDate} class="border p-2 rounded" type="date" />
          </div>
        </div>
        <div class="mt-6 flex justify-end gap-2">
          <button on:click={confirmBorrowBook} class="bg-purple-500 hover:bg-purple-700 text-white px-6 py-2 rounded">Borrow</button>
          <button on:click={closeBorrowModal} class="bg-gray-500 hover:bg-gray-700 text-white px-6 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  {/if}

  <!-- Borrow Success Modal -->
  {#if showBorrowSuccessModal}
    <div class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
      <div class="bg-white rounded-md p-8 w-full max-w-md mx-4 border-2 border-green-500 relative">
        <div class="flex flex-col items-center justify-center">
          <div class="text-green-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="green" stroke-width="2" fill="white" />
              <path d="M8 12l3 3 5-5" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <h2 class="text-center text-2xl font-bold">Book successfully borrowed!</h2>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .min-h-screen {
    background-color: #9ca3af;
  }
</style>