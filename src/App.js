/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState(["남자 코트 추천", "여자 코트 추천", "겨울용 패딩"])
  const [count, setCount] = useState([0, 0, 0]);
  const [modal, setModal] = useState(Boolean);
  const [modalTitle, setModalTitle] = useState(0);
  const [input, setInput] = useState("");

const Modalc = () => {
  setModal(!modal)
}

const title2 = () => {
  let copy = [...title];
  copy[0] = "여자 코트 추천"
  setTitle(copy);
}

const titleSort = () => {
  let titlesort2 = [...title.sort()]
  setTitle(titlesort2)
}

const blogname = () => {
  let blogtitle = [...title]
  blogtitle.unshift(input)
  setTitle(blogtitle)
}

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:"red"}}>Blog</h4>
      </div>
      <button onClick={titleSort}>가나다순 정렬하기</button>
      <button onClick={title2}>타이틀 변경</button>
      <br />

      <input onChange={(e) => {
        setInput(e.target.value)
        }}/>
      <button onClick={blogname}>추가</button>

      {
        title.map(function(el, i) {
          return (
            <div className='list' key={i}>
              <h4 onClick={()=> {
                Modalc()
                setModalTitle(i)
                }}>{el}</h4>
              <p>10월 7일 발행</p>
              <span onClick={() => {
                const counta = [...count]
                counta[i] = counta[i] + 1;
                setCount(counta)
              }}>❤️</span>{count[i]}
              <button onClick={()=> {
                  let td = [...title];
                  td.splice(i, 1);
                  setTitle(td)
              }}>삭제</button>
            </div>
          )
        })
      }

      {modal === true ? <Modal modalTitle={modalTitle} title2={title2} title={title}/> : null}

    </div>
  );
}

function Modal(props) {
    return (
      <div className='modal'>
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.title2}>제목수정버튼</button>
    </div>
    )
  }

export default App;
