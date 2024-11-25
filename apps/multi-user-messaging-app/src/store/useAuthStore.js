import {create} from 'zustand';
import io from 'socket.io-client';

const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
  registerNewUser: async (newUser) => {
    try{
      const socket = io('http://localhost:3500');
      if(newUser){
        socket.emit('register-new-user', newUser);
      }
    //   socket.on('new-user-registered', (newUser) => {
    //     if(newUser){
    //       set({ user: newUser });
    //       console.log('New user registered', newUser);
    //     }
    // });
    }catch(error){
      console.error("Error registering user", error.message);
      return null;
    }
  },
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