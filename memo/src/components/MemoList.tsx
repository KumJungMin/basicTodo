/** rfce로 react 템플릿 자동 추가 */ 

interface Props {
  memos: string[];
  onMemoRemove: (text: string) => void;
}

function MemoList({ memos, onMemoRemove }: Props) {
  return (
    <div>
      <ul>
        {memos.map((memo, index) => {
          return (
            <li key={index}>
              <span>{memo}</span>
              <button onClick={() => onMemoRemove(memo)}>remove</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MemoList
