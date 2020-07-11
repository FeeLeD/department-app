import axios from 'axios';

const findUsers = async pattern => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({"pattern": pattern});

  try {
    const res = await axios.post('api/user/find', body, config);

    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export default findUsers;