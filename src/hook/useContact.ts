import {  useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
    message: string;
  }
  const API_URL = "https://api-gms.vercel.app/api/v1/newsfeed";

export function useCarousel() {
  const queryClient = useQueryClient();
  const createContact = useMutation({
    mutationFn: async (newContact: Omit<Contact, 'id'>) => {
      const response = await axios.post(`${API_URL}`, newContact);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['carousels'] }); 
    },
  });
  return {
    createContact,
  
    queryClient,
  };
}
