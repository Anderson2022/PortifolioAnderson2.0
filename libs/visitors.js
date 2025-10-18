import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../libs/firebase';

export default async function handler(req, res) {
  // Esta rota só aceitará requisições do tipo GET
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: `Método ${req.method} não permitido` });
  }

  try {
    const visitorsCollection = collection(db, 'visitors');
    // Ordena os visitantes do mais recente para o mais antigo
    const q = query(visitorsCollection, orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);

    const visitorsList = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        // Converte o Timestamp do Firebase para um formato de texto (ISO string) que é compatível com JSON
        timestamp: data.timestamp?.toDate().toISOString(),
      };
    });

    // Define o cabeçalho para indicar que a resposta é um JSON e envia os dados
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(visitorsList);
  } catch (error) {
    console.error("Erro ao buscar visitantes via API: ", error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
}