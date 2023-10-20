import { useEffect, useState } from "react";
import discountApi from "../../api/discountApi";

const useGetAllDiscount = (count) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllDiscount = async () => {
      try {
        const response = await discountApi.getAllDiscount();
        setData(response?.data?.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching book by ID:", error);
        setIsLoading(false);
      }
    };

    fetchAllDiscount();

    return () => {
      // Cleanup or cancel any ongoing requests if necessary
    };
  }, [count]);

  return { data, isLoading };
};

export default useGetAllDiscount;
