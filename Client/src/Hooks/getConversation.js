import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function useGetConversation() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversation = async() => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost/api/users")
        const data = await res.json();

        if (data.error) {
          throw new Error('😭 Failed to fetch ');
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);

  return { loading, conversations };
}
