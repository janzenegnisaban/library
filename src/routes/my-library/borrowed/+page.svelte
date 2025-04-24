<script>
  import Navbar from '$lib/navbar.svelte';
  import { SearchOutline } from 'flowbite-svelte-icons';
  
  /**
   * @typedef {Object} BorrowedBook
   * @property {number} id
   * @property {string} borrower
   * @property {string} bookTitle
   * @property {string} bookISBN
   * @property {string} borrowedDate
   * @property {string} [dueDate]
   * @property {string} [studentId]
   * @property {string} [department]
   * @property {string} [author]
   * @property {string} [category]
   */
  
  // Sample data for borrowed books (this would come from your API or store in a real app)
  let borrowedBooks = [
    {
      id: 1,
      borrower: "Jane Doe",
      bookTitle: "Hitchhiker's Guide to Galaxy",
      bookISBN: "9781529046137",
      borrowedDate: "Jan 24, 2025",
      dueDate: "Feb 24, 2025",
      studentId: "202211777",
      department: "Computer Science",
      author: "Douglas Adams",
      category: "Sci-Fi"
    },
    {
      id: 2,
      borrower: "Jane Doe",
      bookTitle: "Hitchhiker's Guide to Galaxy",
      bookISBN: "9781529046137",
      borrowedDate: "Jan 24, 2025"
    },
    {
      id: 3,
      borrower: "Jane Doe",
      bookTitle: "Hitchhiker's Guide to Galaxy",
      bookISBN: "9781529046137",
      borrowedDate: "Jan 24, 2025"
    },
    {
      id: 4,
      borrower: "Jane Doe",
      bookTitle: "Hitchhiker's Guide to Galaxy",
      bookISBN: "9781529046137",
      borrowedDate: "Jan 24, 2025"
    },
    {
      id: 5,
      borrower: "Jane Doe",
      bookTitle: "Hitchhiker's Guide to Galaxy",
      bookISBN: "9781529046137",
      borrowedDate: "Jan 24, 2025"
    },
    {
      id: 6,
      borrower: "Jane Doe",
      bookTitle: "Hitchhiker's Guide to Galaxy",
      bookISBN: "9781529046137",
      borrowedDate: "Jan 24, 2025"
    },
    {
      id: 7,
      borrower: "Jane Doe",
      bookTitle: "Hitchhiker's Guide to Galaxy",
      bookISBN: "9781529046137",
      borrowedDate: "Jan 24, 2025"
    },
    {
      id: 8,
      borrower: "Jane Doe",
      bookTitle: "Hitchhiker's Guide to Galaxy",
      bookISBN: "9781529046137",
      borrowedDate: "Jan 24, 2025"
    }
  ];
  
  /**
   * @typedef {Object} ReturnHistory
   * @property {number} id
   * @property {string} borrower
   * @property {string} bookTitle
   * @property {string} bookISBN
   * @property {string} returnDate
   */
  
  // Sample data for return history
  let returnHistory = [
    {
      id: 1,
      borrower: "John Smith",
      bookTitle: "The Great Gatsby",
      bookISBN: "9780743273565",
      returnDate: "Feb 15, 2025"
    },
    {
      id: 2,
      borrower: "Emily Johnson",
      bookTitle: "To Kill a Mockingbird",
      bookISBN: "9780060935467",
      returnDate: "Feb 10, 2025"
    },
    {
      id: 3,
      borrower: "Michael Brown",
      bookTitle: "1984",
      bookISBN: "9780451524935",
      returnDate: "Feb 5, 2025"
    }
  ];
  
  let searchQuery = '';
  let showModal = false;
  let showHistoryModal = false;
  /** @type {BorrowedBook|null} */
  let selectedBook = null;
  
  /**
   * @param {BorrowedBook} book
   */
  function openModal(book) {
    selectedBook = book;
    showModal = true;
  }
  
  function closeModal() {
    showModal = false;
  }
  
  function toggleHistoryModal() {
    showHistoryModal = !showHistoryModal;
  }
  
  function markAsReturned() {
    // Handle the return logic here
    if (selectedBook) {
      alert(`Book ${selectedBook.bookTitle} marked as returned`);
    }
    closeModal();
  }
  
  function refreshData() {
    // Implement refresh logic here
    alert('Refreshing data...');
  }
  
  // Filter borrowed books based on search query and sort by due date
  $: filteredBooks = searchQuery 
    ? borrowedBooks.filter(book => 
        book.borrower.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.bookTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.bookISBN.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : borrowedBooks;
  
  // Sort by due date (books with due dates first, sorted from closest to furthest)
  $: sortedBooks = [...filteredBooks].sort((a, b) => {
    // If both have due dates, compare them
    if (a.dueDate && b.dueDate) {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }
    // If only a has a due date, it should come first
    if (a.dueDate) return -1;
    // If only b has a due date, it should come first
    if (b.dueDate) return 1;
    // If neither has a due date, maintain original order
    return 0;
  });
</script>

<div class="min-h-screen bg-gray-400">
  <Navbar />
  
  <div class="bg-gray-400 text-white p-4 flex justify-between items-center">
    <h1 class="text-xl font-bold flex items-center">
      <svg class="w-6 h-6 mr-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z" clip-rule="evenodd"/>
      </svg>
      BORROWED BOOKS
    </h1>
    <div class="relative w-64">
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="search borrower..."
        class="pl-4 pr-10 py-2 w-full rounded-full bg-white text-black placeholder-gray-800 focus:outline-none"
      />
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <SearchOutline class="w-4 h-4 text-gray-500" />
      </div>
    </div>
  </div>

  <div class="p-4 flex gap-2">
    <button on:click={toggleHistoryModal} class="bg-purple-800 hover:bg-purple-700 text-white px-4 py-2 rounded">Return History
    </button>
    <button on:click={refreshData} class="bg-cyan-800 hover:bg-cyan-700 text-white px-4 py-2 rounded">Refresh
    </button>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    {#if sortedBooks.length > 0}
      {#each sortedBooks as book}
        <div class="flex justify-between items-center p-4 bg-white rounded-lg shadow">
          <div class="flex gap-4">
            <div class="w-20 h-20 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
              <svg class="w-12 h-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="7" r="5" />
                <path d="M12 13C7.03 13 3 17.03 3 22h18c0-4.97-4.03-9-9-9z" />
              </svg>
            </div>
            <div>
              <p class="text-sm"><span class="font-semibold">Borrower:</span> {book.borrower}</p>
              <p class="text-sm"><span class="font-semibold">Book Title:</span> {book.bookTitle}</p>
              <p class="text-sm"><span class="font-semibold">Book ISBN:</span> {book.bookISBN}</p>
              <p class="text-sm"><span class="font-semibold">Borrowed Date:</span> {book.borrowedDate}</p>
              <p class="text-sm"><span class="font-semibold">Due Date:</span> {book.dueDate || 'Not set'}</p>
            </div>
          </div>
          <button 
            on:click={() => openModal(book)} 
            class="text-sm bg-[#693382] text-white px-3 py-1 rounded hover:bg-[#5F99AE] self-center ml-auto">
            View
          </button>
        </div>
      {/each}
    {:else}
      <div class="col-span-2 text-center py-8 bg-white rounded-lg shadow">
        <p class="text-gray-500">No borrowed books available.</p>
      </div>
    {/if}
  </div>
  
  {#if showModal && selectedBook}
    <!-- Modal backdrop -->
    <button type="button" class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50" on:click={closeModal} aria-label="Close modal">
      <!-- Modal content -->
      <div class="bg-white rounded-lg shadow-lg w-full max-w-md mx-4" on:click|stopPropagation role="dialog" aria-labelledby="modal-title">
        <!-- Modal header with user info and close button -->
        <div class="flex justify-between items-center p-4 bg-gray-200 rounded-t-lg relative">
          <div class="flex items-center w-full">
            <div class="w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
              <svg class="w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="7" r="5" />
                <path d="M12 13C7.03 13 3 17.03 3 22h18c0-4.97-4.03-9-9-9z" />
              </svg>
            </div>
            <div class="ml-3">
              <div>Name: {selectedBook.borrower}</div>
              <div>Student ID: {selectedBook.studentId || 'N/A'}</div>
              <div>Department: {selectedBook.department || 'N/A'}</div>
            </div>
          </div>
          <button on:click={closeModal} class="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
            <svg class="w-12 h-12 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
            </svg>
          </button>
        </div>
        
        <!-- Modal body with form-like layout -->
        <div class="p-6 space-y-4">
          <div class="space-y-4">
            <div class="flex flex-col">
              <label for="book-title" class="text-sm text-gray-600">Book Title:</label>
              <input id="book-title" type="text" value={selectedBook.bookTitle} readonly class="border p-2 rounded bg-gray-50" />
            </div>
            
            <div class="flex flex-col">
              <label for="author" class="text-sm text-gray-600">Author:</label>
              <input id="author" type="text" value={selectedBook.author || 'N/A'} readonly class="border p-2 rounded bg-gray-50" />
            </div>
            
            <div class="flex flex-col">
              <label for="book-isbn" class="text-sm text-gray-600">Book ISBN:</label>
              <input id="book-isbn" type="text" value={selectedBook.bookISBN} readonly class="border p-2 rounded bg-gray-50" />
            </div>
            
            <div class="flex flex-col">
              <label for="category" class="text-sm text-gray-600">Category:</label>
              <input id="category" type="text" value={selectedBook.category || 'N/A'} readonly class="border p-2 rounded bg-gray-50" />
            </div>
            
            <div class="flex flex-col">
              <label for="borrowed-date" class="text-sm text-gray-600">Borrowed Date:</label>
              <input id="borrowed-date" type="text" value={selectedBook.borrowedDate} readonly class="border p-2 rounded bg-gray-50" />
            </div>
            
            <div class="flex flex-col">
              <label for="due-date" class="text-sm text-gray-600">Due Date:</label>
              <input id="due-date" type="text" value={selectedBook.dueDate || 'N/A'} readonly class="border p-2 rounded bg-gray-50" />
            </div>
          </div>
          
          <!-- Mark as returned button -->
          <div class="flex justify-end mt-6">
            <button 
              on:click={markAsReturned}
              class="bg-[#693382] text-white px-4 py-2 rounded hover:bg-[#5F99AE]">
              Mark as returned
            </button>
          </div>
        </div>
    </div>
  {/if}
  
  {#if showHistoryModal}
    <!-- Return History Modal backdrop -->
    <button type="button" class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50" on:click={toggleHistoryModal} aria-label="Close history modal">
      <!-- Modal content -->
      <div class="bg-white rounded-lg shadow-lg w-full max-w-3xl mx-4" on:click|stopPropagation role="dialog" aria-labelledby="history-modal-title">
        <!-- Modal header -->
        <div class="flex justify-between items-center p-4 bg-gray-200 rounded-t-lg">
          <h2 class="text-xl font-bold">Return History</h2>
          <button on:click={toggleHistoryModal} class="text-gray-600 hover:text-gray-800">
            <svg class="w-8 h-8 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
            </svg>
          </button>
        </div>
        
        <!-- Modal body with return history table -->
        <div class="p-6">
          <table class="min-w-full bg-white">
            <thead>
              <tr>
                <th class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Borrower</th>
                <th class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Book Title</th>
                <th class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">ISBN</th>
                <th class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Return Date</th>
              </tr>
            </thead>
            <tbody>
              {#if returnHistory.length > 0}
                {#each returnHistory as history}
                  <tr class="hover:bg-gray-50">
                    <td class="py-2 px-4 border-b border-gray-200 text-sm">{history.borrower}</td>
                    <td class="py-2 px-4 border-b border-gray-200 text-sm">{history.bookTitle}</td>
                    <td class="py-2 px-4 border-b border-gray-200 text-sm">{history.bookISBN}</td>
                    <td class="py-2 px-4 border-b border-gray-200 text-sm">{history.returnDate}</td>
                  </tr>
                {/each}
              {:else}
                <tr>
                  <td colspan="4" class="py-4 text-center text-gray-500">No return history available.</td>
                </tr>
              {/if}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  {/if}
</div>
