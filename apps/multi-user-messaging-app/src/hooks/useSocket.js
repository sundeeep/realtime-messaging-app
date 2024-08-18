import { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import useAuthStore from '../store/useAuthStore';
import useChatStore from '../store/useChatStore';

const useSocket = () => {
  const socket = useRef();
  const { user } = useAuthStore();
  const { addMessage, fetchChatRooms } = useChatStore();

  useEffect(() => {
    if (user) {
      socket.current = io('http://localhost:3500');

      socket.current.emit('login', user.id);

      socket.current.on('newMessage', (message) => {
        addMessage(message.senderId, message);
      });

      socket.current.on('friendRequestAccepted', () => {
        fetchChatRooms(user.id);
      });

      return () => {
        socket.current.emit('logout', user.id);
        socket.current.disconnect();
      };
    }
  }, [user]);

  const sendMessage = (message) => {
    socket.current.emit('sendMessage', message);
  };

  const sendTypingStatus = (receiverId, isTyping) => {
    if (isTyping) {
      socket.current.emit('typing', { senderId: user.id, receiverId });
    } else {
      socket.current.emit('stopTyping', { senderId: user.id, receiverId });
    }
  };

  const sendFriendRequest = (receiverId) => {
    socket.current.emit('sendFriendRequest', { senderId: user.id, receiverId });
  };

  const acceptFriendRequest = (requestId) => {
    socket.current.emit('acceptFriendRequest', requestId);
  };

  return {
    socket: socket.current,
    sendMessage,
    sendTypingStatus,
    sendFriendRequest,
    acceptFriendRequest
  };
};

export default useSocket;