import axios from 'axios';

const createChat = async (data, next) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify(data);

  try {
    await axios.post('/api/chat', body, config);
    
    next();
  } catch(err) {
    console.log(err);
  }
};

export default createChat;