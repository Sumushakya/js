import axios from "axios";
import useSWR from "swr";
import { Product } from "./types";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useProducts = () => {
  const { data, error } = useSWR<Product[]>(
    `https://fakestoreapi.com/products`,
    fetcher
  );
  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
};
