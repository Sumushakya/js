import axios from "axios";
import useSWR from "swr";
import { ProductType } from "./types";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useProducts = () => {
  const { data, error } = useSWR<ProductType[]>(
    `https://fakestoreapi.com/products`,
    fetcher
  );
  console.log("fetch data", data);
  return {
    products: data,
    isLoading: !data && !error,
    isError: error,
  };
};
