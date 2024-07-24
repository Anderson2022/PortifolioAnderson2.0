// components/Coment.jsx
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../libs/firebase'; // Ajuste o caminho conforme necessário

export const Coment = ({videoId}) => {
  const [name, setName] = useState('');
  const [resp, setResp] = useState('');
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    console.log('videoId:', videoId);
  }, [videoId]);

  const handleSubmit = async (e) => {
    e.preventDefault();


    const newComment = {
      name,
      resp,
      videoId,
      date: new Date().toISOString(),
    };

    try {
      await addDoc(collection(db, 'respt'), newComment);
      setName('');
      setResp('');
      fetchComments();
    } catch (error) {
      console.error('Erro ao adicionar comentário: ', error);
    }
  };

  const fetchComments = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'respt'));
      const commentsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setComments(commentsList);
    } catch (error) {
      console.error('Erro ao buscar comentários: ', error);
    }
  };

  useEffect(() => {
    if (showComments) {
      fetchComments();
    }
  }, [showComments]);

  return (
    <div className="flex justify-center  mb-4">
      <div className="w-[97%] shadow-lg rounded-lg bg-white">
        <form className="w-full px-4 pt-2" onSubmit={handleSubmit}>
          <h2 className="text-gray-800 text-lg px-4 pt-3 pb-2">Comentarios</h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-2 mt-2">
              <input
                type="text"
                className="bg-gray-100 rounded border border-gray-400 leading-normal w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="name"
                placeholder="Seu nome"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full px-3 mb-2 mt-2">
              <textarea
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="resp"
                placeholder="Comentario"
                required
                value={resp}
                onChange={(e) => setResp(e.target.value)}
              ></textarea>
            </div>
            <div className="w-full flex items-start px-3">
              <div className="flex items-start text-gray-700 px-2 mr-auto">
                <svg
                  fill="none"
                  className="w-5 h-5 text-gray-600 mr-1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-xs md:text-sm pt-px">Algum HTML está bem.</p>
              </div>
              <div className="-mr-1">
                <input
                  type="submit"
                  className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100 cursor-pointer"
                  value="Posta Comentario"
                />
              </div>
            </div>
          </div>
        </form>

        <button
          onClick={() => setShowComments(!showComments)}
          className="text-black bg-gradient-to-r mx-2
 text-center text-sm"
        >
          {showComments ? 'Esconder Comentários' : 'Visualizar Comentários'}
        </button>

        {showComments && (
          <div className="px-4 py-2">    
            <ul>
              {comments.map(comment => (
                <li key={comment.id}>
                  <p className='text-sm my-3'>{comment.name}: <small>{new Date(comment.date).toLocaleString()}</small></p>
                  <p className='text-sm/[10px]'>{comment.resp}</p>
                  <p></p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};


