import React from 'react';

import plane from '../../images/plane.png';
import clip from '../../images/clip.png';

const Input = () => {
  return (
    <div className='chat-area-block input'>
      <div>
        <button>
          <img className='img-clip' src={clip} alt='Att'/>
        </button>
      </div>
      <div>
        <textarea
          maxLength='300'
          placeholder='Ваше сообщение...'
        />
      </div>
      <div>
        <button>
          <img className='img-plane' src={plane} alt='Go'/>
        </button>
      </div>
    </div>
  );
}

export default Input;
