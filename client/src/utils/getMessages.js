import axios from 'axios';

const getMessages = async chatId => {
  try {
    const res = await axios.get(`/api/chat/message/${chatId}`);
    
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export default getMessages;