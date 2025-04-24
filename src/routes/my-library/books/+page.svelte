<script lang="ts">
    import { onMount } from 'svelte';
    import Navbar from '$lib/navbar.svelte';
    import { SearchOutline } from 'flowbite-svelte-icons';
    let showAddBookModal = false;
    let showEditBookModal = false;
    let showCategoryModal = false;
    let showDeleteCategoryModal = false;
    let showAddCategoryConfirmModal = false;
    let showCategorySuccessModal = false;
    let showCategoryDeletedModal = false;
    let showAddBookConfirmModal = false;
    let showEditBookConfirmModal = false;
    let showBookAddedSuccessModal = false;
    let showBookEditedSuccessModal = false;
    let categoryToDelete: number | null = null;
    let selectedFile: File | null = null;
    let imagePreview: string | null = null;
    let searchQuery = '';
    let categories = [
        { id: 1, name: 'History' },
        { id: 2, name: 'Reference' },
        { id: 3, name: 'Filipiniana' },
        { id: 4, name: 'Periodicals' },
        { id: 5, name: 'Thesis' },
        { id: 6, name: 'Archives' },
        { id: 7, name: 'Fiction' }
    ];
    
    // Books array to store book data
    interface Book {
        id: number;
        title: string;
        author: string;
        isbn: string;
        description: string;
        category: string;
        coverImage: string | null;
        quantity: number;
    }
    
    let books: Book[] = [];
    let bookToEdit: Book | null = null;
    
    let newCategoryName = '';
    let newBook = {
        title: '',
        author: '',
        isbn: '',
        description: '',
        category: '',
        coverImage: null,
        quantity: 1
    };
    
    // Form validation errors
    let errors = {
        title: '',
        author: '',
        isbn: '',
        description: '',
        category: '',
        quantity: ''
    };
    
    function toggleAddBookModal() {
        showAddBookModal = !showAddBookModal;
        if (showAddBookModal) {
            // Reset form and errors when opening modal
            newBook = {
                title: '',
                author: '',
                isbn: '',
                description: '',
                category: '',
                coverImage: null,
                quantity: 1
            };
            resetErrors();
            imagePreview = null;
            selectedFile = null;
        }
    }

    function toggleEditBookModal(book?: Book) {
        if (book) {
            bookToEdit = { ...book };
            newBook = {
                title: book.title,
                author: book.author,
                isbn: book.isbn,
                description: book.description,
                category: book.category,
                coverImage: null,
                quantity: book.quantity || 1
            };
            imagePreview = book.coverImage;
        } else {
            bookToEdit = null;
        }
        
        showEditBookModal = !showEditBookModal;
        if (!showEditBookModal) {
            resetErrors();
        }
    }

    function toggleCategoryModal() {
        showCategoryModal = !showCategoryModal;
    }
    
    function validateForm() {
        let isValid = true;
        resetErrors();
        
        if (!newBook.title.trim()) {
            errors.title = 'Title is required';
            isValid = false;
        }
        
        if (!newBook.author.trim()) {
            errors.author = 'Author is required';
            isValid = false;
        }
        
        if (!newBook.isbn.trim()) {
            errors.isbn = 'ISBN is required';
            isValid = false;
        }
        
        if (!newBook.description.trim()) {
            errors.description = 'Description is required';
            isValid = false;
        }
        
        if (!newBook.category) {
            errors.category = 'Category is required';
            isValid = false;
        }
        
        if (newBook.quantity < 1) {
            errors.quantity = 'Quantity must be at least 1';
            isValid = false;
        }
        
        return isValid;
    }
    
    function resetErrors() {
        errors = {
            title: '',
            author: '',
            isbn: '',
            description: '',
            category: '',
            quantity: ''
        };
    }
    
    function handleSave() {
        if (validateForm()) {
            showAddBookConfirmModal = true;
        }
    }

    function handleEditSave() {
        if (validateForm()) {
            showEditBookConfirmModal = true;
        }
    }

    function confirmAddBook() {
        // Save the book data to the books array
        const newBookEntry = {
            id: books.length + 1,
            title: newBook.title,
            author: newBook.author,
            isbn: newBook.isbn,
            description: newBook.description,
            category: newBook.category,
            coverImage: imagePreview,
            quantity: newBook.quantity
        };
        
        books = [...books, newBookEntry];
        console.log('Book added:', newBookEntry);
        
        showAddBookConfirmModal = false;
        toggleAddBookModal();
        
        // Show success modal
        showBookAddedSuccessModal = true;
        setTimeout(() => {
            showBookAddedSuccessModal = false;
        }, 2000);
    }

    function confirmEditBook() {
        if (bookToEdit) {
            const updatedBook = {
                ...bookToEdit,
                title: newBook.title,
                author: newBook.author,
                isbn: newBook.isbn,
                description: newBook.description,
                category: newBook.category,
                coverImage: imagePreview,
                quantity: newBook.quantity
            };
            
            books = books.map(book => (bookToEdit && book.id === bookToEdit.id) ? updatedBook : book);
            console.log('Book updated:', updatedBook);
            
            showEditBookConfirmModal = false;
            toggleEditBookModal();
            
            // Show success modal
            showBookEditedSuccessModal = true;
            setTimeout(() => {
                showBookEditedSuccessModal = false;
            }, 2000);
        }
    }

    function cancelAddBook() {
        showAddBookConfirmModal = false;
    }

    function cancelEditBook() {
        showEditBookConfirmModal = false;
    }

    // Filter books based on search query
    $: filteredBooks = searchQuery 
        ? books.filter(book => 
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.category.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : books;
        
    // Sort books alphabetically by title
    $: sortedBooks = [...filteredBooks].sort((a, b) => 
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    );

    function showAddCategoryConfirm() {
        if (newCategoryName.trim()) {
            showAddCategoryConfirmModal = true;
        }
    }

    function addCategory() {
        if (newCategoryName.trim()) {
            const maxId = categories.length > 0 ? Math.max(...categories.map(c => c.id)) : 0;
            categories = [...categories, { id: maxId + 1, name: newCategoryName.trim() }];
            newCategoryName = '';
            showAddCategoryConfirmModal = false;
            showCategorySuccessModal = true;
            
            // Auto-close success modal after 2 seconds
            setTimeout(() => {
                showCategorySuccessModal = false;
            }, 2000);
        }
    }

    function cancelAddCategory() {
        showAddCategoryConfirmModal = false;
    }

    function confirmDeleteCategory(id: number) {
        categoryToDelete = id;
        showDeleteCategoryModal = true;
    }

    function deleteCategory(id: number) {
        categories = categories.filter(c => c.id !== id);
        showDeleteCategoryModal = false;
        showCategoryDeletedModal = true;
        
        // Auto-close success modal after 2 seconds
        setTimeout(() => {
            showCategoryDeletedModal = false;
        }, 2000);
    }

    function cancelDeleteCategory() {
        showDeleteCategoryModal = false;
        categoryToDelete = null;
    }

    function handleFileSelect(event: Event) {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
            selectedFile = file;
            const reader = new FileReader();
            reader.onload = e => {
                if (e.target) {
                    imagePreview = e.target.result as string;
                }
            };
            reader.readAsDataURL(file);
        }
    }
</script>
  
<div class="min-h-screen bg-gray-400">
  <Navbar />
  <div class="bg-gray-400 text-white p-4 flex justify-between items-center">
    <h1 class="text-xl font-bold flex items-center">
      <svg class="w-6 h-6 mr-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 14h-2.722L11 20.278a5.511 5.511 0 0 1-.9.722H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM9 3H4a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V4a1 1 0 0 0-1-1ZM6.5 18.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.132 7.9 15.6 4.368a1 1 0 0 0-1.414 0L12 6.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
      </svg>
      BOOKS
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

  <div class="p-4 flex gap-2">
    <button on:click={toggleCategoryModal} class="bg-purple-800 hover:bg-purple-700 text-white px-4 py-2 rounded">+ CATEGORY</button>
    <button on:click={toggleAddBookModal} class="bg-cyan-800 hover:bg-cyan-700 text-white px-4 py-2 rounded">+ ADD BOOK</button>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    {#if sortedBooks.length > 0}
      {#each sortedBooks as book}
        <div class="flex justify-between items-start p-4 bg-white rounded-lg shadow">
          <div class="flex gap-4">
            <div class="w-20 h-24 bg-gray-300 rounded overflow-hidden">
              {#if book.coverImage}
                <img src={book.coverImage} alt="{book.title} cover" class="w-full h-full object-cover" />
              {/if}
            </div>
            <div>
              <h2 class="font-bold">{book.title}</h2>
              <p class="text-sm">AUTHOR: {book.author}</p>
              <p class="text-sm">DESCRIPTION: {book.description.length > 50 ? book.description.substring(0, 50) + '...' : book.description}</p>
              <p class="text-sm">CATEGORY: {book.category}</p>
              <p class="text-sm">QUANTITY: {book.quantity}</p>
              <p class="text-sm">STATUS: <span class={book.quantity > 0 ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                {book.quantity > 0 ? 'Available' : 'Unavailable'}
              </span></p>
            </div>
          </div>
          <button on:click={() => toggleEditBookModal(book)} class="text-sm border border-gray-300 px-3 py-1 rounded hover:bg-gray-100">Edit</button>
        </div>
      {/each}
    {:else}
      <div class="col-span-2 text-center py-8 bg-white rounded-lg shadow">
        <p class="text-gray-500">No books available. Add your first book!</p>
      </div>
    {/if}
  </div>
</div>

<!-- Categories Modal -->
{#if showCategoryModal}
  <div class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
    <div class="bg-[#f5f0e0] rounded-md p-8 w-full max-w-lg mx-4 border-2 border-black">
      <h2 class="text-center text-2xl font-bold mb-6">CATEGORIES</h2>
      
      <div class="mb-6 flex">
        <input 
          type="text" 
          bind:value={newCategoryName} 
          placeholder="Add new category..." 
          class="flex-1 border border-gray-300 p-2 rounded-l"
        />
        <button 
          on:click={showAddCategoryConfirm} 
          class="bg-purple-800 hover:bg-purple-700 text-white px-4 py-2 rounded-r"
        >
          ADD
        </button>
      </div>
      
      <div class="space-y-4 max-h-96 overflow-y-auto pr-2">
        {#each categories as category, index}
          <div class="flex items-center justify-between">
            <div class="flex items-center w-full">
              <span class="w-28 text-right pr-2">Category {index + 1}:</span>
              <input 
                type="text" 
                bind:value={category.name} 
                class="flex-1 border border-gray-300 p-2 rounded" 
              />
            </div>
            <button 
              on:click={() => confirmDeleteCategory(category.id)} 
              class="text-red-500 hover:text-red-700 ml-3"
            >
              Delete
            </button>
          </div>
        {/each}
      </div>
      
      <div class="mt-8 flex justify-center gap-4">
        <button 
          on:click={toggleCategoryModal} 
          class="bg-red-500 hover:bg-red-700 text-white px-6 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  </div>
{/if}

<!-- Add Book Modal -->
{#if showAddBookModal}
  <div class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
    <div class="bg-[#F5ECE0] rounded-md p-8 w-full max-w-md mx-4 border-2 border-black">
      <div class="flex justify-center mb-4">
        <div class="w-48 h-48 bg-gray-200 flex items-center justify-center border relative overflow-hidden">
          <input 
            type="file" 
            id="coverImageUpload" 
            accept="image/*" 
            on:change={handleFileSelect} 
            class="absolute inset-0 opacity-0 cursor-pointer z-10"
          />
          {#if imagePreview}
            <div class="w-full h-full flex items-center justify-center overflow-hidden">
              <img 
                src={imagePreview} 
                alt="Book cover preview" 
                class="object-contain w-full h-full" 
                style="aspect-ratio: auto;"
              />
            </div>
          {:else}
            <label for="coverImageUpload" class="cursor-pointer flex items-center justify-center w-full h-full">
              <svg class="w-24 h-32 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="2" width="20" height="32" rx="2" stroke="currentColor" fill="none" />
                <path d="M12 10v16M7 18h10" stroke-linecap="round" />
                <path d="M6 6h12" stroke-linecap="round" stroke-width="1" />
                <path d="M6 9h12" stroke-linecap="round" stroke-width="1" />
              </svg>
            </label>
          {/if}
        </div>
      </div>
      
      <div class="space-y-3">
        <div class="flex">
          <label for="bookTitle" class="w-24 text-right pr-2 pt-1 text-sm text-gray-700">BOOK TITLE:</label>
          <div class="flex-1 flex flex-col">
            <input 
              id="bookTitle"
              bind:value={newBook.title} 
              class="w-full border p-1 rounded {errors.title ? 'border-red-500' : ''}" 
              type="text"
            />
            {#if errors.title}
              <span class="text-red-500 text-xs mt-1">{errors.title}</span>
            {/if}
          </div>
        </div>
        
        <div class="flex">
          <label for="bookAuthor" class="w-24 text-right pr-2 pt-1 text-sm text-gray-700">AUTHOR:</label>
          <div class="flex-1 flex flex-col">
            <input 
              id="bookAuthor"
              bind:value={newBook.author} 
              class="w-full border p-1 rounded {errors.author ? 'border-red-500' : ''}" 
              type="text"
            />
            {#if errors.author}
              <span class="text-red-500 text-xs mt-1">{errors.author}</span>
            {/if}
          </div>
        </div>
        
        <div class="flex">
          <label for="bookIsbn" class="w-24 text-right pr-2 pt-1 text-sm text-gray-700">BOOK ISBN:</label>
          <div class="flex-1 flex flex-col">
            <input 
              id="bookIsbn"
              bind:value={newBook.isbn} 
              class="w-full border p-1 rounded {errors.isbn ? 'border-red-500' : ''}" 
              type="text"
            />
            {#if errors.isbn}
              <span class="text-red-500 text-xs mt-1">{errors.isbn}</span>
            {/if}
          </div>
        </div>
        
        <div class="flex">
          <label for="bookDescription" class="w-24 text-right pr-2 pt-1 text-sm text-gray-700">DESCRIPTION:</label>
          <div class="flex-1 flex flex-col">
            <textarea 
              id="bookDescription"
              bind:value={newBook.description} 
              class="w-full border p-1 rounded {errors.description ? 'border-red-500' : ''}" 
              rows="2"
            ></textarea>
            {#if errors.description}
              <span class="text-red-500 text-xs mt-1">{errors.description}</span>
            {/if}
          </div>
        </div>
        
        <div class="flex">
          <label for="bookQuantity" class="w-24 text-right pr-2 pt-1 text-sm text-gray-700">QUANTITY:</label>
          <div class="flex-1 flex flex-col">
            <input 
              id="bookQuantity"
              bind:value={newBook.quantity} 
              class="w-full border p-1 rounded {errors.quantity ? 'border-red-500' : ''}" 
              type="number"
              min="1"
            />
            {#if errors.quantity}
              <span class="text-red-500 text-xs mt-1">{errors.quantity}</span>
            {/if}
          </div>
        </div>
        
        <div class="flex">
          <label for="bookCategory" class="w-24 text-right pr-2 pt-1 text-sm text-gray-700">CATEGORY:</label>
          <div class="flex-1 flex flex-col">
            <select 
              id="bookCategory"
              bind:value={newBook.category} 
              class="w-full border p-1 rounded bg-white {errors.category ? 'border-red-500' : ''}"
            >
              <option value="" disabled selected>Select category</option>
              {#each categories as category}
                <option value={category.name}>{category.name}</option>
              {/each}
            </select>
            {#if errors.category}
              <span class="text-red-500 text-xs mt-1">{errors.category}</span>
            {/if}
          </div>
        </div>
      </div>
      
      <div class="mt-6 flex justify-end gap-2">
        <button on:click={handleSave} class="bg-[#0C1844] hover:bg-purple-600 text-white px-6 py-1 rounded">Add</button>
        <button on:click={toggleAddBookModal} class="bg-red-800 hover:bg-red-500 text-white px-4 py-1 rounded">Cancel</button>
      </div>
    </div>
  </div>
{/if}

<!-- Category Delete Confirmation Modal -->
{#if showDeleteCategoryModal}
  <div class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
    <div class="bg-white rounded-md p-8 w-full max-w-md mx-4 border-2 border-purple-800 relative">
      <div class="flex flex-col items-center justify-center">
        <div class="text-red-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke="currentColor" fill="white" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9l-6 6M9 9l6 6" stroke="red" />
          </svg>
        </div>
        
        <h2 class="text-center text-2xl font-bold mb-8">Are you sure you want to delete category?</h2>
        
        <div class="flex gap-4 mt-4">
          <button 
            on:click={() => categoryToDelete !== null && deleteCategory(categoryToDelete)} 
            class="bg-red-500 hover:bg-red-700 text-white px-6 py-2 rounded"
          >
            Yes
          </button>
          <button 
            on:click={cancelDeleteCategory} 
            class="bg-gray-500 hover:bg-gray-700 text-white px-6 py-2 rounded"
          >
            No
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- Category Deleted Success Modal -->
{#if showCategoryDeletedModal}
  <div class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
    <div class="bg-white rounded-md p-8 w-full max-w-md mx-4 border-2 border-green-500 relative">
      <div class="flex flex-col items-center justify-center">
        <div class="text-green-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="green" stroke-width="2" fill="white" />
            <path d="M8 12l3 3 5-5" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        
        <h2 class="text-center text-2xl font-bold">Category successfully deleted!</h2>
      </div>
    </div>
  </div>
{/if}

<!-- Category Success Modal -->
{#if showCategorySuccessModal}
  <div class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
    <div class="bg-white rounded-md p-8 w-full max-w-md mx-4 border-2 border-green-500 relative">
      <div class="flex flex-col items-center justify-center">
        <div class="text-green-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="green" stroke-width="2" fill="white" />
            <path d="M8 12l3 3 5-5" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        
        <h2 class="text-center text-2xl font-bold">Category successfully added!</h2>
      </div>
    </div>
  </div>
{/if}

<!-- Add Category Confirmation Modal -->
{#if showAddCategoryConfirmModal}
  <div class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
    <div class="bg-white rounded-md p-8 w-full max-w-md mx-4 border-2 border-purple-800 relative">
      <div class="flex flex-col items-center justify-center">
        <div class="text-red-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="red" stroke-width="2" fill="white" />
            <line x1="12" y1="8" x2="12" y2="12" stroke="red" stroke-width="2" />
            <circle cx="12" cy="16" r="1" fill="red" />
          </svg>
        </div>
        
        <h2 class="text-center text-2xl font-bold mb-8">Are you sure you want to add catregory?</h2>
        
        <div class="flex gap-4 mt-4">
          <button 
            on:click={addCategory} 
            class="bg-purple-500 hover:bg-purple-700 text-white px-6 py-2 rounded"
          >
            Yes
          </button>
          <button 
            on:click={cancelAddCategory} 
            class="bg-gray-500 hover:bg-gray-700 text-white px-6 py-2 rounded"
          >
            No
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- Add Book Confirmation Modal -->
{#if showAddBookConfirmModal}
  <div class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
    <div class="bg-white rounded-md p-8 w-full max-w-md mx-4 border-2 border-purple-800 relative">
      <div class="flex flex-col items-center justify-center">
        <div class="text-red-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="red" stroke-width="2" fill="white" />
            <line x1="12" y1="8" x2="12" y2="16" stroke="red" stroke-width="2" />
            <circle cx="12" cy="16" r="0.5" fill="red" />
          </svg>
        </div>
        
        <h2 class="text-center text-2xl font-bold mb-8">Add book on the list?</h2>
        
        <div class="flex gap-4 mt-4">
          <button 
            on:click={confirmAddBook} 
            class="bg-purple-500 hover:bg-purple-700 text-white px-6 py-2 rounded"
          >
            Yes
          </button>
          <button 
            on:click={cancelAddBook} 
            class="bg-gray-500 hover:bg-gray-700 text-white px-6 py-2 rounded"
          >
            No
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- Edit Book Modal -->
{#if showEditBookModal}
  <div class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
    <div class="bg-[#F5ECE0] rounded-md p-8 w-full max-w-md mx-4 border-2 border-black">
      <div class="flex justify-center mb-4">
        <div class="w-48 h-48 bg-gray-200 flex items-center justify-center border relative overflow-hidden">
          <input 
            type="file" 
            id="editCoverImageUpload" 
            accept="image/*" 
            on:change={handleFileSelect} 
            class="absolute inset-0 opacity-0 cursor-pointer z-10"
          />
          {#if imagePreview}
            <div class="w-full h-full flex items-center justify-center overflow-hidden">
              <img 
                src={imagePreview} 
                alt="Book cover preview" 
                class="object-contain w-full h-full" 
                style="aspect-ratio: auto;"
              />
            </div>
          {:else}
            <label for="editCoverImageUpload" class="cursor-pointer flex items-center justify-center w-full h-full">
              <svg class="w-24 h-32 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="2" width="20" height="32" rx="2" stroke="currentColor" fill="none" />
                <path d="M12 10v16M7 18h10" stroke-linecap="round" />
                <path d="M6 6h12" stroke-linecap="round" stroke-width="1" />
                <path d="M6 9h12" stroke-linecap="round" stroke-width="1" />
              </svg>
            </label>
          {/if}
        </div>
      </div>
      
      <div class="space-y-3">
        <div class="flex">
          <label for="editBookTitle" class="w-24 text-right pr-2 pt-1 text-sm text-gray-700">BOOK TITLE:</label>
          <div class="flex-1 flex flex-col">
            <input 
              id="editBookTitle"
              bind:value={newBook.title} 
              class="w-full border p-1 rounded {errors.title ? 'border-red-500' : ''}" 
              type="text"
            />
            {#if errors.title}
              <span class="text-red-500 text-xs mt-1">{errors.title}</span>
            {/if}
          </div>
        </div>
        
        <div class="flex">
          <label for="editBookAuthor" class="w-24 text-right pr-2 pt-1 text-sm text-gray-700">AUTHOR:</label>
          <div class="flex-1 flex flex-col">
            <input 
              id="editBookAuthor"
              bind:value={newBook.author} 
              class="w-full border p-1 rounded {errors.author ? 'border-red-500' : ''}" 
              type="text"
            />
            {#if errors.author}
              <span class="text-red-500 text-xs mt-1">{errors.author}</span>
            {/if}
          </div>
        </div>
        
        <div class="flex">
          <label for="editBookIsbn" class="w-24 text-right pr-2 pt-1 text-sm text-gray-700">BOOK ISBN:</label>
          <div class="flex-1 flex flex-col">
            <input 
              id="editBookIsbn"
              bind:value={newBook.isbn} 
              class="w-full border p-1 rounded {errors.isbn ? 'border-red-500' : ''}" 
              type="text"
            />
            {#if errors.isbn}
              <span class="text-red-500 text-xs mt-1">{errors.isbn}</span>
            {/if}
          </div>
        </div>
        
        <div class="flex">
          <label for="editBookDescription" class="w-24 text-right pr-2 pt-1 text-sm text-gray-700">DESCRIPTION:</label>
          <div class="flex-1 flex flex-col">
            <textarea 
              id="editBookDescription"
              bind:value={newBook.description} 
              class="w-full border p-1 rounded {errors.description ? 'border-red-500' : ''}" 
              rows="2"
            ></textarea>
            {#if errors.description}
              <span class="text-red-500 text-xs mt-1">{errors.description}</span>
            {/if}
          </div>
        </div>
        
        <div class="flex">
          <label for="editBookQuantity" class="w-24 text-right pr-2 pt-1 text-sm text-gray-700">QUANTITY:</label>
          <div class="flex-1 flex flex-col">
            <input 
              id="editBookQuantity"
              bind:value={newBook.quantity} 
              class="w-full border p-1 rounded {errors.quantity ? 'border-red-500' : ''}" 
              type="number"
              min="1"
            />
            {#if errors.quantity}
              <span class="text-red-500 text-xs mt-1">{errors.quantity}</span>
            {/if}
          </div>
        </div>
        
        <div class="flex">
          <label for="editBookCategory" class="w-24 text-right pr-2 pt-1 text-sm text-gray-700">CATEGORY:</label>
          <div class="flex-1 flex flex-col">
            <select 
              id="editBookCategory"
              bind:value={newBook.category} 
              class="w-full border p-1 rounded bg-white {errors.category ? 'border-red-500' : ''}"
            >
              <option value="" disabled selected>Select category</option>
              {#each categories as category}
                <option value={category.name}>{category.name}</option>
              {/each}
            </select>
            {#if errors.category}
              <span class="text-red-500 text-xs mt-1">{errors.category}</span>
            {/if}
          </div>
        </div>
      </div>
      
      <div class="mt-6 flex justify-end gap-2">
        <button on:click={handleEditSave} class="bg-[#0C1844] hover:bg-purple-600 text-white px-6 py-1 rounded">Save</button>
        <button on:click={() => toggleEditBookModal()} class="bg-red-800 hover:bg-red-500 text-white px-4 py-1 rounded">Cancel</button>
      </div>
    </div>
  </div>
{/if}

<!-- Edit Book Confirmation Modal -->
{#if showEditBookConfirmModal}
  <div class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
    <div class="bg-white rounded-md p-8 w-full max-w-md mx-4 border-2 border-purple-800 relative">
      <div class="flex flex-col items-center justify-center">
        <div class="text-blue-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="red" stroke-width="2" fill="white" />
            <line x1="12" y1="8" x2="12" y2="16" stroke="red" stroke-width="2" />
            <circle cx="12" cy="16" r="0.5" fill="red" />
          </svg>
        </div>
        
        <h2 class="text-center text-2xl font-bold mb-8">Save changes to this book?</h2>
        
        <div class="flex gap-4 mt-4">
          <button 
            on:click={confirmEditBook} 
            class="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded"
          >
            Yes
          </button>
          <button 
            on:click={cancelEditBook} 
            class="bg-gray-500 hover:bg-gray-700 text-white px-6 py-2 rounded"
          >
            No
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- Book Edited Success Modal -->
{#if showBookEditedSuccessModal}
  <div class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
    <div class="bg-white rounded-md p-8 w-full max-w-md mx-4 border-2 border-green-500 relative">
      <div class="flex flex-col items-center justify-center">
        <div class="text-green-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="green" stroke-width="2" fill="white" />
            <path d="M8 12l3 3 5-5" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        
        <h2 class="text-center text-2xl font-bold">Book successfully updated!</h2>
      </div>
    </div>
  </div>
{/if}

<style>
 .min-h-screen {
   background-color: #9ca3af;
 }
</style>
  

