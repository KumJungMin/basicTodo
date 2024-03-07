import { ChangeEvent, useState } from 'react';

interface Props {
  onMemoAdd: (text: string) => void;
}

function MemoInput({ onMemoAdd }: Props) {
  const [inputText, setInputText] = useState('')

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputText(value);
  }

  const handleClick = () => {
    onMemoAdd(inputText);
    setInputText('');
  }

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInput} />
      <button onClick={handleClick}>add</button>
    </div>
  )
}

export default MemoInput;