import io from 'socket.io-client';

import Ip from '../assets/Ip';
// const Ip = "http://192.168.131.232:3000";

class WSService {
  constructor() {
    this.connected = false;
    this.initializeSocket();
  }

  initializeSocket = async () => {
    try {
      this.socket = io(Ip, {
        transports: ['websocket'],
      });

      this.socket.on('connect', data => {
        this.connected = true;
        console.log('=== socket connected ====');
      });

      this.socket.on('disconnect', data => {
        this.connected = false;
        console.log('=== socket disconnected ====');
      });

      this.socket.on('error', data => {
        console.log('socket error', data);
      });
    } catch (error) {
      console.log('socket is not initialized', error);
    }
  };

  emit(event, data = {}) {
    this.socket.emit(event, data);
  }

  on(event, cb) {
    this.socket.on(event, cb);
  }

  removeListener(listenerName) {
    this.socket.removeListener(listenerName);
  }
}

const socketServices = new WSService();

export default socketServices;