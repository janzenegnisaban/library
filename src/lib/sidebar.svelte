<script lang="ts">
    import { page } from '$app/stores';
    
    // This would typically come from your auth store or API
    // For now using placeholder data
    export let user = {
      name: 'John Doe',
      avatar: '/profile-placeholder.png' // replace with actual avatar path
    };
  
    function handleImageError(event: Event): void {
      (event.target as HTMLImageElement).src = '/profile-default.png';
    }
  </script>
  
  <div class="h-screen w-64 bg-[#F5ECE0] shadow-lg fixed left-0 top-0 flex flex-col border-r border-gray-200">
    <!-- User Profile Section -->
    <div class="flex flex-col items-center p-6 border-b border-gray-200">
      <div class="w-24 h-24 rounded-full bg-gray-300 overflow-hidden mb-4">
        <img 
          src={user.avatar} 
          alt="User avatar" 
          class="w-full h-full object-cover"
          on:error={handleImageError}
        />
      </div>
      <h3 class="text-xl font-semibold text-gray-800">{user.name}</h3>
    </div>
    
    <!-- Navigation Links -->
    <nav class="flex-1 py-4 px-3">
      <ul class="space-y-2">
        <li>
          <a 
            href="/student/home" 
            class={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors duration-200 hover:bg-[#5F99AE] hover:text-white ${$page.url.pathname === '/student/home' ? 'bg-[#adb5bd] text-white' : 'text-gray-800'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5 h-5 fill-current">
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
            </svg>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a 
            href="/student/profile" 
            class={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors duration-200 hover:bg-[#5F99AE] hover:text-white ${$page.url.pathname === '/student/profile' ? 'bg-[#adb5bd] text-white' : 'text-gray-800'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
              <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/>
            </svg>
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a 
            href="/student/borrowed-books" 
            class={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors duration-200 hover:bg-[#5F99AE] hover:text-white ${$page.url.pathname === '/borrowed-books' ? 'bg-[#adb5bd] text-white' : 'text-gray-800'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 fill-current">
              <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
            </svg>
            <span>Borrowed Books</span>
          </a>
        </li>
      </ul>
    </nav>
    
    <!-- Logout Section -->
    <div class="border-t border-gray-200 p-4">
      <a 
        href="/logout" 
        class="flex items-center gap-3 px-4 py-3 rounded-md transition-colors duration-200 hover:bg-[#693382] hover:text-white text-gray-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
          <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/>
        </svg>
        <span>Logout</span>
      </a>
    </div>
  </div>
  