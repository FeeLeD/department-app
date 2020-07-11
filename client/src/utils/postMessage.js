import axios from 'axios';

const postMessage = async messageData => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify(messageData);

  try {
    await axios.post('api/chat/message', body, config);
  } catch (err) {
    console.log(err);
  }
}

export default postMessage;