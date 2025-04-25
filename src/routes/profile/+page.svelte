<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from '$lib/navbar.svelte';

  let userProfile = {
    username: '',
    email: '',
    mobile: '',
    createdAt: '',
  };

  // Fetch user profile from the backend
  async function fetchUserProfile() {
    try {
      const response = await fetch('/api/profile', {
        credentials: 'include', // Ensure cookies are sent with the request
      });

      if (response.ok) {
        userProfile = await response.json();
        console.log('User profile fetched:', userProfile); // Debugging
      } else {
        console.error('Failed to fetch user profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  }

  // Fetch user profile on page load
  onMount(() => {
    fetchUserProfile();
  });
</script>

<div class="min-h-screen bg-gray-400">
  <Navbar />
  <div class="bg-gray-400 text-white p-4 flex justify-between items-center">
    <h1 class="text-xl font-bold flex items-center">
      <svg class="w-6 h-6 mr-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.418 0-8 2.015-8 4.5V20h16v-1.5c0-2.485-3.582-4.5-8-4.5Z" />
      </svg>
      PROFILE
    </h1>
  </div>

  <div class="p-4">
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-2xl font-bold mb-4">User Information</h2>
      <div class="space-y-4">
        <div class="flex items-center">
          <span class="w-32 font-medium">Username:</span>
          <span>{userProfile.username}</span>
        </div>
        <div class="flex items-center">
          <span class="w-32 font-medium">Email:</span>
          <span>{userProfile.email}</span>
        </div>
        <div class="flex items-center">
          <span class="w-32 font-medium">Mobile:</span>
          <span>{userProfile.mobile}</span>
        </div>
        <div class="flex items-center">
          <span class="w-32 font-medium">Joined:</span>
          <span>{new Date(userProfile.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .min-h-screen {
    background-color: #9ca3af;
  }
</style>