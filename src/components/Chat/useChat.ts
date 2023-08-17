import { useEffect, useState } from 'react';
import { transform } from '../../lib/transform';
import { Chat } from '../../types/chat';

const initialMessage: Chat = {
  message:
    'Hello! I’m BotHub, AI-based bot designed to answer all your questions.',
  idChat: 'bot',
};

export const useChat = () => {
  // const [dataMessages, setDataMessages] = useState<string[]>([]);
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [arrayMessages, setArrayMessages] = useState<Chat[]>([initialMessage]);

  useEffect(() => {
    if (loading === false && data.length > 0) {
      setArrayMessages((prevValue) => [
        ...prevValue,
        { message: data, idChat: 'bot' },
      ]);
    }
  }, [data, loading]);

  const fetchData = async (value: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        'http://185.46.8.130/api/v1/chat/send-message',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: value }),
        }
      );
      if (!response.ok || !response.body) {
        throw response.statusText;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');

      const done = false;
      while (!done) {
        const { value, done } = await reader.read();
        if (done) {
          setLoading(false);
          break;
        }

        const decodedChunk = decoder.decode(value, { stream: true });

        setData((prevValue) => `${prevValue}${transform(decodedChunk)}`);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    loading,
    fetchData,
    setData,
    data,
    setArrayMessages,
    arrayMessages,
  };
};
