import {create} from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
  login: async (username, password) => {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const user = await response.json();
      set({ user });
      return user;
    } catch (error) {
      console.error('Login failed:', error);
      return null;
    }
  },
}));

export default useAuthStore;