import { useState } from 'react';

import MemoHeader from './components/MemoHeader';
import MemoInput from './components/MemoInput';
import MemoList from './components/MemoList';

function fetchMemos()  {
  const memos: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key) memos.push(`${localStorage.getItem(key)}`);
  }
  return memos;
}


function App() {
  const [memos, setMemos] = useState<string[]>(fetchMemos());

  const addMemo = (memo: string) => {
    localStorage.setItem(memo, memo);
    setMemos((currentMemos) => {
      return [...currentMemos, memo]
    })
  }
  const removeMemo = (memo: string) => {
    const result = memos.filter(memoItem =>  memoItem !== memo)
    setMemos(result);
    localStorage.removeItem(memo);
  }
  
  
  return (
    <div>
      <MemoHeader />
      <MemoInput onMemoAdd={addMemo} />
      <MemoList memos={memos} onMemoRemove={removeMemo} />
    </div>
  )
}

export default App;