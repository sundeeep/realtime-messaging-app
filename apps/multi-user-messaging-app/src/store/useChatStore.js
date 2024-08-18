import {create} from 'zustand';

const useChatStore = create((set, get) => ({
  chatRooms: [],
  activeChat: null,
  messages: {},
  setChatRooms: (chatRooms) => set({ chatRooms }),
  setActiveChat: (chatId) => set({ activeChat: chatId }),
  addMessage: (chatId, message) => set((state) => ({
    messages: {
      ...state.messages,
      [chatId]: [...(state.messages[chatId] || []), message],
    },
  })),
  setMessages: (chatId, messages) => set((state) => ({
    messages: { ...state.messages, [chatId]: messages },
  })),
  fetchChatRooms: async (userId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/chatrooms/${userId}`);
      const chatRooms = await response.json();
      set({ chatRooms });
    } catch (error) {
      console.error('Error fetching chat rooms:', error);
    }
  },
  fetchMessages: async (chatId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/messages/${chatId}`);
      const messages = await response.json();
      set((state) => ({
        messages: { ...state.messages, [chatId]: messages },
      }));
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  },
}));

export default useChatStore;