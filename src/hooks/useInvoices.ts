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

const getInvoices = async (filters: any) => {
  return await axios.get("http://localhost:8080/invoice", {
    params: filters,
  });
};

const getDashboardInvoices = async (clientNumber: any) => {
  return await axios.get("http://localhost:8080/invoice/dashboard", {
    params: {
      clientNumber,
    },
  });
};

const getDashboardGraphInvoices = async (clientNumber: any) => {
  console.log(clientNumber, "client");
  return await axios.get("http://localhost:8080/invoice/dashboardGraph", {
    params: {
      clientNumber,
    },
  });
};

const usePostInvoice = () => {
  return useMutation(postInvoices);
};

const useGetInvoice = (filters: any) => {
  return useQuery(["invoices", filters], () => getInvoices(filters), {
    staleTime: 60000,
  });
};

const useGetDashboardInvoice = (clientNumber: any) => {
  return useQuery(
    ["dashboard-invoices", clientNumber],
    () => getDashboardInvoices(clientNumber),
    {
      staleTime: 60000,
    },
  );
};

const useGetDashboardGraphInvoice = (clientNumber: any) => {
  return useQuery(
    ["dashboard-invoices-graph", clientNumber],
    () => getDashboardGraphInvoices(clientNumber),
    {
      staleTime: 60000,
    },
  );
};

const useDownloadInvoice = () => {
  return useMutation(downloadInvoice);
};

export {
  usePostInvoice,
  useGetInvoice,
  useDownloadInvoice,
  useGetDashboardInvoice,
  useGetDashboardGraphInvoice,
};
