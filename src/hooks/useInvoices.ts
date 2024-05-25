import { useMutation, useQuery } from "react-query";
import axios from "axios";

const postInvoices = async (base64: string) => {
  return await axios.post("http://localhost:8080/invoice", {
    pdfBuffer: base64,
  });
};
const downloadInvoice = async (id: string) => {
  return await axios.get(`http://localhost:8080/invoice/download/${id}`, {
    responseType: "blob",
  });
};

const getInvoices = async () => {
  return await axios.get("http://localhost:8080/invoice");
};

const usePostInvoice = () => {
  return useMutation(postInvoices);
};

const useGetInvoice = () => {
  return useQuery("invoices", () => getInvoices(), {
    staleTime: 60000,
  });
};

const useDownloadInvoice = () => {
  return useMutation(downloadInvoice);
};

export { usePostInvoice, useGetInvoice, useDownloadInvoice };
