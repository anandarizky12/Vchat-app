import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../Socket';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
        {call.isReceivingCall && !callAccepted && (
        <div className="absolute bottom-0 bg-white p-2 w-96 border-gray-50 flex-row flex justify-between">
          <h1>{call.name} is calling:</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
        )}
    </>
  );
};

export default Notifications;