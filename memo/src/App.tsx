import { useState } from 'react'

function fetchMemos() {
  const memos = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key) memos.push(localStorage.getItem(key));
  }
  return memos;

}

function App() {
  const [inputText, setInputText] = useState('');
  const memos = fetchMemos();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  const handleClick = () => {
    localStorage.setItem(inputText, inputText);
    setInputText('');
  }

  return (
    <div>
      <h1>MEMO APP</h1>
      <div>
        <input type="text" value={inputText} onChange={handleInputChange}/>
        <button onClick={handleClick}>add</button>
      </div>
      <div>
        <ul>
          {
            memos.map((memo, index) => (
              <li key={index}>{memo}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
