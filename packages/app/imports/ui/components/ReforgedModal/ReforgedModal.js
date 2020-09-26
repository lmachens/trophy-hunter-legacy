import React, { useState } from 'react';

const styles = {
  modal: {
    position: 'fixed',
    left: 'calc(50% - 229px)',
    top: 'calc(50% - 155px)',
    width: 458,
    height: 309,
    backgroundImage: 'url(/images/reforged.png)',
    backgroundSize: 'cover',
    zIndex: 1,
    textAlign: 'center',
    color: '#cacacb'
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
    cursor: 'pointer'
  },
  getItNow: {
    background: '#77777A',
    border: 'none',
    outline: 'none',
    color: '#EAEAEA',
    fontSize: 16,
    padding: '4px 8px',
    marginTop: 232,
    fontFamily: 'Roboto Mono, Roboto',
    cursor: 'pointer'
  }
};

function ReforgedModal() {
  const [closed, setClosed] = useState(false);

  if (closed) {
    return null;
  }

  return (
    <div style={styles.modal}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          setClosed(true);
        }}
        style={styles.close}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.1464 10.1464C10.3417 9.95118 10.6583 9.95118 10.8536 10.1464L15 14.2929L19.1464 10.1464C19.3417 9.95118 19.6583 9.95118 19.8536 10.1464C20.0488 10.3417 20.0488 10.6583 19.8536 10.8536L15.7071 15L19.8536 19.1464C20.0488 19.3417 20.0488 19.6583 19.8536 19.8536C19.6583 20.0488 19.3417 20.0488 19.1464 19.8536L15 15.7071L10.8536 19.8536C10.6583 20.0488 10.3417 20.0488 10.1464 19.8536C9.95118 19.6583 9.95118 19.3417 10.1464 19.1464L14.2929 15L10.1464 10.8536C9.95118 10.6583 9.95118 10.3417 10.1464 10.1464Z"
          fill="#EAEAEA"
        />
      </svg>
      <button
        style={styles.getItNow}
        onClick={() =>
          window.open('https://www.overwolf.com/app/Leon_Machens-Trophy_Hunter_Reforged')
        }
      >
        Get it now!
      </button>
      <p>
        Trophy Hunter is deprecated and will be shutdown soon. Install Trophy Hunter Reforged (which
        is under development) and keep hunting for trophies.
      </p>
    </div>
  );
}

export default ReforgedModal;
