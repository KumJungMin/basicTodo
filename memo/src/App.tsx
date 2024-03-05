import { useState } from 'react'



function App() {
  const [inputText, setInputText] = useState('');
  const [memos, setMemos] = useState<string[]>(fetchMemos());
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  const handleClick = () => {
    if (inputText === '') return;

    /**
    * NOTE_데이터 업데이트 방법1: 배열 데이터를 별도 변수를 선언해 수정
    * const newMemos = [...memos, inputText]; 
    * setMemos(newMemos);
    */ 
  
    /** NOTE_데이터 업데이트 방법2: setMemos에서 제공하는 인자로 데이터 수정 */ 
    setMemos((currMemos) =>  [...currMemos, inputText]);
    localStorage.setItem(inputText, inputText);
    setInputText('');
  }
  const handleRemove = (memo: string, index: number) => {
    const newMemos = memos.filter((_, i) => i !== index);
    
    /** NOTE: 배열은 레퍼런스 타입이기 때문에 setMemos를 호출해, 새로운 배열을 만들어야 함. */
    setMemos(newMemos); 
    localStorage.removeItem(memo);
  }

  function fetchMemos()  {
  const memos: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key) memos.push(`${localStorage.getItem(key)}`);
  }
  return memos;

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
              <li key={index}>{memo}
              <button onClick={() => handleRemove(memo, index)}>Remove</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
