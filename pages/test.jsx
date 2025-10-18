import React, { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../libs/firebase';
import Head from 'next/head';

const TestPage = () => {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const visitorsCollection = collection(db, 'visitors');
        // Ordena os visitantes pelo mais recente
        const q = query(visitorsCollection, orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        const visitorsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          // Converte o timestamp do Firebase para um formato legível
          timestamp: doc.data().timestamp?.toDate().toLocaleString('pt-BR'),
        }));
        setVisitors(visitorsList);
      } catch (error) {
        console.error("Erro ao buscar visitantes: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitors();
  }, []);

  return (
    <>
      <Head>
        <title>Admin | Visitantes</title>
      </Head>
      <div className="min-h-screen bg-gray-100 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Visitantes do Portfólio ({visitors.length})
          </h1>
          {loading ? (
            <p>Carregando visitantes...</p>
          ) : (
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      País
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cidade
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Provedor
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {visitors.map((visitor) => (
                    <tr key={visitor.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{visitor.timestamp}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{visitor.country}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{visitor.city}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visitor.isp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TestPage;