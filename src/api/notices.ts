import axiosInstance from "./axiosInstance";

export const fetchNotices = async (url: string) => {
  const response = await axiosInstance.get(url);

  return {
    notices: response.data["hydra:member"],
    view: response.data["hydra:view"] ?? null,
  };
};
