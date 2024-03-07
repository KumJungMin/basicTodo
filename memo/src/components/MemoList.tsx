/** rfce로 react 템플릿 자동 추가 */ 

function MemoList({ memos, onMemoRemove }) {
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
